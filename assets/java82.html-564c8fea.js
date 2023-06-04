import{_ as s,X as l,Y as a,a1 as d,Z as t,$ as e,a2 as i,a0 as r,F as o}from"./framework-68dd73a2.js";const u="/blog/assets/Java_82_1.png",c={},v={id:"_82-java-byte-short类型讲解-md",tabindex:"-1"},b=t("a",{class:"header-anchor",href:"#_82-java-byte-short类型讲解-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--short-df3il02trowabud.md",target:"_blank",rel:"noopener noreferrer"},h=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><p>在Java中，数据类型分为两大类：</p><ul><li><p>基本数据类型：4类8种基本数据类型</p></li><li><p>引用数据类型</p></li></ul></li></ul><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Byte age3;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拓展知识点" tabindex="-1"><a class="header-anchor" href="#拓展知识点" aria-hidden="true">#</a> 拓展知识点</h3>`,8),p={href:"https://www.zybuluo.com/codeep/note/163962",target:"_blank",rel:"noopener noreferrer"},_=t("hr",null,null,-1),g=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),y=t("hr",null,null,-1),x={class:"hint-container info"},f=t("p",{class:"hint-container-title"},"相关信息",-1),A=t("em",null,"Java-byte&short类型讲解",-1),S={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"};function V(E,L){const n=o("ExternalLinkIcon");return l(),a("div",null,[d(" more "),t("h1",v,[b,e(" 82-Java-byte&"),t("a",m,[e("short类型讲解.md"),i(n)])]),h,t("p",null,[t("a",p,[e("Cmd Markdown 公式指导手册"),i(n)])]),_,g,y,t("div",x,[f,t("p",null,[t("strong",null,[e("以上就是我关于 "),A,e(" 知识点的整理与总结的全部内容，"),t("a",S,[e("另附源码"),i(n)])])])])])}const M=s(c,[["render",V],["__file","java82.html.vue"]]);export{M as default};
