describe("Testando os métodos do conversor de temperaturas",function(){

	var c = new Conversor();

	it("Celsius para Fahrenheit", function(){
		expect(104).toEqual(c.celsiusToFahrenheit(40));
	});

	it("Fahrenheit para Celsius", function(){
		expect(-5).toEqual(c.fahrenheitToCelsius(23));
	});

	it("Celsius para Kelvin", function(){
		expect(283).toEqual(c.celsiusToKelvin(10));
	});

	it("Kelvin para Celsius", function(){
		expect(0).toEqual(c.kelvinToCelsius(273));
	});
});
