import{_ as n,X as t,Y as s,a1 as a,Z as i,$ as e,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_81_1.png",o="/blog/assets/Kingdee_81_2.png",m="/blog/assets/Kingdee_81_1.gif",u="/blog/assets/Kingdee_81_2.gif",b={},g={id:"_81-金蝶云苍穹单据列表插件billclosedcallback事件案例-md",tabindex:"-1"},p=i("a",{class:"header-anchor",href:"#_81-金蝶云苍穹单据列表插件billclosedcallback事件案例-md","aria-hidden":"true"},"#",-1),k={href:"http://xn--81-billClosedCallBack-3227aod03ita889amtxngitm0k0pcdy6cdw5jfp9b4d7ag6gvu5g.md",target:"_blank",rel:"noopener noreferrer"},C=r('<ol><li><p>新建带组织模板的单据</p></li><li><p>添一个文本字段在基本信息里，将其名称更改为文本1将其标识更改为textfield1</p></li><li><p>管理员账户登录授权后切换普通用户登录预览后添加数据，最好添加多条数据。</p></li><li><p>进入列表视图，将文本1添加进表格视图，并开启显示为超链</p></li></ol><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.bill.plugin;

import kd.bos.bill.BillShowParameter;
import kd.bos.bill.OperationStatus;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.CloseCallBack;
import kd.bos.form.ShowType;
import kd.bos.form.events.ClosedCallBackEvent;
import kd.bos.form.events.HyperLinkClickArgs;
import kd.bos.list.events.BillClosedCallBackEvent;
import kd.bos.list.plugin.AbstractListPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月10日
 * @version 1.0
 */
public class BillClosedCallBackSample extends AbstractListPlugin {
	private final static String KEY_TEXTFIELD1 = &quot;textfield1&quot;;

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 用户点击超链接单元格时，触发此事件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月10日
	 * @param param the bare_field_name
	 * @param args
	 * @see kd.bos.list.plugin.IListPlugin#billListHyperLinkClick(kd.bos.form.events.HyperLinkClickArgs)
	 * @version 1.0
	 */
	@Override
	public void billListHyperLinkClick(HyperLinkClickArgs args) {
		if (StringUtils.equals(KEY_TEXTFIELD1,  args.getHyperLinkClickEvent().getFieldName())){
			// 当前点击的是文本1
			
			// 取消系统自动打开本单的处理
			args.setCancel(true);
			
			// 打开物料新增界面
			BillShowParameter showParameter = new BillShowParameter();
			showParameter.setFormId(&quot;bd_material&quot;);
			showParameter.getOpenStyle().setShowType(ShowType.Modal);
			showParameter.setStatus(OperationStatus.ADDNEW);
			
			CloseCallBack closeCallBack = new CloseCallBack(this, KEY_TEXTFIELD1);
			showParameter.setCloseCallBack(closeCallBack);
			
			this.getView().showForm(showParameter);
		}
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 单据界面关闭时，触发本事件，传入单据内码
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月10日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.list.plugin.IListPlugin#billClosedCallBack(kd.bos.list.events.BillClosedCallBackEvent)
	 * @version 1.0
	 */
	@Override
	public void billClosedCallBack(BillClosedCallBackEvent e) {
		
		if (StringUtils.equals(KEY_TEXTFIELD1, e.getCloseCallBack().getActionId())){
			// 自定义的物料新增界面返回
			long materialId = (long)e.getPkId();
			this.getView().showMessage(String.format(&quot;事件 billClosedCallBack，可以收到系统自动打包的子界面内码%d&quot;, materialId));
		}
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 单据界面关闭时，也会触发本事件；但是默认不带数据返回
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月10日
	 * @param param the bare_field_name
	 * @param closedCallBackEvent
	 * @see kd.bos.form.plugin.AbstractFormPlugin#closedCallBack(kd.bos.form.events.ClosedCallBackEvent)
	 * @version 1.0
	 */
	@Override
	public void closedCallBack(ClosedCallBackEvent closedCallBackEvent) {
		if (StringUtils.equals(KEY_TEXTFIELD1, closedCallBackEvent.getActionId())){
			// 自定义的物料新增界面返回
			Object returnData = closedCallBackEvent.getReturnData();
//			this.getView().showMessage(String.format(&quot;事件 closedCallBack，只能收到子界面主动返回给列表界面的数据%s&quot;, returnData));
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>重启服务后注册插件</li></ol><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li>保存之后预览测试</li></ol><blockquote><p>方法体内弹窗代码如下时运行效果</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>this.getView().showMessage(String.format(&quot;事件 billClosedCallBack，可以收到系统自动打包的子界面内码%d&quot;, materialId));
//			this.getView().showMessage(String.format(&quot;事件 closedCallBack，只能收到子界面主动返回给列表界面的数据%s&quot;, returnData));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>方法体内弹窗代码如下时运行效果</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//			this.getView().showMessage(String.format(&quot;事件 billClosedCallBack，可以收到系统自动打包的子界面内码%d&quot;, materialId));
this.getView().showMessage(String.format(&quot;事件 closedCallBack，只能收到子界面主动返回给列表界面的数据%s&quot;, returnData));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹单据列表插件billClosedCallBack事件案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',18);function _(h,f){const l=v("ExternalLinkIcon");return t(),s("div",null,[a(" more "),i("h1",g,[p,e(),i("a",k,[e("81-金蝶云苍穹单据列表插件billClosedCallBack事件案例.md"),d(l)])]),C])}const E=n(b,[["render",_],["__file","81-金蝶云苍穹单据列表插件billClosedCallBack事件案例.html.vue"]]);export{E as default};
