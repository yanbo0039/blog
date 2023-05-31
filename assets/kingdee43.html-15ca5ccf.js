import{_ as o,X as t,Y as p,a1 as a,Z as i,$ as l,a2 as n,a0 as r,F as s}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_43_1.png",d="/blog/assets/Kingdee_43_2.png",g="/blog/assets/Kingdee_43_3.png",u="/blog/assets/Kingdee_43_4.png",_="/blog/assets/Kingdee_43_5.png",h="/blog/assets/Kingdee_43_6.png",b="/blog/assets/Kingdee_43_7.png",f={},k={id:"_43-金蝶云苍穹基础资料的简单介绍-md",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_43-金蝶云苍穹基础资料的简单介绍-md","aria-hidden":"true"},"#",-1),q={href:"http://xn--43--dj9dkkl4v1vibn2ayy7a2vd1rhkpd67om6ni5qq2vxvr.md",target:"_blank",rel:"noopener noreferrer"},x=r('<h3 id="产品介绍" tabindex="-1"><a class="header-anchor" href="#产品介绍" aria-hidden="true">#</a> 产品介绍</h3><blockquote><p>基础资料实际上是一种特殊的单据</p></blockquote><p>金蝶云苍穹基础资料主要为以下几点：</p><ul><li><p>基于单据，继承了动态表单、单据的全部特性</p></li><li><p>强化了编码、名称的使用，能以一个编码代表某个业务对象。</p></li><li><p>典型基础资料:物料、客商、币别。</p></li></ul><h3 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门" aria-hidden="true">#</a> 快速入门</h3><h4 id="创建页面" tabindex="-1"><a class="header-anchor" href="#创建页面" aria-hidden="true">#</a> 创建页面</h4><ol><li>选择页面类型</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>选择创建方式</li></ol><blockquote><p>基础资料的创建方式和单据类似，也有三种创建模式(2.0版本只有两种)，和单据不同的是系统预置了更多模板可供选择。</p></blockquote><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="预置的基础资料模板" tabindex="-1"><a class="header-anchor" href="#预置的基础资料模板" aria-hidden="true">#</a> 预置的基础资料模板</h4><ol><li>预置的基础资料模板</li></ol><blockquote><p>系统根据不同的场景预置了多种基础资料模板，每种模板都预置了部分字段和设计。</p></blockquote><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>基础资料模板</li></ol><blockquote><p>最基本基础资料模板，包含基础资料的基本元素和操作。这种模板设置的基础资料没有组织隔离和分组管理，数据之间也没有父子关系，例如币别。</p></blockquote><p>此模板内容:</p><ul><li><p>预置主菜单、操作</p></li><li><p>设置好了界面整体布局</p></li><li><p>预置编号、状态等字段</p></li><li><p>预置好权限项</p></li><li><p>配置好网络控制项</p></li><li><p>预置列表设计</p></li><li><p>典型示例：币别</p></li><li><p>无需按组织隔离</p></li><li><p>不需要分组管理</p></li><li><p>数据之前没有父子关系</p></li></ul><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>基础资料带组织模板</li></ol><blockquote><p>继承自基础资料模板，增加了多个组织字段，可以设置控制策略，已设置好主业务组织。</p></blockquote><blockquote><p>尽量使用带组织的模板，因为带组织的提供了模板提供了灵活的组织隔离方式，支持更多的业务场景。带组织的如不需要按组织隔离，可以通过设置控制策略为全局共享等方式。</p></blockquote><p>此模板内容:</p><ul><li><p>继承自基础资料模板</p></li><li><p>增加了多个组织字段</p></li><li><p>增加了控制策略字段</p></li><li><p>设置好了主业务组织</p></li><li><p>支持按组织隔离数据</p></li><li><p>典型示例：账簿</p></li></ul><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>分组基础资料模板</li></ol><blockquote><p>继承自基础资料模板，增加分组字段，但是分组本身无业务含义，不可被F7返回。</p></blockquote><p>此模板内容:</p><ul><li><p>继承自基础资料模板</p></li><li><p>增加分组字段</p></li><li><p>列表调整为左树又表</p></li></ul><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>列表调整为左树又表形式展示</p></blockquote><ol start="5"><li>树形基础资料模板</li></ol><blockquote><p>继承自基础资料模板，增加上级资料字段，数据间有上下级关系。</p></blockquote><blockquote><p>其分组本身也是基础资料，具有实际的业务含义，可被F7返回，这也是和分组基础资料最大的区别。</p></blockquote><p>此模板内容:</p><ul><li><p>继承自基础资料模板</p></li><li><p>增加上级资料字段</p></li><li><p>列表调整为左树又表</p></li><li><p>数据间有上下级关系</p></li></ul><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="修改基础资料属性" tabindex="-1"><a class="header-anchor" href="#修改基础资料属性" aria-hidden="true">#</a> 修改基础资料属性</h4><blockquote><p>基础资料的设计方法完全与单据相同，增加了部分新属性。</p></blockquote><p>基础资料的定义就是能以一个编码代表一个业务对象。 所以新增了如下属性:</p><ul><li><p>编码字段： 选择文本字段作为基础资料的编码。</p></li><li><p>名称字段： 选择文本或多语言文本字段作为基础资料的名称。</p></li></ul><p><strong>以上就是我关于 <em>金蝶云苍穹基础资料的简单介绍</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',47);function y(v,z){const e=s("ExternalLinkIcon");return t(),p("div",null,[a(" more "),i("h1",k,[m,l(),i("a",q,[l("43-金蝶云苍穹基础资料的简单介绍.md"),n(e)])]),x])}const N=o(f,[["render",y],["__file","kingdee43.html.vue"]]);export{N as default};
