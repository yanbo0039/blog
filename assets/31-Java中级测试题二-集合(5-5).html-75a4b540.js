import{_ as i,X as n,Y as e,a1 as t,a0 as s}from"./framework-68dd73a2.js";const l={},d=s(`<h1 id="java中级测试题二-集合-5-5" tabindex="-1"><a class="header-anchor" href="#java中级测试题二-集合-5-5" aria-hidden="true">#</a> Java中级测试题二-集合(5-5)</h1><p>1、请使用LinkedList来模拟一个队列(先进先出的特性): 1.1 拥有放入对象的方法void put(Object o) 1.2 取出对象的方法Object get() 1.3 判断队列当中是否为空的方法boolean isEmpty()；并且，编写测试代码，验证你的队列是否正确。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.util.LinkedList;
public class Topic1 {
	/*
	 * 1、请使用LinkedList来模拟一个队列(先进先出的特性): 
	 *  1.1 拥有放入对象的方法void put(Object o) 
	 *  1.2  取出对象的方法Object get() 
	 *  1.3 判断队列当中是否为空的方法boolean isEmpty()；
	 *  并且，编写测试代码，验证你的队列是否正确。
	 */
	private LinkedList&lt;String&gt; linkedList = new LinkedList&lt;String&gt;();
	//放的方法
	public void putpush(String str) {
		linkedList.addLast(str);
	}
	//取的方法
	public String getAndRemove() {
		return linkedList.pollFirst();
	}
	//判断是否为空
	public boolean isEmpty() {
		return linkedList.size() == 0;
	}
	@Override
	public String toString() {
		return &quot;MyQueue [toString()=&quot; + linkedList.toString() + &quot;]&quot;;
	}
	//假定此为测试类
	public static void main(String[] args) {
		Topic1 myQueue = new Topic1();//创建一个队列
		myQueue.putpush(&quot;adf&quot;);
		myQueue.putpush(&quot;12&quot;);
		myQueue.putpush(&quot;45&quot;);
		myQueue.putpush(&quot;3424&quot;);
		myQueue.putpush(&quot;68768&quot;);
		myQueue.putpush(&quot;6564&quot;);
		System.out.println(myQueue.toString());
		while (!myQueue.isEmpty()) {
			System.out.println(myQueue.getAndRemove());
		}
		System.out.println(myQueue.isEmpty());
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、假设顺序列表ArrayList中存储的元素是整型数字1~5，遍历每个元素，将每个元素顺序输出。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package highchapter2;

import java.util.ArrayList;
import java.util.Iterator;

public class Topic2 {
//	 2、假设顺序列表ArrayList中存储的元素是整型数字1~5，
//	遍历每个元素，将每个元素顺序输出。 
	public static void main(String[] args) {
		ArrayList&lt;Integer&gt; list = new ArrayList&lt;Integer&gt;();
		list.add(1);
		list.add(2);
		list.add(3);
		list.add(4);
		list.add(5);
		//第一种：
		for (int i = 0; i &lt; list.size(); i++) {
			System.out.println(&quot;list for: &quot; + list.get(i));
		}
		//第二种：
		Iterator&lt;Integer&gt; it = list.iterator();
		while(it.hasNext()) {
			System.out.println(&quot;list iterator: &quot; + it.next());
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、在一个列表中存储以下元素：apple,grape,banana,pear 3.1 返回集合中的最大的和最小的元素 3.2 将集合进行排序，并将排序后的结果打印在控制台上</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package highchapter2;

import java.util.Collections;
import java.util.LinkedList;

public class Topic3 {
	
//	3、在一个列表中存储以下元素：apple,grape,banana,pear
//	3.1 返回集合中的最大的和最小的元素
//	3.2 将集合进行排序，并将排序后的结果打印在控制台上
	
	public static void main(String[] args) {

		LinkedList&lt;String&gt; list = new LinkedList&lt;String&gt;();
		list.add(&quot;apple&quot;);
		list.add(&quot;grape&quot;);
		list.add(&quot;banana&quot;);
		list.add(&quot;pear&quot;);
		
		System.out.println(&quot;最大元素为：&quot; + Collections.max(list));
		System.out.println(&quot;最小元素为：&quot; + Collections.min(list));
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、编写一个程序，创建一个 HashMap对象，用于存储银行储户的信息(其中储户的主要信息有储户的ID，姓名和余额)。另外，计算并显示其中某个储户的当前余额。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.util.HashMap;
import java.util.Map;
import java.util.Random;
public class Topic4 {
	/*
	4、编写一个程序，创建一个?HashMap对象，
	用于存储银行储户的信息(其中储户的主要信息有储户的ID，姓名和余额)。
	另外，计算并显示其中某个储户的当前余额。 [选做题]
	*/
	private Integer id;
	private String nameString;
	private double balance;
	
	public Topic4(Integer id,String namString,double balance) {
		this.id = id;
		this.nameString = namString;
		this.balance = balance;
	}
	@Override
	public String toString() {
		return &quot;Topic4 [id=&quot; + id + &quot;, nameString=&quot; + nameString + &quot;, 
        balance=&quot; + balance + &quot;]&quot;;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNameString() {
		return nameString;
	}
	public void setNameString(String nameString) {
		this.nameString = nameString;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}

	public static void main(String[] args) {
		Map&lt;Integer, Topic4&gt; map = new HashMap&lt;Integer, Topic4&gt;();
		for (int i = 1; i &lt; 11; i++) {
			map.put(i, new Topic4(i,&quot;name&quot; + i,new Double 
            (new Random().nextInt(10000))));
		}
		System.out.println(&quot;3号储户的余额：&quot; + map.get(3).getBalance());
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、从控制台输入若干个单词（输入回车结束）放入集合中，将这些单词排序后（忽略大小写）打印出来。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package highchapter2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class Topic5 {
	
//	5、从控制台输入若干个单词（输入回车结束）放入集合中
//	，将这些单词排序后（忽略大小写）打印出来。
	
	public static void main(String[] args) {

		System.out.println(&quot;请输入若干个单词，以空格分开，以回车结束&quot;);
		Scanner sc = new Scanner(System.in);
		String[] str = sc.nextLine().split(&quot; &quot;);
		//第一种：
		List&lt;String&gt; list = new ArrayList&lt;&gt;();
		for (int i = 0; i &lt; str.length; i++) {
			list.add(str[i]);
		}
		Collections.sort(list);
		System.out.println(&quot;ArrayList: &quot; + list.toString());
		//第二种：
		Set&lt;String&gt; s = new TreeSet&lt;String&gt;();
		for (int i = 0; i &lt; str.length; i++) {
			s.add(str[i]);
		}
		System.out.println(&quot;TreeSet: &quot; + s.toString());
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>=========***</p><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><p>***========= <strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,14);function a(v,r){return n(),e("div",null,[t(" more "),d])}const c=i(l,[["render",a],["__file","31-Java中级测试题二-集合(5-5).html.vue"]]);export{c as default};
