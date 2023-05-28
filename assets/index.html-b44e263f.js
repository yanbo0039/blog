import{_ as t,X as a,Y as l,a1 as s,Z as i,$ as e,a2 as r,a0 as d,F as o}from"./framework-68dd73a2.js";const g="/blog/assets/Kingdee_53_1.png",c="/blog/assets/Kingdee_53_2.png",v="/blog/assets/Kingdee_53_3.png",u="/blog/assets/Kingdee_53_4.png",p="/blog/assets/Kingdee_53_5.png",m="/blog/assets/Kingdee_53_6.png",b="/blog/assets/Kingdee_53_7.png",_="/blog/assets/Kingdee_53_8.png",f="/blog/assets/Kingdee_53_9.png",h="/blog/assets/Kingdee_53_10.png",y="/blog/assets/Kingdee_53_11.png",x="/blog/assets/Kingdee_53_12.png",z="/blog/assets/Kingdee_53_13.png",K="/blog/assets/Kingdee_53_14.png",k="/blog/assets/Kingdee_53_15.png",C="/blog/assets/Kingdee_53_16.png",E="/blog/assets/Kingdee_53_17.png",w={},N={id:"_53-金蝶云苍穹树形单据体创建及插件的简单使用-md",tabindex:"-1"},O=i("a",{class:"header-anchor",href:"#_53-金蝶云苍穹树形单据体创建及插件的简单使用-md","aria-hidden":"true"},"#",-1),T={href:"http://xn--53--dj9d3r4rvj97py6cda99j673fsdbp46a8mby20b7p6c5dfvyvv0ebr0c3ovco8c.md",target:"_blank",rel:"noopener noreferrer"},j=d('<h4 id="树形单据体介绍" tabindex="-1"><a class="header-anchor" href="#树形单据体介绍" aria-hidden="true">#</a> 树形单据体介绍</h4><ol><li><p>单据体，用来在界面上显示、录入多行多列数据。</p></li><li><p>树形单据体与单据体的不同之处在于，树形单据体中的数据行之间， 可以设置父子从属关系，形成树形结构。</p></li></ol><h4 id="树形单据体创建" tabindex="-1"><a class="header-anchor" href="#树形单据体创建" aria-hidden="true">#</a> 树形单据体创建</h4><ol><li>通过模板创建单据带组织模板单据</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>选中单据体添加高级面板</li></ol><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>选中高级面板子容器，插入树形单据体</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>按如下步骤设置工具栏</li></ol><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>设置树形单据体表名t_treebill_entry</li></ol><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="树形单据体功能" tabindex="-1"><a class="header-anchor" href="#树形单据体功能" aria-hidden="true">#</a> 树形单据体功能</h4><ol><li>添加字段</li></ol><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>开启显示序号列和显示选择列</li></ol><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>保存并授权</li></ol><blockquote><p>退出当前账号，administrator/1234567登录 路径:应用--&gt; 基础服务 --&gt; 权限管理 --&gt; 用户授权 --&gt;选择自己的用户 --&gt; 直接授权 --&gt; 选择自己的云添加到已分配的云中 --&gt; 保存</p></blockquote><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>自己账户登录预览并测试效果</li></ol><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+K+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="树形单据体的控件编程模型" tabindex="-1"><a class="header-anchor" href="#树形单据体的控件编程模型" aria-hidden="true">#</a> 树形单据体的控件编程模型</h4><ol><li>使用Eclipse工具新建插件类 TreeBillPlugin 并继承 AbstractFormPlugin</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
package kd.bos.form.plugin;

/**  
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月3日
 * @return the bare_field_name
 * @version 1.0
 */  
public class TreeBillPlugin extends AbstractFormPlugin {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>复制类的全路径注册插件</li></ol><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>设置并保存树形单据体表名为 t_treebill</li></ol><figure><img src="'+C+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.form.plugin;

import java.util.EventObject;

import kd.bos.entity.datamodel.IEntryOperate;
import kd.bos.form.control.TreeEntryGrid;

/**  
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    树形单据体插件
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月3日
 * @return the bare_field_name
 * @version 1.0
 */  
public class TreeBillPlugin extends AbstractFormPlugin {
	
	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: afterCreateNewData&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月3日
	 * @param e
	 * @see kd.bos.entity.datamodel.events.IDataModelListener#afterCreateNewData(java.util.EventObject)
	 */
	@Override
	public void afterCreateNewData(EventObject e) {
		super.afterCreateNewData(e);
		
		IEntryOperate entryOperate = this.getModel();
		int row = entryOperate.createNewEntryRow(&quot;treeentryentity&quot;);//增加空行
		int rows = entryOperate.insertEntryRow(&quot;treeentryentity&quot;, row);//增加子行
		
		TreeEntryGrid entryGrid = this.getView().getControl(&quot;treeentryentity&quot;);
		entryGrid.setCollapse(true);//设置是否折叠，默认是true折叠
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>最终效果</li></ol><figure><img src="`+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹树形单据体创建及插件的简单使用</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',44);function q(D,J){const n=o("ExternalLinkIcon");return a(),l("div",null,[s(" more "),i("h1",N,[O,e(),i("a",T,[e("53-金蝶云苍穹树形单据体创建及插件的简单使用.md"),r(n)])]),j])}const P=t(w,[["render",q],["__file","index.html.vue"]]);export{P as default};
