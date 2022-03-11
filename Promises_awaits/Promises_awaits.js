let stocks = {
    Fruits: ["strawberry", "grapes", "bananas", "apples"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
   };
  
  //to place order .. we need fruit name, so we pass it as variable argument  to order func!
  let is_Shop_Open = true;
  //arrow func
  let order = (time, work) => {
    // first we make a promise
    return new Promise( (resolve, reject)=>{
      
      if(is_Shop_Open){
        setTimeout(()=>{
          resolve( work() );
        }, time)
       
      }
      else{
        reject(console.log('our shop is closed'))
      }
      
    });
   
    
  };
  
  order(2000, ()=> console.log(`${stocks.Fruits[0]}`))
    .then(() => {
      return order(0000, ()=> console.log('production has started'))
  })
  
  .then(()=>{
    return order(2000, ()=> console.log('Fruit was cut'))
  })
  
  .then(()=>{
     return order(1000, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
  
   })
  
  .then(()=>{
    return order(1000, ()=> console.log("Machine has started"))
  })
  
  .then(()=>{
    return order(2000, ()=> console.log(`You chose a ${stocks.holder[2]} to hold icecream`))
    
  })
  
  .then(()=>{
    return order(3000, ()=> console.log(`You chose ${stocks.toppings[0]} topping!`))
    
  })
  
  .then(()=>{
    return order(3000, ()=> console.log(" your Ice cream is served"))
    
  })


// runs if reject called or if switched to false 
  .catch(()=>{
      console.log('customer left')
  })


  // run whether our promises resolves or rejected
  .finally(()=>{
      console.log('day ended, shop is closed')
  })
  
  
  
  
  