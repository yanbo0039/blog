import{_ as t,X as l,Y as s,a1 as d,Z as i,$ as e,a2 as r,a0 as a,F as v}from"./framework-68dd73a2.js";const m="/blog/assets/Kingdee_65_1.png",c="/blog/assets/Kingdee_65_1.gif",u={},o={id:"_65-金蝶云苍穹动态表单插件loadcustomcontrolmetas事件案例-md",tabindex:"-1"},b=i("a",{class:"header-anchor",href:"#_65-金蝶云苍穹动态表单插件loadcustomcontrolmetas事件案例-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--65-loadCustomControlMetas-jc83b8dw6jxa485bgx5ag4ev80kee1azw6ah30l2nsch9ub2yh7i2h.md",target:"_blank",rel:"noopener noreferrer"},g=a('<ol><li><p>新建对话模态框动态表单</p></li><li><p>向其内容区添加Flex面板(更改标识为myfieldcontainer)和单据体后保存</p></li></ol><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>新建插件类进行编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.dynamicform.plugin;

import java.util.EventObject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import kd.bos.dataentity.entity.DynamicObject;
import kd.bos.dataentity.entity.DynamicObjectCollection;
import kd.bos.dataentity.entity.LocaleString;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.entity.EntryType;
import kd.bos.entity.MainEntityType;
import kd.bos.entity.datamodel.events.BizDataEventArgs;
import kd.bos.entity.datamodel.events.GetEntityTypeEventArgs;
import kd.bos.entity.property.TextProp;
import kd.bos.exception.ErrorCode;
import kd.bos.exception.KDException;
import kd.bos.form.ClientProperties;
import kd.bos.form.container.Container;
import kd.bos.form.control.Button;
import kd.bos.form.control.Control;
import kd.bos.form.control.EntryGrid;
import kd.bos.form.control.events.ClickListener;
import kd.bos.form.events.LoadCustomControlMetasArgs;
import kd.bos.form.events.OnGetControlArgs;
import kd.bos.form.field.TextEdit;
import kd.bos.form.plugin.AbstractFormPlugin;
import kd.bos.metadata.entity.commonfield.TextField;
import kd.bos.metadata.form.container.FlexPanelAp;
import kd.bos.metadata.form.control.ButtonAp;
import kd.bos.metadata.form.control.EntryAp;
import kd.bos.metadata.form.control.EntryFieldAp;
import kd.bos.metadata.form.control.FieldAp;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    loadCustomControlMetas 事件试验
 *    ClickListener接口是为了让 
 *    getEntityType createNewData 这两个方法实现
 *    
 *    暂未试验成功，有bug
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月6日
 * @version 1.0
 */
public class LoadCustomControlMetasSample extends AbstractFormPlugin implements ClickListener {

	private final static String KEY_ENTRYENTITY = &quot;entryentity&quot;;//单据体(需要在页面新建)
	private final static String KEY_MYFIELDCONTAINER = &quot;myfieldcontainer&quot;;//Flex面板(需要在页面新建)
	private final static String KEY_AUTOTEXT1 = &quot;autotext1&quot;;
	private final static String KEY_AUTOTEXT2 = &quot;autotext2&quot;;
	private final static String KEY_AUTOBUTTON1 = &quot;autobutton1&quot;;
	
	/**
	 * &lt;p&gt;Title: loadCustomControlMetas&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    显示界面前，构建界面显示参数时，触发此事件；
	 *    插件可以在此事件修改显示参数，向前端动态增加控件。
	 *    特别说明：
	 *    动态添加控件时，还需要同步处理onGetControl事件，向表单添加控件编程模型实例，并侦听控件的插件事件；
	 *    动态增加字段，则还需要同步处理getEntityType, createNewData, beforeBindData事件，调整后台数据模型及数据包。
	 *    需要同步处理的事件:
	 *    public void loadCustomControlMetas(LoadCustomControlMetasArgs e) ：向前端浏览器界面输出动态控件的元数据；
	 *    public void onGetControl(OnGetControlArgs e)：向后台视图模型，输出动态控件的编程模型实例，并侦听控件的事件
	 *    public void getEntityType(GetEntityTypeEventArgs e)：向界面主实体模型，动态注册新的属性对象，存储动态添加的字段值；
	 *    public void createNewData(BizDataEventArgs e)：基于修改后的实体模型，创建界面数据包，包含动态添加的字段值；
	 *    public void beforeBindData(EventObject e)：向后台视图模型，添加动态字段的控件编辑模型；
	 *    随后，系统将基于这些新添加的字段编辑模型(FieldEdit)，进行数据绑定。
	 *    如果不处理这个事件，动态添加的字段值，显示不出来。
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.form.plugin.AbstractFormPlugin#loadCustomControlMetas(kd.bos.form.events.LoadCustomControlMetasArgs)
	 * @version 1.0
	 */
	@Override
	public void loadCustomControlMetas(LoadCustomControlMetasArgs e) {
		super.loadCustomControlMetas(e);
		// TODO 在此修改显示参数，向前端动态添加控件配置
		// 动态添加单据头字段、按钮
		FlexPanelAp headAp = this.createDynamicPanel();
		Map&lt;String, Object&gt; mapHead = new HashMap&lt;&gt;();
		mapHead.put(ClientProperties.Id, KEY_MYFIELDCONTAINER);
		mapHead.put(ClientProperties.Items, headAp.createControl().get(ClientProperties.Items));
		e.getItems().add(mapHead);
		
		// 动态添加单据体字段
		EntryAp entryAp = this.createDynamicEntryAp();
		Map&lt;String, Object&gt; mapEntry = new HashMap&lt;&gt;();
		mapEntry.put(ClientProperties.Id, KEY_ENTRYENTITY);
		mapEntry.put(ClientProperties.Columns, entryAp.createControl().get(ClientProperties.Columns));
		e.getItems().add(mapEntry);
	}
	
	/**
	 * &lt;p&gt;Title: getEntityType&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    此事件在系统要用到表单主实体模型时触发
	 *    插件修改原始主实体，注册自定义属性，返回新的主实体给系统
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.datamodel.events.IDataModelListener#getEntityType(kd.bos.entity.datamodel.events.GetEntityTypeEventArgs)
	 * @version 1.0
	 */
	@Override
	public void getEntityType(GetEntityTypeEventArgs e) {
		// TODO 在此修改实体模型，增加属性
		
		// 取原始的主实体
		MainEntityType oldMainType = e.getOriginalEntityType();
		// 复制主实体
		MainEntityType newMainType = null;
		try{
			newMainType = (MainEntityType)oldMainType.clone();
		}
		catch (CloneNotSupportedException exp){
			throw new KDException(exp, new ErrorCode(&quot;LoadCustomControlMetasSample&quot;, exp.getMessage()));
		}

		// 为自定义的文本字段，向主实体注册文本属性
		this.registDynamicProps(newMainType);
		
		// 回传主实体给系统
		e.setNewEntityType(newMainType);
	}

	/**
	 * &lt;p&gt;Title: createNewData&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    此事件在表单创建界面数据包时触发
	 *    由插件自行创建界面数据包，包含自定义字段
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.datamodel.events.IDataModelListener#createNewData(kd.bos.entity.datamodel.events.BizDataEventArgs)
	 * @version 1.0
	 */
	@Override
	public void createNewData(BizDataEventArgs e) {
		// TODO 在此基于调整后的实体模型，创建界面数据包
		
		DynamicObject dataEntity = new DynamicObject(this.getModel().getDataEntityType());
		dataEntity.set(KEY_AUTOTEXT1, &quot;动态文本字段1的值&quot;);
		
		DynamicObjectCollection rows = dataEntity.getDynamicObjectCollection(KEY_ENTRYENTITY);
		DynamicObject newRow = new DynamicObject(rows.getDynamicObjectType());
		newRow.set(KEY_AUTOTEXT2, &quot;动态文本字段2的值&quot;);
		
		rows.add(newRow);
		
		e.setDataEntity(dataEntity);
	}
	
	/**
	 * &lt;p&gt;Title: beforeBindData&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 此事件在把数据绑定到界面之前触发：
	 * 系统会调用FormDataBinder对象，把字段值输出给前端字段编辑控件；
	 * 动态添加的字段，在FormDataBinder中并没有记录，因此，默认不会绑定动态添加的字段值；
	 * 必须在此事件，向FormDataBinder中注册动态添加的字段
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.form.plugin.AbstractFormPlugin#beforeBindData(java.util.EventObject)
	 * @version 1.0
	 */
	@Override
	public void beforeBindData(EventObject e) {
		// TODO 在此向界面编程模型，动态添加字段编程模型(FieldEdit)
		
		// 单据头添加的字段、控件，注入到容器面板的控件编程模型中
		FlexPanelAp dynamicPanel = this.createDynamicPanel();
		Container myFldPanel = this.getView().getControl(KEY_MYFIELDCONTAINER);
		myFldPanel.getItems().addAll(dynamicPanel.buildRuntimeControl().getItems());
		this.getView().createControlIndex(myFldPanel.getItems());
		
		// 单据体添加的字段，注入到单据体表格的控件编程模型中
		EntryAp dynamicEntryAp = this.createDynamicEntryAp();
		EntryGrid entryGrid = this.getView().getControl(KEY_ENTRYENTITY);
		List&lt;Control&gt; fieldEdits = dynamicEntryAp.buildRuntimeControl().getItems();
		for(Control fieldEdit : fieldEdits){
			fieldEdit.setView(this.getView());
			entryGrid.getItems().add(fieldEdit);
		}
	}

	/**
	 * &lt;p&gt;Title: onGetControl&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 用户与自定义的控件进行交互时，会触发此事件
	 * 插件在此事件中，创建自定义控件的编程模型，并侦听其事件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.form.plugin.AbstractFormPlugin#onGetControl(kd.bos.form.events.OnGetControlArgs)
	 * @version 1.0
	 */
	@Override
	public void onGetControl(OnGetControlArgs e) {
		// TODO 在此创建动态控件的实例，并捕获控件事件
		if (StringUtils.equals(KEY_AUTOBUTTON1, e.getKey())){
			// 用户点击按钮时，会触发此事件：创建按钮的控件编程模型Button实例返回
			
			Button button = new Button();
			button.setKey(KEY_AUTOBUTTON1);	// 必须
			button.setView(this.getView()); // 必须
			
			button.addClickListener(this);
			e.setControl(button);
		}
		else if (StringUtils.equals(KEY_AUTOTEXT1, e.getKey())){
			// 用户修改了文本1字段值，前端上传字段值时，会先取字段的控件编程模型；
			// 如果没有本段代码，字段值上传失败，不会修改到数据模型中
			TextEdit textEdit = new TextEdit();
			textEdit.setKey(KEY_AUTOTEXT1);
			textEdit.setView(this.getView());
			e.setControl(textEdit);
		}
		else if (StringUtils.equals(KEY_AUTOTEXT2, e.getKey())){
			TextEdit textEdit = new TextEdit();
			textEdit.setKey(KEY_AUTOTEXT2);
			textEdit.setEntryKey(KEY_ENTRYENTITY);
			textEdit.setView(this.getView());
			e.setControl(textEdit);
		}
	}
	
	/**
	 * &lt;p&gt;Title: click&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param evt
	 * @see kd.bos.form.plugin.AbstractFormPlugin#click(java.util.EventObject)
	 * @version 1.0
	 */
	@Override
	public void click(EventObject evt) {
		super.click(evt);
		Control source = (Control)evt.getSource();
		if (StringUtils.equals(source.getKey(), KEY_AUTOBUTTON1)){
			String text1 = (String)this.getModel().getValue(KEY_AUTOTEXT1);
			String text2 = (String)this.getModel().getValue(KEY_AUTOTEXT2);
			this.getView().showMessage(&quot;动态文本1：&quot; + text1 + &quot;   动态文本字段2：&quot; + text2);
		}
	}
	
	/** 
	 * FlexPanelAp&lt;/br&gt;
	 * &lt;p&gt;Title: createDynamicPanel&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 创建一个面板，并向其中动态添加字段、控件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * see_to_overridden
	 * @version 1.0
	 */
	private FlexPanelAp createDynamicPanel(){
		
		FlexPanelAp headPanelAp = new FlexPanelAp();
		headPanelAp.setKey(&quot;headAp&quot;);

		// 动态添加一个文本字段
		FieldAp fieldAp = new FieldAp();
		fieldAp.setId(KEY_AUTOTEXT1);
		fieldAp.setKey(KEY_AUTOTEXT1);
		fieldAp.setName(new LocaleString(&quot;自动文本1&quot;));
		fieldAp.setBackColor(&quot;#FFFFFF&quot;);
		fieldAp.setFireUpdEvt(true);	// 即时触发值更新事件
		
		TextField field = new TextField();
		field.setId(KEY_AUTOTEXT1);
		field.setKey(KEY_AUTOTEXT1);
		fieldAp.setField(field);
		
		headPanelAp.getItems().add(fieldAp);
		
		// 动态添加一个按钮
		ButtonAp buttonAp = new ButtonAp();
		buttonAp.setId(KEY_AUTOBUTTON1);
		buttonAp.setKey(KEY_AUTOBUTTON1);
		buttonAp.setName(new LocaleString(&quot;自动添加的按钮&quot;));
		
		headPanelAp.getItems().add(buttonAp);
		return headPanelAp;
	}
	
	/**
	 * &lt;p&gt;Title: createDynamicEntryAp&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 创建一个单据体表格，并向其中动态添加字段
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * see_to_overridden
	 * @version 1.0
	 */
	private EntryAp createDynamicEntryAp(){
		
		EntryAp entryAp = new EntryAp();
		entryAp.setKey(&quot;entryap&quot;);
		
		// 动态添加一个文本字段
		EntryFieldAp fieldAp = new EntryFieldAp();
		fieldAp.setId(KEY_AUTOTEXT2);
		fieldAp.setKey(KEY_AUTOTEXT2);
		fieldAp.setName(new LocaleString(&quot;自动文本2&quot;));
		fieldAp.setFireUpdEvt(true);	// 即时触发值更新事件
		
		TextField field = new TextField();
		field.setId(KEY_AUTOTEXT2);
		field.setKey(KEY_AUTOTEXT2);
		fieldAp.setField(field);
		
		entryAp.getItems().add(fieldAp);
		
		return entryAp;
	}
	
	/**
	 *  void&lt;/br&gt;
	 * &lt;p&gt;Title: registDynamicProps&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 向主实体注册动态添加的属性
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param newMainType
	 * @version 1.0
	 */
	private void registDynamicProps(MainEntityType newMainType){
		// 向单据头动态注册一个新的文本属性
		TextProp textProp1 = new TextProp();
		
		textProp1.setName(KEY_AUTOTEXT1);	// 标识
		textProp1.setDisplayName(new LocaleString(&quot;自动文本1&quot;));	// 标题
		
		textProp1.setDbIgnore(true);	// 此字段不需到物理表格取数
		textProp1.setAlias(&quot;aa&quot;);			// 物理字段名
		
		// 把新字段，注册到单据头
		newMainType.registerSimpleProperty(textProp1);
		
		// 向单据体动态注册一个新的文本属性
		EntryType entryType = (EntryType)newMainType.getAllEntities().get(KEY_ENTRYENTITY);
		
		TextProp textProp2 = new TextProp();
		
		textProp2.setName(KEY_AUTOTEXT2);	// 标识
		textProp2.setDisplayName(new LocaleString(&quot;自动文本2&quot;));	// 标题
		
		textProp2.setDbIgnore(true);	// 此字段不需到物理表格取数
		textProp2.setAlias(&quot;bb&quot;);			// 物理字段名
		
		// 把新字段，注册到单据体
		entryType.registerSimpleProperty(textProp2);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><p>重启debug启动DebugServer类后在页面注册插件</p></li><li><p>测试，如下图所示，自测通过</p></li></ol><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹动态表单插件loadCustomControlMetas事件案例</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',11);function y(E,T){const n=v("ExternalLinkIcon");return l(),s("div",null,[d(" more "),i("h1",o,[b,e(),i("a",p,[e("65-金蝶云苍穹动态表单插件loadCustomControlMetas事件案例.md"),r(n)])]),g])}const _=t(u,[["render",y],["__file","65-金蝶云苍穹动态表单插件loadCustomControlMetas事件案例.html.vue"]]);export{_ as default};
