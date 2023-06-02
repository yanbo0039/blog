import{_ as s,X as l,Y as d,a1 as a,Z as i,$ as n,a2 as e,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},u=r(`<h1 id="_124-java-arraylist集合的增删改查-crud-md" tabindex="-1"><a class="header-anchor" href="#_124-java-arraylist集合的增删改查-crud-md" aria-hidden="true">#</a> 124-Java-ArrayList集合的增删改查(CRUD).md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>闲话少说，直接上代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package List集合;

import java.util.ArrayList;
import java.util.List;

/**
 * 集合的CRUD
* &lt;p&gt;Title: TestArrayList&lt;/p&gt;  
* &lt;p&gt;Description: &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月12日
 */
public class TestArrayList {

	/**
	 * 1. 声明集合时需要把泛型具体化，否则黄色警告
	 * 2.list集合是三有产品：有序(索引)，有重复，有null值
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
		//1.ArrayList的创建
//		List list = new ArrayList(); 
//		
//		list.add(&quot;abc&quot;);
//		
//		list.add(123);
		
//		for (int i = 0; i &lt; list.size(); i++) {
//			int num = Integer.valueOf((String)list.get(i));
//			System.out.println(num);
//		}//这个代码有隐患，会抛出异常，解决方法是声明的时候：List&lt;String&gt;
		
		List&lt;Integer&gt; list = new ArrayList&lt;Integer&gt;();//前面声明咯类型后面也要这样写，然后构造方法一组圆括号
		list.add(123);
		list.add(null);
		list.add(234);
		list.add(123);
		
		for (int i = 0; i &lt; list.size(); i++) {
			System.out.println(list.get(i));
		}
		System.out.println(&quot;list.contains(123): &quot; + list.contains(123));
		
		//修改方法
		list.set(0,666);
		for (int i = 0; i &lt; list.size(); i++) {
			System.out.println(list.get(i));
		}
		
		list.remove(0);//这是真正的删除方法，会把这个元素从集合中拿走，然后后面的元素都往前挪
		
		System.out.println(&quot;================&quot;);
		System.out.println(list.size());
		
		for (int i = 0; i &lt; list.size(); i++) {
			System.out.println(list.get(i));
		}
		
//		list.clear();
//		System.out.println(list.size());
		
		List subList = list.subList(1,3);
		System.out.println(&quot;====================&quot;);
		for (int i = 0; i &lt; subList.size(); i++) {
			System.out.println(subList.get(i));
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="拓展知识" tabindex="-1"><a class="header-anchor" href="#拓展知识" aria-hidden="true">#</a> 拓展知识：</h4>`,5),m={href:"https://blog.csdn.net/zx711166/article/details/81539060",target:"_blank",rel:"noopener noreferrer"},o=i("em",null,"Java-ArrayList集合的增删改查(CRUD)",-1),b={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"},p=i("hr",null,null,-1),h=i("h3",{id:"分割线",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),g=i("hr",null,null,-1),_=i("p",null,[i("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function f(y,L){const t=v("ExternalLinkIcon");return l(),d("div",null,[a(" more "),u,i("p",null,[i("a",m,[n("Elasticsearch API实现CRUD（增删改查）"),e(t)])]),i("p",null,[i("strong",null,[n("以上就是我关于 "),o,n(" 知识点的整理与总结的全部内容，"),i("a",b,[n("另附源码"),e(t)])])]),p,h,g,_])}const S=s(c,[["render",f],["__file","java124.html.vue"]]);export{S as default};
