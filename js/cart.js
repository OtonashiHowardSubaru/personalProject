$(document).ready(function () {
    // 初始化自動計算一次
    updateCountPrice();
    updateTotalAmount();

    // +1按鈕點擊
    $('.qtyPlus').on('click', function () {
        updateCountPrice();
        updateTotalAmount();
    });

    // -1按鈕點擊
    $('.qtyMinus').on('click', function () {
        updateCountPrice();
        updateTotalAmount();
    });

    // 刪除按鈕
    $('.deleteProductInCart').on('click', function () {
        var listItem = $(this).closest('.list-item');
        listItem.remove();
        updateTotalAmount();
    });

    // 更新小計
    function updateCountPrice() {
        $('.list-item').each(function () {
            var singlePrice = parseFloat($(this).find('.singlePrice').text().replace('$', '').replace(',', '')) || 0;
            var quantity = parseInt($(this).find('.qty').val()) || 0;
            var countPrice = (singlePrice * quantity); //
            $(this).find('.countPrice').text('$' + addCommas(countPrice)); 
        });
    }

    // 數字千分位符號
    function addCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //看不懂是三小，網路抄來的判別+,的判別式
    }

    function updateTotalAmount() {
        var totalAmount = 0;

        $('.list-item').each(function () { //each抓所有.countPrice值
            var countPrice = parseFloat($(this).find('.countPrice').text().replace('$', '').replace(',', '')) || 0;
            totalAmount += countPrice;
        });
    
        // 輸入進amout
        $('#amout').text('$' + addCommas(totalAmount));
    
        // 取優惠券
        var discountAmount = parseFloat($('#discount').text().replace('$', '').replace(',', '')) || 0;
    
        // 計算結帳金額
        var checkoutAmount = totalAmount - discountAmount;
    
        // 更新結帳金額
        $('#totalAmount').text('$' + addCommas(checkoutAmount));
    }
    
});