import{_ as s,X as l,Y as d,a1 as a,Z as t,$ as e,a2 as i,a0 as r,F as o}from"./framework-68dd73a2.js";const u="/blog/assets/Java_82_1.png",v={},c={id:"_82-java-byte-short类型讲解-md",tabindex:"-1"},b=t("a",{class:"header-anchor",href:"#_82-java-byte-short类型讲解-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--short-df3il02trowabud.md",target:"_blank",rel:"noopener noreferrer"},h=r('<ul><li><p>在Java中，数据类型分为两大类：</p><ul><li><p>基本数据类型：4类8种基本数据类型</p></li><li><p>引用数据类型</p></li></ul></li></ul><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Byte age3;
System.out.println(Byte.MAX_VALUE);//127
System.out.println(Byte.MIN_VALUE);//-128

Short age4;
System.out.println(Short.MIN_VALUE);//-32768
System.out.println(Short.MAX_VALUE);//32768
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>整数类型 — byte、short、int默认、long</p><ul><li><p>Java中整型的三种表示形式</p><ul><li><p>十进制整数：0 ~ 9，注：第一位不能是0</p></li><li><p>十六进制数：0 ~ 9 A ~ F, 注：必须以0x或0X开头 例如： 0X8A 0x12</p></li><li><p>八进制整数：0 ~ 7，注：必须以0开头 例如： 0123 012</p></li><li><p>八进制整数：0 ~ 7，注：必须以0开头</p></li></ul></li></ul></li><li><p>Java各整数类型有固定的表数范围和字段长度，其不受操作系统的影响，以保证Java程序的可移植性。</p></li><li><p>Java语言的整形常量默认为int型，声明long型后面需加上l或者L，否则会出错</p></li></ul><table><thead><tr><th>类型</th><th>占用存储空间</th><th>表数大小</th></tr></thead><tbody><tr><td>byte</td><td>1字节</td><td>-128-127</td></tr><tr><td>short</td><td>2字节</td><td>-2<sup>15</sup>~2<sup>15</sup>-1</td></tr><tr><td>int</td><td>4字节</td><td>-2<sup>31</sup>~2<sup>31</sup>-1</td></tr><tr><td>long</td><td>8字节</td><td>-2<sup>63</sup>~2<sup>63</sup>-1</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test数据类型 {

	public static void main(String[] args) {

		/**
		 * 数据类型：
		 * 基本数据类型：4类8种基本数据类型
		 * 
		  * 基本数据类型：数值类型(byte short int long) 字符类型(char)  布尔类型(boolean)
		 * //它们在内存中的房间有多大？
		 * byte:1个字节8位  0000 0000
		 * short:2个字节16位 0000 0000 0000 0000
		 * int:4个字节32位 0000 0000 0000 0000 0000 0000 0000 0000
		 * long:8个字节64位 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000
		 * char:2个字节16位 0000 0000 0000 0000
		 */
		
		byte b1 = 20;//十进制
		byte b2 = 0b10;//二进制
		byte b3 = 017;//八进制 0开头 ，0~7
		byte b4 = 0x1f;//十六进制数：0 ~ 9  A ~ F, 注：必须以0x或0X开头
		
		System.out.println(&quot;byte min value: &quot; + Byte.MIN_VALUE);
		System.out.println(&quot;byte max value: &quot; + Byte.MAX_VALUE);
		
		short s1 = 1234;
		short s2 = 0b1000;//二进制
		short s3 = 01234;//八进制
		short s4 = 0x3f;//十六进制
		System.out.println(&quot;short min value: &quot; + Short.MIN_VALUE);
		System.out.println(&quot;short max value: &quot; + Short.MAX_VALUE);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="拓展知识点" tabindex="-1"><a class="header-anchor" href="#拓展知识点" aria-hidden="true">#</a> 拓展知识点</h4>`,7),p={href:"https://www.zybuluo.com/codeep/note/163962",target:"_blank",rel:"noopener noreferrer"},_=t("em",null,"Java-byte&short类型讲解",-1),g={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"},y=t("hr",null,null,-1),x=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),f=t("hr",null,null,-1),A=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function S(V,E){const n=o("ExternalLinkIcon");return l(),d("div",null,[a(" more "),t("h1",c,[b,e(" 82-Java-byte&"),t("a",m,[e("short类型讲解.md"),i(n)])]),h,t("p",null,[t("a",p,[e("Cmd Markdown 公式指导手册"),i(n)])]),t("p",null,[t("strong",null,[e("以上就是我关于 "),_,e(" 知识点的整理与总结的全部内容，"),t("a",g,[e("另附源码"),i(n)])])]),y,x,f,A])}const k=s(v,[["render",S],["__file","java82.html.vue"]]);export{k as default};
