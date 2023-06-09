import{_ as t,X as l,Y as s,a1 as d,Z as i,$ as e,a2 as r,a0 as a,F as o}from"./framework-68dd73a2.js";const v="/blog/assets/Kingdee_88_1.png",c="/blog/assets/Kingdee_88_1.gif",u={},b={id:"_88-金蝶云苍穹单据转换插件beforebuildrowcondition事件案例-md",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_88-金蝶云苍穹单据转换插件beforebuildrowcondition事件案例-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--88-beforeBuildRowCondition-en45bee50kya337bd91bhy4iwlav0jn91diw4kzeuck8vbkt4d5rua.md",target:"_blank",rel:"noopener noreferrer"},g=a(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h3><blockquote><p>两张单据,例笔者就做了两张单据分别为采购申请单和采购订单</p></blockquote><h3 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.billzh.plugin;

import kd.bos.entity.botp.plugin.AbstractConvertPlugIn;
import kd.bos.entity.botp.plugin.args.BeforeBuildRowConditionEventArgs;
import kd.bos.orm.query.QCP;
import kd.bos.orm.query.QFilter;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    试验成功
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月16日
 * @version 1.0
 */
public class BeforeBuildRowConditionSample extends AbstractConvertPlugIn {
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#beforeBuildRowCondition(kd.bos.entity.botp.plugin.args.BeforeBuildRowConditionEventArgs)
	 * @version 1.0
	 */
	@Override
	public void beforeBuildRowCondition(BeforeBuildRowConditionEventArgs e) {
		
		if (!cannotPushLockBill()){
			e.setCustFilterDesc(&quot;不允许下推已锁定的单据&quot;);		// 给出不允许下推的原因
			
			// 设置条件表达式，用于脚本执行 （必选）
//			e.setCustFilterExpression(&quot; lockstatus = &#39;A&#39; &quot;);
			e.setCustFilterExpression(&quot; status = &#39;A&#39; &quot;);//单据状态等于A
			
			// 同时设置具有相同含义的QFilter条件，用于选单数据查询 （必选）
//			QFilter qFilter = new QFilter(&quot;lockstatus&quot;, QCP.equals, &quot;A&quot;); 
			QFilter qFilter = new QFilter(&quot;status&quot;, QCP.equals, &quot;A&quot;); 
//			e.getCustQFilters().add(qFilter);
		}
	}
	
	/**
	 * boolean&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 读取业务应用的系统参数值
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	private boolean cannotPushLockBill(){
		// 实际业务系统并没有这个选项，本演示代码，直接返回false，演示添加条件
		return false;
		//return (boolean)SystemParamterServiceHelper.getParameter(0, 0, &quot;sal&quot;, &quot;cannotpushlockbill&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><ol><li>注册插件</li></ol><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>预览测试</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>金蝶云苍穹单据转换插件beforeBuildRowCondition事件案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',14);function h(f,_){const n=o("ExternalLinkIcon");return l(),s("div",null,[d(" more "),i("h1",b,[m,e(),i("a",p,[e("88-金蝶云苍穹单据转换插件beforeBuildRowCondition事件案例.md"),r(n)])]),g])}const C=t(u,[["render",h],["__file","kingdee88.html.vue"]]);export{C as default};
