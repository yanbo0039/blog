import{_ as n,X as a,Y as l,a1 as s,Z as e,$ as i,a2 as r,a0 as d,F as u}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_86_1.png",o="/blog/assets/Kingdee_86_2.png",v="/blog/assets/Kingdee_86_3.png",p="/blog/assets/Kingdee_86_4.png",g="/blog/assets/Kingdee_86_5.png",m="/blog/assets/Kingdee_86_1.gif",b={},f={id:"_86-金蝶云苍穹打印插件afteroutputelement方法样例-md",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_86-金蝶云苍穹打印插件afteroutputelement方法样例-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--86-afterOutputElement-d627an7dy8eu58a9o2grpif0nwsrev6aim2giyrc1e6aiu7e.md",target:"_blank",rel:"noopener noreferrer"},x=d('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h3><blockquote><p>请确保有做单据，例笔者有完成一个采购申请单</p></blockquote><h3 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h3><ol><li>新建打印模板</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>添加三个文本，并分别修改其属性</li></ol><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.print.plugin;

import kd.bos.entity.plugin.AbstractPrintServicePlugin;
import kd.bos.entity.plugin.IPrintScriptable;
import kd.bos.entity.plugin.args.OutputElementArgs;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    试验成功
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月16日
 * see_to_overridden
 * @version 1.0
 */
public class MyPrintPlugin6 extends AbstractPrintServicePlugin {
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
	 * @see kd.bos.entity.plugin.IPrintServicePlugin#afterOutputElement(kd.bos.entity.plugin.args.OutputElementArgs)
	 * @version 1.0
	 */
	@Override
	public void afterOutputElement(OutputElementArgs e){
		if(e.getKey().equals(&quot;text&quot;)) {
			IPrintScriptable apw = e.getOutput();//获取控件输出对象；
			Object value = apw.getFieldValue(&quot;billstatus&quot;);
			if(value !=  null) {
				apw.setValue(&quot;进入了是&quot;);
			} else {
				apw.setValue(&quot;进入了否&quot;);
			}
		} else if (e.getKey().equals(&quot;text1&quot;)) {
			/* 获取页码并赋值给text1控件 */
			IPrintScriptable apw = e.getOutput();//获取控件输出对象；
			int pageNumber = apw.getPageNumber();
			apw.setValue(&quot;pageNumber: &quot; + pageNumber);
		} else if (e.getKey().equals(&quot;text2&quot;)) {
			/* 获取同一数据源下绑定的字段为billstatus的值并赋值给text2控件 */
			IPrintScriptable apw = e.getOutput();//获取控件输出对象；
			Object newValue = apw.getFieldValue(&quot;billstatus&quot;);
			apw.setValue(newValue != null ? newValue : &quot;没有值哇&quot;);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预览测试" tabindex="-1"><a class="header-anchor" href="#预览测试" aria-hidden="true">#</a> 预览测试</h3><blockquote><p>重启服务后注册插件</p></blockquote><figure><img src="`+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>进入采购申请单列表界面预览测试，如下图所示测试成功</p></blockquote><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>金蝶云苍穹打印插件afterOutputElement方法样例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',21);function q(y,k){const t=u("ExternalLinkIcon");return a(),l("div",null,[s(" more "),e("h1",f,[_,i(),e("a",h,[i("86-金蝶云苍穹打印插件afterOutputElement方法样例.md"),r(t)])]),x])}const O=n(b,[["render",q],["__file","kingdee86.html.vue"]]);export{O as default};
