Classes in 2015 es6
•	take note of the parameter in the constructor

 Class pizza{
Constructor(pizzaType){
This.type = pizzaType;
This.size = medium;
This.crust = original;
}
Bake(){------------note function but no need arrow or word function because inside 
Console.log(`${this.size} $ {this.crust}  ${this.type}crust pizza .);
}
}

Const myPizza = new Pizza(“Mushroom”);
myPizza.type = “supreme”;- changing the object  in this constructor.
myPizza.bake(); = output -medium original mushroom crust pizza.
Console.log(myPizza.type);- output - Supreme

But using the above method or directly getting the object is not advisable
 Use getter and setter, after this you can use dot notation.
Class pizza{
Constructor(pizzaType){
This.type = pizzaType;
This.size = medium;
This.crust = original;
}
*Get pizzaCrust(){---- instead of this you can make this 
                         to a function  and the setter
Return  this.crust;
}
Set pizzaCrust (pizzaCrust) {
This.crust = pizzaCrust;
Bake(){------------note function but no need arrow or word function because inside 
Console.log(`${this.size} $ {this.crust}  ${this.type}crust pizza .);
}
}

Const myPizza = new Pizza("Mushroom");
myPizza.pizzacrust  = "thin"; changes this once unce function 
//   myPizza .setCrust("thin");
myPizza.bake();  output -medium original mushroom crust pizza.
// Console.log(myPizza.type);-         output – Supreme
// Console.log(myPizzaCrust); -         Output – thin--- use for setting the object property to change by getter and setter.


Class pizza1 {
Constructor(pizzaType, pizzasize){
This.type = pizzaType;
This.size = medium;
This.crust = "original";
this.toppings = [];
}
getToppings(){
    return this .toppings; 
}
 setToppings(topping){
    this.toppings.push(topping);
 }
}