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
        puntos:0,
        turno: 1
    },
    methods:{
        nuevaPartida(){
            this.limpiar();
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
                        alert(this.jugador1.nombre + ' ha ganado!!!')
                    }                    
                    barraProgreso('j1', this.jugador1.puntos)
                }
                else{
                    this.jugador2.puntos += this.puntos;
                    this.jugador2.preguntasAcertadas ++
                    if (this.jugador2.puntos >= 100){
                        this.jugador2.puntos = 100
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
        id: 1,
        pregunta: '¿Cuántos tentáculos tiene un pulpo? ',
        opciones: [
            {
                id: 1,
                texto: 'a- 4',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- 8',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- 10',
                esCorrecta: false
            }
        ]
    }, 
    {
        id: 2,
        pregunta: '¿En qué año llegó Cristóbal Colón a América?',
        opciones: [
            {
                id: 1,
                texto: 'a- 1294',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- 1490',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- 1492',
                esCorrecta: true
            }
        ]
    },
    {
        id: 3,
        pregunta: '¿Cuál es el país más grande del mundo?',
        opciones: [
            {
                id: 1,
                texto: 'a- Rusia',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- China',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Estados Unidos',
                esCorrecta: false
            }
        ]
    },
    {
        id: 4,
        pregunta: 'Aproximadamente, ¿qué porcentaje de la superficie de la Tierra es agua?',
        opciones: [
            {
                id: 1,
                texto: 'a- 50%',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- 70%',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- 90%',
                esCorrecta: false
            }
        ]
    },
    {
        id: 5,
        pregunta: '¿Cuál es la nación más pequeña del mundo?',
        opciones: [
            {
                id: 1,
                texto: 'a- Corea del Sur',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Madagascar',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c-Vaticano',
                esCorrecta: true
            }
        ]
    },
    {
        id: 6,
        pregunta: '¿En qué país se usó la primera bomba atómica?',
        opciones: [
            {
                id: 1,
                texto: 'a- Estados Unidos',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Japón',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- Alemania',
                esCorrecta: false
            }
        ]
    },
    {
        id: 7,
        pregunta: '¿En qué guerra participó Juana de Arco?',
        opciones: [
            {
                id: 1,
                texto: 'a- Guerra de los Cien Años',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- Guerra de los Dos Pedros',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Guerra de los Dos Pedros',
                esCorrecta: false
            }
        ]
    },
    {
        id: 8,
        pregunta: '¿Cuál es la cascada más alta del mundo?',
        opciones: [
            {
                id: 1,
                texto: 'a- Olo´upena Falls, Hawaii',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Las Tres Hermanas, Perú',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Salto del Ángel, Venezuela',
                esCorrecta: true
            }
        ]
    },
    {
        id: 9,
        pregunta: '¿Quién escribió La Odisea?',
        opciones: [
            {
                id: 1,
                texto: 'a- Homero',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- Ulises',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Sócrates',
                esCorrecta: false
            }
        ]
    },
    {
        id: 10,
        pregunta: '¿Cuál es la obra más importante de la literatura en español?',
        opciones: [
            {
                id: 1,
                texto: 'a- Cien años de Soledad',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Don Quijote de la Mancha',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- Rayuela',
                esCorrecta: false
            }
        ]
    },
    {
        id: 11,
        pregunta: '¿Quién pintó el famoso cuadro La última cena?',
        opciones: [
            {
                id: 1,
                texto: 'a- Leonardo Da Vinci',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- Pablo Picasso',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Vincent Van Gogh',
                esCorrecta: false
            }
        ]
    },
    {
        id: 12,
        pregunta: '¿Cómo se llama el Himno Nacional de Francia?',
        opciones: [
            {
                id: 1,
                texto: 'a- Himno Francés',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Canto a Francía',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- La Marsellesa',
                esCorrecta: true
            }
        ]
    },
    {
        id: 13,
        pregunta: '¿Quién es denominado el Rey del Rock and Roll en Estados Unidos?',
        opciones: [
            {
                id: 1,
                texto: 'a- Elvis Presley',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- Michael Jackson',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Freddy Mercury',
                esCorrecta: false
            }
        ]
    },
    {
        id: 14,
        pregunta: '¿En qué año murió Kurt Cobain?',
        opciones: [
            {
                id: 1,
                texto: 'a- 1992',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- 1994',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- 1996',
                esCorrecta: false
            }
        ]
    },
    {
        id: 15,
        pregunta: '¿Cuál es el elemento químico más abundante en la corteza terrestre?',
        opciones: [
            {
                id: 1,
                texto: 'a- Hidrógeno',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Oxígeno',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- Sodio',
                esCorrecta: false
            }
        ]
    },
    {
        id: 16,
        pregunta: '¿Cuál fue el primer metal que emplearon los seres humanos?',
        opciones: [
            {
                id: 1,
                texto: 'a- Acero',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Oro',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Cobre',
                esCorrecta: true
            }
        ]
    },
    {
        id: 17,
        pregunta: '¿Cómo se denomina al tipo de triángulo que tiene sus tres lados iguales?',
        opciones: [
            {
                id: 1,
                texto: 'a- Equilátero',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- Isósceles',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Escaleno',
                esCorrecta: false
            }
        ]
    },
    {
        id: 18,
        pregunta: '¿Cuál es el símbolo químico del oro?',
        opciones: [
            {
                id: 1,
                texto: 'a- Or',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Au',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- Gn',
                esCorrecta: false
            }
        ]
    },
    {
        id: 19,
        pregunta: '¿Cuál es el animal más rápido del mundo?',
        opciones: [
            {
                id: 1,
                texto: 'a- Tiburón',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Anaconda',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Guepardo',
                esCorrecta: true
            }
        ]
    },
    {
        id: 20,
        pregunta: '¿Cuál es el único mamífero que puede volar?',
        opciones: [
            {
                id: 1,
                texto: 'a- Pingüino',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Murciélago',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- Ornitorrinco',
                esCorrecta: false
            }
        ]
    },
    {
        id: 21,
        pregunta: '¿Cuántos corazones tienen los pulpos?',
        opciones: [
            {
                id: 1,
                texto: 'a- 1',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- 2',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- 3',
                esCorrecta: true
            }
        ]
    },
    {
        id: 22,
        pregunta: '¿Cuál es la rama de la biología que estudia las plantas?',
        opciones: [
            {
                id: 1,
                texto: 'a- Jardinería',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Botánica',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- Vivero',
                esCorrecta: false
            }
        ]
    },
    {
        id: 23,
        pregunta: '¿Cuál es el nombre de la fobia hacia los roedores?',
        opciones: [
            {
                id: 1,
                texto: 'a- Ailurofobia',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Ritifobia',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Musofobia',
                esCorrecta: true
            }
        ]
    },
    {
        id: 24,
        pregunta: '¿Cuál es una de las 7 maravillas del Mundo Antiguo?',
        opciones: [
            {
                id: 1,
                texto: 'a- El Mausoleo de Halicarnaso',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- Torre de Pisa',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Estadio Maracaná',
                esCorrecta: false
            }
        ]
    },
    {
        id: 25,
        pregunta: '¿Cuántos colores se pueden apreciar en el arcoíris?',
        opciones: [
            {
                id: 1,
                texto: 'a- 5',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- 7',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- 9',
                esCorrecta: false
            }
        ]
    },
    {
        id: 26,
        pregunta: '¿Cuál es el animal que más humanos mata al año?',
        opciones: [
            {
                id: 1,
                texto: 'a- Mosquito',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- Serpiente',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Tiburon',
                esCorrecta: false
            }
        ]
    },
    {
        id: 27,
        pregunta: '¿Qué civilización se considera la primera del mundo?',
        opciones: [
            {
                id: 1,
                texto: 'a- Griega',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Sumeria',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- China',
                esCorrecta: false
            }
        ]
    },
    {
        id: 28,
        pregunta: '¿Cuál es el idioma oficial de los Estados Unidos?',
        opciones: [
            {
                id: 1,
                texto: 'a- Ingles',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Ingles y Español',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- No hay',
                esCorrecta: true
            }
        ]
    },
    {
        id: 29,
        pregunta: '¿Cómo se llama la civilización que construyó el Machu Picchu en Perú?',
        opciones: [
            {
                id: 1,
                texto: 'a- Incas',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- Mayas',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Aztecas',
                esCorrecta: false
            }
        ]
    },
    {
        id: 30,
        pregunta: '¿Es la rana un reptil o un anfibio?',
        opciones: [
            {
                id: 1,
                texto: 'a- Reptil',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Anfibio',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- Ambos',
                esCorrecta: false
            }
        ]
    },
    {
        id: 31,
        pregunta: '¿Cuál es el animal más grande que habita la Tierra?',
        opciones: [
            {
                id: 1,
                texto: 'a- Rorcual común',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Calamar Gigante',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Ballena Azul',
                esCorrecta: true
            }
        ]
    },
    {
        id: 32,
        pregunta: '¿Cuál es el océano más grande?',
        opciones: [
            {
                id: 1,
                texto: 'a- Pacífico',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- Antartico',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Atlantico',
                esCorrecta: false
            }
        ]
    },
    {
        id: 33,
        pregunta: '¿Cuál es el disco más vendido de la historia?',
        opciones: [
            {
                id: 1,
                texto: 'a- Thriller - Michael Jackson',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- The Wall - Pink Floyd',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Their Greatest Hits 1971-1975 - The Eagles',
                esCorrecta: true
            }
        ]
    },
    {
        id: 34,
        pregunta: '¿En qué se especializa la cartografía?',
        opciones: [
            {
                id: 1,
                texto: 'a- Cartas',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Mapas',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- Suelo de Catagos',
                esCorrecta: false
            }
        ]
    },
    {
        id: 35,
        pregunta: '¿Si 50 es el 100%, ¿cuánto es el 90%?',
        opciones: [
            {
                id: 1,
                texto: 'a- 35',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- 40',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- 45',
                esCorrecta: true
            }
        ]
    },
    {
        id: 36,
        pregunta: '¿Cuál es la moneda del Reino Unido?',
        opciones: [
            {
                id: 1,
                texto: 'a- Libra',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- Euro',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Dólar',
                esCorrecta: false
            }
        ]
    },
    {
        id: 37,
        pregunta: '¿Cuál es el color que representa la esperanza?',
        opciones: [
            {
                id: 1,
                texto: 'a- Morado',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Azul',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Verde',
                esCorrecta: true
            }
        ]
    },
    {
        id: 38,
        pregunta: '¿De qué estilo arquitectónico es la Catedral de Notre Dame en París?',
        opciones: [
            {
                id: 1,
                texto: 'a- Gótico',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- Renacentista',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Antiguo',
                esCorrecta: false
            }
        ]
    },
    {
        id: 39,
        pregunta: '¿Con qué se fabricaba el pergamino?',
        opciones: [
            {
                id: 1,
                texto: 'a- Hojas',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Piel de animales',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- Pergaminos viejos',
                esCorrecta: false
            }
        ]
    },
    {
        id: 40,
        pregunta: '¿Quién va a la cárcel?',
        opciones: [
            {
                id: 1,
                texto: 'a- Imputado',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Acusado',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Condenado',
                esCorrecta: true
            }
        ]
    },
    {
        id: 41,
        pregunta: '¿Cómo le llaman a los textos de autores desconocidos?',
        opciones: [
            {
                id: 1,
                texto: 'a- No titulados',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Anónimos',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- Abandonados',
                esCorrecta: false
            }
        ]
    },
    {
        id: 42,
        pregunta: '¿Cómo se llama la estación espacial rusa?',
        opciones: [
            {
                id: 1,
                texto: 'a- Mir',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- Sputnik',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Novosti',
                esCorrecta: false
            }
        ]
    },
    {
        id: 43,
        pregunta: '¿Qué era el Concorde?',
        opciones: [
            {
                id: 1,
                texto: 'a- Una nave espacial',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Un avión supersónico',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- Una estación de radio',
                esCorrecta: false
            }
        ]
    },
    {
        id: 44,
        pregunta: '¿Quién es el protagonista de la película “Rocky”?',
        opciones: [
            {
                id: 1,
                texto: 'a- Sylvester Stallone',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- Jason Stathan',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Randy Couture',
                esCorrecta: false
            }
        ]
    },
    {
        id: 45,
        pregunta: '¿Cuál es el metal más caro del mundo?',
        opciones: [
            {
                id: 1,
                texto: 'a- Oro',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Platino',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Rodio',
                esCorrecta: true
            }
        ]
    },
    {
        id: 46,
        pregunta: '¿Quién “sabía que no sabía nada”?',
        opciones: [
            {
                id: 1,
                texto: 'a- Sócrates',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Platón',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Anónimo',
                esCorrecta: true
            }
        ]
    },
    {
        id: 47,
        pregunta: '¿En qué país se encuentra el estadio de Wembley?',
        opciones: [
            {
                id: 1,
                texto: 'a- Reino Unido',
                esCorrecta: true
            },
            {
                id: 2,
                texto: 'b- Dinamarca',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- Polonia',
                esCorrecta: false
            }
        ]
    },
    {
        id: 48,
        pregunta: '¿Cómo se llama el procedimiento de subir la bandera?',
        opciones: [
            {
                id: 1,
                texto: 'a- Levantar',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- Izar',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- Alzar',
                esCorrecta: false
            }
        ]
    },
    {
        id: 49,
        pregunta: '¿Cuándo se extinguieron los mamuts aproximadamente?',
        opciones: [
            {
                id: 1,
                texto: 'a- 2000 años',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- 3000 años',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c- 4000 años',
                esCorrecta: true
            }
        ]
    },
    {
        id: 50,
        pregunta: '¿A qué velocidad viaja la luz?',
        opciones: [
            {
                id: 1,
                texto: 'a- 2000 km/s',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- 3000 km/s',
                esCorrecta: true
            },
            {
                id: 3,
                texto: 'c- 4000 km/s',
                esCorrecta: false
            }
        ]
    }
]