import{_ as l,X as s,Y as d,a1 as a,Z as i,$ as e,a2 as r,a0 as n,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_127_1.png",u="/blog/assets/Kingdee_127_2.png",m="/blog/assets/Kingdee_127_3.png",o="/blog/assets/Kingdee_127_4.png",b="/blog/assets/Kingdee_127_5.png",p="/blog/assets/Kingdee_127_6.png",g="/blog/assets/Kingdee_127_7.png",h="/blog/assets/Kingdee_127_8.png",y="/blog/assets/Kingdee_127_9.png",f="/blog/assets/Kingdee_127_10.png",x="/blog/assets/Kingdee_127_11.png",q="/blog/assets/Kingdee_127_12.png",S="/blog/assets/Kingdee_127_13.png",C={},I=n('<h1 id="_127-eas中如何实现导入多页签的excel功能-md" tabindex="-1"><a class="header-anchor" href="#_127-eas中如何实现导入多页签的excel功能-md" aria-hidden="true">#</a> 127-EAS中如何实现导入多页签的Excel功能？.md</h1><h4 id="需求场景" tabindex="-1"><a class="header-anchor" href="#需求场景" aria-hidden="true">#</a> 需求场景</h4><blockquote><p>最近项目中有遇到需要在EAS中实现导入的功能，但是是多页签Excel导入，由于Eas中标准不支持多页签的导入，那么此刻需求来了，EAS中如何实现导入多页签的Excel功能呢？</p></blockquote><h4 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路" aria-hidden="true">#</a> 实现思路</h4><ol><li><p>禁用标准的导入弹出框</p></li><li><p>自定义导入模板</p></li><li><p>编码读取Excel数据</p></li><li><p>过滤以判断数据的合法性，不合法则给出提示</p></li><li><p>数据通过校验则存入数据库，不通过则给出提示并中断导入</p></li></ol><h4 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h4><h5 id="禁用标准的导入弹出框" tabindex="-1"><a class="header-anchor" href="#禁用标准的导入弹出框" aria-hidden="true">#</a> 禁用标准的导入弹出框</h5><ol><li>找到导入按钮对应的方法</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>在List类中复写 actionImportData 方法体，去掉super即可禁用标准导入</li></ol><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="画出点击导入出弹的自定义弹出框" tabindex="-1"><a class="header-anchor" href="#画出点击导入出弹的自定义弹出框" aria-hidden="true">#</a> 画出点击导入出弹的自定义弹出框</h5><ol><li>画出弹出框</li></ol><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>为对应的按钮绑定事件</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>补充：新建与发布</li></ol><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="自定义导入的excel模板并放入对应的路径" tabindex="-1"><a class="header-anchor" href="#自定义导入的excel模板并放入对应的路径" aria-hidden="true">#</a> 自定义导入的Excel模板并放入对应的路径</h5><ol><li>自定义Excel模板</li></ol><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>放入对应的路径，例笔者的路径为</li></ol><blockquote><p>E:\\soft\\Kingdee\\easClient82\\eas\\client\\template\\LeaseConBillTemplate</p></blockquote><blockquote><p>Q:\\项目名\\runtime\\server\\deploy\\fileserver.ear\\easWebClient\\template\\LeaseConBillTemplate</p></blockquote><h5 id="编码实现对应的功能" tabindex="-1"><a class="header-anchor" href="#编码实现对应的功能" aria-hidden="true">#</a> 编码实现对应的功能</h5>',32),E={href:"https://www.jianshu.com/p/e7226d358733",target:"_blank",rel:"noopener noreferrer"},_=i("li",null,[i("p",null,"ListUI类")],-1),L=n(`<div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.kingdee.eas.custom.bill.leaseconbill.client;

import java.awt.event.ActionEvent;
import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.kingdee.bos.ui.face.CoreUIObject;
import com.kingdee.bos.ui.face.IUIFactory;
import com.kingdee.bos.ui.face.IUIWindow;
import com.kingdee.bos.ui.face.UIFactory;
import com.kingdee.eas.basedata.org.OrgType;
import com.kingdee.eas.common.client.UIContext;
import com.kingdee.eas.custom.bill.leaseconbill.client.util.ExcelImportUtil;
import com.kingdee.eas.custom.bill.leaseconbill.client.util.LeaseConBillImportHelper;
import com.kingdee.eas.custom.bill.leaseconbill.client.util.LeaseconbillImportUI;
import com.kingdee.eas.util.client.MsgBox;

/**
 * &lt;p&gt;Title: LeaseConBillListUI&lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    List前端界面
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020-5-19   上午11:49:38
 * @version 1.0
 */
public class LeaseConBillListUI extends AbstractLeaseConBillListUI
{
    private static final Logger logger = CoreUIObject.getLogger(LeaseConBillListUI.class);
    
	private File importDataFile = null;//导入文件
    
    /**
     * &lt;p&gt;Title: LeaseConBillListUI&lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     *    构造方法
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020-5-19   上午11:50:12
     * @param param the bare_field_name
     * @throws Exception
     * @version 1.0
     */
    public LeaseConBillListUI() throws Exception
    {
        super();
    }

    @Override
	protected String getPropertyOfBizOrg(OrgType orgType) {
		return &quot;FICompany.id&quot;;
	}

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     *    导入数据
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020-5-19   上午11:53:42
     * @param param the bare_field_name
     * @param e
     * @throws Exception
     * @see com.kingdee.eas.st.common.client.STBillBaseListUI#actionImportData_actionPerformed(java.awt.event.ActionEvent)
     * @version 1.0
     */
    @Override
    public void actionImportData_actionPerformed(ActionEvent e)
    		throws Exception {
    	File file = getImportFile();
		if (file == null) {
		  return;
		}
		this.importDataFile = file;
		ExcelImportUtil importUtil = new ExcelImportUtil(this,importDataFile);
		Map&lt;String, List&lt;Map&lt;String, String&gt;&gt;&gt; readFile = importUtil.readFile();
		LeaseConBillImportHelper helper = new LeaseConBillImportHelper(readFile);

		Map&lt;String,String&gt; mapping = new HashMap&lt;String, String&gt;();
		mapping.put(&quot;projectCode&quot;, &quot;projectName=name,costCenter=costCenter&quot;);
		mapping.put(&quot;materialNumber&quot;, &quot;materialName=name,materialType=model,unit=baseUnit.name&quot;);
		helper.dealWithData();
		MsgBox.showConfirm2(&quot;导入成功!&quot;);
		refreshList();
    }
    
    /**
     * File&lt;/br&gt;
     * 
     * &lt;p&gt;Title: getImportFile&lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     *     获取需要导入的文件对象
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020-5-19   上午11:55:28
     * @param param the bare_field_name
     * @return the bare_field_name
     * @return
     * @throws Exception
     * @version 1.0
     */
	private File getImportFile() throws Exception {
		UIContext uiCtx = new UIContext(this);
		uiCtx.put(&quot;selectedFile&quot;, this.importDataFile);
		IUIFactory createUIFactory = UIFactory.createUIFactory(&quot;com.kingdee.eas.base.uiframe.client.UIModelDialogFactory&quot;);
		
		IUIWindow uiFile = createUIFactory.create(LeaseconbillImportUI.class.getName(), uiCtx);
		uiFile.show();
		LeaseconbillImportUI fileUI = (LeaseconbillImportUI) uiFile.getUIObject();
		return fileUI.getSelectedFile();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>ExcelImportUtil类</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.kingdee.eas.custom.bill.leaseconbill.client.util;

import java.awt.Component;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.apache.commons.lang.exception.ExceptionUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.kingdee.eas.util.client.MsgBox;

/**
 * &lt;p&gt;Title: ExcelImportUtil&lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    Excel导入类
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020-5-19   下午01:51:00
 * @version 1.0
 */
public class ExcelImportUtil {
	/**
	 * 需要读取的文件
	 */
	private File selectFile = null;
	/**
	 * 父UI
	 */
	private Component owner = null;
	/**
	 * 表头行 从下标0开始
	 */
	private int keyLine = 2;
	/**
	 * 表头行 中文 从下标0开始
	 */
	private int keyCnLine = 3;
	/**
	 * 数据开始行号  从下标0开始
	 */
	private int dataLine = 4;
	/**
	 * 时间格式
	 */
	private SimpleDateFormat df = null;

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-25   下午04:03:59
	 * @param param the bare_field_name
	 * @version 1.0
	 */
	public ExcelImportUtil() {}
	
	/**
	 * &lt;p&gt;Title: ExcelImportUtil&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    (构造函数描述XXXX)
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-19   下午07:00:11
	 * @param param the bare_field_name
	 * @param owner 父UI对象
	 * @param selectFile 需要导入的Excel文件对象
	 * @version 1.0
	 */
	public ExcelImportUtil(Component owner, File selectFile) {
		this(owner, selectFile, null);
	}

	/**
	 * &lt;p&gt;Title: ExcelImportUtil&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    (构造函数描述XXXX)
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-19   下午07:00:51
	 * @param param the bare_field_name
	 * @param owner 父UI对象
	 * @param selectFile 需要导入的Excel文件对象
	 * @param param 导入时需要用的参数集合,
	 *       包含表头(执行系统能识别的英文key的行号,默认为2,
	 *       传入时键值为:keyLine),数据开始行(excel表中数据开始的行号,默认为4,
	 *       传入时键值为:dataLine),时间格式的格式化字符串(例:&quot;yyyy-MM-dd&quot;,默认为:&quot;yyyy-MM-dd&quot;)允许传空
	 * @version 1.0
	 */
	public ExcelImportUtil(Component owner, File selectFile, Map param) {
		this.selectFile = selectFile;
		this.owner = owner;
		if (param != null) {
			Object keyLineObj = param.get(&quot;keyLine&quot;);
			if (keyLineObj != null &amp;&amp; keyLineObj instanceof Integer) {
				this.keyLine = Integer.parseInt(keyLineObj.toString());
			}

			Object dataLineObj = param.get(&quot;dataLine&quot;);
			if (dataLineObj != null &amp;&amp; dataLineObj instanceof Integer) {
				this.dataLine = Integer.parseInt(dataLineObj.toString());
			}
			Object dateForm = param.get(&quot;dateFormat&quot;);
			if (dateForm != null) {
				df = new SimpleDateFormat(dateForm.toString());
			} 
		}
		if(df==null){
			df = new SimpleDateFormat(&quot;yyyy-MM-dd&quot;);
		}
	}

	/** 
	 * Map&lt;String,List&lt;Map&lt;String,String&gt;&gt;&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: readFile&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    读取文件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-19   下午07:02:50
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	public Map&lt;String, List&lt;Map&lt;String, String&gt;&gt;&gt; readFile() {
		FileInputStream out = null;
		try {
			Workbook workbook = null;
			out = new FileInputStream(selectFile);
			if (selectFile.getName().endsWith(&quot;.xls&quot;)) {
				workbook = new XSSFWorkbook(out);
			} else {
				workbook = new HSSFWorkbook(out);
			}
			int numberOfSheets = workbook.getNumberOfSheets();//读取页签数量
			Map&lt;String, List&lt;Map&lt;String, String&gt;&gt;&gt; data = new HashMap&lt;String, List&lt;Map&lt;String, String&gt;&gt;&gt;();
			for (int i = 0; i &lt; numberOfSheets; i++) {
				Sheet sheet = workbook.getSheetAt(i);
				String sheetName = sheet.getSheetName();
				data.put(sheetName, readFileData(sheet));
			}
			return data;
		} catch (FileNotFoundException e) {
			MsgBox.showWarning(owner, &quot;导入文件为找到!&quot;);
		} catch (IOException e) {
			MsgBox.showError(owner, &quot;读取文件出现错误!&quot;, ExceptionUtils.getFullStackTrace(e));
		} finally {
			if (out != null) {
				try {
					out.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return null;
	}

	/** 
	 * List&lt;Map&lt;String,String&gt;&gt;&lt;/br&gt;
	 * &lt;p&gt;Title: readFileData&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    按照页签读取excel中的数据
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-19   下午07:03:44
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param sheet excel页签对象
	 * @return List&lt;Map&lt;String, String&gt;&gt; 每行数据存放在Map中,最后所有的行数据存放如List集合
	 * @version 1.0
	 */
	private List&lt;Map&lt;String, String&gt;&gt; readFileData(Sheet sheet) {
		Map&lt;String, String&gt; lineValue;
		List&lt;Map&lt;String, String&gt;&gt; data = new ArrayList&lt;Map&lt;String, String&gt;&gt;();
		List&lt;String&gt; columnNames = getColumnNames(sheet);
		for (int i = dataLine; i &lt;= sheet.getLastRowNum(); i++) {
			Row row = sheet.getRow(i);
			lineValue = new TreeMap&lt;String, String&gt;();
			for (int j = 0; j &lt; columnNames.size(); j++) {
				lineValue.put(columnNames.get(j), getCellFormatValue(row.getCell(j)));
			}
			data.add(lineValue);
		}
		return data;
	}

	/** 
	 * List&lt;String&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: getColumnNames&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    获取execl中指定页签的表头
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-19   下午07:05:04
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param sheet 页签对象
	 * @return
	 * @version 1.0
	 */
	private List&lt;String&gt; getColumnNames(Sheet sheet) {
		List&lt;String&gt; cols = new ArrayList&lt;String&gt;();
		Row row = sheet.getRow(keyLine);
		Row rowcn = sheet.getRow(keyCnLine);
		for (int i = 0; i &lt; row.getPhysicalNumberOfCells(); i++) {
			Cell cell = row.getCell(i);
			Cell cellcn = rowcn.getCell(i);//存入中文的列名
			cols.add(getCellFormatValue(cell)+ &quot;-&quot; + getCellFormatValue(cellcn));
		}
		return cols;
	}

	/** 
	 * String&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: getCellFormatValue&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    解析Excel中指定单元格的数据
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-19   下午07:05:32
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param cell excel中的单元格对象
	 * @return
	 * @version 1.0
	 */
	private String getCellFormatValue(Cell cell) {
		String cellValue = &quot;&quot;;
		if (cell != null) {
			//判断cell类型
			switch (cell.getCellType()) {
				case Cell.CELL_TYPE_NUMERIC: {
					if (DateUtil.isCellDateFormatted(cell)) {
						cellValue = df.format(cell.getDateCellValue());
					} else {
						DataFormatter formatter = new DataFormatter();
						cellValue = formatter.formatCellValue(cell);
					}
					break;
				}
				case Cell.CELL_TYPE_STRING: {
					cellValue = cell.getStringCellValue();
					break;
				}
				default:
					cellValue = &quot;&quot;;
			}
		}
		return cellValue;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>LeaseConBillImportHelper类</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.kingdee.eas.custom.bill.leaseconbill.client.util;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.kingdee.bos.BOSException;
import com.kingdee.bos.ctrl.common.util.list.exception.ObjectNotFoundException;
import com.kingdee.bos.dao.IObjectValue;
import com.kingdee.bos.dao.ormapping.ObjectUuidPK;
import com.kingdee.bos.framework.DynamicObjectFactory;
import com.kingdee.bos.metadata.MetaDataLoaderFactory;
import com.kingdee.bos.metadata.entity.DataType;
import com.kingdee.bos.metadata.entity.EntityObjectInfo;
import com.kingdee.bos.metadata.entity.LinkPropertyInfo;
import com.kingdee.bos.metadata.entity.OwnPropertyInfo;
import com.kingdee.bos.metadata.entity.PropertyInfo;
import com.kingdee.bos.util.BOSObjectType;
import com.kingdee.eas.base.codingrule.CodingRuleManagerFactory;
import com.kingdee.eas.basedata.scm.common.IRowType;
import com.kingdee.eas.basedata.scm.common.RowTypeFactory;
import com.kingdee.eas.basedata.scm.common.RowTypeInfo;
import com.kingdee.eas.common.EASBizException;
import com.kingdee.eas.common.client.SysContext;
import com.kingdee.eas.custom.bill.leaseconbill.LeaseConBillEntryCollection;
import com.kingdee.eas.custom.bill.leaseconbill.LeaseConBillEntryInfo;
import com.kingdee.eas.custom.bill.leaseconbill.LeaseConBillFactory;
import com.kingdee.eas.custom.bill.leaseconbill.LeaseConBillInfo;
import com.kingdee.eas.custom.bill.leaseconbill.LeaseConBillPayPlanEntryCollection;
import com.kingdee.eas.custom.bill.leaseconbill.LeaseConBillPayPlanEntryInfo;
import com.kingdee.util.NumericExceptionSubItem;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020-5-19   下午02:01:14
 * @version 1.0
 */
public class LeaseConBillImportHelper {
	/**
	 * 时间格式化方式为:yyyy-MM-dd
	 */
	protected static SimpleDateFormat df = new SimpleDateFormat(&quot;yyyy-MM-dd&quot;);
	/**
	 * Excel导入后的数据
	 */
	protected Map&lt;String, List&lt;Map&lt;String, String&gt;&gt;&gt; data = null;
	/**
	 * 是否只导入一行数据
	 */
	protected boolean isOneLine = true;
	/**
	 * 字段带出字段的映射,例:项目编码带出项目名称和成本中心 {projectCode=&quot;projectName=name,costCenter=costCenter&quot;}
	 * {materialNumber=&quot;materialName=name,materialType=model,unit=baseUnit.name&quot;}
	 */
	protected Map&lt;String,String&gt; mapping = null;
	
	/**
	 * 错误提示信息
	 */
	protected String exceptionTipMsg;
	
	public LeaseConBillImportHelper(Map&lt;String, List&lt;Map&lt;String, String&gt;&gt;&gt; data) {
		super();
		this.data = data;
	}

	public LeaseConBillImportHelper(Map&lt;String, List&lt;Map&lt;String, String&gt;&gt;&gt; data, boolean isOneLine) {
		super();
		this.data = data;
		this.isOneLine = isOneLine;
	}
	

	
	/**
	 * Map&lt;String,String&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: getOtherField&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    得到出租人的字段映射 bostype
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-20   下午03:14:47
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	protected Map&lt;String, String&gt; getLessorBostype(){
		Map&lt;String, String&gt; map = new HashMap&lt;String, String&gt;();
		map.put(&quot;lessor&quot;, &quot;0C5D4387&quot;);
		return map;
	}
	
	/** 
	 * void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: dealWithData&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    处理数据
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-19   下午07:08:19
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @throws Exception
	 * @version 1.0
	 */
	public void dealWithData()throws Exception{
		if(data == null){
			return;
		}
		exceptionTipMsg = &quot;&quot;;
		/**
		 * 1. 处理单据头
		 */
		LeaseConBillInfo billInfo = dealBillHead();
		/**
		 * 2. 处理车辆信息分录
		 */
		List&lt;Map&lt;String, String&gt;&gt; vehicleList = data.get(&quot;分录-车辆信息&quot;);		//获取车辆信息页签的所有数据
		List&lt;String&gt; vehicleEntryNeedCols = getVehicleEntryNeedColumns();		//获取车辆信息分录必录字段
		for(int i = 0; i &lt; vehicleList.size(); i++){
			Map&lt;String, String&gt; map = vehicleList.get(i);	//在所有数据中取一条数据
			LeaseConBillEntryInfo vehicleEntryInfo = new LeaseConBillEntryInfo();
			dealModel(vehicleEntryInfo, vehicleEntryNeedCols, map,&quot;分录-车辆信息&quot;);	//为实体赋值
			billInfo.getEntries().add(vehicleEntryInfo);
		}
		/**
		 * 3. 处理付款计划分录
		 */
		List&lt;Map&lt;String, String&gt;&gt; payPlanList = data.get(&quot;分录-付款计划&quot;);		//获取付款计划页签的所有数据
		List&lt;String&gt; payPlanEntryNeedCols = getPayPlanEntryNeedColumns();		//获取付款计划分录必录字段
		for(int i = 0; i&lt;payPlanList.size(); i++){
			Map&lt;String, String&gt; map = payPlanList.get(i);	//在所有数据中取一条数据
			LeaseConBillPayPlanEntryInfo payPlanEntryInfo = new LeaseConBillPayPlanEntryInfo();
			dealModel(payPlanEntryInfo, payPlanEntryNeedCols, map,&quot;分录-付款计划&quot;);	//为实体赋值
			billInfo.getPayPlanEntry().add(payPlanEntryInfo);
		}
		String companyID = SysContext.getSysContext().getCurrentAdminUnit().getId().toString();
		String number = CodingRuleManagerFactory.getRemoteInstance().getNumber(billInfo, companyID);
		billInfo.setNumber(number);
		LeaseConBillFactory.getRemoteInstance().addnew(billInfo);
	}


	/** 说明：处理构造单据头
	 * @author xx
	 * 2020-5-22	下午06:58:21
	 * @throws EASBizException 
	 */
	private LeaseConBillInfo dealBillHead() throws Exception {
		LeaseConBillInfo info = new LeaseConBillInfo();
		/**
		 * 1. 获取单头必录字段
		 */
		List&lt;String&gt; needCols = getBillHeadNeedColumns();
		/**
		 * 2. 获取表格中单头的数据
		 */
		Map&lt;String, String&gt; map = data.get(&quot;单头&quot;).get(0);
		/**
		 * 3. 实体对象赋值
		 */
		dealModel(info, needCols, map,&quot;单头&quot;);
		return info;
	}

	/**
	 * 说明：实体对象赋值
	 * @author xx
	 * 2020-5-22	下午08:10:11
	 * @param info 需要赋值的实体对象
	 * @param needCols 必录字段集合
	 * @param map 数据
	 * @param sheetName 页签名
	 * @throws EASBizException
	 * @throws Exception
	 */
	private void dealModel(IObjectValue info, List&lt;String&gt; needCols,
			Map&lt;String, String&gt; map, String sheetName) throws EASBizException, Exception {
		/**
		 * 1. 通过创建的单头对象bosType，获取通用实体对象
		 */
		EntityObjectInfo entity = MetaDataLoaderFactory.getRemoteMetaDataLoader().getEntity(info.getBOSType());
		/**
		 * 2. 开始构造赋值
		 */
		Set&lt;String&gt; keySet = map.keySet();
		Iterator&lt;String&gt; iterator = keySet.iterator();
		while(iterator.hasNext()){
			String keyEc = iterator.next();
			String key = keyEc.split(&quot;-&quot;)[0];
			String keyCn = keyEc.split(&quot;-&quot;)[1];
			String value = map.get(keyEc);
			/**
			 * 2.1 判断是否在必录字段中，如果在则不能为空
			 */
			if(needCols.size()&gt;0 &amp;&amp; needCols.contains(key)){
				if(value == null || &quot;&quot;.equals(value.trim())){
					/**
					 * 要在此处将Key处理成中文名，给用户提示
					 */
					throw new EASBizException(new NumericExceptionSubItem(&quot;提示信息&quot;,sheetName + &quot;: &quot; + keyCn+&quot; 键为必录项，对应的值不能为空。&quot;));
				}
			}
			/**
			 * 2.2. 字段值为空则跳过
			 */
			if(value == null || &quot;&quot;.equals(value)){
				continue;
			}
			/**
			 * 2.3. 获取映射key值在对应单据中的属性对象
			 */
			PropertyInfo propertyByName = entity.getPropertyByName(key);
			/**
			 * 2.4、处理每一个字段
			 */
			dealWithKey(info, keyEc, value, propertyByName, sheetName);
		}
	}

	/** 
	 * List&lt;String&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    获取单据头必录字段
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-25   下午02:45:03
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	private List&lt;String&gt; getBillHeadNeedColumns() {
		List&lt;String&gt; cols = new ArrayList&lt;String&gt;();
		cols.add(&quot;FICompany&quot;);			//所属组织
		cols.add(&quot;bank&quot;);				//金融机构
		cols.add(&quot;address&quot;);			//签约地点
		cols.add(&quot;ract&quot;);				//合同编号
		cols.add(&quot;busType&quot;);			//业务类型
		cols.add(&quot;budgetProject&quot;);      //预算项目
		cols.add(&quot;lessor&quot;);				//出租人
		cols.add(&quot;carPurchase&quot;);		//购车款
		cols.add(&quot;payPeriod&quot;);			//支付期间
		cols.add(&quot;payPeriodUnit&quot;);		//支付期间单位
		cols.add(&quot;financeModel&quot;);		//融资模式
		cols.add(&quot;settleStatus&quot;);		//结清状态
		cols.add(&quot;firstRepaymentDate&quot;);	//首期还款日期
		cols.add(&quot;beginDate&quot;);			//租赁开始日期
		cols.add(&quot;endDate&quot;);			//租赁结束日期
		return cols;
	}
	
	
	/**
	 * 说明：获取车辆信息分录必录字段
	 * @author xx
	 * 2020-5-22	下午07:00:49
	 * @return
	 */
	private List&lt;String&gt; getVehicleEntryNeedColumns() {
		List&lt;String&gt; cols=new ArrayList&lt;String&gt;();
		return cols;
	}
	
	/**
	 * 说明：获取付款计划必录字段
	 * @author xx
	 * 2020-5-22	下午07:01:42
	 * @return
	 */
	private List&lt;String&gt; getPayPlanEntryNeedColumns() {
		List&lt;String&gt; cols=new ArrayList&lt;String&gt;();
		return cols;
	}
	
	
	/**
	 * 说明：处理每一个键值对
	 * @author xx
	 * 2020-5-22	下午07:53:08
	 * @param model 需要添加值的对象
	 * @param key 实体字段名称
	 * @param value 字段对应值
	 * @param propertyByName 属性对象
	 * @param sheetName 页签名
	 * @throws Exception
	 */
	private void dealWithKey(IObjectValue model, String keyEc, String value, PropertyInfo propertyByName, String sheetName) throws Exception {
		String key = keyEc.split(&quot;-&quot;)[0];
		String keyCn = keyEc.split(&quot;-&quot;)[1];
		try{
			// 判断对象属性
			if(propertyByName instanceof LinkPropertyInfo &amp;&amp; value != null &amp;&amp; !&quot;&quot;.equals(value)){
				// 处理连接属性数据
				dealWithLinkProperty(propertyByName, model, &quot;number&quot;, keyEc, value, sheetName);
			}else if(propertyByName instanceof OwnPropertyInfo){
				// 处理自有属性数据
				OwnPropertyInfo ownInfo = (OwnPropertyInfo) propertyByName;
				if(ownInfo.getDataType().isDateTime() &amp;&amp; value != null &amp;&amp; !&quot;&quot;.equals(value)){
					//日期属性
					try {
						model.put(key, df.parse(value));
					} catch (ParseException e) {
						toException(sheetName + &quot;页签: &quot; + keyCn+&quot; 键中值&quot;+value+&quot;时间格式不正确&quot;);
					}
				}else if(ownInfo.getDataType().getName().equalsIgnoreCase(DataType.DECIMAL.getName()) &amp;&amp; value != null &amp;&amp; !&quot;&quot;.equals(value)){
					//BigDecimal属性
					model.put(key, new BigDecimal(value));
				}else if(ownInfo.getDataType().getName().equalsIgnoreCase(DataType.STRING.getName()) &amp;&amp; value != null &amp;&amp; !&quot;&quot;.equals(value)){
					//STRING属性
					model.put(key, value);
				}else if(ownInfo.getDataType().getName().equalsIgnoreCase(DataType.ENUM.getName()) &amp;&amp; value != null &amp;&amp; !&quot;&quot;.equals(value)){
					//枚举ENUM属性
					model.put(key, value);
				}else if(ownInfo.getDataType().getName().equalsIgnoreCase(DataType.BOOLEAN.getName()) &amp;&amp; value != null &amp;&amp; !&quot;&quot;.equals(value)){
					//BOOLEAN属性
					if(!value.equalsIgnoreCase(&quot;true&quot;) &amp;&amp; !value.equalsIgnoreCase(&quot;false&quot;)){
						toException(sheetName + &quot;页签: &quot; + keyCn+&quot; 键中值&quot;+value+&quot;值错误,仅能填写&#39;true&#39;或者&#39;false&#39;&quot;);
					}
					model.put(key, Boolean.valueOf(value));
				}else if(ownInfo.getDataType().getName().equalsIgnoreCase(DataType.INTEGER.getName()) &amp;&amp; value != null &amp;&amp; !&quot;&quot;.equals(value)){
					//INTEGER属性
					model.put(key, value);
				}
			}
		}catch(Exception exe){
			toException(sheetName + &quot;页签: &quot; + keyCn+&quot; 键中值&quot;+value+&quot;处理出错&quot;);
		}
	}

	/**
     * 方法返回类型：String&lt;/br&gt;
     * 方法描述：处理连接属性
     * @author DZ_dengbaolan
     * @date 2019-9-27
     * @param propertyByName 属性名对象
     * @param model 需要填值的对象
     * @param field 所要查的字段，即F7传id则传&quot;id&quot;，传number则传&quot;number&quot;
     * @param key 实体里对应的名称
     * @param value 传输的值
	 * @param sheetName 页签名
     * @param ctx 上下文
     * @return String 提示信息
	 * @throws Exception 总异常
     */
    private void dealWithLinkProperty(PropertyInfo propertyByName, IObjectValue model, 
    		String field, String keyEc, String value, String sheetName) throws Exception {
    	String key = keyEc.split(&quot;-&quot;)[0];
    	String keyCn = keyEc.split(&quot;-&quot;)[1];
		// 将属性对象转换为连接属性对象
    	LinkPropertyInfo linkInfo = (LinkPropertyInfo) propertyByName;
    	if(linkInfo != null){
    		// 根据连接属性对象获取关系再获取所属对象
    		EntityObjectInfo supplierObject = linkInfo.getRelationship().getSupplierObject();
    		if(supplierObject != null){
    			// 获取该连接属性所属对象的bosType
    			BOSObjectType type = supplierObject.getType();
    			if(value != null &amp;&amp; !&quot;&quot;.equals(value)){
    				// 获取查询语句，可根据传入field动态查询
    				boolean exists = DynamicObjectFactory.getRemoteInstance().exists(type, &quot;where &quot;+ field + &quot; = &#39;&quot; + value + &quot;&#39;&quot;);
    				if(exists){
    					// 动态获取该连接属性所属对象的指定查询条件的对应对象
    					IObjectValue objectValue = DynamicObjectFactory.getRemoteInstance().getValue(type, &quot;where &quot;+ field + &quot; = &#39;&quot; + value + &quot;&#39;&quot;);
    					// 写值
    					model.put(key, objectValue);
    				}else{
    					toException(&quot;EAS中没有&quot; + sheetName + &quot;页签： &quot; + keyCn + &quot; 键F7值为&quot; + value + &quot;的对应对象&quot;);
    				}
    			}
    		}
    	}
    }
    
    /** 说明：异常处理方法
	 * @author xx
	 * 2020-5-21	下午02:36:11
	 * @param string 自定义的错误信息
	 * @param exc	Exception对象
	 * @throws BOSException 
     * @throws EASBizException 
	 */
    
	private void toException(String msg) throws EASBizException{
		if(&quot;&quot;.equals(exceptionTipMsg)){
			exceptionTipMsg = msg;
			throw new EASBizException(new NumericExceptionSubItem(&quot;提示信息&quot;,msg));
		}else{
			throw new EASBizException(new NumericExceptionSubItem(&quot;提示信息&quot;,exceptionTipMsg));
		}
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>LeaseconbillImportUI类</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.kingdee.eas.custom.bill.leaseconbill.client.util;

import java.awt.event.ActionEvent;
import java.io.File;
import java.util.Map;

import org.apache.log4j.Logger;

import com.kingdee.bos.ctrl.swing.KDFileChooser;
import com.kingdee.bos.ctrl.swing.util.SimpleFileFilter;
import com.kingdee.bos.ui.face.CoreUIObject;
import com.kingdee.eas.custom.bill.leaseconbill.client.LeaseConBillListUI;
import com.kingdee.eas.tools.datatask.client.ServerTemplateExport;
import com.kingdee.eas.util.client.EASResource;
import com.kingdee.eas.util.client.MsgBox;

/**
 * &lt;p&gt;Title: LeaseconbillImportUI&lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020-5-19   下午01:47:02
 * @version 1.0
 */
public class LeaseconbillImportUI extends AbstractLeaseconbillImportUI
{
	private static final long serialVersionUID = 2429091156900989329L;
    private static final Logger logger = CoreUIObject.getLogger(LeaseconbillImportUI.class);
    
	private int closeType = -1;//不等于-1:确定后关闭的窗口;等于-1:取消后关闭的窗口
	private SimpleFileFilter fileFilter = null;//文件过滤器 默认为:&quot;xls&quot;, &quot;xlsx&quot; 
	private File selectedFile = null;//选中的需要导入的文件
	
    /**
     * &lt;p&gt;Title: LeaseconbillImportUI&lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     *    构造方法
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020-5-19   下午02:51:08
     * @param param the bare_field_name
     * @throws Exception
     * @version 1.0
     */
    public LeaseconbillImportUI() throws Exception
    {
        super();
        this.fileFilter = new SimpleFileFilter(new String[] { &quot;xls&quot;, &quot;xlsx&quot; });
    }

	public LeaseconbillImportUI(SimpleFileFilter fileFilter) throws Exception {
		super();
		this.fileFilter = fileFilter;
	}
    
    /**
     * output storeFields method
     */
    public void storeFields()
    {
        super.storeFields();
    }
	/**
	 * 
	 * &lt;p&gt;Title: onLoad&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    页面加载事件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-19   下午02:56:10
	 * @param param the bare_field_name
	 * @throws Exception
	 * @see com.kingdee.bos.ui.face.CoreUIObject#onLoad()
	 * @version 1.0
	 */
	@Override
	public void onLoad() throws Exception {
		super.onLoad();
		this.btnFileChooser.setIcon(EASResource.getIcon(&quot;imgTbtn_open&quot;));
		this.btnFileChooser.setText(null);
		Map uiCtx = getUIContext();
		this.selectedFile = ((File) uiCtx.get(&quot;selectedFile&quot;));
		if ((this.selectedFile == null) || (!(this.selectedFile.exists())))
			return;
		this.textFilePath.setText(this.selectedFile.getPath());
	}
	
	/** void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: btnConfirm_actionPerformed&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    确定按钮事件  判断选中的文件是否合规或者存在
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-19   下午02:57:55
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param e
	 * @throws Exception
	 * @version 1.0
	 */
	protected void btnConfirm_actionPerformed(ActionEvent e) throws Exception {
		String sFile = this.textFilePath.getText();
		this.selectedFile = new File(sFile);
		if ((sFile == null) || (sFile.trim().length() == 0)) {
			MsgBox.showWarning(this, EASResource.getString(&quot;com.kingdee.eas.scm.sd.sale.client.GTaxEasResource&quot;, &quot;FileNull&quot;));
			return;
		}

		if (!(this.fileFilter.accept(this.selectedFile))) {
			MsgBox.showWarning(this, EASResource.getString(&quot;com.kingdee.eas.scm.sd.sale.client.GTaxEasResource&quot;, &quot;FileTypeWrong&quot;));
			return;
		}

		if (!(this.selectedFile.exists())) {
			MsgBox.showWarning(this, EASResource.getString(&quot;com.kingdee.eas.scm.sd.sale.client.GTaxEasResource&quot;, &quot;FileNotExist&quot;));
			return;
		}

		this.closeType = 1;
		disposeUIWindow();
	}
	
	
	/** 
	 * void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: btnFileChooser_actionPerformed&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    选择导入文件
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-19   下午02:59:10
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param e
	 * @throws Exception
	 * @version 1.0
	 */

	protected void btnFileChooser_actionPerformed(ActionEvent e) throws Exception {
		KDFileChooser fileChooser = new KDFileChooser();
		fileChooser.setFileSelectionMode(0);
		fileChooser.setFileFilter(fileFilter);
		if ((this.selectedFile != null) &amp;&amp; (this.selectedFile.length() &gt; 0L)) {
			fileChooser.setSelectedFile(this.selectedFile);
		}

		if (fileChooser.showOpenDialog(this) == 0) {
			String sFile = fileChooser.getSelectedFile().getPath();
			selectedFile = fileChooser.getSelectedFile();
			this.textFilePath.setText(sFile);
		} else {
			return;
		}
	}
	
	
	/**
	 * &lt;p&gt;Title: btnExpTemplate_actionPerformed&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    导出模板
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-19   下午03:01:00
	 * @param param the bare_field_name
	 * @param e
	 * @throws Exception
	 * @see com.kingdee.eas.custom.bill.leaseconbill.client.util.AbstractLeaseconbillImportUI#btnExpTemplate_actionPerformed(java.awt.event.ActionEvent)
	 * @version 1.0
	 */
	@Override
	protected void btnExpTemplate_actionPerformed(ActionEvent e) throws Exception {
		String templateName = null;
		Object owner = getUIContext().get(&quot;Owner&quot;);
		if (owner != null) {
			if (owner instanceof LeaseConBillListUI) {
				templateName = &quot;LeaseConBill.xls&quot;;
			}
		}

		if (templateName == null) {
			return;
		}
		ServerTemplateExport te = new ServerTemplateExport(&quot;LeaseConBillTemplate/&quot; + templateName);
		te.setParentComp(this);
		try {
			te.export();
		} catch (Exception ex) {
			logger.error(ex);
		}
	}
	/**
	 *  void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: btnCancel_actionPerformed&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    取消
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-19   下午03:01:37
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param e
	 * @throws Exception
	 * @version 1.0
	 */
	protected void btnCancel_actionPerformed(ActionEvent e) throws Exception {
		this.closeType = -1;
		disposeUIWindow();
	}
	
	/** File&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: getSelectedFile&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    获取选中的需要导入的文件对象(如果非正常关闭,返回空;否则返回选中的文件对象)
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020-5-19   下午01:46:06
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	public File getSelectedFile() {
		if (this.closeType == -1) {
			return null;
		}
		return this.selectedFile;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>EAS中如何实现导入多页签的Excel功能？</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><blockquote><p>本就是一个不主动的人 虽然灵魂有趣 但不爱表达 还死倔也慢热 遇到懂我的人是幸运 遇不到也正常了</p></blockquote><hr>`,15);function F(k,w){const t=v("ExternalLinkIcon");return s(),d("div",null,[a(" more "),I,i("ol",null,[i("li",null,[i("p",null,[e("本地开发有个前置操作，参考博文 "),i("a",E,[e("EAS引入引出模板配置完成后点击引出模板之后报错如何解决？"),r(t)])])]),_]),L])}const T=l(C,[["render",F],["__file","127-EAS如何实现导入多页签的Excel功能？.html.vue"]]);export{T as default};
