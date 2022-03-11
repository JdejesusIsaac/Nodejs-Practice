//let is_Shop_Open = true;

//const { access } = require("fs");

//let order = ()=>{
  //  return new Promise((resolve, reject)=>{
   //     if(true){
     //       resolve();
       // }
        //else{
        //    reject();
      //  }
        
   // })
//}

// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()


async function order(){
    try {
        await abc;
    } catch (error) {
        console.log("abc doesnt exiist,", error);
        
    }finally{
        console.log("runs code anyway")
    }
}

// for then handler we have to shoot arrow funct. "memba to take off semicolon from invoked func
order().then(() =>{
    console.log("abc not here sucka");
})

