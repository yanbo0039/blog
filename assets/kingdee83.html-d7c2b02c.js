import{_ as t,X as d,Y as l,a1 as s,Z as i,$ as e,a2 as r,a0 as v,F as a}from"./framework-68dd73a2.js";const u="/blog/assets/Kingdee_83_1.png",b="/blog/assets/Kingdee_83_2.png",c="/blog/assets/Kingdee_83_3.png",m="/blog/assets/Kingdee_83_4.png",o={},p={id:"_83-金蝶云苍穹左树右表单据列表插件refreshnode事件案例-md",tabindex:"-1"},g=i("a",{class:"header-anchor",href:"#_83-金蝶云苍穹左树右表单据列表插件refreshnode事件案例-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--83-refreshNode-3w8voc03gma54zf4t1kgkvdz76fb01aqbcmz0c8jb868zrq3bsh3asegda9950f.md",target:"_blank",rel:"noopener noreferrer"},N=v('<h4 id="导读" tabindex="-1"><a class="header-anchor" href="#导读" aria-hidden="true">#</a> 导读</h4><hr><blockquote><p>坎坷并不可怕，可怕是的没有淡然的心态,没有面对的勇气，没有战胜的智慧，甚至没有站起来的毅力。</p></blockquote><hr><ol><li><p>新建模板单据</p></li><li><p>设置单据表名</p></li><li><p>添加基础资料并将其资料类型设置为业务应用实体</p></li><li><p>如下图所示设置列表属性</p></li></ol><blockquote><p>列表表单模板: bos_templatetreelist</p></blockquote><blockquote><p>F7列表表单模板: bos_templatetreelistf7</p></blockquote><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.zsybbill.plugin;

import java.util.ArrayList;
import java.util.EventObject;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import kd.bos.algo.DataSet;
import kd.bos.algo.Row;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.entity.tree.TreeNode;
import kd.bos.form.control.events.RefreshNodeEvent;
import kd.bos.list.events.BuildTreeListFilterEvent;
import kd.bos.list.plugin.AbstractTreeListPlugin;
import kd.bos.orm.ORM;
import kd.bos.orm.query.QCP;
import kd.bos.orm.query.QFilter;

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
public class RefreshNodeSample extends AbstractTreeListPlugin {
	/** 树形控件上方的按钮的主面板 */
	private static final String KEY_TREEBUTTONPANEL  = &quot;flexpanel_treebtn&quot;;  
	/** 业务应用字段标识 */
	private static final String KEY_BIZAPPID  = &quot;bizappid&quot;;
	
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 初始化树分组控件上的工具面板时，触发此事件
	 * @remark
	 * 插件在此事件，隐藏树工具面板
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.list.plugin.AbstractTreeListPlugin#initTreeToolbar(java.util.EventObject)
	 * @version 1.0
	 */
	@Override
	public void initTreeToolbar(EventObject e) {
		super.initTreeToolbar(e);
		this.getView().setVisible(false, KEY_TREEBUTTONPANEL);//控制树形面板的显示
//		this.getView().setVisible(false, &quot;btndel&quot;);//设置新增(btnnew)、修改(btnedit)、删除(btndel)显示与否
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 加载、刷新子节点事件
	 * @remark
	 * 默认情况下，系统会自动加载基础资料分组表格中的数据作为分组树节点；
	 * 插件可以在此事件中，自行构建分组树上的节点；
	 * 另外，在展开任意节点、或者是列表刷新时，均会触发本事件，需要避免重复添加子节点
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.list.plugin.AbstractTreeListPlugin#refreshNode(kd.bos.form.control.events.RefreshNodeEvent)
	 * @version 1.0
	 */
	@Override
	public void refreshNode(RefreshNodeEvent e) {
		super.refreshNode(e);
		
		// 取缓存的根节点
		TreeNode root = this.getTreeModel().getRoot();
		
		// 当前节点
		String currNodeId = (String)e.getNodeId();
		TreeNode currNode = root.getTreeNode(currNodeId, 10);
		
		// 判断当前节点下，是否已经缓存了子节点：如果有，无需重复加载
		if (currNode.getChildren() != null &amp;&amp; !currNode.getChildren().isEmpty()){
			// 直接返回缓存的子节点
			e.setChildNodes(currNode.getChildren());
		}
		else {
			// 没有缓存子节点
			if (StringUtils.equals(currNodeId, root.getId())){
				// 当前要刷新的是根节点：读取全部业务云、业务应用，生成节点返回
				e.setChildNodes(this.loadAppNodes());
			}
			else {
				// 当前要刷新非根节点
				// 业务应用节点是一次性加载完毕的，没有采用懒加载；如果在缓存中没有找到其子节点，则说明其没有子节点
				// TODO 如果采用了懒加载子节点方案，则需要在这里尝试加载子节点
				e.setChildNodes(null);
			}
		}
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 基于当前选择的分组节点，生成单据列表过滤条件时触发
	 * @remark
	 * 插件可以在此插件中，略过系统内置的分组条件，自行生成分组过滤条件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.list.plugin.AbstractTreeListPlugin#buildTreeListFilter(kd.bos.list.events.BuildTreeListFilterEvent)
	 * @version 1.0
	 */
	@Override
	public void buildTreeListFilter(BuildTreeListFilterEvent e) {
		super.buildTreeListFilter(e);
		
		// 生成过滤条件
		QFilter filter = this.buildAppQFilter(KEY_BIZAPPID, (String)e.getNodeId());
		e.addQFilter(filter);
		
		e.setCancel(true);	// 略过系统内置的分组过滤条件
	}
	
	/************** 如下代码，用来加载、搜索业务应用清单  *****************/
	
	/**
	 * List&lt;TreeNode&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 构造业务应用树节点返回
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	private List&lt;TreeNode&gt; loadAppNodes(){
		
		// 读取全部业务云
		Map&lt;String, TreeNode&gt; allNodes = new HashMap&lt;&gt;(); 
		List&lt;TreeNode&gt; cloudNode4 = getCloudData();
		for(TreeNode node: cloudNode4){
			allNodes.put(node.getId(), node);
		}
		
		// 读取全部应用
		List&lt;TreeNode&gt; appNode4 = getAppData();
		for(TreeNode node: appNode4){
			allNodes.put(node.getId(), node);
		}
		
		// 构建节点的父子关系
		for(TreeNode node : allNodes.values()){
			TreeNode parentNode = allNodes.get(node.getParentid());
			if (parentNode != null){
				parentNode.addChild(node);
			}
		}
		
		return cloudNode4;
	}
	
	/**
	 * List&lt;TreeNode&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 查询数据库，获取业务云数据，构造为树节点集合返回
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	private List&lt;TreeNode&gt; getCloudData() {
		List&lt;TreeNode&gt; cloudNode = new ArrayList&lt;TreeNode&gt;();

		ORM orm = ORM.create();
		String fields = &quot;id, number, name&quot;;
//		String orderby = &quot;seq asc&quot;;
		QFilter[] filters = new QFilter[] {};
		
//		try(DataSet ds = orm.queryDataSet(&quot;bos_devportal_bizcloud&quot;, &quot;bos_devportal_bizcloud&quot;, fields, filters, orderby)) {//这句代码看不懂。。。
		try(DataSet ds = orm.queryDataSet(&quot;bos_devportal_bizcloud&quot;, &quot;bos_devportal_bizcloud&quot;, fields, filters)) {//这句代码看不懂。。。
			Iterator&lt;Row&gt; rows = ds.iterator();
			while (rows.hasNext()) {
				Row row = rows.next();
				TreeNode node = new TreeNode();
				String nodeID = &quot;cloud/&quot; + row.getString(&quot;number&quot;);
				node.setText(row.getString(&quot;name&quot;));
				node.setParentid(&quot;0&quot;);
				node.setId(nodeID);
				cloudNode.add(node);
			}
		}
		return cloudNode;
	}

	/**
	 * List&lt;TreeNode&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    查询数据库，获取业务应用数据，构造为业务应用树节点集合返回
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	private static List&lt;TreeNode&gt; getAppData() {
		// 可见性与发布状态
		List&lt;TreeNode&gt; appNode = new ArrayList&lt;TreeNode&gt;();

		ORM orm = ORM.create();
		String fields = &quot;id,number, name, bizcloud.id, bizcloud.number&quot;;
//		String orderby = &quot;seq asc&quot;;
		
		QFilter[] filters = new QFilter[] {};
		
//		try (DataSet ds = orm.queryDataSet(&quot;bos_devportal_bizapp&quot;, &quot;bos_devportal_bizapp&quot;, fields, filters, orderby)){
		try (DataSet ds = orm.queryDataSet(&quot;bos_devportal_bizapp&quot;, &quot;bos_devportal_bizapp&quot;, fields, filters)){
			Iterator&lt;Row&gt; rows = ds.iterator();
			while (rows.hasNext()) {
				Row row = rows.next();
				TreeNode node = new TreeNode();
				String parentId = &quot;cloud/&quot; + row.getString(&quot;bizcloud.number&quot;);
				String nodeID = row.getString(&quot;id&quot;);
				node.setId(nodeID);
				node.setParentid(parentId);
				node.setText(row.getString(&quot;name&quot;));
				appNode.add(node);
			}
		}
		return appNode;
	}
	
	/**
	 * QFilter&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 根据当前选择节点，生成过滤业务应用范围的条件：
	 * 
	 * 如果当前点击的节点是业务应用，则直接按此业务应用过滤；
	 * 如果点钱点击的节点是业务云，则取此业务云下全部业务应用进行过滤；
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param appIdFldKey 单据上，业务应用字段名
	 * @param nodeId 当前点击的节点
	 * @return
	 * @version 1.0
	 */
	private QFilter buildAppQFilter(String appIdFldKey, String nodeId){
		
		List&lt;String&gt; appIds = new ArrayList&lt;&gt;();
		TreeNode root = this.getTreeModel().getRoot();
		List&lt;TreeNode&gt; bizCloudNodes = root.getChildren();
		
		if (bizCloudNodes != null){
			for(TreeNode bizCloudNode : bizCloudNodes){
				if (matchCloudNode(nodeId, bizCloudNode, appIds)){
					break;
				}
			}
		}
		
		if (appIds.isEmpty()){
			// 所选节点，未命中任何业务应用：应该选择的是根节点，不限条件
			return null;
		}
		else if (appIds.size() == 0) {
			return new QFilter(appIdFldKey, QCP.equals, appIds.get(0));
		}
		else {
			return new QFilter(appIdFldKey, QCP.in, appIds.toArray(new String[appIds.size()]));
		}
	}

	/**
	 * boolean&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 判断当前节点，是否与指定的业务云匹配；如果是，返回true，并把本业务云下的全部应用，输出到outAppIds参数中
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param nodeId 当前节点
	 * @param bizCloudNode 待匹配的业务云节点
	 * @param outAppIds 输出
	 * @return
	 * @version 1.0
	 */
	private boolean matchCloudNode(String nodeId, TreeNode bizCloudNode, List&lt;String&gt; outAppIds){
		
		if (StringUtils.equals(nodeId, bizCloudNode.getId())){
			// 当前节点，就是本次比较的业务云节点：则输出全部业务应用进行过滤
			
			if (bizCloudNode.getChildren() != null){
				for(TreeNode appNode : bizCloudNode.getChildren()){
					outAppIds.add(appNode.getId());
				}
			}
			if (outAppIds.isEmpty()){
				// 如果本业务云下没有任何业务应用：
				// 输出一个不存在的业务应用标识，生成一个永不成立的条件，使单据列表不显示任何数据
				outAppIds.add(nodeId);
			}
			return true;
		}
		else {
			// 当前节点，不是本次比较的业务云节点：则往下匹配其包含的业务应用节点
			
			if (matchAppNode(nodeId, bizCloudNode)){
				outAppIds.add(nodeId);
				return true;
			}
		}
		
		return false;
	}
	
	/**
	 * boolean&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 判断当前节点，是否属于所传业务云下的业务应用节点，如果是，返回true
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param nodeId 当前节点
	 * @param bizCloudNode 待匹配的业务云节点
	 * @return
	 * @version 1.0
	 */
	private boolean matchAppNode(String nodeId, TreeNode bizCloudNode){
		if (bizCloudNode.getChildren() != null){
			for(TreeNode appNode : bizCloudNode.getChildren()){
				if (StringUtils.equals(appNode.getId(), nodeId)){
					return true;
				}
			}
		}
		return false;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>列表界面预览测试，如下图所示测试成功</li></ol><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹左树右表单据列表插件refreshNode事件案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',19);function f(_,T){const n=a("ExternalLinkIcon");return d(),l("div",null,[s(" more "),i("h1",p,[g,e(),i("a",h,[e("83-金蝶云苍穹左树右表单据列表插件refreshNode事件案例.md"),r(n)])]),N])}const I=t(o,[["render",f],["__file","kingdee83.html.vue"]]);export{I as default};
