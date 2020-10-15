## `makeCoffeeMachine()`
​
should:
​
return an Object
​
```js
typeof coffeeMachineMaker(); // -----> 'object'
```
​
have a beans property which is equal to the first argument it is given
​
```js
const wakeUpMachine = makeCoffeeMachine("Java Lava");
wakeUpMachine.beans; // -----> 'Java Lava'
```
​
have a waterLevel property which instantiates as 0
​
```js
wakeUpMachine.waterLevel; // -----> 0
```
​
have a maxWaterLevel property that is 5 by default but can be passed as an argument
​
```js
const wakeUpMachine = makeCoffeeMachine("Java Lava");
wakeUpMachine.maxWaterLevel; //----- 5
const biggerWakeUpMachine = makeCoffeeMachine("Java Lava", 10);
biggerWakeUpMachine.maxWaterLevel; // ----> 10
```
​
have an `addWater` method which will increase the waterLevel by 1 each time its called but not above the maxWaterLevel
​
```js
wakeUpMachine.addWater();
​
wakeUpMachine.waterLevel; //----> 1
​
wakeUpMachine.addWater();
wakeUpMachine.addWater();
wakeUpMachine.addWater();
wakeUpMachine.addWater();
wakeUpMachine.addWater();
​
wakeUpMachine.waterLevel; //----> 5
```
​
have a `makeCoffee` method which will
​
`return`: `"Please add water"` if the waterLevel is 0
​
`return`: `"An Espresso made with <whatever beans>"` if invoked with a string of `"Espresso"`
​
`return`: `"An Americano made with <whatever beans>"` if invoked with anything else or no arguments
reduce the waterLevel by each time its called but not below 0
​
```js
const wakeUpMachine = makeCoffeeMachine("Java Lava");
​
wakeUpMachine.makeCoffee(); // -----> "Please add water"
​
wakeUpMachine.addWater();
wakeUpMachine.makeCoffee(); // -----> "An Americano made with Java Lava"
​
wakeUpMachine.waterLevel; // ----> 0
​
wakeUpMachine.addWater();
wakeUpMachine.makeCoffee("Espresso"); // -----> "An Espresso made with Java Lava"
