import{_ as o,X as t,Y as a,a1 as s,Z as e,$ as i,a2 as r,a0 as _,F as c}from"./framework-68dd73a2.js";const l="/blog/assets/Windows_3_1.png",g="/blog/assets/Windows_3_2.png",d="/blog/assets/Windows_3_3.png",p="/blog/assets/Windows_3_4.png",f="/blog/assets/Windows_3_5.png",m="/blog/assets/Windows_3_6.png",u="/blog/assets/Windows_3_7.png",h="/blog/assets/Windows_3_8.png",b={},x=_('<h1 id="win10如何删除桌面ie图标-ie图标无法删除怎么办" tabindex="-1"><a class="header-anchor" href="#win10如何删除桌面ie图标-ie图标无法删除怎么办" aria-hidden="true">#</a> Win10如何删除桌面IE图标 ie图标无法删除怎么办</h1><p>如图：win10桌面IE快捷方式居然无法删除！！！！！！我个去。。。把老夫给气得。。。。 <img src="'+l+'" alt="" loading="lazy"></p><p>闲话少说。。。解决方法。。</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>  找到计算机 /HKEY_LOCAL_MACHINE/SOFTWARE/
  Microsoft/Windows/CurrentVersion/Explorer/Desktop/NameSpace注册表项
</code></pre><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>查找目标窗口中输入Internet Explorer，然后点击“查找下一个”按钮
</code></pre><figure><img src="`+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',12),W={href:"https://jingyan.baidu.com/article/60ccbceba31fe364cab19717.html",target:"_blank",rel:"noopener noreferrer"},w=e("hr",null,null,-1),E=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),i(" 分割线")],-1),y=e("hr",null,null,-1),z=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function I(N,k){const n=c("ExternalLinkIcon");return t(),a("div",null,[s(" more "),x,e("p",null,[e("a",W,[i("参考链接 "),r(n)])]),w,E,y,z])}const C=o(b,[["render",I],["__file","3-Win10如何删除桌面IE图标 ie图标无法删除怎么办.html.vue"]]);export{C as default};
