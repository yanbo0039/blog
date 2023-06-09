import{_ as e,X as q,Y as s,a1 as d,Z as t,$ as i,a2 as n,a0 as u,F as l}from"./framework-68dd73a2.js";const a="/blog/assets/Kingdee_160_1.png",r="/blog/assets/Kingdee_160_2.png",c="/blog/assets/Kingdee_160_3.png",v="/blog/assets/Kingdee_160_4.png",m="/blog/assets/Kingdee_160_5.png",b="/blog/assets/Kingdee_160_6.png",g="/blog/assets/Kingdee_160_7.png",p="/blog/assets/Kingdee_160_8.png",_="/blog/assets/Kingdee_160_9.png",f="/blog/assets/Kingdee_160_10.png",h="/blog/assets/Kingdee_160_11.png",y="/blog/assets/Kingdee_160_12.png",x="/blog/assets/Kingdee_160_13.png",k="/blog/assets/Kingdee_160_14.png",z="/blog/assets/Kingdee_160_15.png",J="/blog/assets/Kingdee_160_16.png",K="/blog/assets/Kingdee_160_17.png",C="/blog/assets/Kingdee_160_18.png",D="/blog/assets/Kingdee_160_19.png",A="/blog/assets/Kingdee_160_20.png",N="/blog/assets/Kingdee_160_21.png",S="/blog/assets/Kingdee_160_22.png",I="/blog/assets/Kingdee_160_23.png",R="/blog/assets/Kingdee_160_24.png",E="/blog/assets/Kingdee_160_25.png",F="/blog/assets/Kingdee_160_26.png",Y="/blog/assets/Kingdee_160_27.png",U="/blog/assets/Kingdee_160_28.png",O="/blog/assets/Kingdee_160_29.png",T="/blog/assets/Kingdee_160_30.png",w="/blog/assets/Kingdee_160_31.png",B="/blog/assets/Kingdee_160_32.png",M="/blog/assets/Kingdee_160_33.png",V="/blog/assets/Kingdee_160_34.png",L={},P=u('<h1 id="云苍穹-配置接口" tabindex="-1"><a class="header-anchor" href="#云苍穹-配置接口" aria-hidden="true">#</a> 云苍穹-配置接口</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="苍穹自定义服务-又称接口或自定义api-实战" tabindex="-1"><a class="header-anchor" href="#苍穹自定义服务-又称接口或自定义api-实战" aria-hidden="true">#</a> 苍穹自定义服务(又称接口或自定义API)实战</h3><h3 id="配置接口" tabindex="-1"><a class="header-anchor" href="#配置接口" aria-hidden="true">#</a> 配置接口</h3><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>/app/kdgz_op_srm_demo/opSaveData</p></blockquote><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>opmq/adminadmin</p></blockquote><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="测试接口" tabindex="-1"><a class="header-anchor" href="#测试接口" aria-hidden="true">#</a> 测试接口</h3><blockquote><p>工具：postman</p></blockquote>',12),X={href:"https://dev.kdcloud.com/index/docsNew/6668c5c0-b547-4f55-8f74-cc6ea2f5c65c",target:"_blank",rel:"noopener noreferrer"},Z=u('<figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>&quot;appId&quot;: &quot;opmq&quot;, &quot;appSecuret&quot;: &quot;adminadmin&quot;,</p></blockquote><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>&quot;tenantid&quot;: &quot;cosmic-simple&quot;, &quot;accountId&quot;: &quot;679008189806542848&quot;,</p></blockquote><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="url地址" tabindex="-1"><a class="header-anchor" href="#url地址" aria-hidden="true">#</a> Url地址</h3>',6),j={href:"http://localhost:8080/ierp/api/getAppToken.do",target:"_blank",rel:"noopener noreferrer"},G=u(`<h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><div class="language-Json line-numbers-mode" data-ext="Json"><pre class="language-Json"><code>{
&quot;appId&quot;: &quot;opmq&quot;,
&quot;appSecuret&quot;: &quot;adminadmin&quot;,
&quot;tenantid&quot;: &quot;cosmic-simple&quot;,
&quot;accountId&quot;: &quot;679008189806542848&quot;,
&quot;language&quot;: &quot;zh_CN&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h3><div class="language-Json line-numbers-mode" data-ext="Json"><pre class="language-Json"><code>{
    &quot;data&quot;: {
        &quot;app_token&quot;: &quot;e82e435f-64a2-4267-86cb-c510735ac36a&quot;,
        &quot;success&quot;: true,
        &quot;error_desc&quot;: &quot;&quot;,
        &quot;expire_time&quot;: 1586940933265,
        &quot;error_code&quot;: &quot;0&quot;
    },
    &quot;state&quot;: &quot;success&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="url地址-1" tabindex="-1"><a class="header-anchor" href="#url地址-1" aria-hidden="true">#</a> url地址</h3>',6),W={href:"http://localhost:8080/ierp/api/login.do",target:"_blank",rel:"noopener noreferrer"},H=u(`<h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><div class="language-Json line-numbers-mode" data-ext="Json"><pre class="language-Json"><code>{
&quot;user&quot;: &quot;15208304216&quot;,
&quot;apptoken&quot;: &quot;e82e435f-64a2-4267-86cb-c510735ac36a&quot;,//换成上面得到的值
&quot;tenantid&quot;: &quot;cosmic-simple&quot;,
&quot;accountId&quot;: &quot;679008189806542848&quot;,
&quot;usertype&quot;: &quot;Mobile&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回-1" tabindex="-1"><a class="header-anchor" href="#返回-1" aria-hidden="true">#</a> 返回</h3><div class="language-Json line-numbers-mode" data-ext="Json"><pre class="language-Json"><code>{
    &quot;data&quot;: {
        &quot;access_token&quot;: &quot;D0N4aUBpbOvNpumi2M4r4zMCglJttF45R2e9WfY7tlBBk4YOq1YJXaUjL1I8Zs6sxabYdczNfbN7HmvTNIKfwhRvZxmfMapgkRi0NwYTVM8kCh4dESDEyr1UOR5KXtey&quot;,
        &quot;success&quot;: true,
        &quot;error_desc&quot;: &quot;&quot;,
        &quot;expire_time&quot;: 1586944778375,
        &quot;error_code&quot;: &quot;0&quot;
    },
    &quot;state&quot;: &quot;success&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试接口-1" tabindex="-1"><a class="header-anchor" href="#测试接口-1" aria-hidden="true">#</a> 测试接口</h3>`,5),$={href:"http://localhost:8080/ierp/kapi/app/kdgz_op_srm_demo/opSaveData",target:"_blank",rel:"noopener noreferrer"},Q=u('<figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Json line-numbers-mode" data-ext="Json"><pre class="language-Json"><code>{
	&quot;op_log&quot;: &quot;kdgz_interlog&quot;,
    &quot;op_config&quot;: &quot;kdgz_interconfig&quot;,
    &quot;op_columnConfig&quot;: &quot;K3.bd_materialgroup&quot;,
	&quot;FSOURCEID&quot;:&quot;1&quot;,
	&quot;fnumber&quot;:&quot;2&quot;,
	&quot;fname&quot;:&quot;3&quot;,
	&quot;Fdescription&quot;:&quot;4&quot;,
	&quot;fparentid&quot;:&quot;5&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Json line-numbers-mode" data-ext="Json"><pre class="language-Json"><code>{
    &quot;success&quot;: true,
    &quot;data&quot;: &quot;物料分类----更新成功&quot;,
    &quot;errorCode&quot;: &quot;success&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应收单传参" tabindex="-1"><a class="header-anchor" href="#应收单传参" aria-hidden="true">#</a> 应收单传参</h3><div class="language-Json line-numbers-mode" data-ext="Json"><pre class="language-Json"><code>{
	&quot;op_log&quot;: &quot;kdgz_interlog&quot;,
    &quot;op_config&quot;: &quot;kdgz_interconfig&quot;,
    &quot;op_columnConfig&quot;: &quot;K3.kdgz_ysd001&quot;,
    &quot;FSOURCEID&quot;:&quot;A005&quot;,
    &quot;foperatetype&quot;:&quot;A&quot;,
    &quot;billtypeid&quot;:&quot;0&quot;,
    &quot;billno&quot;:&quot;A004&quot;,
    &quot;bizdate&quot;:&quot;2020-04-16 00:00:00&quot;,
    &quot;duedate&quot;:&quot;2021-04-16 00:00:00&quot;,
    &quot;saleorgid&quot;:&quot;999&quot;,
    &quot;org&quot;:&quot;999&quot;,
    &quot;recorgid&quot;:&quot;999&quot;,
    &quot;billstatus&quot;:&quot;A&quot;,
    &quot;customer&quot;:&quot;Cus-000001&quot;,
    &quot;currencyid&quot;:&quot;CNY&quot;,
    &quot;pricetaxtotal2&quot;:&quot;99999&quot;,
    &quot;paycondid&quot;:&quot;001&quot;,
    &quot;saledeptid&quot;:&quot;&quot;,
    &quot;salesmanid&quot;:&quot;&quot;,
    &quot;setaccounttype&quot;:&quot;0&quot;,
    &quot;ischeckaccounts&quot;:&quot;0&quot;,
    &quot;bizpartner&quot;:&quot;001&quot;,
    &quot;checkbillno&quot;:&quot;001&quot;,
    &quot;remark&quot;:&quot;111&quot;,
    &quot;ispriceexcludetax&quot;:&quot;0&quot;,
    &quot;istaxprice&quot;:&quot;&quot;,
    &quot;creator&quot;:&quot;&quot;,
    &quot;auditor&quot;:&quot;&quot;,
    &quot;entries&quot;:[{
        &quot;FSOURCEENTRYID&quot;:&quot;001&quot;,
    	&quot;materialid&quot;:&quot;Item-00000001&quot;,
    	&quot;fMaterialname&quot;:&quot;软件&quot;,
    	&quot;Fmaterialmodel&quot;:&quot;1&quot;,
    	&quot;auxpropid&quot;:&quot;1&quot;,
    	&quot;priceunitid&quot;:&quot;1&quot;,
    	&quot;price&quot;:&quot;1&quot;,
    	&quot;expenseitemid&quot;:&quot;1&quot;,
    	&quot;priceqty&quot;:&quot;1&quot;,
    	&quot;pricetax&quot;:&quot;1&quot;,
    	&quot;taxrate&quot;:&quot;1&quot;,
    	&quot;discountmode&quot;:&quot;1&quot;,
        &quot;discountrate&quot;:&quot;1&quot;,
        &quot;discountamount&quot;:&quot;1&quot;,
    	&quot;notaxamount&quot;:&quot;1&quot;,
    	&quot;tax&quot;:&quot;1&quot;,
    	&quot;pricetaxtotal&quot;:&quot;1&quot;,
    	&quot;stockunitid&quot;:&quot;1&quot;,
    	&quot;stockqty&quot;:&quot;1&quot;,
    	&quot;salunitid&quot;:&quot;1&quot;,
    	&quot;salqty&quot;:&quot;1&quot;,
    	&quot;salbaseqty&quot;:&quot;1&quot;,
    	&quot;basicunit&quot;:&quot;1&quot;,
    	&quot;quanofpricba&quot;:&quot;1&quot;,
    	&quot;unitconvertrate&quot;:&quot;1&quot;,
    	&quot;costamount&quot;:&quot;1&quot;,
    	&quot;orderentryseq&quot;:&quot;1&quot;,
    	&quot;lotid&quot;:&quot;1&quot;,
    	&quot;settledamt&quot;:&quot;1&quot;,
    	&quot;ispresent&quot;:&quot;1&quot;
    }]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="入退退货单" tabindex="-1"><a class="header-anchor" href="#入退退货单" aria-hidden="true">#</a> 入退退货单</h3><div class="language-Json line-numbers-mode" data-ext="Json"><pre class="language-Json"><code>{
	&quot;op_log&quot;: &quot;kdgz_interlog&quot;,
    &quot;op_config&quot;: &quot;kdgz_interconfig&quot;,
    &quot;op_columnConfig&quot;: &quot;K3.pur_return&quot;,
    &quot;foperatetype&quot;:&quot;A&quot;,
    &quot;FSOURCEID&quot;:&quot;A005&quot;,
    &quot;billno&quot;:&quot;A005&quot;,
    &quot;billdate&quot;:&quot;2020-04-16 00:00:00&quot;,
    &quot;org&quot;:&quot;999&quot;,
    &quot;person&quot;:&quot;YWY000002&quot;,
    &quot;purorg&quot;:&quot;999&quot;,
    &quot;supplier&quot;:&quot;JD&quot;,
    &quot;contacter&quot;:&quot;&quot;,//协同业务员无法添加数据
    &quot;remark&quot;:&quot;111&quot;,
    &quot;sumamount&quot;:&quot;9999&quot;,
    &quot;sumtax&quot;:&quot;999&quot;,
    &quot;sumtaxamount&quot;:&quot;999&quot;,
    &quot;billstatus&quot;:&quot;C&quot;,
    &quot;cfmstatus&quot;:&quot;A&quot;,
    &quot;ischeck&quot;:&quot;0&quot;,
    &quot;chkbillno&quot;:&quot;&quot;,
    &quot;rettype&quot;:&quot;1&quot;,
    &quot;replenishtype&quot;:&quot;1&quot;,
    &quot;paycond&quot;:&quot;FKTJ03&quot;,
    &quot;settletype&quot;:&quot;JSFS01&quot;,
    &quot;curr&quot;:&quot;CNY&quot;,
    &quot;taxtype&quot;:&quot;1&quot;,
    &quot;loccurr&quot;:&quot;CNY&quot;,
    &quot;sumqty&quot;:&quot;999&quot;,
    &quot;exchtype&quot;:&quot;1.2&quot;,
    &quot;biztype&quot;:&quot;1&quot;,
    &quot;supaddr&quot;:&quot;2222&quot;,
    &quot;delisup&quot;:&quot;JD&quot;,
    &quot;invoicesup&quot;:&quot;JD&quot;,
    &quot;payeesup&quot;:&quot;JD&quot;,
    &quot;reqorg&quot;:&quot;999&quot;,
    &quot;settleorg&quot;:&quot;999&quot;,
    &quot;payorg&quot;:&quot;999&quot;,
    &quot;bizpartner&quot;:&quot;JD&quot;,
    &quot;entries&quot;:[{
    	&quot;FSOURCEENTRYID&quot;:&quot;001&quot;,
    	&quot;pobillno&quot;:&quot;001&quot;,
    	&quot;material&quot;:&quot;002&quot;,
    	&quot;materialdesc&quot;:&quot;111&quot;,
    	&quot;materialap&quot;:&quot;111&quot;,
    	&quot;unit&quot;:&quot;111&quot;,
    	&quot;qty&quot;:&quot;111&quot;,
    	&quot;replenishqty&quot;:&quot;111&quot;,
    	&quot;materialnew&quot;:&quot;002&quot;,
    	&quot;retreason&quot;:&quot;11&quot;,
    	&quot;price&quot;:&quot;11&quot;,
    	&quot;taxprice&quot;:&quot;11&quot;,
    	&quot;dctrate&quot;:&quot;11&quot;,
    	&quot;dctamount&quot;:&quot;11&quot;,
    	&quot;amount&quot;:&quot;11&quot;,
    	&quot;taxrate&quot;:&quot;11&quot;,
    	&quot;tax&quot;:&quot;11&quot;,
    	&quot;taxamount&quot;:&quot;11&quot;,
    	&quot;ispresent&quot;:&quot;1&quot;,
    	&quot;lot&quot;:&quot;&quot;,//批号无法添加数据
    	&quot;suplot&quot;:&quot;&quot;,
    	&quot;proddate&quot;:&quot;2020-04-16 00:00:00&quot;,
    	&quot;duedate&quot;:&quot;2020-04-16 00:00:00&quot;,
    	&quot;warehouse&quot;:&quot;&quot;,
    	&quot;entrysettleorg&quot;:&quot;999&quot;,
    	&quot;note&quot;:&quot;11&quot;,
    	&quot;purtype&quot;:&quot;PUR01_SYS&quot;,
    	&quot;entrystatu&quot;:&quot;A&quot;,
    	&quot;entryreqorg&quot;:&quot;999&quot;,
    	&quot;entrypurorg&quot;:&quot;999&quot;,
    	&quot;invorg&quot;:&quot;999&quot;,
    	&quot;entrypayorg&quot;:&quot;999&quot;,
    	&quot;settlesup&quot;:&quot;000&quot;,
    	&quot;basicunit&quot;:&quot;11&quot;,
    	&quot;basicqty&quot;:&quot;11&quot;,
    	&quot;asstunit&quot;:&quot;11&quot;,
    	&quot;asstqty&quot;:&quot;11&quot;,
    	&quot;pobillid&quot;:&quot;11&quot;,
    	&quot;poentryid&quot;:&quot;11&quot;
    }]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>成功参数</li></ul><div class="language-Json line-numbers-mode" data-ext="Json"><pre class="language-Json"><code>{
	&quot;op_log&quot;: &quot;kdgz_interlog&quot;,
    &quot;op_config&quot;: &quot;kdgz_interconfig&quot;,
    &quot;op_columnConfig&quot;: &quot;K3.pur_return&quot;,
    &quot;foperatetype&quot;:&quot;A&quot;,
    &quot;FSOURCEID&quot;:&quot;A006&quot;,
    &quot;billno&quot;:&quot;A005&quot;,
    &quot;billdate&quot;:&quot;2020-04-16 00:00:00&quot;,
    &quot;org&quot;:&quot;999&quot;,
    &quot;person&quot;:&quot;&quot;,
    &quot;purorg&quot;:&quot;999&quot;,
    &quot;supplier&quot;:&quot;JD&quot;,
    &quot;contacter&quot;:&quot;&quot;,
    &quot;remark&quot;:&quot;111&quot;,
    &quot;sumamount&quot;:&quot;9999&quot;,
    &quot;sumtax&quot;:&quot;999&quot;,
    &quot;sumtaxamount&quot;:&quot;999&quot;,
    &quot;billstatus&quot;:&quot;C&quot;,
    &quot;cfmstatus&quot;:&quot;A&quot;,
    &quot;ischeck&quot;:&quot;0&quot;,
    &quot;chkbillno&quot;:&quot;&quot;,
    &quot;rettype&quot;:&quot;1&quot;,
    &quot;replenishtype&quot;:&quot;1&quot;,
    &quot;paycond&quot;:&quot;&quot;,
    &quot;settletype&quot;:&quot;JSFS01&quot;,
    &quot;curr&quot;:&quot;CNY&quot;,
    &quot;taxtype&quot;:&quot;1&quot;,
    &quot;loccurr&quot;:&quot;CNY&quot;,
    &quot;sumqty&quot;:&quot;999&quot;,
    &quot;exchtype&quot;:&quot;&quot;,
    &quot;biztype&quot;:&quot;1&quot;,
    &quot;supaddr&quot;:&quot;2222&quot;,
    &quot;delisup&quot;:&quot;JD&quot;,
    &quot;invoicesup&quot;:&quot;JD&quot;,
    &quot;payeesup&quot;:&quot;JD&quot;,
    &quot;reqorg&quot;:&quot;999&quot;,
    &quot;settleorg&quot;:&quot;999&quot;,
    &quot;payorg&quot;:&quot;999&quot;,
    &quot;bizpartner&quot;:&quot;JD&quot;,
    &quot;entries&quot;:[{
    	&quot;FSOURCEENTRYID&quot;:&quot;001&quot;,
    	&quot;pobillno&quot;:&quot;001&quot;,
    	&quot;material&quot;:&quot;&quot;,
    	&quot;materialdesc&quot;:&quot;111&quot;,
    	&quot;materialap&quot;:&quot;111&quot;,
    	&quot;unit&quot;:&quot;111&quot;,
    	&quot;qty&quot;:&quot;111&quot;,
    	&quot;replenishqty&quot;:&quot;111&quot;,
    	&quot;materialnew&quot;:&quot;&quot;,
    	&quot;retreason&quot;:&quot;11&quot;,
    	&quot;price&quot;:&quot;11&quot;,
    	&quot;taxprice&quot;:&quot;11&quot;,
    	&quot;dctrate&quot;:&quot;11&quot;,
    	&quot;dctamount&quot;:&quot;11&quot;,
    	&quot;amount&quot;:&quot;11&quot;,
    	&quot;taxrate&quot;:&quot;11&quot;,
    	&quot;tax&quot;:&quot;11&quot;,
    	&quot;taxamount&quot;:&quot;11&quot;,
    	&quot;ispresent&quot;:&quot;1&quot;,
    	&quot;lot&quot;:&quot;&quot;,
    	&quot;suplot&quot;:&quot;&quot;,
    	&quot;proddate&quot;:&quot;2020-04-16 00:00:00&quot;,
    	&quot;duedate&quot;:&quot;2020-04-16 00:00:00&quot;,
    	&quot;warehouse&quot;:&quot;&quot;,
    	&quot;entrysettleorg&quot;:&quot;999&quot;,
    	&quot;note&quot;:&quot;11&quot;,
    	&quot;purtype&quot;:&quot;&quot;,
    	&quot;entrystatu&quot;:&quot;A&quot;,
    	&quot;entryreqorg&quot;:&quot;999&quot;,
    	&quot;entrypurorg&quot;:&quot;999&quot;,
    	&quot;invorg&quot;:&quot;999&quot;,
    	&quot;entrypayorg&quot;:&quot;999&quot;,
    	&quot;settlesup&quot;:&quot;000&quot;,
    	&quot;basicunit&quot;:&quot;11&quot;,
    	&quot;basicqty&quot;:&quot;11&quot;,
    	&quot;asstunit&quot;:&quot;11&quot;,
    	&quot;asstqty&quot;:&quot;11&quot;,
    	&quot;pobillid&quot;:&quot;11&quot;,
    	&quot;poentryid&quot;:&quot;11&quot;
    }]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="物料分类" tabindex="-1"><a class="header-anchor" href="#物料分类" aria-hidden="true">#</a> 物料分类</h3><div class="language-Json line-numbers-mode" data-ext="Json"><pre class="language-Json"><code>{
	&quot;op_log&quot;: &quot;kdgz_interlog&quot;,
    &quot;op_config&quot;: &quot;kdgz_interconfig&quot;,
    &quot;op_columnConfig&quot;: &quot;K3.bd_materialgroup&quot;,
    &quot;FSOURCEID&quot;:&quot;A005&quot;,
    &quot;fnumber&quot;:&quot;005&quot;,
    &quot;fname&quot;:&quot;name001&quot;,
    &quot;Fdescription&quot;:&quot;001&quot;,
    &quot;fparentid&quot;:&quot;test001&quot;,
    &quot;fenable&quot;:&quot;1&quot;,
    &quot;fstatus&quot;:&quot;C&quot;,
    &quot;fstandardid&quot;:&quot;730148448254487552&quot;,
    &quot;bizpartner&quot;:&quot;JD&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="收货通知-收料通知" tabindex="-1"><a class="header-anchor" href="#收货通知-收料通知" aria-hidden="true">#</a> 收货通知(收料通知)</h3><blockquote><p>需关闭页面插件</p></blockquote><div class="language-Json line-numbers-mode" data-ext="Json"><pre class="language-Json"><code>{
    &quot;op_log&quot;: &quot;kdgz_interlog&quot;,
    &quot;op_config&quot;: &quot;kdgz_interconfig&quot;,
    &quot;op_columnConfig&quot;: &quot;K3.PurReceiveBillMessage&quot;,
	&quot;Foperatetype&quot;: &quot;A&quot;,
	&quot;xksourceid&quot;: &quot;A006&quot;,
	&quot;billno&quot;: &quot;A007&quot;,
	&quot;billdate&quot;: &quot;2020-04-20 00:00:00&quot;,
	&quot;delidate&quot;: &quot;2020-04-20 00:00:00&quot;,
	&quot;deliaddress&quot;:&quot;&quot;,
	&quot;fsupplierid&quot;: &quot;486095512240421888&quot;,
	&quot;contacter&quot;: &quot;&quot;,
	&quot;org&quot;: &quot;999&quot;,
	&quot;frcvorgid&quot;:&quot;843381079359361024&quot;,
	&quot;person&quot;: &quot;&quot;,
	&quot;Remark&quot;: &quot; &quot;,
	&quot;sumamount&quot;: &quot;&quot;,
	&quot;sumtax&quot;: &quot;&quot;,
	&quot;sumtaxamount&quot;: &quot;&quot;,
	&quot;billstatus&quot;: &quot;C&quot;,
	&quot;supplierdeliverycode&quot;:&quot;&quot;,
	&quot;paycond&quot;:&quot;&quot;,
	&quot;settletype&quot;:&quot;&quot;,
	&quot;fcurrid&quot;:&quot;1&quot;,
	&quot;taxtype&quot;:&quot;&quot;,
	&quot;loccurr&quot;:&quot;1&quot;,
	&quot;fexchtypeid&quot;:&quot;&quot;,
	&quot;exchrate&quot;:&quot;1&quot;,
	&quot;biztype&quot;:&quot;1&quot;,
	&quot;sumqty&quot;:&quot;345&quot;,
	&quot;delisup&quot;:&quot;&quot;,
	&quot;invoicesup&quot;:&quot;&quot;,
	&quot;payeesup&quot;:&quot;&quot;,
	&quot;reqorg&quot;:&quot;&quot;,
	&quot;settleorg&quot;:&quot;&quot;,
	&quot;payorg&quot;:&quot;&quot;,
	&quot;creator&quot;:&quot;&quot;,
	&quot;createtime&quot;:&quot;&quot;,
    &quot;modifier&quot;:&quot;&quot;,
    &quot;modifytime&quot;:&quot;&quot;,
    &quot;auditor&quot;:&quot;&quot;,
    &quot;auditdate&quot;:&quot;&quot;,
    &quot;cfm&quot;:&quot;&quot;,
    &quot;cfmdate&quot;:&quot;&quot;,
    &quot;fcfmstatus&quot;:&quot;A&quot;,
    &quot;fbillstatus&quot;:&quot;A&quot;,
    &quot;bizpartner&quot;:&quot;&quot;,
    &quot;origin&quot;:&quot;&quot;,
	&quot;entries&quot;: [{
        &quot;FSOURCEENTRYID&quot;:&quot;001&quot;,
        &quot;pobillno&quot;:&quot;CGDD100.0219081400021&quot;,
        &quot;material&quot;:&quot;G10314947&quot;,
        &quot;materialdesc&quot;:&quot;&quot;,
        &quot;unit&quot;:&quot;&quot;,
        &quot;supmaterialid&quot;:&quot;&quot;,
        &quot;supmaterialname&quot;:&quot;&quot;,
        &quot;supmaterialmodel&quot;:&quot;&quot;,
        &quot;materialap&quot;:&quot;&quot;,
        &quot;orderqty&quot;:&quot;&quot;,
        &quot;remainqty&quot;:&quot;&quot;,
        &quot;qty&quot;:&quot;&quot;,
        &quot;entrydelidate&quot;:&quot;&quot;,
        &quot;deliaddr&quot;:&quot;&quot;,
        &quot;warehouse&quot;:&quot;&quot;,
        &quot;lot&quot;:&quot;&quot;,
        &quot;suplot&quot;:&quot;&quot;,
        &quot;proddate&quot;:&quot;&quot;,
        &quot;duedate&quot;:&quot;&quot;,
        &quot;price&quot;:&quot;&quot;,
        &quot;taxprice&quot;:&quot;&quot;,
        &quot;dctrate&quot;:&quot;&quot;,
        &quot;dctamount&quot;:&quot;&quot;,
        &quot;amount&quot;:&quot;&quot;,
        &quot;taxrate&quot;:&quot;&quot;,
        &quot;tax&quot;:&quot;&quot;,
        &quot;taxamount&quot;:&quot;&quot;,
        &quot;ispresent&quot;:&quot;&quot;,
        &quot;note&quot;:&quot;&quot;,
        &quot;entryreqorg&quot;:&quot;&quot;,
        &quot;entrypurorg&quot;:&quot;&quot;,
        &quot;entryrcvorg&quot;:&quot;&quot;,
        &quot;entrysettleorg&quot;:&quot;&quot;,
        &quot;entrypayorg&quot;:&quot;&quot;,
        &quot;entrystatus&quot;:&quot;&quot;,
        &quot;goods&quot;:&quot;002&quot;,
        &quot;sumoutstockqty&quot;:&quot;&quot;,
        &quot;sumreceiptqty&quot;:&quot;&quot;,
		&quot;locamount&quot;:&quot;&quot;,
		&quot;loctax&quot;:&quot;&quot;,
		&quot;loctaxamount&quot;:&quot;&quot;,
		&quot;actprice&quot;:&quot;&quot;,
		&quot;acttaxprice&quot;:&quot;&quot;,
		&quot;project&quot;:&quot;&quot;,
		&quot;trace&quot;:&quot;&quot;,
		&quot;basicunit&quot;:&quot;&quot;,
		&quot;basicqty&quot;:&quot;&quot;,
		&quot;asstunit&quot;:&quot;&quot;,
		&quot;asstqty&quot;:&quot;&quot;,
		&quot;pobillid&quot;:&quot;&quot;,
		&quot;poentryid&quot;:&quot;&quot;,
		&quot;pcbillno&quot;:&quot;&quot;,
		&quot;pcbillid&quot;:&quot;&quot;,
		&quot;pcentryid&quot;:&quot;&quot;,
		&quot;srcbilltype&quot;:&quot;&quot;,
		&quot;srcbillid&quot;:&quot;&quot;,
		&quot;srcentryid&quot;:&quot;&quot;
	}]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+J+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+D+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+R+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+F+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+Y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+U+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+O+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+T+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+M+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>云苍穹-配置接口</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',43);function tt(ut,ot){const o=l("ExternalLinkIcon");return q(),s("div",null,[d(" more "),P,t("p",null,[t("a",X,[i("参考地址"),n(o)])]),Z,t("blockquote",null,[t("p",null,[t("a",j,[i("http://localhost:8080/ierp/api/getAppToken.do"),n(o)])])]),G,t("blockquote",null,[t("p",null,[t("a",W,[i("http://localhost:8080/ierp/api/login.do"),n(o)])])]),H,t("blockquote",null,[t("p",null,[t("a",$,[i("http://localhost:8080/ierp/kapi/app/kdgz_op_srm_demo/opSaveData"),n(o)])])]),Q])}const nt=e(L,[["render",tt],["__file","kingdee160.html.vue"]]);export{nt as default};
