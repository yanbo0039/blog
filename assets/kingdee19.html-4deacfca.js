import{_ as i,X as g,Y as t,a1 as a,a0 as n}from"./framework-68dd73a2.js";const e="/blog/assets/Kingdee_19_1.png",o="/blog/assets/Kingdee_19_2.png",l="/blog/assets/Kingdee_19_3.png",s="/blog/assets/Kingdee_19_4.png",r="/blog/assets/Kingdee_19_5.png",p="/blog/assets/Kingdee_19_6.png",c="/blog/assets/Kingdee_19_7.png",f="/blog/assets/Kingdee_19_8.png",_="/blog/assets/Kingdee_19_9.png",d="/blog/assets/Kingdee_19_10.png",u="/blog/assets/Kingdee_19_11.png",m="/blog/assets/Kingdee_19_12.png",b="/blog/assets/Kingdee_19_13.png",y="/blog/assets/Kingdee_19_14.png",x="/blog/assets/Kingdee_19_15.png",z="/blog/assets/Kingdee_19_16.png",K="/blog/assets/Kingdee_19_17.png",h="/blog/assets/Kingdee_19_18.png",q="/blog/assets/Kingdee_19_19.png",k="/blog/assets/Kingdee_19_20.png",v="/blog/assets/Kingdee_19_21.png",B="/blog/assets/Kingdee_19_22.png",N="/blog/assets/Kingdee_19_23.png",V="/blog/assets/Kingdee_19_24.png",w="/blog/assets/Kingdee_19_25.png",C="/blog/assets/Kingdee_19_26.png",E="/blog/assets/Kingdee_19_27.png",S="/blog/assets/Kingdee_19_28.png",X="/blog/assets/Kingdee_19_29.png",Y="/blog/assets/Kingdee_19_30.png",j="/blog/assets/Kingdee_19_31.png",A="/blog/assets/Kingdee_19_32.png",D="/blog/assets/Kingdee_19_33.png",F="/blog/assets/Kingdee_19_34.png",G="/blog/assets/Kingdee_19_35.png",H="/blog/assets/Kingdee_19_36.png",I="/blog/assets/Kingdee_19_37.png",J="/blog/assets/Kingdee_19_38.png",L="/blog/assets/Kingdee_19_39.png",M="/blog/assets/Kingdee_19_40.png",O="/blog/assets/Kingdee_19_41.png",P="/blog/assets/Kingdee_19_42.png",Q="/blog/assets/Kingdee_19_43.png",R="/blog/assets/Kingdee_19_44.png",T="/blog/assets/Kingdee_19_45.png",U="/blog/assets/Kingdee_19_46.png",W={},Z=n('<h1 id="_19-金蝶云苍穹如何添加页面字段-md" tabindex="-1"><a class="header-anchor" href="#_19-金蝶云苍穹如何添加页面字段-md" aria-hidden="true">#</a> 19-金蝶云苍穹如何添加页面字段？.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li>如图所示根据如下路径进入对页的页面</li></ol><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>添加单据头字段</li></ol><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：单据编码名称改为 申请单号</li></ul><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：组织名称改为 采购组织,修改组织职能为 采购职能</li></ul><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：添加组织类型字段，名称为 供应商，标识为supplier， 数据库标识为fsupplier</li></ul><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：添加组织字段，名称为 申请部门 ，标识 applyorg ， 数据库标识 fapplyorg</li></ul><blockquote><p>操作同上</p></blockquote><ul><li>需求：添加用户类型字段，名称为 申请人，标识为applier，数据库标识fapplier</li></ul><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：添加日期字段，名称为 申请日期，标识 applydate ,数据库标识 fapplydate</li></ul><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：添加币别字段，名称为 币种 ，标识currency，数据库标识 fcurrency</li></ul><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：添加基础资料字段，绑定基础资料为供应商，名称为供应商 ，标识supplier ,数据库标识fsupplier</li></ul><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：添加文本字段，名称为 用途，标识usage ,数据库标识 fusage</li></ul><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>调整顺序设置必录并隐藏暂时不需要的元素</p></blockquote><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>最后效果</p></blockquote><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>添加单据体</li></ol><ul><li>选中内容区，然后在控件过滤面板中搜索高级面板加入内容区</li></ul><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>设置面板名称为采购分录并设置为可折叠，修改工具栏项名称为新增和删除</li></ul><figure><img src="'+X+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+Y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+j+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>选中采购分录高级面板，然后在控件过滤面板中搜索单据体加入高级面板</p></blockquote><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+D+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+F+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>添加单据体字段:</p></li><li><p>需求： 添加物料字段，名称为 物料编码，标识为materia ，数据库标识为fmateria</p></li></ul><figure><img src="'+G+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+H+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：添加基础资料属性字段，名称为 物料名称，标识为materialname， 绑定基础资料字段为物料编码，设置显示属性为名称</li></ul><figure><img src="'+J+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>此处的绑定基础资料字段为物料编码我未知如何操作</strong></p><ul><li>需求：添加文本字段，名称为 规格型号，标识为model，数据库标识为fmodel</li></ul><figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：添加计量单位字段，名称为 计量单位，标识为unit，数据库标识为funit</li></ul><figure><img src="'+M+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：添加数量字段，名称为 申请数量，标识为applyqty，数据库标识为 fapplyqty</li></ul><figure><img src="'+O+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：添加数量字段，名称为 已订货数量，标识为orderedqty，数据库标识为 forderedqty</li></ul><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：添加单价字段，名称为 建议采购单价，标识为price，数据库标识为fprice</li></ul><figure><img src="'+Q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：添加金额字段，名称为 金额，标识为amount，数据库标识为famount</li></ul><figure><img src="'+R+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：添加日期字段，名称为 需求日期，标识为requiredate，数据库标识为frequiredate</li></ul><figure><img src="'+T+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>需求：添加单据状态字段，名称为 状态，标识为status，数据库标识为fstatus</li></ul><figure><img src="'+U+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>金蝶云苍穹如何添加页面字段？</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',81);function $(ii,gi){return g(),t("div",null,[a(" more "),Z])}const ai=i(W,[["render",$],["__file","kingdee19.html.vue"]]);export{ai as default};
