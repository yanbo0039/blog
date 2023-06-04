import{_ as d,X as l,Y as s,a1 as a,Z as e,$ as i,a2 as n,a0 as r,F as c}from"./framework-68dd73a2.js";const v="/blog/assets/Java_95_1.png",u={},o={id:"_95-java-权限访问操作符-md",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_95-java-权限访问操作符-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--95-Java--pl2mt48o8wft30eed5b213a7gb.md",target:"_blank",rel:"noopener noreferrer"},b=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><p>使用访问权限修饰符对类的成员进行控制，在java中称为“封装”。</p></li><li><p>不过不要把封装理解为private，不要误认为不能访问成员才是封装。实际上对成员访问权限的任何控制（包括public）都可以称为封装机制。</p></li><li><p><strong>构造器和类的权限通常为public；</strong></p></li><li><p><strong>private权限最小，限制类外访问，一般把属性设为private，让其他类不能直接访问属性，达到保护属性的目的；</strong></p></li><li><p><strong>friendly是默认权限，即不使用权限修饰符时，即为friendly，该权限声明的成员在类内以及在同一个包中的其他类可以访问；</strong></p></li><li><p><strong>而protected所修饰的成员在类内、同一个包中、所在类的子类中都可以访问。</strong></p></li><li><p>public &gt; protected &gt; friendly &gt; private</p></li><li><p>封装</p><ul><li>信息隐藏,隐藏对象的实现细节，不让用户看到</li><li>将东西包装在一起，然后以新的完整形式呈现出来 <ul><li>例如，两种或多种化学药品组成一个胶囊</li><li>将方法和属性一起包装到一个单元中，单元以类的形式实现</li></ul></li></ul></li></ul><p><em>“隐藏属性、方法或实现细节的过程称为封装。”</em></p><ul><li>隐藏类的实现细节</li><li>让使用者只能通过事先定制好的方法来访问数据，可以方便地加入控制逻辑，限制对属性的不合理操作</li><li>便于修改，增强代码的可维护性</li><li>可进行数据检查</li></ul><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>用来控制类的成员和类的使用范围 <ul><li>类成员的访问权限修饰符：private、default、protected、public</li><li>类的访问权限修饰符：public、default</li></ul></li></ul><table><thead><tr><th></th><th>private</th><th>default</th><th>protected</th><th>public</th></tr></thead><tbody><tr><td>同一类</td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td>同一包中的类</td><td></td><td>√</td><td>√</td><td>√</td></tr><tr><td>不同包中的子类</td><td></td><td></td><td>√</td><td>√</td></tr><tr><td>其他包中的类</td><td></td><td></td><td></td><td>√</td></tr></tbody></table><p><strong>示例</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 权限访问修饰符;

public class Order {//此处的public是不可修改的。。。若修改，代码报错不给过。。。

	int id;
	private class Test{}
	protected class Student{};
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 权限访问修饰符;

public class Test {

	Order order;
	
	public void getId() {
//		System.out.println(order.id);//若id的修改符为private则不能访问
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在其它包新建测试类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 权限访问修饰符;

public class Order {//此处的public是不可修改的。。。若修改，代码报错不给过。。。

	public int id;
	private class Test{}
	protected class Student{};
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 继承;

import 权限访问修饰符.Order;//因为不在同一个包中所以需要导包

public class TestOrder extends Order{

	Order order;
	
	public void getId() {
//		System.out.println(order.id);//public的可以访问
	}
	
	public static void main(String[] args) {
		TestOrder o = new TestOrder();
		System.out.println(o.id);//子类可以访问到父类中的protected属性
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,16),g={class:"hint-container info"},h=e("p",{class:"hint-container-title"},"相关信息",-1),_=e("em",null,"Java-权限访问操作符",-1),x={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"};function f(k,y){const t=c("ExternalLinkIcon");return l(),s("div",null,[a(" more "),e("h1",o,[p,i(),e("a",m,[i("95-Java-权限访问操作符.md"),n(t)])]),b,e("div",g,[h,e("p",null,[e("strong",null,[i("以上就是我关于 "),_,i(" 知识点的整理与总结的全部内容，"),e("a",x,[i("另附源码"),n(t)])])])])])}const j=d(u,[["render",f],["__file","java95.html.vue"]]);export{j as default};
