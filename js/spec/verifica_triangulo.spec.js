describe("Testando função do triângulo",function(){

	it("Testando triângulo equilátero", function(){
		expect("Triângulo equilátero").toEqual(verificaTriangulo(2,2,2));
	});
	it("Testando triângulo isósceles 1", function(){
		expect("Triângulo isósceles").toEqual(verificaTriangulo(2,2,3));
	});
	it("Testando triângulo isósceles 2", function(){
		expect("Triângulo isósceles").toEqual(verificaTriangulo(2,3,3));
	});
	it("Testando triângulo escaleno", function(){
		expect("Triângulo escaleno").toEqual(verificaTriangulo(10,8,3));
	});

});
