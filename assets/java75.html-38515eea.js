import{_ as n,X as i,Y as h,a1 as o,Z as a,$ as t,a2 as r,a0 as d,F as l}from"./framework-68dd73a2.js";const s={},c={id:"_75-java语言的特点-md",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#_75-java语言的特点-md","aria-hidden":"true"},"#",-1),v={href:"http://xn--75-Java-3v1q59jy5mw47c92e.md",target:"_blank",rel:"noopener noreferrer"},J=d('<h4 id="java简介" tabindex="-1"><a class="header-anchor" href="#java简介" aria-hidden="true">#</a> Java简介</h4><h5 id="java的发展历史" tabindex="-1"><a class="header-anchor" href="#java的发展历史" aria-hidden="true">#</a> Java的发展历史</h5><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>开始研究</td><td>1990</td></tr><tr><td>Oak</td><td>1991.6</td></tr><tr><td>HotJava</td><td>1995.5</td></tr><tr><td>Java1.0</td><td>1995.5.23</td></tr><tr><td>Java1.1</td><td>1997.2.18</td></tr><tr><td>Java1.2</td><td>1998.12.4</td></tr><tr><td>Java1.3</td><td>2000.5.8</td></tr><tr><td>Java1.4</td><td>2002.2.13</td></tr><tr><td>Java5.0</td><td>2004.9</td></tr><tr><td>Java6.0</td><td>2006.4</td></tr><tr><td>Oracle 收购sun</td><td>2009.4.20</td></tr><tr><td>Java7</td><td>2011.7.28</td></tr><tr><td>Java8</td><td>2014.3.19</td></tr></tbody></table><h4 id="java创始人" tabindex="-1"><a class="header-anchor" href="#java创始人" aria-hidden="true">#</a> Java创始人</h4>',4),_={href:"https://baike.baidu.com/item/Java%E4%B9%8B%E7%88%B6/7522276",target:"_blank",rel:"noopener noreferrer"},u=d('<figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_75_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="java语言的特点" tabindex="-1"><a class="header-anchor" href="#java语言的特点" aria-hidden="true">#</a> Java语言的特点</h4><ul><li><p><strong>跨平台</strong></p></li><li><p><strong>半编译半解释</strong></p></li><li><p><strong>简单</strong></p></li><li><p><strong>面向对象</strong></p></li><li><p><strong>分布式</strong></p></li><li><p><strong>健壮</strong></p></li><li><p><strong>安全</strong></p></li><li><p><strong>多线程</strong></p></li></ul><h5 id="跨平台" tabindex="-1"><a class="header-anchor" href="#跨平台" aria-hidden="true">#</a> 跨平台</h5><p>作为一种网络语言，Java编译器将Java源程序编译成一种与体系结构无关的中间文件格式。只要有Java运行系统的机器都能执行这种中间代码。从而使同一版本的应用程序可以运行在不同的平台上。</p><ul><li><p>何谓平台：即一套特定的硬件再加上运行其上的操作系统，即硬件＋软件。编程语言对不同平台的支持有所不同。（VB、C/C++ 、Java）</p></li><li><p>Java完全不用修改任何源代码，也不用重新编译就可以直接移植到其他平台。</p></li><li><p>Java的平台无关性给程序的部署带来了很大的灵活性，节约开发和升级成本。</p></li><li><p>怎样理解平台无关性呢？JVM (java Virtual Machine)起到了主要作用。JVM是运行在平台之上的程序，它能够虚拟出一台目标机，所有字节码就是在虚拟出的目标机上运行。</p></li><li><p>程序不可能在所有的平台上都可以运行：（1）因为不同平台的内存管理模式和CPU的指令集等都有很大的差别。（2）为了让java实现平台无关性，Sun公司在不同平台上用软件模拟出虚拟目标机，虚拟出CPU指令集和内存。（3）因此虽然平台间的差异比较大，但是虚拟出来的JVM是完全一样的。（4）Java的字节码仅仅运行在JVM上，不会和平台的底层直接打交道。（5）JVM根据平台的不同，把字节码解释成不同的本地代码（6）JVM就像翻译，把通用的普通话翻译成不同地方特色的方言。</p></li><li><p>但是有一个缺点：java代码必须要经过JVM解释才能运行，使得java运行的效率降低。</p></li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_75_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="半编译半解释" tabindex="-1"><a class="header-anchor" href="#半编译半解释" aria-hidden="true">#</a> 半编译半解释</h5><p>源程序先编译成字节码，Java解释器(运行系统)能直接对Java字节码进行解释执行。链接程序通常比编译程序所需资源少。</p><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_75_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="简单" tabindex="-1"><a class="header-anchor" href="#简单" aria-hidden="true">#</a> 简单</h5><p>Java是个精简的系统，无需强大的硬件环境便可以很好地运行。Java的风格和语法类似于C++，因此，C++程序员可以很快就掌握Java编程技术。Java摒弃了C++中容易引发程序错误的地方，如多重继承、运算符重载、指针和内存管理等，Java语言具有支持多线程、自动垃圾收集和采用引用等特性。Java提供了丰富的类库，方便用户迅速掌握Java。</p><h5 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h5><p>面向对象可以说是Java最基本的特性。Java语言的设计完全是面向对象的，它不支持类似C语言那样的面向过程的程序设计技术。所有的Java程序和applet均是对象，Java支持静态和动态风格的代码继承及重用。</p><h5 id="分布式" tabindex="-1"><a class="header-anchor" href="#分布式" aria-hidden="true">#</a> 分布式</h5><p>Java包括一个支持HTTP和FTP等基于TCP/IP协议的子库。因此，Java应用程序可凭借URL打开并访问网络上的对象，就像访问本地文件一样简单方便。Java的分布性为实现在分布环境尤其是Internet下实现动态内容提供了技术途径。</p><h5 id="健壮" tabindex="-1"><a class="header-anchor" href="#健壮" aria-hidden="true">#</a> 健壮</h5><ul><li><p>Java提供了自动垃圾收集机制来进行内存管理，并检测程序对内存的访问，确定合法并不会引起任何问题后，才允许访问。</p></li><li><p>Java还提供了异常处理机制用来检查编译及运行时可能出现的问题，帮助程序员消除错误，防止系统崩溃</p></li></ul><h5 id="安全" tabindex="-1"><a class="header-anchor" href="#安全" aria-hidden="true">#</a> 安全</h5><p>作为网络语言，安全是非常重要的。Java的安全性可从两个方面得到保证。一方面，在Java语言里，象指针和释放内存等C++功能被删除，避免了非法内存操作。另一方面，当Java用来创建浏览器时，语言功能和一类浏览器本身提供的功能结合起来，使它更安全。Java语言在你的机器上执行前，要经过很多次的测试。它经过代码校验，检查代码段的格式，检测指针操作，对象操作是否过分以及试图改变一个对象的类型。另外，Java拥有多个层次的互锁保护措施，能有效地防止病毒的入侵和破坏行为的发生。</p><h5 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程" aria-hidden="true">#</a> 多线程</h5><p>线程有时也称小进程，是一个大进程里分出来的小的独立运行的基本单位。Java提供的多线程功能使得在一个程序里可同时执行多个小任务，即同时进行不同的操作或处理不同的事件。多线程带来的更大的好处是具有更好的网上交互性能和实时控制性能，尤其是实现多媒体功能。</p><h4 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h4>',23),f={href:"https://wenku.baidu.com/view/b0086a11590216fc700abb68a98271fe910eafe4.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://wenku.baidu.com/view/db2a0feb227916888586d7e3.html",target:"_blank",rel:"noopener noreferrer"},b={href:"http://c.biancheng.net/view/1282.html",target:"_blank",rel:"noopener noreferrer"},m=a("h4",{id:"知识拓展",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#知识拓展","aria-hidden":"true"},"#"),t(" 知识拓展")],-1),x={href:"https://www.jianshu.com/p/5a67d789216e",target:"_blank",rel:"noopener noreferrer"},j=a("p",null,[a("strong",null,[t("以上就是我关于 "),a("em",null,"Java语言的特点"),t(" 知识点的整理与总结的全部内容")])],-1),k=a("hr",null,null,-1),V=a("h3",{id:"分割线",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),t(" 分割线")],-1),C=a("hr",null,null,-1),w=a("p",null,[a("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function M(B,y){const e=l("ExternalLinkIcon");return i(),h("div",null,[o(" more "),a("h1",c,[p,t(),a("a",v,[t("75-Java语言的特点.md"),r(e)])]),J,a("p",null,[a("a",_,[t("Java之父——詹姆斯·高斯林-百度百科资料"),r(e)])]),u,a("p",null,[a("a",f,[t("百度文库-简述Java语言的特点"),r(e)])]),a("p",null,[a("a",g,[t("百度文库-Java语言的特点"),r(e)])]),a("p",null,[a("a",b,[t("Java简介：Java是什么？及Java语言的特点"),r(e)])]),m,a("p",null,[a("a",x,[t("大型Web网站架构演变"),r(e)])]),j,k,V,C,w])}const E=n(s,[["render",M],["__file","java75.html.vue"]]);export{E as default};
