import{_ as t,X as l,Y as s,a1 as d,Z as e,$ as n,a2 as a,a0 as r,F as o}from"./framework-68dd73a2.js";const c={},_={id:"_80-java-jdk7对数据常量的支持-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_80-java-jdk7对数据常量的支持-md","aria-hidden":"true"},"#",-1),v={href:"http://xn--80-Java-Jdk7-ds2w93u9lt1sbewom7ap47stc3f.md",target:"_blank",rel:"noopener noreferrer"},m=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><p>数值常量对下划线支持</p><ul><li>JDK 7中，你可以在数值常量中使用&#39;_&#39;来提升可读性。这对在源代码中使用了大数字的人来说尤其有用，例如在金融或者计算领域中。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int billion = 1_000_000_000;  // 10^9  
long creditCardNumber =  1234_4567_8901_2345L; //16 digit number  
long ssn = 777_99_8888L;  
double pi = 3.1415_9265;  
float  pif = 3.14_15_92_65f;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不能在小数后面，或者数字的开始和结束的地方放下划线。下面的数值常量就是不正确的，因为它们错误地使用了下划线</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> double pi = 3._1415_9265; // 小数点后不能添加下划线
 long creditcardNum = 1234_4567_8901_2345_L; // 数字结尾不能添加下划线  
 long ssn = _777_99_8888L; // 数值开头不能添加下划线
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>声明二进制常量</p><ul><li>JDK7中，对于整型类型（byte, short, int 和long)来说，你可以用‘0b’前缀来表明这是一个二进制的常量。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int mask = 0b01010000101;

// 结合下划线，这样写更好
int binary = 0B0101_0000_1010_0010_1101_0000_1010_0010; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>long money = 1_000_000_000;//可以三位一断也可以两位一断也可以一位一断，根据自己习惯

//jdk7以后对这些数值常量的支持：可以使用下划线，增强可读性
int age = 0B10_10_10_10;//0b/0B都行 0b/0B 开头表示二进制 binary:二进制
int age2 = 0b1000000;

System.out.println(&quot;age: &quot; + age);//170
System.out.println(&quot;age2: &quot; + age2);//64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>拓展知识点：</strong></p>`,9),b={href:"https://mritd.me/2016/04/11/JDK8-%E6%96%B0%E7%89%B9%E6%80%A7/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.imooc.com/article/283416",target:"_blank",rel:"noopener noreferrer"},p=e("hr",null,null,-1),g=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),x=e("hr",null,null,-1),f={class:"hint-container tip"},k=e("p",{class:"hint-container-title"},"提示",-1),J=e("em",null,"Java-Jdk7对数据常量的支持",-1),j={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"};function B(N,w){const i=o("ExternalLinkIcon");return l(),s("div",null,[d(" more "),e("h1",_,[u,n(),e("a",v,[n("80-Java-Jdk7对数据常量的支持.md"),a(i)])]),m,e("p",null,[e("a",b,[n("JDK8 新特性"),a(i)])]),e("p",null,[e("a",h,[n("JDK 12又来了，我学不动了..."),a(i)])]),p,g,x,e("div",f,[k,e("p",null,[e("strong",null,[n("以上就是我关于 "),J,n(" 知识点的整理与总结的全部内容，"),e("a",j,[n("另附源码"),a(i)])])])])])}const E=t(c,[["render",B],["__file","java80.html.vue"]]);export{E as default};
