import{_ as i,X as t,Y as o,a1 as e,a0 as g}from"./framework-68dd73a2.js";const a="/blog/assets/Kingdee_24_1.png",n="/blog/assets/Kingdee_24_2.png",s="/blog/assets/Kingdee_24_3.png",l="/blog/assets/Kingdee_24_4.png",c="/blog/assets/Kingdee_24_5.png",p="/blog/assets/Kingdee_24_6.png",r="/blog/assets/Kingdee_24_7.png",_="/blog/assets/Kingdee_24_8.png",f="/blog/assets/Kingdee_24_9.png",d="/blog/assets/Kingdee_24_10.png",u="/blog/assets/Kingdee_24_11.png",b="/blog/assets/Kingdee_24_12.png",m="/blog/assets/Kingdee_24_13.png",k="/blog/assets/Kingdee_24_14.png",q="/blog/assets/Kingdee_24_15.png",x="/blog/assets/Kingdee_24_16.png",h="/blog/assets/Kingdee_24_17.png",y="/blog/assets/Kingdee_24_18.png",z="/blog/assets/Kingdee_24_19.png",K="/blog/assets/Kingdee_24_20.png",v="/blog/assets/Kingdee_24_21.png",B="/blog/assets/Kingdee_24_22.png",N={},S=g('<h1 id="_24-金蝶云苍穹如何设置界面控件属性-md" tabindex="-1"><a class="header-anchor" href="#_24-金蝶云苍穹如何设置界面控件属性-md" aria-hidden="true">#</a> 24-金蝶云苍穹如何设置界面控件属性？.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li>设置单据主实体属性</li></ol><blockquote><p>选中采购申请单xx（PS：设置属性时都需要选中对应的控件，解释属性值时以“控件名-属性名：”的方式介绍具体 设置，之后不再赘述）</p></blockquote><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>需求：采购申请单 --&gt;业务控制：开启单据转换、编码规则、工作流、轻分析的支持</p></blockquote><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>设置单据头字段属性</li></ul><blockquote><p>需求：统一设置属性必录为开启的字段有：申请单号、采购组织、申请人、申请部门、申请日期、状态。</p></blockquote><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>需求：申请单号-锁定性：设置为全局锁定，单号由编码规则生成，不允许修改</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>需求：采购组织-组织职能：设置为采购职能</p></blockquote><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>需求：申请日期-缺省值：设置为自动获取当前时间</p></blockquote><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>需求：状态-状态列表：增加已关闭状态，如下图</p></blockquote><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>需求：状态-缺省值：暂存</p></blockquote><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>设置分录字段属性</li></ol><blockquote><p>需求：统一设置属性必录为开启的字段有：物料编码、物料名称、计量单位、申请数量、需求日期、状态。</p></blockquote><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>需求：物料名称-基础资料字段：选择物料编码 需求：物料名称-显示属性：选择名称</p></blockquote><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>（申请数量、已订货数量）-计量单位：选择计量单位</p></blockquote><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>（申请数量、已订货数量、建议采购单价、金额）-数值范围：[0,]（表示&gt;=0）</p></blockquote><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>（申请数量、已订货数量、建议采购单价。金额）-为零显示：开启</p></blockquote><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>（建议采购单价、金额）-币别：选择币种</p></blockquote><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>需求：状态-状态列表：修改默认状态列表为未下达、下达、关闭三种状态，如下图</p></blockquote><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>需求：状态-缺省值：选择未下达</p></blockquote><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>设置制表信息字段属性</li></ol><blockquote><p>需求：设置制单人和制单日期为必录即可</p></blockquote><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>金蝶云苍穹如何设置界面控件属性？</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',49);function V(w,C){return t(),o("div",null,[e(" more "),S])}const P=i(N,[["render",V],["__file","kingdee24.html.vue"]]);export{P as default};
