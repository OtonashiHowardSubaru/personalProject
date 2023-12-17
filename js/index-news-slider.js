$(document).ready(function  () {
    let itemCount = $('#newsList li').length  //計算圖檔數量
    let divWidth;
    let index = 0;                                   
    let timer = setInterval(moveToNext, 5000);   

    function updateDivWidth() {
        divWidth = $('#newsBoard').width()              //取得需要寬度
        $('#newsList li').width(divWidth);                  //li的寬度
        $('#newsList').width(divWidth * itemCount);        //ul的寬度
    return divWidth;
    }
    
    function moveToNext(){                                 //自動輪播
        if(index < itemCount - 1){                   
            index++                                 
        }else{
            index = 0
        }

        $('#newsList').animate({                     
            left: divWidth * index * -1
        })
    }

    function resizeHandler() {                              //重取寬度、重置圖檔位置
        clearInterval(timer);
        let divWidth = updateDivWidth();
        $('#newsList').css('left', divWidth * index * -1);
        timer = setInterval(moveToNext, 5000);

        // if (window.innerWidth < 1024){           //原本想寫截斷器，但直接用媒體選擇器+position: static搞定

        // }
    }

    $('#nextNews').click(function(){                //下一個物件按鈕
        clearInterval(timer)
        if(index < itemCount -1 ){
            index++
        }else{
            index =0
        }

        $('#newsList').animate({
            left: divWidth * index * -1
        })
        // console.log(divWidth)                    //檢查器
        timer = setInterval(moveToNext, 5000)
    });
    $('#previousNews').click(function(){            //上一個物件按鈕
        clearInterval(timer)
        if(index > 0 ){
            index--
        }else{
            index = (itemCount -1)
        }

        $('#newsList').animate({
            left: divWidth * index * -1
        })
        timer = setInterval(moveToNext, 5000)
    });

    $(document).ready(updateDivWidth);
    $(window).resize(resizeHandler);                //resize時觸發重置
})

