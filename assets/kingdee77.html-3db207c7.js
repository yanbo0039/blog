import{_ as t,X as s,Y as l,a1 as r,Z as e,$ as i,a2 as a,a0 as d,F as o}from"./framework-68dd73a2.js";const v="/blog/assets/Kingdee_77_1.png",c="/blog/assets/Kingdee_77_1.gif",u={},m={id:"_77-金蝶云苍穹afterdooperation事件案例-md",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_77-金蝶云苍穹afterdooperation事件案例-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--77-afterDoOperation-eh04aed89h67evw0t592d0izbjk0a1u4d.md",target:"_blank",rel:"noopener noreferrer"},g=d('<ol><li><p>新建单据带组织模板</p></li><li><p>新增一复选框在内容区，将其名称更改为<strong>连续新增</strong> 标识更改为<strong>newcontinuous</strong></p></li><li><p>将其表名设置为 t_billdzz_demotest1</p></li></ol><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li><p>管理员用户登录将将其授权</p></li><li><p>编码</p></li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.dynamicform.plugin;

import kd.bos.dataentity.utils.StringUtils;
import kd.bos.entity.operate.result.OperationResult;
import kd.bos.form.events.AfterDoOperationEventArgs;
import kd.bos.form.plugin.AbstractFormPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    afterDoOperation事件 试验
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月6日
 * @version 1.0
 */
public class AfterDoOperationSample extends AbstractFormPlugin {

	private final static String OPERATEKEY_NEW = &quot;new&quot;;//需要执行的事件
	private final static String OPERATEKEY_SAVE = &quot;save&quot;;//按钮操作代码的操作编码
	private final static String KEY_NEWCONTINUOUS = &quot;newcontinuous&quot;;//连续新增字段
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    用户点击按钮、菜单，执行完绑定的操作后，不论成功与否，均会触发此事件；
	 *    插件可以在此事件，根据操作结果控制界面。
	 *    特别说明：
	 *    这个事件，是在表单界面层执行的，没有事务保护。
	 *    不允许在此事件同步修改数据库数据，以免同步失败导致数据不一致。
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param afterDoOperationEventArgs
	 * @see kd.bos.form.plugin.AbstractFormPlugin#afterDoOperation(kd.bos.form.events.AfterDoOperationEventArgs)
	 * @version 1.0
	 */
	@Override
	public void afterDoOperation(AfterDoOperationEventArgs afterDoOperationEventArgs) {
		super.afterDoOperation(afterDoOperationEventArgs);
		
		if (StringUtils.equals(OPERATEKEY_SAVE, afterDoOperationEventArgs.getOperateKey())){
			
			OperationResult opResult = afterDoOperationEventArgs.getOperationResult();
			if (opResult != null &amp;&amp; opResult.isSuccess()){
				
				// 读取界面上&quot;连续新增&quot;字段值
				
				boolean newContinuous = (boolean)this.getModel().getValue(KEY_NEWCONTINUOUS);
				if (newContinuous){
					// 连续新增：执行新增操作
					this.getView().invokeOperation(OPERATEKEY_NEW);
					// 界面刷新后，重设&quot;连续新增&quot;选项值，确保此选项值的延续
					this.getModel().setValue(KEY_NEWCONTINUOUS, true);
				}
				else {
					// 不连续新增：关闭界面
					this.getView().close();
				}
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>重启服务后注册插件，预览测试</li></ol><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>从上图可以看到代码实现了，开启连续新增后保存后再次新增的功能，若关闭连续新增，则保存后页面被关闭</p></blockquote><p><strong>以上就是我关于 <em>金蝶云苍穹afterDoOperation事件案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',12);function f(_,E){const n=o("ExternalLinkIcon");return s(),l("div",null,[r(" more "),e("h1",m,[p,i(),e("a",b,[i("77-金蝶云苍穹afterDoOperation事件案例.md"),a(n)])]),g])}const h=t(u,[["render",f],["__file","kingdee77.html.vue"]]);export{h as default};
