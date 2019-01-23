## time-format-js 是什么

time-format-js 是一款基于前端JavaScript的时间格式化，借鉴为微信的时间显示格式，支持多语言。

time-format-js 是基于原生 JS 实现的，不依赖任何框架。它编译后的代码大小是 3.6kb，压缩后是 2.1kb，gzip 后仅有 1.03kb，是一款非常轻量的 JS lib。

## 起步

##### 安装

``` js
npm i time-format-js -S
```

##### 使用方法

``` js
timeformat('short', 1548239420961) // 传入需要的类型与时间戳
timeformat('detail', 1548239420961) // 传入需要的类型与时间戳
```

##### 说明
传入日期：2018-07-17 14:26<br>
详细模式：2018年07月17日 14:26<br>
简短模式：2018/07/17 <br>

传入时间戳：1548239875143(当前时间) <br>
简短模式：18:37 <br>
详细模式：18:37 <br>

传入时间戳：1546275661000（2019年01月01日 01时01分01秒） <br>
简短模式：2019/01/01 <br>
详细模式：2019年01月01日 01:01