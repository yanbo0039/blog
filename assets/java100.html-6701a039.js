import{_ as s,X as t,Y as a,a1 as d,Z as n,$ as e,a2 as l,a0 as v,F as r}from"./framework-68dd73a2.js";const c={},u={id:"_100-java引用类型转换之下溯造型-md",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_100-java引用类型转换之下溯造型-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--100-Java-139ltu572fca002wpyn6j5bmwvzo2a2i5e31c.md",target:"_blank",rel:"noopener noreferrer"},o=v(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li>向下转型（Downcasting）：强制转换 <ul><li>将父类对象显示的转换成子类类型。</li><li>曾经向上转换过的对象，才能再向下转换。对象不允许不经过上溯造型而直接下溯造型。</li><li>如下写法是会出现运行期错误：</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person p = new Person();
Student s = (Student)p;

Animal a = new Cat( );
Cat c = (Cat)a;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 引用类型的类型转换;

public class Animal {

	public void eat() {
		System.out.println(&quot;eating....&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 引用类型的类型转换;

public class Cat extends Animal {

	@Override
	public void eat() {
//		super.eat();
		System.out.println(&quot;eat 鱼。。&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 引用类型的类型转换;

public class Dog extends Animal {

	@Override
	public void eat() {
//		super.eat();
		System.out.println(&quot;eat 骨头。。。&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 引用类型的类型转换;

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
		
		//第六种情况：
		//1.发生了上溯造型
		Animal f = new Dog();
		f.eat();
//		Dog g = f;//这里报错是因为Dog被上溯造型咯Animal，解决bug需要将已经上溯造型的f强制下溯造型
		//2.发生了下溯造型;发生的条件是原来被上溯造型过
//		Dog g = (Dog) f;//下溯造型
//		g.eat();
		
		
		//更好的写法
		
		Dog g = null;
		
		if(f instanceof Dog) {//如果f是Dog的实例才将其下溯造型
			g = (Dog) f;
		}
		g.eat();
		
		
		Animal h = new Animal();
		
		if(h instanceof Dog) {
			Dog k = (Dog) h;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),g=n("em",null,"Java引用类型转换之下溯造型",-1),p={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"},h=n("hr",null,null,-1),_=n("h3",{id:"分割线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),x=n("hr",null,null,-1),f=n("p",null,[n("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function D(A,w){const i=r("ExternalLinkIcon");return t(),a("div",null,[d(" more "),n("h1",u,[m,e(),n("a",b,[e("100-Java引用类型转换之下溯造型.md"),l(i)])]),o,n("p",null,[n("strong",null,[e("以上就是我关于 "),g,e(" 知识点的整理与总结的全部内容，"),n("a",p,[e("另附源码"),l(i)])])]),h,_,x,f])}const k=s(c,[["render",D],["__file","java100.html.vue"]]);export{k as default};
