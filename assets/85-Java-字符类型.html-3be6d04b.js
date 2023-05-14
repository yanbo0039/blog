import{_ as i,X as l,Y as a,a1 as r,Z as t,$ as e,a2 as n,a0 as s,F as c}from"./framework-68dd73a2.js";const o={},u={id:"_85-java-字符类型-md",tabindex:"-1"},v=t("a",{class:"header-anchor",href:"#_85-java-字符类型-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--85-Java--fz7nx71ail5g6ld.md",target:"_blank",rel:"noopener noreferrer"},m=s(`<ul><li><p>字符类型 — char</p></li><li><p>单个字符用 char 类型表示，通常取值可为：</p><ul><li>英文字母、数字、转义序列、特殊字符等</li></ul></li><li><p>Java中的字符占两个字节(16位)，因此可用十六进制编码形式表示</p></li><li><p>Java中的字符类型的值通常用单引号( ‘ ’ )括起来</p></li></ul><p><strong>例如：</strong></p><table><thead><tr><th>字符</th><th>含义</th></tr></thead><tbody><tr><td>‘a’</td><td>字母a</td></tr><tr><td>‘中’</td><td>汉字中</td></tr><tr><td>‘\\n’</td><td>转义字符表示换行</td></tr><tr><td>‘\\u????’</td><td>特定的Unicode字符，用 \\u +四个确切的16位数字代替</td></tr><tr><td>‘\\u03A6’</td><td>Unicode字符表示希腊字符Φ</td></tr></tbody></table><ul><li>转义字符</li></ul><table><thead><tr><th>转义字符</th><th>含义</th></tr></thead><tbody><tr><td>\\r</td><td>表示接受键盘输入，相当于按下了回车键</td></tr><tr><td>\\n</td><td>表示换行</td></tr><tr><td>\\t</td><td>表示制表符Table键</td></tr><tr><td>\\b</td><td>表示退格键，相当于Back Space</td></tr><tr><td>\\’</td><td>相当于单引号’</td></tr><tr><td>\\”</td><td>相当于双引号“</td></tr><tr><td>\\\\</td><td>表示一个斜杠 |</td></tr></tbody></table><ul><li><p>字符类型是一个16位无符号整数!</p></li><li><p>字符类型的值是对应字符的编码, 是unicode编码.</p></li><li><p>英文部分的值与ascII编码一致.</p></li><li><p>char是定长编码, 所有的字符都是16位.</p><ul><li><p>&#39;A&#39; -&gt; 0x0041</p></li><li><p>&#39;中&#39;-&gt; 0x4e2d</p></li><li><p>在编码中: &#39;0&#39;~&#39;9&#39;, &#39;a&#39;~&#39;z&#39;, &#39;A&#39;~&#39;Z&#39;都是连续编码的!</p></li><li><p>&#39;0&#39;与&#39;\\u0000&#39;不是同一个字符</p></li><li><p>最小值:0, 最大值:65535 = 2^16-1</p></li></ul></li><li><p>字符字面量使用单引号为定界符号:</p><ul><li>&#39;中&#39; 是整数常量!</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>哪些是合法的字符类型？BDE

A.‘AB’
B.‘b’
C.“123”
D.‘\\t’
E.‘\\u123f’
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//char类型

/*
* 单个字符用 char 类型表示，通常取值可为：
*  英文字母、数字、转义序列、特殊字符等 
*  Java中的字符占两个字节(16位)，
*  因此可用十六进制编码形式表示
* Java中的字符类型的值通常用单引号( ‘ ’ )括起来
*/
char c1 = &#39;c&#39;;
char c2 = &#39;4&#39;;
char c3 = 0x123;//需要查询ASCII码表
char c4 = &#39;\\t&#39;;
char c5 = &#39;问&#39;;
char c6 = &#39;\\u2345&#39;;//需要查询unicode码表
char c7 = 86;//需要查询ASCII码表
System.out.println(&quot;char min value: &quot; + Character.MIN_VALUE);// (空格)
System.out.println(&quot;char max value: &quot; + Character.MAX_VALUE);//?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=t("em",null,"Java-字符类型",-1),_={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"},b=t("hr",null,null,-1),x=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),g=t("hr",null,null,-1),f=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function A(I,J){const d=c("ExternalLinkIcon");return l(),a("div",null,[r(" more "),t("h1",u,[v,e(),t("a",h,[e("85-Java-字符类型.md"),n(d)])]),m,t("p",null,[t("strong",null,[e("以上就是我关于 "),p,e(" 知识点的整理与总结的全部内容，"),t("a",_,[e("另附源码"),n(d)])])]),b,x,g,f])}const B=i(o,[["render",A],["__file","85-Java-字符类型.html.vue"]]);export{B as default};
