import{_ as t,X as l,Y as s,a1 as d,Z as i,$ as n,a2 as a,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_84_1.png",o="/blog/assets/Kingdee_84_2.png",u="/blog/assets/Kingdee_84_3.png",m="/blog/assets/Kingdee_84_4.png",b="/blog/assets/Kingdee_84_5.png",g="/blog/assets/Kingdee_84_6.png",p="/blog/assets/Kingdee_84_7.png",_="/blog/assets/Kingdee_84_8.png",y="/blog/assets/Kingdee_84_1.gif",f={},h={id:"_84-金蝶云苍穹单据操作插件onaddvalidators事件案例-md",tabindex:"-1"},D=i("a",{class:"header-anchor",href:"#_84-金蝶云苍穹单据操作插件onaddvalidators事件案例-md","aria-hidden":"true"},"#",-1),x={href:"http://xn--84-onAddValidators-j532a8cv4hqa24u06ak64dlv9gghc0uk3k2abx8jl76byf5aro5e.md",target:"_blank",rel:"noopener noreferrer"},E=r('<hr><blockquote><p>后来我才知道，我喜欢的是过去的你，而现在的你，我再无半点好感，然而过去的你又让我念念不忘。</p></blockquote><hr><ol><li><p>新建模板单据</p></li><li><p>设置单据表名 t_bill_test1</p></li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>新建高级面板，添加单据体，并设置分录操作代码，添加日期控件</li></ol><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>再交新建高级面板，添加子单据体，设置子分录操作代码，添加日期控件</li></ol><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>保存后管理员用户登录后授权后进行编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.billoperation.plugin;

import java.text.SimpleDateFormat;
import java.util.Date;

import kd.bos.entity.ExtendedDataEntity;
import kd.bos.entity.formula.RowDataModel;
import kd.bos.entity.plugin.AbstractOperationServicePlugIn;
import kd.bos.entity.plugin.AddValidatorsEventArgs;
import kd.bos.entity.plugin.PreparePropertysEventArgs;
import kd.bos.entity.validate.AbstractValidator;

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
public class OnAddValidatorsSample extends AbstractOperationServicePlugIn {
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 操作执行前，准备加载单据数据之前，触发此事件
	 * @remark
	 * 插件可以在此事件中，指定需要加载的字段
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.plugin.IOperationServicePlugIn#onPreparePropertys(kd.bos.entity.plugin.PreparePropertysEventArgs)
	 * @version 1.0
	 */
	@Override
	public void onPreparePropertys(PreparePropertysEventArgs e) {
		// 要求加载预计送货日期、最迟送货日期字段
		e.getFieldKeys().add(DelivaryDateValidator.KEY_DELIVERYDATE);
		e.getFieldKeys().add(DelivaryDateValidator.KEY_LASTDATE);
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 执行操作校验前，触发此事件
	 * @remark
	 * 插件可以在此事件，调整预置的操作校验器；或者增加自定义操作校验器
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.plugin.IOperationServicePlugIn#onAddValidators(kd.bos.entity.plugin.AddValidatorsEventArgs)
	 * @version 1.0
	 */
	@Override
	public void onAddValidators(AddValidatorsEventArgs e) {
		// 添加自定义的校验器：送货日期校验器
		e.addValidator(new DelivaryDateValidator());
	}
}

/**
 * 
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * 自定义操作校验器：校验送货日期
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月16日
 * see_to_overridden
 * @version 1.0
 */
class DelivaryDateValidator extends AbstractValidator {

	/** 预计送货日期字段标识 */
	public final static String KEY_DELIVERYDATE = &quot;deliverydate&quot;;
	/** 最迟送货日期字段标识 */
	public final static String KEY_LASTDATE = &quot;lastdate&quot;;
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 返回校验器的主实体：系统将自动对此实体数据，逐行进行校验
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @return
	 * @see kd.bos.entity.validate.AbstractValidator#getEntityKey()
	 * @version 1.0
	 */
	@Override
	public String getEntityKey() {
		return this.entityKey;
	}
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 给校验器传入上下文环境及单据数据包之后，调用此方法；
	 * @remark
	 * 自定义校验器，可以在此事件进行本地变量初始化：如确认需要校验的主实体
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @see kd.bos.entity.validate.AbstractValidator#initializeConfiguration()
	 * @version 1.0
	 */
	@Override
	public void initializeConfiguration() {
		super.initializeConfiguration();
		// 在此方法中，确认校验器检验的主实体：送货子单据体
		// 需要对送货子单据体行，逐行判断预计送货日期
		this.entityKey = &quot;subentryentity&quot;;		
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 校验器初始化完毕，从单据数据包中，提取出了主实体数据行，开始校验前，调用此方法；
	 * @remark
	 * 此方法，比initializeConfiguration更晚调用；
	 * 在此方法调用this.getDataEntities()，可以获取到需校验的主实体数据行
	 * 不能在本方法中，确认需要校验的主实体
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @see kd.bos.entity.validate.AbstractValidator#initialize()
	 * @version 1.0
	 */
	@Override
	public void initialize() {
		super.initialize();
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 执行自定义校验
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @see kd.bos.entity.validate.AbstractValidator#validate()
	 * @version 1.0
	 */
	@Override
	public void validate() {
		
		// 定义一个行数据存取模型：用于方便的读取本实体、及父实体、单据头上的字段
		RowDataModel rowDataModel = new RowDataModel(this.entityKey, this.getValidateContext().getSubEntityType());
		SimpleDateFormat timesdf = new SimpleDateFormat(&quot;yyyy-MM-dd&quot;);
		
		// 逐行校验预计送货
		for(ExtendedDataEntity rowDataEntity : this.getDataEntities()){
			rowDataModel.setRowContext(rowDataEntity.getDataEntity());
			Date deliveryDate = (Date)rowDataModel.getValue(KEY_DELIVERYDATE);
			Date lastDate = (Date)rowDataModel.getValue(KEY_LASTDATE);
			
			if (deliveryDate.compareTo(lastDate) &gt; 0 ){
				// 校验不通过，输出一条错误提示
				this.addErrorMessage(rowDataEntity, 
						String.format(&quot;预计送货日期(%s)，不能晚于最迟送货日期(%s)！&quot;, 
								timesdf.format(deliveryDate), timesdf.format(lastDate)));
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>重启服务后在保存按钮注册插件</li></ol><figure><img src="`+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li>预览测试</li></ol><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹左树右表单据列表插件refreshNode事件案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',24);function A(k,V){const e=v("ExternalLinkIcon");return l(),s("div",null,[d(" more "),i("h1",h,[D,n(),i("a",x,[n("84-金蝶云苍穹单据操作插件onAddValidators事件案例.md"),a(e)])]),E])}const K=t(f,[["render",A],["__file","index.html.vue"]]);export{K as default};
