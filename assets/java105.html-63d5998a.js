import{_ as l,X as s,Y as a,a1 as t,Z as e,$ as i,a2 as d,a0 as v,F as r}from"./framework-68dd73a2.js";const c={},u={id:"_105-java抽象类-md",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_105-java抽象类-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--105-Java-e18pm37retvb.md",target:"_blank",rel:"noopener noreferrer"},o=v(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li>抽象类和抽象方法的概念 <ul><li>抽象类是抽象方法和非抽象方法的集合</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[访问权限修饰符]  abstract   class   类名 {
                             ……
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>特殊情况 <ul><li>全部是抽象方法</li><li>全部为非抽象方法</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>abtract class A {
      String   name; 
      abstract int method1(int a, int b); 
      void  sayHi( ){
            System.out.println(“Hello!”);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>抽象方法 <ul><li>只有方法声明，没有方法实现的方法</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[访问权限修饰符]  abstract   返回值类型    抽象方法名 (参数列表) ;
abstract class A {
     
  abstract int method1(int a, int b);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>抽象类的规则 <ul><li>注意： <ul><li>抽象类不能被实例化；</li><li>其包含的抽象方法必须在其子类中被实现，否则该子类只能声明为abstract；</li><li>抽象方法不能为static；</li></ul></li><li>在下列情况下，一个类必须声明为抽象类： <ul><li>当一个类的一个或多个方法是抽象方法时；</li><li>当类是一个抽象类的子类，并且没有实现父类的所有抽象方法，即只实现部分；</li><li>当一个类实现一个接口，并且不能为全部抽象方法都提供实现时；</li></ul></li></ul></li></ul><p>给定以下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class Test{
    public abstract void methodA();
    public abstract void methodB(){
        System.out.println(&quot;Hello&quot;);
    }
}
执行下列哪些操作后，可以让代码通过编译？
A.对methodA方法添加方法体
B.将5~7行，用“;”代替
C.删除class前的abstract关键字
D.删除methodA方法前的abstract关键字
E.删除methodB方法前的abstract关键字

答案：BE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 抽象类;
/**
 * OrderDao对Order进行增删改查（CRUD）的方法
* &lt;p&gt;Title: OrderDao&lt;/p&gt;  
* &lt;p&gt;Description: &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月6日
 */
public abstract class OrderDao {//abstract抽象

	/**
	 * 1.抽象类中可以没有抽象方法
	 * 
	 * 2.如果一个类中有抽象方法，那么这个类必须是抽象类
	 * 
	 * 3.如果子类没有实现该抽象方法，那么子类也必须声明为抽象类
	 * 
	 * 4.
	 */
	public abstract void getOrder();
	
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 抽象类;

public abstract class OrderDaoImp1 extends OrderDao {

//	@Override
//	public void getOrder() {
//
//	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 抽象类;

public class OrderDaoImp2 extends OrderDao {

	@Override
	public void getOrder() {

	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 抽象类;

public class OrderSunzi extends OrderDaoImp1 {

	@Override
	public void getOrder() {
		System.out.println(&quot;getOrder()。。。。&quot;);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 抽象类;

public class StudentImp implements StudentInterface {

	/**
	 * 一个类如果实现接口必须实现接口里的所有方法
	 * 如果一个类里有未实 现接口的方法那么只有abstract
	 * 
	 * 加咯abstract会带来一个新的问题
	 * 这个类是不能被实例化的，除非它再生一个子类
	 */
	@Override
	public void addStudent() {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteStudent() {
		// TODO Auto-generated method stub

	}

	@Override
	public void updateStudent() {
		// TODO Auto-generated method stub

	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 抽象类;

public interface StudentInterface {

	public void addStudent();
	
	public void deleteStudent();
	
	public void updateStudent();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 抽象类;

public class Test {

	public static void main(String[] args) {
		//抽象类不被实例化
		//OrderDao dao = new OrderDao();
		//若非要实例化，那么可以实例化其子类
//		OrderDao dao1 = new OrderDaoImp1();
		OrderDao dao1 = new OrderSunzi();
		
		OrderDao dao2 = new OrderDaoImp2();
		
		
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,21),p={class:"hint-container tip"},g=e("p",{class:"hint-container-title"},"提示",-1),x=e("em",null,"Java抽象类",-1),h={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"};function O(_,D){const n=r("ExternalLinkIcon");return s(),a("div",null,[t(" more "),e("h1",u,[m,i(),e("a",b,[i("105-Java抽象类.md"),d(n)])]),o,e("div",p,[g,e("p",null,[e("strong",null,[i("以上就是我关于 "),x,i(" 知识点的整理与总结的全部内容，"),e("a",h,[i("另附源码"),d(n)])])])])])}const f=l(c,[["render",O],["__file","java105.html.vue"]]);export{f as default};
