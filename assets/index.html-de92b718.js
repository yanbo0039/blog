import{_ as s,X as r,Y as o,a1 as i,Z as e,$ as t,a2 as n,a0 as c,F as l}from"./framework-68dd73a2.js";const d="/blog/assets/Java_91_1.png",_="/blog/assets/Java_91_2.png",p="/blog/assets/Java_91_3.png",u={},h={id:"_91-java报错syntax-error-on-token-class-char-expected-md",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#_91-java报错syntax-error-on-token-class-char-expected-md","aria-hidden":"true"},"#",-1),m={href:"http://expected.md",target:"_blank",rel:"noopener noreferrer"},x=c(`<p>如图所示，报错如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Syntax error on token &quot;class&quot;, char expected
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Multiple markers at this line
	- Syntax error on token &quot;class&quot;, char expected
	- The member type InnerStaticClass cannot be declared static; static types can only be declared in static or top 
	 level types
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>原因：</strong> 类后面不应该有()，去掉即可解决报错，如图</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',7),v=e("em",null,'Java报错Syntax error on token "class", char expected',-1),f={href:"https://github.com/javaobjects/demo513_1",target:"_blank",rel:"noopener noreferrer"},b=e("hr",null,null,-1),k=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),t(" 分割线")],-1),y=e("hr",null,null,-1),S=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function J(N,V){const a=l("ExternalLinkIcon");return r(),o("div",null,[i(" more "),e("h1",h,[g,t(' 91-Java报错Syntax error on token "class", char '),e("a",m,[t("expected.md"),n(a)])]),x,e("p",null,[e("strong",null,[t("以上就是我关于 "),v,t(" 知识点的整理与总结的全部内容，"),e("a",f,[t("另附源码"),n(a)])])]),b,k,y,S])}const q=s(u,[["render",J],["__file","index.html.vue"]]);export{q as default};