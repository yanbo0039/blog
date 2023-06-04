import{_ as d,X as a,Y as l,a1 as r,Z as t,$ as e,a2 as n,a0 as s,F as c}from"./framework-68dd73a2.js";const o={},v={id:"_85-java-字符类型-md",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#_85-java-字符类型-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--85-Java--fz7nx71ail5g6ld.md",target:"_blank",rel:"noopener noreferrer"},m=s(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><p>字符类型 — char</p></li><li><p>单个字符用 char 类型表示，通常取值可为：</p><ul><li>英文字母、数字、转义序列、特殊字符等</li></ul></li><li><p>Java中的字符占两个字节(16位)，因此可用十六进制编码形式表示</p></li><li><p>Java中的字符类型的值通常用单引号( ‘ ’ )括起来</p></li></ul><p><strong>例如：</strong></p><table><thead><tr><th>字符</th><th>含义</th></tr></thead><tbody><tr><td>‘a’</td><td>字母a</td></tr><tr><td>‘中’</td><td>汉字中</td></tr><tr><td>‘\\n’</td><td>转义字符表示换行</td></tr><tr><td>‘\\u????’</td><td>特定的Unicode字符，用 \\u +四个确切的16位数字代替</td></tr><tr><td>‘\\u03A6’</td><td>Unicode字符表示希腊字符Φ</td></tr></tbody></table><ul><li>转义字符</li></ul><table><thead><tr><th>转义字符</th><th>含义</th></tr></thead><tbody><tr><td>\\r</td><td>表示接受键盘输入，相当于按下了回车键</td></tr><tr><td>\\n</td><td>表示换行</td></tr><tr><td>\\t</td><td>表示制表符Table键</td></tr><tr><td>\\b</td><td>表示退格键，相当于Back Space</td></tr><tr><td>\\’</td><td>相当于单引号’</td></tr><tr><td>\\”</td><td>相当于双引号“</td></tr><tr><td>\\\\</td><td>表示一个斜杠 |</td></tr></tbody></table><ul><li><p>字符类型是一个16位无符号整数!</p></li><li><p>字符类型的值是对应字符的编码, 是unicode编码.</p></li><li><p>英文部分的值与ascII编码一致.</p></li><li><p>char是定长编码, 所有的字符都是16位.</p><ul><li><p>&#39;A&#39; -&gt; 0x0041</p></li><li><p>&#39;中&#39;-&gt; 0x4e2d</p></li><li><p>在编码中: &#39;0&#39;~&#39;9&#39;, &#39;a&#39;~&#39;z&#39;, &#39;A&#39;~&#39;Z&#39;都是连续编码的!</p></li><li><p>&#39;0&#39;与&#39;\\u0000&#39;不是同一个字符</p></li><li><p>最小值:0, 最大值:65535 = 2^16-1</p></li></ul></li><li><p>字符字面量使用单引号为定界符号:</p><ul><li>&#39;中&#39; 是整数常量!</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>哪些是合法的字符类型？BDE

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,12),p={class:"hint-container info"},b=t("p",{class:"hint-container-title"},"相关信息",-1),_=t("em",null,"Java-字符类型",-1),x={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"};function g(f,A){const i=c("ExternalLinkIcon");return a(),l("div",null,[r(" more "),t("h1",v,[u,e(),t("a",h,[e("85-Java-字符类型.md"),n(i)])]),m,t("div",p,[b,t("p",null,[t("strong",null,[e("以上就是我关于 "),_,e(" 知识点的整理与总结的全部内容，"),t("a",x,[e("另附源码"),n(i)])])])])])}const k=d(o,[["render",g],["__file","java85.html.vue"]]);export{k as default};
