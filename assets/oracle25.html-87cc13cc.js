import{_ as e,X as a,Y as n,a1 as i,a0 as t}from"./framework-68dd73a2.js";const l={},s=t(`<h1 id="oracle初级测试题十七-11-11-用户权限和角色" tabindex="-1"><a class="header-anchor" href="#oracle初级测试题十七-11-11-用户权限和角色" aria-hidden="true">#</a> Oracle初级测试题十七(11-11)--用户权限和角色</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h2 id="练习1" tabindex="-1"><a class="header-anchor" href="#练习1" aria-hidden="true">#</a> 练习1</h2><ol><li>自己尝试创建一个用户user1</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create user user1 indentified by user1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用管理员账户为用户user1分配create session和create table的权限。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grant create session to user1;

conn system/oracle;
grant create table to test;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h2><ol><li>建立新用户neu</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create user neu identified by neu;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>给用户neu授权,使其能够登录到数据库，能够查询scott下的emp表，能修改emp表的sal,ename两个字段</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grant connect to neu;
grant update on scott.emp to neu;

select * from scott.emp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>回收用户neu的登录权限</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>revoke connect from neu;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>回收用户neu的所有对象权限</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>revoke update on scott.emp from neu;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>建立角色role_neu</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create role role_neu;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>给角色role_neu授权,使其能够登录到数据库</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grant connect to role_neu;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>赋角色role_neu给用户neu</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grant role_neu to neu;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8"><li>删除角色role_neu</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>drop role role_neu;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="9"><li>删除用户neu</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>drop user neu;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Oracle初级测试题十七(11-11)--用户权限和角色</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,30);function d(r,c){return a(),n("div",null,[i(" more "),s])}const u=e(l,[["render",d],["__file","oracle25.html.vue"]]);export{u as default};
