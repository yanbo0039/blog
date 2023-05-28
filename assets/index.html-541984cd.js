import{_ as i,X as n,Y as e,a1 as t,a0 as a}from"./framework-68dd73a2.js";const s="/blog/assets/Kingdee_10_1.png",g="/blog/assets/Kingdee_10_2.png",o="/blog/assets/Kingdee_10_3.png",l="/blog/assets/Kingdee_10_4.png",r="/blog/assets/Kingdee_10_5.png",d="/blog/assets/Kingdee_10_6.png",c="/blog/assets/Kingdee_10_7.png",p="/blog/assets/Kingdee_10_8.png",_="/blog/assets/Kingdee_10_9.png",f="/blog/assets/Kingdee_10_10.png",m="/blog/assets/Kingdee_10_11.png",u="/blog/assets/Kingdee_10_12.png",b="/blog/assets/Kingdee_10_13.png",v="/blog/assets/Kingdee_10_14.png",x="/blog/assets/Kingdee_10_15.png",y="/blog/assets/Kingdee_10_16.png",z="/blog/assets/Kingdee_10_17.png",K="/blog/assets/Kingdee_10_18.png",h="/blog/assets/Kingdee_10_19.png",S="/blog/assets/Kingdee_10_20.png",I="/blog/assets/Kingdee_10_21.png",N="/blog/assets/Kingdee_10_22.png",B="/blog/assets/Kingdee_10_23.png",E="/blog/assets/Kingdee_10_24.png",T="/blog/assets/Kingdee_10_25.png",k="/blog/assets/Kingdee_10_26.png",q="/blog/assets/Kingdee_10_27.png",D="/blog/assets/Kingdee_10_28.png",J="/blog/assets/Kingdee_10_29.png",L="/blog/assets/Kingdee_10_30.png",M={},O=a('<h1 id="_10-如何制作si类基础资料-st模板-md" tabindex="-1"><a class="header-anchor" href="#_10-如何制作si类基础资料-st模板-md" aria-hidden="true">#</a> 10-如何制作SI类基础资料(ST模板).md</h1><ol><li>找到ST钢铁模板并解压</li></ol><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>复制metadata下的st到对应的路径</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>复制src下的st到对应的路径</li></ol><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>切换到业务视图发布钢铁元数据</li></ol><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>新建基础资料业务单元</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>找到扩展属性区域点击增加按扭</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li>保存后发布</li></ol><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="8"><li>业务逻辑代码编写及调整</li></ol><figure><img src="'+K+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
    *  (non-Javadoc)
    *  是否需要导入导出功能，默认为否
    * @see com.kingdee.eas.st.common.client.STBaseDataListUI#isNeedImportAndExport()
 */
@Override
protected boolean isNeedImportAndExport() {
    return false;
}

/**
    * (non-Javadoc)
    * 是否需要合并表头
    * @see com.kingdee.eas.st.common.client.STBaseDataListUI#isNeedMergeHeader()
    */
@Override
protected boolean isNeedMergeHeader() {
    return true;
}

/**
    *  (non-Javadoc)
    *  返回方案编码，可任意取，但最后一个点后为引入引出模板编码，将用于查询我们第一步新增的引入引出模板。
    *  @return 导入导出模板编码
    * @see com.kingdee.eas.st.common.client.STBaseDataListUI#getImportExportSolutionNumber()
    */
@Override
protected String getImportExportSolutionNumber() {
    MsgBox.showWarning(this,&quot;请重写getImportExportSolutionNumber方法,返回导入导出模板编码!&quot;);
    return &quot;&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>挂菜单测试</li></ol><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+T+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+D+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+J+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>如何制作SI类基础资料(ST模板)?</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',46);function U(A,H){return n(),e("div",null,[t(" more "),O])}const w=i(M,[["render",U],["__file","index.html.vue"]]);export{w as default};
