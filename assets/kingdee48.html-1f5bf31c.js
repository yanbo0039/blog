import{_ as a,X as d,Y as s,a1 as l,Z as e,$ as n,a2 as t,a0 as r,F as o}from"./framework-68dd73a2.js";const c={},v={id:"_48-金蝶云苍穹插件开发之值改变事件-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_48-金蝶云苍穹插件开发之值改变事件-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--48--db9dml8a90dc640a77mjc661qkdn0tei10hv31aotqmt6b.md",target:"_blank",rel:"noopener noreferrer"},b=e("h4",{id:"新建单据",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#新建单据","aria-hidden":"true"},"#"),n(" 新建单据")],-1),g={href:"https://www.jianshu.com/p/e58e7cb12bf0",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.jianshu.com/p/68a08f1e9bfb",target:"_blank",rel:"noopener noreferrer"},h=r(`<figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_48_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_48_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="新建插件类并注册插件" tabindex="-1"><a class="header-anchor" href="#新建插件类并注册插件" aria-hidden="true">#</a> 新建插件类并注册插件</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_48_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_48_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="预览测试" tabindex="-1"><a class="header-anchor" href="#预览测试" aria-hidden="true">#</a> 预览测试</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_48_1.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>备注：开始日期、结束日期请开户<strong>即时触发值更新</strong></p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_48_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹插件开发之值改变事件</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,16);function f(_,y){const i=o("ExternalLinkIcon");return d(),s("div",null,[l(" more "),e("h1",v,[u,n(),e("a",m,[n("48-金蝶云苍穹插件开发之值改变事件.md"),t(i)])]),b,e("blockquote",null,[e("p",null,[n("新建步骤请参考"),e("a",g,[n("金蝶云苍穹如何新建云、应用、页面？"),t(i)]),n(),e("a",p,[n("金蝶云苍穹如何添加页面字段？"),t(i)]),n("，并确保页面字段如下图所示")])]),h])}const q=a(c,[["render",f],["__file","kingdee48.html.vue"]]);export{q as default};
