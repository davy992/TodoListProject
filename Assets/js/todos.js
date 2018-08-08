// Check off todos by clicking
$("ul").on("click", "li", function () { //izbere ul, in potem izvede funkcijo na vsak klik na LI znotraj UL
  $(this).toggleClass("completed");
})

//click on X to delete todos
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(function() {
    $(this).remove();
  });
  e.stopPropagation();
})

$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to the ul
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
  }
})

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
})
