module.exports = {makeCoffeeMachine}

function makeCoffeeMachine (beans, waterLevel){

    const machine = {}

    machine.beans = beans;
    machine.waterLevel = 0;
    if( waterLevel ) {
    machine.maxWaterLevel = waterLevel 
    } else {
        machine.maxWaterLevel = 5
    };

    machine.addWater = addWater;

    machine.makeCoffee = makeCoffee;

    return machine;
}

const addWater = function (){

    if (this.waterLevel < this.maxWaterLevel){

        this.waterLevel ++;
    } else {

        console.log('water level full');
    }
}

const makeCoffee = function(coffee){

    if ( this.waterLevel === 0){
        console.log('please add more water')
    } else if ( coffee === 'Espresso' && this.waterLevel > 0){
        console.log(`An Espresso made with ${this.beans}`);
        this.waterLevel -- ;
    } else if (this.waterLevel > 0 ) {
        console.log(`An Americano made with ${this.beans}`);
        this.waterLevel -- ;

    }

}