import{_ as t,X as i,Y as o,a1 as e,a0 as g}from"./framework-68dd73a2.js";const a={},c=g('<h1 id="_30-金蝶云苍穹如何设置转换规则与反写规则-md" tabindex="-1"><a class="header-anchor" href="#_30-金蝶云苍穹如何设置转换规则与反写规则-md" aria-hidden="true">#</a> 30-金蝶云苍穹如何设置转换规则与反写规则？.md</h1><h4 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h4><blockquote><p>转换规则与反写规则设置的前置条件都是要保证自己所建的云里至少有两个单据，例我所建立的采购申请单与采购订单</p></blockquote><h4 id="设置转换规则" tabindex="-1"><a class="header-anchor" href="#设置转换规则" aria-hidden="true">#</a> 设置转换规则</h4><blockquote><p>路径：流程服务云 --&gt; 业务流服务 --&gt; 单据转换 --&gt; 转换路线</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在做设置转换规则操作之前，需要明白一些概念，设置转换规则的目的是什么？</p><blockquote><p>答：其目的是将一张单据的字段带到另一张单据。例将采购完成之后反写申请单的已订货数量。</p></blockquote><p>那么由此可知这需要两张单据，那么目前做到现在我只有一个采购申请单，为了保险起见我直接新建了另一张采购订单，并且配置其用户权限与开启对应的权限。</p><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>新增转换规则如下:</p><blockquote><p>设置规则筛选条件，状态=审核的单据才参与转换</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>设置关联实体为单据体</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>设置字段映射</p><blockquote><p>字段映射配置时需注意：采购订单.单据体.订货数量 = 采购申请单.单据体.申请数量-采购申请单.单据体.已订货数量</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>设置数据范围，单据转换时，只选择单据体状态不等于关闭的分录行数据</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>增加业务规则：采购订单.单据体.金额 = 采购订单.单据体.订货数量x 采购订单.单据体.建议采购单价。 注：此步骤后续也应该补上。。。。</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>如上所示所有都操作完成了，需要进行保存操作时却发现了报错</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_15.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>解决如上错误，进放采购订单</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>配置好回到此页面重新保存，如下图所示则保存成功</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_17.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="设置反写规则" tabindex="-1"><a class="header-anchor" href="#设置反写规则" aria-hidden="true">#</a> 设置反写规则</h4><blockquote><p>路径：流程服务云 --&gt; 业务流服务 --&gt; 单据转换 --&gt; 反写规则</p></blockquote><blockquote><p>设置基本信息数据和反写规则：订货数量累加到源单的已订货数量</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_18.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>设置采购申请单行关闭 ，即分录.申请数量 = 分录.已订货数量时，该分录状态为关闭状态，否则为下达状态。全部分录为关闭状态时，设置单据头状态为已关闭。</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_19.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>设置超额检查：不允许超额采购</p></blockquote><blockquote><p>设置采购订单保存反写采购申请单时，检查反写后申请数量 &lt; 已订货数量，如果超出，弹出提示，并且终止保存</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_30_20.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹如何设置转换规则与反写规则？</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',49);function n(d,p){return i(),o("div",null,[e(" more "),c])}const l=t(a,[["render",n],["__file","kingdee30.html.vue"]]);export{l as default};
