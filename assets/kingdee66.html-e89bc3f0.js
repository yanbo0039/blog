import{_ as t,X as l,Y as s,a1 as d,Z as e,$ as i,a2 as r,a0 as v,F as a}from"./framework-68dd73a2.js";const c={},u={id:"_66-金蝶云苍穹动态表单插件registerlistener事件案例-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_66-金蝶云苍穹动态表单插件registerlistener事件案例-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--66-registerListener-eh04aedr9hra096az21as9drq7iwlwa1s3abb8il76byf5alsg8r0g.md",target:"_blank",rel:"noopener noreferrer"},b=v(`<ol><li><p>新建动态表单对话框模板</p></li><li><p>新增Flex面板在内容区</p></li></ol><blockquote><p>添加工具栏在Flex面板中，并将其中的按钮删除只剩一个，将其标识更改为baritem1，将其名称更改为工具栏按钮</p></blockquote><blockquote><p>添加按钮在Flex面板中，将其标识更改为buttonap1</p></blockquote><blockquote><p>添加单据体在Flex面板中，并在其中添加文本字段一个</p></blockquote><blockquote><p>添加树形控件在Flex面板中，将其标识更改为treeviewap1</p></blockquote><blockquote><p>将加树形菜单在Flex面板中，将其标识更改为treemenuap1</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_66_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>保存后新建插件类并进行编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.dynamicform.plugin;

import java.util.ArrayList;
import java.util.EventObject;
import java.util.List;

import kd.bos.dataentity.utils.StringUtils;
import kd.bos.entity.tree.TreeMenuNode;
import kd.bos.entity.tree.TreeNode;
import kd.bos.form.control.Button;
import kd.bos.form.control.Control;
import kd.bos.form.control.EntryGrid;
import kd.bos.form.control.Toolbar;
import kd.bos.form.control.TreeMenu;
import kd.bos.form.control.TreeView;
import kd.bos.form.control.events.ClickListener;
import kd.bos.form.control.events.ItemClickEvent;
import kd.bos.form.control.events.ItemClickListener;
import kd.bos.form.control.events.RowClickEvent;
import kd.bos.form.control.events.RowClickEventListener;
import kd.bos.form.control.events.TreeMenuClickListener;
import kd.bos.form.control.events.TreeNodeClickListener;
import kd.bos.form.control.events.TreeNodeEvent;
import kd.bos.form.plugin.AbstractFormPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    registerListener 事件试验
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月6日
 * @version 1.0
 */
public class RegisterListenerSample extends AbstractFormPlugin
		implements ItemClickListener, ClickListener, RowClickEventListener, TreeNodeClickListener,TreeMenuClickListener  {

	private final static String KEY_MBAR = &quot;tbmain&quot;;//工具栏
	private final static String KEY_BARITEM1 = &quot;baritem1&quot;;//工具栏里的按钮
	private final static String KEY_BUTTON1 = &quot;buttonap1&quot;;//按钮
	private final static String KEY_ENTRYENTITY = &quot;entryentity&quot;;//单据体行
	private final static String KEY_TREEVIEW1 = &quot;treeviewap1&quot;;//树型控件
	private final static String KEY_TREEMENU1 = &quot;treemenuap1&quot;;//树型菜单
	
	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: afterBindData&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    界面数据包构建完毕，生成指令，刷新前端字段值、控件状态之后，触发此事件；
	 *    插件可以在此事件，根据各字段值数据，重新设置控件、字段的可用、可见性等。
	 *    不要在此事件，修改字段值。
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月9日
	 * @param e
	 * @see kd.bos.form.plugin.AbstractFormPlugin#afterBindData(java.util.EventObject)
	 */
	@Override
	public void afterBindData(EventObject e) {
		super.afterBindData(e);
		//为树形控件添加数据
		TreeView treeView = this.getView().getControl(KEY_TREEVIEW1);
		this.constructorDataforTreeView(treeView);//将其添加数据
		// 为树形菜单添加数据
		TreeMenu treeMenu = this.getControl(KEY_TREEMENU1);
		this.constructorDataforTreeMenu(treeMenu);
	}
	
	private void constructorDataforTreeMenu(TreeMenu tree) {
		   // 构造节点数据
	    List&lt;TreeMenuNode&gt; nodes = new ArrayList&lt;&gt;();
	    // 一级节点
	    TreeMenuNode level_1_node = new TreeMenuNode(&quot;&quot;,&quot;a1&quot;,&quot;node1&quot;);
	    // 一级子节点
	    TreeMenuNode level_1_1_node = new TreeMenuNode(&quot;a1&quot;,&quot;a1_1&quot;,&quot;node1_1&quot;);
	    // 将一级子节点插入到其父结点中
	    level_1_node.addChild(level_1_1_node);
	    //二级节点
	    TreeMenuNode level_2_node = new TreeMenuNode(&quot;&quot;,&quot;a2&quot;,&quot;node2&quot;);
	    nodes.add(level_1_node);
	    nodes.add(level_2_node);
	    // 将整个节点数据add到树控件
	    tree.addNodes(nodes);
	}

	/**
	 * void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: constructorData&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    给树形控件构造数据
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月10日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param tv1
	 * @version 1.0
	 */
	private void constructorDataforTreeView(TreeView tv1) {
		final String rootId = &quot;0&quot;; // 根节点id
		TreeNode rootNode = new TreeNode(null, rootId, &quot;根节点&quot;, true);
	    rootNode.setIsOpened(true); // 设置默认展开
	    for (int i = 0; i &lt; 2; i++) {
	    	 // 构造一级子节点
	    	String p1 = rootId + &quot;-&quot; + i;
	    	TreeNode tn1 = new TreeNode(rootId, p1, p1, true);
	    	tn1.setIsOpened(true);
	        tn1.setColor(&quot;red&quot;); // 设置节点文字颜色
	        for (int j = 0; j &lt; 2; j++) {
	        	 // 构造二级子节点
	        	String p2 = p1 + &quot;-&quot; + j;
		        TreeNode tn2 = new TreeNode(p1, p2, p2, false);
		        tn1.addChild(tn2);
	        }
	        rootNode.addChild(tn1);
	    }
	    tv1.addNode(rootNode);
	}
	
	/**
	 * &lt;p&gt;Title: registerListener&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    用户与界面上的控件进行交互时，即会触发此事件。
	 *    建议在此事件，侦听各个控件的插件事件。
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.form.plugin.AbstractFormPlugin#registerListener(java.util.EventObject)
	 * @version 1.0
	 */
	@Override
	public void registerListener(EventObject e) {
		super.registerListener(e);
		// 侦听各控件的插件事件，传入实现了事件接口的插件实例
		// 主菜单按钮点击
		Toolbar mbar = this.getView().getControl(KEY_MBAR);
		mbar.addItemClickListener(this);
		
		// 按钮点击
		Button button = this.getView().getControl(KEY_BUTTON1);
		button.addClickListener(this);
		
		// 单据体行点击
		EntryGrid entryGrid = this.getView().getControl(KEY_ENTRYENTITY);
		entryGrid.addRowClickListener(this);
		
		// 树型控件点击
		TreeView treeView = this.getView().getControl(KEY_TREEVIEW1);
		treeView.addTreeNodeClickListener(this);
		
		//树形菜单点击
		TreeMenu treeMenu = this.getView().getControl(KEY_TREEMENU1);
		treeMenu.addTreeMenuClickListener(this);
	}
	
	/**
	 * &lt;p&gt;Title: itemClick&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    工具栏里按钮点击执行事件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param evt
	 * @see kd.bos.form.plugin.AbstractFormPlugin#itemClick(kd.bos.form.control.events.ItemClickEvent)
	 * @version 1.0
	 */
	@Override
	public void itemClick(ItemClickEvent evt) {
		super.itemClick(evt);
		if (StringUtils.equals(KEY_BARITEM1, evt.getItemKey())){
			// 事件处理代码略过
			this.getView().showMessage(&quot;点击了工具栏里的按钮&quot;);
		}
	}
	
	/**
	 * &lt;p&gt;Title: click&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    按钮点击进入此事件
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
		if (StringUtils.equals(KEY_BUTTON1, source.getKey())){
			// 事件处理代码略过
			this.getView().showMessage(&quot;点击按钮了&quot;);
		}
	}
	
	/**
	 * &lt;p&gt;Title: entryRowClick&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    单据体行点击执行
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param evt
	 * @see kd.bos.form.control.events.RowClickEventListener#entryRowClick(kd.bos.form.control.events.RowClickEvent)
	 * @version 1.0
	 */
	@Override
	public void entryRowClick(RowClickEvent evt) {
		Control source = (Control) evt.getSource();
		if (StringUtils.equals(KEY_ENTRYENTITY, source.getKey())){
			// 事件处理代码略过
			this.getView().showMessage(&quot;点击单据体行了&quot;);
		}
	}
	
	/**
	 * &lt;p&gt;Title: treeNodeClick&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    树形控件点击执行
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月6日
	 * @param param the bare_field_name
	 * @param evt
	 * @see kd.bos.form.control.events.TreeNodeClickListener#treeNodeClick(kd.bos.form.control.events.TreeNodeEvent)
	 * @version 1.0
	 */
	@Override
	public void treeNodeClick(TreeNodeEvent evt) {
		// 事件处理代码略过
		TreeView treeView = (TreeView)evt.getSource();
		if (StringUtils.equals(KEY_TREEVIEW1, treeView.getKey())){
			// 事件处理代码略过
			this.getView().showMessage(&quot;点击树形控件了&quot;);
		}
	}
	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: treeMenuClick&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    树形菜单点击事件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月10日
	 * @param arg0
	 * @see kd.bos.form.control.events.TreeMenuClickListener#treeMenuClick(kd.bos.form.control.events.TreeNodeEvent)
	 */
	@Override
	public void treeMenuClick(TreeNodeEvent evt) {
		TreeMenu treeMenu = (TreeMenu) evt.getSource();
		if(StringUtils.equals(KEY_TREEMENU1, treeMenu.getKey())) {
			this.getView().showMessage(&quot;点击树形菜单了&quot;);
		}
	}
	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: treeMenuDoubleClick&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    接口必须要实现的方法体
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月10日
	 * @param arg0
	 * @see kd.bos.form.control.events.TreeMenuClickListener#treeMenuDoubleClick(kd.bos.form.control.events.TreeNodeEvent)
	 */
	@Override
	public void treeMenuDoubleClick(TreeNodeEvent arg0) {
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>debug重启DebugServer后注册插件并预览，效果如下图所示</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_66_1.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹动态表单插件registerListener事件案例</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,16);function p(g,k){const n=a("ExternalLinkIcon");return l(),s("div",null,[d(" more "),e("h1",u,[o,i(),e("a",m,[i("66-金蝶云苍穹动态表单插件registerListener事件案例.md"),r(n)])]),b])}const T=t(c,[["render",p],["__file","kingdee66.html.vue"]]);export{T as default};
