document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" &&              document.getElementById("telefone").value != ""){
      alert("Protinho! Agora é só aguardar que um de nossos colaboradores irão entrar em contato com você. Muito obrigado! =)")
  }else{
      alert("Por favor, preencha os campos nome, e-mail e telefone!")
  }
}

var nome = prompt ("Qual é o seu nome?")
alert(nome + ", seja bem-vindo(a)!")
