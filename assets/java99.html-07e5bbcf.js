import{_ as s,X as l,Y as t,a1 as d,Z as e,$ as n,a2 as a,a0 as r,F as c}from"./framework-68dd73a2.js";const v="/blog/assets/Java_99_1.png",u="/blog/assets/Java_99_2.png",m={},o={id:"_99-java引用类型转换之上溯造型-md",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#_99-java引用类型转换之上溯造型-md","aria-hidden":"true"},"#",-1),g={href:"http://xn--99-Java-mw3k0s535eca072u8ymjr2b9jufz0ajm5eywc.md",target:"_blank",rel:"noopener noreferrer"},_=r('<ul><li>向上转型（Upcasting）— 子类转换为父类，自动转换； <ul><li>前提 — 具有继承或实现关系</li><li>向上转换损失了子类新扩展的属性和方法，仅可以使用从父类中继承的属性和方法</li></ul></li></ul><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>示例代码：</strong></p><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 引用类型的类型转换;

public class Animal {

	public void eat() {
		System.out.println(&quot;eating....&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 引用类型的类型转换;

public class Cat extends Animal {

	@Override
	public void eat() {
		super.eat();
		System.out.println(&quot;eat 鱼。。&quot;);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 引用类型的类型转换;

public class Dog extends Animal {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 引用类型的类型转换;

public class Test {

	public static void main(String[] args) {

		//第一种情况：
		Animal a = new Animal();
		
		//a.eat();
		
		//第二种情况：声明是Animal类型，实际赋值是Cat类型
		//上溯造型：把猫对象造型成Animal对象，然后再赋值给b引用
		Animal b = new Cat();//上溯造型，将子类类型赋值给父类变量
		b.eat();
		
		//第三种情况：
		Cat c = new Cat();
		c.eat();
		
		//第四种情况：
//		Cat d = new Dog();//这种报错，代码不让过
		
		//第五种情况：
//		Cat e = new Animal();//不可将父级赋值给子级
		
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=e("em",null,"Java引用类型转换之上溯造型",-1),h={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"},x=e("hr",null,null,-1),f=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),k=e("hr",null,null,-1),j=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function A(C,w){const i=c("ExternalLinkIcon");return l(),t("div",null,[d(" more "),e("h1",o,[b,n(),e("a",g,[n("99-Java引用类型转换之上溯造型.md"),a(i)])]),_,e("p",null,[e("strong",null,[n("以上就是我关于 "),p,n(" 知识点的整理与总结的全部内容，"),e("a",h,[n("另附源码"),a(i)])])]),x,f,k,j])}const J=s(m,[["render",A],["__file","java99.html.vue"]]);export{J as default};
