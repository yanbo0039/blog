import{_ as e,X as a,Y as r,a1 as s,a0 as c}from"./framework-68dd73a2.js";const t="/blog/assets/Oracle_5_1.png",o="/blog/assets/Oracle_5_2.png",n="/blog/assets/Oracle_5_3.png",i="/blog/assets/Oracle_5_4.png",d={},h=c(`<h1 id="初识oracle" tabindex="-1"><a class="header-anchor" href="#初识oracle" aria-hidden="true">#</a> 初识ORACLE</h1><h4 id="oracle" tabindex="-1"><a class="header-anchor" href="#oracle" aria-hidden="true">#</a> Oracle</h4><h4 id="使用系统用户登录oracle" tabindex="-1"><a class="header-anchor" href="#使用系统用户登录oracle" aria-hidden="true">#</a> 使用系统用户登录oracle</h4><pre><code>系统用户：
. sys, system 这两权限都比较高、其中sys高于system用户
sys登录必须以管理或者系统操作人员的权限才能登录而system可以直接登录
. sysman 用于来操作我们的企业管理器来使用的也是管理员级别的用户
. scott 实际也是我们oracle创始人的名字
</code></pre><p>sys,system,sysman 是由于我们自己创建的，scott默认密码是tiber</p><pre><code>使用system用户登录
[username/password][@server][as sysdba|sysoper]
system/root @orcl as sysdba orcl就是自己设置的服务名
</code></pre><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>SQL Plus:
scott/scott123
connect scott/scott123
connect sys/orcl as sysdba
</code></pre><p>SQL语句中不区分大小写 大写小写均可以；未写[@server]表示数据库跟服务器安装在同一台机器上，因此不需要有服务名</p><h3 id="oracle-用户和表空间之查看登录用户" tabindex="-1"><a class="header-anchor" href="#oracle-用户和表空间之查看登录用户" aria-hidden="true">#</a> Oracle 用户和表空间之查看登录用户</h3><h4 id="查看登录用户" tabindex="-1"><a class="header-anchor" href="#查看登录用户" aria-hidden="true">#</a> 查看登录用户</h4><pre><code>. show user 命令
</code></pre><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>输入命令不需要以 分号 结尾；但是输入一些SQL语句时需要以分号结尾；</p><p>还可以通过一些数据字典来查一些其它的用户信息</p><pre><code>.dba_users 数据字典
数据字典是数据库提供的表，用于查看数据库的信息。
desc dba_user
</code></pre><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="oracle用户和表空间之启用scott用户" tabindex="-1"><a class="header-anchor" href="#oracle用户和表空间之启用scott用户" aria-hidden="true">#</a> Oracle用户和表空间之启用scott用户</h3><h4 id="启用scott用户" tabindex="-1"><a class="header-anchor" href="#启用scott用户" aria-hidden="true">#</a> 启用scott用户</h4><pre><code>scott默认情况下是锁定的，所以需要为其斛锁
启用用户的语句
alter user username account unlock
</code></pre><h3 id="oracle-用户和表空间之表空间概述" tabindex="-1"><a class="header-anchor" href="#oracle-用户和表空间之表空间概述" aria-hidden="true">#</a> Oracle 用户和表空间之表空间概述</h3><h4 id="表空间" tabindex="-1"><a class="header-anchor" href="#表空间" aria-hidden="true">#</a> 表空间</h4><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,27);function l(p,g){return a(),r("div",null,[s(" more "),h])}const u=e(d,[["render",l],["__file","index.html.vue"]]);export{u as default};