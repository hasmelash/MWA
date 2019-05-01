

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
//     return new Promise (function(resolve){
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

// String.prototype.filterWords=async function(banned){
//     let char='*';
//     let original =this;
//     let splited = this.split(" ");
//     try{
//             var result = await function(){
//                 return new Promise (function(resolve, reject){
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
//             }
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

    const{from}=rxjs;
    const {map}=observable.operator;

    from(splited)
        .pipe(
            map(word=>{
                if(banned.includes(word)){
                    original = original.replace(word, char.repeat(word.length));
                }
            })
        )
        .subscribe(
            original=>console.log(original)
        )
}
"This house is nice house !".filterWords(["house","nice"]);

//method 2 -----from promise to observable----

String.prototype.filterWords=function(banned){
    let char='*';
    let original =this;
    let splited = this.split(" ");

    const{from}=rxjs;
    const {map}=observable.operator;

    let promise = return new Promise (function(resolve, reject){
                    if(original!==null || original!==""){
                        splited.map(word=>{
                            if(banned.includes(word)){
                                original = original.replace(word, char.repeat(word.length));
                            }
                        })
                        resolve(original);
                    }else {
                        reject(new Error());
                    }
                });

    from(promise)
        .subscribe(
            original=>console.log(original)
        )
}
"This house is nice house !".filterWords(["house","nice"]);