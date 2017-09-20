describe("Testando função de dia da semana",function(){

  it("Dia válido", function(){
		expect("Segunda").toEqual(diaSemana(2));
	});

  it("Dia inválido maior que 7", function(){
		expect("inválido").toEqual(diaSemana(8));
	});

  it("Dia inválido menor que 1", function(){
    expect("inválido").toEqual(diaSemana(-2));
  });
  
});
