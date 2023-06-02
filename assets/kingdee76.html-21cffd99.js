import{_ as t,X as s,Y as l,a1 as r,Z as e,$ as i,a2 as a,a0 as d,F as v}from"./framework-68dd73a2.js";const o="/blog/assets/Kingdee_76_1.png",c="/blog/assets/Kingdee_76_2.png",m={},u={id:"_76-金蝶云苍穹动态表单插件beforedooperation事件案例-md",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#_76-金蝶云苍穹动态表单插件beforedooperation事件案例-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--76-beforeDoOperation-8r65ajd83isa938aqy1aqfegt6itexapw3ac31jiy7b1e6aizg262g.md",target:"_blank",rel:"noopener noreferrer"},g=d('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li><p>新建空白动态表单</p></li><li><p>添加一个按钮</p></li><li><p>为其添加事件后保存</p></li></ol><blockquote><p>以关闭事件为例，将其操作代码项更改为pay</p></blockquote><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.dynamicform.plugin;

import kd.bos.dataentity.OperateOption;
import kd.bos.dataentity.RefObject;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.ConfirmCallBackListener;
import kd.bos.form.ConfirmTypes;
import kd.bos.form.MessageBoxOptions;
import kd.bos.form.MessageBoxResult;
import kd.bos.form.events.BeforeDoOperationEventArgs;
import kd.bos.form.events.MessageBoxClosedEvent;
import kd.bos.form.operate.FormOperate;
import kd.bos.form.plugin.AbstractFormPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    beforeDoOperation事件 试验 
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月6日
 * see_to_overridden
 * @version 1.0
 */
public class BeforeDoOperationSample extends AbstractFormPlugin {

	private final static String KEY_PAY = &quot;pay&quot;;
	private final static String OPPARAM_AFTERCONFIRM = &quot;afterconfirm&quot;;
	
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 执行操作前，触发此事件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param args
	 * @see kd.bos.form.plugin.AbstractFormPlugin#beforeDoOperation(kd.bos.form.events.BeforeDoOperationEventArgs)
	 * @version 1.0
	 */ 
	@Override
	public void beforeDoOperation(BeforeDoOperationEventArgs args) {
		super.beforeDoOperation(args);
		
		FormOperate operate = (FormOperate)args.getSource();
		if (StringUtils.equals(operate.getOperateKey(), KEY_PAY)){
			// 付款操作
			
			// 尝试读取操作自定义参数：判断是否确认后再次执行付款操作
			RefObject&lt;String&gt; afterConfirm = new RefObject&lt;&gt;();
			if (!operate.getOption().tryGetVariableValue(OPPARAM_AFTERCONFIRM, afterConfirm)){
				// 自定义操作参数中，没有afterconfirm参数：说明是首次执行付款操作，需要提示用户确认

				// 显示确认消息
				ConfirmCallBackListener confirmCallBacks = new ConfirmCallBackListener(KEY_PAY, this);
				String confirmTip = &quot;您确认要付款给xxx?&quot;;
				this.getView().showConfirm(confirmTip, MessageBoxOptions.YesNo, ConfirmTypes.Default, confirmCallBacks);

				// 在没有确认之前，先取消本次操作
				args.setCancel(true);
			}

			// 如下代码，演示如何增加自定义操作参数，由系统传递给操作服务及操作插件
			// （仅供演示，与本案例需求无关）
			operate.getOption().setVariableValue(OPPARAM_AFTERCONFIRM, &quot;true&quot;); 
		}
	}
	
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 用户确认了交互信息后，触发此事件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param messageBoxClosedEvent
	 * @see kd.bos.form.plugin.AbstractFormPlugin#confirmCallBack(kd.bos.form.events.MessageBoxClosedEvent)
	 * @version 1.0
	 */
	@Override
	public void confirmCallBack(MessageBoxClosedEvent messageBoxClosedEvent) {
		super.confirmCallBack(messageBoxClosedEvent);
		
		if (StringUtils.equals(KEY_PAY, messageBoxClosedEvent.getCallBackId())){
			// 付款确认
			
			if (messageBoxClosedEvent.getResult() == MessageBoxResult.Yes){
				// 确认执行付款操作
				
				// 构建操作自定义参数，标志为确认后再次执行操作，避免重复显示交互提示
				OperateOption operateOption = OperateOption.create();
				operateOption.setVariableValue(OPPARAM_AFTERCONFIRM, &quot;true&quot;);
				
				// 执行付款操作，并传入自定义操作参数
				this.getView().invokeOperation(KEY_PAY, operateOption);
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>重启服务后注册页面插件后预览测试</li></ol><blockquote><p>如下图所示则为测试成功</p></blockquote><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹动态表单插件beforeDoOperation事件案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',14);function f(_,O){const n=v("ExternalLinkIcon");return s(),l("div",null,[r(" more "),e("h1",u,[b,i(),e("a",p,[i("76-金蝶云苍穹动态表单插件beforeDoOperation事件案例.md"),a(n)])]),g])}const C=t(m,[["render",f],["__file","kingdee76.html.vue"]]);export{C as default};
