import{_ as n,X as l,Y as s,a1 as a,Z as e,$ as i,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const u="/blog/assets/Kingdee_59_1.png",c="/blog/assets/Kingdee_59_2.png",o="/blog/assets/Kingdee_59_3.png",m="/blog/assets/Kingdee_59_4.png",b={},p={id:"_59-金蝶云苍穹套打插件的简单使用-md",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#_59-金蝶云苍穹套打插件的简单使用-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--59--dj9d3rq0an0rrnnpvtpnd546diodeyqmpd2x1blrqvq5b.md",target:"_blank",rel:"noopener noreferrer"},y=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h3><blockquote><p>必须完成采购申请单</p></blockquote><blockquote><p>必须完成采购申请单打印模板</p></blockquote><h3 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h3><h3 id="beforeloaddata事件" tabindex="-1"><a class="header-anchor" href="#beforeloaddata事件" aria-hidden="true">#</a> beforeloadData事件</h3><ol><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.wlplugin;

import kd.bos.entity.plugin.AbstractPrintServicePlugin;
import kd.bos.entity.plugin.args.BeforeLoadDataArgs;
import kd.bos.entity.plugin.args.CustomPrintDataEntitiesArgs;
import kd.bos.entity.plugin.args.OutputElementArgs;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月4日
 * @version 1.0
 */
public class PrintPluginDemo extends AbstractPrintServicePlugin {

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    系统读取数据前执行的事件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月4日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.plugin.IPrintServicePlugin#beforeLoadData(kd.bos.entity.plugin.args.BeforeLoadDataArgs)
	 * @version 1.0
	 */
	@Override
	public void beforeLoadData(BeforeLoadDataArgs e) {
		//加载数据前执行的事情，可以取消系统读取数据
		
		//取消默认读取分录数据的动作
		String source = e.getDataSourceName();
		if(&quot;entryentity&quot;.equalsIgnoreCase(source)) {//采购申请单分录标识
			e.setCancel(true);
		}
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>注册插件保后重启服务</p></li><li><p>测试</p></li></ol><blockquote><p>未开启插件运行效果</p></blockquote><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>开启插件运行效果</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="customprintdataentities和beforeouputelement事件" tabindex="-1"><a class="header-anchor" href="#customprintdataentities和beforeouputelement事件" aria-hidden="true">#</a> customPrintDataEntities和beforeOuputElement事件</h3><ol><li>添加文本,并进行如下图所示操作</li></ol><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    对系统读取的数据集进行加工或自定义数据包
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月4日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.plugin.IPrintServicePlugin#customPrintDataEntities(kd.bos.entity.plugin.args.CustomPrintDataEntitiesArgs)
	 * @version 1.0
	 */
	@Override
	public void customPrintDataEntities(CustomPrintDataEntitiesArgs e) {
//		对系统读取的数据集进行加工或自定义数据包
		//打印表单上不存在的字段
		List&lt;DynamicObject&gt; sysDataEntities = e.getDataEntities();
		List&lt;DynamicObject&gt; newDataEntities = new ArrayList&lt;&gt;();
		Set&lt;String&gt; customFields = e.getCustomFields();
		String ds = e.getDataSourceName();
		if(&quot;wlzy_apply&quot;.equalsIgnoreCase(ds)){
			for(DynamicObject dataEntity : sysDataEntities) {
				DynamicObject dataEntityType =  (DynamicObject) dataEntity.getDataEntityType();
				DynamicObject cloneType = null;
				
				try {
					cloneType = (DynamicObject) dataEntityType.clone();
					for(String customField : customFields) {
						DynamicSimpleProperty demoProp = new DynamicSimpleProperty(customField,String.class,&quot;自定义字段默认值&quot;);
						cloneType.registerSimpleProperty(demoProp);
					}
					
					DynamicObject person = dataEntity.getDynamicObject(&quot;applier&quot;);
					
					DynamicObject newObj = (new CloneUtils(false,false)).clone(cloneType,dataEntity);
					for(String customField : customFields) {
						newObj.set(customField, &quot;自定义字段value&quot;);
					}
					
					newObj.set(&quot;applier&quot;, person);
					newObj.set(&quot;billno&quot;,&quot;newBillno&quot;);
					newDataEntities.add(newObj);
				} catch (Exception e1) {
					System.out.println(&quot;demo fail&quot;);
				}
			}
			e.setDataEntities(newDataEntities);
		}
	}
	
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    控件输出前事件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月4日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.plugin.IPrintServicePlugin#beforeOuputElement(kd.bos.entity.plugin.args.OutputElementArgs)
	 * @version 1.0
	 */
	@Override
	public void beforeOuputElement(OutputElementArgs e) {
		//设置自定义控件不打印
		String key = e.getKey();
		if(&quot;text1&quot;.equals(key)) {
			e.getOutput().setHide(true);
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>备注： 第一个方法的clone报错，未找到原因，暂时跳过</p></blockquote><ol start="3"><li><p>注册插件保后重启服务</p></li><li><p>测试</p></li></ol><h3 id="afteroutputelement事件" tabindex="-1"><a class="header-anchor" href="#afteroutputelement事件" aria-hidden="true">#</a> afterOutputElement事件</h3><ol><li>添加文本，并进行如下图所示设置</li></ol><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/**
* &lt;p&gt;Title: &lt;/p&gt;
* &lt;p&gt;
*    Description:
*    控件输出后事件
* &lt;/p&gt;
* &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
* @author xx
* @date 2020年3月4日
* @param param the bare_field_name
* @param e
* @see kd.bos.entity.plugin.IPrintServicePlugin#afterOutputElement(kd.bos.entity.plugin.args.OutputElementArgs)
* @version 1.0
*/
@Override
public void afterOutputElement(OutputElementArgs e) {
    super.afterOutputElement(e);
    //根据控件绑定的字段的值的不同、打印不同的样式
    String key = e.getKey();
    if(&quot;text2&quot;.equalsIgnoreCase(key)) {
        IPrintScriptable apw = e.getOutput();
        int pagenumber = apw.getPageNumber();
            apw.setValue(pagenumber);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>测试</li></ol><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>金蝶云苍穹套打插件的简单使用</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p></div>`,30);function f(_,q){const t=v("ExternalLinkIcon");return l(),s("div",null,[a(" more "),e("h1",p,[g,i(),e("a",h,[i("59-金蝶云苍穹套打插件的简单使用.md"),d(t)])]),y])}const x=n(b,[["render",f],["__file","kingdee59.html.vue"]]);export{x as default};
