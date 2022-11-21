---
id: elasticsearch-note
slug: /skill/database/elasticsearch
title: elasticsearch笔记
date: 2021-03-15
tags: [elasticsearch, database]
keywords: [elasticsearch, database]
---

[Elasticsearch Clients | Elastic 官方文档](https://www.elastic.co/guide/en/elasticsearch/client/index.html)

## 安装

下载地址:[Elasticsearch, Kibana, and the Elastic Stack | Elastic](https://www.elastic.co/cn/start)

### window

解压，双击 bin 目录下的 `elasticsearch.bat` 即可启动，kibana 也是同理。

启动后输入 http://localhost:9200 与 http://localhost:5601/ 显示正常说明两者都安装成功

### linux

同 windows 不过多叙述了

### docker

当然上面那些安装都过于麻烦，docker 一步到位

#### elasticsearch

[elasticsearch (docker.com)](https://hub.docker.com/_/elasticsearch)

```
# 创建自定义网络与kibana通信
docker network create esnet

# 挂载目录 端口映射
docker run -d --name elasticsearch --net esnet -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -v /data/elasticsearch:/usr/share/elasticsearch/data -v /data/elasticsearch/plugins:/usr/share/elasticsearch/plugins elasticsearch:tag

```

参数详解

```text
docker run 创建并启动容器
-d 后台运行
--name elasticsearch 指定容器唯一的名称，方便管理
-p 9200:9200 -p 9300:9300 映射容器端口到宿主机上
-e "discovery.type=single-node" 环境变量配置单机模式
-v /data/elasticsearch:/usr/share/elasticsearch/data 持久化数据存储
-v /data/elasticsearch/plugins:/usr/share/elasticsearch/plugins
elasticsearch:tag 镜像名称及版本 tag最新
```

#### kibana

```
docker run -d --name kibana --net esnet -p 5601:5601 kibana:tag
```

#### ik 分词器

```sh
cd /usr/share/elasticsearch/plugins/
elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.2.0/elasticsearch-analysis-ik-7.2.0.zip
exit
docker restart elasticsearch
```

或

```sh
docker exec -it 容器id /bin/bash
cd /usr/share/elasticsearch/plugins/
mkdir ik
cd ik
wget https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.6.2/elasticsearch-analysis-ik-7.6.2.zip
yum install unzip
unzip elasticsearch-analysis-ik-7.6.2.zip
exit
docker restart elasticsearch
```

然后可以在 kibana 界面的`dev tools`中验证是否安装成功；

```
POST test/_analyze
{
  "analyzer": "ik_max_word",
  "text": "你好我是📺尚宇"
}
```

#### 设置密码

[ElasticSearch 设置账户密码](https://blog.csdn.net/qq_43188744/article/details/108096394)

进入 es 容器

```
docker exec -it elasticsearch bash

cd config
vi elasticsearch.yml
```

添加如下代码

```
http.cors.enabled: true
http.cors.allow-origin: "*"
http.cors.allow-headers: Authorization
xpack.security.enabled: true
```

重启后,重新进入容器,输入

```
elasticsearch-setup-passwords interactive
```

按 y 确认后即可设置密码

进入 kibana 容器

```
docker exec -it kibana bash

cd config
vi kibana.yml
```

添加如下代码

```
elasticsearch.username: "kibana"
elasticsearch.password: "a123456"
```

顺便在加这几行代码，后续如果导出数据过大的话也导的出来

```
xpack.reporting.csv.maxSizeBytes: 409715200
xpack.reporting.queue.timeout: 2800000
```

登录 Kibana 的账户就是 kibana,elasticsearch 的账户为 elastic.

## docker-compose

创建 volume 挂载目录，并修改目录用户和用户组。由于 elasticsearch6 之后不允许使用 root 启用，所以需要修改

```
/usr/share/elasticsearch/data的权限为1000
mkdir -pv /usr/share/elasticsearch/data
chown 1000:1000 /usr/share/elasticsearch/data
```

部署文件

```
mkdir /usr/local/elasticsearch-kibana
cd elasticsearch-kibana/
vim docker-compose.yml
```

docker-compose.yml

```yaml
version: '3.9'
services:
  elasticsearch:
    image: elasticsearch:7.2.0
    container_name: elasticsearch
    volumes:
      - /usr/share/elasticsearch/data:/usr/share/elasticsearch/data
      - ./elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml
    ports:
      - 9200:9200
      - 9300:9300
    networks:
      - esnet
    restart: always
  kibana:
    image: kibana:7.2.0
    container_name: kibana
    ports:
      - 5601:5601
    networks:
      - esnet
    depends_on:
      - elasticsearch
    restart: always

networks:
  esnet:
```

vim elasticsearch.yml

```
#集群名
cluster.name: "elasticsearch"
# 允许外部网络访问
network.host: 0.0.0.0
#支持跨域
http.cors.enabled: true
#支持所有域名
http.cors.allow-origin: "*"
# 开启xpack安全校验，在kibana中使用需要输入账号密码
xpack.security.enabled: true
xpack.security.transport.ssl.enabled: true

```

启动 docker-compose `docker-compose up -d`

至此有关 elasticSearch 安装与配置就告一段落

## 数据迁移

### elasticdump

[elasticsearch-dump/elasticsearch-dump](https://github.com/elasticsearch-dump/elasticsearch-dump)

这里使用 elasticdump (因为只会这个)

#### 安装

```sh
npm install elasticdump -g
elasticdump
```

#### 命令

```
elasticdump --input SOURCE --output DESTINATION [OPTIONS]
```

##### 参数

- limit

  每个操作要批量移动多少对象,Limit 是文件流的近似值 默认:100

- type

  导出类型 默认 data [settings, analyzer, data, mapping, policy, alias, template, component_template, index_template]

- 其他参数看文档,暂时都用不上

例:

```sh
# 将es数据导入另一台es数据
elasticdump --input=http://production.es.com:9200/my_index --output=http://staging.es.com:9200/my_index --all=true --limit=2000

# 或
elasticdump \
  --input=http://production.es.com:9200/my_index \
  --output=http://staging.es.com:9200/my_index \
  --type=analyzer
elasticdump \
  --input=http://production.es.com:9200/my_index \
  --output=http://staging.es.com:9200/my_index \
  --type=mapping
elasticdump \
  --input=http://production.es.com:9200/my_index \
  --output=http://staging.es.com:9200/my_index \
  --type=data

# 备份文件到本地
elasticdump \
  --input=http://production.es.com:9200/my_index \
  --output=/data/my_index_mapping.json \
  --type=mapping
elasticdump \
  --input=http://production.es.com:9200/my_index \
  --output=/data/my_index.json \
  --type=data

```

#### docker 安装

```
docker pull elasticdump/elasticsearch-dump
```

例:

```
# Copy an index from production to staging with mappings:
docker run --rm -ti elasticdump/elasticsearch-dump \
  --input=http://production.es.com:9200/my_index \
  --output=http://staging.es.com:9200/my_index \
  --type=mapping
docker run --rm -ti elasticdump/elasticsearch-dump \
  --input=http://production.es.com:9200/my_index \
  --output=http://staging.es.com:9200/my_index \
  --type=data

# Backup index data to a file:
docker run --rm -ti -v /data:/tmp elasticdump/elasticsearch-dump \
  --input=http://production.es.com:9200/my_index \
  --output=/tmp/my_index_mapping.json \
  --type=data
```

## 常用命令

### 查询并删除匹配文档

正常查询对应的代码

```
GET answer/_search
{
  "query": {
    "match_phrase": {
      "topic": "测试"
    }
  }
}
```

要删除 topic 为“测试”，只需要将`_search`替换为`_delete_by_query`即可。

---

暂时只用到这些 TODO。。。

## 注意事项

### elasticsearch 默认输出一万条

elasticsearch 默认输出最多一万条，查询第 10001 条数据就会报错

解决方案:

1、修改 elasticsearch 输出默认限制条数

```
PUT 索引名称/_settings?preserve_existing=true
{
  "max_result_window": "1000000"
}
```

2、创建索引时设置

```
"settings":{
    "index":{
        "max_result_window":1000000
 　　}
}
```

3、在请求的时候附加参数`"track_total_hits":true`

### elasticsearch 默认分配内容为 1g

elasticsearch 默认分配内容为 1g，在`jvm.options`配置如下

```
################################################################
## IMPORTANT: JVM heap size
################################################################
##
## The heap size is automatically configured by Elasticsearch
## based on the available memory in your system and the roles
## each node is configured to fulfill. If specifying heap is
## required, it should be done through a file in jvm.options.d,
## and the min and max should be set to the same value. For
## example, to set the heap to 4 GB, create a new file in the
## jvm.options.d directory containing these lines:
##
## -Xms4g
## -Xmx4g
##
## See https://www.elastic.co/guide/en/elasticsearch/reference/current/heap-size.html
## for more information
##
################################################################

-Xms1g
-Xmx1g
```

将其更改为服务器可分配的的内存，比如 32g，就分配个 16g 即可

```
-Xms16g
-Xmx16g
```

重启 elasticsearch 生效。

### kibana 设置导出 csv 大小

kibana 默认导出的 csv 有文件大小限制，默认是 10M，数据量大于 10M，那么 csv 只会下载 10M 大小的数据

并且导出 CSV 报告 Kibana 是放入队列中执行的，有一个处理超时时间，默认是 12000 毫秒，也就是 2 分钟

解决方案: 通过修改配置可以更改限制大小

`vim kibana.yml`

```
# csv文件大小200MB,默认为10485760（10MB）
xpack.reporting.csv.maxSizeBytes: 209715200
# 超时时间-30分钟,默认是120000(2分钟)
xpack.reporting.queue.timeout: 1800000
```

**修改后，重启 kibana 即可生效**

> 参考 [Kibana 7.X 导出 CSV 报告](https://blog.csdn.net/qq_25646191/article/details/108641758)

### Kibana server is not ready yet

访问 Elasticsearch 的 9200 端口，能正常访问，但访问 Kibana 的 5601 端口就提示

```
Kibana server is not ready yet
```

**解决办法**

将配置文件 kibana.yml 中的 elasticsearch.url 改为正确的链接，默认为: http://elasticsearch:9200，改为 http://自己的 IP 地址:9200

```
# Default Kibana configuration for docker target
server.name: kibana
server.host: "0"
elasticsearch.hosts: [ "http://elasticsearch:9200" ]
xpack.monitoring.ui.container.elasticsearch.enabled: true
```

然后重启 kibana 即可，记得防火墙开放 5601 端口

#### 出问题不知道怎么解决，查看日志输出才是关键

```
docker logs 容器id(容器名)
```
