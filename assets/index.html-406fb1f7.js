import{_ as s,X as d,Y as a,a1 as t,Z as i,$ as e,a2 as l,a0 as r,F as v}from"./framework-68dd73a2.js";const u={},c={id:"_107-java-内部类-md",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_107-java-内部类-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--107-Java--jl3os498a1h5b.md",target:"_blank",rel:"noopener noreferrer"},o=r(`<ul><li>内部类特性 <ul><li>内部类就是定义在另一个类内部的类。</li><li>内部类对于同一包中的其它类来说，内部类能够隐藏起来。</li></ul></li><li>注意 <ul><li>内部类可以访问其外部类中所有的属性和方法</li><li>无需创建外部类的对象，即可从内部类访问外部类的变量和方法。</li><li>必须创建内部类的对象，否则无法从外部类访问内部类的变量和方法。</li><li>如果内部类中有和外部类同名的变量或方法，则内部类的变量和方法将获得比外部类的变量和方法更高的优先级。</li><li>不能定义static变量</li></ul></li><li>内部类特性 <ul><li>一个类只会被这个类所调用，其他类不会使用他，你可以把它定义成一内部类，这样可以隐藏实现细节，避免错误的调用。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Outer
{
    private int varOuter=100;
    class Inner
    {
        int varInner=200;
        public void showOuter()
        {
            System.out.println(varOuter); //是否能够输出？
        }
    }
    public void showInner()
    {
        Inner i=new Inner();
        System.out.println(i.varInner);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>普通类的访问权限修饰符 <ul><li>default</li><li>public</li></ul></li><li>内部类的访问权限修饰符 <ul><li>default</li><li>public</li><li>protected</li><li>private</li></ul></li><li>在Outer内访问Inner,只需如下:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Inner in = new Inner() ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在Outer外访问Inner,必须如下:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Outer o = new Outer(); //实例化外部类
Outer.Inner oi = o.new Inner(); //实例化内部类
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>静态内部类 <ul><li>用static标识的内部类为静态内部类。</li><li>静态内部类作为外部类的静态成员，不能访问外部类非静态成员。</li><li>非静态内部类只能定义非静态成员，而静态内部类可以定义静态成员和非静态成员。</li><li>使用Outer.Inner inn=new Outer.Inner()方式实例化静态内部类。</li><li>非静态内部类不可以使用上面的方式实例化。</li></ul></li><li>局部内部类 <ul><li>在一个类的方法体中或程序块内定义的内部类</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class  A{
    int a;
    public void method(){     
    }
    class B{ }//类中定义的内部类
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class A{
    int a;
    public void method( int c ){
        int b=0;
        class B{ }//局部内部类
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Outer2 {
      public int a = 1;
      private int b = 2;
      public void method( final int c) {
          int d = 3;
          final int e = 2;
          class Inner {
              private void iMethod( int e) {
                  //System.out.println(e);
              }
          }
      }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在方法定义的内部类中只能访问方法中的final类型的局部变量</li></ul><p><strong>示例代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 内部类;

public class OuterClass {

	private int id;
	private String name;
	
	//成员内部类
	private class InnerClass1{
		private int id;
		private String name;
	}
	//静态内部类，所有对象共享
	static class InnerClass2{
		
	}
	
	public void show() {
		//局部内部类
		class InnerClass3{
			
		}
	}	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),p=i("em",null,"Java-内部类",-1),h={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"},x=i("hr",null,null,-1),_=i("h3",{id:"分割线",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),g=i("hr",null,null,-1),I=i("p",null,[i("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function f(O,w){const n=v("ExternalLinkIcon");return d(),a("div",null,[t(" more "),i("h1",c,[m,e(),i("a",b,[e("107-Java-内部类.md"),l(n)])]),o,i("p",null,[i("strong",null,[e("以上就是我关于 "),p,e(" 知识点的整理与总结的全部内容，"),i("a",h,[e("另附源码"),l(n)])])]),x,_,g,I])}const C=s(u,[["render",f],["__file","index.html.vue"]]);export{C as default};
