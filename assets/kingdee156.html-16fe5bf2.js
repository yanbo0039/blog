import{_ as e,X as i,Y as a,a1 as t,a0 as n}from"./framework-68dd73a2.js";const o="/blog/assets/Kingdee_156_1.png",r="/blog/assets/Kingdee_156_2.png",s="/blog/assets/Kingdee_156_3.png",g="/blog/assets/Kingdee_156_4.png",c="/blog/assets/Kingdee_156_5.png",l={},d=n('<h1 id="_156-eas如何让某个字段参与到编号规则中来-md" tabindex="-1"><a class="header-anchor" href="#_156-eas如何让某个字段参与到编号规则中来-md" aria-hidden="true">#</a> 156-EAS如何让某个字段参与到编号规则中来？.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="需求背景" tabindex="-1"><a class="header-anchor" href="#需求背景" aria-hidden="true">#</a> 需求背景</h4><blockquote><p>笔者有遇到这么一个需求,要求<strong>所属组织</strong>字段参与到编码规则中来，之前的是在规则定义里添加不了，如下图一二所示</p></blockquote><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h4><ol><li>在单据对应的实体内找到此字段,在<strong>扩展属性</strong>中找到<strong>本属性是否参加编码</strong></li></ol><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>将其值更改为true</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>保存后将实体发布即可</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>EAS-BOS开发工具如何实现分屏操作？</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><blockquote><p>宫崎骏说: “当陪你的人要下车时，即使再不舍也要心存感激笑着挥手告别。终有弱水替沧海，再无相思寄巫山。”</p></blockquote><hr>',21);function p(_,h){return i(),a("div",null,[t(" more "),d])}const m=e(l,[["render",p],["__file","kingdee156.html.vue"]]);export{m as default};
