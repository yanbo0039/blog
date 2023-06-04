import{_ as l,X as i,Y as d,a1 as s,Z as e,$ as t,a2 as a,a0 as o,F as r}from"./framework-68dd73a2.js";const c={},v={id:"_84-java-float和double类型-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_84-java-float和double类型-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--84-Java-FloatDouble-ik56an53b0w5q.md",target:"_blank",rel:"noopener noreferrer"},m=o(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li>与整数类型相似，Java浮点数类型有固定的表数范围和字段长度，不受平台影响</li></ul><table><thead><tr><th>类型</th><th>所占存储空间</th><th>表数范围</th></tr></thead><tbody><tr><td>float</td><td>32位</td><td>-3.403E38 ~ 3.403E38</td></tr><tr><td>double</td><td>64位</td><td>-1.798E308 ~ 1.798E308</td></tr></tbody></table><ul><li><p>Java浮点数类型有两种表示形式</p><ul><li><p>十进制数形式，例如：3.14 314.0 .314</p></li><li><p>科学计数法形式，如：3.14e2 (3.14<em>10^2) 3.14E-1(3.14</em>10^-1)</p></li></ul></li><li><p>Java浮点型常量默认为double型，如要声明一个常量为float型，则需在数字后面加f或F，如:</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>double d = 12345.6
float f = 12.3       X
float f = 12.3f     √
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>float f1 = 12;
//float f2 = 12.34;这种会报错原因是默认是double 64位，float是32位，有如下两种解决方法
float f2 = 12.34F;
float f3 = (float)1.23;//1.23默认是double需要强制转换
float f4 = 12.34E2F;
float f5 = &#39;2&#39;;//隐式转换 &#39;2&#39;先转换成int再转换成float，自动进行
float f6 = &#39;\\u1234&#39;;//隐式转换 &#39;\\u1234&#39;先转换成int再转换成float，自动进行

double d1 = 123.45;
double d2 = 123;
double d3 = &#39;2&#39;;

int abc = (int)d1;
System.out.println(&quot;abc:&quot; + abc);//123
//哪些情况自动转换：
//byte ---&gt; short ---&gt; int ---&gt; long 
//byte ---&gt; short ---&gt; float ---&gt; double
//char ---&gt; float
//char ---&gt; double 

// 哪些情况需要强制转换？只要大房间搬到小房间就需要强制转换，就会丢失精度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,9),h={class:"hint-container info"},f=e("p",{class:"hint-container-title"},"相关信息",-1),_=e("em",null,"Java-Float和Double类型",-1),p={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"};function g(x,E){const n=r("ExternalLinkIcon");return i(),d("div",null,[s(" more "),e("h1",v,[u,t(),e("a",b,[t("84-Java-Float和Double类型.md"),a(n)])]),m,e("div",h,[f,e("p",null,[e("strong",null,[t("以上就是我关于 "),_,t(" 知识点的整理与总结的全部内容，"),e("a",p,[t("另附源码"),a(n)])])])])])}const F=l(c,[["render",g],["__file","java84.html.vue"]]);export{F as default};
