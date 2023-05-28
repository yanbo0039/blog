import{_ as i,X as e,Y as n,a1 as t,a0 as l}from"./framework-68dd73a2.js";const s="/blog/assets/Kingdee_36_1.png",a="/blog/assets/Kingdee_36_2.png",d="/blog/assets/Kingdee_36_3.png",r="/blog/assets/Kingdee_36_4.png",o="/blog/assets/Kingdee_36_5.png",u="/blog/assets/Kingdee_36_6.png",g="/blog/assets/Kingdee_36_7.png",c="/blog/assets/Kingdee_36_8.png",v="/blog/assets/Kingdee_36_9.png",m="/blog/assets/Kingdee_36_10.png",b="/blog/assets/Kingdee_36_11.png",p="/blog/assets/Kingdee_36_12.png",f="/blog/assets/Kingdee_36_13.png",h="/blog/assets/Kingdee_36_14.png",_="/blog/assets/Kingdee_36_15.png",q="/blog/assets/Kingdee_36_16.png",y="/blog/assets/Kingdee_36_17.png",x="/blog/assets/Kingdee_36_18.png",k="/blog/assets/Kingdee_36_19.png",V="/blog/assets/Kingdee_36_20.png",S="/blog/assets/Kingdee_36_21.png",D="/blog/assets/Kingdee_36_22.png",w="/blog/assets/Kingdee_36_23.png",B="/blog/assets/Kingdee_36_24.png",O="/blog/assets/Kingdee_36_25.png",z="/blog/assets/Kingdee_36_26.png",K="/blog/assets/Kingdee_36_27.png",C="/blog/assets/Kingdee_36_28.png",F="/blog/assets/Kingdee_36_29.png",j="/blog/assets/Kingdee_36_30.png",E="/blog/assets/Kingdee_36_31.png",I="/blog/assets/Kingdee_36_32.png",M="/blog/assets/Kingdee_36_33.png",P="/blog/assets/Kingdee_36_34.png",L="/blog/assets/Kingdee_36_35.png",N="/blog/assets/Kingdee_36_36.png",U={},J=l('<h1 id="_36-金蝶云苍穹如何设置页面插件-md" tabindex="-1"><a class="header-anchor" href="#_36-金蝶云苍穹如何设置页面插件-md" aria-hidden="true">#</a> 36-金蝶云苍穹如何设置页面插件？.md</h1><h4 id="注册方式" tabindex="-1"><a class="header-anchor" href="#注册方式" aria-hidden="true">#</a> 注册方式</h4><ol><li>注册JAVA插件</li></ol><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>注册JavaScript插件</li></ol><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式</h4><h5 id="java实现方式" tabindex="-1"><a class="header-anchor" href="#java实现方式" aria-hidden="true">#</a> Java实现方式</h5><h6 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h6><ol><li>新建插件类</li></ol><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.form.plugin;
import java.math.BigDecimal;
import java.util.EventObject;
import java.util.List;

import org.apache.commons.lang3.StringUtils;

import kd.bos.bill.AbstractBillPlugIn;
import kd.bos.dataentity.entity.DynamicObject;
import kd.bos.entity.datamodel.events.ChangeData;
import kd.bos.entity.datamodel.events.PropertyChangedArgs;
import kd.bos.form.field.BasedataEdit;
import kd.bos.form.field.events.BeforeF7SelectEvent;
import kd.bos.form.field.events.BeforeF7SelectListener;
import kd.bos.list.ListShowParameter;
import kd.bos.orm.query.QCP;
import kd.bos.orm.query.QFilter;
import kd.bos.servicehelper.BusinessDataServiceHelper;
import kd.bos.servicehelper.user.UserServiceHelper;

/**
 * &lt;p&gt;Title: &lt;/p&gt;  
 * &lt;p&gt;
 *    Description:
 *    采购申请单插件
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;  
 * @author xx
 * @date 2020年2月22日  
 * @return the bare_field_name  
 * @version 1.0  
 */  
public class PurReqBillEdit extends AbstractBillPlugIn implements BeforeF7SelectListener{

	    /**
	     * (non-Javadoc)  
	     * &lt;p&gt;Title: propertyChanged&lt;/p&gt;  
	     * &lt;p&gt;
	     *    Description:
	     * 注册值改变监听事件，若物料改变，则获取长宽高拼凑成字符串设置到规格型号，并且设置计量单位
	     * 申请人改变时，关联设置申请部门
	     * &lt;/p&gt;  
	     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	     * @author xx
	     * @date 2020年2月22日
	     * @param e  
	     * @see kd.bos.entity.datamodel.events.IDataModelChangeListener#propertyChanged(kd.bos.entity.datamodel.events.PropertyChangedArgs)  
	     */
	    @Override
	    public void propertyChanged(PropertyChangedArgs e) {
	        String propertyName = e.getProperty().getName();
	        boolean stopClear;
	        ChangeData cd = e.getChangeSet()[0];
	        if (StringUtils.equals(&quot;materia&quot;, propertyName)) {
	            // 设置规格型号
	            int index = cd.getRowIndex();
	            if (cd.getNewValue() != null) {
	                long materiaId = (long) ((DynamicObject) cd.getNewValue()).getPkValue();
	                DynamicObject materia = (DynamicObject) BusinessDataServiceHelper.loadSingle(materiaId, &quot;bd_material&quot;);
	                BigDecimal length = (BigDecimal) materia.get(&quot;length&quot;);
	                BigDecimal width = (BigDecimal) materia.get(&quot;width&quot;);
	                BigDecimal height = (BigDecimal) materia.get(&quot;height&quot;);
	                if (length != null &amp;&amp; width != null &amp;&amp; height != null &amp;&amp; length.compareTo(BigDecimal.ZERO) &gt; 0
	                        &amp;&amp; width.compareTo(BigDecimal.ZERO) &gt; 0 &amp;&amp; height.compareTo(BigDecimal.ZERO) &gt; 0) {
	                    String model = length.intValue() + &quot;*&quot; + width.intValue() + &quot;*&quot; + height.intValue();
	                    this.getModel().setValue(&quot;model&quot;, model, index);
	                }

	                // 设置计量单位
	                DynamicObject unit = (DynamicObject) materia.get(&quot;baseunit&quot;);
	                Object unitId = unit.getPkValue();
	                this.getModel().setValue(&quot;unit&quot;, unitId, index);
	            } else {
	                this.getModel().setValue(&quot;model&quot;, null, index);
	                this.getModel().setValue(&quot;unit&quot;, null, index);
	            }
	        } else if (StringUtils.equals(&quot;applier&quot;, propertyName)) {
	            // 申请人改变时校验申请组织
	            if (cd.getNewValue() == null) {
	                this.getModel().setValue(&quot;applyorg&quot;, null);
	            } else {
	                long applierId = (long) ((DynamicObject) cd.getNewValue()).getPkValue();
	                if (this.getModel().getValue(&quot;applyorg&quot;) != null) {
	                    DynamicObject applyorg = (DynamicObject) this.getModel().getValue(&quot;applyorg&quot;);
	                    if (!UserServiceHelper.getOrgsUserJoin(applierId).contains(applyorg.getLong(&quot;id&quot;))) {
	                        // 默认填充申请人主业务组织
	                        this.getModel().setValue(&quot;applyorg&quot;, UserServiceHelper.getUserMainOrgId(applierId));
	                    }
	                } else {
	                    this.getModel().setValue(&quot;applyorg&quot;, UserServiceHelper.getUserMainOrgId(applierId));
	                }
	            }
	        }

	        super.propertyChanged(e);
	    }

	    /**
	     * (non-Javadoc)  
	     * &lt;p&gt;Title: afterCreateNewData&lt;/p&gt;  
	     * &lt;p&gt;
	     *    Description:
	     * 重置界面部分字段的默认值
	     * &lt;/p&gt;  
	     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	     * @author xx
	     * @date 2020年2月22日
	     * @param e  
	     * @see kd.bos.entity.datamodel.events.IDataModelListener#afterCreateNewData(java.util.EventObject)  
	     */
	    @Override
	    public void afterCreateNewData(EventObject e) {
	        super.afterCreateNewData(e);

	        // 获取用户id
	        long userId = UserServiceHelper.getCurrentUserId();
	        // 设置当前用户为申请人
	        this.getModel().setValue(&quot;applier&quot;, userId);
	        // 设置用户主业务组织为默认的申请部门
	        this.getModel().setValue(&quot;applyorg&quot;, UserServiceHelper.getUserMainOrgId(userId));
	        // 默认币种人民币
	        this.getModel().setValue(&quot;currency&quot;, 1);
	    }

	    /**
	     * (non-Javadoc)  
	     * &lt;p&gt;Title: afterBindData&lt;/p&gt;  
	     * &lt;p&gt;
	     *    Description:
	     * 界面数据加载完毕后，对界面控件可见性坐设置。
	     * 暂存和已关闭状态根据菜单项标识禁用部分菜单
	     * &lt;/p&gt;  
	     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	     * @author xx
	     * @date 2020年2月22日
	     * @param e  
	     * @see kd.bos.form.plugin.AbstractFormPlugin#afterBindData(java.util.EventObject)  
	     */
	    @Override
	    public void afterBindData(EventObject e) {
	        super.afterBindData(e);

	        // 获取单据状态值
	        String billstatus = String.valueOf(this.getModel().getValue(&quot;billstatus&quot;));
	        // 设置部分控件的可见性
	        if (StringUtils.equals(&quot;A&quot;, billstatus)) {
	            this.getView().setVisible(Boolean.FALSE, &quot;trackdown&quot;);
	        } else if (StringUtils.equals(&quot;D&quot;, billstatus)) {
	            this.getView().setVisible(Boolean.FALSE, &quot;bar_save&quot;, &quot;bar_new&quot;, &quot;bar_modify&quot;, &quot;bar_submit&quot;, &quot;bar_del&quot;, &quot;push&quot;);
	        }
	        // 申请人为空时清空申请部门
	        if (this.getModel().getValue(&quot;applier&quot;) == null) {
	            this.getModel().setValue(&quot;applyorg&quot;, null);
	        }
	    }

	    @Override
	    public void registerListener(EventObject e) {
	        super.registerListener(e);

	        // 侦听基础资料字段的事件
	        BasedataEdit applyorg = this.getView().getControl(&quot;applyorg&quot;);
	        applyorg.addBeforeF7SelectListener(this);

	        BasedataEdit applier = this.getView().getControl(&quot;applier&quot;);
	        applier.addBeforeF7SelectListener(this);
	    }
	    
	    /**
	     * (non-Javadoc)  
	     * &lt;p&gt;Title: beforeF7Select&lt;/p&gt;  
	     * &lt;p&gt;
	     *    Description:
	     *  选择申请部门时根据申请人过滤申请部门
	     * &lt;/p&gt;  
	     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	     * @author xx
	     * @date 2020年2月22日
	     * @param beforeF7SelectEvent  
	     * @see kd.bos.form.field.events.BeforeF7SelectListener#beforeF7Select(kd.bos.form.field.events.BeforeF7SelectEvent)  
	     */
	    @Override
	    public void beforeF7Select(BeforeF7SelectEvent beforeF7SelectEvent) {
	        String propertyName = beforeF7SelectEvent.getProperty().getName();
	        if (StringUtils.equals(&quot;applyorg&quot;, propertyName)) {
	            if (this.getModel().getValue(&quot;applier&quot;) != null) {
	                // 设置申请组织的过滤条件
	                DynamicObject applier = (DynamicObject) this.getModel().getValue(&quot;applier&quot;);
	                List&lt;Long&gt; applierOrgsList = UserServiceHelper.getOrgsUserJoin(applier.getLong(&quot;id&quot;));
	                // 生成过滤条件对象QFilter
	                QFilter qFilter = new QFilter(&quot;id&quot;, QCP.in, applierOrgsList);
	                // 设置列表过滤条件
	                ListShowParameter showParameter = (ListShowParameter) beforeF7SelectEvent.getFormShowParameter();
	                showParameter.getListFilterParameter().setFilter(qFilter);
	            }
	        }
	    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>注册插件</li></ol><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>关闭start-cosmic.bat</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>Debug模式重启DebugServer</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>回到页面保存并预览</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>以上代码实现的效果如下：</p></blockquote><ul><li>通过插件设置物料自动携带物料规格型号以及计量单位到对应的列</li><li>根据状态控制菜单的可见性</li><li>修改界面部分默认值</li><li>根据申请人过滤申请部门</li></ul><h6 id="校验功能" tabindex="-1"><a class="header-anchor" href="#校验功能" aria-hidden="true">#</a> 校验功能</h6><ol><li>通过插件设置物料自动携带物料规格型号以及计量单位到对应的列</li></ol><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>这里出现了一个问题，如上图所示，可以看到必填项<strong>创建组织</strong>与<strong>控制策略</strong>为不可编辑状态，这样就会造成一个问题，不能通过校验。。，所以可以通过如下步骤解决上述问题。</p></blockquote><blockquote><p>路径：系统云 --&gt; 基础资料 --&gt; 基础资料 --&gt; 物料</p></blockquote><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>将<strong>创建组织</strong>的锁定性取消 <strong>新增锁定</strong> 和 <strong>修改锁定</strong></p></blockquote><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>将<strong>控制策略</strong>的锁定性取消 <strong>新增锁定</strong> 和 <strong>修改锁定</strong>，而后发现还是不行。。这个问题点我暂进没有找到方法，暂时性跳过</p></blockquote><blockquote><p>上述 <strong>控制策略</strong> 未解决的bug的暂时性替代方法可以设置其缺省值，其效果就是在为空值进有一个值，而不可选择。。。。。</p></blockquote><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>接下来继续进行验证操作，回到采购申请单预览界面采购分录的物料编码</p></blockquote><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>如下图所示自动带出了物料规格型号以及计量单位</p></blockquote><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>根据状态控制菜单的可见性</li></ol><blockquote><p>下图为原有的菜单的菜单显示</p></blockquote><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>下图为预览时的菜单的菜单显示</p></blockquote><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>下图为保存后的状态的菜单显示</p></blockquote><figure><img src="'+D+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>下图为已提交状态的菜单显示</p></blockquote><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>修改界面部分默认值</li></ol><blockquote><p>如下图字段为设置的默认值</p></blockquote><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>根据申请人过滤申请部门</li></ol><blockquote><p>不做演示</p></blockquote><h5 id="javascript实现方式" tabindex="-1"><a class="header-anchor" href="#javascript实现方式" aria-hidden="true">#</a> JavaScript实现方式</h5><h5 id="实现步骤-1" tabindex="-1"><a class="header-anchor" href="#实现步骤-1" aria-hidden="true">#</a> 实现步骤</h5><ol><li>参照以下步骤进入路径</li></ol><figure><img src="'+O+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+F+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>编码</li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>/**
* @author xx
* @date 2020-02-24
*/
var plugin = new FormPlugin({
         propertyChanged : function(e){
             var propertyName =  e.getProperty().getName();
                if(&quot;materia&quot;==propertyName)
                {
                    //设置规格型号
                    var index =  e.getChangeSet()[0].getRowIndex();
                    var materiaId =  e.getChangeSet()[0].getNewValue().getPkValue();
                    var materia =   BusinessDataServiceHelper.loadSingle(materiaId,&quot;bd_material&quot;)
                    var  length =  materia.get(&quot;length&quot;);
                    var  width = materia.get(&quot;width&quot;);
                    var  height = materia.get(&quot;height&quot;);
                    if(length.compareTo(BigDecimal.ZERO)&gt; 0 &amp;&amp; width.compareTo(BigDecimal.ZERO)&gt;0 &amp;&amp; height.compareTo(BigDecimal.ZERO)&gt;0) {
                        var model = length.intValue() +&quot;*&quot; + width.intValue() +&quot;*&quot;+height.intValue();
                        this.getModel().setValue(&quot;model&quot;, model, index);
                    }
                    //设置计量单位
                    var unit  = materia.get(&quot;baseunit&quot;);
                    var unitId =  unit.getPkValue();
                    this.getModel().setValue(&quot;unit&quot;,unitId,index);
            }
        },
        afterBindData : function(e){
            // 获取单据状态值
            var billstatus = this.getModel().getValue(&quot;billstatus&quot;);
            // 设置部分控件的可见性
            if (&quot;A&quot; == billstatus) {
                this.getView().setVisible(false, &quot;trackdown&quot;);
            } else if (&quot;D&quot; == billstatus) {
                this.getView().setVisible(false, &quot;bar_save&quot;);
                this.getView().setVisible(false, &quot;bar_new&quot;);
                this.getView().setVisible(false, &quot;bar_modify&quot;);
                this.getView().setVisible(false, &quot;bar_submit&quot;);
                this.getView().setVisible(false, &quot;bar_del&quot;);
                this.getView().setVisible(false, &quot;push&quot;);
            }
        }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="校验功能-1" tabindex="-1"><a class="header-anchor" href="#校验功能-1" aria-hidden="true">#</a> 校验功能</h6><ol><li>注册脚本</li></ol><figure><img src="`+j+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>验证</li></ol><blockquote><p>如图所示验证成功</p></blockquote><figure><img src="'+M+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹如何设置页面插件？</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',83);function A(T,H){return e(),n("div",null,[t(" more "),J])}const Q=i(U,[["render",A],["__file","kingdee36.html.vue"]]);export{Q as default};
