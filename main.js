


async function buscaNome() {
  try{
    const response = await fetch(" https://pokeapi.co/api/v2/pokemon/pikachu");
    const body = await response.json();
    console.log(body);
    document.querySelector(".nome").innerText = body.name;
    document.querySelector(".peso").innerText = ((parseFloat(body.weight))/10);
    document.querySelector(".comando").innerText = body.order;
    document.querySelector(".altura" ).innerText = ((parseFloat(body.height)/10));
    document.querySelector(".id" ).innerText = body.id;
    
    
  }catch{
    console.log("Erro")
  }finally{
    console.log("OK");
  }
}
buscaNome();

async function buscaNome2() {
  try{
    const response = await fetch(" https://pokeapi.co/api/v2/pokemon/snorlax");
    const body = await response.json();
    console.log(body);
    document.querySelector(".nome2").innerText = body.name;
    document.querySelector(".peso2").innerText = ((parseFloat(((parseFloat(body.weight))/10)))/10);
    document.querySelector(".comando2").innerText = body.order;
    document.querySelector(".altura2" ).innerText = ((parseFloat(body.height)/10));
    document.querySelector(".id2" ).innerText = body.id;
    
    
  }catch{
    console.log("Erro")
  }finally{
    console.log("OK");
  }
}
buscaNome2();

async function buscaNome3() {
  try{
    const response = await fetch(" https://pokeapi.co/api/v2/pokemon/darkrai");
    const body = await response.json();
    console.log(body);
    document.querySelector(".nome3").innerText = body.name;
    document.querySelector(".peso3").innerText = ((parseFloat(body.weight))/10);
    document.querySelector(".comando3").innerText = body.order;
    document.querySelector(".altura3" ).innerText = ((parseFloat(body.height)/10));
    document.querySelector(".id3" ).innerText = body.id;
    
    
  }catch{
    console.log("Erro")
  }finally{
    console.log("OK");
  }
}
buscaNome3();

async function buscaNome4() {
  try{
    const response = await fetch(" https://pokeapi.co/api/v2/pokemon/haxorus");
    const body = await response.json();
    console.log(body);
    document.querySelector(".nome4").innerText = body.name;
    document.querySelector(".peso4").innerText = ((parseFloat(body.weight))/10);
    document.querySelector(".comando4").innerText = body.order;
    document.querySelector(".altura4" ).innerText = ((parseFloat(body.height)/10));
    document.querySelector(".id4" ).innerText = body.id;
    
    
  }catch{
    console.log("Erro")
  }finally{
    console.log("OK");
  }
}
buscaNome4();

async function buscaNome5() {
  try{
    const response = await fetch(" https://pokeapi.co/api/v2/pokemon/articuno");
    const body = await response.json();
    console.log(body);
    document.querySelector(".nome5").innerText = body.name;
    document.querySelector(".peso5").innerText = ((parseFloat(body.weight))/10);
    document.querySelector(".comando5").innerText = body.order;
    document.querySelector(".altura5" ).innerText = ((parseFloat(body.height)/10));
    document.querySelector(".id5" ).innerText = body.id;
    
    
  }catch{
    console.log("Erro")
  }finally{
    console.log("OK");
  }
}
buscaNome5();

async function buscaNome6() {
  try{
    const response = await fetch(" https://pokeapi.co/api/v2/pokemon/zapdos");
    const body = await response.json();
    console.log(body);
    document.querySelector(".nome6").innerText = body.name;
    document.querySelector(".peso6").innerText = ((parseFloat(body.weight))/10);
    document.querySelector(".comando6").innerText = body.order;
    document.querySelector(".altura6" ).innerText = ((parseFloat(body.height)/10));
    document.querySelector(".id6" ).innerText = body.id;
    
    
  }catch{
    console.log("Erro muito grande acontecu!")
  }finally{
    console.log("OK");
  }
}
buscaNome6();

async function buscaNome7() {
  try{
    const response = await fetch(" https://pokeapi.co/api/v2/pokemon/moltres");
    const body = await response.json();
    console.log(body);
    document.querySelector(".nome7").innerText = body.name;
    document.querySelector(".peso7").innerText = ((parseFloat(body.weight))/10);
    document.querySelector(".comando7").innerText = body.order;
    document.querySelector(".altura7" ).innerText = ((parseFloat(body.height)/10));
    document.querySelector(".id7" ).innerText = body.id;
    
    
  }catch{
    console.log("Erro")
  }finally{
    console.log("OK");
  }
}
buscaNome7();

async function buscaNome8() {
  try{
    const response = await fetch(" https://pokeapi.co/api/v2/pokemon/ditto");
    const body = await response.json();
    console.log(body);
    document.querySelector(".nome8").innerText = body.name;
    document.querySelector(".peso8").innerText = ((parseFloat(body.weight))/10);
    document.querySelector(".comando8").innerText = body.order;
    document.querySelector(".altura8" ).innerText = ((parseFloat(body.height)/10));
    document.querySelector(".id8" ).innerText = body.id;
    
    
  }catch{
    console.log("Erro")
  }finally{
    console.log("OK");
  }
}
buscaNome8();





