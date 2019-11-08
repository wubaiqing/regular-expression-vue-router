# 路由正则表达式版本优化思路

一、先删除匹配到的注释
![](./images/1.jpg)

二、在删除 JSON 结构里有可能出现的注释
![](./images/2.jpg)

三、匹配单行模式
![](./images/3.jpg)

四、匹配对象模式
![](./images/4.jpg)

学习资料
[JSON5](https://github.com/json5/json5)
[AJV](https://github.com/epoberezkin/ajv)