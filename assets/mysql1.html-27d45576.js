import{_ as e,X as a,Y as n,a1 as r,Z as t,$ as i,a2 as o,a0 as s,F as c}from"./framework-68dd73a2.js";const d={},g={id:"_1-mysql-windows10安装教程-md",tabindex:"-1"},p=t("a",{class:"header-anchor",href:"#_1-mysql-windows10安装教程-md","aria-hidden":"true"},"#",-1),u={href:"http://xn--1-MySQL-Windows10-6p65ax65jpr0f7v0c.md",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.mysql.com/",target:"_blank",rel:"noopener noreferrer"},m=t("figure",null,[t("img",{src:"http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_1.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),h={href:"https://dev.mysql.com/downloads/mysql/5.7.html#downloads",target:"_blank",rel:"noopener noreferrer"},_=s(`<ol start="2"><li>选择版权下载，这里以版本 5.7.26版本并且以.msi结尾的为例</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>找咯半天。。这个版本的msi结尾文件只有32位的无奈只得放弃，改下.zip结尾文件</p><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>解压安装</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>配置环境变量</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MYSQL_HOME
D:\\Program Files\\soft\\mysql-5.7.26-winx64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>path里添加：%MYSQL_HOME%\\bin</li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>生成data文件</li></ol><ul><li>以管理员身份运行cmd</li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>进入 D:\\Program Files\\soft\\mysql-5.7.26-winx64\\bin 目录下执行命令：mysqld --initialize-insecure --user=mysql 在D:\\Program Files\\soft\\mysql-5.7.26-winx64目录下生成data目录</li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>执行命令 net start mysql 启动mysql服务</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li>登录mysql 执行命令 mysql -u root -p</li></ol><ul><li><p>登录mysql:(因为之前没设置密码，所以密码为空，不用输入密码，直接回车即可）</p></li><li><p>但我的之前设置过，找咯好半天才记起来密码是 root123 。。。。。</p></li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_15.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="8"><li>查询用户密码:</li></ol><ul><li>查询用户密码命令：mysql&gt; select host,user,authentication_string from mysql.user;</li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="9"><li>设置（或修改）root用户密码：</li></ol><ul><li>设置（或修改）root用户密码：mysql&gt; update mysql.user set authentication_string=password(&quot;123456&quot;) where user=&quot;root&quot;; #password(&quot;123456&quot;),此处引号中的内容是密码，自己可以随便设置 Query OK, 1 row affected, 1 warning (0.00 sec) Rows matched: 1 Changed: 1 Warnings: 1 mysql&gt; flush privileges; #作用：相当于保存，执行此命令后，设置才生效，若不执行，还是之前的密码不变 Query OK, 0 rows affected (0.01 sec)</li></ul><ol start="10"><li>退出mysql 命令quit</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/MySql_1_17.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h4>`,34),y={href:"https://jingyan.baidu.com/article/f3ad7d0ffc061a09c3345bf0.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.cnblogs.com/reyinever/p/8551977.html",target:"_blank",rel:"noopener noreferrer"},q=t("p",null,[t("strong",null,[i("以上就是我关于 "),t("em",null,"MySQL-Windows10安装教程"),i(" 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。")])],-1),x=t("hr",null,null,-1),v=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),i(" 分割线")],-1),S=t("hr",null,null,-1),M=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function w(k,z){const l=c("ExternalLinkIcon");return a(),n("div",null,[r(" more "),t("h1",g,[p,i(),t("a",u,[i("1-MySQL-Windows10安装教程.md"),o(l)])]),t("ol",null,[t("li",null,[i("首先进入"),t("a",f,[i("MySQL官网"),o(l)]),i("，然后一顿找呀找，找到下载页面。DOWNLOADS ---> Community ---> MySQL Community Server")])]),m,t("p",null,[i("可以看到目前我们最主的版本是 8.0.16，但我们显然不用这个最新版本。。所以我们点击 "),t("a",h,[i("MySQL Community Server 5.7"),o(l)])]),_,t("p",null,[t("a",y,[i("MySQL 5.6 for Windows 解压缩版配置安装"),o(l)])]),t("p",null,[t("a",b,[i("windows下安装Mysql—图文详解"),o(l)])]),q,x,v,S,M])}const Q=e(d,[["render",w],["__file","mysql1.html.vue"]]);export{Q as default};
