import{_ as a,X as s,Y as d,a1 as l,Z as e,$ as n,a2 as t,a0 as r,F as o}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_48_1.png",v="/blog/assets/Kingdee_48_2.png",u="/blog/assets/Kingdee_48_3.png",m="/blog/assets/Kingdee_48_4.png",b="/blog/assets/Kingdee_48_1.gif",g="/blog/assets/Kingdee_48_5.png",p={},h={id:"_48-金蝶云苍穹插件开发之值改变事件-md",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#_48-金蝶云苍穹插件开发之值改变事件-md","aria-hidden":"true"},"#",-1),_={href:"http://xn--48--db9dml8a90dc640a77mjc661qkdn0tei10hv31aotqmt6b.md",target:"_blank",rel:"noopener noreferrer"},y=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"注意"),e("p",null,"本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。")],-1),q=e("h3",{id:"新建单据",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#新建单据","aria-hidden":"true"},"#"),n(" 新建单据")],-1),k={href:"https://www.jianshu.com/p/e58e7cb12bf0",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.jianshu.com/p/68a08f1e9bfb",target:"_blank",rel:"noopener noreferrer"},D=r('<figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="新建插件类并注册插件" tabindex="-1"><a class="header-anchor" href="#新建插件类并注册插件" aria-hidden="true">#</a> 新建插件类并注册插件</h3><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
package kd.bos.form.plugin;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.Instant;
import java.util.Date;

import kd.bos.bill.AbstractBillPlugIn;
import kd.bos.dataentity.entity.DynamicObject;
import kd.bos.dataentity.entity.DynamicObjectCollection;
import kd.bos.entity.datamodel.events.PropertyChangedArgs;
import kd.bos.form.field.events.BeforeF7SelectEvent;
import kd.bos.form.field.events.BeforeF7SelectListener;

/**
 * @author Administrator
 *
 */
public class PurReqBillEditextends AbstractBillPlugIn implements BeforeF7SelectListener {

	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: beforeF7Select&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年2月27日
	 * @param arg0
	 * @see kd.bos.form.field.events.BeforeF7SelectListener#beforeF7Select(kd.bos.form.field.events.BeforeF7SelectEvent)
	 */
	@Override
	public void beforeF7Select(BeforeF7SelectEvent arg0) {
		// TODO Auto-generated method stub

	}

	/**
     * (non-Javadoc)
     * &lt;p&gt;Title: propertyChanged&lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * 注册值改变监听事件，计算出天数以及总金额的值
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020年2月22日
     * @param e
     * @see kd.bos.entity.datamodel.events.IDataModelChangeListener#propertyChanged(kd.bos.entity.datamodel.events.PropertyChangedArgs)
     */
    @Override
    public void propertyChanged(PropertyChangedArgs e) {
        String propertyName = e.getProperty().getName();//获取元素
        if(&quot;startdate&quot;.equals(propertyName) || &quot;enddate&quot;.equals(propertyName)) {//实现自动计划天数功能
        	if(this.getModel().getValue(&quot;startdate&quot;) != null &amp;&amp; this.getModel().getValue(&quot;enddate&quot;) != null) {
        		Date startdate = (Date) this.getModel().getValue(&quot;startdate&quot;);
        		Date enddate = (Date) this.getModel().getValue(&quot;enddate&quot;);
        		
        		Instant start = startdate.toInstant();
        		Instant end = enddate.toInstant();
        		
        		long days = Duration.between(start, end).toDays() + 1;
        		this.getModel().setValue(&quot;datenum&quot;, days);
        	}
        }
        else if
        	(&quot;amount&quot;.equals(propertyName)) {
        	DynamicObjectCollection entrys = this.getModel().getEntryEntity(&quot;entryentity&quot;);
        	BigDecimal total = new BigDecimal(0);
        	for(DynamicObject entry:entrys) {
        	  	BigDecimal amount = entry.getBigDecimal(&quot;amount&quot;);
        	  	total = total.add(amount);
        	}
        	this.getModel().setValue(&quot;amountfield1&quot;, total);//将合计金额赋值
        }
        super.propertyChanged(e);
    }
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预览测试" tabindex="-1"><a class="header-anchor" href="#预览测试" aria-hidden="true">#</a> 预览测试</h3><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>备注：开始日期、结束日期请开户<strong>即时触发值更新</strong></p></blockquote><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>金蝶云苍穹插件开发之值改变事件</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p></div>',15);function B(C,j){const i=o("ExternalLinkIcon");return s(),d("div",null,[l(" more "),e("h1",h,[f,n(),e("a",_,[n("48-金蝶云苍穹插件开发之值改变事件.md"),t(i)])]),y,q,e("blockquote",null,[e("p",null,[n("新建步骤请参考"),e("a",k,[n("金蝶云苍穹如何新建云、应用、页面？"),t(i)]),n(),e("a",x,[n("金蝶云苍穹如何添加页面字段？"),t(i)]),n("，并确保页面字段如下图所示")])]),D])}const V=a(p,[["render",B],["__file","kingdee48.html.vue"]]);export{V as default};
