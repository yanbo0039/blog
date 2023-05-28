import{_ as o,X as s,Y as g,a1 as e,Z as i,$ as l,a2 as n,a0 as t,F as r}from"./framework-68dd73a2.js";const u="/blog/assets/MySql_4_1.png",c="/blog/assets/MySql_4_2.png",p="/blog/assets/MySql_4_3.png",_="/blog/assets/MySql_4_4.png",f="/blog/assets/MySql_4_5.png",d="/blog/assets/MySql_4_6.png",m="/blog/assets/MySql_4_7.png",y="/blog/assets/MySql_4_8.png",b="/blog/assets/MySql_4_9.png",S="/blog/assets/MySql_4_10.png",M="/blog/assets/MySql_4_11.png",q="/blog/assets/MySql_4_12.png",x="/blog/assets/MySql_4_13.png",h="/blog/assets/MySql_4_14.png",z="/blog/assets/MySql_4_15.png",I="/blog/assets/MySql_4_16.png",B="/blog/assets/MySql_4_17.png",L="/blog/assets/MySql_4_18.png",v="/blog/assets/MySql_4_19.png",U="/blog/assets/MySql_4_20.png",w="/blog/assets/MySql_4_21.png",A="/blog/assets/MySql_4_22.png",O="/blog/assets/MySql_4_23.png",Q="/blog/assets/MySql_4_24.png",D="/blog/assets/MySql_4_25.png",N="/blog/assets/MySql_4_26.png",T="/blog/assets/MySql_4_27.png",C="/blog/assets/MySql_4_28.png",E="/blog/assets/MySql_4_29.png",F="/blog/assets/MySql_4_30.png",G="/blog/assets/MySql_4_31.png",Y="/blog/assets/MySql_4_32.png",k="/blog/assets/MySql_4_33.png",V="/blog/assets/MySql_4_34.png",P="/blog/assets/MySql_4_35.png",H="/blog/assets/MySql_4_36.png",R="/blog/assets/MySql_4_37.png",K={},X={id:"_4-mysql-数据库介绍与安装-md",tabindex:"-1"},J=i("a",{class:"header-anchor",href:"#_4-mysql-数据库介绍与安装-md","aria-hidden":"true"},"#",-1),Z={href:"http://xn--4-MySQL--t49l34di90exvhxnqutg200iyl7a.md",target:"_blank",rel:"noopener noreferrer"},$=t('<li><p>数据库介绍</p><ul><li>什么是数据库 <ul><li>数据库是按照一定的数据结构来组织、存储和管理数据的仓库</li></ul></li><li>数据库的发展史 <ul><li>最早的数据库 <ul><li>通过大量的分类、比较和表格绘制的机器运行数百万穿孔卡片来进行数据的处理，其运行结果在纸上打印出来或者制成新的穿孔卡片。</li></ul></li><li>数据库发展 <ul><li>当时计算机开始广泛地应用于数据管理，对数据的共享提出了越来越高的要求，传统的文件系统已经不能满足人们的需要。能够统一管理和共享数据的数据库管理系统(DBMS)应动而生</li></ul></li></ul></li><li>数据库管理系统DBMS <ul><li>是一种操纵和管理数据库的大型软件，用于建立、使用和维护数据库，简称DBMS</li><li>它对数据库统一的管理和控制，以保证数据库的安全性和完整性。</li><li>数据库管理系统是数据库系统的核心，是管理数据库的软件。</li><li>我们一般说的数据库，就是指DBMS：数据库管理系统</li></ul></li><li>常见的数据库 <ul><li>Oracle <ul><li>运行稳定，可移植性高，功能齐全，性能超群！适用于大型企业领域。</li></ul></li><li>DB2 <ul><li>速度快、可靠性好，适于海量数据，恢复性极强。适用于大中型企业领域。</li></ul></li><li>MySQL <ul><li>开源，体积小，速度快。适用于于中小型企业领域。</li></ul></li><li>SQL Server <ul><li>全面，效率高，界面友好，操作容易，但是不跨平台。适用于中小型企业领域。</li></ul></li></ul></li></ul></li><li><p>专业术语</p><ul><li><p>表</p><ul><li>具有有固定的列数和任意的行数</li></ul><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>列</p><ul><li>一个数据项Field字段</li></ul></li><li><p>行</p><ul><li>一条记录 row</li></ul></li><li><p>数据库</p><ul><li>数据库是一些关联表的集合</li></ul></li><li><p>主键</p><ul><li>主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。</li></ul></li><li><p>外键</p><ul><li>外键用于关联两个表</li></ul></li><li><p>索引</p><ul><li>使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。</li></ul></li></ul></li>',2),j=i("p",null,"MySQL数据库",-1),W=i("li",null,[l("Mysql介绍 "),i("ul",null,[i("li",null,"MySQL是一个关系型数据库管理系统，由瑞典MySQL AB公司开发，目前属于Oracle公司。MySQL是一种关联数据库管理系统，关联数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度 并提高了灵活性。"),i("li",null,"Mysql是开源的，所以你不需要支付额外的费用。"),i("li",null,"Mysql支持大型的数据库。可以处理拥有上千万条记录的大型数据库。"),i("li",null,"Mysql使用标准的SQL数据语言形式。"),i("li",null,"Mysql可以允许于多个系统上，并且支持多种语言。这些编程语言包括C、C++、Pytho、Java、PHP、Eiffel、Ruby和Tcl等。")])],-1),ii=i("p",null,"下载地址",-1),li={href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"},ti=t('<figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+M+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+U+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',21),ai=t('<li><p>常用数据库命令</p><ul><li><p>Mysql数据库分为两种</p><ul><li>系统数据库(数据库服务器自带的.自带的4个) <ul><li>information_schema <ul><li>存储数据库对象信息</li><li>如用户表信息.列信息。根除.字符.分区</li><li>里面的内容我们不能动。</li></ul></li><li>performance_schema <ul><li>存储数据库服务器性能参数信息</li></ul></li><li>mysql <ul><li>存储数据库用户权限信息</li></ul></li><li>sys <ul><li>通过这个库可以快速的了解系统的元数据信息</li></ul></li></ul></li><li>用户数据库 <ul><li>用户自己创建数据库，一个项目用一个数据库</li></ul></li></ul></li><li><p>创建数据库</p><ul><li>create database 数据库名称</li></ul></li><li><p>删除数据库</p><ul><li>drop database 数据库名称</li></ul></li><li><p>查看数据库</p><ul><li>show databases;</li></ul></li><li><p>使用数据库</p><ul><li>use 数据库名;</li></ul><figure><img src="'+O+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+Q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+D+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+T+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+F+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+G+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+Y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+H+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul></li><li><p>连接Navicat</p><ul><li>更改加密方式 <ul><li>alter user &#39;root&#39;@&#39;localhost&#39; identified by &#39;password&#39; password expire never;</li><li>alter user &#39;root&#39;@&#39;localhost&#39; identified with mysql_native_password by &#39;password&#39;;</li><li>flush privileges;</li></ul></li><li>软件获取</li></ul><figure><img src="'+R+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>字符集</p><ul><li>字符集的由来 <ul><li>计算机只能识别二进制代码无论是计算机程序还是数据，最终都会转换成二进制，计算机才能认识。</li><li>为了计算机不只能做科学计算，也能处理文字信息。人们想出了给每一个文字符号编码以便于计算识别处理的办法 ，这就是计算机字符集的由来。</li><li>我 00001</li><li>人 00010</li></ul></li><li>ASSCII <ul><li>一套文字符及其编码比较规则的集合。 <ul><li>20世纪60年代初。美国标准化组织ANSI发布了第一个字符集。ASCII后来又进一步成了国际标准ISO-646</li></ul></li><li>各大字符集 <ul><li>自ASCII后。为了处理不同的文字。各大计算机公司。各国，标准化政府，组织先后发明了几百种字符集。 <ul><li>ISO-8859</li><li>GB2312-80</li><li>GBK</li><li>BIG5</li></ul></li><li>这些五花八门的字符集从收录的字符集到编码规则各不相同，给计算机软件开发和移植带来了很大困难。</li><li>一个软件要在使用不同文字的国家和地区发布，必须得要做本地化开发。</li><li>基于这个原因，要统一字符编码。</li></ul></li></ul></li><li>unicode <ul><li>为了统一字符编码，国际标准化组织ISO的一些成员国于1984年发起制定了新的国际字符集标准。容纳全世界各种语言，文字，和 符号。最后这个标准ISO-10646</li><li>ISO-10646发布后，遭到了美国计算机公司的反对。</li><li>1988年，Xerox公司提议制定了新的以16位编码人统一字符集，并联合不Apple,IBM,SUM,Microsoft等公司成立了Unicode技术委员会，专门负责收集，整理，和编码，于1991年推出了Unicode1.0</li><li>都是为了字符编码统一问题，ISO和Unicode协会推出了连个不同人标准，这显然是不利的，后来双方开始谈判。1991年10月达成协议。ISO将Unicode收编，起了个名BMP。</li><li>Unicode是用0至65535之间的数字来表示所有字符</li><li>其中0至127这128个数字的字符仍然跟ASCII完全一样</li></ul></li><li>UTF-16 <ul><li>怎么把0至65535这些数字转化成01串保存到计算机中</li><li>于是出现了UTF(unicode transformation format).</li><li>UTF-16比较好理解，就是任何字符对应的数字都用两个字节来保存。</li><li>但是很显然如果都是英文字母这做有点浪费，明明用一个字节都表示一个字符为啥整两个啊</li></ul></li><li>UTF-8 <ul><li>于是有个UTF-8</li><li>这里的8非常容易误导人，8不是指一个字节</li><li>当用UTF-8时表示一个字符是可变的，有可能是用一个字节表示一个字符，也可能是两个，三个。。反正是根据字符对应的数字大小来确定。</li></ul></li><li>汉字的一些常见字符集 <ul><li>GB2312</li><li>GB13000</li><li>GBK</li><li>GB18030</li></ul></li></ul></li><li><p>MySql的存储引擎</p><ul><li>什么是存储引擎 <ul><li>MySQL中的数据用各种不同的技术存储在文件(或者内存)中。这些技术中的每一种技术都使用不同的存储机制、索引技巧、锁定水平并且最终提供广泛的不同的功能和能力。通过选择不同的技术，你能够获得额外的或者功能，从而改善你的应用的整体功能。</li><li>不同的存储引擎性能是不一样的</li></ul></li><li>存储引擎分类 <ul><li>MYISAM <ul><li>它不支持事务，也不支持外键，尤其是访问速度快，对事务完整性没有要求或者以SELECT、INSERT为主的应用基本都可以使用这个引擎来创建表。</li><li>每个MylSAM在磁盘上存储成3个文件，其中文件名和表名相同，但是扩展名分别为： <ul><li>.frm(存储表定义)</li><li>MYD(MYData,存储数据)</li><li>MYI(MYIndex,存储索引)</li></ul></li></ul></li><li>INNODB <ul><li>InnoDB存储引擎提供了具有提交、回滚和崩溃恢复能力的事务安全，但是对比MylSAM的存储引擎，InnoDB写的处理效率差一些并且会占用更多的磁盘空间以保留数据和索引。</li></ul></li><li>MEMORY <ul><li>memory使用存在内存中的内容来创建表。每个memory表实际对应一个磁盘文件，格式是.frm</li><li>memory类型的表访问非常快，因为它到数据是放在内存中的，并且默认使用HASH索引，但是一旦服务器关闭，表中的数据就会丢失，但表还会继续存在。</li></ul></li></ul></li></ul></li>',4),ni=i("p",null,[i("strong",null,[l("以上就是我关于 "),i("em",null,"MySQL-数据库介绍与安装"),l(" 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。")])],-1),oi=i("hr",null,null,-1),si=i("h3",{id:"分割线",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),l(" 分割线")],-1),gi=i("hr",null,null,-1),ei=i("p",null,[i("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function ri(ui,ci){const a=r("ExternalLinkIcon");return s(),g("div",null,[e(" more "),i("h1",X,[J,l(),i("a",Z,[l("4-MySQL-数据库介绍与安装.md"),n(a)])]),i("ul",null,[i("li",null,[l("数据库基础知识 "),i("ul",null,[$,i("li",null,[j,i("ul",null,[W,i("li",null,[l("Mysql安装 "),i("ul",null,[i("li",null,[l("windows安装 "),i("ul",null,[i("li",null,[ii,i("ul",null,[i("li",null,[i("a",li,[l("https://dev.mysql.com/downloads/mysql/"),n(a)])])]),ti])])])])])])]),ai])])]),ni,oi,si,gi,ei])}const _i=o(K,[["render",ri],["__file","index.html.vue"]]);export{_i as default};
