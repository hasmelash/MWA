var EventEmitter = require('events');
class Button extends EventEmitter {
    constructor() {
        super();
        this.label = "message";
    }

    click() {
        console.log();
        this.emit("x", {label: this.label, 'page-x': 100, 'page-y': 100});
    }
}       
    let btn = new Button();
        btn.on("x", function(y){
            console.log(y);
    });
        
btn.click();




