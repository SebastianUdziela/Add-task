$('input').focus(function(){
     $(this).next('label').addClass("animation_label")
})

$('input').blur(function() {
    const value = $(this).val();
    if(value === "") {
        $(this).next('label').removeClass("animation_label")
    } 
})
