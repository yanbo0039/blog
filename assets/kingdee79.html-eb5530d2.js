import{_ as t,X as l,Y as s,a1 as d,Z as i,$ as e,a2 as r,a0 as a,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_79_1.png",m="/blog/assets/Kingdee_79_1.gif",o={},b={id:"_79-金蝶云苍穹标准单据列表插件itemclick事件案例-md",tabindex:"-1"},u=i("a",{class:"header-anchor",href:"#_79-金蝶云苍穹标准单据列表插件itemclick事件案例-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--79-itemClick-eb6skcv7fka74wkxp8pbyzmvw2h51bv96bcnb5x8w0izbjk0a3sf0t0f.md",target:"_blank",rel:"noopener noreferrer"},g=a('<ol><li><p>新建带组织模板单据</p></li><li><p>设置表名后保存后预览可以添加几条数据</p></li><li><p>管理员用户登录后将其授权</p></li><li><p>进入列表界面列表工具栏添加两按钮，一个命名为btnmodify 另一个命名为baritemap1，名称与标识保持一致</p></li></ol><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.bill.plugin;

import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.control.events.BeforeItemClickEvent;
import kd.bos.form.control.events.ItemClickEvent;
import kd.bos.list.plugin.AbstractListPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月10日
 * see_to_overridden
 * @version 1.0
 */
public class ItemClickSample extends AbstractListPlugin {
	private final static String KEY_BARITEM_MODIFY = &quot;btnmodify&quot;;//自定义按钮
	private final static String KEY_BARITEM1 = &quot;baritemap1&quot;;//新增的按钮
	
	/**
	 * &lt;p&gt;Title: beforeItemClick&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 用户点击主菜单按钮时，触发此事件
	 * @remark
	 * 插件可以在此事件，检查选中的列表数据，取消按钮绑定操作执行
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月10日
	 * @param param the bare_field_name
	 * @param evt
	 * @see kd.bos.form.control.events.ItemClickListener#beforeItemClick(kd.bos.form.control.events.BeforeItemClickEvent)
	 * @version 1.0
	 */
	@Override
	public void beforeItemClick(BeforeItemClickEvent evt) {
		if (StringUtils.equals(KEY_BARITEM_MODIFY, evt.getItemKey())){
			// 取消修改操作的执行
			this.getView().showMessage(&quot;修改菜单的功能，被插件取消了！&quot;);
			evt.setCancel(true);
		}
	}

	/**
	 * &lt;p&gt;Title: itemClick&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 用户点击主菜单按钮时，触发此事件
	 * @remark
	 * 插件可以在此事件中，实现自定义按钮的逻辑处理
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月10日
	 * @param param the bare_field_name
	 * @param evt
	 * @see kd.bos.form.plugin.AbstractFormPlugin#itemClick(kd.bos.form.control.events.ItemClickEvent)
	 * @version 1.0
	 */
	@Override
	public void itemClick(ItemClickEvent evt) {
		if (StringUtils.equals(KEY_BARITEM1, evt.getItemKey())){
			this.getView().showMessage(String.format(&quot;您点击了菜单项 %s&quot;, evt.getItemKey()));
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>重启服务后在列表界面注册插件后预览测试效果，如下图所示，测试成功</li></ol><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹标准单据列表插件itemClick事件案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',11);function _(f,k){const n=v("ExternalLinkIcon");return l(),s("div",null,[d(" more "),i("h1",b,[u,e(),i("a",p,[e("79-金蝶云苍穹标准单据列表插件itemClick事件案例.md"),r(n)])]),g])}const C=t(o,[["render",_],["__file","kingdee79.html.vue"]]);export{C as default};
