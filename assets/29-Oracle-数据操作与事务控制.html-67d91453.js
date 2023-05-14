import{_ as r,X as a,Y as s,a1 as o,Z as l,$ as i,a2 as n,a0 as t,F as u}from"./framework-68dd73a2.js";const c={},d={id:"_29-oracle数据操作与事务控制-md",tabindex:"-1"},E=l("a",{class:"header-anchor",href:"#_29-oracle数据操作与事务控制-md","aria-hidden":"true"},"#",-1),_={href:"http://xn--29-Oracle-3c6n56bv9dhto1obgx4lg0ax6l1od.md",target:"_blank",rel:"noopener noreferrer"},L=t("<li><p>数据操作语言</p><ul><li><p>Data Manipulation Language ,简称<strong>DML</strong>，主要用来实现对数据库表中的数据进行操作。</p></li><li><p>数据操作语言主要包括如下几种：</p><ul><li>增加行数据：使用INSERT语句实现</li><li>修改行数据：使用UPDATE语句实现</li><li>删除行数据：使用DELETE语句实现</li><li>合并行数据：按照指定条件合并两个表的数据，使用MERGE语句实现</li></ul></li></ul></li><li><p>事务处理语言</p><ul><li>事务(Transaction)概念 <ul><li><p>事务：也称工作单元，是由一个或多个SQL语句所组成的操作序列，这些SQL语句作为一个完整的工作单元，要么全部执行成功，要么全部执行失败。在数据库中，通过事务来保证数据的一致性。</p></li><li><p>事务处理语言：Transaction Process Language ,简称TPL，主要用来对组成事务的DML语句的操作结果进行确认或取消。确认也就是使DML操作生效，使用提交(COMMIT)命令实现；取消也就是使DML操作失效，使用回滚(ROLLBACK)命令实现。</p></li><li><p>通过事务的使用，能防止数据库中出现数据不一致现象。如两个银行账户进行转账，涉及到两条更新操作，这两条更新操作只允许全部成功或失败，否则数据会出现不一致的现象。</p></li></ul></li></ul></li>",2),p=l("p",null,"事务组成",-1),T={href:"https://www.cnblogs.com/qianqian528/p/7794838.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/qq_34869143/article/details/72844524",target:"_blank",rel:"noopener noreferrer"},O=t("<li>例：如下语句组成两个事务。 <ul><li>INSERT….</li><li>UPDATE….</li><li>DELETE….</li><li>SELECT….</li><li>INSERT…</li><li>COMMIT;-- 前6条语句，组成第1个事务</li><li>UPDATE…</li><li>DELETE….</li><li>CREATE… ;--后3条语句，组成第2个事务</li></ul></li>",1),D=t("<li><p>事务特性</p><ul><li>事务特征可用四个字母的缩写表示：即ACID <ul><li>原子性（Atomicity） <ul><li>事务就像“原子”一样，不可被分割，组成事务的DML操作语句要么全成功，要么全失败，不可能出现部分成功部分失败的情况。</li></ul></li><li>一致性（Consistency） <ul><li>一旦事务完成，不管是成功的，还是失败的，整个系统处于数据一致的状态。</li></ul></li><li>隔离性（Isolation） <ul><li>一个事务的执行不会被另一个事务所干扰。比如两个人同时从一个账户从取钱，通过事务的隔离性确保账户余额的正确性。</li></ul></li><li>持久性（Durability） <ul><li>也称为永久性，指事务一旦提交，对数据的改变就是永久的，不可以再被回滚。</li></ul></li></ul></li></ul></li><li><p>事务结束</p><ul><li>显示结束 <ul><li>提交(COMMIT)：使用COMMIT命令实现，以成功的方式结束事务，组成事务的DML语句操作全部生效。</li><li>回滚(ROLLBACK)：使用ROLLBACK命令实现，以失败的方式结束事务，组成事务的DML语句操作全部被取消。</li></ul></li><li>隐式结束 <ul><li><p>隐式提交：当下列任意一种情况发生时，会发生隐式提交</p><ul><li>执行一个DDL(CREATE、ALTER、DROP、TRUNCATE、RENAME）语句；</li><li>执行一个DCL(GRANT、REVOKE)语句；</li><li>从SQL*Plus正常退出（即使用EXIT或QUIT命令退出）；</li></ul></li><li><p>隐式回滚：当下列任意一种情况发生时，会发生隐式回滚</p><ul><li>从SQL*Plus中强行退出</li><li>客户端连接到服务器端异常中断</li><li>系统崩溃</li></ul></li></ul></li></ul></li><li><p>事务开启</p><ul><li>事务自动开启于上一个事务结束后，执行的第一个DML语句。</li><li>例如： <ul><li>….</li><li>COMMIT; --结束一个事务；</li><li>SELECT….</li><li>INSERT…. --开启一个事务</li><li>UPDATE….</li><li>DELETE….</li><li>SELECT….</li><li>INSERT…</li><li>COMMIT; --结束一个事务</li><li>UPDATE… --开启一个事务</li><li>DELETE….</li><li>ROLLBACK… ;--结束一个事务</li></ul></li></ul></li><li><p>设置保存点</p><ul><li>设置保存点：如果在一个事务内，想要回滚到指定位置，不是回滚到事务的起始点，可以通过保存点(SAVEPOINT)来实现。 <ul><li>SAVEPOINT savepointname；--定义一个保存点语句；</li><li>ROLLBACK TO savepointname;--回滚到指定保存点</li><li>注意：如上两条语句不结束事务的执行。</li></ul></li></ul></li>",4),C=t(`<p>例:分析如下操作序列</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE FROM test ;
ROLLBACK;                        ——撤消DELETE操作
INSERT INTO test VALUES(’A’);
SAVEPOINT insert_a;            ——定义insert_a保存点
INSERT INTO test VALUES(’B’);
SAVEPOINT insert_b;             ——定义insert_b保存点
INSERT INTO test VALUES(’C’);
ROLLBACK TO insert_b;    ——撤消操作到insert_b保存点
DELETE FROM test WHERE test_str = ‘A’;
COMMIT;                            ——将所有修改写入数据库
ROLLBACK;    -—所有操作已经COMMIT提交，不能回滚
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>锁</p><ul><li>锁的概念</li><li>锁用来在多用户并发访问和操作数据库时,保证数据的一致性的一种机制;</li><li>锁由Oracle自动管理，如一个DML操作，ORACLE默认的机制是在DML操作影响的行记录上自动加锁;</li><li>锁在被相关的操作申请并持有后，会一直保持到事务的结束，事务结束后，锁才会被释放;</li><li>查询语句不会锁定任何记录，如果在查询语句后面加FOR UPDATE子句会锁定查询所影响的行记录;</li></ul></li><li><p>提交或回滚前数据状态</p><ul><li>提交(COMMIT)或回滚(ROLLBACK)前的数据状态 <ul><li>数据变化前的状态可以被恢复;</li><li>当前会话可以使用SELECT语句来验证DML操作后的结果;</li><li>其它会话不能查看由当前用户的DML操作结果;</li><li>受影响记录被锁定，也就是其它用户不能改变受影响记录中的数据;</li><li>在数据库中数据变化成为永久性的，先前的数据状态永久性的消失；</li><li>所有用户/会话都可以查询到提交COMMIT后的结果；</li><li>锁定的记录被释放，可以有效地被其他用户操作；</li><li>所有的存储节点被清除；</li></ul></li></ul></li><li><p>回滚(ROLLBACK)后的数据状态</p><ul><li>先前的数据状态被恢复;</li><li>锁定的记录被释放;</li><li>所有的存储节点被清除;</li></ul></li></ul><h4 id="知识拓展" tabindex="-1"><a class="header-anchor" href="#知识拓展" aria-hidden="true">#</a> 知识拓展</h4>`,4),M={href:"https://www.cnblogs.com/qianqian528/p/7794838.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://blog.csdn.net/qq_37906822/article/details/81381918",target:"_blank",rel:"noopener noreferrer"},R={href:"https://blog.csdn.net/qq_34869143/article/details/72844524",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/w183705952/article/details/7354974",target:"_blank",rel:"noopener noreferrer"},m=l("hr",null,null,-1),v=l("h3",{id:"分割线",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),i(" 分割线")],-1),I=l("hr",null,null,-1),S=l("p",null,[l("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function g(N,f){const e=u("ExternalLinkIcon");return a(),s("div",null,[o(" more "),l("h1",d,[E,i(),l("a",_,[i("29-Oracle数据操作与事务控制.md"),n(e)])]),l("ul",null,[L,l("li",null,[p,l("ul",null,[l("li",null,[i("在数据库中，事务由一组相关的DML或SELECT语句，加上一个TPL语句（COMMIT、ROLLBACK）或一个"),l("a",T,[i("DDL"),n(e)]),i("语句(CREATE、ALTER、DROP、TRUNCATE等)或一个"),l("a",h,[i("DCL"),n(e)]),i("（GRANT、REVOKE）语句。")]),O])]),D]),C,l("p",null,[l("a",M,[i("Oracle中DDL的基础知识"),n(e)])]),l("p",null,[l("a",A,[i("Oracle数据库PL SQL开发、Oracle-SQL开发习题答案"),n(e)])]),l("p",null,[l("a",R,[i("Oracle基础——DCL(数据控制语言)之Oracle权限"),n(e)])]),l("p",null,[l("a",b,[i("Oracle中的DDL,DML,DCL总结"),n(e)])]),m,v,I,S])}const x=r(c,[["render",g],["__file","29-Oracle-数据操作与事务控制.html.vue"]]);export{x as default};
