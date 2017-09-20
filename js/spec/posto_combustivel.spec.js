describe("Testando função do posto de combustível",function(){

	it("Testando álcool até 20 litros", function(){
		expect(6.208).toEqual(preco("A", 2));
	});
	it("Testando álcool acima de 20 litros", function(){
		expect(121.6).toEqual(preco("A", 40));
	});
	
	it("Testando gasolina até 20 litros", function(){
		expect(14.208).toEqual(preco("G", 4));
	});
	it("Testando gasolina acima de 20 litros", function(){
		expect(121.73).toEqual(preco("G", 35));
	});

});
