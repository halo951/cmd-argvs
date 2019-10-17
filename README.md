### 用于 nodejs 运行项目时,获取启动参数.

### 使用方式

#### 1. 获取参数

```
 let { argv } = require("cmd-argv");


 // 启用参数格式
 node your-js -key=xxx // {key:xxx}
 or
 node your-js -key   // {key:true}

 例子

 node your-js -k1=xxx -k2 =xx -k3

 result:
{
    k1:"xxx",
    k2:"xx",
    k3:true
}

```

#### 2. 替换 key

```
 let { argv } = require("cmd-argv");

 // use
 argv.alias("key","replaced key");

 // result

 {
     key:xxx
 }
 to
 {
     "replaced key":xxx
 }

```
