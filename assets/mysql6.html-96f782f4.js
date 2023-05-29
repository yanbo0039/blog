import{_ as a,X as e,Y as r,a1 as n,a0 as s}from"./framework-68dd73a2.js";const o="/blog/assets/MySql_6_1.png",l="/blog/assets/MySql_6_2.png",i={},t=s(`<h1 id="mysql-navacat添加主键时报错error-on-rename-of-mylibary-sql-1510-7e-to-mylibary-mylibary-user-errno-150" tabindex="-1"><a class="header-anchor" href="#mysql-navacat添加主键时报错error-on-rename-of-mylibary-sql-1510-7e-to-mylibary-mylibary-user-errno-150" aria-hidden="true">#</a> Mysql-navacat添加主键时报错Error on rename of &#39;mylibary#sql-1510_7e&#39; to &#39;mylibary mylibary_user&#39; (errno 150)</h1><h4 id="故事背景" tabindex="-1"><a class="header-anchor" href="#故事背景" aria-hidden="true">#</a> 故事背景</h4><blockquote><p>最近将oracle数据库迁移至了mysql中，但两数据库稍有不同，比如序列，一些数据类型等。</p></blockquote><ul><li>如下图所示执行如下sql语句时出现了如下的报错</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">table</span> mylibary_user <span class="token keyword">modify</span> USER_ID <span class="token keyword">integer</span> <span class="token keyword">auto_increment</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h4><blockquote><p>这主要是由于数据表的数据类型造成的 由于 mysql数据表中没有Oracle中的number类型 在数据迁移时 它默认更改籽 mysql中的decimal类型，这种类型数据是没办法做主键自增长的，所以只需要将其数据类型更改为int即可解决问题</p></blockquote><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>Mysql-navacat添加主键时报错Error on rename of &#39;mylibary#sql-1510_7e&#39; to &#39;mylibary mylibary_user&#39; (errno 150)</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',18);function c(d,m){return e(),r("div",null,[n(" more "),t])}const h=a(i,[["render",c],["__file","mysql6.html.vue"]]);export{h as default};