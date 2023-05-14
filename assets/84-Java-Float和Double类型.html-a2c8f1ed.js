import{_ as a,X as d,Y as i,a1 as o,Z as e,$ as l,a2 as n,a0 as s,F as r}from"./framework-68dd73a2.js";const u={},c={id:"_84-java-float和double类型-md",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#_84-java-float和double类型-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--84-Java-FloatDouble-ik56an53b0w5q.md",target:"_blank",rel:"noopener noreferrer"},m=s(`<ul><li>与整数类型相似，Java浮点数类型有固定的表数范围和字段长度，不受平台影响</li></ul><table><thead><tr><th>类型</th><th>所占存储空间</th><th>表数范围</th></tr></thead><tbody><tr><td>float</td><td>32位</td><td>-3.403E38 ~ 3.403E38</td></tr><tr><td>double</td><td>64位</td><td>-1.798E308 ~ 1.798E308</td></tr></tbody></table><ul><li><p>Java浮点数类型有两种表示形式</p><ul><li><p>十进制数形式，例如：3.14 314.0 .314</p></li><li><p>科学计数法形式，如：3.14e2 (3.14<em>10^2) 3.14E-1(3.14</em>10^-1)</p></li></ul></li><li><p>Java浮点型常量默认为double型，如要声明一个常量为float型，则需在数字后面加f或F，如:</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>double d = 12345.6
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),h=e("em",null,"Java-Float和Double类型",-1),f={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"},_=e("hr",null,null,-1),p=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),l(" 分割线")],-1),g=e("hr",null,null,-1),x=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function E(F,J){const t=r("ExternalLinkIcon");return d(),i("div",null,[o(" more "),e("h1",c,[v,l(),e("a",b,[l("84-Java-Float和Double类型.md"),n(t)])]),m,e("p",null,[e("strong",null,[l("以上就是我关于 "),h,l(" 知识点的整理与总结的全部内容，"),e("a",f,[l("另附源码"),n(t)])])]),_,p,g,x])}const y=a(u,[["render",E],["__file","84-Java-Float和Double类型.html.vue"]]);export{y as default};
