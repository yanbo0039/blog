import{_ as s,X as t,Y as d,a1 as a,Z as e,$ as n,a2 as l,a0 as r,F as c}from"./framework-68dd73a2.js";const v={},u={id:"_14-java-单例模式-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_14-java-单例模式-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--14-Java---yg9nn74ako9avc4a.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><p>单例模式（singleton）：保证一个类仅有一个实例，并提供一个访问它的全局访问点</p></li><li><p>单例模式要点：</p><ul><li>某个类只能有一个实例</li><li>它必须自行创建这个示例</li><li>必须自行向整个系统提供这个实例</li></ul></li><li><p>单例模式实现：</p><ul><li>拥有一个私有构造器</li><li>提供一个自身静态私有的成员变量</li><li>提供一个公有的静态公有的方法</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton { 
　　//在自己内部定义自己的一个实例，只供内部调用 
　　private static Singleton instance = new Singleton(); 
　　private Singleton(){ 
　　	//do something 
　　} 
　　//这里提供了一个供外部访问本class的静态方法，可以直接访问 
　　public static Singleton getInstance(){ 
　	　return instance; 
　　} 
　} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 单例模式实现步骤：
 1.构造器私有
 2.提供私有的静态的当前类类型的变量
 3.提供一个公共的静态方法，返回刚才定义的变量，如果这个变量为null，那么给他赋值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class MyOrder {

//	public MyOrder() {
//		// TODO Auto-generated constructor stub
//	}//为什么有这个空的构造器存在。。输出值就为0咯。。。没有则为1
	
	
	private static MyOrder myOrder;//第一个MyOrder是引用类型 第二个myOrder是变量名
	
	public static MyOrder getInstance()
	{
		if(myOrder == null) {
			myOrder = new MyOrder();
		}
		return myOrder;
	}
	
	
	static int count = 0;
	
	private MyOrder()
	{
		count++;
	}
	
	public static void main(String[] args) {
		for (int i = 0; i &lt; 10; i++) {
			MyOrder myOrder = MyOrder.getInstance();
		}
		System.out.println(MyOrder.count);//1
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,8),p={class:"hint-container info"},h=e("p",{class:"hint-container-title"},"相关信息",-1),_=e("em",null,"Java-单例模式",-1),g={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"};function x(y,O){const i=c("ExternalLinkIcon");return t(),d("div",null,[a(" more "),e("h1",u,[o,n(),e("a",m,[n("14-Java--单例模式.md"),l(i)])]),b,e("div",p,[h,e("p",null,[e("strong",null,[n("以上就是我关于 "),_,n(" 知识点的整理与总结的全部内容，"),e("a",g,[n("另附源码"),l(i)])])])])])}const M=s(v,[["render",x],["__file","java14.html.vue"]]);export{M as default};
