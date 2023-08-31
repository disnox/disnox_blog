---
id: Linux_shell
slug: /Linux_shell
title: Linux Shell
date: 2022-10-27
authors: disnox
tags: [Linux]
keywords: [Linux]
---

<!-- truncate -->

### 1. Shell 的特点

+ **Shell** 是一个用C语言编写的程序，它是用户使用 **Linux** 的桥梁。

+ **Shell** 既是一种命令语言，又是一种程序设计语言。
+ **Shell** 是指一种应用程序，这个应用程序提供了一个界面，用户通过这个界面访问操作系统内核的服务。

### 2. 查询命令历史与补齐

+ 查询命令历史：上下键。
+ 补齐命令与文件名：TAB。

### 3.定义命令别名

```js
alias 别名='Shell命令'
# 注意等号两边不能有多余的字符
```

别名不可以和系统 **Shell** 命令一样，在终端上执行的操作是临时的。

如果要永久有效，需要打开家目录下的.bashrc脚本文件，添加别名

```C
nox@noox:~$ gedit .bashrc
```

## 常用 Shell 命令

### ls（list）

文件操作

```js
ls /etc        // 列出etc目录下的文件名字
ls -l          // 列出当前目录下的文件详细信息
ls -lh         // 列出当前目录下的文件详细信息，但是大小会带单位显示
ls -a          // 查看当前目录下的所有文件（包括隐藏文件）
```

### cd（change directory）

切换工作路径

```js
nox@noox:/mnt$        /mnt是工作路径
nox@noox:/usr/local$  /usr/local 是工作路径
cd /mnt          // 切换到mnt目录
cd -             // 回到之前的目录
cd               // 切换到家(当前用户)目录(~) /home/用户名
cd ~             // 切换到家(当前用户)目录
cd ..            // 跳到上一层目录

nox@noox:/usr$        /当前目录
要求切换到根目录：
绝对路径：   cd /     // 从根目录开始访问目标文件
相对路径     cd ..    // 从当前目录开始访问目标文件
切换到mnt目录:
绝对路径：    cd /mnt
相对路径      cd ../mnt
```

### pwd（print work directory）

打印当前的工作路径

```
pwd
```

### cat/less/more/tail/head

显示文件内容到终端

```js
cat file          // 显示文件内容
cat file -n       // 带行号的显示文件内容
less file         // 分页显示文件内容，按q退出，按空格/回车翻页
more file         // 分页显示文件内容，按q退出，按空格/回车翻页
tail file         // 默认查看文件最后10行
tail file -n 20   // 查看文件最后20行
head file         // 默认查看文件开头10行
head file -n 20   // 查看文件开头20行
```

### touch

创建普通文件、更新文件时间

```js
touch file         // 创建一个文件名叫flie
touc  file1 file2  // 创建多个文件
/* 如果文件名存在，会更新创建时间 */
```

### mkdir（make directory）

创建空目录

```js
mkdir dir          // 创建一个名为dir的目录
```

### cp （copy）

复制一个文件或目录

```js
cp file1 file2      // 文件复制到文件
cp file dir/        // 文件复制到目录
cp dir1/ dir2/ -r   // 目录复制到目录，-r表示递归的复制目录及其子目录
```

### rm（remove）

删除一个文件或者目录

```js
rm file             // 删除普通文件
rm dir/ -r          // 删除目录文件，-r表示递归删除目录及其子目录
rmdir               // 删除一个空目录
rmdir app/
```

### mv（move）

移动文件位置或者重命名文件

```js
mv file1 file2      // 重命名文件
mv file dir/        // 移动文件到dir目录下
```

### find

在指定的目录下查找文件

```js
find . -name file           // 在当前目录下查找 file 文件
find . -name "*.c"          // 将当前目录下所有后缀为.c的文件列出来
sudo find / -name stdio.h   // 在根目录下查找 stdio.h 文件
```

### grep

在指定的文件中查找字符串

```js
grep 'hello' file           // 在file中找hello字符串
grep 'hello' file -n        // 在file中查找hello字符串，并显示符号
grep 'hello' dir/ -rnH      // 递归的针对dir目录下的所有文件，查找hello
```

### sort

对文件内容进行排序

```js
sort file                   // 正序排列
sort file -r                // 逆序排列
```

### uniq

去除相邻的重复行

```js
uniq file                   // 去除文件相邻重复行
sort file | uniq            // 去除整个文件重复行
|    // 管道，把前一个命令的结作为后一个命令的参数
>    // 输出重定向，会覆盖文件原本内容
>>   // 输出重定向，不会覆盖文件原本内容
sort file1 | uniq > file2   //先排序file1，然后去除相邻重复行，再把结果写入file2文件
```

### diff（different）

比较文件，目录，然后产生差异信息

```js
file a.txt
flie 1.c
file 1.pdf
file 1.jpeg
```

### echo 

用于字符串的输出

``` js
echo "It is a test"           // 显示普通字符
echo It is a test             // 显示普通字符
echo "\"It is a test\""       // 显示转义字符
    
a=100                         // 定义变量
echo $a                       // 显示变量
    
echo -e "OK! \n"              // 显示换行  -e 开启转义
echo "It is a test"
    
echo -e "OK! \c"              // -c 不换行 -e 开启转义
echo "It is a test"
    
echo "It is a test" > file    // 显示结果定向至文件
echo 'hello\"'                // 原样输出字符串，不进行转义或取变量（用单引号） 
echo `date`                   // 显示命令执行结果
```

### env (environment)

在终端上打印环境变量

```js
env    //回车执行
USER=gec    用户名字
SHELL=/bin/bash        当前shell软件是bash
//PATH：是可执行程序的环境变量，存储可执行程序的路径
//执行一个程序的时候，默认会到PATH变量路径中去找这个文件名
PATH=/home/gec/bin:/home/gec/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/usr/local/arm/usr/local/arm/5.4.0/usr/bin:/usr/local/arm/usr/local/arm/5.4.0/usr/bin:/usr/local/arm1808/gcc-linaro-6.3.1-2017.05-x86_64_aarch64-linux-gnu/bin/

PWD=/home/gec/Desktop    当前的工作路径
LOGNAME=gec              当前登录用户的名字
LD_LIBRAARY_PATH         系统中库存放路径的环境变量
```

### export

设置环境变量

```js
export PATH=/home/nox/Desktop:$PATH    添加到原来环境变量值的前面
export PATH=$PATH:/home/nox/Desktop    添加到原来环境变量值的后面
printenv PATH     查看PATH环境变量
echo $PATH        查看PATH环境变量
```

### tar（tape archive）

将文件归档、释放归档、压缩、解压缩

+ 必要参数
  + c：创建
  + x：释放
  + v：显示执行文件
  + f：指定文件
  + C：指定解压路径
  + j：指定压缩或解压缩格式bzip2（命名：xxx.tar.bz2）
  + z：指定压缩或解压缩格式gzip（命名：xxx.tar.gz）

```js
tar cvf xxx.tar file1 file2        // 创建一个归档文件
tar xvf xxx.tar                    // 释放一个归档文件

tar cvfj xxx.tar.bz2 file1 file2   // 创建一个bz2格式压缩文件
tar xvfj xxx.tar.bz2               // 释放一个bz2格式压缩文件
tar xvfj xxx.tar.bz2 -C /dir       // 解压xxx.tar.bz2到dir的路径

tar cvfz xxx.tar.gz file1 file2    // 创建一个gz格式压缩文件
tar xvfz xxx.tar.gz                // 释放一个gz格式压缩文件
tar xvfz xxx.tar.gz -C /dir        // 解压xxx.tar.gz到dir的路径
```

### ln（link）

用来创建链接文件（符号链接、硬链接） 

```
 ln [参数][源文件或目录][目标文件或目录]
```

+ 硬链接：
  + 只能对普通文件创建（文本、图片、音视频...）。
  + 不可以跨文件系统，跨磁盘创建，不允许给目录创建链接。
  + 以文件副本形式存在，但不占用实际空间。
+ 符号链接（软链接）：
  + 以路径的方式存在。类似于Windows的快捷方式。
  + 软链接可以对一个不存在的文件名进行链接。
  + 软链接可以跨文件系统。
  + 软链接可以对目录进行链接。

```js
ln file1 file2                      // 硬链接创建
ln -s file1 file2                   // 软链接
```

### who

显示系统中有那些使用者，显示的资料包含使用者ID、使用的终端机、从那边连上来的、上线时间、呆滞时间、CPU使用量、动作等等。

```js
who                // 显示当前登陆用户
who -H             // 显示标题栏
who -l -H          // 显示用户登录来源
who -T -H          // 显示终端属性
who -m -H          // 只显示当前用户
```

### whereis/which

查找文件

```js
whereis ls                   // 查找命令路径，命令说明文档
whereis -b bash              // 显示bash 命令的二进制程序
whereis -m bash              // 显示bash 命令的帮助文件
    
which ls                     // 查找命令路径
```

### write

给其他已经登录的用户发送信息

```js
write 用户名字
/* 单方向发送 Ctrl+C结束对话 */
```

### uname

获取当前系统内核相关信息

```js
uname -a               // 显示当前系统全部相关信息
uname -m               // 显示计算机类型
uname -n               // 显示计算机名
uname -r               // 显示当前操作系统发行编号
uname -s               // 显示当前操作系统名称
uname -v               // 显示当前系统版本与时间   
```

### 通配符：* ？

```js
*           // 任意长度任意字符
？           // 一个任意字符
rm ?????    // 名字为5个字符的文件全删除
rm *.txt    // 不管名字多长，是什么字符，只要后缀为.txt都删掉
```

### ps（process state）

查看进程的信息

```js
ps -ef                 // 显示所有的进程信息，连同命令行
ps -aux                // 查看进程详细信息
```

### kill/killall

```js
kill -l                   // 查看所有信号（总共64个）  9）SIGKILL 信号号码）信号名
kill -信号号码 进程名字      // 杀死进程
killall -信号号码 进程名字   // 杀死所有叫这个名字的进程
```

### df（disk format）

查看磁盘分区信息

```js
df -hT                   // h带单位显示，T显示文件系统类型
```

### du（disk usage）

查看磁盘使用情况

```js
du -sh dir/              // 显示目录所占的空间
du -sh file              // 显示文件所占的空间    
```

### chmod（change mode）

更改文件权限

**r=4，w=2，x=1**

- 若要 rwx 属性则 4+2+1=7；
- 若要 rw- 属性则 4+2=6；
- 若要 r-x 属性则 4+1=5。

```js
chmod 八进制数 文件名字
chmod 777 main          // 给main权限修改为全部可读可写可执行
```

### chown/chgrp（change owner）（change group）

更改所属者/更改所属组

```js
sudo chown 用户名 文件名  // 更改所属者
sudo chgrp 用户名 文件名  // 更改所属组
```

### adduser/deluser（delete user）

添加用户/删除用户

```js
sudo adduser nox                 // 添加一般用户
sudo adduser -g root nox         // 添加用户nox，并指定用户所在的组为root用户组
sudo adduser -r nox              // 创建系统用户nox

sudo deluser nox                 // 删除用户
```

### addgroup/delgroup

添加组/删除组

```js
sudo addgroup 组名               //添加组
sudo delgroup 组名               //删除组
```

### man（manuals）

帮助手册（学习汉字时字典）

```js
一共有9册：
1：用户在shell环境可操作的命令或执行文件；
2：系统内核可调用的函数与工具等
3：一些常用的函数(function)与函数库(library)，大部分为C的函数库(libc)
4：设备文件说明，通常在/dev下的文件
5：配置文件或某些文件格式
6：游戏(games)
7：惯例与协议等，如Linux文件系统，网络协议，ASCII code等说明
8：系统管理员可用的管理命令
9：跟kernel有关的文件
安装完整的man手册：
sudo apt install manpages
sudo apt install manpages-dev
sudo apt install manpages-posix
sudo apt install manpages-posix-dev
sudo apt install manpages-zh

查询方法：
man [手册数] 关键字
man 1 ls    //查询命令
man 3 printf   //查标准IO函数

如果不清楚关键字在哪一个手册？
man -f 关键字
```