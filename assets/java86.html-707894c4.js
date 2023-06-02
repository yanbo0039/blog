import{_ as l,X as t,Y as s,a1 as d,Z as e,$ as i,a2 as a,a0 as r,F as c}from"./framework-68dd73a2.js";const o="/blog/assets/Java_86_1.png",u="/blog/assets/Java_86_2.png",v={},m={id:"_86-java-boolean-类型转换-常量-md",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#_86-java-boolean-类型转换-常量-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--rut716i.md",target:"_blank",rel:"noopener noreferrer"},_=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><p>布尔类型 — boolean</p><ul><li><p>boolean类型适于逻辑运算，一般用于程序流程控制</p></li><li><p>boolean 数据类型有两个值：true 和 false</p></li></ul></li></ul><h1 id="数据类型的转换规则" tabindex="-1"><a class="header-anchor" href="#数据类型的转换规则" aria-hidden="true">#</a> 数据类型的转换规则</h1><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>自动类型转换（隐式类型转换）</p><ul><li><p>有多种类型的数据混合运算时，系统首先自动的将所有数据转换成容量最大的那一种数据类型，然后进行计算</p></li><li><p>自动转换规则</p><ul><li>boolean类型不可以转换为其他的数据类型</li><li>整型、字符型、浮点型的数据在混合运算中相互转换，转换时遵守以下原则：</li></ul></li></ul></li></ul><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>byte、short、char之间不会相互转换，他们三者在计算时首先会转换为int类型</p></li><li><p>强制类型转换（显示类型转换）</p><ul><li>容量大的数据类型转换为容量小的数据类型时，需要使用强制类型转换，其格式如下：</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>变量 = (目标类型) 值
例如： byte  a; int b; a = (byte) b;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在强制类型转换过程中，源类型的值可能大于目标类型，因此可能造成精度降低或溢出，使用时需注意</li></ul><p><strong>demo</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class TestUtil {

	/**
	 * 公司名称
	 * 1. 常量
	 * 2. 标识符全部大写，单词之间用_隔开
	 * 3. static: 表示可以通过类名，常量名调用
	 * 4. public: 可以给别的类访问
	 * 5. final: 不可以修改这个常量的值
	 * 6. String: 是一个字符串
	 */
	public static final String COMPANY_NAME = &quot;TENCENT&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test数据类型 {

	public static void main(String[] args) {
		//访问常量
		System.out.println(TestUtil.COMPANY_NAME);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,15),h={class:"hint-container tip"},g=e("p",{class:"hint-container-title"},"提示",-1),f=e("em",null,"Java-字符类型",-1),x={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"};function N(k,E){const n=c("ExternalLinkIcon");return t(),s("div",null,[d(" more "),e("h1",m,[b,i(" 86-Java-boolean&类型转换&"),e("a",p,[i("常量.md"),a(n)])]),_,e("div",h,[g,e("p",null,[e("strong",null,[i("以上就是我关于 "),f,i(" 知识点的整理与总结的全部内容，"),e("a",x,[i("另附源码"),a(n)])])])])])}const y=l(v,[["render",N],["__file","java86.html.vue"]]);export{y as default};
