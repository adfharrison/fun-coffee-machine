const {makeCoffeeMachine} = require('../coffeemachin/makeCoffee');
const { expect } = require('@jest/globals');

describe('makeCoffeeMachine', function (){

    test('makecoffeemachine outputs an object', function (){
        const newMachine = makeCoffeeMachine()
        expect(typeof newMachine).toBe('object')
    })

    test('newMachine should have a beans property based on passed arg', function (){
        const newMachine = makeCoffeeMachine('Honduran Civet Coffee');

        expect(newMachine.beans).toEqual('Honduran Civet Coffee')
    })

    test('newMachine should have a waterLevel property instantiated at 0', function (){
        const newMachine = makeCoffeeMachine(10);

        expect(newMachine.waterLevel).toEqual(0)
    })

    test('newMachine should have a maxWater level of 5 by default', function (){
        const newMachine = makeCoffeeMachine(10);

        expect(newMachine.maxWaterLevel).toEqual(5)
    })

    test('newMachine should have a maxWater level set by arg', function (){
        const newMachine = makeCoffeeMachine(10, 10);
        
        expect(newMachine.maxWaterLevel).toEqual(10)
    })

    test('newMachine addWater should increment waterLevel', function (){
        const newMachine = makeCoffeeMachine(10, 10);

        newMachine.addWater();
        newMachine.addWater();
        
        expect(newMachine.waterLevel).toEqual(2)
    })

    test('newMachine addWater cannnot increment waterLevel past max', function (){
        const newMachine = makeCoffeeMachine(10, 2);

        newMachine.addWater();
        newMachine.addWater();
        newMachine.addWater();

        expect(newMachine.waterLevel).toEqual(2)
    })

    test('newMachine makes an espresso and decrements waterLevel', function (){
        const consoleSpy = jest.spyOn(console, 'log');
        const newMachine = makeCoffeeMachine('Honduran Civet Beans', 2);

        newMachine.addWater();
        newMachine.addWater();

        newMachine.makeCoffee('Espresso')
        
        expect(newMachine.waterLevel).toEqual(1)
        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith(`An Espresso made with Honduran Civet Beans`);

        consoleSpy.mockRestore();
    })

    test('newMachine makes an espresso and decrements waterLevel', function (){
        const consoleSpy = jest.spyOn(console, 'log');
        const newMachine = makeCoffeeMachine('Starbucks Dregs TM', 2);

        newMachine.addWater();
        newMachine.addWater();

        newMachine.makeCoffee()
        
        expect(newMachine.waterLevel).toEqual(1)
        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith(`An Americano made with Starbucks Dregs TM`);
        consoleSpy.mockRestore();
    })

    test('newMachine cannot make coffee if waterLevel = 0', function (){
        const consoleSpy = jest.spyOn(console, 'log');
        const newMachine = makeCoffeeMachine('Starbucks Dregs TM', 2);

        

        newMachine.makeCoffee()
        
        expect(newMachine.waterLevel).toEqual(0)
        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith('please add more water');
        consoleSpy.mockRestore();
    })
})