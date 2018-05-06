/*
*   Authod: Mr.Tom
*
*   Data: 2018-5-6  
*
*   desc: this is a light weight lazyload Image code, you can use this method bring about lazy loading, just quote "lazyload" of object 
*       or you can initialization data...
*
*   quotation: sin say cos : you want tan or cot tonight ???    
*       (秒懂的都是老司机.......)
*
*/



window.lazyLoad = (function(window,document){
    'use strict';

    var offset = 10,        //  视线偏移量
        timeout,            //  定时器
        flag = 1,           //  第一次加载
        delay = 200,        //  延迟加载时间
        _viewport = null,   //  personally method
        _delay = null,      //  personally method
        _loading = null,    //  personally method
        data_lazy = null,   //  对象
        init= null,         //  对外公有接口
        _scrollDown = null, //  personally method
        beforeTop = 0;      //  初始定时器

    //判断是否显示在用户视线中
    _viewport = function(ele) {
        var e = ele.getBoundingClientRect();
        return e.top - offset <= (window.innerHeight || document.documentElement.clientHeight);
    };

    //判断是否可以进行http请求显示图片
    _loading = function() {
        for(var i = 0;i<data_lazy.length;i++) {
            if(_viewport(data_lazy[i])) {
                data_lazy[i].src = data_lazy[i].getAttribute('data-lazy');
                console.log( data_lazy instanceof Array);
            }
        }
    };

    //判断用户滚动时是否是向下滚动，减少查询时间
    _scrollDown = function(e) {
        var afterTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(flag == 1 || afterTop - beforeTop > 10) {
             _loading();
             flag ++;
        }
    };

    /*设置自定义定时器*/
    _delay = function() {
        clearTimeout(timeout);
        timeout = setTimeout(_scrollDown, delay);
    };

    /*初始化函数*/
    init = function(obj) {
        data_lazy =  document.querySelectorAll('[data-lazy]');
        offset = typeof(obj.offset == 'number') && obj.offset || offset;
        delay = typeof(obj.offset == 'number') && obj.delay || 200; 
        window.addEventListener 
            ? 
            window.addEventListener('scroll', function(){_scrollDown(event)}, false) 
            :
            window.attachEvent('onscroll', function(){_scrollDown(event)});
        _delay();
    };

    return {
        init :init
    };
}(window,document));