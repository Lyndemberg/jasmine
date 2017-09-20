describe("Testando função do reajuste",function(){

	it("Testando salário até R$ 280", function(){
		expect(120).toEqual(reajuste(100));
	});
	it("Testando salário acima de R$ 280 até R$ 700", function(){
		expect(575).toEqual(reajuste(500));
	});
	it("Testando salário acima de R$ 700 até R$ 1500", function(){
		expect(1100).toEqual(reajuste(1000));
	});
	it("Testando salário acima de R$ 1500", function(){
		expect(3150).toEqual(reajuste(3000));
	});

});
