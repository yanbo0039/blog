import{_ as t,X as a,Y as i,a1 as u,Z as n,$ as e,a2 as s,a0 as d,F as r}from"./framework-68dd73a2.js";const c={},l={id:"_37-sql-查询报错ora-00979-不是-group-by-表达式-md",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_37-sql-查询报错ora-00979-不是-group-by-表达式-md","aria-hidden":"true"},"#",-1),q={href:"http://xn--w0t633g82e.md",target:"_blank",rel:"noopener noreferrer"},F=d(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><blockquote><p>如下所示为我的SQL查询报错</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>complete! use time:151	end time Tue Jun 23 14:29:39 CST 2020null
Caused exception message is: ORA-00979: 不是 GROUP BY 表达式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>SQL查询语句如下所示</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>SELECT
 &quot;T_FIN_LoanEntry&quot;.FAmount AS &quot;FAmount&quot;,
 &quot;T_FIN_Loan&quot;.FTypeID AS &quot;FTypeID&quot;,
 &quot;T_FIN_FinancingProducts&quot;.FID AS &quot;FID&quot;,
 &quot;T_FIN_FinancingProducts&quot;.FName_l2 AS &quot;FName&quot;,
 &quot;T_FIN_Loan&quot;.FCompanyID AS &quot;FCompanyID&quot;
FROM
 T_FIN_FinancingProducts AS &quot;T_FIN_FinancingProducts&quot; INNER JOIN (T_FIN_LoanEntry AS &quot;T_FIN_LoanEntry&quot; INNER JOIN T_FIN_Loan AS &quot;T_FIN_Loan&quot; ON (&quot;T_FIN_LoanEntry&quot;.FParentId=&quot;T_FIN_Loan&quot;.FID))
 ON (&quot;T_FIN_FinancingProducts&quot;.FID=&quot;T_FIN_Loan&quot;.FTypeID)
where  &quot;T_FIN_FinancingProducts&quot;.FID in (&#39;umYAAABTeAbCXtep&#39;,&#39;umYAAAABNRrCXtep&#39;)
GROUP BY &quot;T_FIN_Loan&quot;.FCompanyID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将其更改为如下SQL语句则可解决报错</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT
 &quot;T_FIN_LoanEntry&quot;.FAmount AS &quot;FAmount&quot;,
 &quot;T_FIN_Loan&quot;.FTypeID AS &quot;FTypeID&quot;,
 &quot;T_FIN_FinancingProducts&quot;.FID AS &quot;FID&quot;,
 &quot;T_FIN_FinancingProducts&quot;.FName_l2 AS &quot;FName&quot;,
 &quot;T_FIN_Loan&quot;.FCompanyID AS &quot;FCompanyID&quot;
FROM
 T_FIN_FinancingProducts AS &quot;T_FIN_FinancingProducts&quot; INNER JOIN (T_FIN_LoanEntry AS &quot;T_FIN_LoanEntry&quot; INNER JOIN T_FIN_Loan AS &quot;T_FIN_Loan&quot; ON (&quot;T_FIN_LoanEntry&quot;.FParentId=&quot;T_FIN_Loan&quot;.FID))
 ON (&quot;T_FIN_FinancingProducts&quot;.FID=&quot;T_FIN_Loan&quot;.FTypeID)
where  &quot;T_FIN_FinancingProducts&quot;.FID in (&#39;umYAAABTeAbCXtep&#39;,&#39;umYAAAABNRrCXtep&#39;)
GROUP BY &quot;T_FIN_Loan&quot;.FCompanyID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>SQL-查询报错ORA-00979 不是 GROUP BY 表达式</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,16);function m(v,I){const o=r("ExternalLinkIcon");return a(),i("div",null,[u(" more "),n("h1",l,[_,e(" 37-SQL-查询报错ORA-00979 不是 GROUP BY "),n("a",q,[e("表达式.md"),s(o)])]),F])}const p=t(c,[["render",m],["__file","oracle37.html.vue"]]);export{p as default};
