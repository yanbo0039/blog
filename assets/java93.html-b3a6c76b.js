import{_ as l,X as r,Y as t,a1 as a,Z as e,$ as n,a2 as s,a0 as d,F as u}from"./framework-68dd73a2.js";const v={},c={id:"_93-java-super关键字-md",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_93-java-super关键字-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--93-Java-Super-u30v446i5n7q.md",target:"_blank",rel:"noopener noreferrer"},p=d(`<p>现在有Person类Consumer类(继承Person类)和Test类，需求：实例化Consumer，并给username属性赋值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package super关键字;

public class Person {
	protected String username;//protected 子类可以访问到
	
	public Person(String username) {
		this.username = username;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Person() {
		System.out.println(&quot;Person()&quot;);
	}
	public void walk() {
		System.out.println(&quot;person is walking.....&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package super关键字;

public class Consumer extends Person {//这就表达继承
	//private String username;
	
	public Consumer() {
		System.out.println(&quot;Consumer()&quot;);
	}
	public Consumer(String username) {
		this.setUsername(username);
	}

	@Override
	public void walk() {
		super.walk();
		System.out.println(&quot;Consumer is walking....&quot;);
		System.out.println(&quot;Boss is dancing....&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package super关键字;

public class Test {

	public static void main(String[] args) {

		//实例化Consumer，并给username属性赋值
		Consumer c = new Consumer(&quot;zhangsan&quot;);//第二种
//		c.setUsername(&quot;zhangsan&quot;);//第一种
		System.out.println(c.getUsername());
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三种方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package super关键字;

public class Consumer extends Person {//这就表达继承
	//private String username;
	
	public Consumer() {
		super();//这里有没有这个super()效果是一样的，因为子类实例化时一定是先实例化其父类，然后才实例化子类。
		System.out.println(&quot;Consumer()&quot;);
	}
	
//	public Consumer() {
//		super();
//	}
	public Consumer(String username) {
//		this.setUsername(username);
		//可以调用父类构造器：实现给username属性赋值的目的
//		super(username);//调用父类构造器 使用super关键字不但可以访问父类构造器还可以访问父类属性父类行为
		super.username = username;//super关键字 可以访问父类的非私有属性
		super.walk();
	}

	@Override
	public void walk() {
		super.walk();
		System.out.println(&quot;Consumer is walking....&quot;);
		System.out.println(&quot;Boss is dancing....&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结：</h4><p><strong>super关键字作用以及注意事项：</strong></p><ol><li>super可以调用父类构造方法</li><li>可以调用父类中子类可以访问的属性</li><li>可以调用父类中子类可以访问的方法</li><li>super使用时,在同一个构造器中super()和this()不能同时出现</li><li>super(),调用父类构造方法，代码必须出现在第一行；</li></ol><h4 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展" aria-hidden="true">#</a> 拓展：</h4><p><strong>super和this关键字的区别？</strong></p><ul><li><p>super()</p><ul><li>作用：调用父类的构造器</li><li>只能出现在子类的构造器中，且必须是第一行</li><li>super()中的参数，决定了调用父类哪个构造器</li><li>如果子类构造器中没有出现super，那么编译器会默认加上super()，即调用父类的空构造器，如果父类没有空构造器，编译器提示错误。</li></ul></li><li><p>this()</p><ul><li>作用：调用本类的构造器</li><li>只能写在构造器的第一行</li></ul></li><li><p>在同一个构造器中super()和this()不能同时出现</p></li><li><p>super.</p><ul><li>指向父类的引用。</li><li>通过关键字super我们可以指定子类在构造时调用父类的哪个构造器，达到先实例化父类然后实例化子类的目的。</li><li>子类的构造器默认的调用父类无参构造器，即子类构造器中没有用super指明调用父类哪个构造器的话，实际上编译器会自动的在子类构造器第一行加入代码super( );</li></ul></li><li><p>this.</p><ul><li>指向本类的引用。</li><li>我们知道子类在实例化时必须调用父类的构造器，实际上有的子类构造器也可以先调用本类的其他构造器，然后再通过那个构造器调用父类的构造器</li><li>无论是调用父类的构造器还是子类的构造器，最终都是找到最顶级的父类自上而下的实例化。只要中间环节有一个构造器没找到，这个子类就无法完成实例化。</li></ul></li></ul><p><strong>子类实例化的过程</strong></p><ul><li>使用默认的构造器</li><li>在子类中的创建构造器 <ul><li>在子类中创建构造器时，必须调用父类的构造器</li><li>子类可以在自己的构造器中使用super关键字来调用父类的构造器</li><li>如果使用super关键字调用父类构造器，必须写在该子类构造器的第一行</li><li><strong><span style="color:red;">如调用的是父类中无参的构造器，则可以不写super( )</span></strong></li><li>如果子类中调用了父类无参的构造器，而父类中没有无参构造器则系统编译出错</li></ul></li></ul>`,14),b=e("em",null,"Java-Super关键字",-1),h={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"},g=e("hr",null,null,-1),_=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),x=e("hr",null,null,-1),S=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function q(k,C){const i=u("ExternalLinkIcon");return r(),t("div",null,[a(" more "),e("h1",c,[m,n(),e("a",o,[n("93-Java-Super关键字.md"),s(i)])]),p,e("p",null,[e("strong",null,[n("以上就是我关于 "),b,n(" 知识点的整理与总结的全部内容，"),e("a",h,[n("另附源码"),s(i)])])]),g,_,x,S])}const w=l(v,[["render",q],["__file","java93.html.vue"]]);export{w as default};
