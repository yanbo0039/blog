import{_ as t,X as a,Y as r,a1 as d,Z as i,$ as e,a2 as g,a0 as s,F as o}from"./framework-68dd73a2.js";const c={},l={id:"_11-应用st模板创建gui单据-md",tabindex:"-1"},p=i("a",{class:"header-anchor",href:"#_11-应用st模板创建gui单据-md","aria-hidden":"true"},"#",-1),u={href:"http://xn--11-STGUI-er7mm5hwy8bc9at10bh0n3sjp49b.md",target:"_blank",rel:"noopener noreferrer"},v=s(`<ol><li>创建单据视图</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_15.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>修改界面代码</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_17.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    /**
     * (non-Javadoc)
     * @see com.kingdee.eas.st.common.client.STBillBaseEditUI#createNewDetailData(com.kingdee.bos.ctrl.kdf.table.KDTable)
     */
    protected IObjectValue createNewDetailData(KDTable table){
    	//此处为new一个单据分录的info对象
    	return new TestBillEntryInfo();
    }
    
    protected OrgType getMainBizOrgType(){
    	//主业务组织的组织类型:请根据需求自行添加
//    	OrgType.Admin;//行政组织
//    	OrgType.Company;//财务组织
//    	OrgType.ControlUnit;//管理单元
//    	OrgType.CostCenter;//成本中心
//    	OrgType.HRO;//HR组织
//    	OrgType.NONE;//无组织属性
//    	OrgType.ProfitCenter;//利润中心
//    	OrgType.Purchase;//采购中心
//    	OrgType.Quality;//质检中心
//    	OrgType.Sale;//销售中心
//    	OrgType.Storage;//库存组织
//    	OrgType.Transport;//发运组织
//    	OrgType.UnionDebt;//合并范围
    	return OrgType.Storage;
    }

    //忽略组织过滤
    protected void setOrgF7(KDBizPromptBox f7,OrgType orgType)throws Exception{
    	com.kingdee.eas.basedata.org.client.f7.NewOrgUnitFilterInfoProducer oufip = new com.kingdee.eas.basedata.org.client.f7.NewOrgUnitFilterInfoProducer(orgType);
    	f7.setFilterInfoProducer(oufip);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_18.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    protected OrgType getMainBizOrgType(){
    	return OrgType.Storage;
    }
    protected String getPropertyOfBizOrg(OrgType orgType){
    	return &quot;storageOrgUnit.id&quot;;
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建客户端菜单</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_19.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_20.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_21.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>未解决的问题，如下图所示</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_11_22.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>应用ST模板创建GUI单据</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,33);function m(f,b){const n=o("ExternalLinkIcon");return a(),r("div",null,[d(" more "),i("h1",l,[p,e(),i("a",u,[e("11-应用ST模板创建GUI单据.md"),g(n)])]),v])}const h=t(c,[["render",m],["__file","kingdee11.html.vue"]]);export{h as default};
