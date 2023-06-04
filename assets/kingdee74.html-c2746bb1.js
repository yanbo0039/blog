import{_ as t,X as l,Y as s,a1 as a,Z as i,$ as e,a2 as r,a0 as d,F as o}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_74_1.png",v="/blog/assets/Kingdee_74_2.png",p="/blog/assets/Kingdee_74_3.png",u="/blog/assets/Kingdee_74_4.png",m="/blog/assets/Kingdee_74_5.png",b="/blog/assets/Kingdee_74_6.png",g="/blog/assets/Kingdee_74_7.png",_={},f={id:"_74-金蝶云苍穹子卡片分录案例-md",tabindex:"-1"},y=i("a",{class:"header-anchor",href:"#_74-金蝶云苍穹子卡片分录案例-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--74--dj9ds8b3yhnzch6yxqiukxgezi0v4xyfpoeu0b.md",target:"_blank",rel:"noopener noreferrer"},k=d('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li>新建单据模板类型单据</li></ol><blockquote><p>编码 zkpfl</p></blockquote><blockquote><p>名称子卡片分录案例1</p></blockquote><ol start="2"><li><p>在内容区添加高级面板</p></li><li><p>在高级面板子容器中添加单据体</p></li><li><p>在单据体中添加字段物料、计量单位</p></li><li><p>再次在内容区中添加高级面板，并在其子容器中添加子卡片分录</p></li><li><p>在子卡片中添加一个文本字段更改名称为供应商后添加一个日期字段</p></li><li><p>将子卡片分录案例1的表名设置为 t_op_zkpf1</p></li><li><p>设置第一个单据体的表名为 t_op_zkpf1_entity</p></li><li><p>设置第二个单据体的表名为 t_op_zkpf1_entity_entry 并将其父单据体属性设置为单据体</p></li><li><p>将第一个高级面板名称更改为 单据体</p></li><li><p>将第二个高级面板名称更改为 子卡片分录</p></li><li><p>将单据体的工具栏项更改为新增分录与删除分录以及将其操作代码配置好后保存</p></li><li><p>将子单据体的工具栏项更改为新增子单据体与删除子单据体以及将其操作代码配置好后保存</p></li></ol><blockquote><p>备注： 在设置新增子单据与删除子单据操作代码时在其参数设置里的操作参数应该更改为<strong>子单据体</strong>，为了加以区分将其命名后加个1 例:newentry1 其名称也应更改为新增子单据或删除子单据</p></blockquote><ol start="14"><li><p>将附件隐藏后管理员登录将其配置权限</p></li><li><p>在工具栏中新增一按钮命名为测试</p></li><li><p>保存后预览测试向其添加数据后保存不作提交</p></li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="17"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.report.debug.demo;

import java.util.EventObject;

import kd.bos.bill.AbstractBillPlugIn;
import kd.bos.dataentity.entity.DynamicObject;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.entity.datamodel.IEntryOperate;
import kd.bos.form.control.events.ItemClickEvent;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月12日
 * see_to_overridden
 * @version 1.0
 */
public class PurRequestBill extends AbstractBillPlugIn {

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月12日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.bill.AbstractBillPlugIn#registerListener(java.util.EventObject)
	 * @version 1.0
	 */
	@Override
	public void registerListener(EventObject e) {
		super.registerListener(e);
//		this.addItemClickListeners(&quot;toolbarap&quot;);//添加工具栏的监听事件
		this.addItemClickListeners(&quot;tbmain&quot;);//添加工具栏的监听事件
	}
	
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月12日
	 * @param param the bare_field_name
	 * @param evt
	 * @see kd.bos.form.plugin.AbstractFormPlugin#itemClick(kd.bos.form.control.events.ItemClickEvent)
	 * @version 1.0
	 */
	@Override
	public void itemClick(ItemClickEvent evt) {
		String key = evt.getItemKey();//弄到点击按钮的标识
		if(StringUtils.equals(key, &quot;baritemap&quot;)) {
			IEntryOperate entryOperate = this.getModel();
			entryOperate.setEntryCurrentRowIndex(&quot;subentryentity&quot;, 1);//指定父行号(必须)
			DynamicObject subRowObj = entryOperate.getEntryRowEntity(&quot;subentryentity&quot;, 1);//批定行数据包
			entryOperate.getEntryEntity(&quot;subentryentity&quot;);
			System.out.println(subRowObj);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="18"><li><p>重启服务后注册插件</p></li><li><p>打断点</p></li></ol><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="20"><li>从列表界面进入</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="21"><li>点击测试按钮进入断点F6下一步</li></ol><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="22"><li>如下图所示能够取到数据，则测试成功</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>金蝶云苍穹子卡片分录案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',24);function x(q,C){const n=o("ExternalLinkIcon");return l(),s("div",null,[a(" more "),i("h1",f,[y,e(),i("a",h,[e("74-金蝶云苍穹子卡片分录案例.md"),r(n)])]),k])}const O=t(_,[["render",x],["__file","kingdee74.html.vue"]]);export{O as default};
