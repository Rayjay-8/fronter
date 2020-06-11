// seta a distancia quando aparece o sub menu
function seting(x,y) {
  console.log("setting");
  var space_default = 20;
  $(".menu").last().css("top",y+space_default)
  $(".menu").last().css("left",x+space_default)
}

$( ".indicador" ).on("contextmenu",".indicador2",function(e) {
    $(".menu").html("<button>FUNCAO</button><br><button>Sub-tela</button><br><button>SQL</button>");
    $(".menu").css("display","block")
});


$(".indicador").on("click",".indicador2", function (e) {
  var fff = $(this).attr("data-dado")
  $(".menu").html( fff);
  $(".menu").css("display","table")
  seting(event.x,event.y)
})

// Configuracao inicial quando se cria as marcacoes
if (document.addEventListener) {document.addEventListener('contextmenu', function (e) {e.preventDefault();seting(event.x,event.y)}, false);
} else {document.attachEvent('oncontextmenu', function () {window.event.returnValue = false;});}
