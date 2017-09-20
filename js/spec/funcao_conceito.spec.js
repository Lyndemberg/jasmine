describe("Testando função do conceito",function(){

	it("Testando conceito A", function(){
		expect("A").toEqual(calculaConceito(10,8));
	});
	it("Testando conceito B", function(){
		expect("B").toEqual(calculaConceito(7.6,7.6));
	});
	it("Testando conceito C", function(){
		expect("C").toEqual(calculaConceito(10,4));
	});
	it("Testando com valores negativos", function(){
		expect("Notas inválidas").toEqual(calculaConceito(-1,-7));
	});

});
