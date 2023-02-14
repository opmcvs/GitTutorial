
// Destructuring using a function 
const band = {
    vocals:"rober plant",
    guitar:"Jimmy page",
};

function sings({vocals}){
    return `${vocals}sings`;

}

console.log(sings(band));
















//  only came about in 2015 in ES6.
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

//  hasownproperty to check the property in the object.

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
bake(){
    console.log (
        Baking
    )
}

myPizza.setCrust("Thin");
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
//  part of classes
//  parent class is above or AKA super when use below the keyword
// child class is 
//  take note of the get and set()uses get for the console.log set for set


class SpecialtyPizza extends Pizza{
     // the constructor would act like a parameter when called. 
cosntructor(pizzaSize){ 
    super(pizzaSize);
    this.type = "The Works";
}
sllice(){
    console.log(`${this.type} ${this.size} pizza has 8 slices`);
}
}

//  now using the child class rather the parent class
 const mySpecialty = new SpecialtyPizza ("medium");
 mySpecialty.sllice();
//  output - Our the works medium pizza has 8 slices. 



// Naming conventionsClass pizza1 {
//  when you this this._size meaning keep it private the class
Constructor(pizzaType, pizzasize){
This._type = pizzaType;
This._size = medium;
This._crust = "original";
this._toppings = [];
}
getToppings(){
    return this ._toppings; 
}
 setToppings(topping){
    this._toppings.push(topping);
 }
// Another to be private 
// through factory function another way to create class as well.
function pizzaFactory (pizzaSize){
    const crust = "orginal";
    const size = pizzaSize;
    return {
        bake:()=>console.log  (`Baking a ${size} ${crust} crust pizza/}`)
    };
}
 const myPizza = pizzaFactory("small");
 myPizza.bake();

//   new method 
//  classes now support public and private fields. ex.
// Why would you make a field Private?
// Fields should be declared private unless 
// there is a good reason for not doing so. 
// One of the guiding principles of lasting value 
// in programming is "Minimize ripple effects by keeping secrets." 
// When a field is private , the caller cannot usually get 
// inappropriate direct access to the field.
class pizza2 {
    // public field above the contructor
    crust= "original";
    // private field indicated by #
    #sauce = "traditional";
    #size;
Constructor( pizzasize){

This.#size = pizzasize;

}

getCrust(){
    return this .crust; 
}
 setCrust(pizzaCrust){
    this.crust= pizzaCrust;
 }
 hereYouGo (){
    console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`);
 }
}
const mypizza = newPizza("large");
myPizza.hereYouGo();
// output- Here's your original traditional sauce large pizza . 