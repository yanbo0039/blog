import{_ as i,X as a,Y as e,a1 as t,a0 as n}from"./framework-68dd73a2.js";const o="/blog/assets/Kingdee_147_1.png",s="/blog/assets/Kingdee_147_2.png",l="/blog/assets/Kingdee_147_3.png",r="/blog/assets/Kingdee_147_4.png",g="/blog/assets/Kingdee_147_5.png",c="/blog/assets/Kingdee_147_6.png",d="/blog/assets/Kingdee_147_7.png",p="/blog/assets/Kingdee_147_8.png",_={},f=n('<h1 id="_147-eas如何删除枚举类的值-md" tabindex="-1"><a class="header-anchor" href="#_147-eas如何删除枚举类的值-md" aria-hidden="true">#</a> 147-EAS如何删除枚举类的值？.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="需求背景" tabindex="-1"><a class="header-anchor" href="#需求背景" aria-hidden="true">#</a> 需求背景</h3><blockquote><p>如下图所示，一单据的某字段有三个枚举值，需要将其删除一个，那么如何实现呢？</p></blockquote><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="解决步骤" tabindex="-1"><a class="header-anchor" href="#解决步骤" aria-hidden="true">#</a> 解决步骤</h3><ol><li>通过单据实体找到对应的枚举文件</li></ol><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>找到枚举文件而后删除对应的枚举值</li></ol><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>发布此枚举文件</li></ol><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>刷新整个项目</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>重启客户端</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>重启服务端</li></ol><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li>如下图所示，则枚举值已被删除</li></ol><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>友情提示,一般若项目中没有引用此枚举的值则可随意删除，若项目中有被引用此枚举值则需要将对应的报错信息给处理完成后再重新服务端与客户端</p></blockquote><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>EAS如何删除枚举类的值？</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',25);function h(m,u){return a(),e("div",null,[t(" more "),f])}const x=i(_,[["render",h],["__file","kingdee147.html.vue"]]);export{x as default};
