import{_ as a,X as d,Y as s,a1 as n,Z as e,$ as i,a2 as t,a0 as r,F as u}from"./framework-68dd73a2.js";const c={},v={id:"_34-oracle-用户、权限与角色-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_34-oracle-用户、权限与角色-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--jhq672dsht0xg2iq.md",target:"_blank",rel:"noopener noreferrer"},p=r(`<h4 id="章节目标" tabindex="-1"><a class="header-anchor" href="#章节目标" aria-hidden="true">#</a> 章节目标</h4><ul><li>通过本章学习，学员应达到如下目标： <ul><li>理解用户概念；</li><li>掌握创建用户方法；</li><li>理解权限概念；</li><li>理解如何进行权限分配和收回；</li><li>理解角色概念；</li><li>理解如何通过角色进行权限分配；</li></ul></li></ul><h4 id="本章内容" tabindex="-1"><a class="header-anchor" href="#本章内容" aria-hidden="true">#</a> 本章内容</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_34_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h4><ul><li>用户 <ul><li>用户是数据库的使用者。</li><li>用户一般是由DBA来创建和维护的，创建用户后，用户不可以执行任何Oracle操作（包括建立会话），只有赋予用户相关的权限，用户才能执行权限允许范围内的操作。</li></ul></li><li>创建用户 <ul><li>语法</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE USER user              			   
IDENTIFIED BY   password
[default tablespace 默认表空间名 
temp tablespace 临时表空间名 quota 配额大小 on 表空间名]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>deafult tablespace:用户的默认表空间;</p></li><li><p>temporary tablespace: 用户的临时表空间;</p></li><li><p>quota on :表示允许该用户在表空间中使用的空间大小,可以设置多个不同的表空间;</p></li><li><p>执行该语句的用户需要有“创建用户”的权限，一般为系统的DBA用户。</p></li><li><p>例:以SYSTEM用户登录，创建test用户</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE USER test IDENTIFIED BY test;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>用户被创建后，没有任何权限，包括登录。用户如果想登录，至少需要有“CREATE SESSION”的权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT CREATE SESSION TO test;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>例：以test用户身份建表</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE emp1(id NUMBER,
			name VARCHAR2(20),
			sal NUMBER);
返回权限不足。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>对新建用户，默认情况没有创建对象的权限，用户要想创建对象，需要有对象的创建权限CREATE TABLE、CREATE SEQUENCE等</p></li><li><p>赋予test用户创建表的权限</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Conn system/oracle;
GRANT CREATE TABLE TO test;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>例：test用户身份执行建表操作</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE emp1(id NUMBER,name VARCHAR2(20),sal NUMBER);
返回错误“表空间USERS中无权限”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改配额</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER USER 用户名
QUOTA 10m ON 表空间名; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>例：以SYSTEM用户身份执行，给test分配USERS表空间的10M配额</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER USER test
QUOTA 10m ON users;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>例：以test用户身份执行建表命令</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE emp1(id NUMBER,name VARCHAR2(20),sal NUMBER);
表已创建。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改密码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER USER user IDENTIFIED BY 新密码;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>DBA可以修改任何普通用户的密码，而不需要知道用户的旧密码。</p></li><li><p>在sqlplus下执行password命令来修改登录用户自己的密码，提示会输入旧密码和新密码。</p></li><li><p>用户状态</p></li><li><p>OPEN：正常状态，为用户帐号初始创建后状态。</p></li><li><p>EXPIRED：密码过期状态，用户下次登录的时候需要修改密码；</p></li><li><p>LOCKED：锁定状态，不能执行任何Oracle相关操作</p></li><li><p>状态管理语句</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER USER user PASSWORD EXPIRE;--密码过期
ALTER USER user ACCOUNT LOCK[UNLOCK];--帐户锁定/解锁
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除用户</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP USER user [CASCADE]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>CASCADE表示系统先自动删除该用户下的所有对象，然后再删除该用户的定义。</li><li>已经登录的用户是不允许被删除的。</li></ul><h4 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h4><ul><li><p>权限概述</p><ul><li>数据库用户要想在数据库上执行任何操作，必须首先要拥有权限，包括建立会话。</li></ul></li><li><p>权限分类</p><ul><li>系统权限：允许用户在数据库中执行指定的行为，一般可以理解成比较通用的一类权限。</li><li>对象权限：允许用户访问和操作一个指定的对象，该对象是一个确切存储在数据库中的命名对象。</li></ul></li><li><p>系统特权</p><ul><li>SYSOPER：启动停止数据库，恢复数据库等；</li><li>SYSDBA：所有SYSOPER功能的管理权限；创建数据库等权限。</li></ul></li></ul><h4 id="系统权限" tabindex="-1"><a class="header-anchor" href="#系统权限" aria-hidden="true">#</a> 系统权限</h4><ul><li>授予系统权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT sys_priv_list TO user_list [WITH ADMIN OPTION]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>sys_priv_list：系统特权列表，由逗号分隔;</p></li><li><p>user_list: 用户列表，由逗号分隔;</p></li><li><p>WITH ADMIN OPTION：允许权限的接受者再把此特权授予其他用户。</p></li><li><p>例：授予test用户CREATE SESSION权限，并且允许test把该权限授予别人。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT create session TO test WITH ADMIN OPTION;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>回收系统权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE sys_priv_list FROM user_list ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>注意：使用 WITH ADMIN OPTION 选项授予的权限，在回收时候的回收策略如下： <ul><li>如果A授予权限给B，B又把该权限赋予给C ，如果此时A把权限从B处收回，那么B给予出去的权限是继续保留，即C继续拥有该权限。</li></ul></li></ul><h4 id="对象权限" tabindex="-1"><a class="header-anchor" href="#对象权限" aria-hidden="true">#</a> 对象权限</h4><ul><li>对象权限 <ul><li>是在指定的表、视图、序列或过程上执行指定动作的权限或权利。</li><li>每种对象都有一个特殊的可授予的权限集。</li><li>对象的所有者自动拥有该对象的所有权限，并且能够把权限授予其它用户。</li></ul></li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_34_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>授予对象权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT object_priv | [ALL PRIVILEGES ]|[(column)]
ON		[schema.]object
TO		{user|PUBLIC} [WITH GRANT OPTION];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>object_priv：是将被授予的对象权限；</p></li><li><p>ALL PRIVILEGES：指定对象的所有权限；</p></li><li><p>column：在授予INSERT、REFERENCES或UPDATE权限时可以指定列；</p></li><li><p>ON object：指定的对象名；</p></li><li><p>TO user：指定权限被授予谁；</p></li><li><p>TO PUBLIC：授予权限给所有用户；</p></li><li><p>WITH GRANT OPTION：允许被授予权限的用户再授予对象权限给其它用户；</p></li><li><p>SCHEMA：指定用户名，如果省略，默认为当前用户；</p></li><li><p>例：把员工表的查询权限给Test用户；</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT select on employees To test;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>回收对象权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE 对象权限种类 ON 对象名 FROM user;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>对象的权限会级联回收。</li></ul><h4 id="角色" tabindex="-1"><a class="header-anchor" href="#角色" aria-hidden="true">#</a> 角色</h4><ul><li><p>角色（ROLE）</p><ul><li>角色是权限的集合。</li></ul></li><li><p>角色作用</p><ul><li>简化权限管理。</li></ul></li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_34_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="创建角色" tabindex="-1"><a class="header-anchor" href="#创建角色" aria-hidden="true">#</a> 创建角色</h4><ul><li>创建角色</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE ROLE role;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>例:以SYSTEM的用户身份建立测试角色tr</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE ROLE tr;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="为角色授权" tabindex="-1"><a class="header-anchor" href="#为角色授权" aria-hidden="true">#</a> 为角色授权</h4><ul><li>为角色授予权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT 权限列表 TO 角色列表;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>例：给角色tr授予create sequence的权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT create sequence TO tr;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="通过角色为用户授权" tabindex="-1"><a class="header-anchor" href="#通过角色为用户授权" aria-hidden="true">#</a> 通过角色为用户授权</h4><ul><li>通过角色为用户授权</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT 角色列表 To 用户列表;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>例：通过角色为用户test授权</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT tr TO test;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>以test用户登录，验证是否已拥有相关权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * FROM session_privs;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="通过角色从用户收回权限" tabindex="-1"><a class="header-anchor" href="#通过角色从用户收回权限" aria-hidden="true">#</a> 通过角色从用户收回权限</h4><ul><li>通过角色从用户收回权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE 角色 FROM 用户;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>从角色收回权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REVOKE 权限 FROM 角色;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除角色</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP ROLE 角色;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="预定义角色" tabindex="-1"><a class="header-anchor" href="#预定义角色" aria-hidden="true">#</a> 预定义角色</h4><ul><li>预定义角色 <ul><li>Oracle数据库预先定义好的角色,通常包括：</li><li>DBA角色:该角色中的权限通常赋给数据库管理员；</li><li>CONNECT角色、RESOURCE角色；</li><li>CONNECT和RESOURCE是相对较安全的角色，角色中包含的权限仅限于用户自己的对象范围，因此，经常使用CONNECT和RESOURCE来简化权限管理。</li></ul></li><li>查看DBA角色中包含的系统权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * FROM DBA_SYS_PRIVS
WHERE GRANTEE=&#39;DBA’;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看CONNECT角色中包含的系统权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * FROM DBA_SYS_PRIVS
WHERE GRANTEE=&#39;CONNECT‘;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看RESOURCE角色中包含的系统权限</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * FROM DBA_SYS_PRIVS
WHERE GRANTEE=&#39;RESOURCE‘; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="public" tabindex="-1"><a class="header-anchor" href="#public" aria-hidden="true">#</a> PUBLIC</h4><ul><li>PUBLIC <ul><li><p>PUBLIC对象既不是用户，也不是角色，代表公众，公开；PUBLIC中拥有的所有权限，所有数据库的用户都会自动拥有；为安全起见，PUBLIC中不应该拥有任何权限。</p></li><li><p>例：给PUBLIC赋予create session 权限</p></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT create session TO public;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>执行上述语句后，所有的用户都会自动从public中获得create session的权限。</li></ul><h4 id="本章重点总结" tabindex="-1"><a class="header-anchor" href="#本章重点总结" aria-hidden="true">#</a> 本章重点总结</h4><ul><li>用户的管理</li><li>权限的管理</li><li>角色的管理</li></ul><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,94);function g(x,b){const l=u("ExternalLinkIcon");return d(),s("div",null,[n(" more "),e("h1",v,[o,i(" 34-Oracle-用户、"),e("a",m,[i("权限与角色.md"),t(l)])]),p])}const E=a(c,[["render",g],["__file","oracle34.html.vue"]]);export{E as default};
