import{_ as s,X as n,Y as a,a1 as e,a0 as p}from"./framework-68dd73a2.js";const o="/blog/assets/Oracle_56_1.png",t="/blog/assets/Oracle_56_2.png",c={},l=p('<h1 id="_56-oracle-sql开发-——-层次查询-分级查询-md" tabindex="-1"><a class="header-anchor" href="#_56-oracle-sql开发-——-层次查询-分级查询-md" aria-hidden="true">#</a> 56-Oracle-SQL开发 —— 层次查询(分级查询).md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--从顶向下查询</span>
<span class="token number">1.</span>查询KING管理的所有的下级员工信息
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">start</span> <span class="token keyword">with</span> ename <span class="token operator">=</span> <span class="token string">&#39;KING&#39;</span> <span class="token keyword">connect</span> <span class="token keyword">by</span> prior 父列 <span class="token operator">=</span> 子列<span class="token punctuation">;</span><span class="token comment">--empno父列   mgr子列</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">start</span> <span class="token keyword">with</span> ename <span class="token operator">=</span> <span class="token string">&#39;KING&#39;</span> <span class="token keyword">connect</span> <span class="token keyword">by</span> prior empno <span class="token operator">=</span> mgr<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">start</span> <span class="token keyword">with</span> ename <span class="token operator">=</span> <span class="token string">&#39;KING&#39;</span> <span class="token keyword">connect</span> <span class="token keyword">by</span> mgr <span class="token operator">=</span> prior empno<span class="token punctuation">;</span><span class="token comment">--同上</span>

<span class="token comment">--从下向上查询</span>
<span class="token number">1.</span>查询SMITH的所有的上级员工信息
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">start</span> <span class="token keyword">with</span> ename <span class="token operator">=</span> <span class="token string">&#39;SMITH&#39;</span> <span class="token keyword">connect</span> <span class="token keyword">by</span> prior 子列 <span class="token operator">=</span> 父列<span class="token punctuation">;</span><span class="token comment">--empno父列   mgr 列  </span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">start</span> <span class="token keyword">with</span> ename <span class="token operator">=</span> <span class="token string">&#39;SMITH&#39;</span> <span class="token keyword">connect</span> <span class="token keyword">by</span> prior mgr <span class="token operator">=</span> empno<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">start</span> <span class="token keyword">with</span> ename <span class="token operator">=</span> <span class="token string">&#39;SMITH&#39;</span> <span class="token keyword">connect</span> <span class="token keyword">by</span> empno <span class="token operator">=</span> prior mgr<span class="token punctuation">;</span><span class="token comment">--同上</span>

<span class="token comment">--使用level伪列</span>
<span class="token keyword">select</span> <span class="token keyword">level</span><span class="token punctuation">,</span>emp<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">start</span> <span class="token keyword">with</span> ename <span class="token operator">=</span> <span class="token string">&#39;KING&#39;</span> <span class="token keyword">connect</span> <span class="token keyword">by</span> prior empno <span class="token operator">=</span> mgr<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token keyword">level</span><span class="token punctuation">,</span>emp<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">start</span> <span class="token keyword">with</span> ename <span class="token operator">=</span> <span class="token string">&#39;SMITH&#39;</span> <span class="token keyword">connect</span> <span class="token keyword">by</span> prior mgr <span class="token operator">=</span> empno<span class="token punctuation">;</span>

<span class="token comment">--使用level，以及lpad生成树状报告</span>
<span class="token keyword">select</span> <span class="token keyword">level</span><span class="token punctuation">,</span>ename<span class="token punctuation">,</span>lpad<span class="token punctuation">(</span>ename<span class="token punctuation">,</span>length<span class="token punctuation">(</span>ename<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token keyword">level</span><span class="token operator">*</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">start</span> <span class="token keyword">with</span> empno <span class="token operator">=</span> <span class="token number">7839</span> <span class="token keyword">connect</span> <span class="token keyword">by</span> prior empno <span class="token operator">=</span> mgr<span class="token punctuation">;</span>

<span class="token comment">--排除某几行数据:使用where添加限制条件</span>
<span class="token number">1.</span>查询<span class="token number">7839</span>管理的所有的下级员工信息，但是不包括SCOTT的信息
<span class="token keyword">select</span> <span class="token keyword">level</span><span class="token punctuation">,</span> ename<span class="token punctuation">,</span> lpad<span class="token punctuation">(</span>ename<span class="token punctuation">,</span> length<span class="token punctuation">(</span>ename<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token keyword">level</span> <span class="token operator">*</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">from</span> emp
  <span class="token keyword">where</span> ename <span class="token operator">&lt;&gt;</span> <span class="token string">&#39;SCOTT&#39;</span>
 <span class="token keyword">start</span> <span class="token keyword">with</span> empno <span class="token operator">=</span> <span class="token number">7839</span>
<span class="token keyword">connect</span> <span class="token keyword">by</span> prior empno <span class="token operator">=</span> mgr<span class="token punctuation">;</span>

<span class="token comment">--排除一个分支:使用connect by添加限制条件</span>
<span class="token number">1.</span>查询<span class="token number">7839</span>管理的所有的下级员工信息，但是不包括BLAKE以及BLAKE所有下属的信息
<span class="token keyword">select</span> <span class="token keyword">level</span><span class="token punctuation">,</span> ename<span class="token punctuation">,</span> lpad<span class="token punctuation">(</span>ename<span class="token punctuation">,</span> length<span class="token punctuation">(</span>ename<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token keyword">level</span> <span class="token operator">*</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">from</span> emp
 <span class="token keyword">start</span> <span class="token keyword">with</span> empno <span class="token operator">=</span> <span class="token number">7839</span>
<span class="token keyword">connect</span> <span class="token keyword">by</span> prior empno <span class="token operator">=</span> mgr <span class="token operator">and</span> ename <span class="token operator">&lt;&gt;</span> <span class="token string">&#39;BLAKE&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Oracle-SQL开发 —— 层次查询(分级查询)</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,11);function r(k,i){return n(),a("div",null,[e(" more "),l])}const m=s(c,[["render",r],["__file","oracle56.html.vue"]]);export{m as default};
