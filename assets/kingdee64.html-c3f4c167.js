import{_ as t,X as l,Y as d,a1 as s,Z as e,$ as i,a2 as a,a0 as r,F as v}from"./framework-68dd73a2.js";const o="/blog/assets/Kingdee_64_1.png",c={},u={id:"_64-金蝶云苍穹插件原理理解与使用-md",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_64-金蝶云苍穹插件原理理解与使用-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--64--e38dkx4s63al5vl41bh47aa695akzy1p1aivoefjz78a.md",target:"_blank",rel:"noopener noreferrer"},p=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="云苍穹插件使用门槛" tabindex="-1"><a class="header-anchor" href="#云苍穹插件使用门槛" aria-hidden="true">#</a> 云苍穹插件使用门槛</h4><ol><li><p>Java前端基础知识</p></li><li><p>云苍穹页面使用的知识储备</p></li><li><p>插件的类选择以及事件选择相关知识</p></li></ol><h4 id="如何开发云苍穹插件" tabindex="-1"><a class="header-anchor" href="#如何开发云苍穹插件" aria-hidden="true">#</a> 如何开发云苍穹插件</h4><ol><li><p>确定应用场景,选择插件基类</p></li><li><p>确定事件源与控件</p></li></ol><blockquote><p>其分为有交互界面的应用场景（如表单、单据列表等）没有交互界面的应用场景（如单据操作、单据转换、关联反写、生产凭证等）两类;其中有交互界面的应用场景在界面加载、关闭时，用户与界面，以及界面上的控件交互时，会触发相应的插件事件;没有交互界面的应用场景其插件事件是由服务引擎按顺序触发的,这些应用场景，不需要关注事件源、控件；只需要根据业务需求，捕获合适的插件事件即可;</p></blockquote><ol start="3"><li>响应插件事件</li></ol><blockquote><p>没有交互界面的应用场景，插件基类已经实现了必要的插件接口，插件只需要扩展插件基类，重写事件方法即可完成事件的捕捉：</p></blockquote><blockquote><p>有交互界面的应用场景，插件基类实现了表单界面支持的插件接口，但没有实现各种控件的插件接口。如果只是要捕获表单界面事件，则扩展插件基类，重写表单事件方法即可。<strong>如果要捕获各种控件事件，则需要：</strong> 在插件类定义，实现控件支持的插件事件接口,例如树形控件支持的节点勾选插件事件接口TreeNodeCheckListener；实现控件的插件事件接口中的方法，完成事件的捕捉；在表单界面插件registerListener事件，向控件实例注册本插件实例，完成控件与插件实例的绑定：控件事件发生时，即触发其所绑定的插件事件；</p></blockquote><blockquote><p>如下例，插件需要响应树形控件的节点勾选treeNodeCheck事件：</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.sample.dynamicform.pcform.control.template;
import java.util.EventObject;
import java.util.List;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.control.TreeView;
import kd.bos.form.control.events.TreeNodeCheckEvent;
import kd.bos.form.control.events.TreeNodeCheckListener;
import kd.bos.form.plugin.AbstractFormPlugin;

public class TreeViewTreeNodeCheck extends AbstractFormPlugin implements TreeNodeCheckListener {
	
	private final static String KEY_TREEVIEW1 = &quot;treeviewap1&quot;;

	@Override
	public void registerListener(EventObject e) {
		super.registerListener(e);
		
		// 侦听树节点勾选事件
		TreeView treeView = this.getView().getControl(KEY_TREEVIEW1);
		treeView.addTreeNodeCheckListener(this);
	}

	@Override
	public void beforeBindData(EventObject e) {
		super.beforeBindData(e);
		TreeView treeView = this.getView().getControl(KEY_TREEVIEW1);
		treeView.setMulti(true);	// 支持多选
	}

	@Override
	public void treeNodeCheck(TreeNodeCheckEvent arg0) {
		TreeView treeView = (TreeView) arg0.getSource();
		if (StringUtils.equals(treeView.getKey(), KEY_TREEVIEW1)){
			List&lt;String&gt; selectNodeIds = treeView.getTreeState().getCheckedNodeIds();
			// TODO 在此添加业务逻辑
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="云苍穹插件编程原理" tabindex="-1"><a class="header-anchor" href="#云苍穹插件编程原理" aria-hidden="true">#</a> 云苍穹插件编程原理</h4><blockquote><p>理解云苍穹插件原理只需要明白三个概念即可</p></blockquote><h5 id="什么是表单视图模型" tabindex="-1"><a class="header-anchor" href="#什么是表单视图模型" aria-hidden="true">#</a> 什么是表单视图模型？</h5><p>金蝶云苍穹，是B/S结构的，使用不同的客户端（PC端、移动端），通过网络连接到统一的服务端。用户看到的交互界面，是运行在客户端的，而业务逻辑和业务插件，则运行在服务端；业务插件运行在服务端，没办法直接获取到客户端界面上控件句柄，不能直接控制前端控件。但插件可以通过系统封装的视图模型接口IFormView，间接的访问、控制前端界面。所以<strong>IFormView则是表单视图模型</strong>，插件可以通过this.getView()方法，获取表单的视图模型接口实例；</p><h5 id="什么是控件编程模型" tabindex="-1"><a class="header-anchor" href="#什么是控件编程模型" aria-hidden="true">#</a> 什么是控件编程模型？</h5><p>通过系统封装的各种控件代理对象，间接的访问、控制前端界面上的控件；<strong>这些运行在服务端的控件代理对象，称为控件编程模型，</strong> 或简称为控件、编程模型等。可以通过this.getView().getControl(String key)方法，获取到控件编程模型实例；</p><h5 id="什么是表单数据模型" tabindex="-1"><a class="header-anchor" href="#什么是表单数据模型" aria-hidden="true">#</a> 什么是表单数据模型？</h5><p>表单的界面与数据，是分离：</p><ul><li>界面显示在客户端浏览器或者移动端，在服务端，系统封装了视图模型及控件编程模型来间接控制前端界面及前端控件；</li><li>数据存储在服务端，在服务端，系统封装了数据模型，来控制界面上的数据；</li></ul><p>表单的数据模型，提供各种方法访问界面数据，并且持有：</p><ul><li>主实体模型：MainEntityType，表单运行时元数据对象，包含： <ul><li>子实体：EntityType，对应单据体、子单据体等；</li><li>属性：DynamicProperty，对应字段；</li></ul></li><li>界面数据包：DynamicObject，基于主实体模型构建的一个数据字典，存储单据体、字段值；</li></ul><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="插件的简单试验" tabindex="-1"><a class="header-anchor" href="#插件的简单试验" aria-hidden="true">#</a> 插件的简单试验</h4><ol><li>视图模型</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.dynamicform.plugin;

import kd.bos.entity.datamodel.IDataModel;
import kd.bos.form.IFormView;
import kd.bos.form.IPageCache;
import kd.bos.form.control.Control;
import kd.bos.form.plugin.AbstractFormPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    动态表单插件基类方法试验
 *    自定义动态表单界面插件，必须派生自AbstractFormPlugin，重写事件处理方法。
 *    如下例，定义了一个动态表单界面插件（未捕获事件）：
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月7日
 * @version 1.0
 */
public class FormViewSample extends AbstractFormPlugin {

	/**
	 * void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: getFormViewInstance&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月7日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @version 1.0
	 */
	private void getFormViewInstance() {
		IFormView view = this.getView();//获取动态表单界面视图模型接口IFormView的实例
		IDataModel modal = this.getModel();//获取动态表单界面数据模型接口IDataModel的实例
		IPageCache pageCache = this.getPageCache();//获取页面缓存管理器，存取数据到缓存中
		
		Control control = this.getControl(&quot;textfield&quot;);//	获取界面上的控件
		System.out.println(control.toString());
		
		this.addClickListeners(&quot;&quot;);//注册插件，监听按钮点击事件
		this.addItemClickListeners(&quot;&quot;);//注册插件，监听子菜单项点击事件
		
		view.getPageId();//表单被加载时，会随机生成一个界面PageId；一个表单被两个用户同时打开时，生成的界面PageId不同； 可以根据返回的pageId，获取到表单视图模型实例；
		view.getView(&quot;&quot;);//指定PageId，获取对应的表单视图模型；可以据此对目标表单进行控制；
		view.getEntityId();//获取表单对应的主实体标识
		view.getModel();//获取表单数据模型实例
		view.sendFormAction(view);//把目标表单的控制指令发送给前端；插件调用了其他表单的控制方法后，必须调用本方法，把控制指令，发送给前端；
		view.getParentView();//获取父表单视图模型实例；
		view.getMainView();//获取主界面视图模型实例；
		view.updateView();//把数据模型中的数据，发送到前端界面；定义了多个重载函数，可以指定只刷新单个单据体、单个控件
		view.getControl(&quot;&quot;);//获取表单的控件实例
		view.getRootControl();//获取表单实例
		view.getService(null);//	获取服务实例
		view.invokeOperation(&quot;&quot;);//执行操作
		view.activate();//激活表单
		view.close();//关闭表单
		view.setEnable(true);//设置控件可用性
		view.setVisible(true);//设置控件可见性
		view.showForm(null);//传入表单显示参数，打开一个新的表单，作为本表单的子表单；该表单关闭时，会触发本表单插件 closedCallBack事件,请参阅表单closedCallBack事件说明及示例；
		view.getFormShowParameter();//获取表单显示参数
		view.cacheFormShowParameter();//修改表单显示参数对象属性值之后，调用本方法把参数更新到缓存
		view.returnDataToParent(null);//设置返回到父表单的返回值
		view.openUrl(&quot;&quot;);//打开一个新容器链接到指定的URL
		view.showUpload(null, &quot;&quot;);//显示一个文件上传界面;文件上传完毕，确认返回时，会触发插件afterUpload事件;请参阅按钮afterUpload事件说明及示例；
		view.showMessage(&quot;&quot;);//单据内悬浮消息框，默认没有按钮，自动消失
		view.showErrMessage(&quot;&quot;, &quot;&quot;);//显示错误消息
		view.showOperationResult(null);//显示操作结果
		view.showConfirm(&quot;&quot;, null);//显示确认消息；用户确认完毕，会触发confirmCallBack事件；请参阅confirmCallBack事件说明及实例
		view.showSuccessNotification(&quot;&quot;);//单据内成功悬浮消息框，默认2秒自动消失消息内容,不能超过50字,超过部分用三个点代替
		view.showErrorNotification(&quot;&quot;);//单据内失败悬浮消息框，需要手动关闭,消息内容,不能超过50字,超过部分用三个点代替
		view.showTipNotification(&quot;&quot;);//单据内提示类别悬浮消息框，提示类会显示按钮，需要手动关闭消息内容,不能超过50字,超过部分用三个点代替
		view.showRobotMessage(&quot;&quot;);//发送消息给机器人助手
		view.closeRobotMessage();//关闭消息给机器人助手
		view.showFieldTip(null);//字段上显示提示信息
		view.showFieldTips(null);//字段上显示提示信息（批量）
		
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>数据模型</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.dynamicform.plugin;

import kd.bos.entity.datamodel.IDataModel;
import kd.bos.form.plugin.AbstractFormPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    动态表单界面插件可以通过系统封装的表单数据模型，访问界面数据。
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月7日
 * @return the bare_field_name
 * @version 1.0
 */
public class FormModelSample extends AbstractFormPlugin {

	/**  
	 * &lt;p&gt;Title: getFormModelInstance&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月7日
	 * @return the bare_field_name
	 * @version 1.0
	 */
	private void getFormModelInstance() {
		IDataModel model = this.getModel();//获取动态表单界面数据模型接口IDataModel的实例
		
		model.getDataEntityType();//获取运行时表单实体元数据对象，又称为主实体模型；通过表单主实体模型，可以或者界面上包含了那些单据体、字段
		model.getProperty(&quot;&quot;);//获取运行时字段元数据对象，又称为实体的属性对象
		model.createNewData();//根据表单主实体模型，创建表单新的数据包，字段填写好默认值
		model.getDataEntity();//	获取表单数据包
		model.updateCache();//提交当前表单数据包到缓存
		model.getValue(&quot;&quot;);//	获取字段值
		model.setValue(&quot;&quot;, null);//设置字段值
		model.setItemValueByNumber(null, null, null);//根据基础资料的编码，设置基础资料字段值
		model.setItemValueByID(null, null, null);//根据基础资料的内码，设置基础资料字段值
		model.getContextVariable(null);//获取上下文变量
		model.putContextVariable(null, null);//添加上下文变量
		model.removeContextVariable(null);//删除上下文变量
		model.addDataModelListener(null);//订阅模型相关事件
		model.addDataModelChangeListener(null);//订阅模型改变事件
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例" aria-hidden="true">#</a> 使用案例</h4><blockquote><p>使用案例在后续写出来。。</p></blockquote><p><strong>以上就是我关于 <em>金蝶云苍穹插件原理理解与使用</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,35);function g(h,w){const n=v("ExternalLinkIcon");return l(),d("div",null,[s(" more "),e("h1",u,[m,i(),e("a",b,[i("64-金蝶云苍穹插件原理理解与使用.md"),a(n)])]),p])}const f=t(c,[["render",g],["__file","kingdee64.html.vue"]]);export{f as default};
