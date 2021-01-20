//Declaración de una instancia de Vue
new Vue({ 
    el:'#vue-app',          // Asocio la instancia al div que lo va a contener todo
    data: {                 // Declaracion de los datos que tendrá mi instancia y se bindearán al HTML.

    },
    methods: {              // Declaración de los métodos de mi instancia
        logName: function() {
            console.log('you entered your name');
        },
        logAge: function() {
            console.log('you entered your age');
        }
    }
}); 