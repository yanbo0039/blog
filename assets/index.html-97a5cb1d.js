import{_ as a,X as t,Y as d,a1 as l,Z as e,$ as n,a2 as s,a0 as r,F as o}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_142_1.png",v="/blog/assets/Kingdee_142_2.png",m={},u={id:"_142-eas-gui单据头值改变事件案例-md",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#_142-eas-gui单据头值改变事件案例-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--142-EAS-GUI-jz9qp7bv9c11drutx7bt76bgn8bmrh5vq.md",target:"_blank",rel:"noopener noreferrer"},g=r('<h4 id="需求背景" tabindex="-1"><a class="header-anchor" href="#需求背景" aria-hidden="true">#</a> 需求背景</h4><blockquote><p>笔者有遇到这么一个需求，一个F7字段在前，另一F7字段在后，当A F7字段进行选择时，B F7 根据A F7 字段选择的值进行过滤</p></blockquote><h4 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h4><ol><li>找到AF7字段的Edit.ui并选择此字段的属性，在事件里找到datachange将其方法放出来,并保存</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li><p>在<strong>业务建模</strong>视图将此单据重新发布</p></li><li><p>在Edit类里重写此方法</p></li></ol><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/**
    * &lt;p&gt;Title: prmtbank_dataChanged&lt;/p&gt;
    * &lt;p&gt;
    *    Description:
    *    金融机构值改变事件发生之后更改F7授信额度的值
    *    
    *    金融机构表名: T_BD_Bank
    *    授信额度:CreditLimit 表名 T_FIN_CreditLimit
    * &lt;/p&gt;
    * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
    * @author xx
    * @date 2019-6-10 
    * @param param the bare_field_name
    * @param e
    * @throws Exception
    * @see com.kingdee.eas.custom.bill.leaseconbill.client.AbstractLeaseConBillEditUI#prmtbank_dataChanged(com.kingdee.bos.ctrl.swing.event.DataChangeEvent)
    * @version 1.0
    */
@Override
protected void prmtbank_dataChanged(DataChangeEvent e) throws Exception {
    super.prmtbank_dataChanged(e);
    if(null != e.getNewValue() &amp;&amp; !e.getNewValue().equals(e.getOldValue())){
        prmtcreditline.setValue(null);//每次值改变时必须清空授信额度值
        BankInfo bankInfo = (BankInfo) e.getNewValue();
        String sql = &quot;select T_FIN_CreditLimit.fid from T_FIN_CreditLimit left join &quot; +
        &quot;T_BD_Bank on T_FIN_CreditLimit.FCREDITINSTITUTIONID = T_BD_Bank.fid&quot; +
        &quot; where T_BD_Bank.fid = &#39;&quot; + bankInfo.getId().toString()+ &quot;&#39;&quot;;
        EntityViewInfo evInfo = new EntityViewInfo();
        FilterInfo f = new FilterInfo();
        f.getFilterItems().add(new FilterItemInfo(&quot;id&quot;,sql,CompareType.INNER));
        evInfo.setFilter(f);
        prmtcreditline.setEntityViewInfo(evInfo);
        prmtcreditline.setEnabled(true);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>通过以上步骤则可以实现B F7 的值是经A f7 过滤后产生的</p></blockquote><p><strong>以上就是我关于 <em>EAS-GUI单据头值改变事件案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><blockquote><p>真正的成熟是在看过世间所有的肮脏与不堪后，内心还能向往积极与温暖，希望你历尽千帆，归来仍是少年。</p></blockquote><hr>`,17);function _(h,f){const i=o("ExternalLinkIcon");return t(),d("div",null,[l(" more "),e("h1",u,[b,n(),e("a",p,[n("142-EAS-GUI单据头值改变事件案例.md"),s(i)])]),g])}const k=a(m,[["render",_],["__file","index.html.vue"]]);export{k as default};
