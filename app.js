//Declaración de una instancia de Vue
new Vue({ 
    el:'#vue-app',          // Asocio la instancia al div que lo va a contener todo
    data: {                 // Declaracion de los datos que tendrá mi instancia y se bindearán al HTML.
        age: 25,
        x: 0,
        y: 0
    },
    methods: {              // Declaración de los métodos de mi instancia
        add: function(inc){
            this.age += inc;
        },
        substract: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert('You clicked me');
        }
    }
}); 