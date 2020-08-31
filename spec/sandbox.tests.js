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
    it('creates a vending machine with 5 bag of chip objects', function() { // SPEC
      let expectedValue = 5;
      let actualValue = vendingMachine.bagsOfChips.length;
      
      expect(actualValue).toBe(expectedValue);
    });
    it('creates a vending machine with 5 pack of gum objects', function(){ //SPEC
    let expectedValue = 5;
    let actualValue = vendingMachine.packsOfGum.length;

    expect(actualValue).toBe(expectedValue);
    });
    

  });
  describe('VendingMachine calculateReturnChange', function() { //SUITE
    let vendingMachine;
    beforeEach(function() {
      vendingMachine = new VendingMachine();
    });
    it('when amount of money passed in is greater than the price of item, correct change is returned', function() { //SPEC
        expect(vendingMachine.calculateReturnChange(.5, 1)).toBe(.5);
    });
    
    it('when amount of money passed in is equal to the price of item, no change is returned', function(){ //SPEC
      expect(vendingMachine.calculateReturnChange(.5, .5)).toBe(0);
    });
   
    it('when amount of money passed in is less than the price of the item, no change is returned', function(){ //SPEC
      expect(vendingMachine.calculateReturnChange(1, .5)).toBe(0);
    });


  });
  describe('VendingMachine removeItemFromInventory', function(){ //SUITE
    let vendingMachine;
    beforeEach(function() {
        vendingMachine = new VendingMachine();
    });

    it('removes 1 candy bar objects from vending machine inventory if candy bar is choosen', function() { //SPEC 
       
       let itemToRemove =  "candy bar";
       vendingMachine.removeItemFromInventory(itemToRemove)
        expect(vendingMachine.candyBars.length).toBe(4); 
    });

    it('removes 1 bag of chip objects from vending machine inventory if bag of chips is choosen', function() { //SPEC
        let itemToRemove = "bag of chips";
        vendingMachine.removeItemFromInventory(itemToRemove)
        expect(vendingMachine.bagsOfChips.length).toBe(4);
    });
    it('removes 1 pack of gum objects from vending machine inventory if pack of gum is choosen', function() { //SPEC
        let itemToRemove = "pack of gum";
        vendingMachine.removeItemFromInventory(itemToRemove)
        expect(vendingMachine.packsOfGum.length).toBe(4);
    });

  });

  describe('vendingMachine addItemBackToInventory', function(){ //SUITE
    let vendingMachine;
    beforeEach(function() {
        vendingMachine = new VendingMachine();
    });
    it('adds 1 candy bar objects to vending machine inventory if candy bar is choosen', function() { //SPEC
        let itemToReinsert = new CandyBar("candy bar"); 
        vendingMachine.addItemBackToInventory(itemToReinsert)
        expect(vendingMachine.candyBars.length).toBe(6)
    });
    it('adds 1 bag of chip objects to vending machine inventory if bag of chips is choosen', function() { //SPEC
        let itemToReinsert = new BagOfChips("bag of chips");
        vendingMachine.addItemBackToInventory(itemToReinsert)
        expect(vendingMachine.bagsOfChips.length).toBe(6);
    
    });
    it('adds 1 pack of gum objects to vending machine inventory if pack of gum is choosen', function() { //SPEC
        let itemToReinsert = new PackOfGum("pack of gum");
        vendingMachine.addItemBackToInventory(itemToReinsert)
        expect(vendingMachine.packsOfGum.length).toBe(6);
    });

  });

  describe('vendingMachine addMoneyToMachine', function(){ //SUITE
    let vendingMachine;
    beforeEach(function() {
        vendingMachine = new VendingMachine();
    });
    it('the amount of money returns 10 if 5 is added', function() {
        let moneyToAdd = 5;
        vendingMachine.addMoneyToMachine(moneyToAdd);
    
        expect(vendingMachine.amountOfMoneyInChange(5)).tobe(10)
    });

});

describe('vendingMachine performTransaction', function(){ //SUITE
    let vendingMachine;
    beforeEach(function() {
        vendingMachine = new VendingMachine();
    });
    it('calculates extra money inserted based on item choosen', function() {
      expect(vendingMachine.performTransaction("pack of gum", .20)).toEqual(0.5);
    });
   

});


describe('vendingMachine performTransaction', function(){ //SUITE
  let vendingMachine;
  beforeEach(function() {
      vendingMachine = new VendingMachine();
  });
  it('returns true if money inserted is equal to item to dispense price', function() {
    let itemSelection = "pack of gum";
    vendingMachine.performTransaction(itemSelection, .25);
    
    expect(vendingMachine.moneyToReturn).toEqual(0);
  });
 

});

describe('vendingMachine performTransaction', function(){ //SUITE
  let vendingMachine;
  beforeEach(function() {
      vendingMachine = new VendingMachine();
  });
  it('calculates if not enough money was inserted based on item', function() {
    expect(vendingMachine.performTransaction("pack of gum", .20)).toBe(0.5);
  });
 

});
