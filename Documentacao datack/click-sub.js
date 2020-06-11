var offset = $("#img_upup").offset();

//Adiciona as divs dentro da div pai - e configura sua posicao
function creatmark(x1,y1,x2,y2,ms) {
  var topp = offset.top+y1;
  //BUGG
  var leftt = x1;
  var ww = x2;
  var hh = y2;

  $(".indicador").append('<div class="indicador2" id="'+topp+leftt+'" data-dado="'+ms+'"></div>')
  $(".indicador2").last().css("top",topp)
  $(".indicador2").last().css("left",leftt)
  $(".indicador2").last().css("width",ww)
  $(".indicador2").last().css("height",hh)

}

//Criando blocos
creatmark(5,3,964,25,'<h1>Orçamento/Pedido</h1> Ao iniciar a digitação do nome de seu cliente, o sistema fará a busca através do Cadastro de Clientes e Fornecedores. Caso o cliente não esteja cadastrado você pode clicar em (Este cliente não possui cadastro, deseja completá-lo?) para fazer o cadastro do mesmo dentro do Pedido.Após selecionar o cliente, clicando no botão Registros do Cliente, você poderá visualizar todos os registros do cliente selecionado.')
Ttexto = "Criar teste<br><input type='text' placeholder='Name'><button>  ok</button>"
creatmark(134,59,300,20,Ttexto)
Validar_texto = "Ao realizar o pedido será verificado se este produto possue estoque disponivel"
creatmark(757,523,215,15,Validar_texto)
