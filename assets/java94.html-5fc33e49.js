import{_ as t,X as s,Y as d,a1 as r,Z as e,$ as l,a2 as a,a0 as n,F as o}from"./framework-68dd73a2.js";const c="/blog/assets/Java_94_1.png",u={},v={id:"_94-java包的概念-md",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_94-java包的概念-md","aria-hidden":"true"},"#",-1),_={href:"http://xn--94-Java-171lr57gt7ttw6a.md",target:"_blank",rel:"noopener noreferrer"},m=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"注意"),e("p",null,"本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。")],-1),h=e("p",null,"Java中包是对类的一个分类管理的一种结果，包越来越多的时候就涉及到一个工程的概念。把这堆包放进一个工程，把另一堆包放进另一工程里面。如图所示，每一个jar文件都是一个工程。。里面包含很多包跟很多类",-1),g=e("figure",null,[e("img",{src:c,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),b={href:"https://blog.csdn.net/turodog/article/details/84670250",target:"_blank",rel:"noopener noreferrer"},x=n(`<p>Java 中 Date 有两个包 一个是java.util.Date包另一个是java.sql.Date包，对数据库操作则用后者，否则用前者包。</p><p>List也有两个包，一个是java.awt.List包另一个是java.util.List， 如果需要一个下拉列表则用前者，否则都用后者。</p><p>如下代码，则为导包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package qqq;

import java.util.List;

public class qqq {

	public static void main(String[] args) {
//		Date date;
		List list;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),j=n(`<li><p>包的概念及应用</p><ul><li>在Java中，包主要有以下用途 ： <ul><li>包允许将类组合成较小的单元</li><li>有助于避免命名冲突</li><li>包允许在更广的范围内保护类、数据和方法</li></ul></li></ul></li><li><p>包可以是类、接口和子包的集合</p></li><li><p>将类放入包中</p><pre><code>     package   包名 ;
</code></pre></li><li><p>注意：</p><ul><li>在java中位于包中的类，在文件系统中的存放位置，必须有与包名层次相对应的目录结构</li><li>package语句作为java源文件的第一条语句</li><li>每个源文件只能声明一个包</li><li>如果没有package语句，则默认为无名包</li></ul></li>`,4),f=e("p",null,"Java类库中常用的包",-1),k=n("<li>java.lang <ul><li>Java语言包，任何程序中，该包都被自动导入。</li></ul></li><li>java.awt <ul><li>图形用户界面包。</li></ul></li><li>java.awt.event <ul><li>图形用户界面事件处理包。</li></ul></li><li>java.swing <ul><li>跨平台轻量级组件包。</li></ul></li><li>java.sql <ul><li>数据库访问包。</li></ul></li>",5),J={href:"http://java.io",target:"_blank",rel:"noopener noreferrer"},q=e("ul",null,[e("li",null,"这个包由对您的输入/输出操作有用的类组成。")],-1),L=e("li",null,[l("java.util "),e("ul",null,[e("li",null,"该包提供了许多创建如：lists, calendar, date等所需要的类和接口。")])],-1),w={href:"http://java.net",target:"_blank",rel:"noopener noreferrer"},V=e("ul",null,[e("li",null,"该包提供了许多进行TCP/IP网络编程的类和接口。")],-1),A=e("li",null,[e("p",null,"import导入包中的类"),e("ul",null,[e("li",null,"包名.路径名")])],-1),C=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;
class Cat  extends p08.Animal{…}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用import关键字引入其它包中的类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;
import p08.Animal;
class Cat  extends Animal{…}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>位于同一包中的类可以直接访问</p></li><li><p>导入包中所有的类</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import   包名.*;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>导入子包中所有的类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import   包名.子包名.*;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>导入包中的某个类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import   包名.子包名.类名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,12),N={class:"hint-container info"},D=e("p",{class:"hint-container-title"},"相关信息",-1),B=e("em",null,"Java包的概念",-1),E={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"};function I(P,S){const i=o("ExternalLinkIcon");return s(),d("div",null,[r(" more "),e("h1",v,[p,l(),e("a",_,[l("94-Java包的概念.md"),a(i)])]),m,h,g,e("p",null,[e("a",b,[l("JAVA | 什么是微服务？"),a(i)])]),x,e("ul",null,[j,e("li",null,[f,e("ul",null,[k,e("li",null,[e("a",J,[l("java.io"),a(i)]),q]),L,e("li",null,[e("a",w,[l("java.net"),a(i)]),V])])]),A]),C,e("div",N,[D,e("p",null,[e("strong",null,[l("以上就是我关于 "),B,l(" 知识点的整理与总结的全部内容，"),e("a",E,[l("另附源码"),a(i)])])])])])}const y=t(u,[["render",I],["__file","java94.html.vue"]]);export{y as default};
