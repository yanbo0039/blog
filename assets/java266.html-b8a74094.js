import{_ as s,X as t,Y as i,a1 as o,Z as a,$ as e,a2 as l,a0 as r,F as d}from"./framework-68dd73a2.js";const c={},u={id:"_266-java-java-lang-classnotfoundexception-com-sun-java-swing-plaf-nimbus-nimbuslookandfeel-md",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#_266-java-java-lang-classnotfoundexception-com-sun-java-swing-plaf-nimbus-nimbuslookandfeel-md","aria-hidden":"true"},"#",-1),v={href:"http://com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel.md",target:"_blank",rel:"noopener noreferrer"},m=r(`<h4 id="故事背景" tabindex="-1"><a class="header-anchor" href="#故事背景" aria-hidden="true">#</a> 故事背景</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_266_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>java.lang.ClassNotFoundException: com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel
	at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:641)
	at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:188)
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:520)
	at java.base/java.lang.Class.forName0(Native Method)
	at java.base/java.lang.Class.forName(Class.java:467)
	at java.desktop/javax.swing.SwingUtilities.loadSystemClass(SwingUtilities.java:2036)
	at java.desktop/javax.swing.UIManager.setLookAndFeel(UIManager.java:638)
	at com.tencent.chapter06.gui.MainFrame.&lt;clinit&gt;(MainFrame.java:45)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h4><p><strong>以上就是我关于 <em>java.lang.ClassNotFoundException: com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4>`,9),p={href:"https://www.jianshu.com/p/82402109f0c6",target:"_blank",rel:"noopener noreferrer"},_={href:"https://blog.csdn.net/qq_42035966/article/details/82258199#5.%E6%8F%92%E4%BB%B6%E4%BB%8B%E7%BB%8DWindowBuilderblog.csdn.net",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.cnblogs.com/gfd1511/p/10971694.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/ziyuluoyao/article/details/78284768",target:"_blank",rel:"noopener noreferrer"},f={href:"http://www.nndssk.com/upan/rjjc/15540.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://jingyan.baidu.com/article/25648fc19b5f86d091fd00af.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://jingyan.baidu.com/article/ab0b56304b8e6ec15bfa7d60.html",target:"_blank",rel:"noopener noreferrer"},w=a("hr",null,null,-1),x=a("p",null,"分割线",-1),C=a("hr",null,null,-1),E=a("p",null,[a("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function N(B,L){const n=d("ExternalLinkIcon");return t(),i("div",null,[o(" more "),a("h1",u,[h,e(" 266-Java-java.lang.ClassNotFoundException "),a("a",v,[e("com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel.md"),l(n)])]),m,a("ol",null,[a("li",null,[a("p",null,[a("a",p,[e("Eclipse可视化GUI插件"),l(n)])])]),a("li",null,[a("p",null,[a("a",_,[e("Java-GUI快速入门"),l(n)])])]),a("li",null,[a("p",null,[a("a",b,[e("Java界面风格"),l(n)])])]),a("li",null,[a("p",null,[a("a",g,[e("解决Eclipse再次打开工程时找不到Design的图形界面"),l(n)])])]),a("li",null,[a("p",null,[a("a",f,[e("Eclipse怎么配置JDK Eclipse配置JDK详细教程"),l(n)])])]),a("li",null,[a("p",null,[a("a",j,[e("Eclipse怎么配置jdk-Eclipse"),l(n)])])]),a("li",null,[a("p",null,[a("a",k,[e("怎么查看jdk的安装路径"),l(n)])])])]),w,x,C,E])}const J=s(c,[["render",N],["__file","java266.html.vue"]]);export{J as default};
