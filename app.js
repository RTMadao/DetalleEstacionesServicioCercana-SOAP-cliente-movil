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
        pregunta:[{}],
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
            this.pregunta = null
            this.preguntas = [] 
        },
        preguntar(){
            let n = obtenerNumero(this.preguntas.length,0)
            console.log(n)
            this.pregunta = this.preguntas.splice(n,1);
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
    }, {
        id: 2,
        pregunta: '¿En qué año llegó Cristóbal Colón a América?',
        opciones: [
            {
                id: 1,
                texto: 'a-1294',
                esCorrecta: false
            },
            {
                id: 2,
                texto: 'b- 1490',
                esCorrecta: false
            },
            {
                id: 3,
                texto: 'c-1492',
                esCorrecta: true
            }
        ]
    }
]