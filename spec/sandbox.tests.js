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
    it('returns 10 if 5 is added', function() {
        let result = addMoneyToMachine(5.00);
        expect(Object.vendingMachine.amountOfMoneyInChange.name).tobe(10.00)
        

    });
   

});
describe('vendingMachine performTransaction', function(){ //SUITE
    let vendingMachine;
    beforeEach(function() {
        vendingMachine = new VendingMachine();
    });
    it('calculates money to return based on soda selection', function() {
       let sodaSelection = "cola";
    

    });
   

});

