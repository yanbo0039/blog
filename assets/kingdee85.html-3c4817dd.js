import{_ as t,X as l,Y as s,a1 as d,Z as i,$ as e,a2 as r,a0 as v,F as a}from"./framework-68dd73a2.js";const u={},o={id:"_85-金蝶云苍穹单据转换插件样例初使用-md",tabindex:"-1"},c=i("a",{class:"header-anchor",href:"#_85-金蝶云苍穹单据转换插件样例初使用-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--85--dj9d3rq0ancu0zf6c974d0da25c569ak97b9wqvo4aotqjy6aurj.md",target:"_blank",rel:"noopener noreferrer"},m=v(`<h4 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h4><blockquote><p>必须有两张单据，例我做了两张单据 采购申请单 和 采购订单</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_85_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试编码" tabindex="-1"><a class="header-anchor" href="#测试编码" aria-hidden="true">#</a> 测试编码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.billzh.plugin;

import kd.bos.entity.BillEntityType;
import kd.bos.entity.botp.ConvertOpType;
import kd.bos.entity.botp.ConvertRuleElement;
import kd.bos.entity.botp.plugin.AbstractConvertPlugIn;
import kd.bos.entity.botp.plugin.args.AfterBuildQueryParemeterEventArgs;
import kd.bos.entity.botp.plugin.args.AfterConvertEventArgs;
import kd.bos.entity.botp.plugin.args.AfterCreateLinkEventArgs;
import kd.bos.entity.botp.plugin.args.AfterCreateTargetEventArgs;
import kd.bos.entity.botp.plugin.args.AfterFieldMappingEventArgs;
import kd.bos.entity.botp.plugin.args.AfterGetSourceDataEventArgs;
import kd.bos.entity.botp.plugin.args.BeforeBuildGroupModeEventArgs;
import kd.bos.entity.botp.plugin.args.BeforeBuildRowConditionEventArgs;
import kd.bos.entity.botp.plugin.args.BeforeCreateLinkEventArgs;
import kd.bos.entity.botp.plugin.args.BeforeCreateTargetEventArgs;
import kd.bos.entity.botp.plugin.args.BeforeGetSourceDataEventArgs;
import kd.bos.entity.botp.plugin.args.InitVariableEventArgs;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    演示单据转换插件事件的触发时机
 *    试验成功
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月18日
 * @version 1.0
 */
public class BillConvertEventSample extends AbstractConvertPlugIn {
	/**
	 * void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 演示如何获取上下文信息
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月18日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * see_to_overridden
	 * @version 1.0
	 */
	private void getContext(){
		// 源单主实体
		BillEntityType srcMainType = this.getSrcMainType();
		// 目标单主实体
		BillEntityType tgtMainType = this.getTgtMainType();
		// 转换规则
		ConvertRuleElement rule = this.getRule();
		// 转换方式：下推、选单
		ConvertOpType opType = this.getOpType();
	}
	
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 初始化变量事件
	 * 获取上下文信息，构建一些必须的变量
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月18日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#initVariable(kd.bos.entity.botp.plugin.args.InitVariableEventArgs)
	 * @version 1.0
	 */
	@Override
	public void initVariable(InitVariableEventArgs e) {
		this.printEventInfo(&quot;initVariable&quot;, &quot;&quot;);
	}
	
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 构建取数参数后事件
	 * 添加额外的字段、过滤条件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月18日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#afterBuildQueryParemeter(kd.bos.entity.botp.plugin.args.AfterBuildQueryParemeterEventArgs)
	 * @version 1.0
	 */
	@Override
	public void afterBuildQueryParemeter(AfterBuildQueryParemeterEventArgs e) {
		this.printEventInfo(&quot;afterBuildQueryParemeter&quot;, &quot;&quot;);
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 编译数据筛选条件前事件
	 * 设置忽略规则原生的条件，改用插件定制条件，或者在规则条件基础上，追加定制条件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月18日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#beforeBuildRowCondition(kd.bos.entity.botp.plugin.args.BeforeBuildRowConditionEventArgs)
	 * @version 1.0
	 */
	@Override
	public void beforeBuildRowCondition(BeforeBuildRowConditionEventArgs e) {
		this.printEventInfo(&quot;beforeBuildRowCondition&quot;, &quot;&quot;);
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 取源单数据前事件
	 * 修改取数语句、取数条件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月18日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#beforeGetSourceData(kd.bos.entity.botp.plugin.args.BeforeGetSourceDataEventArgs)
	 * @version 1.0
	 */
	@Override
	public void beforeGetSourceData(BeforeGetSourceDataEventArgs e) {
		this.printEventInfo(&quot;beforeGetSourceData&quot;, &quot;&quot;);
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 取源单数据后事件
	 * 根据源单数据，获取其他定制的引用数据；也可以替换系统自动获取到的数据
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月18日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#afterGetSourceData(kd.bos.entity.botp.plugin.args.AfterGetSourceDataEventArgs)
	 * @version 1.0
	 */
	@Override
	public void afterGetSourceData(AfterGetSourceDataEventArgs e) {
		this.printEventInfo(&quot;afterGetSourceData&quot;, &quot;&quot;);
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 构建分单、行合并模式之前事件
	 * 调整分单、合并策略及依赖的字段
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月18日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#beforeBuildGroupMode(kd.bos.entity.botp.plugin.args.BeforeBuildGroupModeEventArgs)
	 * @version 1.0
	 */
	@Override
	public void beforeBuildGroupMode(BeforeBuildGroupModeEventArgs e) {
		this.printEventInfo(&quot;beforeBuildGroupMode&quot;, &quot;&quot;);
	}
	
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 初始化创建目标单据数据包前事件
	 * 这个事件，只在选单时触发：
	 * 选单时，需要基于现有的目标单数据包，进行追加处理；
	 * 插件可以在此事件，获取到现有的目标单数据包，提前进行定制处理
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月18日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#beforeCreateTarget(kd.bos.entity.botp.plugin.args.BeforeCreateTargetEventArgs)
	 * @version 1.0
	 */
	@Override
	public void beforeCreateTarget(BeforeCreateTargetEventArgs e) {
		this.printEventInfo(&quot;beforeCreateTarget&quot;, &quot;&quot;);
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 创建目标单据数据包后事件
	 * 这个事件，只在下推时触发，把根据分单规则创建好的目标单，传递给插件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月18日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#afterCreateTarget(kd.bos.entity.botp.plugin.args.AfterCreateTargetEventArgs)
	 * @version 1.0
	 */
	@Override
	public void afterCreateTarget(AfterCreateTargetEventArgs e) {
		this.printEventInfo(&quot;afterCreateTarget&quot;, &quot;&quot;);
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 目标字段赋值完毕后事件
	 * 插件可以在此基础上，继续填写目标字段值
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月18日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#afterFieldMapping(kd.bos.entity.botp.plugin.args.AfterFieldMappingEventArgs)
	 * @version 1.0
	 */
	@Override
	public void afterFieldMapping(AfterFieldMappingEventArgs e) {
		this.printEventInfo(&quot;afterFieldMapping&quot;, &quot;&quot;);
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 记录关联关系前事件
	 * 取消记录关联关系
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月18日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#beforeCreateLink(kd.bos.entity.botp.plugin.args.BeforeCreateLinkEventArgs)
	 * @version 1.0
	 */
	@Override
	public void beforeCreateLink(BeforeCreateLinkEventArgs e) {
		this.printEventInfo(&quot;beforeCreateLink&quot;, &quot;&quot;);
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 记录关联关系后事件
	 * 根据系统自动记录的关联关系，进行相关数据的同步携带，如携带其他子单据体数据
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月18日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#afterCreateLink(kd.bos.entity.botp.plugin.args.AfterCreateLinkEventArgs)
	 * @version 1.0
	 */
	@Override
	public void afterCreateLink(AfterCreateLinkEventArgs e) {
		this.printEventInfo(&quot;afterCreateLink&quot;, &quot;&quot;);
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 单据转换后事件，最后执行 
	 * 插件可以在这个事件中，对生成的目标单数据，进行最后的修改
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月18日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.botp.plugin.IConvertPlugIn#afterConvert(kd.bos.entity.botp.plugin.args.AfterConvertEventArgs)
	 * @version 1.0
	 */
	@Override
	public void afterConvert(AfterConvertEventArgs e) {
		this.printEventInfo(&quot;afterConvert&quot;, &quot;&quot;);
	}

	/**
	 * void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月18日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param eventName
	 * @param argString
	 * see_to_overridden
	 * @version 1.0
	 */
	private void printEventInfo(String eventName, String argString){
		String msg = String.format(&quot;%s : %s&quot;, eventName, argString);
		System.out.println(msg);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注册插件" tabindex="-1"><a class="header-anchor" href="#注册插件" aria-hidden="true">#</a> 注册插件</h4><blockquote><p>流程服务云 --&gt; 业务流服务 --&gt; 转换路线 --&gt; 选择后双击进入</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_85_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_85_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><ol><li>进入采购申请单预览添加数据后保存提交审核</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_85_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_85_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>进入流程审批</li></ol><blockquote><p>刷新首页点击自己头像，咦，发现没有消息？？？</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_85_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>不要慌，进入流程服务云里的消息中心看看</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_85_7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>如下图所示，还是没有看到自己所提交的单据，我现在很慌。。。。由于一直没有找到原因。。。故秉着<strong>世上无难事，只要肯放弃</strong>的原则，我完美的回避了这一问题。。。。</p></blockquote><blockquote><p>找到业务控制将其工作流关闭</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_85_8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>在代码里的初始化方法打个断点</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_85_9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>重新预览添加数据后保存提交然后下推</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_85_10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>如下图所示，可以看到进入断点了。。那么此时足以证明插件注册成功，可以开始写代码了。。。。</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_85_11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹单据转换插件样例初使用</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,32);function p(g,f){const n=a("ExternalLinkIcon");return l(),s("div",null,[d(" more "),i("h1",o,[c,e(),i("a",b,[e("85-金蝶云苍穹单据转换插件样例初使用.md"),r(n)])]),m])}const y=t(u,[["render",p],["__file","kingdee85.html.vue"]]);export{y as default};
