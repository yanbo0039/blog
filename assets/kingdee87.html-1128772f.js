import{_ as n,X as l,Y as a,a1 as d,Z as e,$ as i,a2 as s,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_87_1.png",u="/blog/assets/Kingdee_87_2.png",m="/blog/assets/Kingdee_87_3.png",o="/blog/assets/Kingdee_87_1.gif",b={},p={id:"_87-金蝶云苍穹单据转换插件afterbuildqueryparemetersample事件案例-md",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#_87-金蝶云苍穹单据转换插件afterbuildqueryparemetersample事件案例-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--87-AfterBuildQueryParemeterSample-et86cefl9l5a677c5x8b9f8kboaq9k8r7dpi9lel4c510b5g0er9xa.md",target:"_blank",rel:"noopener noreferrer"},y=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h3><blockquote><p>要有目标单与源单，例笔者有做一个采购申请单与采购订单</p></blockquote><h3 id="为目标单添加字段" tabindex="-1"><a class="header-anchor" href="#为目标单添加字段" aria-hidden="true">#</a> 为目标单添加字段</h3><blockquote><p>在采购订单的单据头中添加一个文本字段，并按下图所示更改名称与标识</p></blockquote><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.billzh.plugin;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import kd.bos.dataentity.entity.DynamicObject;
import kd.bos.entity.ExtendedDataEntity;
import kd.bos.entity.botp.plugin.AbstractConvertPlugIn;
import kd.bos.entity.botp.plugin.args.AfterBuildQueryParemeterEventArgs;
import kd.bos.entity.botp.plugin.args.AfterFieldMappingEventArgs;
import kd.bos.entity.botp.runtime.ConvertConst;

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
public class AfterBuildQueryParemeterSample extends AbstractConvertPlugIn {
	private final static String KEY_BILLNO = &quot;billno&quot;;
	private final static String KEY_DATE = &quot;applydate&quot;;
	private final static String KEY_AMOUNT = &quot;amount&quot;;
	private final static String KEY_CURRENCYNAME = &quot;currency.name&quot;;
	private final static String KEY_CONTENT = &quot;content&quot;;
	
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 在开始读取源单数据前，触发此事件
	 * @remark
	 * 在此事件中，要求加载插件要用到的源单字段
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#afterBuildQueryParemeter(kd.bos.entity.botp.plugin.args.AfterBuildQueryParemeterEventArgs)
	 * @version 1.0
	 */
	@Override
	public void afterBuildQueryParemeter(AfterBuildQueryParemeterEventArgs e) {
		
		e.addSrcField(KEY_BILLNO);		// 单据编号
		e.addSrcField(KEY_DATE);		// 业务日期
		e.addSrcField(KEY_AMOUNT);		// 金额
		e.addSrcField(KEY_CURRENCYNAME);	// 币别.名称 currency.name
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 目标单字段值，携带完毕后，触发此事件
	 * @remark
	 * 在此事件中，自行取源单字段值，格式化后填写到目标单
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#afterFieldMapping(kd.bos.entity.botp.plugin.args.AfterFieldMappingEventArgs)
	 * @version 1.0
	 */
	@SuppressWarnings(&quot;unchecked&quot;)
	@Override
	public void afterFieldMapping(AfterFieldMappingEventArgs e) {
		
		// 取目标单，单据头数据包 （可能会生成多张单，是个数组）
		String targetEntityNumber = this.getTgtMainType().getName();
		ExtendedDataEntity[] billDataEntitys = e.getTargetExtDataEntitySet().FindByEntityKey(targetEntityNumber);
		
		SimpleDateFormat timesdf = new SimpleDateFormat(&quot;yyyy-MM-dd&quot;);
		
		// 逐单处理
		for(ExtendedDataEntity billDataEntity : billDataEntitys){
			
			// 取当前目标单，对应的源单行
			List&lt;DynamicObject&gt; srcRows = (List&lt;DynamicObject&gt;)billDataEntity.getValue(ConvertConst.ConvExtDataKey_SourceRows);
			// 取源单第一行上的字段值，忽略其他行
			DynamicObject srcRow = srcRows.get(0);
			
			// 开始格式化字段值
			StringBuilder sBuilder = new StringBuilder();
			sBuilder.append(this.getSrcMainType().getDisplayName().toString());
			
			// 单据编号字段值
			String billno = (String)e.getFldProperties().get(KEY_BILLNO).getValue(srcRow);
			sBuilder.append(billno).append(&quot;; &quot;);
			
			// 日期
			Object date = e.getFldProperties().get(KEY_DATE).getValue(srcRow);
			if (date != null){
				sBuilder.append(&quot;日期: &quot;).append(timesdf.format((Date)date)).append(&quot;; &quot;);
			}
			
			// 金额
			BigDecimal amount = (BigDecimal)e.getFldProperties().get(KEY_AMOUNT).getValue(srcRow);
			sBuilder.append(&quot;金额: &quot;).append(amount.toString());
			
			// 币别
			String currency = (String)e.getFldProperties().get(KEY_CURRENCYNAME).getValue(srcRow);
			sBuilder.append(currency);
			
			System.out.println(&quot;sBuilder.toString(): &quot; + sBuilder.toString());
			
			// 给目标单字段赋值
			billDataEntity.setValue(KEY_CONTENT, sBuilder.toString());
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><blockquote><p>注册插件：流程服务云 --&gt; 业务流程 --&gt; 转换路线</p></blockquote><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>测试</p></blockquote><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>如上图所示，可以看到目标单的单据头的内容区已被赋值为代码所需的值，则表示测试成功</p></blockquote><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>87-金蝶云苍穹单据转换插件AfterBuildQueryParemeterSample事件案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',19);function f(_,E){const t=v("ExternalLinkIcon");return l(),a("div",null,[d(" more "),e("h1",p,[g,i(),e("a",h,[i("87-金蝶云苍穹单据转换插件AfterBuildQueryParemeterSample事件案例.md"),s(t)])]),y])}const k=n(b,[["render",f],["__file","kingdee87.html.vue"]]);export{k as default};
