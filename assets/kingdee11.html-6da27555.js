import{_ as a,X as t,Y as s,a1 as g,Z as i,$ as e,a2 as r,a0 as o,F as l}from"./framework-68dd73a2.js";const d="/blog/assets/Kingdee_11_1.png",c="/blog/assets/Kingdee_11_2.png",p="/blog/assets/Kingdee_11_3.png",m="/blog/assets/Kingdee_11_4.png",u="/blog/assets/Kingdee_11_5.png",_="/blog/assets/Kingdee_11_6.png",f="/blog/assets/Kingdee_11_7.png",b="/blog/assets/Kingdee_11_8.png",v="/blog/assets/Kingdee_11_9.png",y="/blog/assets/Kingdee_11_10.png",x="/blog/assets/Kingdee_11_11.png",T="/blog/assets/Kingdee_11_12.png",O="/blog/assets/Kingdee_11_13.png",z="/blog/assets/Kingdee_11_14.png",K="/blog/assets/Kingdee_11_15.png",h="/blog/assets/Kingdee_11_16.png",k="/blog/assets/Kingdee_11_17.png",B="/blog/assets/Kingdee_11_18.png",I="/blog/assets/Kingdee_11_19.png",N="/blog/assets/Kingdee_11_20.png",S="/blog/assets/Kingdee_11_21.png",w="/blog/assets/Kingdee_11_22.png",U={},D={id:"_11-应用st模板创建gui单据-md",tabindex:"-1"},C=i("a",{class:"header-anchor",href:"#_11-应用st模板创建gui单据-md","aria-hidden":"true"},"#",-1),E={href:"http://xn--11-STGUI-er7mm5hwy8bc9at10bh0n3sjp49b.md",target:"_blank",rel:"noopener noreferrer"},J=o('<ol><li>创建单据视图</li></ol><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+T+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+O+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>修改界面代码</li></ol><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    /**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+B+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    protected OrgType getMainBizOrgType(){
    	return OrgType.Storage;
    }
    protected String getPropertyOfBizOrg(OrgType orgType){
    	return &quot;storageOrgUnit.id&quot;;
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建客户端菜单</li></ol><figure><img src="`+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>未解决的问题，如下图所示</li></ol><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>应用ST模板创建GUI单据</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',33);function P(V,F){const n=l("ExternalLinkIcon");return t(),s("div",null,[g(" more "),i("h1",D,[C,e(),i("a",E,[e("11-应用ST模板创建GUI单据.md"),r(n)])]),J])}const j=a(U,[["render",P],["__file","kingdee11.html.vue"]]);export{j as default};
