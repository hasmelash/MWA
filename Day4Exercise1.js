const {Observable} = require('rxjs');
const os = require('os');
const obs$ = Observable.create(function (observer) {
            console.log(os.totalmem());
            console.log("checking your system...");
            const freeMemory = os.totalmem()/(1024*1024*1024);
            
            if(freeMemory>=4 && os.cpus().length>=2){
                console.log("System is checked successfully.\n processor has " + os.cpus().length + " cores and system memory is " + freeMemory + "GB")
            }
            if(freeMemory<4){
                console.log("This app needs at least 4 GB of RAM");
            }
            if(os.cpus().length<2){
                console.log("Processor is not supported");
            }
            //console.log(os.cpus());
          
         //console.log(os.freemem());
         complete: ()=>observer.complete();
});

obs$
    .subscribe({
            next: (value) => console.log(value),
            error: (err) => console.error(err),
            complete: () =>console.info('DONE')

    });