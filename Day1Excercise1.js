

// String.prototype.filterWords = function(banned){
//     let char='*';
//     let original =this;
//     let splited = this.split(" ");
//     splited.map(word=>{
//         if(banned.includes(word)){
//             original = original.replace(word, char.repeat(word.length));
//         }
//     })
//
//     console.log(original);
// };
//
// "This house is nice !".filterWords(["house","nice"]);
//
// //----------------------------PROMISE----------------------------
//
// String.prototype.filterWords=function(banned){
//     let char='*';
//     let original =this;
//     let splited = this.split(" ");
//     return new Promise (function(resolve, reject){
//         if(original!==null || original!==""){
//             splited.map(word=>{
//                 if(banned.includes(word)){
//                     original = original.replace(word, char.repeat(word.length));
//                 }
//             })
//             resolve(original);
//         }else {
//             reject(new Error());
//         }
//     });
//
// };
// "This house is nice house !".filterWords(["house","nice"])
//     .then(x=>console.log(x))
//     .catch(e=>console.error(e));

//------------------------ASYNC/AWAIT--------------------------------------
//
// String.prototype.filterWords=async function(banned){
//     let char='*';
//     let original =this;
//     let splited = this.split(" ");
//     try{
//             var result = await function(){
//                 // return new Promise (function(resolve, reject){
//                 //     if(original!==null || original!==""){
//                         splited.map(word=>{
//                             if(banned.includes(word)){
//                                 original = original.replace(word, char.repeat(word.length));
//                             }
//                         });
//                         //resolve(original);
//                     // }else {
//                     //     reject(new Error());
//                     // }
//             return original;
//             };
//
//
//            console.log(result());
//         }catch (e) {
//                 console.log(e);
//          }
//
//
// };
// "This house is nice house !".filterWords(["house","nice"]);

//--------------------------Observable------------------------------------
//method 1 ---from Array to observable
String.prototype.filterWords=function(banned){
    let char='*';
    let original =this;
    let splited = this.split(" ");
   // let x;
    const{from}=require('rxjs');
    const {map}=require('rxjs/operators');
    const {filter} =require('rxjs/operators');

    from(splited)
        .pipe(
            filter(x =>banned.includes(x)),
            map(word=>{

                   // console.log(word);
                    original = original.replace(word, "***");

                    //console.log(original);

            })
        )
        .subscribe(
        (word)=>console.log(word)
        )
}
"This house is nice house !".filterWords(["house","nice"]);

//method 2 -----from promise to observable----

// String.prototype.filterWords=function(banned){
//     let char='*';
//     let original =this;
//     let splited = this.split(" ");
//
//     const{from}=require('rxjs');
//     const {map}=require('rxjs/operators');
//
//     let promise = new Promise (function(resolve, reject){
//                     if(original!==null || original!==""){
//                         splited.map(word=>{
//                             if(banned.includes(word)){
//                                 original = original.replace(word, char.repeat(word.length));
//                             }
//                         })
//                         resolve(original);
//                     }else {
//                         reject(new Error());
//                     }
//                 });
//
//     from(promise)
//         .subscribe(
//             original=>console.log(original)
//         )
// }
// "This house is nice house !".filterWords(["house","nice"]);

