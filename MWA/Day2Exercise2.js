Array.prototype.even=async function(){

    try {
        var arr = await this.filter(n => n % 2 === 0);
        console.log(arr);
    }catch (e) {
        console.log(e);
    }

}
Array.prototype.odd=async function(){

    try {
        var arr = await this.filter(n => n % 2 === 1);
        console.log(arr);
    }catch (e) {
        console.log(e);
    }

}
console.log("start");
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log("end");