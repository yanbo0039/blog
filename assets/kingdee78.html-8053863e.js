import{_ as n,X as l,Y as s,a1 as a,Z as i,$ as t,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_78_1.png",u="/blog/assets/Kingdee_78_2.png",m="/blog/assets/Kingdee_78_3.png",o={},b={id:"_78-金蝶云苍穹标准单据列表插件beforecreatelistcolumns事件案例-md",tabindex:"-1"},g=i("a",{class:"header-anchor",href:"#_78-金蝶云苍穹标准单据列表插件beforecreatelistcolumns事件案例-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--78-beforeCreateListColumns-en45bee50kya337bkpwnoc5uq955l56cos0dqbcku81atvvcq6wbwkimt9h.md",target:"_blank",rel:"noopener noreferrer"},f=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li><p>新建带组织模板单据</p></li><li><p>在表单界面设置好表名之后管理员账号登录授权</p></li><li><p>预览之后添加数据后保存不提交，最好添加多条数据</p></li><li><p>在列表界面的常用条件添加单据状态字段后保存</p></li></ol><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.bill.plugin;

import java.util.List;
import java.util.Map;

import kd.bos.dataentity.entity.LocaleString;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.events.BeforeCreateListColumnsArgs;
import kd.bos.form.events.FilterContainerSearchClickArgs;
import kd.bos.list.IListColumn;
import kd.bos.list.ListColumn;
import kd.bos.list.plugin.AbstractListPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月10日
 * @version 1.0
 */
public class BeforeCreateListColumnsSample extends AbstractListPlugin {
	/** 用户选择的数据状态过滤值 */
	private String billStateFilterValue;

	/**
	 * &lt;p&gt;Title: filterContainerSearchClick&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 用户在过滤条件面板，修改了过滤条件之后，触发此事件
	 * @remark
	 * 在此事件，获取用户设置的数据状态过滤值
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月10日
	 * @param param the bare_field_name
	 * @param args
	 * @see kd.bos.list.plugin.AbstractListPlugin#filterContainerSearchClick(kd.bos.form.events.FilterContainerSearchClickArgs)
	 * @version 1.0
	 */
	@Override
	public void filterContainerSearchClick(FilterContainerSearchClickArgs args) {
		billStateFilterValue = &quot;A&quot;;
		// 获取用户在过滤面板中设置的过滤条件
		Map&lt;String, List&lt;Map&lt;String, List&lt;Object&gt;&gt;&gt;&gt; filterValues = args.getSearchClickEvent().getFilterValues();
		List&lt;Map&lt;String, List&lt;Object&gt;&gt;&gt; customFiterList = filterValues.get(&quot;customfilter&quot;);
		if(customFiterList == null) return ;
		// 逐项条件匹配，找出数据状态过滤条件
		for(int i = customFiterList.size()-1; i &gt;= 0 ; i--){
			Map&lt;String, List&lt;Object&gt;&gt; customFiter = customFiterList.get(i);
			List&lt;Object&gt; fieldNames = customFiter.get(&quot;FieldName&quot;);
			if(fieldNames == null || fieldNames.isEmpty()) continue;
			if(StringUtils.equals(&quot;billstatus&quot;, (String)fieldNames.get(0))){
				// 找到了数据状态过滤条件
				List&lt;Object&gt; values = customFiter.get(&quot;Value&quot;);
				if(values != null &amp;&amp; !values.isEmpty()) {
					billStateFilterValue = (String) values.get(0);
				}
				break;
			}
		}
	}

	/**
	 * &lt;p&gt;Title: beforeCreateListColumns&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 在构建列表显示的列时触发，传入设计时预置的列集合
	 * @remark
	 * 在此事件，根据自定义参数值，动态添加列
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月10日
	 * @param param the bare_field_name
	 * @param args
	 * @see kd.bos.list.plugin.IListPlugin#beforeCreateListColumns(kd.bos.form.events.BeforeCreateListColumnsArgs)
	 * @version 1.0
	 */
	@Override
	public void beforeCreateListColumns(BeforeCreateListColumnsArgs args) {
		// 设计器预置的列集合
		List&lt;IListColumn&gt; columns = args.getListColumns();
		// 根据自定义参数state的值，动态添加列
		//int state = 1;
		int state = 2;
		String stateParamValue = this.getView().getFormShowParameter().getCustomParam(&quot;state&quot;);
		if (StringUtils.isNotBlank(stateParamValue)){
			state = Integer.valueOf(stateParamValue);
		}
		switch (state) {
		case 1:
			// 动态添加新列：文本1
			ListColumn colText1 = this.createListColumn(&quot;textfield1&quot;, &quot;文本1&quot;, 1);
			columns.add(colText1);
			break;
		case 2:
		default:
			// 动态添加新列：文本2
			ListColumn colText2 = this.createListColumn(&quot;textfield2&quot;, &quot;文本2&quot;, 1);
			columns.add(colText2);
			break;
		}
		// 根据数据状态过滤条件值，动态添加列
		if (StringUtils.equals(billStateFilterValue, &quot;C&quot;)){
			ListColumn colUser = this.createListColumn(&quot;auditor.name&quot;, &quot;审核人&quot;, 2);
			columns.add(colUser);
		}
		else {
			ListColumn colUser = this.createListColumn(&quot;creator.name&quot;, &quot;创建人&quot;, 1);
			columns.add(colUser);
		}
	}

	/** 
	 * ListColumn&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: createListColumn&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 创建列对象返回
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月10日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param key 列标识，需要显示的字段，如&quot;textfield&quot;、 &quot;basedatafield.name&quot;
	 * @param caption 列标题
	 * @param colIndex 列顺序
	 * @return
	 * @version 1.0
	 */
	private ListColumn createListColumn(String key, String caption, int colIndex){
		
		ListColumn col = new ListColumn();
		
		col.setCaption(new LocaleString(caption));
		col.setKey(key);			 
		col.setListFieldKey(key);
		col.setFieldName(key);
		col.setSeq(colIndex);
		col.setVisible(11);

		return col;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>重启服务之后在列表界面注册插件</li></ol><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li>保存之后在列表界面预览测试</li></ol><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>金蝶云苍穹标准单据列表插件beforeCreateListColumns事件案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',13);function C(h,L){const e=v("ExternalLinkIcon");return l(),s("div",null,[a(" more "),i("h1",b,[g,t(),i("a",p,[t("78-金蝶云苍穹标准单据列表插件beforeCreateListColumns事件案例.md"),d(e)])]),f])}const k=n(o,[["render",C],["__file","kingdee78.html.vue"]]);export{k as default};
