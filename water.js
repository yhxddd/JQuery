$(function(){
    $(window).on("load",function(){
        //图片全部加载完成之后再显示
        imgLocation();/*
        var dataImg={"data":[{"src":"1.jpg"},{"src":"2.jpg"}]}
        //滚动事件
        $(window).scroll(function(){
            //获取最后一张图片距离顶端的高度-自身得一半 再进行自动加载图片
            if(getSideHeight()===true){
                $.each(dataImg.data,function(index,value){
                    var pin=$("<div>").addClass(".pin").appendTo("#main");
                    var box=$("<div>").addClass(".box").appendTo(pin);
                    var img=$("<img>").attr("src",$(value).attr("src")).appendTo(box);
                });
                imgLocation();
            }
        })*/
    })
});
/*
function getSideHeight(){
    var box=$(".pin");
    var lastImgHeight=(box.last().get(0)).offsetTop-Math.floor(box.last().height()/2);
    var documentHeight =$(document).height();//获取当前窗口的高度
    var scrollHeight=$(window).scrollTop();//获取滚动距离
    return (lastImgHeight < (documentHeight + scrollHeight));
}*/
function imgLocation(){
    var box=$(".pin");//返回一个数组
    var boxWidth=box.eq(0).width();//获取一张图片计算宽度 包括了border
    var num=Math.floor($(window).width()/boxWidth); //计算一行能放几张
    var numArr=[];
    box.each(function(index,value){
        var boxHeight=box.eq(index).height();//获取每张图片得高度
        if(index<num){//第一排高度存入数组
            numArr[index]=boxHeight;
        }else{
            //第二排
            //找第一排最小高度/宽度得图片
            var minboxHeight=Math.min.apply(numArr,numArr);
            //jQuery.inArray(value,数组名，数组索引值)
            var minIndex=$.inArray(minboxHeight,numArr);//获取第几张图片高度最小
            //摆放图片  放在第一张高度最小得图片之下
            $(value).css({
                position:"absolute",
                top:minboxHeight,
                left:box.eq(minIndex).position().left
            });
            numArr[minIndex]+=box.eq(index).height();//新高度
        }
    })
}