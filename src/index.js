import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import "./css/style.css"
import 'bootstrap';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';


$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $(".add-to-cart-btn").click(function(){
        alert('أضيف المنتج الى سلة الشراء');
    });
    
    $('#copyright').text("جميع الحقوق محفوظة سنة" + new Date().getFullYear() );

    $(".product-option input[type='radio']").change(function(){
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    });

})