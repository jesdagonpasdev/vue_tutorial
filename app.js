//Declaración de una instancia de Vue
new Vue({ 
    el:'#vue-app',          // Asocio la instancia al div que lo va a contener todo
    data: {                 // Declaracion de los datos que tendrá mi instancia y se bindearán al HTML.
        name: 'Jesus',
        job: 'Developer'
    },
    methods: {              // Declaración de los métodos de mi instancia
        greet: function(time){
            // Para insertar un valor de una variable de "data", valdría simplemente con poner this.name para extraerlo.
            return 'Good ' + time + ' ' + this.name;
        }
    }
}); 