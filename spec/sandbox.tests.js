describe('VendingMachine constructor', function() {// SUITE
    let vendingMachine;
    beforeEach(function() {
      vendingMachine = new VendingMachine();
    });
    it('creates a vending machine with 5 candy bar objects', function() { // SPEC
      let expectedValue = 5;
      let actualValue = vendingMachine.candyBars.length;
      
      expect(actualValue).toBe(expectedValue);
    });
    it('creates a vending machine with 5 bag of chips objects', function() { // SPEC
      let expectedValue = 5;
      let actualValue = vendingMachine.bagsOfChips.length;
      
      expect(actualValue).toBe(expectedValue);
    });
    it('creates a vending machine with 5 packs of gum objects', function(){ //SPEC
    let expectedValue = 5;
    let actualValue = vendingMachine.packOfGum.length;

    expect(actualValue).toBe(expectedValue);
    });
    
  });
  describe('VendingMachine calculateReturnChange', function() { //SUITE
    let vendingMachine;
    beforeEach(function() {
      vendingMachine = new VendingMachine();
    });
    // money passed in is greater than the cost of the item
    it('when amount of money passed in is greater than the price of item, correct change is returned', function() { //SPEC
      expect(vendingMachine.calculateReturnChange(.5, 1)).toBe(.5);
    });
    // money passed in equal to the cost of the item
    it('when amount of money passed in is equal than the price of item, correct change is returned', function(){ //SPEC
      expect(vendingMachine.calculateReturnChange(.5)).toBe(.5);
    });
    // money passed in is less than the cost of the item
    it('when amount of money passed in is less than the price of the item, correct change is returned', function(){ //SPEC
      expect(vendingMachine.calculateReturnChange(.5)).toBe(.5, 1);
    });

  });
  describe('vendingMachine removeItemFromInventory', function(){ //SUITE
    let vendingMachine;
    beforeEach(function() {
        vendingMachine = new VendingMachine();
    });
    it('removes 1 candy bar objects from vending machine inventory', function() { //SPEC
        expect(vendingMachine.removeItemFromInventory(5)).toBe(4);
    });

  });