import{_ as e,X as o,Y as p,a1 as t,Z as s,$ as n,a2 as c,a0 as l,F as i}from"./framework-68dd73a2.js";const r="/blog/assets/Oracle_62_1.png",k={},d={id:"_62-oracle-sql开发-用户、权限与角色-md",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#_62-oracle-sql开发-用户、权限与角色-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--jhq672dsht0xg2iq.md",target:"_blank",rel:"noopener noreferrer"},v=l('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><ul><li>用户 <ul><li>用户是数据库的使用者。</li><li>用户一般是由DBA来创建和维护的，创建用户后，用户不可 以执行任何Oracle操作（包括建立会话），只有赋予用户 相关的权限，用户才能执行权限允许范围内的操作。</li></ul></li></ul><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>权限 <ul><li>权限概述</li><li>数据库用户要想在数据库上执行任何操作，必须首先要拥 有权限，包括建立会话。</li></ul></li><li>权限分类 <ul><li>系统权限：允许用户在数据库中执行指定的行为，一般可 以理解成比较通用的一类权限。</li><li>对象权限：允许用户访问和操作一个指定的对象，该对象 是一个确切存储在数据库中的命名对象。</li></ul></li><li>系统特权 <ul><li>SYSOPER：启动停止数据库，恢复数据库等；</li><li>SYSDBA：所有SYSOPER功能的管理权限；创建数据库等权限</li></ul></li></ul><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">----------------------------------------------</span>
<span class="token comment">-- 用户</span>
<span class="token comment">----------------------------------------------</span>
<span class="token number">1.</span>【管理员】创建用户
<span class="token keyword">create</span> <span class="token keyword">user</span> user1 identified <span class="token keyword">by</span> <span class="token number">123456</span><span class="token punctuation">;</span>

<span class="token number">2.</span>【管理员】授权用户：访问数据库的权限<span class="token keyword">create</span> <span class="token keyword">session</span>
<span class="token keyword">grant</span> <span class="token keyword">create</span> <span class="token keyword">session</span> <span class="token keyword">to</span> user1<span class="token punctuation">;</span>

<span class="token number">3.</span>【user1】创建表tab_test
<span class="token keyword">create</span> <span class="token keyword">table</span> tab_test<span class="token punctuation">(</span>
       tid number<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">4.</span>【管理员】授权用户：创建表的权限<span class="token keyword">create</span> <span class="token keyword">table</span>
<span class="token keyword">grant</span> <span class="token keyword">create</span> <span class="token keyword">table</span> <span class="token keyword">to</span> user1<span class="token punctuation">;</span>

<span class="token number">5.</span>【管理员】授权表空间：
<span class="token keyword">alter</span> <span class="token keyword">user</span> user1 quota <span class="token number">10</span>M <span class="token keyword">on</span> users<span class="token punctuation">;</span>

<span class="token number">6.</span>修改密码 ① 用户已登录，修改密码  ② 用户忘记密码，管理重置
<span class="token keyword">alter</span> <span class="token keyword">user</span> user1 identified <span class="token keyword">by</span> <span class="token number">123</span><span class="token punctuation">;</span>

<span class="token number">7.</span>用户状态：正常（未锁定）、锁定、密码过期
<span class="token keyword">alter</span> <span class="token keyword">user</span> user1 account <span class="token keyword">lock</span><span class="token punctuation">;</span><span class="token comment">--管理员锁定（the account is locked）</span>
<span class="token keyword">alter</span> <span class="token keyword">user</span> user1 account <span class="token keyword">unlock</span><span class="token punctuation">;</span><span class="token comment">--管理员解锁</span>
<span class="token keyword">alter</span> <span class="token keyword">user</span> user1 password expire<span class="token punctuation">;</span><span class="token comment">--管理员设置密码过期</span>

<span class="token number">8.</span>【管理员】删除用户:处于连接状态的用户不能被删除
<span class="token keyword">drop</span> <span class="token keyword">user</span> user1 <span class="token keyword">cascade</span><span class="token punctuation">;</span>

<span class="token comment">----------------------------------------------</span>
<span class="token comment">-- 权限： 系统权限 与 对象权限</span>
<span class="token comment">--</span>
<span class="token comment">--     系统权限：A-&gt;B-&gt;C, 当A回收B的权限时，【不会级联】回收C的权限</span>
<span class="token comment">--     对象权限：A-&gt;B-&gt;C, 当A回收B的权限时，【会级联】  回收C的权限</span>
<span class="token comment">----------------------------------------------</span>
<span class="token keyword">create</span> <span class="token keyword">user</span> user2 identified <span class="token keyword">by</span> <span class="token number">123456</span><span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">user</span> user3 identified <span class="token keyword">by</span> <span class="token number">123456</span><span class="token punctuation">;</span>

<span class="token comment">--系统权限</span>
<span class="token number">1.</span>授系统权限给用户   <span class="token keyword">grant</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">to</span>    <span class="token comment">--with admin option 允许user2继续将该权限授权给其他用户，比如User3  管理员 -&gt; user2 -&gt; user3</span>
<span class="token keyword">grant</span> <span class="token keyword">create</span> <span class="token keyword">session</span> <span class="token keyword">to</span> user2 <span class="token keyword">with</span> admin <span class="token keyword">option</span><span class="token punctuation">;</span><span class="token comment">--管理员授权给user2</span>
<span class="token keyword">grant</span> <span class="token keyword">create</span> <span class="token keyword">session</span> <span class="token keyword">to</span> user3<span class="token punctuation">;</span>                  <span class="token comment">--user2授权给user3</span>

<span class="token number">2.</span>从用户撤回系统权限 <span class="token keyword">revoke</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">from</span> <span class="token comment">--  A-&gt;B-&gt;C, 当A回收B的权限时，不会级联回收C的权限</span>
<span class="token keyword">revoke</span> <span class="token keyword">create</span> <span class="token keyword">session</span> <span class="token keyword">from</span> user2<span class="token punctuation">;</span>
<span class="token keyword">revoke</span> <span class="token keyword">create</span> <span class="token keyword">session</span> <span class="token keyword">from</span> user3<span class="token punctuation">;</span>

<span class="token comment">--对象权限</span>
<span class="token number">1.</span>授对象权限给用户 <span class="token keyword">grant</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">on</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">to</span> <span class="token comment">--with grant option 允许user2继续将该权限授权给其他用户，比如User3  scott -&gt; user2 -&gt; user3</span>
<span class="token keyword">grant</span> <span class="token keyword">select</span> <span class="token keyword">on</span> emp <span class="token keyword">to</span> user2 <span class="token keyword">with</span> <span class="token keyword">grant</span> <span class="token keyword">option</span><span class="token punctuation">;</span>   <span class="token comment">--scott授权给user2</span>
<span class="token keyword">grant</span> <span class="token keyword">select</span> <span class="token keyword">on</span> scott<span class="token punctuation">.</span>emp <span class="token keyword">to</span> user3<span class="token punctuation">;</span>               <span class="token comment">--user2授权给user3   单个授权</span>

<span class="token keyword">grant</span> <span class="token keyword">update</span><span class="token punctuation">,</span><span class="token keyword">insert</span><span class="token punctuation">,</span><span class="token keyword">delete</span> <span class="token keyword">on</span> scott<span class="token punctuation">.</span>emp <span class="token keyword">to</span> user2<span class="token punctuation">;</span> <span class="token comment">--scott授权给user2  批量授权</span>

<span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">privileges</span> <span class="token keyword">on</span> scott<span class="token punctuation">.</span>emp <span class="token keyword">to</span> user2<span class="token punctuation">;</span>       <span class="token comment">--scott授权给user2  全量授权</span>

<span class="token keyword">grant</span> <span class="token keyword">update</span><span class="token punctuation">(</span>job<span class="token punctuation">,</span>deptno<span class="token punctuation">)</span> <span class="token keyword">on</span> scott<span class="token punctuation">.</span>emp <span class="token keyword">to</span> user2<span class="token punctuation">;</span>    <span class="token comment">--scott授权给user2  仅限制修改job与deptno列</span>

<span class="token number">2.</span>从用户撤回对象权限  <span class="token keyword">revoke</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">on</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">from</span> <span class="token comment">--  A-&gt;B-&gt;C, 当A回收B的权限时，会级联回收C的权限</span>
<span class="token keyword">revoke</span> <span class="token keyword">select</span> <span class="token keyword">on</span> scott<span class="token punctuation">.</span>emp <span class="token keyword">from</span> user2<span class="token punctuation">;</span>

<span class="token comment">----------------------------------------------</span>
<span class="token comment">-- 角色：权限的集合</span>
<span class="token comment">----------------------------------------------</span>
<span class="token number">1.</span>【管理员】创建角色
<span class="token keyword">create</span> role stuRole<span class="token punctuation">;</span>

<span class="token number">2.</span>【管理员】给角色授权
<span class="token keyword">grant</span> <span class="token keyword">create</span> <span class="token keyword">session</span><span class="token punctuation">,</span><span class="token keyword">create</span> <span class="token keyword">table</span><span class="token punctuation">,</span><span class="token keyword">create</span> <span class="token keyword">view</span> <span class="token keyword">to</span> stuRole<span class="token punctuation">;</span>

<span class="token number">3.</span>【管理员】创建用户
<span class="token keyword">create</span> <span class="token keyword">user</span> user4 identified <span class="token keyword">by</span> <span class="token number">123456</span><span class="token punctuation">;</span>
<span class="token keyword">create</span> <span class="token keyword">user</span> user5 identified <span class="token keyword">by</span> <span class="token number">123456</span><span class="token punctuation">;</span>

<span class="token number">4.</span>【管理员】给用户授予角色
<span class="token keyword">grant</span> stuRole <span class="token keyword">to</span> user4<span class="token punctuation">;</span>
<span class="token keyword">grant</span> stuRole <span class="token keyword">to</span> user5<span class="token punctuation">;</span>

<span class="token number">5.</span>【user4】查看权限
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> session_privs<span class="token punctuation">;</span>

<span class="token number">6.</span>【管理员】回收角色的权限
<span class="token keyword">revoke</span> <span class="token keyword">create</span> <span class="token keyword">session</span> <span class="token keyword">from</span> stuRole<span class="token punctuation">;</span>

<span class="token number">7.</span>【管理员】回收用户的角色
<span class="token keyword">revoke</span> stuRole <span class="token keyword">from</span> user4<span class="token punctuation">;</span>

<span class="token number">8.</span>【管理员】删除角色
<span class="token keyword">drop</span> role stuRole<span class="token punctuation">;</span>

<span class="token comment">----------------------------------------------</span>
<span class="token comment">-- 预定义角色：DBA、Connect、Resource</span>
<span class="token comment">----------------------------------------------</span>
<span class="token keyword">create</span> <span class="token keyword">user</span> user6 identified <span class="token keyword">by</span> <span class="token number">123456</span><span class="token punctuation">;</span>
<span class="token keyword">grant</span> <span class="token keyword">connect</span><span class="token punctuation">,</span>resource <span class="token keyword">to</span> user6<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dba_sys_privs <span class="token keyword">where</span> grantee <span class="token operator">=</span> <span class="token string">&#39;DBA&#39;</span><span class="token punctuation">;</span><span class="token comment">--管理员权限</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dba_sys_privs <span class="token keyword">where</span> grantee <span class="token operator">=</span> <span class="token string">&#39;CONNECT&#39;</span><span class="token punctuation">;</span><span class="token comment">--管理员权限  CREATE SESSION</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dba_sys_privs <span class="token keyword">where</span> grantee <span class="token operator">=</span> <span class="token string">&#39;RESOURCE&#39;</span><span class="token punctuation">;</span><span class="token comment">--管理员权限</span>

<span class="token comment">----------------------------------------------</span>
<span class="token comment">-- public</span>
<span class="token comment">----------------------------------------------</span>
<span class="token keyword">grant</span> <span class="token keyword">create</span> <span class="token keyword">session</span> <span class="token keyword">to</span> <span class="token keyword">public</span><span class="token punctuation">;</span><span class="token comment">--将登陆权限授权给所有人</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Oracle-SQL开发 ---- 用户、权限与角色</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,15);function b(y,w){const a=i("ExternalLinkIcon");return o(),p("div",null,[t(" more "),s("h1",d,[u,n(" 62-Oracle-SQL开发 ---- 用户、"),s("a",m,[n("权限与角色.md"),c(a)])]),v])}const h=e(k,[["render",b],["__file","oracle62.html.vue"]]);export{h as default};
