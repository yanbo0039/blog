import{_ as s,X as l,Y as d,a1 as a,Z as e,$ as n,a2 as t,a0 as r,F as c}from"./framework-68dd73a2.js";const v={},o={id:"_110-java-自定义异常类-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_110-java-自定义异常类-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--110-Java--yt6n058i0tg9ucb40o99q.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li>自定义异常类 <ul><li>如果Java提供的异常类型不能满足程序设计的需要，我们可以定义自己的异常类型。</li><li>用户自定义的异常类应为 Exception 类（或者Exception 类的子类）的子类</li></ul></li></ul><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 自定义异常;

/**
 * 自定义异常：商品不存在异常
 * 
 * 自定义异常的要求：
 * 1、继承Exception
 * 2、复写
* &lt;p&gt;Title: ProcutNotExistException&lt;/p&gt;  
* &lt;p&gt;Description: &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月10日
 */
public class ProductNotExistException extends Exception{
	
	/** 
	* serialVersionUID
	* 关于serialVersionUID讲解比较详细的博客
	* https://blog.csdn.net/wuzhong8809/article/details/83416579
	* https://blog.csdn.net/u014750606/article/details/80040130
	*/  
	private static final long serialVersionUID = -1046619572695534339L;

	//Eclipse: source ---&gt; generate constructors from superclass
	/**
	 * 当要抛出异常时会调用该构造方法，实例化一个异常对象
	* &lt;p&gt;Title: &lt;/p&gt;  
	* &lt;p&gt;Description: &lt;/p&gt;  
	* @param message
	 */
	public ProductNotExistException(String message) {
		super(message);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 自定义异常;

public class ProductService {

	/**
	 * 查找商品的方法
	 * @throws ProductNotExistException 
	 */
	public void queryProduct(int id) throws ProductNotExistException {
		if(id == 0) {
			throw new ProductNotExistException(&quot;商品不存在&quot;);
		}else {
			System.out.println(&quot;找到商品了&quot;);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 自定义异常;

public class Test {

	public static void main(String[] args) {
		ProductService service = new ProductService();
		
		try {
			service.queryProduct(0);
		} catch (ProductNotExistException e) {
			e.printStackTrace();
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拓展知识点" tabindex="-1"><a class="header-anchor" href="#拓展知识点" aria-hidden="true">#</a> 拓展知识点</h3>`,7),p={href:"https://blog.csdn.net/wuzhong8809/article/details/83416579",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/duanxz/p/3511695.html",target:"_blank",rel:"noopener noreferrer"},g=e("hr",null,null,-1),_=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),x=e("hr",null,null,-1),E={class:"hint-container tip"},f=e("p",{class:"hint-container-title"},"提示",-1),k=e("em",null,"Java-自定义异常类",-1),N={href:"https://github.com/javaobjects/demo515",target:"_blank",rel:"noopener noreferrer"};function P(w,V){const i=c("ExternalLinkIcon");return l(),d("div",null,[a(" more "),e("h1",o,[u,n(),e("a",m,[n("110-Java-自定义异常类.md"),t(i)])]),b,e("p",null,[e("a",p,[n("serialVersionUID的作用及生成方法"),t(i)])]),e("p",null,[e("a",h,[n("Java类中serialversionuid 作用 是什么?举个例子说明"),t(i)])]),g,_,x,e("div",E,[f,e("p",null,[e("strong",null,[n("以上就是我关于 "),k,n(" 知识点的整理与总结的全部内容，"),e("a",N,[n("另附源码"),t(i)])])])])])}const q=s(v,[["render",P],["__file","java110.html.vue"]]);export{q as default};
