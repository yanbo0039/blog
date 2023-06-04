import{_ as s,X as t,Y as a,a1 as d,Z as i,$ as n,a2 as l,a0 as v,F as r}from"./framework-68dd73a2.js";const c="/blog/assets/Java_101_1.png",u={},m={id:"_101-java多态及产生条件-md",tabindex:"-1"},b=i("a",{class:"header-anchor",href:"#_101-java多态及产生条件-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--101-Java-580mpz552bjqplfvjtxy90c.md",target:"_blank",rel:"noopener noreferrer"},p=v('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li>多态 <ul><li>简单来说，多态是具有表现多种形态的能力的特征</li><li>同一个实现接口，使用不同的实例而执行不同操作</li></ul></li></ul><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>不同的对象对同一行为作出的不同响应</p></li><li><p>多态存在的三个必要条件</p><ul><li>要有继承，或实现</li><li>要有重写</li><li>父类引用指向子类对象</li></ul><p>一旦满足以上3个条件，当调用父类中被重写的方法后，运行时创建的是哪个子类的对象，就调用该子类中重写的那个方法</p></li><li><p>在执行期间（而非编译期间）判断所引用对象的实际类型，根据其实际类型调用相应的方法</p></li><li><p>多态的优点</p><ul><li>简化代码</li><li>改善代码的组织性和可读性</li><li>易于扩展</li></ul></li></ul><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 引用类型的类型转换;

public class Animal {

	public void eat() {
		System.out.println(&quot;eating....&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 引用类型的类型转换;

public class Dog extends Animal {

	public void showName() {
		System.out.println(&quot;一只Dog&quot;);
	}
	
	@Override
	public void eat() {
//		super.eat();
		System.out.println(&quot;eat 骨头。。。&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 引用类型的类型转换;

public class Cat extends Animal {

	public void cry() {
		System.out.println(&quot;喵喵叫。。。。。&quot;);
	}
	
	@Override
	public void eat() {
//		super.eat();
		System.out.println(&quot;eat 鱼。。&quot;);
	}
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 引用类型的类型转换;

public class Test2 {

	/**
	 * 多态产生的条件：
	 * 要有继承，或 实现
	 * 要有重写
	 * 父类引用指向子类对象
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
//这里不能调用cry()方法，因为将其上溯造型成咯Animal，
//Animal里有有 这方法才有，Animal里没有就 没有
//		Animal a = new Cat();
//		
//		Cat c = (Cat) a;//下溯造型
//		
//		c.cry();
		
		
		
		Animal a = new Animal();
		a.eat();
		Animal b = new Cat();
		b.eat();
		Animal c = new Dog();
		c.eat();
		/**
		 * 调用相同的方法，其行为是不一样的行为，这种行为叫做多态 
		 * 那么这种多态是由于什么原因造成的呢？
		 * 是由于第一发生咯继承
		 * 第二：子 类重写咯父类的方法
		 * 第三：父类引用指向子类实例
		 * 
		 */
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,12),g={class:"hint-container info"},_=i("p",{class:"hint-container-title"},"相关信息",-1),h=i("em",null,"Java多态及产生条件",-1),x={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"};function f(q,A){const e=r("ExternalLinkIcon");return t(),a("div",null,[d(" more "),i("h1",m,[b,n(),i("a",o,[n("101-Java多态及产生条件.md"),l(e)])]),p,i("div",g,[_,i("p",null,[i("strong",null,[n("以上就是我关于 "),h,n(" 知识点的整理与总结的全部内容，"),i("a",x,[n("另附源码"),l(e)])])])])])}const y=s(u,[["render",f],["__file","java101.html.vue"]]);export{y as default};
