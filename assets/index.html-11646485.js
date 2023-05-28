import{_ as l,X as t,Y as s,a1 as r,Z as i,$ as e,a2 as a,a0 as d,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_80_1.png",o="/blog/assets/Kingdee_80_1.gif",m={},b={id:"_80-金蝶云苍穹标准单据列表插件billlisthyperlinkclick事件案例-md",tabindex:"-1"},p=i("a",{class:"header-anchor",href:"#_80-金蝶云苍穹标准单据列表插件billlisthyperlinkclick事件案例-md","aria-hidden":"true"},"#",-1),u={href:"http://xn--80-billListHyperLinkClick-jc83b8dw6jxa485b9uwcmc23pj16lb4cw18cu8bjx01aw4vcn7vbzdis86h.md",target:"_blank",rel:"noopener noreferrer"},g=d('<ol><li><p>新建带组织模板单据</p></li><li><p>设置表名后保存</p></li><li><p>在表单的基本信息里面添加文本字段将其标识更改为 textfield1 将其名称更改为 文本1</p></li><li><p>进入列表界面，将刚刚添加的文本1字段添加到表格视图中并将其设置显示为超链接开户后保存</p></li></ol><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li><p>管理员账号登录后将其授权</p></li><li><p>普通用户登录后在表单界面预览后添加几条数据</p></li><li><p>编码</p></li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.bill.plugin;

import kd.bos.bill.BillShowParameter;
import kd.bos.bill.OperationStatus;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.ShowType;
import kd.bos.form.events.HyperLinkClickArgs;
import kd.bos.list.plugin.AbstractListPlugin;

/**
 * &lt;p&gt;Title: BillListHyperLinkClickSample&lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月10日
 * see_to_overridden
 * @version 1.0
 */
public class BillListHyperLinkClickSample extends AbstractListPlugin {

	private final static String KEY_TEXTFIELD1 = &quot;textfield1&quot;;

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
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
			
			this.getView().showForm(showParameter);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>重启服务后进入列表界面预览测试，如下图所示测试成功</li></ol><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹标准单据列表插件billListHyperLinkClick事件案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',11);function k(h,_){const n=v("ExternalLinkIcon");return t(),s("div",null,[r(" more "),i("h1",b,[p,e(),i("a",u,[e("80-金蝶云苍穹标准单据列表插件billListHyperLinkClick事件案例.md"),a(n)])]),g])}const L=l(m,[["render",k],["__file","index.html.vue"]]);export{L as default};
