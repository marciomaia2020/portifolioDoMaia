/*




*/

/*CONTEÚDO NÃO APARECE QUANDO CARREGA A PÁGINA*/
$(function() {
  $(".btn-toggle").click(function(e) {
    e.preventDefault();
    el = $(this).data('element');
    $(el).toggle(60000);
  });
});
/*ALERTA*/
$(document).ready(function(){
  $(".btn-toggle").click(function(){
    alert("acesseecompre.shop Alerta. Conteúdo impróprio para menores!");
  });
});
/*CONTEÚDO NÃO APARECE QUANDO CARREGA A PÁGINA*/

/*INICIO BOTÃO MOSTRAR - OCULTAR btn1/btn2/div.1 */
$(document).ready(function(){
  $(".btn1").click(function(){
    $("div.1").hide(1500);
  });
  $(".btn2").click(function(){
    $("div.1").show(1500);
  });
 });
/*FINAL BOTÃO MOSTRAR - OCULTAR*/


/*INICIO BOTÃO MOSTRAR - OCULTAR* btn3/btn4/div.2 */
$(document).ready(function(){
  $(".btn3").click(function(){
    $("div.2").hide(1500);
  });
  $(".btn4").click(function(){
    $("div.2").show(1500);
  });
 });
/*FINAL BOTÃO MOSTRAR - OCULTAR*/


/*INICIO BOTÃO MOSTRAR - OCULTAR btn5/btn6/div.3 */
$(document).ready(function(){
  $(".btn5").click(function(){
    $("div.3").hide(1500);
  });
  $(".btn6").click(function(){
    $("div.3").show(1500);
  });
 });
/*FINAL BOTÃO MOSTRAR - OCULTAR*/

/*INICIO BOTÃO MOSTRAR - OCULTAR btn7/btn8/div.4 */
$(document).ready(function(){
  $(".btn7").click(function(){
    $("div.4").hide(1500);
  });
  $(".btn8").click(function(){
    $("div.4").show(1500);
  });
 });
/*FINAL BOTÃO MOSTRAR - OCULTAR*/

/*INICIO BOTÃO MOSTRAR - OCULTAR btn9/btn10/div.5 */
$(document).ready(function(){
  $(".btn9").click(function(){
    $("div.5").hide(1500);
  });
  $(".btn10").click(function(){
    $("div.5").show(1500);
  });
 });
/*FINAL BOTÃO MOSTRAR - OCULTAR*/

/*INICIO BOTÃO MOSTRAR - OCULTAR btn11/btn12/div.6 */
$(document).ready(function(){
  $(".btn11").click(function(){
    $("div.6").hide(1500);
  });
  $(".btn12").click(function(){
    $("div.6").show(1500);
  });
 });
/*FINAL BOTÃO MOSTRAR - OCULTAR*/

/*INICIO BOTÃO MOSTRAR - OCULTAR btn13/btn14/div.7 */
$(document).ready(function(){
  $(".btn13").click(function(){
    $("div.7").hide(1500);
  });
  $(".btn14").click(function(){
    $("div.7").show(1500);
  });
 });
/*FINAL BOTÃO MOSTRAR - OCULTAR*/

/*INICIO BOTÃO MOSTRAR - OCULTAR btn15/btn16/div.8 */
$(document).ready(function(){
  $(".btn15").click(function(){
    $("div.8").hide(1500);
  });
  $(".btn16").click(function(){
    $("div.8").show(1500);
  });
 });
/*FINAL BOTÃO MOSTRAR - OCULTAR*/


/*INICIO BOTÃO MOSTRAR - OCULTAR btn17/btn18/div.9 */
$(document).ready(function(){
  $(".btn17").click(function(){
    $("div.9").hide(1500);
  });
  $(".btn18").click(function(){
    $("div.9").show(1500);
  });
 });
/*FINAL BOTÃO MOSTRAR - OCULTAR*/


/*INICIO BOTÃO MOSTRAR - OCULTAR btn19/btn20/div.10 */
$(document).ready(function(){
  $(".btn19").click(function(){
    $("div.10").hide(1500);
  });
  $(".btn20").click(function(){
    $("div.10").show(1500);
  });
 });
/*FINAL BOTÃO MOSTRAR - OCULTAR*/




/*FINAL BOTÃO MOSTRAR - OCULTAR*/
$(document).ready(function(){
  $(".btn1").click(function(){
    $("p.1").hide(1500);
  });
  $(".btn2").click(function(){
    $("p.1").show(1500);
  });
});
/*FINAL BOTÃO MOSTRAR - OCULTAR*/



/*INICIO-LINK PARA CADA ITEM DO SELECT*/
$(document).ready(function(){

    $('#link').on('change', function () {
         var url = $(this).val(); 
         if (url) { 
             window.open(url, '_blank');
          }
          return false;
        });
     });
/*FINAL - LINK PARA CADA ITEM DO SELECT*/


/*INICIO - LINK CSS PARA O SELECT*/
	$(document).ready(function(){
		$(".country-mul").chosen();
	});
/*FINAL - LINK CSS PARA O SELECT*/
