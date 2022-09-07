const cal = require('./calculator'); //ARRANGE

/* A test case for the add operator. */
describe('Add Operator',() => {
    test('adds 1 + 1 to equals 2',() => {
        var result = cal.add(1,1); //ACT
        expect(result).toBe(2); //ASSERT
    });

    test('adds 2 + 2 to equals 4',() => {
        var result = cal.add(2,2);
        expect(result).toBe(4); 
    });
});

/* A test cases for the subtract operator. */
describe('Subtract Operator',() => {
    test('Substract 2 - 2 to equals 1',() => {
        var result = cal.substract(2,1);
        expect(result).toBe(1); 
    });
    
    test('Substract 5 - 3 to equals 2',() => {
        var result = cal.substract(5,3);
        expect(result).toBe(2); 
    });
});