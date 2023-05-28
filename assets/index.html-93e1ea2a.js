import{_ as s,X as l,Y as d,a1 as a,Z as i,$ as n,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},u={id:"_108-java-内部类在迭代模式中的运用-md",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_108-java-内部类在迭代模式中的运用-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--108-Java--yl6nr6dcxn8wti8zt00bu4zb92ef94a147foqa33o.md",target:"_blank",rel:"noopener noreferrer"},o=r(`<p>注：<em>本例中用中文作为包名是不规范的写法，仅方便中国大陆同胞更好的理解包的作用，实际开发中均用英文。</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 内部类.现象一;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Test {

	public static void main(String[] args) {
		List&lt;String&gt; list = new ArrayList&lt;&gt;();
		
		//MyList list = new MyList();
		/**
		 * list.add(&quot;&quot;);
		 * 
		 * MyIterator it = list.iterator();
		 */
		
		
		list.add(&quot;zhangsan&quot;);
		list.add(&quot;lisi&quot;);
		list.add(&quot;wangwu&quot;);
		
		Iterator&lt;String&gt; it = list.iterator();
		
		while(it.hasNext()) {
			System.out.println(it.next());
		}
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 内部类.自已写迭代实现;

public interface MyIteratorIfac {

	public boolean hasNext();
	
	public String next();
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 内部类.自已写迭代实现;

import java.util.ArrayList;
import java.util.List;

/**
 * 定义一个集合类
* &lt;p&gt;Title: MyList&lt;/p&gt;  
* &lt;p&gt;Description: &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月9日
 */
public class MyList {

	private List list = new ArrayList&lt;&gt;();
	
	public void add(String str) {
		list.add(str);
	}
	
	//定义一个迭代方法
	public MyIterator iterator() {
		return new MyIterator();
	}
	
	//定义一个内部类
	private class MyIterator implements MyIteratorIfac{

		int index = 0;
		@Override
		public boolean hasNext() {
			if(index &lt; list.size()) {
				return true;
			}else {
				return false;
			}
		}

		@Override
		public String next() {
			String s = (String)list.get(index);
			index++;
			return s;
		}
		
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 内部类.自已写迭代实现;

public class Test {

	public static void main(String[] args) {

		MyList list = new MyList();
		
		list.add(&quot;zhangsan&quot;);
		list.add(&quot;lisi&quot;);
		list.add(&quot;telangpu&quot;);
		
		MyIteratorIfac it = list.iterator();
		
		while(it.hasNext()) {
			System.out.println(it.next());
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=i("em",null,"Java-内部类在迭代模式中的运用",-1),g={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"},h=i("hr",null,null,-1),x=i("h3",{id:"分割线",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),_=i("hr",null,null,-1),f=i("p",null,[i("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function y(L,q){const e=v("ExternalLinkIcon");return l(),d("div",null,[a(" more "),i("h1",u,[m,n(),i("a",b,[n("108-Java-内部类在迭代模式中的运用.md"),t(e)])]),o,i("p",null,[i("strong",null,[n("以上就是我关于 "),p,n(" 知识点的整理与总结的全部内容，"),i("a",g,[n("另附源码"),t(e)])])]),h,x,_,f])}const M=s(c,[["render",y],["__file","index.html.vue"]]);export{M as default};
