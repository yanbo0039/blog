import{_ as n,X as r,Y as s,a1 as l,Z as e,$ as a,a2 as t,a0 as o,F as c}from"./framework-68dd73a2.js";const g="/blog/assets/Kingdee_128_1.png",d="/blog/assets/Kingdee_128_2.png",p="/blog/assets/Kingdee_128_3.png",_="/blog/assets/Kingdee_128_4.png",h="/blog/assets/Kingdee_128_5.png",f="/blog/assets/Kingdee_128_6.png",u="/blog/assets/Kingdee_128_7.png",m={},b={id:"_128-eas中常见追踪标准方法的源代码实现套路-md",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#_128-eas中常见追踪标准方法的源代码实现套路-md","aria-hidden":"true"},"#",-1),x={href:"http://xn--128-EAS-m43k06ce3n2ow4hgknjpm1a22hm4tg3g2yz6im1hhg04h5htapgbh6y.md",target:"_blank",rel:"noopener noreferrer"},E=o('<h4 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h4><blockquote><p>最近笔者在EAS项目中实现一个生成凭证的功能，即调用标准方法 generateVoucher(),如下图所示</p></blockquote><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>如下图我们可知，其只需要传对应的参数即可实现功能，那么有时候我们就想看看，其到底是如何实现此功能的呢？</p></blockquote><h4 id="事前准备" tabindex="-1"><a class="header-anchor" href="#事前准备" aria-hidden="true">#</a> 事前准备</h4><ol><li><p>开发工具 -Eclipse</p></li><li><p>实现反编译</p></li></ol>',6),q={href:"https://www.jianshu.com/p/0128a0c3e7d5",target:"_blank",rel:"noopener noreferrer"},y=o('<ol start="3"><li><p>EAS客户/服务端 安装成功，此步骤不作介绍</p></li><li><p>BOS开发工具安装成功 ，此步骤不作介绍</p></li></ol><h4 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h4><blockquote><p>我们常规操作就是按住ctrl键配置鼠标的单击键直接进入看源码，如下图所示，我们进入方法所看到的只是此方法的抽象方法以及一个抽像类，那么如何才能找到此方法的实现方法，以及此类的实现类呢？这就需要我们掌握基本套路</p></blockquote><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>首先我们进入此类方法的controllerBean中，在Java视图快捷键ctrl + shift + t搜索</li></ol><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>进入此类中连续两次ctrl + o 查看父类的父类的方法，得记住之前方法的参数，输入_generateVoucher找到对应的方法点击进入即可</li></ol><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>如下图所示，即找到了此方法的实现源代码</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>EAS中常见追踪标准方法的源代码实现套路</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><blockquote><p>别人对你不友好，不一定是你真的不好，更可能是觉得你没有价值。—————— 西格蒙德.弗洛伊德</p></blockquote><hr>',20);function z(K,S){const i=c("ExternalLinkIcon");return r(),s("div",null,[l(" more "),e("h1",b,[k,a(),e("a",x,[a("128-EAS中常见追踪标准方法的源代码实现套路.md"),t(i)])]),E,e("blockquote",null,[e("p",null,[a("如不知如何实现Eclipse工具的反编译，请参考笔者的另一篇博客"),e("a",q,[a("Eclipse如何设置反编译查看Java源码？"),t(i)])])]),y])}const v=n(m,[["render",z],["__file","kingdee128.html.vue"]]);export{v as default};
