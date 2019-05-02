var EventEmitter = require('events');
class Gym extends EventEmitter{
    constructor(){
        super();

    }
    boom(){
        this.emit('boomboom', 'Athlet is working out')
    }
}
let  ym = new Gym();
ym.on('boomboom',  function(x){
    setInterval(
        function(){
            console.log(x);
        }

        ,1000);

});
ym.boom();
