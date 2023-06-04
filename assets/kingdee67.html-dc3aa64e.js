import{_ as t,X as a,Y as l,a1 as s,Z as e,$ as i,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_67_1.png",o="/blog/assets/Kingdee_67_1.gif",u={},m={id:"_67-金蝶云苍穹动态表单插件aftercreatenewdata事件案例-md",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#_67-金蝶云苍穹动态表单插件aftercreatenewdata事件案例-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--67-afterCreateNewData-3227aod03ita889ah02aoke4t0jq6xadw4adw5jfp9b4d7af6gwu5g.md",target:"_blank",rel:"noopener noreferrer"},g=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li><p>新建对话框模板动态表单</p></li><li><p>在内容区添加单据体后添加整数控件并更改标识为integerfieldap1后保存</p></li></ol><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>新建插件类并进行编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.dynamicform.plugin;

import java.util.EventObject;

import kd.bos.form.plugin.AbstractFormPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    afterCreateNewData 事件 试验
 *    
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月6日
 * @version 1.0
 */
public class AfterCreateNewDataSample extends AbstractFormPlugin {

	private final static String KEY_ENTRYENTITY = &quot;entryentity&quot;;//单据体控件
	private final static String KEY_INTEGERFIELD1 = &quot;integerfieldap1&quot;;//整数控件

	/**
	 * &lt;p&gt;Title: afterCreateNewData&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    界面初始化或刷新，新建表单数据包成功，并给字段填写了默认值之后，触发此事件；
	 *    插件可以在此事件，重设字段的默认值。
	 *    部分字段的默认值难以通过设计器配置出来，如需要计算的值、
	 *    根据系统参数选项决定的值，必须写插件实现。
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.datamodel.events.IDataModelListener#afterCreateNewData(java.util.EventObject)
	 * @version 1.0
	 */
	@Override
	public void afterCreateNewData(EventObject e) {
		int rowCount = this.getModel().getEntryRowCount(KEY_ENTRYENTITY);
		if (rowCount &lt; 10){
			// 给单据体补足10行
			this.getModel().batchCreateNewEntryRow(KEY_ENTRYENTITY, 10 - rowCount);
			rowCount = 10;
		}
		
		// 逐行给整数字段设置默认值
		for(int row = 0; row &lt; rowCount ; row++){
			int fldValue = row + 1;
			this.getModel().setValue(KEY_INTEGERFIELD1, fldValue, row);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>debug重启DebugServer后注册插件并对其进行预览测试，如图所示测试成功</li></ol><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>金蝶云苍穹动态表单插件afterCreateNewData事件案例</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p></div>',11);function f(_,h){const n=v("ExternalLinkIcon");return a(),l("div",null,[s(" more "),e("h1",m,[b,i(),e("a",p,[i("67-金蝶云苍穹动态表单插件afterCreateNewData事件案例.md"),d(n)])]),g])}const E=t(u,[["render",f],["__file","kingdee67.html.vue"]]);export{E as default};
