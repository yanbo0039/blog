import{_ as l,X as a,Y as r,a1 as s,Z as i,$ as e,a2 as t,a0 as d,F as u}from"./framework-68dd73a2.js";const c="/blog/assets/Java_120_1.png",v="/blog/assets/Java_120_2.png",g={},o={id:"_120-java-字符串类string对象的创建原理-md",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_120-java-字符串类string对象的创建原理-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--120-Java-String-313xn00ctngp64b1wcpvw1h3if8l960avmhw05i.md",target:"_blank",rel:"noopener noreferrer"},S=d('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><p>字符串是我们在编程中最常使用的一种数据类型，它的表现形式可以分为两种：String和StringBuffer。</p></li><li><p>它不属于8种基本的数据类型，而是一种引用类型。</p></li><li><p>String对象代表一组不可改变的Unicode字符序列，对它的任何修改实际上又产生一个新的字符串，String类对象的内容一旦被初始化就不能再改变。</p></li><li><p>StringBuffer对象代表一组可改变的Unicode字符序列。</p></li><li><p>同时，String类是final类型的类。</p></li><li><p>String的创建：有两种方式:</p><ul><li>静态方式（常用）。像是给变量直接赋值一样来使用。如：String s1 = “abc”; String s2 = “abc”;</li><li>动态方式。动态的内存分配，使用new运算符。如：String s3= new String(“abc”); String s4= new String(“abc”);</li></ul></li></ul><p>那么这两种方式创建的字符串是同一个字符串对象嘛？不，是有区别的。 在于：使用静态方式创建的字符串，在方法区的常量池中只会产生唯一一个字符串对象，使用该方式产生同样一个字符串时，内存中不再开辟另外一块空间，而是两个引用变量指向同一个字符串对象。使用动态方式创建的字符串，在堆内存中会产生出不同的对象。</p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>String对象的创建 <ul><li>String类的构造方法 <ul><li>初始化一个新创建的 String 对象，它表示一个空字符序列。</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String 变量名 = new String () ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>初始化一个新创建的 String 对象，表示一个与该参数相同的字符序列</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String 变量名 = new String (String value) ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>分配一个新的字符串，它包含当前包含在字符串缓冲区参数中的字符序列。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String 变量名 = new String (StringBuffer buf) ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>字符串文字常量本身是一个String对象</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String 变量名 = “hello” ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>String类的构造方法 <ul><li>初始化一个新创建的 String 对象，通过使用指定的charset 解码指定的 byte 数组</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String 变量名 = new String(byte[] bytes, String charsetName);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>初始化一个新创建的 String 对象，通过使用指定的 charset解码指定的 byte 子数组，构造一个新的 String</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> String 变量名 = new String(byte[] bytes, int offset, int length, Charset charset);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>String类构造方法 <ul><li>String s = new String() 初始化一个新创建的String对象，表示一个空字符串（“ ”）；注意空字符串与null的区别：空字符串表示String对象的内容为空，而null表示String类的变量不指向任何的String 对象。</li><li>String( String original) 创建一个String对象，并用original为该对象初始化。</li><li>String( char chars[ ]) 使用一个字符数组创建一个String对象。</li><li>String( char chars[ ], int startIndex, int numChars) 使用一个字符数组创建一个String对象,startIndex表示数组的偏移量，numChars表示由多少个字符创建。参数偏移量可以省略。</li><li>String( byte asciiChars[ ]) 使用一个字节数组创建一个String对象。</li><li>String( byte asciiChars[ ], int startIndex, int numChars)同上。</li><li>String(StringBuffer buffer) 使用StringBufffer对象中的内容为该对象初始化。</li></ul></li><li>String对象的创建 <ul><li>连接操作符“+”，可以将其它各种类型的数据转换成字符串，并前后连接成新的字符串</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String str1 = “hello ”;
String str2 = “world”;
String str = str1 + str2; //str为“hello world”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>练习：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>System.out.println(5+6+&#39;A&#39;);
System.out.println(5+6+&quot;A&quot;);
System.out.println(5+&quot;A&quot;+6);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>String类的创建 <ul><li>任何一个String对象在创建之后都不能对它的内容作出任何改变（immutable）</li><li>连接、获得子串和改变大小写等操作，如果返回值同原字符串不同，实际上是产生了一个新的String对象</li><li>在程序的任何地方，相同的字符串字面常量都是同一个对象</li><li>String类重置了equals方法，用于比较两个字符串的内容</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String str1 = “hello ”;
String str2 =  new String(“hello”);
System.out.println(str1==str2);
System.out.println(str1.equals(str2));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>String对象的创建</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class TestStringCharset {
public static void main(String[] args) {
byte[] bname = new byte[10];
String name1 = &quot;张三&quot;;
try {
bname = name1.getBytes(&quot;utf-8&quot;);
String name2 = new String(bname,&quot;utf-8&quot;);
System.out.println(&quot;name2=&quot;+name2);
         for(int i = 0;i&lt;bname.length;i++){
                System.out.print(bname[i]);
	         }

	} catch (UnsupportedEncodingException e) {
		e.printStackTrace();
	}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 字符串类;

public class Test1 {

	public static void main(String[] args) {

		//Java语言是如何管理字符串对象的？
		
		String s1 = new String();//空序列 在堆区里面开一个空间，新建一个字符串对象 
		//实例化了两个对象：
		//一个在常量池里丢了一个adfaj字符串，
		//然后在堆区里面放了一个对象
		String s2 = new String(&quot;adfaj&quot;);//2个对象
		
		String s3 = &quot;&quot;;//一个空序列
		
		String s4 = &quot;456&quot;;//常量池中 有了一个对象
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>',30),p={class:"hint-container info"},h=i("p",{class:"hint-container-title"},"相关信息",-1),x=i("em",null,"Java-字符串类String对象的创建原理",-1),f={href:"https://github.com/javaobjects/demo516",target:"_blank",rel:"noopener noreferrer"};function _(y,q){const n=u("ExternalLinkIcon");return a(),r("div",null,[s(" more "),i("h1",o,[m,e(),i("a",b,[e("120-Java-字符串类String对象的创建原理.md"),t(n)])]),S,i("div",p,[h,i("p",null,[i("strong",null,[e("以上就是我关于 "),x,e(" 知识点的整理与总结的全部内容，"),i("a",f,[e("另附源码"),t(n)])])])])])}const B=l(g,[["render",_],["__file","java120.html.vue"]]);export{B as default};
