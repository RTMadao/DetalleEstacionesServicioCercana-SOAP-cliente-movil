function barraProgreso(jugador, puntos){
    $(`#${jugador}`).css('width', puntos + '%');
}

function obtenerNumero(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var app = new Vue({
    el: '#app',
    data: {
        jugador1: {
            preguntasAcertadas: 0,
            puntos: 0,
            nombre: '',
            icono: ''
        },
        jugador2: {
            preguntasAcertadas: 0,
            puntos: 0,
            nombre: '',
            icono: ''
        },
        preguntas: [],
        pregunta:[],
        puntos: 0,
        turno: 1
    },
    methods:{
        nuevaPartida(){
            this.limpiar();
            barraProgreso('j1', this.jugador1.puntos)
            barraProgreso('j2', this.jugador2.puntos)
            this.preguntas = listaPreguntas;
            this.preguntar();
        },
        limpiar(){
            this.jugador1 = {
                preguntasAcertadas: 0,
                puntos: 0,
                nombre: '',
                icono: ''   
            }
            this.jugador2 = {
                preguntasAcertadas: 0,
                puntos: 0,
                nombre: '',
                icono: ''
            }  
            this.pregunta = []
            this.preguntas = [] 
        },
        preguntar(){
            let n = obtenerNumero(this.preguntas.length,0)
            this.pregunta = this.preguntas.splice(n,1);
            this.puntos = obtenerNumero(16,5);
        },
        respuesta(opcion){
            if(this.pregunta[0].opciones[opcion].esCorrecta){
                if(this.turno == 1){
                    this.jugador1.puntos += this.puntos;
                    this.jugador1.preguntasAcertadas ++
                    if (this.jugador1.puntos >= 100){
                        this.jugador1.puntos = 100
                        barraProgreso('j1', this.jugador1.puntos)
                        alert(this.jugador1.nombre + ' ha ganado!!!')
                    }                    
                    barraProgreso('j1', this.jugador1.puntos)
                }
                else{
                    this.jugador2.puntos += this.puntos;
                    this.jugador2.preguntasAcertadas ++
                    if (this.jugador2.puntos >= 100){
                        this.jugador2.puntos = 100
                        barraProgreso('j2', this.jugador2.puntos)
                        alert(this.jugador2.nombre + ' ha ganado!!!')
                    }                    
                    barraProgreso('j2', this.jugador2.puntos)
                }
            }
            else{
                if(this.turno == 1){
                    this.jugador1.puntos -= this.puntos;
                    if (this.jugador1.puntos < 0) this.jugador1.puntos = 0
                    barraProgreso('j1', this.jugador1.puntos)
                }
                else{
                    this.jugador2.puntos -= this.puntos;
                    if (this.jugador2.puntos < 0) this.jugador2.puntos = 0
                    barraProgreso('j2', this.jugador2.puntos)
                }
            }
            if(this.turno == 1) this.turno = 2
            else this.turno = 1 
            this.preguntar();
        }
    }

})

var listaPreguntas = [
    {
        pregunta: '¿Cuántos tentáculos tiene un pulpo? ',
        opciones: [
            {
                texto: 'a- 4',
                esCorrecta: false
            },
            {
                texto: 'b- 8',
                esCorrecta: true
            },
            {
                texto: 'c- 10',
                esCorrecta: false
            }
        ]
    }, 
    {
        pregunta: '¿En qué año llegó Cristóbal Colón a América?',
        opciones: [
            {
                texto: 'a- 1294',
                esCorrecta: false
            },
            {
                texto: 'b- 1490',
                esCorrecta: false
            },
            {
                texto: 'c- 1492',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿Cuál es el país más grande del mundo?',
        opciones: [
            {
                texto: 'a- Rusia',
                esCorrecta: true
            },
            {
                texto: 'b- China',
                esCorrecta: false
            },
            {
                texto: 'c- Estados Unidos',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'Aproximadamente, ¿qué porcentaje de la superficie de la Tierra es agua?',
        opciones: [
            {
                texto: 'a- 50%',
                esCorrecta: false
            },
            {
                texto: 'b- 70%',
                esCorrecta: true
            },
            {
                texto: 'c- 90%',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuál es la nación más pequeña del mundo?',
        opciones: [
            {
                texto: 'a- Corea del Sur',
                esCorrecta: false
            },
            {
                texto: 'b- Madagascar',
                esCorrecta: false
            },
            {
                texto: 'c-Vaticano',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿En qué país se usó la primera bomba atómica?',
        opciones: [
            {
                texto: 'a- Estados Unidos',
                esCorrecta: false
            },
            {
                texto: 'b- Japón',
                esCorrecta: true
            },
            {
                texto: 'c- Alemania',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿En qué guerra participó Juana de Arco?',
        opciones: [
            {
                texto: 'a- Guerra de los Cien Años',
                esCorrecta: true
            },
            {
                texto: 'b- Guerra de los Dos Pedros',
                esCorrecta: false
            },
            {
                texto: 'c- Guerra del Golfo',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuál es la cascada más alta del mundo?',
        opciones: [
            {
                texto: 'a- Olo´upena Falls, Hawaii',
                esCorrecta: false
            },
            {
                texto: 'b- Las Tres Hermanas, Perú',
                esCorrecta: false
            },
            {
                texto: 'c- Salto del Ángel, Venezuela',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿Quién escribió La Odisea?',
        opciones: [
            {
                texto: 'a- Homero',
                esCorrecta: true
            },
            {
                texto: 'b- Ulises',
                esCorrecta: false
            },
            {
                texto: 'c- Sócrates',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuál es la obra más importante de la literatura en español?',
        opciones: [
            {
                texto: 'a- Cien años de Soledad',
                esCorrecta: false
            },
            {
                texto: 'b- Don Quijote de la Mancha',
                esCorrecta: true
            },
            {
                texto: 'c- Rayuela',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Quién pintó el famoso cuadro La última cena?',
        opciones: [
            {
                texto: 'a- Leonardo Da Vinci',
                esCorrecta: true
            },
            {
                texto: 'b- Pablo Picasso',
                esCorrecta: false
            },
            {
                texto: 'c- Vincent Van Gogh',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cómo se llama el Himno Nacional de Francia?',
        opciones: [
            {
                texto: 'a- Himno Francés',
                esCorrecta: false
            },
            {
                texto: 'b- Canto a Francía',
                esCorrecta: false
            },
            {
                texto: 'c- La Marsellesa',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿Quién es denominado el Rey del Rock and Roll en Estados Unidos?',
        opciones: [
            {
                texto: 'a- Elvis Presley',
                esCorrecta: true
            },
            {
                texto: 'b- Michael Jackson',
                esCorrecta: false
            },
            {
                texto: 'c- Freddy Mercury',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿En qué año murió Kurt Cobain?',
        opciones: [
            {
                texto: 'a- 1992',
                esCorrecta: false
            },
            {
                texto: 'b- 1994',
                esCorrecta: true
            },
            {
                texto: 'c- 1996',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuál es el elemento químico más abundante en la corteza terrestre?',
        opciones: [
            {
                texto: 'a- Hidrógeno',
                esCorrecta: false
            },
            {
                texto: 'b- Oxígeno',
                esCorrecta: true
            },
            {
                texto: 'c- Sodio',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuál fue el primer metal que emplearon los seres humanos?',
        opciones: [
            {
                texto: 'a- Acero',
                esCorrecta: false
            },
            {
                texto: 'b- Oro',
                esCorrecta: false
            },
            {
                texto: 'c- Cobre',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿Cómo se denomina al tipo de triángulo que tiene sus tres lados iguales?',
        opciones: [
            {
                texto: 'a- Equilátero',
                esCorrecta: true
            },
            {
                texto: 'b- Isósceles',
                esCorrecta: false
            },
            {
                texto: 'c- Escaleno',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuál es el símbolo químico del oro?',
        opciones: [
            {
                texto: 'a- Or',
                esCorrecta: false
            },
            {
                texto: 'b- Au',
                esCorrecta: true
            },
            {
                texto: 'c- Gn',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuál es el animal más rápido del mundo?',
        opciones: [
            {
                texto: 'a- Tiburón',
                esCorrecta: false
            },
            {
                texto: 'b- Anaconda',
                esCorrecta: false
            },
            {
                texto: 'c- Guepardo',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿Cuál es el único mamífero que puede volar?',
        opciones: [
            {
                texto: 'a- Pingüino',
                esCorrecta: false
            },
            {
                texto: 'b- Murciélago',
                esCorrecta: true
            },
            {
                texto: 'c- Ornitorrinco',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuántos corazones tienen los pulpos?',
        opciones: [
            {
                texto: 'a- 1',
                esCorrecta: false
            },
            {
                texto: 'b- 2',
                esCorrecta: false
            },
            {
                texto: 'c- 3',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿Cuál es la rama de la biología que estudia las plantas?',
        opciones: [
            {
                texto: 'a- Jardinería',
                esCorrecta: false
            },
            {
                texto: 'b- Botánica',
                esCorrecta: true
            },
            {
                texto: 'c- Vivero',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuál es el nombre de la fobia hacia los roedores?',
        opciones: [
            {
                texto: 'a- Ailurofobia',
                esCorrecta: false
            },
            {
                texto: 'b- Ritifobia',
                esCorrecta: false
            },
            {
                texto: 'c- Musofobia',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿Cuál es una de las 7 maravillas del Mundo Antiguo?',
        opciones: [
            {
                texto: 'a- El Mausoleo de Halicarnaso',
                esCorrecta: true
            },
            {
                texto: 'b- Torre de Pisa',
                esCorrecta: false
            },
            {
                texto: 'c- Estadio Maracaná',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuántos colores se pueden apreciar en el arcoíris?',
        opciones: [
            {
                texto: 'a- 5',
                esCorrecta: false
            },
            {
                texto: 'b- 7',
                esCorrecta: true
            },
            {
                texto: 'c- 9',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuál es el animal que más humanos mata al año?',
        opciones: [
            {
                texto: 'a- Mosquito',
                esCorrecta: true
            },
            {
                texto: 'b- Serpiente',
                esCorrecta: false
            },
            {
                texto: 'c- Tiburon',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Qué civilización se considera la primera del mundo?',
        opciones: [
            {
                texto: 'a- Griega',
                esCorrecta: false
            },
            {
                texto: 'b- Sumeria',
                esCorrecta: true
            },
            {
                texto: 'c- China',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuál es el idioma oficial de los Estados Unidos?',
        opciones: [
            {
                texto: 'a- Ingles',
                esCorrecta: false
            },
            {
                texto: 'b- Ingles y Español',
                esCorrecta: false
            },
            {
                texto: 'c- No hay',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿Cómo se llama la civilización que construyó el Machu Picchu en Perú?',
        opciones: [
            {
                texto: 'a- Incas',
                esCorrecta: true
            },
            {
                texto: 'b- Mayas',
                esCorrecta: false
            },
            {
                texto: 'c- Aztecas',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Es la rana un reptil o un anfibio?',
        opciones: [
            {
                texto: 'a- Reptil',
                esCorrecta: false
            },
            {
                texto: 'b- Anfibio',
                esCorrecta: true
            },
            {
                texto: 'c- Ambos',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuál es el animal más grande que habita la Tierra?',
        opciones: [
            {
                texto: 'a- Rorcual común',
                esCorrecta: false
            },
            {
                texto: 'b- Calamar Gigante',
                esCorrecta: false
            },
            {
                texto: 'c- Ballena Azul',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿Cuál es el océano más grande?',
        opciones: [
            {
                texto: 'a- Pacífico',
                esCorrecta: true
            },
            {
                texto: 'b- Antartico',
                esCorrecta: false
            },
            {
                texto: 'c- Atlantico',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuál es el disco más vendido de la historia?',
        opciones: [
            {
                texto: 'a- Thriller - Michael Jackson',
                esCorrecta: false
            },
            {
                texto: 'b- The Wall - Pink Floyd',
                esCorrecta: false
            },
            {
                texto: 'c- Their Greatest Hits 1971-1975 - The Eagles',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿En qué se especializa la cartografía?',
        opciones: [
            {
                texto: 'a- Cartas',
                esCorrecta: false
            },
            {
                texto: 'b- Mapas',
                esCorrecta: true
            },
            {
                texto: 'c- Suelo de Catagos',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Si 50 es el 100%, ¿cuánto es el 90%?',
        opciones: [
            {
                texto: 'a- 35',
                esCorrecta: false
            },
            {
                texto: 'b- 40',
                esCorrecta: false
            },
            {
                texto: 'c- 45',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿Cuál es la moneda del Reino Unido?',
        opciones: [
            {
                texto: 'a- Libra',
                esCorrecta: true
            },
            {
                texto: 'b- Euro',
                esCorrecta: false
            },
            {
                texto: 'c- Dólar',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuál es el color que representa la esperanza?',
        opciones: [
            {
                texto: 'a- Morado',
                esCorrecta: false
            },
            {
                texto: 'b- Azul',
                esCorrecta: false
            },
            {
                texto: 'c- Verde',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿De qué estilo arquitectónico es la Catedral de Notre Dame en París?',
        opciones: [
            {
                texto: 'a- Gótico',
                esCorrecta: true
            },
            {
                texto: 'b- Renacentista',
                esCorrecta: false
            },
            {
                texto: 'c- Antiguo',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Con qué se fabricaba el pergamino?',
        opciones: [
            {
                texto: 'a- Hojas',
                esCorrecta: false
            },
            {
                texto: 'b- Piel de animales',
                esCorrecta: true
            },
            {
                texto: 'c- Pergaminos viejos',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Quién va a la cárcel?',
        opciones: [
            {
                texto: 'a- Imputado',
                esCorrecta: false
            },
            {
                texto: 'b- Acusado',
                esCorrecta: false
            },
            {
                texto: 'c- Condenado',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿Cómo le llaman a los textos de autores desconocidos?',
        opciones: [
            {
                texto: 'a- No titulados',
                esCorrecta: false
            },
            {
                texto: 'b- Anónimos',
                esCorrecta: true
            },
            {
                texto: 'c- Abandonados',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cómo se llama la estación espacial rusa?',
        opciones: [
            {
                texto: 'a- Mir',
                esCorrecta: true
            },
            {
                texto: 'b- Sputnik',
                esCorrecta: false
            },
            {
                texto: 'c- Novosti',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Qué era el Concorde?',
        opciones: [
            {
                texto: 'a- Una nave espacial',
                esCorrecta: false
            },
            {
                texto: 'b- Un avión supersónico',
                esCorrecta: true
            },
            {
                texto: 'c- Una estación de radio',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Quién es el protagonista de la película “Rocky”?',
        opciones: [
            {
                texto: 'a- Sylvester Stallone',
                esCorrecta: true
            },
            {
                texto: 'b- Jason Stathan',
                esCorrecta: false
            },
            {
                texto: 'c- Randy Couture',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuál es el metal más caro del mundo?',
        opciones: [
            {
                texto: 'a- Oro',
                esCorrecta: false
            },
            {
                texto: 'b- Platino',
                esCorrecta: false
            },
            {
                texto: 'c- Rodio',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿Quién “sabía que no sabía nada”?',
        opciones: [
            {
                texto: 'a- Sócrates',
                esCorrecta: false
            },
            {
                texto: 'b- Platón',
                esCorrecta: false
            },
            {
                texto: 'c- Anónimo',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿En qué país se encuentra el estadio de Wembley?',
        opciones: [
            {
                texto: 'a- Reino Unido',
                esCorrecta: true
            },
            {
                texto: 'b- Dinamarca',
                esCorrecta: false
            },
            {
                texto: 'c- Polonia',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cómo se llama el procedimiento de subir la bandera?',
        opciones: [
            {
                texto: 'a- Levantar',
                esCorrecta: false
            },
            {
                texto: 'b- Izar',
                esCorrecta: true
            },
            {
                texto: 'c- Alzar',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¿Cuándo se extinguieron los mamuts aproximadamente?',
        opciones: [
            {
                texto: 'a- 2000 años',
                esCorrecta: false
            },
            {
                texto: 'b- 3000 años',
                esCorrecta: false
            },
            {
                texto: 'c- 4000 años',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¿A qué velocidad viaja la luz?',
        opciones: [
            {
                texto: 'a- 2000 km/s',
                esCorrecta: false
            },
            {
                texto: 'b- 3000 km/s',
                esCorrecta: true
            },
            {
                texto: 'c- 4000 km/s',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: '¡Felicidades, has ganado varios puntos!',
        opciones: [
            {
                texto: 'a- ¿En serio?',
                esCorrecta: true
            },
            {
                texto: 'b- ¡Gracias!',
                esCorrecta: true
            },
            {
                texto: 'c- ¿Cuánto?',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: '¡Chale, has perdido varios puntos!',
        opciones: [
            {
                texto: 'a- Espera... ¿Qué?',
                esCorrecta: false
            },
            {
                texto: 'b- D:',
                esCorrecta: false
            },
            {
                texto: 'c- ¿Esto se podía?',
                esCorrecta: false
            }
        ]
    }
]