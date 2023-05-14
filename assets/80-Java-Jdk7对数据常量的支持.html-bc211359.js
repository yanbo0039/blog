import{_ as a,X as t,Y as s,a1 as d,Z as e,$ as n,a2 as l,a0 as r,F as o}from"./framework-68dd73a2.js";const _={},c={id:"_80-java-jdk7对数据常量的支持-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_80-java-jdk7对数据常量的支持-md","aria-hidden":"true"},"#",-1),v={href:"http://xn--80-Java-Jdk7-ds2w93u9lt1sbewom7ap47stc3f.md",target:"_blank",rel:"noopener noreferrer"},m=r(`<ul><li><p>数值常量对下划线支持</p><ul><li>JDK 7中，你可以在数值常量中使用&#39;_&#39;来提升可读性。这对在源代码中使用了大数字的人来说尤其有用，例如在金融或者计算领域中。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int billion = 1_000_000_000;  // 10^9  
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>拓展知识点：</strong></p>`,8),b={href:"https://mritd.me/2016/04/11/JDK8-%E6%96%B0%E7%89%B9%E6%80%A7/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.imooc.com/article/283416",target:"_blank",rel:"noopener noreferrer"},g=e("em",null,"Java-Jdk7对数据常量的支持",-1),p={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"},x=e("hr",null,null,-1),f=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),k=e("hr",null,null,-1),J=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function B(j,N){const i=o("ExternalLinkIcon");return t(),s("div",null,[d(" more "),e("h1",c,[u,n(),e("a",v,[n("80-Java-Jdk7对数据常量的支持.md"),l(i)])]),m,e("p",null,[e("a",b,[n("JDK8 新特性"),l(i)])]),e("p",null,[e("a",h,[n("JDK 12又来了，我学不动了..."),l(i)])]),e("p",null,[e("strong",null,[n("以上就是我关于 "),g,n(" 知识点的整理与总结的全部内容，"),e("a",p,[n("另附源码"),l(i)])])]),x,f,k,J])}const E=a(_,[["render",B],["__file","80-Java-Jdk7对数据常量的支持.html.vue"]]);export{E as default};
