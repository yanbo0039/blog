import{_ as s,X as l,Y as d,a1 as a,Z as i,$ as n,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},u={id:"_108-java-内部类在迭代模式中的运用-md",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_108-java-内部类在迭代模式中的运用-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--108-Java--yl6nr6dcxn8wti8zt00bu4zb92ef94a147foqa33o.md",target:"_blank",rel:"noopener noreferrer"},o=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>注：<em>本例中用中文作为包名是不规范的写法，仅方便中国大陆同胞更好的理解包的作用，实际开发中均用英文。</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 内部类.现象一;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,9),p={class:"hint-container info"},g=i("p",{class:"hint-container-title"},"相关信息",-1),h=i("em",null,"Java-内部类在迭代模式中的运用",-1),x={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"};function _(f,y){const e=v("ExternalLinkIcon");return l(),d("div",null,[a(" more "),i("h1",u,[m,n(),i("a",b,[n("108-Java-内部类在迭代模式中的运用.md"),t(e)])]),o,i("div",p,[g,i("p",null,[i("strong",null,[n("以上就是我关于 "),h,n(" 知识点的整理与总结的全部内容，"),i("a",x,[n("另附源码"),t(e)])])])])])}const q=s(c,[["render",_],["__file","java108.html.vue"]]);export{q as default};
