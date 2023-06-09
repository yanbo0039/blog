import{_ as t,X as d,Y as l,a1 as r,Z as i,$ as n,a2 as s,a0 as a,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_102_1.png",u={},o={id:"_102-java-static关键字修饰变量-方法-初始化块-md",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_102-java-static关键字修饰变量-方法-初始化块-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--7brpx95hz1c.md",target:"_blank",rel:"noopener noreferrer"},p=a(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>static: 静态的，该类的所有对象共享。</p><ul><li>static关键字 <ul><li>static可以修饰的元素</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例      Chinese.java
class Chinese {
    String name;
    static String country;//属性
    String age;
    static{//代码块
        System.out.println(&quot;你好！&quot;);
    }
    static void sing(){//方法
        System.out.pringln(&quot;北京欢迎你!&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>需要注意的问题</p><ul><li>只能修饰类成员，不能修饰局部变量。</li></ul></li><li><p>静态变量</p><ul><li>所有对象共享 <ul><li>也称为类变量</li></ul></li><li>用static修饰的成员变量，它们在类被载入时创建，只要类存在，static变量就存在（参考java虚拟机视频）</li><li>两种方式访问： <ul><li>直接访问：类名.属性；</li><li>实例化后访问：对象名.属性</li></ul></li></ul></li></ul><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package static关键字;

public class Order {
	
//	public static Order() {//static 不能修饰构造方法
//	 
//	}

	/**
	 * 所有静态变量，通过类名，变量名可以调用Order.count;
	 * 也可以通过该类的实例化对象来访问到o1.count;
	 */
	static int count = 0;//订单的数量
	public Order() {
		count++;
	}
	/**
	 * 类加载器将Order.class加载进内存时，
	 * 会执行静态初始化块，并且只执行一次
	 */
	static {
		System.out.println(&quot;static{}&quot;);
	}
	
	/**
	 * 所有静态方法，通过类名，方法名可以调用Order.sort();
	 * 也可以通过该类的实例化对象来访问到o1.sort();
	 */
	static void sort(Order[] orders) {
		
		//id++;//不行 static方法不能访问非静态属性
		//getId();//不行 static方法不能访问非静态方法
		System.out.println(&quot;sort(Order[] orders)&quot;);
	}
	
	private int id;//订单的单号

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package static关键字;

public class Test {

	public static void main(String[] args) {

		Order o1 = new Order();
		
		Order o2 = new Order();
		
		Order o3 = new Order();
		
		System.out.println(Order.count);//3
		System.out.println(o1.count);//3
		System.out.println(o2.count);//3
		System.out.println(o3.count);//3
		
		Order.sort(new Order[3]);//sort(Order[] orders)
		o1.sort(new Order[3]);//sort(Order[] orders)
		o2.sort(new Order[3]);//sort(Order[] orders)
		o3.sort(new Order[3]);//sort(Order[] orders)
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>',12),h={class:"hint-container info"},g=i("p",{class:"hint-container-title"},"相关信息",-1),_=i("em",null,"Java-static关键字修饰变量&方法&初始化块",-1),O={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"};function x(f,S){const e=v("ExternalLinkIcon");return d(),l("div",null,[r(" more "),i("h1",o,[m,n(" 102-Java-static关键字修饰变量&方法&"),i("a",b,[n("初始化块.md"),s(e)])]),p,i("div",h,[g,i("p",null,[i("strong",null,[n("以上就是我关于 "),_,n(" 知识点的整理与总结的全部内容，"),i("a",O,[n("另附源码"),s(e)])])])])])}const j=t(u,[["render",x],["__file","java102.html.vue"]]);export{j as default};
