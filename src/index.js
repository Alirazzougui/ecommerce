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

    // عندما تتغير كمية المنتج 
    $("[data-product-quantity]").change(function() {
        
        // جلب الكمية الجديدة
        var newQuantity = $(this).val();

        // البحث عن السطر الذي يحتوي على معلومات المنتج
        var parent = $(this).parents("[data-product-info]");

        // جلب سعر القطقة الواحدة من معلومات المنتج
        var pricePerUnit = parent.attr('data-product-price');

        // السعر الاجمالي 
        var totalPriceForProduct = newQuantity * pricePerUnit;

        parent.find('.total-price-for-product').text(totalPriceForProduct + '$');

        // حدث السعر الإجمالي لكل المُنتجات
        calculateTotalPrice();

    });
    $('[data-remove-from-cart]').click(function(){
        $(this).parents('[data-product-info]').remove();
        calculateTotalPrice();
    });

    function calculateTotalPrice() {
      
        // أنشئ متغيّرًا جديدًا لحفظ السعر الإجمالي
        var totalPriceForAllProducts = 0;
    
        // لكل سطر يمثل معلومات المُنتج في الصّفحة
        $('[data-product-info]').each(function() {
    
            // اجلب سعر القطعة الواحدة من الخاصّية الموافقة
            var pricePerUnit = $(this).attr('data-product-price');
    
            // اجلب كمية المنتج من حقل اختيار الكمية
            var quantity = $(this).find('[data-product-quantity]').val();
    
            var totalPriceForProduct = pricePerUnit * quantity;
    
            // أضف السعر الإجمالي لهذا المنتج إلى السعر الإجمالي لكل المُنتجات، واحفظ القيمة في المتغير نفسه
            totalPriceForAllProducts = totalPriceForAllProducts + (totalPriceForProduct);
        });
    
          // حدث السعر الإجمالي لكل المُنتجات في الصفحة
        $('#total-price-for-all-products').text(totalPriceForAllProducts + '$');
    };

})
