$(document).ready(function () {
    $(".sortable1").sortable({
        connectWith: ".connectedSortable",
        receive: function (event, ui) {
            $(this).find("div.item").css({ "border-right": "10px solid yellow", "text-align": "center" });
        }
    }).disableSelection();
    $('.add-button').click(function () {
        var txtNewItem = $('#new_task').css({ "font-size": "100" }).val() + '<br>' + $('#task_des').val();
        $(this).closest('div.container').find('ul').append('<li><div class="item">' + txtNewItem + '</div></li>').css({ "text-align": "center" });
        $('#new_task').val('');
        $('#task_des').val('');
    });
    // $('.add-button').keydown(function(){
    //     var txtNewItem = $('#new_task').val() + '<br>' + $('#task_des').val();
    //     $(this).closest('div.container').find('ul').append('<li><div class="item">' + txtNewItem + '</div></li>').css({ "text-align": "center" });
    //     $('#new_task').val('');
    //     $('#task_des').val('');
    // });
    $(".sortable2").sortable({
        connectWith: ".connectedSortable",
        receive: function (event, ui) {
            $(this).find("div.item").css({ "border-right": "10px solid greenyellow", "text-align": "center" });
        }
    });
    $(".sortable3").sortable({
        connectWith: ".connectedSortable",
        receive: function (event, ui) {
            $(this).find("div.item").css({ "border-right": "10px solid red", "text-align": "center" });
        }
    })
    $(".sortable4").sortable({
        connectWith: ".connectedSortable",
        receive: function (event, ui) {
            $(this).find("div.item").css({ "border-right": "10px solid blue", "text-align": "center" });
        }
    })
    $(".delete-button").click(function () {
        $("#rem").find("li").remove();


    });
    $(".dl-button").click(function () {
        if($("body").hasClass("dark")){
            $("body").removeClass("dark");
        }
        else{
            $("body").addClass("dark");
        }
        
    });

});



// add-button.addEventListener('click', check);
// window.addEventListener('keydown', (e) => {
//     if (e.which == 13) {
//        $(this).function();

//     }
// })
