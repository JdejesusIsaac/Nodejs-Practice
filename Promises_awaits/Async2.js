

let stocks = {
    Fruits: ["strawberry", "grapes", "bananas", "apples"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
   };
  ///regular function not arrow with promise in it.. or callback?
  //to place order .. we need fruit name, so we pass it as variable argument  to order func!
  let is_Shop_Open = true;

  // relationship between time and work
  function time(ms){
      return new Promise((resolve, reject)=>{
          if(is_Shop_Open){
              setTimeout(resolve,ms)  ///relationship between time and work
          }
          else{
              //notify if shop closed
              reject(console.log("shop is closed"))
          }
      });
  }

  /// now lets wrtie aync func for kitchen
  async function kitchen(){
      try {
          // we await time() we set time inside
          await time(2000)
          console.log(`${stocks.Fruits[3]}`)

          await time(0000)
          console.log("Production has started")

          await time(1000)
          console.log(`${stocks.liquid[0]} added to ${stocks.liquid[1]}`)

          await time(1000)
          console.log("Started Machine")

          await time(2000)
          console.log(`Your Icecream will be served in a ${stocks.holder[1]}`)

          await time(3000)
          console.log(`Topping selected is ${stocks.toppings[0]}`)

          await time(2000)
          console.log("served icecream")

          
      } catch (error) {
          console.log("customer left", error)
          
      }
      finally{
          console.log("day ended, shop is closed")

      }
  }

  // trigger
  kitchen().then(()=>{
      console.log("u herb")
  })