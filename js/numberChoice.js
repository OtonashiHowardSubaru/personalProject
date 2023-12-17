
$(document).ready(function() {
    // 使用事件委託，監聽父元素的 click 事件
    $('.qtyPlus').on('click', function(e) {
        e.preventDefault();
        var currentVal = parseInt($(this).siblings('.qty').val()) || 0; // 取得相鄰的 .qty 值，利用 ||強制使非數字轉為0
        $(this).siblings('.qty').val(currentVal + 1);
    });

    $('.qtyMinus').on('click', function(e) {
        e.preventDefault();
        var currentVal = parseInt($(this).siblings('.qty').val()) || 0; // 取得相鄰的 .qty 值，利用 ||強制使非數字轉為0
        if (currentVal > 0) {
            $(this).siblings('.qty').val(currentVal - 1);
        }
    });
});