import{_ as t,X as s,Y as l,a1 as d,Z as n,$ as e,a2 as a,a0 as r,F as o}from"./framework-68dd73a2.js";const v={},c={id:"_83-java-int类型和long类型的讲解-md",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#_83-java-int类型和long类型的讲解-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--83-Java-intlong-hb5zs68afa5671mm6yaga0266eiyi.md",target:"_blank",rel:"noopener noreferrer"},_=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int t1 = 1000;
int t2 = 0b0101;//二进制
int t3 = 034567;//八进制
int t4 = 0X9ef;//十六进制
int t5 = &#39;q&#39;;//查询对应的ASCII码表得到对应的int值
int t6 = &#39;\\u1234&#39;;//查询对应的ASCII码表得到对应的int值
int t7 = &#39;\\n&#39;;//查询对应的ASCII码表得到对应的int值
System.out.println(&quot;int min value:&quot; + Integer.MIN_VALUE);//-2147483648
System.out.println(&quot;int max value:&quot; + Integer.MAX_VALUE);//2147483647

//隐式转换是自动进行的，从小房间搬到大房间，不会造成精度丢失
long g1 = 100;//首先内存开辟咯一个32位房间，住着100，然后自动把房间升级到64位，给到g1
//1000L java虚拟机认为它就是long型，直接给64位房间，不会隐式转换
long g2 = 1000L;//long型赋值一般会在后面加个L，表示告诉java虚拟机这是long类型，不会发生隐式转换
// 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000
// ---- ---- ---- ---- ---- ---- ---- ---- 0000 0000 0000 0000 0000 0000 0000 0000
//显式转换是手动进行的，也叫做强制转换，从大房间搬到小房间，会造成精度丢失
int w = (int) g1;//这样会造成精度丢失
System.out.println(&quot;long min value: &quot; + Long.MIN_VALUE);//-9223372036854775808
System.out.println(&quot;long max value: &quot; + Long.MAX_VALUE);//9223372036854775807
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在java中与语句“int a = 97;”等效的声明语句是_ABC____

A. int a = 0X0061;//16进制转2进制 1 * 16^0 + 6 * 16 ^ 1 = 97
B. int a = 0X61;//16进制转2进制 1 * 16^0 + 6 * 16 ^ 1 = 97
C. int a = 0141;//8进制 1*8^0+4*8^1+1*8^2 = 97
D. int a = 97.0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,6),b={class:"hint-container info"},h=n("p",{class:"hint-container-title"},"相关信息",-1),g=n("em",null,"Java-int类型和long类型的讲解",-1),p={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"};function x(f,I){const i=o("ExternalLinkIcon");return s(),l("div",null,[d(" more "),n("h1",c,[u,e(),n("a",m,[e("83-Java-int类型和long类型的讲解.md"),a(i)])]),_,n("div",b,[h,n("p",null,[n("strong",null,[e("以上就是我关于 "),g,e(" 知识点的整理与总结的全部内容，"),n("a",p,[e("另附源码"),a(i)])])])])])}const L=t(v,[["render",x],["__file","java83.html.vue"]]);export{L as default};
