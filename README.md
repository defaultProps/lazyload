

**什么是懒加载 ？？**

让浏览器延迟加载资源，改变浏览器默认加载顺序，先加载界面,页面初始时的页面图片全部加载，滚动条下和用户未看到的不显示，当用户滑动页面往下时开始请求图片加载，始终是加载用户所看到的视口内的图片.....

**为什么要懒加载 ??**

以便快速加载页面显示给用户看，提高用户的体验感,给与用户一种加载变快速的错觉...

**如何使用该代码 ？？**

仅仅使用script标签链接该js文件，然后初始化lazyload，就OK了...
举例：
```python
    <script src="lazyload.js" />
    <script>
        lazyLoad.init({
            offset : 100 , /*视线偏移量*/   
            delay : 20 /*延迟加载时间*/
        });
    </script>
```
**版本1.0**
优点：
1.用户可以控制图片加载完成后显示页面的时间间隔...
2.用户可以控制图片加载时间是在用户视线内还是相隔底部距离时开始加载，在一定范围内越大用户体验感更好...
3.开发者仅仅需要在img标签里添加data-lazy属性，并且该属性存放url，代码懒加载...
缺点：
1.图片区域开始未加载一张默认图片导致用户看到一块空白
2.图片加载异常没有反馈错误信息

作者 [@Mr.Tom][https://github.com/hellolittleBear/lazyload]     
2018 年 05月 06日    


