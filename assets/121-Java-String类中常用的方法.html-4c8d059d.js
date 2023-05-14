import{_ as d,X as s,Y as r,a1 as l,Z as t,$ as n,a2 as i,a0 as a,F as o}from"./framework-68dd73a2.js";const u="/blog/assets/Java_121_1.png",c={},v={id:"_121-java-string类中常用的方法-md",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_121-java-string类中常用的方法-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--121-Java-String-zz3x380r7h2a9h2ax18a27fzx0b.md",target:"_blank",rel:"noopener noreferrer"},g=a('<ul><li>String类的转换</li></ul><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>String类中常用的方法</li></ul><table><thead><tr><th>方法</th><th>含义</th></tr></thead><tbody><tr><td>boolean equals(String)</td><td>判断两个字符串对象的内容是否相等</td></tr><tr><td>boolean equalsIgnoreCase(String)</td><td>比较两个字符串的内容是否相等，忽略大小写</td></tr><tr><td>String toUpperCase( )</td><td>将String对象中的所有字符都转换为大写</td></tr><tr><td>String toLowerCase( )</td><td>将String对象中的所有字符都转换为小写</td></tr><tr><td>char charAt(int)</td><td>返回指定索引处的 char 值</td></tr><tr><td>String substring(int begin)</td><td>返回一个新字符串，该字符串是从begin开始的字符串的内容</td></tr><tr><td>String substring(int begin,int end)</td><td>返回一个新字符串，该字符串是从begin开始到end-1结束的字符串的内容</td></tr><tr><td>int indexOf/lastIndexOf(char)</td><td>返回指定字符在此字符串中第一次/最后一次出现处的索引。</td></tr><tr><td>int indexOf/lastIndexOf(char,int)</td><td>从指定的索引开始搜索，返回在此字符串中第一次/最后一次出现指定字符处的索引</td></tr><tr><td>int indexOf/lastIndexOf(String)</td><td>返回第一次出现的指定子字符串在此字符串中的索引</td></tr><tr><td>int indexOf/lastIndexOf(String,int)</td><td>从指定的索引开始搜索，返回在此字符串中第一次/最后一次出现指定字符串处的索引</td></tr><tr><td>String trim( )</td><td>返回新的字符串，忽略前导空白和尾部空白</td></tr><tr><td>int length( )</td><td>返回此字符串的长度</td></tr><tr><td>String concat(String str)</td><td>将指定字符串连接到此字符串的结尾</td></tr><tr><td>byte[] getBytes()</td><td>使用平台的默认字符集将此 String 编码为 byte 序列，并将结果存储到一个新的 byte 数组中</td></tr><tr><td>byte[] getBytes(Charset charset)</td><td>使用给定的 charset将此 String 编码到 byte 序列，并将结果存储到新的 byte 数组</td></tr><tr><td>String[] split(String regex)</td><td>根据给定正则表达式的匹配拆分此字符串。</td></tr><tr><td>String replace(char oldChar, char newChar)</td><td>返回一个新的字符串，它是通过用 newChar 替换此字符串中出现的所有 oldChar 得到的</td></tr><tr><td>boolean startsWith(String prefix)</td><td>测试此字符串是否以指定的前缀开始</td></tr><tr><td>boolean endsWith(String suffix)</td><td>测试此字符串是否以指定的后缀结束</td></tr></tbody></table><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 字符串类;

import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.util.Arrays;

public class TestAPI {

	public static void main(String[] args) {
		// charAt
		String s = new String(&quot;agddsfsdgdgdsgsdgsdj&quot;);
		
		System.out.println(s.charAt(2));//d 索引从0开始
		
		//concat()
		System.out.println(s.concat(&quot;123&quot;));//产生一个新的字符串：s不变agddsfsdgdgdsgsdgsdj123
		
		System.out.println(s);//agddsfsdgdgdsgsdgsdj
		
		//contains()
		System.out.println(s.contains(&quot;123&quot;));//false
		
		//需求：判断一个文件是否是图片文件，图片文件的后缀：jpg JPG png PNG gif GIF
		String fileName = &quot;hello.gifx&quot;;
		if(!fileName.endsWith(&quot;gif&quot;) || !fileName.endsWith(&quot;GIF&quot;)) {
			System.out.println(fileName + &quot;不是图片格式的文件&quot;);
		}
		//equalsIgnoreCase()忽略大小写比较，常用于验证码等。。。。
		System.out.println(&quot;abc&quot;.equalsIgnoreCase(&quot;ABC&quot;));//true
		
		//getBytes() String ------&gt; byte[]
		//byte[]: [97, 103, 100, 100, 115, 102, 115, 100, 103, 100, 103, 100, 115, 103, 115, 100, 103, 115, 100, 106]
		System.out.println(&quot;byte[]: &quot; + Arrays.toString(s.getBytes()));
		//使用指定的字符集给String进行编码得到对应的字节数组
//		byte[]: [97, 103, 100, 100, 115, 102, 115, 100, 103, 100, 103, 100, 115, 103, 115, 100, 103, 115, 100, 106]
		System.out.println(&quot;byte[]: &quot; + Arrays.toString(s.getBytes(Charset.defaultCharset())));
		
		
		//byte[] ----&gt; String
		byte[] b = s.getBytes();
		String k = null;
		try {
			k = new String(b,&quot;utf-8&quot;);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		System.out.println(&quot;k: &quot; + k);
		System.out.println(&quot;k.inexOf(&#39;a&#39;): &quot;+ k.indexOf(&#39;a&#39;));
		
		//需求：找出字符串k中d的出现次数
		int count = 0;//存放找的次数
		int index = 0;//从哪里找
		while((index = k.indexOf(&#39;d&#39;,index + 1)) != -1) {
			System.out.println(&quot;index:&quot; + index);
			index++;
			count++;//找到了，count + 1
		}
		System.out.println(&quot;count: &quot; + count);
		System.out.println(k.length());
		String email = &quot;abc@163.com.com&quot;;
		int firstIndex = email.indexOf(&#39;.&#39;);//从头开始数.最开始出现的下标
		int lastIndex = email.lastIndexOf(&#39;.&#39;);//从头开始数.最后出现的下标
		System.out.println(&quot;firstIndex: &quot; + firstIndex);
		System.out.println(&quot;lastIndex: &quot; + lastIndex);
		if(firstIndex != lastIndex) {
			System.out.println(&quot;邮箱格式不合法&quot;);
		}
		
		//replaceAll()
		String str = &quot;我不爱你们，我恨你们，我恨死你们了!&quot;;
		str.replaceAll(&quot;恨&quot;,&quot;喜欢&quot;);
		System.out.println(str.replaceAll(&quot;恨&quot;,&quot;喜欢&quot;));
		
		//split()
		String source = &quot;a6b6afj6wou6kjs&quot;;
		String[] result = source.split(&quot;6&quot;);
		System.out.println(Arrays.toString(result));
		
		//substring()
		String a=&quot;asjfda;dsfaj;&quot;;
		System.out.println(a.substring(3));//fda;dsfaj;
		
		System.out.println(&quot;   a  b  &quot;.trim());//只能去掉首尾的空格
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="知识拓展" tabindex="-1"><a class="header-anchor" href="#知识拓展" aria-hidden="true">#</a> 知识拓展：</h4>`,7),h={href:"https://www.cnblogs.com/xlhan/p/7144499.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.cnblogs.com/marveler/p/5793845.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.liangzl.com/get-article-detail-30888.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://blog.csdn.net/u010021959/article/details/79969579",target:"_blank",rel:"noopener noreferrer"},_={href:"https://baike.baidu.com/item/ASCII/309296?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},q=t("em",null,"Java-String类中常用的方法",-1),x={href:"https://github.com/javaobjects/demo516",target:"_blank",rel:"noopener noreferrer"},y=t("hr",null,null,-1),I=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),k=t("hr",null,null,-1),C=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function j(w,A){const e=o("ExternalLinkIcon");return s(),r("div",null,[l(" more "),t("h1",v,[m,n(),t("a",b,[n("121-Java-String类中常用的方法.md"),i(e)])]),g,t("p",null,[t("a",h,[n("JAVA正则表达式语法大全"),i(e)])]),t("p",null,[t("a",p,[n("Java正则表达式大全"),i(e)])]),t("p",null,[t("a",f,[n("史上最全常用正则表达式大全"),i(e)])]),t("p",null,[t("a",S,[n("JDK5、6、7、8新特性对比学习之简单描述"),i(e)])]),t("p",null,[t("a",_,[n("ASCII-百度百科"),i(e)])]),t("p",null,[t("strong",null,[n("以上就是我关于 "),q,n(" 知识点的整理与总结的全部内容，"),t("a",x,[n("另附源码"),i(e)])])]),y,I,k,C])}const B=d(c,[["render",j],["__file","121-Java-String类中常用的方法.html.vue"]]);export{B as default};
