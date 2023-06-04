import{_ as t,X as l,Y as s,a1 as d,Z as i,$ as n,a2 as a,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_168_1.png",u="/blog/assets/Kingdee_168_2.png",o="/blog/assets/Kingdee_168_3.png",m="/blog/assets/Kingdee_168_4.png",b="/blog/assets/Kingdee_168_5.png",p="/blog/assets/Kingdee_168_6.png",g="/blog/assets/Kingdee_168_7.png",h="/blog/assets/Kingdee_168_8.png",f="/blog/assets/Kingdee_168_9.png",_="/blog/assets/Kingdee_168_10.png",x="/blog/assets/Kingdee_168_11.png",q="/blog/assets/Kingdee_168_12.png",S={},E={id:"_168-平安利顺项目复盘-md",tabindex:"-1"},w=i("a",{class:"header-anchor",href:"#_168-平安利顺项目复盘-md","aria-hidden":"true"},"#",-1),k={href:"http://xn--168--tl9f287afler6g747digak216ala.md",target:"_blank",rel:"noopener noreferrer"},y=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol start="9"><li>需求：增加受控人员清单功能；受控人员清单菜单只能在认证账号下才能看到，才可用添加和修改受控人员信息；认证账号可以添加受控人员，也可以修改和删除受控人员；</li></ol><ul><li>实现功能：</li></ul><blockquote><p>备注：认证账号 authenadmin/12345678 路径：企业建模 --&gt; 安全管理 --&gt; 权限管理 --&gt; 受控人员清单</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>实现效果</li></ul><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>想要实现认证账号可见，其它账号不可见只需要在客户化菜单做设置即可</li></ul><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="10"><li>需求： 用户账号修改控制;修改用户账号时判断，如果该账号绑定的人员为受控人员清单中的人员时，则人员字段锁定不可修改，如果不为受控人员清单中的人员时，按现在可修改的逻辑控制；新增或者修改用户账号保存时，判断关联的人员在受控人员清单中时，再判断该人员是否有多个用户账号，如果存在多个用户账号时则不能保存，提示“受控人员不允许存在多个账号！”；关联的人员不在受控清单中时，按现在逻辑控制；</li></ol><blockquote><p>备注：路径： 企业建模 --&gt; 安全管理 --&gt; 权限管理 --&gt; 用户管理</p></blockquote><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>编码实现</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.kingdee.eas.base.permission.client;

import java.awt.event.ActionEvent;

import com.kingdee.bos.dao.query.SQLExecutorFactory;
import com.kingdee.eas.common.EASBizException;
import com.kingdee.jdbc.rowset.IRowSet;
import com.kingdee.util.NumericExceptionSubItem;

/**
 * &lt;p&gt;Title: 用户管理&lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;  
 * @author DZ_yanb
 * @date 2020-1-3
 * @version 1.0 
 */
public class UserEditUICTEx extends UserEditUI{

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;  
	 * @author DZ_yanb
	 * @date 2020-1-3  
	 * @param param the bare_field_name
	 * @throws Exception  
	 * @version 1.0 
	 */
	public UserEditUICTEx() throws Exception {
		super();
	}
	
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;  
	 * @author DZ_yanb
	 * @date 2020-1-3  
	 * @param param the bare_field_name
	 * @throws Exception  
	 * @version 1.0 
	 */
	@Override
	public void onLoad() throws Exception {
		super.onLoad();
		/**
		 * 判断是否在受控人员清单中，若在则设置名称不可修改，若不在则可修改
		 */
		String sql = &quot;select * from CT_BAS_Listofconperson where cfnewname = &#39;&quot; + this.pmtUserRelation.getValue() + &quot;&#39;&quot;;
		IRowSet rowset = SQLExecutorFactory.getRemoteInstance(sql.toString()).executeSQL();
		if(rowset.next()){
			this.pmtUserRelation.setEnabled(false);
		}else{
			this.pmtUserRelation.setEnabled(true);
			this.mlbUserRelation.setEnabled(true);
		}
	}
	
	/**
	 * &lt;p&gt;Title: 提交方法&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description:
	 *    新增或修改用户账号保存时，判断关联的人员在是否在受控人员清单中时，
	 *    再判断该人员是否有多个用户账号，如果存在多个用户账号时则不能保存
	 *    提示“受控人员不允许存在多个账号!”;关联的人员不在受控清单时，按现在逻辑控制;
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;  
	 * @author DZ_yanb
	 * @date 2020-1-3  
	 * @param param the bare_field_name
	 * @param e
	 * @throws Exception  
	 * @version 1.0 
	 */
	@Override
	public void actionSubmit_actionPerformed(ActionEvent e) throws Exception {
		String sql = &quot;select * from CT_BAS_Listofconperson where cfnewname = &#39;&quot; + this.pmtUserRelation.getValue() + &quot;&#39;&quot;;
		IRowSet rowset = SQLExecutorFactory.getRemoteInstance(sql.toString()).executeSQL();
		if(rowset.next()){//判断是否在受控人员清单中
			// 判断是否有多个账号
			String sql2 = &quot;select * from T_PM_User where fname_l2 = &#39;&quot; + this.pmtUserRelation.getValue() + &quot;&#39;&quot;;
			IRowSet rowset2 = SQLExecutorFactory.getRemoteInstance(sql2.toString()).executeSQL();
			int count = 0;
			while(rowset2.next()){
				count++;
			}
			if(count &gt; 1){
				throw new EASBizException(new NumericExceptionSubItem(&quot;110&quot;,&quot;受控人员不允许存在多个账号！&quot;));
			}else{
				super.actionSubmit_actionPerformed(e);
			}
		}else{
			super.actionSubmit_actionPerformed(e);
		}
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li>需求：员工信息保存时判断姓名不能重复，保存时判断姓名前后不能有特殊符号。</li></ol><blockquote><p>备注： 路径: 企业建模 --&gt; 辅助数据 --&gt; 员工信息 --&gt; 员工</p></blockquote><figure><img src="`+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>编码</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.kingdee.eas.basedata.person.client;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.SQLException;
import com.kingdee.bos.BOSException;
import com.kingdee.bos.ctrl.swing.KDCheckBox;
import com.kingdee.bos.ctrl.swing.KDTabbedPane;
import com.kingdee.bos.dao.query.SQLExecutorFactory;
import com.kingdee.bos.util.BOSUuid;
import com.kingdee.eas.common.EASBizException;
import com.kingdee.eas.custom.pinganlishun.util.DEPUtils;
import com.kingdee.eas.custom.pinganlishun.util.TrainsportationUtil;
import com.kingdee.jdbc.rowset.IRowSet;
import com.kingdee.util.NumericExceptionSubItem;

/**
 * &lt;p&gt;Title: &lt;/p&gt;  
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;  
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;  
 * @author DZ_yanb
 * @date 2020-1-9
 * @version 1.0
 */
public class PersonEditUICTEx extends PersonEditUI {

	private Object kdtTrainsportation;
	public PersonEditUICTEx() throws Exception {
		super();
		//loadFields();
		//onLoad();
	}
	
	/**
	 * (non-Javadoc)  
	 * &lt;p&gt;Title: actionSubmit_actionPerformed&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description:
	 *    1. 基础资料走的保存方法
	 *    2. 保存时验证名称前后是否有特殊符号
	 *    3. 保存时验证姓名不能重复
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @author DZ_yanb
	 * @date 2020-1-2
	 * @param arg0
	 * @throws Exception  
	 * @see com.kingdee.eas.basedata.person.client.PersonEditUI#actionSubmit_actionPerformed(java.awt.event.ActionEvent)
	 */
	@Override
	public void actionSubmit_actionPerformed(ActionEvent e) throws Exception {
		/**
		 * 名称控件 DefaultTextField
		 * 思路：
		 * 1. 提交之前获取 名称 的值
		 * 2. 判断名名当中是否今有特殊符号，若有特殊符号则弹出提示，无则放行
		 * 3. 若上述验证通过，则去查数据库，看看其值是否有重，若有则弹出提示，无则放行
		 * 3.1 表名为，名称的字段为 T_BD_Person FName_L2
		 */
		String name = this.txtName2.getDefaultLangItemData().toString();
		/**
		 * 判断是否只是由数字，中文,字母组成
		 */
		if(!isLetterDigitOrChinese(name)){
			throw new EASBizException(new NumericExceptionSubItem(&quot;110&quot;,&quot;名称不能包含特殊字符&quot;));
		}
		/**
		 * 判断名称是否唯一
		 */
		if(isOnly(&quot;T_BD_Person&quot;, &quot;FName_L2&quot;, name,editData.getId())){
			throw new EASBizException(new NumericExceptionSubItem(&quot;111&quot;, &quot;名称不能重复！&quot;));
		}
		super.actionSubmit_actionPerformed(e); 
	}
	
	/**  
	 * &lt;p&gt;Title: isOnly&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    验证某字段是否唯一
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @author DZ_yanb
	 * @date 2020-1-3
	 * @param tableName
	 * @param colName
	 * @param name
	 * @param uuid
	 * @return
	 * @throws BOSException
	 * @throws SQLException
	 * @version 1.0
	 */
	public Boolean isOnly(String tableName,String colName,String name,BOSUuid uuid) throws BOSException,SQLException {
		String sql = &quot;select &quot; + colName + &quot; from &quot; + tableName + &quot; where fid &lt;&gt; &#39;&quot; + uuid + &quot;&#39;&quot;;
		
		IRowSet rowset = SQLExecutorFactory.getRemoteInstance(sql.toString()).executeSQL();
		Boolean result = false;
		while (rowset.next()) {
			if(name.equals(rowset.getString(colName))){
				result = true;
			}
		}
		return result;
	}

	/**  
	 * &lt;p&gt;Title: isLetterDigitOrChinese&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *   判断字符串中是否仅包含字母数字和汉字
     *   各种字符的unicode编码的范围：
     *   汉字：[0x4e00,0x9fa5]（或十进制[19968,40869]）
     *   数字：[0x30,0x39]（或十进制[48, 57]）
     *   小写字母：[0x61,0x7a]（或十进制[97, 122]）
     *   大写字母：[0x41,0x5a]（或十进制[65, 90]）
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @author DZ_yanb
	 * @date 2020-1-2
	 * @param str
	 * @return
	 * @version 1.0
	 */
	public static boolean isLetterDigitOrChinese(String str) {
		String regex = &quot;^[a-z0-9A-Z\\u4e00-\\u9fa5]+$&quot;;
		return str.matches(regex);
	}
	
	/**
	 *  (non-Javadoc)
	 *  实现 员工信息修改时判断员工在受控清单中时，姓名不允许修改，不在受控清单中时，姓名允许修改 功能
	 * @see com.kingdee.eas.basedata.person.client.PersonEditUI#onLoad()
	 */
	@Override
	public void onLoad() throws Exception {
		super.onLoad();
		allowNameChange();
		this.btnEdit.setVisible(false);//设置双击时编辑按钮不可见
	}
	
	 /**
	 * 判断是否允许修改名字
	 * 实现 员工信息修改时判断员工在受控清单中时，姓名不允许修改，不在受控清单中时，姓名允许修改 功能
	 * @throws SQLException 
	 * @throws BOSException 
	 */
	private void allowNameChange() throws SQLException, BOSException {
		String sql = &quot;select * from CT_BAS_Listofconperson where cfnewname = &#39;&quot; + this.txtName2.getDefaultLangItemData().toString() + &quot;&#39;&quot;;
		
		IRowSet rowset = SQLExecutorFactory.getRemoteInstance(sql.toString()).executeSQL();
		if(rowset.next()){
			this.txtName2.setEnabled(false);
		}
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12"><li>需求：员工信息修改时判断员工在受控清单中时，姓名和身份证号不允许修改，不在受控清单中时，姓名和身份证号允许修改，姓名还是受第11点不允许重复的控制。</li></ol><blockquote><p>需求有误，已核对，没有身份证。</p></blockquote><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>编码实现</li></ul><blockquote><p>上面的 allowNameChange 方法</p></blockquote><ul><li><p>a. 后续被充需求，基础资料添加到受控人员清单时不允许重复</p></li><li><p>编码实现</p></li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/**
 * output package name
 */
package com.kingdee.eas.custom.pinganlishun.permisapproval.basedata.client;

import java.awt.event.ActionEvent;

import org.apache.log4j.Logger;

import com.kingdee.bos.dao.query.SQLExecutorFactory;
import com.kingdee.bos.ui.face.CoreUIObject;
import com.kingdee.eas.common.EASBizException;
import com.kingdee.jdbc.rowset.IRowSet;
import com.kingdee.util.NumericExceptionSubItem;

/**
 * &lt;p&gt;Title: &lt;/p&gt;  
 * &lt;p&gt;
 *    Description:
 *    受控人员清单编辑页面
 * &lt;/p&gt;  
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;  
 * @author DZ_yanb
 * @date 2020-1-8    
 * @version 1.0 
 */
public class ListofconpersonEditUI extends AbstractListofconpersonEditUI
{
    /** 
     *  (non-Javadoc)
     *  保存时不让人员重复
     * @see com.kingdee.eas.framework.client.EditUI#actionSubmit_actionPerformed(java.awt.event.ActionEvent)
     */
    @Override
    public void actionSubmit_actionPerformed(ActionEvent arg0) throws Exception {
    	String sql = &quot;select * from CT_BAS_Listofconperson where cfnewname = &#39;&quot; + this.prmtpersonNum.getValue() + &quot;&#39;&quot;;
		IRowSet rowset = SQLExecutorFactory.getRemoteInstance(sql.toString()).executeSQL();
		if(rowset.next()){
			//重复给出提示
			throw new EASBizException(new NumericExceptionSubItem(&quot;11&quot;, this.prmtpersonNum.getValue() + &quot; 已被添加到受控人员清单，不可重复添加！&quot;));
		}else{
	    	super.actionSubmit_actionPerformed(arg0);
		}
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>1.4.2 对私支付银行账号控制</li></ul><ol><li>需求: 对私支付银行账号设置：在认证管理员下开发自动付款银行账号设置基础资料，只有认证管理员即郭总可以设置对私自动支付的招行账号；</li></ol><ul><li>实现</li></ul><blockquote><p>与上述的受控人员一样，只需在客户化菜单里设置即可，用专门的账号登录</p></blockquote><figure><img src="`+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>编码</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/**
 * output package name
 */
package com.kingdee.eas.custom.pinganlishun.permisapproval.banknumber.client;

import java.awt.event.ActionEvent;
import java.sql.SQLException;

import org.apache.log4j.Logger;

import com.kingdee.bos.BOSException;
import com.kingdee.bos.dao.query.SQLExecutorFactory;
import com.kingdee.bos.ui.face.CoreUIObject;
import com.kingdee.bos.util.BOSUuid;
import com.kingdee.eas.common.EASBizException;
import com.kingdee.jdbc.rowset.IRowSet;
import com.kingdee.util.NumericExceptionSubItem;

/**
 * &lt;p&gt;Title: &lt;/p&gt;  
 * &lt;p&gt;
 *    Description:
 *    对私支付账户清单编辑页面
 * &lt;/p&gt;  
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;  
 * @author DZ_yanb
 * @date 2020-1-8    
 * @version 1.0 
 */
public class PrivatepanumberEditUI extends AbstractPrivatepanumberEditUI
{
    /**
     * (non-Javadoc)
     * @see com.kingdee.eas.framework.client.EditUI#actionSubmit_actionPerformed(java.awt.event.ActionEvent)
     * CT_BAN_Privatepanumber cfbankaccount
     */
    @Override
    public void actionSubmit_actionPerformed(ActionEvent e) throws Exception {
    	String bankaccount = this.txtbankaccount.getText();
    	BOSUuid uuid = editData.getId();
		//编辑
		if(isOnly(&quot;CT_BAN_Privatepanumber&quot;, &quot;cfbankaccount&quot;, bankaccount, uuid)){
			//成立则银行账号重复
			throw new EASBizException(new NumericExceptionSubItem(&quot;110&quot;, &quot;银行账号不能重复！&quot;));
		}
    	super.actionSubmit_actionPerformed(e);
    }
    
	/**
	 * &lt;p&gt;Title: isOnly&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    验证某字段是否唯一
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2019&lt;/p&gt;
	 * @param tableName 表名
	 * @param colName 列名
	 * @param colNVal 列值
	 * @param uuid id值
	 * @return
	 * @throws BOSException
	 * @throws SQLException
	 */
	public Boolean isOnly(String tableName,String colName,String colNVal,BOSUuid uuid) throws BOSException,SQLException {
		String sql = &quot;&quot;;
		if(uuid != null){//编辑
			sql = &quot;select &quot; + colName + &quot; from &quot; + tableName + &quot; where fid &lt;&gt; &#39;&quot; + uuid + &quot;&#39;&quot;;
		}else{//新增
			sql = &quot;select &quot; + colName + &quot; from &quot; + tableName + &quot; where &quot; + colName + &quot;= &#39;&quot; + colNVal + &quot;&#39;&quot;;
		}
		IRowSet rowset = SQLExecutorFactory.getRemoteInstance(sql.toString()).executeSQL();
		Boolean result = false;
		while (rowset.next()) {
			if(colNVal.equals(rowset.getString(colName))){
				result = true;
			}
		}
		return result;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>平安利顺项目复盘</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,42);function L(I,N){const e=v("ExternalLinkIcon");return l(),s("div",null,[d(" more "),i("h1",E,[w,n(),i("a",k,[n("168-平安利顺项目复盘.md"),a(e)])]),y])}const B=t(S,[["render",L],["__file","kingdee168.html.vue"]]);export{B as default};
