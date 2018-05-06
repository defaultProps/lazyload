

**什么是懒加载 ？？**

让浏览器延迟加载资源，改变浏览器默认加载顺序，先加载界面.....

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
作者 [@Mr.Tom][https://github.com/hellolittleBear/lazyload]     
2016 年 07月 07日    


