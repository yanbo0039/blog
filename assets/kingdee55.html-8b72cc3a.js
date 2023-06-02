import{_ as t,X as l,Y as s,a1 as d,Z as i,$ as e,a2 as r,a0 as a,F as v}from"./framework-68dd73a2.js";const u="/blog/assets/Kingdee_55_1.png",c="/blog/assets/Kingdee_55_2.png",m="/blog/assets/Kingdee_55_3.png",o="/blog/assets/Kingdee_55_4.png",b="/blog/assets/Kingdee_55_5.png",g="/blog/assets/Kingdee_55_6.png",p="/blog/assets/Kingdee_55_7.png",h="/blog/assets/Kingdee_55_8.png",f="/blog/assets/Kingdee_55_9.png",C="/blog/assets/Kingdee_55_10.png",k="/blog/assets/Kingdee_55_11.png",y={},_={id:"_55-金蝶云苍穹单据列表开发demo-md",tabindex:"-1"},L=i("a",{class:"header-anchor",href:"#_55-金蝶云苍穹单据列表开发demo-md","aria-hidden":"true"},"#",-1),S={href:"http://xn--55-demo-ds4k15x3jd9sbu73ffbmtt2fyd0alupzydy29c.md",target:"_blank",rel:"noopener noreferrer"},F=a('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="控件使用" tabindex="-1"><a class="header-anchor" href="#控件使用" aria-hidden="true">#</a> 控件使用</h4><h5 id="列表分组字段" tabindex="-1"><a class="header-anchor" href="#列表分组字段" aria-hidden="true">#</a> 列表分组字段</h5><blockquote><p>在左侧大纲中选择表格视图后在实体列表元素中选择列表字段分组，而后将申请数据和已订货数量拖进列表分组字段中，并更改列表分组字段名称为数量</p></blockquote><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="合并列表字段" tabindex="-1"><a class="header-anchor" href="#合并列表字段" aria-hidden="true">#</a> 合并列表字段</h5><blockquote><p>同上述步骤一样，只不过在实体列表元素中选择合并列表字段，申请人和申请部门移进合并列表字段中，并更改合并列表字段名称为申请信息</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="动态文本列表字段" tabindex="-1"><a class="header-anchor" href="#动态文本列表字段" aria-hidden="true">#</a> 动态文本列表字段</h5><blockquote><p>同上述步骤一样，只不过在实体列表元素中选择动态文本列表字段，将其名称更改为申请信息2并设置列表字段配置属性值为申请人姓名和申请部门名称</p></blockquote><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>上述三个功能预览效果</p></blockquote><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="操作列" tabindex="-1"><a class="header-anchor" href="#操作列" aria-hidden="true">#</a> 操作列</h5><blockquote><p>同上述步骤一样，只不过在实体列表元素中选择操作列并设置其操作项的值为提交撤销</p></blockquote><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>预览效果</p></blockquote><figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="自定义常用过滤查询条件" tabindex="-1"><a class="header-anchor" href="#自定义常用过滤查询条件" aria-hidden="true">#</a> 自定义常用过滤查询条件</h4><h5 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求：</h5><ol><li>以采购申请单为案例，在单据列表界面的常用过滤条件中添加采购组织字段；</li><li>默认取当前组织，对单据列表数据进行过滤；</li><li>如果用户在过滤面板中，设置了采购组织值，则按照用户设置的组织过滤数据。</li></ol><h5 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h5><blockquote><p>编码且重启服务</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code> 
package kd.bos.form.list;

import java.util.ArrayList;
import java.util.EventObject;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import kd.bos.context.RequestContext;
import kd.bos.dataentity.entity.DynamicObject;
import kd.bos.dataentity.entity.DynamicObjectCollection;
import kd.bos.dataentity.entity.LocaleString;
import kd.bos.dataentity.serialization.SerializationUtils;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.entity.BillEntityType;
import kd.bos.filter.CommonFilterColumn;
import kd.bos.filter.FilterColumn;
import kd.bos.filter.FilterContainer;
import kd.bos.form.events.FilterContainerInitArgs;
import kd.bos.form.events.FilterContainerSearchClickArgs;
import kd.bos.form.events.SetFilterEvent;
import kd.bos.form.field.ComboItem;
import kd.bos.form.field.events.BeforeFilterF7SelectEvent;
import kd.bos.form.field.events.BeforeFilterF7SelectListener;
import kd.bos.list.IListView;
import kd.bos.list.ListShowParameter;
import kd.bos.list.plugin.AbstractListPlugin;
import kd.bos.orm.ORM;
import kd.bos.orm.query.QFilter;
import kd.bos.servicehelper.basedata.BaseDataServiceHelper;
import kd.bos.servicehelper.model.PermissionStatus;
import kd.bos.servicehelper.permission.PermissionServiceHelper;

/**  
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月3日
 * @return the bare_field_name
 * @version 1.0
 */  
public class DemoCustomCommonFilterPlugin extends AbstractListPlugin implements BeforeFilterF7SelectListener {

	/** 缓存标识 */
	private final static String CACHEKEY_ORGCOMBOITEMS = &quot;orgcomboitems&quot;;
	
	/** 组织主实体标识 */
	private final static String ORG_ENTITY = &quot;bos_org&quot;;
	
	/** 用户是否点击了过滤面板搜索按钮 */
	private boolean isClickSearch = false;
	
	/** 筛选组织：优先按用户在过滤面板中，设置的组织筛选数据；列表初始化时，按当前组织筛选数据 */
	private long orgId = 0;
	
 
	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: registerListener&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月3日
	 * @param e
	 * @see kd.bos.form.plugin.AbstractFormPlugin#registerListener(java.util.EventObject)
	 */
	@Override
	public void registerListener(EventObject e) {
		super.registerListener(e);
		// 侦听过滤面板上，过滤字段F7点击事件：设置自定义组织过滤字段，F7打开的基础资料列表
		FilterContainer filterContainer = this.getView().getControl(FILTERCONTAINERID);
		filterContainer.addBeforeF7SelectListener(this);
	}
	
	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: filterContainerInit&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 1. 界面初始化时，触发此事件；
	 * 2. 用户在过滤面板上，点击搜索时，也触发此事件
	 * 
	 * 1. 给常用过滤面板，增加组织过滤字段
	 * 2. 取默认过滤组织
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月3日
	 * @param args
	 * @see kd.bos.list.plugin.AbstractListPlugin#filterContainerInit(kd.bos.form.events.FilterContainerInitArgs)
	 */
	@Override
	public void filterContainerInit(FilterContainerInitArgs args) {
		super.filterContainerInit(args);
		// F7列表，不显示常用过滤，无需修改过滤字段信息
		ListShowParameter listShowParameter = (ListShowParameter) this.getView().getFormShowParameter();
		if (listShowParameter.isLookUp()) {
			return;
		}
		if (!this.isBillHasMainOrg()){
			// 列表绑定的单据，没有主业务单元字段：无需增加组织过滤字段
			return;
		}
		
		// 创建一个业务单元过滤字段，参与常用过滤
		CommonFilterColumn orgColumn = this.buildOrgFilterColumn();

		// 取到全部常用过滤字段
		List&lt;FilterColumn&gt; filterColumnList = args.getFilterContainerInitEvent().getCommonFilterColumns();

		// 如果常用过滤面板中，已经存在业务单元字段，不再重复添加（按FieldName匹配）
		if (!filterColumnList.contains(orgColumn)) {
			filterColumnList.add(orgColumn);

			// 界面初始化时，取登录组织，放在本地变量中（后续在setFilter事件据此构建过滤条件）
			if (!this.isClickSearch) {
				this.orgId = RequestContext.get().getOrgId();

				// 判断用户有没有获得当前组织的授权
				Set&lt;Long&gt; hasPermOrgs = new HashSet&lt;&gt;();
				if (orgColumn.getComboItems() != null) {
					for (ComboItem item : orgColumn.getComboItems()) {
						hasPermOrgs.add(Long.valueOf(item.getId()));
					}
				}
				if (!hasPermOrgs.contains(RequestContext.get().getOrgId())) {
					this.orgId = hasPermOrgs.iterator().next();
				}
			}
			// 设置组织过滤字段的选中值
			orgColumn.setDefaultValue(String.valueOf(this.orgId));
		}
	}
	
	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: filterContainerAfterSearchClick&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 用户在列表界面，点击过滤面板搜索按钮时，触发此事件
	 * 
	 * 1. 取用户选择的组织值，放在本地变量
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月3日
	 * @param args
	 * @see kd.bos.list.plugin.AbstractListPlugin#filterContainerAfterSearchClick(kd.bos.form.events.FilterContainerSearchClickArgs)
	 */
	@Override
	public void filterContainerAfterSearchClick(FilterContainerSearchClickArgs args) {
		super.filterContainerAfterSearchClick(args);
		
		this.isClickSearch = true;
		// 列表绑定的单据，没有主业务单元字段：无需按组织过滤
		if (!this.isBillHasMainOrg()) {
			return;
		}
		String orgFldName = this.getBillEntityType().getMainOrg() + &quot;.id&quot;;

		// 获取用户在过滤面板中设置的过滤条件：从中搜索出过滤组织值
		Map&lt;String, List&lt;Map&lt;String, List&lt;Object&gt;&gt;&gt;&gt; filterValues = args.getSearchClickEvent().getFilterValues();
		List&lt;Map&lt;String, List&lt;Object&gt;&gt;&gt; customFiterList = filterValues.get(&quot;customfilter&quot;);
		if (customFiterList == null)
			return;

		// 先清除本地变量值
		this.orgId = 0;
		
		// 逐项条件匹配，找出自定义的组织过滤字段
		for (int i = customFiterList.size() - 1; i &gt;= 0; i--) {
			Map&lt;String, List&lt;Object&gt;&gt; customFiter = customFiterList.get(i);
			List&lt;Object&gt; fieldNames = customFiter.get(&quot;FieldName&quot;);
			if (fieldNames == null || fieldNames.isEmpty()) {
				continue;
			}

			if (StringUtils.equals(orgFldName, (String) fieldNames.get(0))) {
				// 找到了自定义的组织过滤字段
				List&lt;Object&gt; orgIds = customFiter.get(&quot;Value&quot;);
				if (orgIds == null || orgIds.isEmpty()) {
					continue;
				}

				// 取用户在过滤面板上，选择的组织，放在本地变量中（后续在setFilter事件中要用到）
				this.orgId = Long.parseLong((String) orgIds.get(0));

				// 从条件集合中，移除组织值：
				// 避免由系统自动拼接组织过滤条件，改由本插件生成组织过滤条件
				customFiterList.remove(customFiter);
				break;
			}
		}
	}

	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: setFilter&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 在开始对列表数据进行过滤取数前，触发此事件
	 * 
	 * @remark 1. 使用本地组织值，生成列表过滤条件，添加到列表过滤条件中
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月3日
	 * @param e
	 * @see kd.bos.list.plugin.IListPlugin#setFilter(kd.bos.form.events.SetFilterEvent)
	 */
	@Override
	public void setFilter(SetFilterEvent e) {
		if (this.orgId == 0) {
		return;
	}
	// 调用基础封装的帮助类，生成组织筛选条件：
	// 返回的条件，可能包含了数据授权信息
	BaseDataServiceHelper helper = new BaseDataServiceHelper();
	QFilter qfilter = helper.getBaseDataFilter(this.getBillEntityId(), this.orgId);
	if (qfilter != null) {
		List&lt;QFilter&gt; filters = e.getQFilters();
		filters.add(qfilter);
		e.setQFilters(filters);
	}
	super.setFilter(e);
	}
	
	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: beforeF7Select&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 过滤面板，基础资料字段，点击F7时触发此事件
	 * 
	 * @remark 1. 如果点击的是自定义的组织过滤字段，则自行构建组织F7列表显示参数
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月3日
	 * @param arg0
	 * @see kd.bos.form.field.events.BeforeFilterF7SelectListener#beforeF7Select(kd.bos.form.field.events.BeforeFilterF7SelectEvent)
	 */
	@Override
	public void beforeF7Select(BeforeFilterF7SelectEvent arg0) {
		// 列表绑定的单据，没有主业务单元字段：无需按组织过滤
		if (!this.isBillHasMainOrg()) {
			return;
		}
		String orgFldName = this.getBillEntityType().getMainOrg() + &quot;.id&quot;;
		if (StringUtils.equals(orgFldName, arg0.getFieldName())) {
			arg0.setRefEntityId(ORG_ENTITY);
			arg0.setRefPropKey(&quot;id&quot;);
		}
	}
	
	/**
	 * &lt;p&gt;Title:getBillEntityId &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 获取列表绑定的单据类型
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月3日
	 * @return the bare_field_name
	 * @version 1.0
	 */
	private String getBillEntityId() {
		return ((IListView) this.getView()).getBillFormId();

	}
	
	/**  
	 * &lt;p&gt;Title:getBillEntityType &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 获取列表绑定的单据主实体
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月3日
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	private BillEntityType getBillEntityType() {
		return (BillEntityType) ((IListView) this.getView()).getListModel().getDataEntityType();
	}
	
	/**  
	 * &lt;p&gt;Title: isBillHasMainOrg&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 获取列表绑定的单据是否有主业务单元字段
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月3日
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */  
	private boolean isBillHasMainOrg() {
		return StringUtils.isNotBlank(this.getBillEntityType().getMainOrg());
	}
	
	/**  
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 构建组织过滤字段
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月3日
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */  
	private CommonFilterColumn buildOrgFilterColumn() {
		String mainOrgKey = this.getBillEntityType().getMainOrg(); // 主业务组织字段
		CommonFilterColumn orgColumn = new CommonFilterColumn();
		orgColumn.setKey(mainOrgKey + &quot;.id&quot;);
		orgColumn.setCaption(new LocaleString(&quot;业务单元&quot;));
		orgColumn.setFieldName(mainOrgKey + &quot;.id&quot;);
		orgColumn.setMustInput(true);
		// 获取登录用户，有查询权的组织
		List&lt;ComboItem&gt; combos = this.buildOrgComboItems();
		// 设置业务单元过滤字段的可选项
		orgColumn.setComboItems(combos);
		orgColumn.setType(&quot;enum&quot;);

		return orgColumn;
	}
	
	/**  
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 构建可选的组织选项
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月3日
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */  
	@SuppressWarnings(&quot;unchecked&quot;)
	private List&lt;ComboItem&gt; buildOrgComboItems() {
		// 尝试取缓存的过滤字段
		String cacheString = this.getPageCache().get(CACHEKEY_ORGCOMBOITEMS);
		if (StringUtils.isNotBlank(cacheString)) {
			// 已缓存：把缓存的字符串，反序列化为过滤字段
			return (List&lt;ComboItem&gt;) SerializationUtils.fromJsonStringToList(cacheString, ComboItem.class);
		}

		// 获取登录用户，有查询权的组织
		List&lt;ComboItem&gt; combos = new ArrayList&lt;&gt;();
		long userId = Long.parseLong(RequestContext.get().getUserId());
		List&lt;Long&gt; hasPermOrgs = PermissionServiceHelper.getAllPermissionOrgs(userId, this.getBillEntityId(), PermissionStatus.View);

		// 取这些组织的内码、名称
		if (!hasPermOrgs.isEmpty()) {
			ORM orm = ORM.create();
			DynamicObjectCollection col = orm.query(ORG_ENTITY, &quot;id, name&quot;, new QFilter[] { new QFilter(&quot;id&quot;, &quot;in&quot;, hasPermOrgs) });
			for (DynamicObject org : col) {
				if (org == null) {
					continue;
				}
				ComboItem item = new ComboItem();
				item.setId(String.valueOf(org.getPkValue()));
				item.setCaption(new LocaleString(org.getString(&quot;name&quot;)));
				item.setValue(String.valueOf(org.getPkValue()));
				combos.add(item);
			}
		}

		// 压入缓存
		cacheString = SerializationUtils.toJsonString(combos);
		this.getPageCache().put(CACHEKEY_ORGCOMBOITEMS, cacheString);

		return combos;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注册插件，步骤省略</p></blockquote><blockquote><p>预览效果，在预览之前请确保有多个业务单元，如图所示用代码控制其选择为当前业务单元，而动点击其它业务单元则会显无数据</p></blockquote><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="自定义功能按钮" tabindex="-1"><a class="header-anchor" href="#自定义功能按钮" aria-hidden="true">#</a> 自定义功能按钮</h4><h5 id="需求-1" tabindex="-1"><a class="header-anchor" href="#需求-1" aria-hidden="true">#</a> 需求</h5><blockquote><p>在单据列表界面，点击自定义按钮，自动选择列表所有数据</p></blockquote><h4 id="实现步骤-1" tabindex="-1"><a class="header-anchor" href="#实现步骤-1" aria-hidden="true">#</a> 实现步骤</h4><ol><li>添加按钮</li></ol><figure><img src="'+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>编码且重启服务</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.form.list;

import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.control.events.ItemClickEvent;
import kd.bos.list.BillList;
import kd.bos.list.plugin.AbstractListPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    自定义按钮实现选中所有列的功能
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月3日
 * @return the bare_field_name
 * @version 1.0
 */
public class DemoCustomButtonPlugin extends AbstractListPlugin {

	private static String KEY_CUSTOMBUTTON = &quot;tblcustombtn&quot;;
	
	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: itemClick&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月3日
	 * @param evt
	 * @see kd.bos.form.plugin.AbstractFormPlugin#itemClick(kd.bos.form.control.events.ItemClickEvent)
	 */
	@Override
	public void itemClick(ItemClickEvent evt) {
		super.itemClick(evt);
		String key = evt.getItemKey();
		if (StringUtils.equals(key, KEY_CUSTOMBUTTON)) {
			sampleFunction();
		}
	}
	
	/**  
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *   自定义按钮功能实现
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月3日
	 * @return the bare_field_name
	 * @version 1.0
	 */
	private void sampleFunction() {
		// 获取列表
		BillList billList = this.getControl(&quot;billlistap&quot;);
		billList.selectAllRows();
		this.getView().updateView();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>注册插件并保存，步骤省略</p></li><li><p>预览效果</p></li></ol><blockquote><p>如下图所示可以看到点击自定义按钮即实现了需求</p></blockquote><figure><img src="`+C+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="自定义列" tabindex="-1"><a class="header-anchor" href="#自定义列" aria-hidden="true">#</a> 自定义列</h4><h5 id="需求-2" tabindex="-1"><a class="header-anchor" href="#需求-2" aria-hidden="true">#</a> 需求</h5><blockquote><p>单据列表界面，在后台添加一个自定义列，在运行态展示添加数据</p></blockquote><h4 id="实现步骤-2" tabindex="-1"><a class="header-anchor" href="#实现步骤-2" aria-hidden="true">#</a> 实现步骤</h4><ol><li>编码且重启服务</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.form.list;

import kd.bos.dataentity.entity.LocaleString;
import kd.bos.form.events.BeforeCreateListColumnsArgs;
import kd.bos.list.ComboListColumn;
import kd.bos.list.MergeListColumn;
import kd.bos.list.plugin.AbstractListPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    自定义列
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月3日
 * @return the bare_field_name
 * @version 1.0
 */
public class DemoCustomColumnPlugin extends AbstractListPlugin {
	
	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: beforeCreateListColumns&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月3日
	 * @param args
	 * @see kd.bos.list.plugin.IListPlugin#beforeCreateListColumns(kd.bos.form.events.BeforeCreateListColumnsArgs)
	 */
		@Override
		public void beforeCreateListColumns(BeforeCreateListColumnsArgs args) {
			super.beforeCreateListColumns(args);
			
			// 添加自定义列（控件为文本类型）
			ComboListColumn colUsage = new ComboListColumn();
			colUsage.setListFieldKey(&quot;usage&quot;);
			MergeListColumn mergeListColumn1 = new MergeListColumn();//创建一个列
			mergeListColumn1.setKey(&quot;mergeListColumn1&quot;);
			
			LocaleString titleUsage = new LocaleString(&quot;用途(自定义列)&quot;);
			mergeListColumn1.setCaption(titleUsage);
			mergeListColumn1.setFontSize(20);
			mergeListColumn1.setForeColor(&quot;purple&quot;);
			mergeListColumn1.getItems().add(colUsage);
			args.addListColumn(mergeListColumn1);
		}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>注册插件并保存，步骤省略</p></li><li><p>预览效果</p></li></ol><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>bug:可以实现插入列，但暂未找到实现插入列中数据的方法</p></blockquote><p><strong>以上就是我关于 <em>金蝶云苍穹单据列表开发demo</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',53);function q(x,I){const n=v("ExternalLinkIcon");return l(),s("div",null,[d(" more "),i("h1",_,[L,e(),i("a",S,[e("55-金蝶云苍穹单据列表开发demo.md"),r(n)])]),F])}const E=t(y,[["render",q],["__file","kingdee55.html.vue"]]);export{E as default};
