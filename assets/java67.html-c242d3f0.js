import{_ as a,X as s,Y as l,a1 as r,Z as e,$ as i,a2 as n,a0 as o,F as d}from"./framework-68dd73a2.js";const c="/blog/assets/Java_67_1.png",g="/blog/assets/Java_67_2.png",v="/blog/assets/Java_67_3.png",p="/blog/assets/Java_67_4.png",m="/blog/assets/Java_67_5.png",u="/blog/assets/Java_67_6.png",_="/blog/assets/Java_67_7.png",h="/blog/assets/Java_67_8.png",b={},f={id:"_67-java-如何设置maven本地仓库不使用c盘默认仓库-md",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#_67-java-如何设置maven本地仓库不使用c盘默认仓库-md","aria-hidden":"true"},"#",-1),q={href:"http://xn--67-Java-MavenC-2d7v69gca54u9wai70jhgkr61aea0393ckc8d7fjhn2dhq3ddva1896b.md",target:"_blank",rel:"noopener noreferrer"},w=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"注意"),e("p",null,"本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。")],-1),y={href:"https://www.jianshu.com/p/4d20aa036db4",target:"_blank",rel:"noopener noreferrer"},M=e("li",null,[e("p",null,"Eclipse 依次点击 window ---> Preferences ---> Maven ---> User Settings 可以看到Eclipse集成的Maven本地仓库目录是在C盘，那么我们接下来就需要更改这个路径。")],-1),S=o('<figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>Eclipse依次点击 window ---&gt; Preferences ---&gt; Maven ---&gt; Installations, 右侧点击 Add</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>设置Maven的安装目录，然后Finish</li></ol><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>选中刚刚添加的Maven，并Apply</li></ol><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>打开 Window ---&gt; Preferences ---&gt; Maven ---&gt; User Settings 配置如下</li></ol><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>点击Open file 配置 settings.xml</li></ol><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;settings xmlns=&quot;http://maven.apache.org/SETTINGS/1.0.0&quot;
          xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
          xsi:schemaLocation=&quot;http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd&quot;&gt;
  &lt;localRepository&gt;D:\\Program Files\\soft\\apache-maven-3.6.1&lt;/localRepository&gt;
  &lt;pluginGroups&gt;
  &lt;/pluginGroups&gt;
  &lt;proxies&gt;
  &lt;/proxies&gt;
  &lt;servers&gt;
  &lt;/servers&gt;
  &lt;mirrors&gt;
  &lt;/mirrors&gt;
  &lt;profiles&gt;
  &lt;/profiles&gt;
&lt;/settings&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>配置完 settings.xml 保存后 打开确认路径是否有更改，如图所示Rejndex路径已自动更改咯</li></ol><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_2019-06-27补充" tabindex="-1"><a class="header-anchor" href="#_2019-06-27补充" aria-hidden="true">#</a> 2019/06/27补充</h4><ol start="8"><li>D:\\Program Files\\soft\\apache-maven-3.6.1目录下最后再新建一个repository文件夹</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;settings xmlns=&quot;http://maven.apache.org/SETTINGS/1.0.0&quot;
          xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
          xsi:schemaLocation=&quot;http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd&quot;&gt;
  &lt;localRepository&gt;D:\\Program Files\\soft\\apache-maven-3.6.1\\respository&lt;/localRepository&gt;
  &lt;pluginGroups&gt;
  &lt;/pluginGroups&gt;
  &lt;proxies&gt;
  &lt;/proxies&gt;
  &lt;servers&gt;
  &lt;/servers&gt;
  &lt;mirrors&gt;
  &lt;/mirrors&gt;
  &lt;profiles&gt;
  &lt;/profiles&gt;
&lt;/settings&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="8"><li>将之前C:\\Users\\yanbo.m2\\repository的Maven所下载的文件全部剪切到现在新的配置D:\\Program Files\\soft\\apache-maven-3.6.1\\respository仓库里，然后重启Eclipse</li></ol><p>至此就完成咯对Eclipse里的默认Maven本地仓库的更改</p><p><strong>以上就是我关于 Java-如何设置Maven本地仓库不使用C盘默认仓库 知识点的整理与总结的全部内容</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',25);function E(J,T){const t=d("ExternalLinkIcon");return s(),l("div",null,[r(" more "),e("h1",f,[x,i(),e("a",q,[i("67-Java-如何设置Maven本地仓库不使用C盘默认仓库.md"),n(t)])]),w,e("ol",null,[e("li",null,[e("p",null,[i("首先确定经搭建好Maven环境，若不会搭建请参考博客 "),e("a",y,[i("Java-Window10-Maven环境搭建"),n(t)])])]),M]),S])}const j=a(b,[["render",E],["__file","java67.html.vue"]]);export{j as default};
