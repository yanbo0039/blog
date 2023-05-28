import{_ as l,X as s,Y as t,a1 as d,Z as e,$ as n,a2 as r,a0 as a,F as c}from"./framework-68dd73a2.js";const o={},v=a(`<h1 id="_96-java方法的覆盖-重写-md" tabindex="-1"><a class="header-anchor" href="#_96-java方法的覆盖-重写-md" aria-hidden="true">#</a> 96-Java方法的覆盖(重写).md</h1><ul><li><p>方法的覆盖（override)</p><ul><li>重写（rewrite）</li><li>对从父类中继承来的方法进行改造</li><li>在子类继承父类时发生</li></ul></li><li><p>方法覆盖的规则</p><ul><li>在子类中的覆盖方法与父类中被覆盖的方法应具有 <ul><li>相同的方法名</li><li>相同的参数列表（参数数量、参数类型、参数顺序都要相同）</li><li>相同的返回值类型</li><li>子类覆盖方法的访问权限要不小于父类中被覆盖方法的访问权限</li></ul></li></ul></li></ul><p><strong>方法的覆盖也叫方法的重写</strong></p><p><strong>代码示例</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 方法的重写;

public class Fly {

	public void fly() {
		System.out.println(&quot;is flying....&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 方法的重写;

public class Bird extends Fly {

	@Override
	public void fly() {
		super.fly();
		System.out.println(&quot;我是振翅高飞哟。。。。。&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 方法的重写;

public class Test {

	public static void main(String[] args) {

		Fly bird = new Bird();
		bird.fly();//is flying....我是振翅高飞哟。。。。。
		
		
		//Bird b = new Fly(); //这样不行的。。
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>拓展知识：</strong></p><p>方法的重写与方法的重载的区别：</p><ol><li><strong>方法的重写</strong>参数一定要相同;<strong>方法重载</strong>参数一定不同</li><li><strong>方法的重写</strong>是子类重写父类的方法，至少要两个类;<strong>而方法的重载</strong>是发生在一个类中。</li><li><strong>方法的重写</strong>返回值类型必须相同;而<strong>方法的重载</strong>的返回值类型可以相同也可以不同。</li><li><strong>方法的重写</strong>要求方法的访问权限不小于父类中被覆盖方法的访问权限;而<strong>方法的重载</strong>对权限不作要求。</li></ol><p>方法的重写与方法的重载的相同点：</p><p>唯一的相同点就是<strong>方法名称必须相同</strong>。</p>`,12),u=e("em",null,"Java方法的覆盖(重写)",-1),m={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"},b=e("hr",null,null,-1),g=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),p=e("hr",null,null,-1),_=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function h(x,f){const i=c("ExternalLinkIcon");return s(),t("div",null,[d(" more "),v,e("p",null,[e("strong",null,[n("以上就是我关于 "),u,n(" 知识点的整理与总结的全部内容，"),e("a",m,[n("另附源码"),r(i)])])]),b,g,p,_])}const k=l(o,[["render",h],["__file","index.html.vue"]]);export{k as default};
