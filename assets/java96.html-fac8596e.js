import{_ as l,X as s,Y as t,a1 as a,Z as i,$ as n,a2 as r,a0 as d,F as c}from"./framework-68dd73a2.js";const o={},v=d(`<h1 id="_96-java方法的覆盖-重写-md" tabindex="-1"><a class="header-anchor" href="#_96-java方法的覆盖-重写-md" aria-hidden="true">#</a> 96-Java方法的覆盖(重写).md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><p>方法的覆盖（override)</p><ul><li>重写（rewrite）</li><li>对从父类中继承来的方法进行改造</li><li>在子类继承父类时发生</li></ul></li><li><p>方法覆盖的规则</p><ul><li>在子类中的覆盖方法与父类中被覆盖的方法应具有 <ul><li>相同的方法名</li><li>相同的参数列表（参数数量、参数类型、参数顺序都要相同）</li><li>相同的返回值类型</li><li>子类覆盖方法的访问权限要不小于父类中被覆盖方法的访问权限</li></ul></li></ul></li></ul><p><strong>方法的覆盖也叫方法的重写</strong></p><p><strong>代码示例</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 方法的重写;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>拓展知识：</strong></p><p>方法的重写与方法的重载的区别：</p><ol><li><strong>方法的重写</strong>参数一定要相同;<strong>方法重载</strong>参数一定不同</li><li><strong>方法的重写</strong>是子类重写父类的方法，至少要两个类;<strong>而方法的重载</strong>是发生在一个类中。</li><li><strong>方法的重写</strong>返回值类型必须相同;而<strong>方法的重载</strong>的返回值类型可以相同也可以不同。</li><li><strong>方法的重写</strong>要求方法的访问权限不小于父类中被覆盖方法的访问权限;而<strong>方法的重载</strong>对权限不作要求。</li></ol><p>方法的重写与方法的重载的相同点：</p><p>唯一的相同点就是<strong>方法名称必须相同</strong>。</p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,16),u={class:"hint-container info"},m=i("p",{class:"hint-container-title"},"相关信息",-1),b=i("em",null,"Java方法的覆盖(重写)",-1),p={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"};function g(h,_){const e=c("ExternalLinkIcon");return s(),t("div",null,[a(" more "),v,i("div",u,[m,i("p",null,[i("strong",null,[n("以上就是我关于 "),b,n(" 知识点的整理与总结的全部内容，"),i("a",p,[n("另附源码"),r(e)])])])])])}const f=l(o,[["render",g],["__file","java96.html.vue"]]);export{f as default};
