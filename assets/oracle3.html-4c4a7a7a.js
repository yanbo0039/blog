import{_ as n,X as o,Y as r,a1 as s,Z as a,$ as i,a2 as t,a0 as c,F as l}from"./framework-68dd73a2.js";const g="/blog/assets/Oracle_3_1.png",_="/blog/assets/Oracle_3_2.png",p="/blog/assets/Oracle_3_3.png",d="/blog/assets/Oracle_3_4.png",f="/blog/assets/Oracle_3_5.png",m="/blog/assets/Oracle_3_6.png",u="/blog/assets/Oracle_3_7.png",b="/blog/assets/Oracle_3_8.png",h="/blog/assets/Oracle_3_9.png",O="/blog/assets/Oracle_3_10.png",x="/blog/assets/Oracle_3_11.png",y="/blog/assets/Oracle_3_12.png",z="/blog/assets/Oracle_3_13.png",E="/blog/assets/Oracle_3_14.png",C="/blog/assets/Oracle_3_15.png",S="/blog/assets/Oracle_3_16.png",v="/blog/assets/Oracle_3_17.png",A="/blog/assets/Oracle_3_18.png",L="/blog/assets/Oracle_3_19.png",N="/blog/assets/Oracle_3_20.gif",H="/blog/assets/Oracle_3_20.png",Y="/blog/assets/Oracle_3_21.png",k={},w=c(`<h1 id="oracle-卸载" tabindex="-1"><a class="header-anchor" href="#oracle-卸载" aria-hidden="true">#</a> Oracle 卸载</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><pre><code>1、停止所有oracle服务 ctrl+alt+del
</code></pre><figure><img src="`+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>右键每个每个停止</p><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>2.打开我们的windows开始菜单栏，随后点击里里面的所有程序然后点击oracle文 
件夹里面的universal Installer
</code></pre><figure><img src="`+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>途中若弹出框-----&gt;选择允许此程序所有操作 <img src="'+O+`" alt="" loading="lazy"></p><pre><code>3. 注册表删除 cmd -- &gt; regedit 打开注册表依次展开 
 HKEY_LOCAL_MACHINE\\SOFTWARE，找到oracle，删除之
</code></pre><figure><img src="`+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>右键删除 <img src="'+z+'" alt="" loading="lazy"></p><figure><img src="'+E+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>4.依次展开HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services中，删 
除所有oracle开头的项
</code></pre><figure><img src="`+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>  5.依次展开 HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\
  Services\\Eventlog\\Application，删除所有oracle开头的项；
  在HKEY_CLASSES_ROOT，删除以ora开头的项
</code></pre><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+A+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>  6.重启电脑，删除oracle目录，删除Oracle的安装目录app等
</code></pre><p><img src="`+L+'" alt="" loading="lazy"> 在程序目录。。果然没有oracle咯。。。emmmmmmm。。。高兴。。 <img src="'+N+'" alt="" loading="lazy"></p><figure><img src="'+H+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+Y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',30),I={href:"https://jingyan.baidu.com/article/922554468d4e6b851648f4e3.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.cnblogs.com/huangjian20112939/p/3413173.html",target:"_blank",rel:"noopener noreferrer"},T=a("hr",null,null,-1),V=a("h3",{id:"分割线",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),i(" 分割线")],-1),K=a("hr",null,null,-1),B=a("div",{class:"hint-container tip"},[a("p",{class:"hint-container-title"},"提示"),a("p",null,[a("strong",null,[i("以上就是我关于 "),a("em",null,"Oracle 卸载"),i(" 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。")])])],-1);function j(F,R){const e=l("ExternalLinkIcon");return o(),r("div",null,[s(" more "),w,a("p",null,[a("a",I,[i("参考链接一"),t(e)]),a("a",M,[i("参考链接二"),t(e)])]),T,V,K,B])}const X=n(k,[["render",j],["__file","oracle3.html.vue"]]);export{X as default};
