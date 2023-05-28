import{_ as t,X as l,Y as s,a1 as d,Z as i,$ as e,a2 as r,a0 as a,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_68_1.png",m="/blog/assets/Kingdee_68_1.gif",o={},u={id:"_68-金蝶云苍穹动态表单插件itemclick事件案例-md",tabindex:"-1"},b=i("a",{class:"header-anchor",href:"#_68-金蝶云苍穹动态表单插件itemclick事件案例-md","aria-hidden":"true"},"#",-1),g={href:"http://xn--68-itemClick-eb6skcv7fka74ws5v67cy75gi0qgow3t9g60wbdmya6ofg77e.md",target:"_blank",rel:"noopener noreferrer"},p=a('<ol><li><p>新建动态表单空白页面</p></li><li><p>向其添加工具栏并更改标识为tbar_main，将工具栏的第一个按钮标识更改为baritem_hello并将其名称更改为按钮;向动态表单空白页面添加一文本将其标识更改为name将其名称更改为按钮</p></li></ol><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>新建插件类并进行编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.dynamicform.plugin;

import java.util.EventObject;

import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.control.events.BeforeItemClickEvent;
import kd.bos.form.control.events.ItemClickEvent;
import kd.bos.form.plugin.AbstractFormPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    itemClick 事件 试验
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月6日
 * @version 1.0
 */
public class ItemClickSample extends AbstractFormPlugin {

	private final static String KEY_MAINBAR = &quot;tbar_main&quot;;//工具栏
	private final static String KEY_BARITEM_HELLO = &quot;baritem_hello&quot;;//工具栏中的按钮
	private final static String KEY_NAME = &quot;name&quot;;//文本
	
	/**
	 * &lt;p&gt;Title: registerListener&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.form.plugin.AbstractFormPlugin#registerListener(java.util.EventObject)
	 * @version 1.0
	 */
	@Override
	public void registerListener(EventObject e) {
		super.registerListener(e);
		// 侦听主菜单按钮点击事件
		this.addItemClickListeners(KEY_MAINBAR);
	}

	/**
	 * &lt;p&gt;Title: beforeItemClick&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param evt
	 * @see kd.bos.form.control.events.ItemClickListener#beforeItemClick(kd.bos.form.control.events.BeforeItemClickEvent)
	 * @version 1.0
	 */
	@Override
	public void beforeItemClick(BeforeItemClickEvent evt) {
		if (StringUtils.equals(KEY_BARITEM_HELLO, evt.getItemKey())){
			String youName = (String)this.getModel().getValue(KEY_NAME);
			if (StringUtils.isBlank(youName)){
				this.getView().showMessage(&quot;hello, who are you?&quot;);
				evt.setCancel(true);	// 取消后续操作
			}
		}
	}

	/**
	 * &lt;p&gt;Title: itemClick&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    用户点击菜单项时，触发此事件；
	 *    插件可以在此响应自定义菜单项的点击处理。
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param evt
	 * @see kd.bos.form.plugin.AbstractFormPlugin#itemClick(kd.bos.form.control.events.ItemClickEvent)
	 * @version 1.0
	 */
	@Override
	public void itemClick(ItemClickEvent evt) {
		super.itemClick(evt);
		if (StringUtils.equals(KEY_BARITEM_HELLO, evt.getItemKey())){
			String youName = (String)this.getModel().getValue(KEY_NAME);
			this.getView().showMessage(&quot;hello, &quot; + youName + &quot;!&quot;);
		}
	}	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>debug重启DebugServer后注册插件并预览测试，如下图所示测试成功</li></ol><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹动态表单插件itemClick事件案例</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',11);function _(f,h){const n=v("ExternalLinkIcon");return l(),s("div",null,[d(" more "),i("h1",u,[b,e(),i("a",g,[e("68-金蝶云苍穹动态表单插件itemClick事件案例.md"),r(n)])]),p])}const C=t(o,[["render",_],["__file","kingdee68.html.vue"]]);export{C as default};
