import{_ as e,X as n,Y as i,a1 as t,a0 as a}from"./framework-68dd73a2.js";const l="/blog/assets/Kingdee_144_1.png",o="/blog/assets/Kingdee_144_2.png",r="/blog/assets/Kingdee_144_3.png",s="/blog/assets/Kingdee_144_4.png",c={},g=a('<h1 id="_144-eas-记录一怀疑一生的bug-null-null-为true-md" tabindex="-1"><a class="header-anchor" href="#_144-eas-记录一怀疑一生的bug-null-null-为true-md" aria-hidden="true">#</a> 144-EAS-记录一怀疑一生的bug null != null 为true？？？.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><blockquote><p>最近笔者有在调试一段代码，但在代码里出现了一段 null != null 其比较值为true的奇观，一度让笔者迷失了自我，怀疑了人生。。。。。如下图所示</p></blockquote><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>最后在请教了行业内的大佬才知道，此null 非彼null 在我蝶的BOS开发工具内，其为null是表明此对象为null但对像内的id呀什么什么的还是有的，要是真正的为null其值会显示为中文的<strong>空</strong>!!!!!嗯。。。。安排。。。。。</p></blockquote><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>EAS-记录一怀疑一生的bug null != null 为true？？？</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',12);function u(d,p){return n(),i("div",null,[t(" more "),g])}const f=e(c,[["render",u],["__file","kingdee144.html.vue"]]);export{f as default};
