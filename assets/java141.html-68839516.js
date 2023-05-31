import{_ as n,X as r,Y as a,a1 as l,Z as e,$ as t,a2 as d,a0 as s,F as u}from"./framework-68dd73a2.js";const c="/blog/assets/Java_141_1.png",v={},m={id:"_141-java-处理流介绍-装饰模式分析-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_141-java-处理流介绍-装饰模式分析-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--kbrq13awsg9ucts2dr5u.md",target:"_blank",rel:"noopener noreferrer"},p=s('<ul><li>处理流 <ul><li>只用字节或是字符为单位来对数据做输入输出是不够的，有时候我们需要一行一行的读数据，有时我们需要读取特定格式的数据，因此Java提供了这样的机制，能把数据流作连接(chain)，让原本没有特殊访问方法的流，通过连接到特殊的流后，变成可以用特定的方法来访问数据</li></ul></li></ul><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>“连接”在已存在的流（节点流或处理流）之上，通过对数据的处理为程序提供更为强大的读写功能</p></li><li><p>处理流类的构造函数中，都必须接收另外一个流对象作为参数</p></li><li><p>处理流类</p></li></ul><table><thead><tr><th>种类\\继承体系</th><th>字节</th><th>字符</th></tr></thead><tbody><tr><td>缓冲(Buffered)</td><td>BufferedInputStream, BufferedOutputStream</td><td>BufferedReader, BufferedWriter</td></tr><tr><td>字符和字节转换</td><td></td><td>InputStreamReader,OutputStreamWriter</td></tr><tr><td>对象序列化</td><td>ObjectInputStream,ObjectOutputStream</td><td></td></tr><tr><td>特定数据类型访问</td><td>DataInputStream, DataOutputStream</td><td></td></tr><tr><td>计数</td><td>LineNumberInputStream</td><td></td></tr><tr><td>重复</td><td>PushbackInputStream</td><td></td></tr><tr><td>打印</td><td>PrintStream</td><td>PrintWriter</td></tr></tbody></table><ul><li>常见处理流类 — 缓冲流（Buffered） <ul><li>缓冲流对读写的数据提供了缓冲的功能，提高了读写的效率，同时增加了一些新的方法</li><li>Java提供了四种缓冲流，其构造方法</li></ul></li></ul><table><thead><tr><th>构造方法</th><th>含义</th></tr></thead><tbody><tr><td>BufferedInputStream(InputStream in)</td><td>创建了一个带有32字节缓冲区的缓冲输入流</td></tr><tr><td>BufferedInputStream(InputStream in, int size)</td><td>创建了一个带有size大小缓冲区的缓冲输入流</td></tr><tr><td>BufferedOutputStream(OutputStream out)</td><td>创建了一个带有32字节缓冲区的缓冲输出流</td></tr><tr><td>BufferedOutputStream(OutputStream out，int size)</td><td>创建了一个带有size大小缓冲区的缓冲输出流</td></tr></tbody></table><ul><li>Java提供了四种缓冲流，其构造方法</li></ul><table><thead><tr><th>构造方法</th><th>含义</th></tr></thead><tbody><tr><td>BufferedReader(Reader in)</td><td>创建一个使用默认大小输入缓冲区的缓冲字符输入流</td></tr><tr><td>BufferedReader(Reader in,int size)</td><td>创建一个使用size大小输入缓冲区的缓冲字符输入流</td></tr><tr><td>BufferedWriter(Writer out)</td><td>创建一个使用默认大小输入缓冲区的缓冲字符输出流</td></tr><tr><td>BufferedWriter(Writer out,int size)</td><td>创建一个使用size大小输入缓冲区的缓冲字符输出流</td></tr></tbody></table><ul><li><p>常见处理流类 — 缓冲流（Buffered）</p><ul><li>缓冲流中的方法 <ul><li>BufferedInputStream支持其父类的mark和reset方法</li><li>BufferedWriter提供了readLine方法用于读取一行字符串(以\\r或\\n分隔)</li><li>BufferedWriter提供了newLine方法用于写入一个行分隔符</li><li>对于BufferedOutputStream和BufferdWriter，写出的数据会先在内存中缓存，使用flush()方法将使内存中的数据立刻写出</li></ul></li></ul></li><li><p>自动资源管理</p><ul><li>在JDK 7之前，我们需要使用一个finally块，来确保资源确实被释放掉，不管try块是完成了还是中断了。比如说读取文件或者输入流的时候，我们需要在finally块中关闭它们；而在Java 7里面，你可以使用try-with-resource的特性来自动关闭资源，只要是实现了AutoClosable和Closeable接口的都可以，几乎所有的资源类型都实现了Closeable接口，并重写了close()方法。JDK 7引入了try-with-resource语句，来确保每个资源在语句结束后都会调用AutoClosable接口的close()方法进行关闭。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try(BufferedReader reader = new BufferedReader(new FileReader(&quot;路径&quot;));)  {  
    //...  
}  catch(Exception e)  {  
    e.printStackTrace();  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例代码如下：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 装饰模式;

public interface MyInputStream {

	public int read();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 装饰模式;

public class MyFileInputStream implements MyInputStream {

	public MyFileInputStream() {
		
	}
	
	@Override
	public int read() {
		System.out.println(&quot;MyFileInputStream read()&quot;);
		return 0;
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 装饰模式;

public class MyBufferedInputStream implements MyInputStream {

	private MyInputStream in;
	
	public MyBufferedInputStream(MyInputStream in) {
		this.in = in;
	}
	@Override
	public int read() {
		in.read();
		System.out.println(&quot;MyBufferedInputStream 开辟缓冲区read()&quot;);
		return 0;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 装饰模式;

public class Test {

	public static void main(String[] args) {
		new MyBufferedInputStream(new MyFileInputStream()).read();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试结果如下：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MyFileInputStream read()
MyBufferedInputStream 开辟缓冲区read()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,17),f=e("em",null,"Java-处理流介绍&装饰模式分析",-1),h={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"},g=e("hr",null,null,-1),_=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),t(" 分割线")],-1),S=e("hr",null,null,-1),x=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function y(B,I){const i=u("ExternalLinkIcon");return r(),a("div",null,[l(" more "),e("h1",m,[o,t(" 141-Java-处理流介绍&"),e("a",b,[t("装饰模式分析.md"),d(i)])]),p,e("p",null,[e("strong",null,[t("以上就是我关于 "),f,t(" 知识点的整理与总结的全部内容,"),e("a",h,[t("另附源码"),d(i)])])]),g,_,S,x])}const k=n(v,[["render",y],["__file","java141.html.vue"]]);export{k as default};
