import{_ as t,X as a,Y as s,a1 as l,Z as e,$ as i,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_167_1.png",o="/blog/assets/Kingdee_167_2.png",u="/blog/assets/Kingdee_167_3.png",m="/blog/assets/Kingdee_167_4.png",b="/blog/assets/Kingdee_167_5.png",g="/blog/assets/Kingdee_167_6.png",p="/blog/assets/Kingdee_167_7.png",h="/blog/assets/Kingdee_167_8.png",f="/blog/assets/Kingdee_167_9.png",x="/blog/assets/Kingdee_167_10.png",E="/blog/assets/Kingdee_167_11.png",q="/blog/assets/Kingdee_167_12.png",k="/blog/assets/Kingdee_167_13.png",I="/blog/assets/Kingdee_167_14.png",j="/blog/assets/Kingdee_167_15.png",C="/blog/assets/Kingdee_167_16.png",w="/blog/assets/Kingdee_167_17.png",S="/blog/assets/Kingdee_167_18.png",y="/blog/assets/Kingdee_167_19.png",_="/blog/assets/Kingdee_167_20.png",D="/blog/assets/Kingdee_167_21.png",A="/blog/assets/Kingdee_167_22.png",T="/blog/assets/Kingdee_167_23.png",F="/blog/assets/Kingdee_167_24.png",B="/blog/assets/Kingdee_167_25.png",V="/blog/assets/Kingdee_167_26.png",M="/blog/assets/Kingdee_167_27.png",L="/blog/assets/Kingdee_167_28.png",N="/blog/assets/Kingdee_167_29.png",U="/blog/assets/Kingdee_167_30.png",O="/blog/assets/Kingdee_167_31.png",P="/blog/assets/Kingdee_167_32.png",z="/blog/assets/Kingdee_167_33.png",K="/blog/assets/Kingdee_167_34.png",R="/blog/assets/Kingdee_167_35.png",Q="/blog/assets/Kingdee_167_36.png",J="/blog/assets/Kingdee_167_37.png",G="/blog/assets/Kingdee_167_38.png",W="/blog/assets/Kingdee_167_39.png",H="/blog/assets/Kingdee_167_40.png",$="/blog/assets/Kingdee_167_41.png",X="/blog/assets/Kingdee_167_42.png",Y="/blog/assets/Kingdee_167_43.png",Z={},ee={id:"_167-长春一汽项目复盘-md",tabindex:"-1"},ie=e("a",{class:"header-anchor",href:"#_167-长春一汽项目复盘-md","aria-hidden":"true"},"#",-1),ne={href:"http://xn--167--o84fj99cmtvitlzvwigaw103amqh.md",target:"_blank",rel:"noopener noreferrer"},te=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="新建车辆档案信息基础资料" tabindex="-1"><a class="header-anchor" href="#新建车辆档案信息基础资料" aria-hidden="true">#</a> 新建车辆档案信息基础资料</h4><blockquote><p>新建的操作步骤省略，虽然我也踩过许多坑，但那是菜鸟坑，多给老鸟同事带来些麻烦以及被多骂几次自然就会了，故不作此记录,值得友善提醒的就是多次确定需求是对少走弯路是有帮助的。<strong>最终实现效果如下图所示：</strong></p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="可抵押状态变更" tabindex="-1"><a class="header-anchor" href="#可抵押状态变更" aria-hidden="true">#</a> 可抵押状态变更</h4><blockquote><p>需求： 选择（可多选）车辆信息，校验是否可抵押字段为‘是’或者全为‘否’的，如果全为是或全为‘否’，则修改可抵押状态。</p></blockquote><h5 id="实现效果" tabindex="-1"><a class="header-anchor" href="#实现效果" aria-hidden="true">#</a> 实现效果</h5><p>如下图所示：通过点击对应的按钮则可对下面所选择的一列或多列的抵押状态进行更改</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h5><ol><li>添加按钮</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>重写功能操作按钮对应的函数</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/**
 * output package name
 */
import java.awt.event.ActionEvent;
import java.util.ArrayList;
import com.kingdee.eas.custom.basedata.vehiclefileinfo.VehicleFileInfoFactory;

/**
 * &lt;p&gt;Title: VehicleFileInfoListUI&lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
 * @author xx
 * @date 2019-12-6
 * @version 1.0
 */
public class VehicleFileInfoListUI extends AbstractVehicleFileInfoListUI
{
    /**
     * (non-Javadoc)
     * &lt;p&gt;Title: btnMortgageStatus_actionPerformed&lt;/p&gt;  
     * &lt;p&gt;
     * Description: 
     * 可抵押状态变更
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;  
     * @author xx
     * @date 2019-12-16
     * @param e
     * @throws Exception
     * @see com.kingdee.eas.custom.basedata.vehiclefileinfo.client.AbstractVehicleFileInfoListUI#btnMortgageStatus_actionPerformed(java.awt.event.ActionEvent) 
     */
    @Override
    protected void btnMortgageStatus_actionPerformed(ActionEvent e)
    		throws Exception {
    	super.btnMortgageStatus_actionPerformed(e);
    	ArrayList selectedIdValues = getSelectedIdValues();//获取当前选中行的id集合
    	for (int i = 0; i &lt; selectedIdValues.size(); i++) {
    		VehicleFileInfoFactory.getRemoteInstance().setMortagage((String)selectedIdValues.get(i));
		}
    	refreshList();//更新界面
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.kingdee.eas.custom.basedata.vehiclefileinfo.app;

import java.sql.SQLException;

import org.apache.log4j.Logger;

import com.kingdee.bos.BOSException;
import com.kingdee.bos.Context;
import com.kingdee.bos.dao.IObjectPK;
import com.kingdee.bos.dao.IObjectValue;
import com.kingdee.bos.util.BOSUuid;
import com.kingdee.eas.common.EASBizException;
import com.kingdee.eas.custom.basedata.vehiclefileinfo.VehicleFileInfoInfo;
import com.kingdee.eas.util.app.DbUtil;
import com.kingdee.jdbc.rowset.IRowSet;
import com.kingdee.util.NumericExceptionSubItem;

/**  
* &lt;p&gt;Title: VehicleFileInfoControllerBean&lt;/p&gt;  
* &lt;p&gt;Description: &lt;/p&gt;  
* &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;  
* @author xx
* @date 2019-12-13  
* @version 1.0  
*/  
public class VehicleFileInfoControllerBean extends AbstractVehicleFileInfoControllerBean
{
    private static Logger logger =
        Logger.getLogger(&quot;com.kingdee.eas.custom.basedata.vehiclefileinfo.app.VehicleFileInfoControllerBean&quot;);
    
    /**
     *  (non-Javadoc)  
     * &lt;p&gt;Title: setMortagage&lt;/p&gt;  
     * &lt;p&gt;Description: 更改是否抵押的值&lt;/p&gt;  
     * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;  
     * @author xx
     * @date 2019-12-16
     * @param ctx
     * @param id
     * @throws BOSException  
     * @see com.kingdee.eas.custom.basedata.vehiclefileinfo.app.AbstractVehicleFileInfoControllerBean#setMortagage(com.kingdee.bos.Context, java.lang.String)  
     */
    @Override
    public void setMortagage(Context ctx, String id) throws BOSException {
    	super.setMortagage(ctx, id);
    	
    	String sql_findMortgage = &quot;select cfmortgage from CT_VEH_VehicleFileInfo where fid = &quot; + &quot;&#39;&quot; + id + &quot;&#39;&quot;;
    	IRowSet rowset = DbUtil.executeQuery(ctx, sql_findMortgage);
    	Integer cfmortgage = 0;
    	
    	try {
			if(rowset.next()){
				cfmortgage = rowset.getInt(&quot;cfmortgage&quot;);
			}else {
				throw new EASBizException(new NumericExceptionSubItem(&quot;119&quot;, &quot;没有查到抵押状态&quot;));
			}
		} catch (SQLException e) {
			try {
				throw new EASBizException(new NumericExceptionSubItem(&quot;119&quot;, &quot;没有查到抵押状态&quot;));
			} catch (EASBizException e1) {
				e1.printStackTrace();
			}
		} catch (EASBizException e) {
			e.printStackTrace();
		}
    	if(cfmortgage == 0){
    		cfmortgage = 1;
    	}else {
			cfmortgage = 0;
		}
    	String sql = &quot;update CT_VEH_VehicleFileInfo set cfmortgage = &quot; + cfmortgage + &quot;where fid = &quot; + &quot;&#39;&quot; + id + &quot;&#39;&quot;; 
    	
    	DbUtil.execute(ctx, sql);
    }
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="导入功能" tabindex="-1"><a class="header-anchor" href="#导入功能" aria-hidden="true">#</a> 导入功能</h4><blockquote><p>需求：新增导入功能，可导入车辆档案信息。</p></blockquote><h5 id="实现效果-1" tabindex="-1"><a class="header-anchor" href="#实现效果-1" aria-hidden="true">#</a> 实现效果</h5><p>如下图所示：</p><figure><img src="`+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+j+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="实现步骤-1" tabindex="-1"><a class="header-anchor" href="#实现步骤-1" aria-hidden="true">#</a> 实现步骤</h5><ol><li>新建一个导入类，以备后续后用</li></ol><figure><img src="'+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.kingdee.eas.custom.basedata.vehiclefileinfo.app;
/**  
* &lt;p&gt;Title: VehicleBaseDataImport&lt;/p&gt;  
* &lt;p&gt;
* 	Description:车辆档案信息导入
* 备注：不管你取什么名字，请记得继承AbstractDataTransmission这个类，
* 并按照提示重写对应的类
* &lt;/p&gt;  
* &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;  
* @author xx
* @date 2019-12-16  
* @version 1.0  
*/  
public class VehicleBaseDataImport extends AbstractDataTransmission{

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>管理员用户登录，设置引入引出模板管理。</li></ol><figure><img src="`+D+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+T+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+F+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.kingdee.eas.custom.basedata.vehiclefileinfo.app;

import java.sql.SQLException;
import java.util.Hashtable;
import java.util.Map;

import com.kingdee.bos.BOSException;
import com.kingdee.bos.Context;
import com.kingdee.bos.dao.ormapping.ObjectUuidPK;
import com.kingdee.eas.base.codingrule.CodingRuleManagerFactory;
import com.kingdee.eas.base.codingrule.ICodingRuleManager;
import com.kingdee.eas.basedata.master.auxacct.GeneralAsstActTypeFactory;
import com.kingdee.eas.basedata.master.auxacct.GeneralAsstActTypeInfo;
import com.kingdee.eas.basedata.org.CompanyOrgUnitFactory;
import com.kingdee.eas.basedata.org.CompanyOrgUnitInfo;
import com.kingdee.eas.common.EASBizException;
import com.kingdee.eas.cp.bc.VehicleBaseDataFactory;
import com.kingdee.eas.custom.basedata.vehiclefileinfo.VehicleFileInfoFactory;
import com.kingdee.eas.custom.basedata.vehiclefileinfo.VehicleFileInfoInfo;
import com.kingdee.eas.custom.basedata.vehiclefileinfo.VehicleSourceEnum;
import com.kingdee.eas.custom.basedata.vehiclefileinfo.VehicleStatusEnum;
import com.kingdee.eas.framework.CoreBaseInfo;
import com.kingdee.eas.framework.ICoreBase;
import com.kingdee.eas.mm.project.ProjectFactory;
import com.kingdee.eas.mm.project.ProjectInfo;
import com.kingdee.eas.tools.datatask.AbstractDataTransmission;
import com.kingdee.eas.tools.datatask.core.TaskExternalException;
import com.kingdee.eas.tools.datatask.runtime.DataToken;
import com.kingdee.eas.util.app.ContextUtil;
import com.kingdee.eas.util.app.DbUtil;
import com.kingdee.jdbc.rowset.IRowSet;
/**  
* &lt;p&gt;Title: VehicleBaseDataImport&lt;/p&gt;  
* &lt;p&gt;
* 	Description:车辆档案信息导入
* &lt;/p&gt;  
* &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;  
* @author xx
* @date 2019-12-16  
* @version 1.0  
*/  
public class VehicleBaseDataImport extends AbstractDataTransmission{

	/**
	 * (non-Javadoc)  
	 * &lt;p&gt;Title: getController&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description:
	 *    用来取得实例接口的，为类中需要的地方调用，比如submit()方法
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @author xx
	 * @date 2019-12-18
	 * @param arg0
	 * @return
	 * @throws TaskExternalException  
	 * @see com.kingdee.eas.tools.datatask.AbstractDataTransmission#getController(com.kingdee.bos.Context)  
	 */
	@Override
	protected ICoreBase getController(Context ctx)
			throws TaskExternalException {
		ICoreBase iCoreBase = null;
		try {
			iCoreBase = VehicleBaseDataFactory.getLocalInstance(ctx);
		} catch (BOSException e) {
			e.printStackTrace();
			throw new TaskExternalException(&quot;&quot;,e);
		}
		return iCoreBase;
	}
	
	/**
	 * (non-Javadoc)  
	 * &lt;p&gt;Title: getSubmitType&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description:
	 *    获取excel表格数据的方式:
	 *    int 1 表示一次全部获取(在取数据时，使用for循环)
	 *    int 0 表示只获取一条数据(每次只有一条数据,不需要for循环)
	 *    将excel中的行一次性打包成Map结构来导入还是每次读一行，反映到当前类中就是
	 *    transmit(Hashtable hasData,Context ctx) 方法的hsData参数，
	 *    1为全部一次，0为每次一行，可以看到当前的类中覆盖了父类方法，
	 *    设为1，表示一次返回所有的
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @author xx
	 * @date 2019-12-18
	 * @return  
	 * @see com.kingdee.eas.tools.datatask.AbstractDataTransmission#getSubmitType()  
	 */
	@Override
	public int getSubmitType() {
		return 1;
	}
	
	/**
	 * (non-Javadoc)  
	 * &lt;p&gt;Title: transmit&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description:
	 *    这是从excel中读入数据后第一个调的方法,
	 *    hsData参数中就是从excel中读入的数据,
	 *    如果是一次性读入所有的数据,
	 *    则hsData中是key从Integer型的1、2、3等等行,
	 *    每行取出来就是excel中对应行的Map结构数据,
	 *    然后在这个方法中你可以对传回来的数据做任何的处理,
	 *    目的是要构造出单据的info,
	 *    当然其中要包含分录,
	 *    具体可以读此代码,
	 *    在当前类中,程序增加了transmitHead(Hashtable lineData,Context ctx)
	 *    和transmitEntry(Hashtable hsData,Context ctx)两个方法,
	 *    分别处理单据头和单据体的构造,
	 *    在构造info的过程中,
	 *    如果是自有属性,
	 *    基本上转换成对应类型即可,
	 *    如果是连接属性,
	 *    那么一般excel中填入的都是编码,
	 *    程序中要按编码取出其Info对象,
	 *    比如transmitHead(...)方法中的“storageOrgUnit”属性
	 *    2019/12/20备注:
	 *    hsData是父类负责循环，每次只有一条数据，则子类不需要写循环
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @author xx
	 * @date 2019-12-18
	 * @param hsData
	 * @param ctx
	 * @return
	 * @throws TaskExternalException
	 * @deprecated  
	 * @see com.kingdee.eas.tools.datatask.AbstractDataTransmission#transmit(java.util.Hashtable, com.kingdee.bos.Context)  
	 */
	@Override
	public CoreBaseInfo transmit(Hashtable hsData, Context ctx)
			throws TaskExternalException {
		if(hsData.size() == 0){
			throw new Error(&quot;当前模板中没有数据,请根据要求填充模板数据!&quot;);
		}else {
			Map lineData = (Map) hsData.get(0);
			if(!isSltImportUpdate()){
				try {
					addNewAccount(lineData,ctx,0);
				} catch (Exception e) {
					e.printStackTrace();
					throw new Error(&quot;导入数据失败! \\n错误信息: \\n&quot; + e.getMessage());
				}
			}
		}
		return null;
	}
	
	/**  
	 * &lt;p&gt;Title: addNewAccount&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    将读取的数据存入数据库
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @author xx
	 * @date 2019-12-19
	 * @param lineData 一行excel数据
	 * @param ctx 
	 * @param index 索引
	 * @version 1.0
	 * @throws BOSException 
	 * @throws EASBizException 
	 * @throws SQLException 
	 */
	@SuppressWarnings(&quot;null&quot;)
	private void addNewAccount(Map lineData, Context ctx, int index) throws EASBizException, BOSException, SQLException {
		VehicleFileInfoInfo info = new VehicleFileInfoInfo();
		
		//所属组织_编码 FSubordOrganization_number T_ORG_Company 必录
		Object companyOrgUnit = ((DataToken)lineData.get(&quot;FSubordOrganization_number&quot;)).data;
		CompanyOrgUnitInfo companyOrgUnitInfo = null;
		if(companyOrgUnit != null &amp;&amp; !&quot;&quot;.equals(companyOrgUnit.toString())){
			String infoValue = getFidByNumber(ctx,&quot;T_ORG_Company&quot;,companyOrgUnit.toString());
			if(infoValue != null &amp;&amp; !&quot;&quot;.equals(infoValue)){
				companyOrgUnitInfo = CompanyOrgUnitFactory.getLocalInstance(ctx).getCompanyOrgUnitInfo(new ObjectUuidPK(infoValue));
			}else {
				throw new Error(&quot;数据库中不存在字段FSubordOrganization_number（所属组织_编码）,值为&quot;+companyOrgUnit.toString()+&quot;对应的数据对象。&quot;);
			}
		}
		
		//所属项目 FSubordProject_number T_MM_Project Project 必录
		Object projectOrgUnit = ((DataToken)lineData.get(&quot;FSubordProject_number&quot;)).data;
		ProjectInfo projectInfo = null;
		if(projectOrgUnit !=null &amp;&amp; !&quot;&quot;.equals(projectOrgUnit)){
			String infoValue = getFidByNumber(ctx, &quot;T_MM_Project&quot;, projectOrgUnit.toString());
			if(infoValue != null &amp;&amp; !&quot;&quot;.equals(infoValue)){
				projectInfo = ProjectFactory.getLocalInstance(ctx).getProjectInfo(new ObjectUuidPK(infoValue));
			}else {
				throw new Error(&quot;数据库中不存在字段FSubordProject_number（所属项目 _编码）,值为&quot;+projectInfo.toString()+&quot;对应的数据对象。&quot;);
			}
		}
		
		//业务类型 FBusinessType_number T_BD_GeneralAsstActType GeneralAsstActType 自定义核算项目 必录
		Object generalAsstActTypeOrgUnit = ((DataToken)lineData.get(&quot;FBusinessType_number&quot;)).data;
		GeneralAsstActTypeInfo genaInfo = null;
		if(generalAsstActTypeOrgUnit != null &amp;&amp; !&quot;&quot;.equals(generalAsstActTypeOrgUnit)){
			String infoValue = customProject(ctx, &quot;T_BD_GeneralAsstActType&quot;, generalAsstActTypeOrgUnit.toString(), &quot; and FGROUPID = &#39;I3Xhd/enSnCFu6oqj15XbwXSzQw=&#39; &quot;);
			if(infoValue != null &amp;&amp; !&quot;&quot;.equals(infoValue)){
				genaInfo = GeneralAsstActTypeFactory.getLocalInstance(ctx).getGeneralAsstActTypeInfo(new ObjectUuidPK(infoValue));
			}else {
				throw new Error(&quot;数据库中不存在字段 FBusinessType_number（业务类型 _编码）,值为&quot;+genaInfo.toString()+&quot;对应的数据对象。&quot;);
			}
		}
		
		//车辆型号 FVehicleModel_number T_BD_GeneralAsstActType GeneralAsstActType 因为都是自定义核算项目 所以以上边的一样 必录
		Object gen = ((DataToken)lineData.get(&quot;FVehicleModel_number&quot;)).data;
		GeneralAsstActTypeInfo genaInfo2 = null;
		if(gen != null &amp;&amp; !&quot;&quot;.equals(gen)){
			String infoValue = customProject(ctx, &quot;T_BD_GeneralAsstActType&quot;, gen.toString(), &quot; and FGROUPID = &#39;vTXo14YdSLet3zn3ITUyMgXSzQw=&#39; &quot;);
			if(infoValue != null &amp;&amp; !&quot;&quot;.equals(infoValue)){
				genaInfo2 = GeneralAsstActTypeFactory.getLocalInstance(ctx).getGeneralAsstActTypeInfo(new ObjectUuidPK(infoValue));
			}else {
				throw new Error(&quot;数据库中不存在字段 FVehicleModel_number（车辆型号 _编码）,值为&quot;+genaInfo2.toString()+&quot;对应的数据对象。&quot;);
			}
		}
		
		//车辆编号
		String FVehicleNum = (String) ((DataToken)lineData.get(&quot;FVehicleNum&quot;)).data;
		//名称
		String FName_l2 = (String) ((DataToken)lineData.get(&quot;FName_l2&quot;)).data;
		//外观颜色
		String FAppearColor = (String) ((DataToken)lineData.get(&quot;FAppearColor&quot;)).data;
		//内观颜色
		String FInnerColor = (String) ((DataToken)lineData.get(&quot;FInnerColor&quot;)).data;
		//发动机号
		String FEngineNum = (String) ((DataToken)lineData.get(&quot;FEngineNum&quot;)).data;
		//车牌号码
		String FLicensePlateNum = (String) ((DataToken)lineData.get(&quot;FLicensePlateNum&quot;)).data;
		//登记单位
		String FRegisUnit = (String) ((DataToken)lineData.get(&quot;FRegisUnit&quot;)).data;
		//合同编号
		String FContractNum = (String) ((DataToken)lineData.get(&quot;FContractNum&quot;)).data;
		//行驶证编码
		String FDrilicenCode = (String) ((DataToken)lineData.get(&quot;FDrilicenCode&quot;)).data;
		//登记证书编号
		String FRegisCertNum = (String) ((DataToken)lineData.get(&quot;FRegisCertNum&quot;)).data;
		
		//车辆状态 001/002/003 可用/报废/运营
		@SuppressWarnings(&quot;unused&quot;)
		VehicleStatusEnum FVehicleStatus = null;
		FVehicleStatus = veVehicleStatus(lineData, &quot;FVehicleStatus&quot;);
		
		//车辆来源  001 融资合同 002借款合同
		@SuppressWarnings(&quot;unused&quot;)
		VehicleSourceEnum FVehicleSource = null;
		FVehicleSource = veVehicleSource(lineData, &quot;FVehicleSource&quot;);
		
		//车架号 唯一
		@SuppressWarnings(&quot;unused&quot;)
		String FChassisNum = null;
		if(!veVehicleNum(ctx, lineData, (String) ((DataToken)lineData.get(&quot;FChassisNum&quot;)).data)){
			throw new Error(&quot;车架号必须唯一!&quot;);
		}else {
			FChassisNum = (String) ((DataToken)lineData.get(&quot;FChassisNum&quot;)).data;
		}

		//是否抵押 1是0否 Boolean类型
		Boolean FMortgage = resultBoolean(true, lineData, &quot;FMortgage&quot;);
		//是否启用 1是0否 Boolean类型
		Boolean FIsEnabled = resultBoolean(false, lineData, &quot;FIsEnabled&quot;);

		info.setSubordOrganization(companyOrgUnitInfo);//插入所属组织
		info.setSubordProject(projectInfo);//插入所属项目
		info.setBusinessType(genaInfo);//业务类型
		info.setVehicleModel(genaInfo2);//车辆型号
		info.setVehicleNum(FVehicleNum);//车辆编号
		info.setVehicleStatus(FVehicleStatus);//车辆状态  枚举
		info.setVehicleSource(FVehicleSource);//车辆来源 枚举
		info.setChassisNum(FChassisNum);//车架号
		info.setName(FName_l2);//名称
		info.setAppearColor(FAppearColor);//外观颜色
		info.setInnerColor(FInnerColor);//内观颜色
		info.setEngineNum(FEngineNum);//发动机号
		info.setLicensePlateNum(FLicensePlateNum);//车牌号码
		info.setRegisUnit(FRegisUnit);//登录单位
		info.setContractNum(FContractNum);//合同编号
		info.setMortgage(FMortgage);//是否抵押
		info.setIsEnabled(FIsEnabled);//是否启用
		info.setDrilicenCode(FDrilicenCode);//行驶证编码
		info.setRegisCertNum(FRegisCertNum);//登记证书编号
		
		//编码规则生成的编码
		ICodingRuleManager iCodingRuleManager = CodingRuleManagerFactory.getLocalInstance(ctx);
		String number = iCodingRuleManager.getNumber(info, ContextUtil.getCurrentOrgUnit(ctx).getId().toString());
		info.setVehicleNum(number);//设置编码
		info.setNumber(number);//设置编码
		
		VehicleFileInfoFactory.getLocalInstance(ctx).addnew(info);
	}
	/**
	 * 
	 * &lt;p&gt;Title: customProject&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    自定义核算项目条件过滤
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @author xx
	 * @date 2019-12-20
	 * @param ctx
	 * @param tableName
	 * @param number
	 * @param otherCondition
	 * @return
	 * @throws BOSException
	 * @throws SQLException
	 * @version 1.0
	 */
	private String customProject(Context ctx,String tableName,String number,String otherCondition) throws BOSException, SQLException{
		String sql = &quot;select fid from &quot; + tableName + &quot; where fnumber = &#39;&quot; + number + &quot;&#39;&quot; ;
		if(!otherCondition.equals(&quot;&quot;) &amp;&amp; otherCondition != null){
			sql += otherCondition;
		}

		IRowSet executeSql = DbUtil.executeQuery(ctx, sql);
		if(executeSql.next()){
			return executeSql.getString(&quot;fid&quot;) != null ? executeSql.getString(&quot;fid&quot;) : null;
		}else {
			return null;
		}
	}
	
	/**
	 * &lt;p&gt;Title: veVehicleSource&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    验证车辆来源
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @author xx
	 * @date 2019-12-19
	 * @param lineData
	 * @param colName
	 * @return
	 * @version 1.0
	 */
	private VehicleSourceEnum veVehicleSource(Map lineData,String colName){
		String FVehicleSource = (String) ((DataToken)lineData.get(colName)).data;
		if(FVehicleSource.equals(VehicleSourceEnum.FINACONTRACT_VALUE)){
			return VehicleSourceEnum.finaContract;
		}
		else if(FVehicleSource.equals(VehicleSourceEnum.LOANCONTRACT_VALUE)){
			return VehicleSourceEnum.loanContract;
		}else{
			throw new Error(colName + &quot;输入的值不符合规范!&quot;);
		}
	}
	
	
	/**
	 * &lt;p&gt;Title: veVehicleStatus&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    验证车辆状态 
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @author xx
	 * @date 2019-12-19
	 * @param lineData
	 * @param colName
	 * @return
	 * @version 1.0
	 */
	private VehicleStatusEnum veVehicleStatus(Map lineData,String colName){
		String FVehicleStatus = (String) ((DataToken)lineData.get(colName)).data;
		if(FVehicleStatus.equals(VehicleStatusEnum.AVAILABLE_VALUE)){
			return VehicleStatusEnum.available;
		}
		else if(FVehicleStatus.equals(VehicleStatusEnum.SCRAP_VALUE)){
			return VehicleStatusEnum.scrap;
		}
		else if(FVehicleStatus.equals(VehicleStatusEnum.INOPERATION_VALUE)){
			return VehicleStatusEnum.inOperation;
		}else{
			throw new Error(colName + &quot;输入的值不符合规范!&quot;);
		}
	}
	
	/**
	 * &lt;p&gt;Title: veVehicleNum&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    验证车架号是否唯一
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @author xx
	 * @date 2019-12-19
	 * @param ctx
	 * @param lineData
	 * @param FChassisNum
	 * @return
	 * @throws BOSException
	 * @throws SQLException
	 * @version 1.0
	 */
	private Boolean veVehicleNum(Context ctx,Map lineData,String FChassisNum) throws BOSException, SQLException{
		String sql = &quot;select fid from CT_VEH_VehicleFileInfo where CFChassisNum = &#39;&quot; + FChassisNum + &quot;&#39;&quot;;
		IRowSet executeSql = DbUtil.executeQuery(ctx, sql);
		if(executeSql.next()){
			return false;
		}else {
			return true;
		}
	}
	
	/**
	 * &lt;p&gt;Title: resultBoolean&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    读取excel列数据将其转换成boolean类型数据返回
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @author xx
	 * @date 2019-12-19
	 * @param defaultInt
	 * @param lineData
	 * @param colName
	 * @return
	 * @version 1.0
	 */
	private Boolean resultBoolean(Boolean defaultInt,Map lineData,String colName){
		Boolean resultBoolean = defaultInt;//默认值
		String str = (String) ((DataToken)lineData.get(colName)).data;
		if(str.equals(&quot;1&quot;) || str.equals(&quot;0&quot;)){
			if(str.equals(&quot;1&quot;)){
				resultBoolean = true;
			}
			if(str.equals(&quot;0&quot;)){
				resultBoolean = false;
			}
		}else {
			throw new Error(&quot;FMortgage 输入的值不符合规范1!&quot;);
		}
		return resultBoolean;
	}

	/**  
	 * &lt;p&gt;Title: getFidByNumber&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    判断对应数据表中是否有这个F7，根据编码获取id
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @author xx
	 * @date 2019-12-19
	 * @param ctx
	 * @param tableName
	 * @param number
	 * @return
	 * @throws SQLException
	 * @throws BOSException 
	 * @version 1.0
	 */  
	private String getFidByNumber(Context ctx, String tableName, String number) throws SQLException, BOSException {
		String sql = &quot;select fid from &quot; + tableName + &quot; where fnumber = &#39;&quot; + number + &quot;&#39;&quot;;
		IRowSet executeSql = DbUtil.executeQuery(ctx, sql);
		if(executeSql.next()){
			return executeSql.getString(&quot;fid&quot;) != null ? executeSql.getString(&quot;fid&quot;) : null;
		}else {
			return null;
		}
	}

	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: submit&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description:
	 *    这个方法是用来提交transmit()返回的Info对象的
	 *    重定此方法则不需要调用父类方法
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @author xx
	 * @date 2019-12-19
	 * @param arg0
	 * @param arg1
	 * @throws TaskExternalException  
	 * @see com.kingdee.eas.tools.datatask.AbstractDataTransmission#submit(com.kingdee.eas.framework.CoreBaseInfo, com.kingdee.bos.Context)  
	 */
	@Override
	public void submit(CoreBaseInfo arg0, Context arg1)
			throws TaskExternalException {
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.kingdee.eas.custom.basedata.vehiclefileinfo.app;

import java.sql.SQLException;

import org.apache.log4j.Logger;

import com.kingdee.bos.BOSException;
import com.kingdee.bos.Context;
import com.kingdee.bos.dao.IObjectPK;
import com.kingdee.bos.dao.IObjectValue;
import com.kingdee.bos.util.BOSUuid;
import com.kingdee.eas.common.EASBizException;
import com.kingdee.eas.custom.basedata.vehiclefileinfo.VehicleFileInfoInfo;
import com.kingdee.eas.util.app.DbUtil;
import com.kingdee.jdbc.rowset.IRowSet;
import com.kingdee.util.NumericExceptionSubItem;

/**  
* &lt;p&gt;Title: VehicleFileInfoControllerBean&lt;/p&gt;  
* &lt;p&gt;Description: &lt;/p&gt;  
* &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;  
* @author xx
* @date 2019-12-13  
* @version 1.0  
*/  
public class VehicleFileInfoControllerBean extends AbstractVehicleFileInfoControllerBean
{
    private static Logger logger =
        Logger.getLogger(&quot;com.kingdee.eas.custom.basedata.vehiclefileinfo.app.VehicleFileInfoControllerBean&quot;);

    /**
     *  (non-Javadoc)  
     * &lt;p&gt;Title: _submit&lt;/p&gt;  
     * &lt;p&gt;
     * 	Description: 
     *   1. 实现保存时车架号必须唯一的过滤功能
     * &lt;/p&gt;  
     * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;  
     * @author xx
     * @date 2019-12-13  
     * @param ctx
     * @param model
     * @return
     * @throws BOSException
     * @throws EASBizException  
     * @see com.kingdee.eas.framework.app.DataBaseControllerBean#_submit(com.kingdee.bos.Context, com.kingdee.bos.dao.IObjectValue)  
     */
    @Override
    protected IObjectPK _submit(Context ctx, IObjectValue model)
    		throws BOSException, EASBizException {
    	// 转换为车辆档案信息对象
    	VehicleFileInfoInfo info = (VehicleFileInfoInfo) model;
		onlyColVal(ctx, model, &quot;CT_VEH_VehicleFileInfo&quot;, &quot;CFChassisNum&quot;, info.getChassisNum(), &quot;车架号&quot;, info.getId());
    	return super._submit(ctx, model);
    }
    
    /**
     * &lt;p&gt;Title: onlyColVal&lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     *    验证某一字段是否唯一包含新增与修改验证
     * &lt;/p&gt;  
     * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
     * @author xx
     * @date 2019-12-20
     * @param ctx
     * @param model
     * @param tabName 表名
     * @param colName 列名
     * @param colVal 列值
     * @param ErrMs 错误信息
     * @param uuid id值
     * @throws EASBizException
     * @version 1.0
     */
    private void onlyColVal(Context ctx, IObjectValue model,String tabName,String colName,String colVal,String ErrMs,BOSUuid uuid) throws EASBizException{
    	// 转换为车辆档案信息对象
    	VehicleFileInfoInfo info = (VehicleFileInfoInfo) model;
    	// 查询数据库中是否有当前对象中的车架号信息
    	String sql = &quot;select fid from &quot; + tabName +&quot; where &quot; + colName + &quot; = &#39;&quot; + colVal + &quot;&#39;&quot;;
    	try {
    		IRowSet rowset = DbUtil.executeQuery(ctx, sql);
			if (rowset.next()) {
				if(info.getId().equals(&quot;&quot;) || info.getId() == null){
					//进入则为新增
					// 存在，即抛出异常
					throw new EASBizException(new NumericExceptionSubItem(&quot;110&quot;, ErrMs + &quot;不能重复！&quot;));
				}else{
					//否则则为修改 修改时判断车架号与自己不相比较，但得与其它比较
					String editSql = &quot;select * from &quot; + tabName + &quot; where fid &lt;&gt; &#39;&quot; +uuid+&quot;&#39;&quot;;
					IRowSet rowset2 = DbUtil.executeQuery(ctx, editSql);
					while (rowset2.next()) {
						if(info.getChassisNum().equals(rowset2.getString(colName))){
							throw new EASBizException(new NumericExceptionSubItem(&quot;110&quot;, ErrMs + &quot;不能重复！&quot;));
						}
					}
				}
			}
		} catch (BOSException e) {
			// 抛出异常
			throw new EASBizException(new NumericExceptionSubItem(&quot;110&quot;, &quot;查询&quot;+ErrMs+&quot;是否存在错误，错误信息：\\n&quot; + e.getLocalizedMessage()));
		} catch (SQLException e) {
			// 抛出异常
			throw new EASBizException(new NumericExceptionSubItem(&quot;110&quot;, &quot;查询&quot;+ErrMs+&quot;是否存在错误，错误信息：\\n&quot; + e.getLocalizedMessage()));
		}
    }
    
    /**
     *  (non-Javadoc)  
     * &lt;p&gt;Title: setMortagage&lt;/p&gt;  
     * &lt;p&gt;Description: 更改是否抵押的值&lt;/p&gt;  
     * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;  
     * @author xx
     * @date 2019-12-16
     * @param ctx
     * @param id
     * @throws BOSException  
     * @see com.kingdee.eas.custom.basedata.vehiclefileinfo.app.AbstractVehicleFileInfoControllerBean#setMortagage(com.kingdee.bos.Context, java.lang.String)  
     */
    @Override
    public void setMortagage(Context ctx, String id) throws BOSException {
    	super.setMortagage(ctx, id);
    	
    	String sql_findMortgage = &quot;select cfmortgage from CT_VEH_VehicleFileInfo where fid = &quot; + &quot;&#39;&quot; + id + &quot;&#39;&quot;;
    	IRowSet rowset = DbUtil.executeQuery(ctx, sql_findMortgage);
    	Integer cfmortgage = 0;
    	
    	try {
			if(rowset.next()){
				cfmortgage = rowset.getInt(&quot;cfmortgage&quot;);
			}else {
				throw new EASBizException(new NumericExceptionSubItem(&quot;119&quot;, &quot;没有查到抵押状态&quot;));
			}
		} catch (SQLException e) {
			try {
				throw new EASBizException(new NumericExceptionSubItem(&quot;119&quot;, &quot;没有查到抵押状态&quot;));
			} catch (EASBizException e1) {
				e1.printStackTrace();
			}
		} catch (EASBizException e) {
			e.printStackTrace();
		}
    	if(cfmortgage == 0){
    		cfmortgage = 1;
    	}else {
			cfmortgage = 0;
		}
    	String sql = &quot;update CT_VEH_VehicleFileInfo set cfmortgage = &quot; + cfmortgage + &quot;where fid = &quot; + &quot;&#39;&quot; + id + &quot;&#39;&quot;; 
    	
    	DbUtil.execute(ctx, sql);
    }
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/**
 * output package name
 */
package com.kingdee.eas.custom.basedata.vehiclefileinfo.client;

import java.awt.event.ActionEvent;
import java.util.ArrayList;

import org.apache.log4j.Logger;

import com.kingdee.bos.ui.face.CoreUIObject;
import com.kingdee.eas.custom.basedata.vehiclefileinfo.VehicleFileInfoFactory;
import com.kingdee.eas.tools.datatask.DatataskParameter;

/**  
 * &lt;p&gt;Title: VehicleFileInfoListUI&lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;  
 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
 * @author xx
 * @date 2019-12-6  
 * @version 1.0
 */  
public class VehicleFileInfoListUI extends AbstractVehicleFileInfoListUI
{

   /** 
    * logger 日志对象
    */  
    private static final Logger logger = CoreUIObject.getLogger(VehicleFileInfoListUI.class);

   /**  
    * &lt;p&gt;Title: &lt;/p&gt;  
    * &lt;p&gt;Description: 映射表查看&lt;/p&gt;  
    * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;  
    * @author xx
    * @date 2019-12-16  
    * @throws Exception  
    * @version 1.0  
    */
    public VehicleFileInfoListUI() throws Exception
    {
        super();
    }
    
    /** 
     * (non-Javadoc)  
     * &lt;p&gt;Title: onLoad&lt;/p&gt;  
     * &lt;p&gt;Description: &lt;/p&gt;  
     * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;  
     * @author xx
     * @date 2019-12-18  
     * @throws Exception  
     * @see com.kingdee.eas.st.common.client.STBaseDataListUI#onLoad()  
     */
    @Override
    public void onLoad() throws Exception {
//		System.setProperty(&quot;EAS_HOME&quot;, &quot;Q://yq205//runtime&quot;); //本地环境需要无需提交
    	super.onLoad();
    	menuItemImportData.setEnabled(true);
    	menuItemImportData.setVisible(true);
    }
    
    /** 
     * (non-Javadoc)  
     * &lt;p&gt;Title: getImportParam&lt;/p&gt;  
     * &lt;p&gt;Description:导入功能 &lt;/p&gt;  
     * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;  
     * @author xx
     * @date 2019-12-16  
     * @return paramList 参数集合
     * @see com.kingdee.eas.st.common.client.STBaseDataListUI#getImportParam()  
     */
    protected ArrayList&lt;DatataskParameter&gt; getImportParam(){
    	DatataskParameter param = new DatataskParameter();
    	String solutionName = &quot;eas.10fm.vehicleBasedata&quot;;//更改路径 
    	param.solutionName = solutionName;
    	param.alias = &quot;车辆档案信息&quot;;//页签
    	ArrayList&lt;DatataskParameter&gt; paramList = new ArrayList&lt;DatataskParameter&gt;();
    	paramList.add(param);
    	return paramList;
    }

    /**
     * (non-Javadoc)  
     * &lt;p&gt;Title: getExportParam&lt;/p&gt;  
     * &lt;p&gt;
     *   Description:
     *   导出功能
     * &lt;/p&gt;  
     * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
     * @author xx
     * @date 2019-12-18
     * @return  
     * @see com.kingdee.eas.st.common.client.STBaseDataListUI#getExportParam()
     */
    protected ArrayList getExportParam(){
    	DatataskParameter param = new DatataskParameter();
    	param.solutionName = &quot;eas.10fm.vehicleBasedata&quot;;
    	param.alias = &quot;车辆档案信息&quot;;//页签
    	param.varList = new ArrayList();
    	param.datataskMode = 1;
    	ArrayList paramList = new ArrayList();
    	paramList.add(param);
    	return paramList;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>代码 String solutionName = &quot;eas.10fm.vehicleBasedata&quot;;路径来源</p></blockquote><figure><img src="`+B+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>注本地测试需要如下此代码放开，其路径为listui onload方法第一行，根据不同项目灵活变动</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>System.setProperty(&quot;EAS_HOME&quot;, &quot;Q://yq205//runtime&quot;); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="其它编码" tabindex="-1"><a class="header-anchor" href="#其它编码" aria-hidden="true">#</a> 其它编码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/**
 * output package name
 */
package com.kingdee.eas.custom.basedata.vehiclefileinfo.client;

import org.apache.log4j.Logger;

import com.kingdee.bos.BOSException;
import com.kingdee.bos.ctrl.extendcontrols.KDBizPromptBox;
import com.kingdee.bos.metadata.entity.EntityViewInfo;
import com.kingdee.bos.metadata.entity.FilterInfo;
import com.kingdee.bos.metadata.entity.FilterItemInfo;
import com.kingdee.bos.metadata.query.util.CompareType;
import com.kingdee.bos.ui.face.CoreUIObject;
import com.kingdee.eas.base.codingrule.CodingRuleManagerFactory;
import com.kingdee.eas.base.codingrule.ICodingRuleManager;
import com.kingdee.eas.basedata.master.auxacct.AuxAccountUtils;
import com.kingdee.eas.basedata.master.auxacct.GeneralAsstActTypeGroupCollection;
import com.kingdee.eas.basedata.master.auxacct.GeneralAsstActTypeGroupFactory;
import com.kingdee.eas.basedata.master.auxacct.GeneralAsstActTypeGroupInfo;
import com.kingdee.eas.basedata.org.CompanyOrgUnitInfo;
import com.kingdee.eas.basedata.org.OrgType;
import com.kingdee.eas.common.client.SysContext;
import com.kingdee.eas.custom.basedata.vehiclefileinfo.VehicleStatusEnum;
import com.kingdee.eas.util.SysUtil;
import com.kingdee.eas.util.client.MsgBox;

/**  
 * &lt;p&gt;Title: VehicleFileInfoEditUI&lt;/p&gt;
 * &lt;p&gt;Description: &lt;/p&gt;  
 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;  
 * @author xx
 * @date 2019-12-6
 * @version 1.0  
 */
public class VehicleFileInfoEditUI extends AbstractVehicleFileInfoEditUI
{
	private static final Logger logger = CoreUIObject.getLogger(VehicleFileInfoEditUI.class);

	/**
	 * output class constructor
	 */
	public VehicleFileInfoEditUI() throws Exception
	{
		super();
	}

	/**
	 * output getBizInterface method
	 */
	protected com.kingdee.eas.framework.ICoreBase getBizInterface() throws Exception
	{
		return com.kingdee.eas.custom.basedata.vehiclefileinfo.VehicleFileInfoFactory.getRemoteInstance();
	}


	/**
	 *  (non-Javadoc)  
	 * &lt;p&gt;Title: createNewData&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;  
	 * @author xx
	 * @date 2019-12-9 
	 * @return  
	 * @see com.kingdee.eas.custom.basedata.vehiclefileinfo.client.AbstractVehicleFileInfoEditUI#createNewData()
	 */
	protected com.kingdee.bos.dao.IObjectValue createNewData()
	{
		com.kingdee.eas.custom.basedata.vehiclefileinfo.VehicleFileInfoInfo objectValue = 
			new com.kingdee.eas.custom.basedata.vehiclefileinfo.VehicleFileInfoInfo();
		objectValue.setCreator(
				(com.kingdee.eas.base.permission.UserInfo)
				(com.kingdee.eas.common.client.SysContext.getSysContext().getCurrentUser()));

		try {

			//编码规则生成的编码
			ICodingRuleManager iCodingRuleManager = CodingRuleManagerFactory.getRemoteInstance();
			String number = iCodingRuleManager.getNumber(objectValue, &quot;&quot;);
			
			objectValue.setNumber(number);//为原车辆编号赋值
			objectValue.setVehicleNum(number);//为自定义车辆编号赋值
			objectValue.setVehicleStatus(VehicleStatusEnum.available);//为车辆状态赋值
			objectValue.setMortgage(true);//为是否抵押赋值

			/**
			 * 为所属组织赋值，
			 * 判断其是否为财务组织，
			 * 若为财务组织则显示，
			 * 否则不显示并且不可保存
			 * 
			 * getBoolean(&quot;isBizUnit&quot;)
			 * 判断是否为业务单元
			 */
			if(SysContext.getSysContext().getCurrentOrgUnit(OrgType.getEnum(&quot;Company&quot;)) != null 
					&amp;&amp; SysContext.getSysContext().getCurrentOrgUnit(OrgType.getEnum(&quot;Company&quot;)).getBoolean(&quot;isBizUnit&quot;)){
				objectValue.setSubordOrganization((CompanyOrgUnitInfo) SysContext.getSysContext().
						getCurrentOrgUnit(OrgType.getEnum(&quot;Company&quot;)));
			}

		} catch (Exception e) {
			MsgBox.showWarning(&quot;初始状态不正确!&quot;);
			SysUtil.abort();//停掉前台的方法
		}
		return objectValue;
	}


	/**  
	 * &lt;p&gt;Title: setAsstActTypeFilter&lt;/p&gt;  
	 * &lt;p&gt;Description: 过滤自定义核算项目&lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;  
	 * @author xx
	 * @date 2019-12-12  
	 * @param prmt
	 * @param number
	 * @throws BOSException  
	 * @version 1.0  
	 */
	private void setAsstActTypeFilter(KDBizPromptBox prmt,String number) throws BOSException{
		FilterInfo filter = new FilterInfo();
		filter.getFilterItems().add(new FilterItemInfo(&quot;number&quot;,number,CompareType.EQUALS));
		EntityViewInfo view = new EntityViewInfo();
		view.setFilter(filter);
		GeneralAsstActTypeGroupCollection col = GeneralAsstActTypeGroupFactory.getRemoteInstance().getGeneralAsstActTypeGroupCollection(view);
		if(col.size() &gt; 0){
			GeneralAsstActTypeGroupInfo generalAsstActTypeGroupInfo = col.get(0);
			String fid = generalAsstActTypeGroupInfo.getId().toString();
			AuxAccountUtils.assignGeneralBizPromptBox(prmt, fid, false, this);  
		}
	}

	@Override
	public void onLoad() throws Exception {
		prmtsubordOrganization.setDisplayFormat(&quot;$name&quot;);//所属组织--更改因F7时选择字段错误的bug
		prmtbusinessType.setDisplayFormat(&quot;$name&quot;);//业务类形--更改因F7时选择字段错误的bug
		prmtsubordProject.setDisplayFormat(&quot;$name&quot;);//所属项目--更改因F7时选择字段错误的bug
		prmtvehicleModel.setDisplayFormat(&quot;$name&quot;);//车辆型号--更改因F7时选择字段错误的bug
		super.onLoad();
		//业务类型过滤
		setAsstActTypeFilter(prmtbusinessType, &quot;YQ-0006&quot;);
		//车辆型号过滤
		setAsstActTypeFilter(prmtvehicleModel, &quot;80002&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="融资租赁合同导入" tabindex="-1"><a class="header-anchor" href="#融资租赁合同导入" aria-hidden="true">#</a> 融资租赁合同导入</h4><ol><li>配置导入模板字段</li></ol><p>路径: 系统平台 --&gt; 业务工具 --&gt; 引入引出管理 --&gt; 引入引出模板管理</p><figure><img src="`+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>模板目录编辑</li></ol><figure><img src="'+M+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>新建导入类</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.kingdee.eas.custom.bill.leaseconbill.app;

import com.kingdee.bos.Context;
import com.kingdee.eas.framework.ICoreBase;
import com.kingdee.eas.tools.datatask.AbstractDataTransmission;
import com.kingdee.eas.tools.datatask.core.TaskExternalException;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    融资租赁合同导入类
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author DZ_yanb
 * @date 2020-5-18   下午03:02:12
 * @version 1.0
 */
public class LeaseConBillDataImport extends AbstractDataTransmission{

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author DZ_yanb
	 * @date 2020-5-18   下午03:03:25
	 * @param param the bare_field_name
	 * @param arg0
	 * @return
	 * @throws TaskExternalException
	 * @see com.kingdee.eas.tools.datatask.AbstractDataTransmission#getController(com.kingdee.bos.Context)
	 * @version 1.0
	 */
	@Override
	protected ICoreBase getController(Context arg0)
			throws TaskExternalException {
		return null;
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>新增模板编辑</li></ol><p>规则定义</p><h4 id="遇到的bug" tabindex="-1"><a class="header-anchor" href="#遇到的bug" aria-hidden="true">#</a> 遇到的bug</h4><ol><li>车辆档案信息点击新增时报错信息如下</li></ol><figure><img src="`+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>解决方法</p></blockquote><figure><img src="'+U+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+O+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>保存后启用规则即可</p></blockquote><ol start="2"><li>引入引出模板配置完成后点击引出模板之后报如下错误</li></ol><figure><img src="'+z+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>错误信息：null
错误详细堆栈信息：java.lang.ExceptionInInitializerError: null

        at: com.kingdee.eas.tools.datatask.client.FileSelector.show(FileSelector.java:160)

        at: com.kingdee.eas.tools.datatask.client.AbstractTemplateExport.getFilePath(AbstractTemplateExport.java:23)

        at: com.kingdee.eas.tools.datatask.client.TemplateExport.export(TemplateExport.java:167)

        at: com.kingdee.eas.tools.datatask.client.DIETemplateListUI.actionExportTemplate_actionPerformed(DIETemplateListUI.java:136)

        at: sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)

        at: sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)

        at: sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)

        at: java.lang.reflect.Method.invoke(Method.java:597)

        at: com.kingdee.bos.ui.face.ItemAction.reflectPerformAction(ItemAction.java:439)

        at: com.kingdee.bos.ui.face.ItemAction.innerActionPerformed(ItemAction.java:397)

        at: com.kingdee.eas.tools.datatask.client.AbstractDIETemplateListUI$ActionExportTemplate.actionPerformed(AbstractDIETemplateListUI.java:764)

        at: com.kingdee.bos.appframework.client.servicebinding.ActionProxy.actionPerformedInvoke(ActionProxy.java:188)

        at: com.kingdee.bos.appframework.client.servicebinding.ActionProxy.actionPerformed(ActionProxy.java:112)

        at: javax.swing.AbstractButton.fireActionPerformed(AbstractButton.java:1995)

        at: com.kingdee.bos.ctrl.swing.KDWorkButton.fireActionPerformed(KDWorkButton.java:567)

        at: javax.swing.AbstractButton$Handler.actionPerformed(AbstractButton.java:2318)

        at: javax.swing.DefaultButtonModel.fireActionPerformed(DefaultButtonModel.java:387)

        at: javax.swing.DefaultButtonModel.setPressed(DefaultButtonModel.java:242)

        at: javax.swing.plaf.basic.BasicButtonListener.mouseReleased(BasicButtonListener.java:236)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.Component.processMouseEvent(Component.java:6267)

        at: javax.swing.JComponent.processMouseEvent(JComponent.java:3267)

        at: com.kingdee.bos.ctrl.swing.KDWorkButton.processMouseEvent(KDWorkButton.java:898)

        at: java.awt.Component.processEvent(Component.java:6032)

        at: java.awt.Container.processEvent(Container.java:2041)

        at: java.awt.Component.dispatchEventImpl(Component.java:4630)

        at: java.awt.Container.dispatchEventImpl(Container.java:2099)

        at: java.awt.Component.dispatchEvent(Component.java:4460)

        at: java.awt.LightweightDispatcher.retargetMouseEvent(Container.java:4577)

        at: java.awt.LightweightDispatcher.processMouseEvent(Container.java:4238)

        at: java.awt.LightweightDispatcher.dispatchEvent(Container.java:4168)

        at: java.awt.Container.dispatchEventImpl(Container.java:2085)

        at: java.awt.Window.dispatchEventImpl(Window.java:2478)

        at: java.awt.Component.dispatchEvent(Component.java:4460)

        at: java.awt.EventQueue.dispatchEvent(EventQueue.java:599)

        at: com.kingdee.bos.invokecounter.RPCLogEventQueue.dispatchEvent(RPCLogEventQueue.java:176)

        at: sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)

        at: sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)

        at: java.lang.reflect.Method.invoke(Method.java:597)

        at: com.kingdee.eas.client.recorder.UserInputEventQueue.myDispatchEvent(UserInputEventQueue.java:126)

        at: com.kingdee.eas.client.recorder.UserInputEventQueue.dispatchEvent(UserInputEventQueue.java:59)

        at: java.awt.EventDispatchThread.pumpOneEventForFilters(EventDispatchThread.java:269)

        at: java.awt.EventDispatchThread.pumpEventsForFilter(EventDispatchThread.java:184)

        at: java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:174)

        at: java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:169)

        at: java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:161)

        at: java.awt.EventDispatchThread.run(EventDispatchThread.java:122)

java.lang.NullPointerException: null

        at: com.kingdee.eas.tools.datatask.util.GlobalFunction.&lt;clinit&gt;(GlobalFunction.java:57)

        at: com.kingdee.eas.tools.datatask.client.FileSelector.show(FileSelector.java:160)

        at: com.kingdee.eas.tools.datatask.client.AbstractTemplateExport.getFilePath(AbstractTemplateExport.java:23)

        at: com.kingdee.eas.tools.datatask.client.TemplateExport.export(TemplateExport.java:167)

        at: com.kingdee.eas.tools.datatask.client.DIETemplateListUI.actionExportTemplate_actionPerformed(DIETemplateListUI.java:136)

        at: sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)

        at: sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)

        at: sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)

        at: java.lang.reflect.Method.invoke(Method.java:597)

        at: com.kingdee.bos.ui.face.ItemAction.reflectPerformAction(ItemAction.java:439)

        at: com.kingdee.bos.ui.face.ItemAction.innerActionPerformed(ItemAction.java:397)

        at: com.kingdee.eas.tools.datatask.client.AbstractDIETemplateListUI$ActionExportTemplate.actionPerformed(AbstractDIETemplateListUI.java:764)

        at: com.kingdee.bos.appframework.client.servicebinding.ActionProxy.actionPerformedInvoke(ActionProxy.java:188)

        at: com.kingdee.bos.appframework.client.servicebinding.ActionProxy.actionPerformed(ActionProxy.java:112)

        at: javax.swing.AbstractButton.fireActionPerformed(AbstractButton.java:1995)

        at: com.kingdee.bos.ctrl.swing.KDWorkButton.fireActionPerformed(KDWorkButton.java:567)

        at: javax.swing.AbstractButton$Handler.actionPerformed(AbstractButton.java:2318)

        at: javax.swing.DefaultButtonModel.fireActionPerformed(DefaultButtonModel.java:387)

        at: javax.swing.DefaultButtonModel.setPressed(DefaultButtonModel.java:242)

        at: javax.swing.plaf.basic.BasicButtonListener.mouseReleased(BasicButtonListener.java:236)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.Component.processMouseEvent(Component.java:6267)

        at: javax.swing.JComponent.processMouseEvent(JComponent.java:3267)

        at: com.kingdee.bos.ctrl.swing.KDWorkButton.processMouseEvent(KDWorkButton.java:898)

        at: java.awt.Component.processEvent(Component.java:6032)

        at: java.awt.Container.processEvent(Container.java:2041)

        at: java.awt.Component.dispatchEventImpl(Component.java:4630)

        at: java.awt.Container.dispatchEventImpl(Container.java:2099)

        at: java.awt.Component.dispatchEvent(Component.java:4460)

        at: java.awt.LightweightDispatcher.retargetMouseEvent(Container.java:4577)

        at: java.awt.LightweightDispatcher.processMouseEvent(Container.java:4238)

        at: java.awt.LightweightDispatcher.dispatchEvent(Container.java:4168)

        at: java.awt.Container.dispatchEventImpl(Container.java:2085)

        at: java.awt.Window.dispatchEventImpl(Window.java:2478)

        at: java.awt.Component.dispatchEvent(Component.java:4460)

        at: java.awt.EventQueue.dispatchEvent(EventQueue.java:599)

        at: com.kingdee.bos.invokecounter.RPCLogEventQueue.dispatchEvent(RPCLogEventQueue.java:176)

        at: sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)

        at: sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)

        at: java.lang.reflect.Method.invoke(Method.java:597)

        at: com.kingdee.eas.client.recorder.UserInputEventQueue.myDispatchEvent(UserInputEventQueue.java:126)

        at: com.kingdee.eas.client.recorder.UserInputEventQueue.dispatchEvent(UserInputEventQueue.java:59)

        at: java.awt.EventDispatchThread.pumpOneEventForFilters(EventDispatchThread.java:269)

        at: java.awt.EventDispatchThread.pumpEventsForFilter(EventDispatchThread.java:184)

        at: java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:174)

        at: java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:169)

        at: java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:161)

        at: java.awt.EventDispatchThread.run(EventDispatchThread.java:122)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+K+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>错误信息：Could not initialize class com.kingdee.eas.tools.datatask.util.GlobalFunction
错误详细堆栈信息：java.lang.NoClassDefFoundError: Could not initialize class com.kingdee.eas.tools.datatask.util.GlobalFunction

        at: com.kingdee.eas.tools.datatask.client.FileSelector.show(FileSelector.java:160)

        at: com.kingdee.eas.tools.datatask.client.AbstractTemplateExport.getFilePath(AbstractTemplateExport.java:23)

        at: com.kingdee.eas.tools.datatask.client.TemplateExport.export(TemplateExport.java:167)

        at: com.kingdee.eas.tools.datatask.client.DIETemplateListUI.actionExportTemplate_actionPerformed(DIETemplateListUI.java:136)

        at: sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)

        at: sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)

        at: sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)

        at: java.lang.reflect.Method.invoke(Method.java:597)

        at: com.kingdee.bos.ui.face.ItemAction.reflectPerformAction(ItemAction.java:439)

        at: com.kingdee.bos.ui.face.ItemAction.innerActionPerformed(ItemAction.java:397)

        at: com.kingdee.eas.tools.datatask.client.AbstractDIETemplateListUI$ActionExportTemplate.actionPerformed(AbstractDIETemplateListUI.java:764)

        at: com.kingdee.bos.appframework.client.servicebinding.ActionProxy.actionPerformedInvoke(ActionProxy.java:188)

        at: com.kingdee.bos.appframework.client.servicebinding.ActionProxy.actionPerformed(ActionProxy.java:112)

        at: javax.swing.AbstractButton.fireActionPerformed(AbstractButton.java:1995)

        at: com.kingdee.bos.ctrl.swing.KDWorkButton.fireActionPerformed(KDWorkButton.java:567)

        at: javax.swing.AbstractButton$Handler.actionPerformed(AbstractButton.java:2318)

        at: javax.swing.DefaultButtonModel.fireActionPerformed(DefaultButtonModel.java:387)

        at: javax.swing.DefaultButtonModel.setPressed(DefaultButtonModel.java:242)

        at: javax.swing.plaf.basic.BasicButtonListener.mouseReleased(BasicButtonListener.java:236)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.Component.processMouseEvent(Component.java:6267)

        at: javax.swing.JComponent.processMouseEvent(JComponent.java:3267)

        at: com.kingdee.bos.ctrl.swing.KDWorkButton.processMouseEvent(KDWorkButton.java:898)

        at: java.awt.Component.processEvent(Component.java:6032)

        at: java.awt.Container.processEvent(Container.java:2041)

        at: java.awt.Component.dispatchEventImpl(Component.java:4630)

        at: java.awt.Container.dispatchEventImpl(Container.java:2099)

        at: java.awt.Component.dispatchEvent(Component.java:4460)

        at: java.awt.LightweightDispatcher.retargetMouseEvent(Container.java:4577)

        at: java.awt.LightweightDispatcher.processMouseEvent(Container.java:4238)

        at: java.awt.LightweightDispatcher.dispatchEvent(Container.java:4168)

        at: java.awt.Container.dispatchEventImpl(Container.java:2085)

        at: java.awt.Window.dispatchEventImpl(Window.java:2478)

        at: java.awt.Component.dispatchEvent(Component.java:4460)

        at: java.awt.EventQueue.dispatchEvent(EventQueue.java:599)

        at: com.kingdee.bos.invokecounter.RPCLogEventQueue.dispatchEvent(RPCLogEventQueue.java:176)

        at: sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)

        at: sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)

        at: java.lang.reflect.Method.invoke(Method.java:597)

        at: com.kingdee.eas.client.recorder.UserInputEventQueue.myDispatchEvent(UserInputEventQueue.java:126)

        at: com.kingdee.eas.client.recorder.UserInputEventQueue.dispatchEvent(UserInputEventQueue.java:59)

        at: java.awt.EventDispatchThread.pumpOneEventForFilters(EventDispatchThread.java:269)

        at: java.awt.EventDispatchThread.pumpEventsForFilter(EventDispatchThread.java:184)

        at: java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:174)

        at: java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:169)

        at: java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:161)

        at: java.awt.EventDispatchThread.run(EventDispatchThread.java:122)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>解决方法</p></blockquote><figure><img src="`+R+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+Q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="融资租赁合同多页签导入功能" tabindex="-1"><a class="header-anchor" href="#融资租赁合同多页签导入功能" aria-hidden="true">#</a> 融资租赁合同多页签导入功能</h4><figure><img src="'+J+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+G+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+W+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+H+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+$+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+X+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+Y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>长春一汽项目复盘</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr>',93);function ae(se,le){const n=v("ExternalLinkIcon");return a(),s("div",null,[l(" more "),e("h1",ee,[ie,i(),e("a",ne,[i("167-长春一汽项目复盘.md"),d(n)])]),te])}const re=t(Z,[["render",ae],["__file","kingdee167.html.vue"]]);export{re as default};
