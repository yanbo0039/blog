import{_ as l,X as a,Y as s,a1 as d,Z as t,$ as e,a2 as n,a0 as r,F as u}from"./framework-68dd73a2.js";const v="/blog/assets/Java_134_1.png",c="/blog/assets/Java_134_2.png",o={},p={id:"_134-java-map集合-md",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_134-java-map集合-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--134-Java-Map-860ut263e.md",target:"_blank",rel:"noopener noreferrer"},g=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><p>Map接口</p><ul><li>Map内存储的是键/值对这样以成对的对象组(可以把一组对象当成一个元素)，通过“键”对象来查询“值”对象</li><li>Map是不同于Collection的另外一种集合接口</li><li>Map中，key值是唯一的(不能重复)，而key对象是与value对象关联在一起的</li></ul></li><li><p>Map接口有两个实现：</p><ul><li>HashMap — key/value对是按照Hash算法存储的</li></ul></li><li><p>TreeMap — key/value对是排序(按key排序)存储的</p></li></ul><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th>方法</th><th>含义</th></tr></thead><tbody><tr><td>Object put(Object key,Object value)</td><td>将指定的值与此映射中的指定键相关联</td></tr><tr><td>void putAll(Map t)</td><td>将映射t中所有映射关系复制到此映射中</td></tr><tr><td>Object get(Object key)</td><td>返回此映射中映射到指定键的值</td></tr><tr><td>Object remove(Object key)</td><td>若存在此键的映射关系,将其从映射中移除</td></tr><tr><td>boolean containsKey(Object key)</td><td>若此映射包含指定键的映射关系，返回 true</td></tr><tr><td>boolean containsValue(Object value)</td><td>若此映射为指定值映射一个或多个键,返回 true</td></tr><tr><td>int size()</td><td>返回此映射中的键-值映射对数</td></tr><tr><td>void clear()</td><td>从此映射中移除所有映射关系</td></tr><tr><td>boolean isEmpty()</td><td>若此映射未包含键-值映射关系,返回 true</td></tr><tr><td>Set keySet()</td><td>返回此映射中包含的键的 set 视图</td></tr></tbody></table><ul><li>Map接口的实现类 <ul><li>基于哈希表的 Map 接口的实现</li><li>HashMap的构造方法</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HashMap  变量名 = new  HashMap() ;
HashMap  变量名 = new  HashMap(int capacity) ;
HashMap  变量名 = new  HashMap(int capacity,float lodeFactor) ;
HashMap  变量名 = new  HashMap(Map m) ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>HashMap与TreeMap的比较</p><ul><li>HashMap基于哈希表实现。TreeMap基于树实现。</li><li>HashMap可以通过调优初始容量和负载因子，优化HashMap空间的使用。TreeMap没有调优选项，因为该树总处于平衡状态</li><li>HashMap性能优于TreeMap。</li></ul></li><li><p>HashMap与Hashtable的比较</p><ul><li>Hashtable是基于陈旧的Dictionary类的，HashMap是Java 1.2引进的Map接口的一个实现。</li><li>Hashtable是线程安全的，也就是说是同步的，而HashMap是线程序不安全的，不是同步的。</li><li>HashMap允许将null作为一个entry的key或者value，而Hashtable不允许。</li></ul></li><li><p>如何选择集合类</p><ul><li>Set内存放的元素不允许重复，List存放的元素有一定的顺序。</li><li>Map的应用主要在利用键/值对进行快速查询。</li><li>ArrayList和LinkedList的区别在于随机查询性能上ArrayList要好，但LinkedList的中间元素的插入与删除性能好 。</li><li>HashSet和TreeSet的区别在于集合内元素是否排序 。</li></ul></li><li><p>使用集合类时常见的异常</p></li></ul><table><thead><tr><th>异常类型</th><th>说明</th></tr></thead><tbody><tr><td>ClassCastException</td><td>从集合中取得元素对象在进行类型转换的时候类型不匹配</td></tr><tr><td>UnsupportedOperationException</td><td>当底层实现没有实现上层的相关方法的时候由Collection抛出该异常。Collection接口(或其他集合超类)中的一些函数在java doc中是标明”可有可无(Optional)”的函数，这些函数在底层的一些具体实现中，有的实现了，有的没有实现，当我们调用底层实现集合类的这些没有实现的方法时就会抛出该异常。</td></tr><tr><td>ConcurrentModificationException</td><td>ConcurrentModificationException 当采用Iterator遍历集合时，如果此时集合中的元素被改变则Iterator遍历抛出此异常</td></tr><tr><td>IndexOutOfBoundsException</td><td>集合中元素引用的索引值超出界限(&lt;0或&gt;size())</td></tr><tr><td>NoSuchElementException</td><td>LinkedList中getLast，getFirst等方法取元素的时候List为空</td></tr></tbody></table><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package Map集合;

import java.util.HashMap;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

public class TestHashMap {

	public static void main(String[] args) {

		/**
		 * Map 集合的特点： 
		 * 1. key不能重复，null类型也不能重复
		 * （因为这个key在 内存里面是乱放的，
		 * 如何键相同则认为是同一个对象，
		 * 所以地址是同一个地址）
		 * 2. key可以是 null
		 * 3. value列的值有多个null是可以的
		 * 
		 */
		Map&lt;Integer,String&gt; m;
		Hashtable&lt;Integer, String&gt; h;
		m = new HashMap&lt;&gt;();
		
		m.put(1,&quot;yezong&quot;);
		m.put(2,&quot;zhaozong&quot;);
		m.put(3,&quot;chenzong&quot;);
		
		m.put(null,null);
		m.put(null,null);
		m.put(4,&quot;yezong&quot;);
		m.put(3,&quot;tanzong&quot;);
		
		//迭代访问方式一：
		for(Integer i: m.keySet()) {
			System.out.println(i);
		}
		System.out.println(&quot;--------------------------&quot;);
		m.remove(4);//删除key为4的元素
		
		//迭代访问方式二：把双列集合变成单列集合然后迭代
		Set&lt;Entry&lt;Integer,String&gt;&gt; s = m.entrySet();
		Iterator&lt;Entry&lt;Integer,String&gt;&gt; it = s.iterator();
		while(it.hasNext()) {
			Entry&lt;Integer, String&gt; e = it.next();
			System.out.println(&quot;e.getKey(): &quot; + e.getKey() + &quot;     e.getValue():&quot; + e.getValue());
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Map集合的访问原理</strong></p><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>####　泛型的使用</p><ul><li><p>集合在使用上的问题</p><ul><li>集合中的add( )方法接受的是一个Object对象的参数 ，在获取集合中的对象时，必须进行造型（强制类型转换）操作。</li><li>造型操作可能出现问题，一般在程序运行时才能发生，发现问题比较困难。</li></ul></li><li><p>集合中泛型的使用</p><ul><li>在对象放入集合前，为其作个限制</li><li>在获取集合中的对象时，不用进行造型的操作</li><li>当有不同类型的对象添加到集合中的时候，编译时就能检查出错误</li></ul></li><li><p>集合中泛型的使用</p><ul><li>泛型经常被称为参数化类型，它能够像方法一样接受不同类型的参数。</li></ul></li><li><p>定义方式</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ArrayList&lt;E&gt;  变量名 ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>E是变量类型</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ArrayList&lt;String&gt;   arr;
arr = new ArrayList&lt;String&gt;();
HashMap&lt;Integer,String&gt;  hm = new  HashMap&lt;Integer,String&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="泛型的使用" tabindex="-1"><a class="header-anchor" href="#泛型的使用" aria-hidden="true">#</a> 泛型的使用</h4><ul><li>“&lt;&gt;”类型推断运算符 <ul><li>JDK 1.7引入一个新的操作符&lt;&gt;，也被称作钻石操作符，它使得构造方法也可以进行类型推导 。在这之前，你得在对象创建表达式的左右两边同时指定类型，现在你只需要在左边指定就可以了。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JDK 7之前：
Map&lt;String, List&lt;String&gt;&gt; employeeRecords =  new HashMap&lt;String, List&lt;String&gt;&gt;();  
List&lt;Integer&gt; primes = new ArrayList&lt;Integer&gt;(); 

JDK 7 ：
Map&lt;String, List&lt;String&gt;&gt; employeeRecords =  new HashMap&lt;&gt;();  
List&lt;Integer&gt; primes = new ArrayList&lt;&gt;(); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package Map集合;

public class Test&lt;E&gt; {//如果此类被实例化 E 被赋值为String 那么所有的E都是String

	private Object[] objs = new Object[2000];
	
	private E element;
	
	public E getElement() {
		return element;
	}
	
	public void put(E e) {
		objs[0] = e;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识：</h4>`,23),h={href:"https://docs.oracle.com/javase/7/docs/api/java/util/Map.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.liaoxuefeng.com/article/1256136507802816",target:"_blank",rel:"noopener noreferrer"},_={href:"http://xn--Java-Map-8d1nl354c.md",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"},x=t("hr",null,null,-1),f=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),H=t("hr",null,null,-1),S=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function k(j,E){const i=u("ExternalLinkIcon");return a(),s("div",null,[d(" more "),t("h1",p,[m,e(),t("a",b,[e("134-Java-Map集合.md"),n(i)])]),g,t("p",null,[t("a",h,[e("Map-API"),n(i)])]),t("p",null,[t("a",M,[e("Java Map的正确使用方式"),n(i)])]),t("p",null,[t("strong",null,[e("以上就是我关于 "),t("em",null,[t("a",_,[e("Java-Map集合.md"),n(i)])]),e(" 知识点的整理与总结的全部内容，"),t("a",y,[e("另附源码"),n(i)])])]),x,f,H,S])}const I=l(o,[["render",k],["__file","java134.html.vue"]]);export{I as default};
