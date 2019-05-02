
let dns = require('dns');
dns.resolve4('www.mum.edu', function(err, add){
    if(err) throw err;
    console.log(add);

})


//----------------using promise--------

let dns = require('dns');
dns.resolve4('www.mum.edu', function(err, add){
    if(err) throw err;
    //console.log(add);

})

const {promisify} = require('util');

const x = promisify(dns.resolve4);
x('www.mum.edu')
    .then(y=>{console.log(y);})
.catch(err=>{console.error(err);});

//----------------using async/await--------

let dns = require('dns');

async function no() {

    try {
        const {promisify} = require('util');
        const address = await promisify(dns.resolve4)('www.mum.edu');
        console.log(address);
    } catch (e) {
        console.log(e);


    }
}
no();


