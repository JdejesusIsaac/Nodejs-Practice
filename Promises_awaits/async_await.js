let stocks = {
    Fruits: ["strawberry", "grapes", "bananas", "apples"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
   };
  
  //to place order .. we need fruit name, so we pass it as variable argument  to order func!
  let is_Shop_Open = true;

  // making a small promise asking customer what kind of ingredient they would like to have

  let toppings_choice = () => {
      return new Promise((resolve, reject)=>{
          setTimeout(()=>{
              resolve(console.log("whichTopping would you like"))
              
          }, 3000)
      });
  };

  async function kitchen(){
      console.log("A")
      console.log("B")
      console.log("C")
      
      await toppings_choice()
      
      console.log("D")
      console.log("E")
  }

  kitchen()

  console.log("cleaning the dishes")
  console.log("clening the tables")
  console.log("taking other stuff out")




