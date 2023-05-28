import{_ as t,X as l,Y as s,a1 as a,Z as i,$ as n,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const u="/blog/assets/Kingdee_70_1.png",c="/blog/assets/Kingdee_70_1.gif",m={},b={id:"_70-金蝶云苍穹条形图样例-md",tabindex:"-1"},o=i("a",{class:"header-anchor",href:"#_70-金蝶云苍穹条形图样例-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--70--dj9ds8b50zujo47odybl41gbft8ymwy6a.md",target:"_blank",rel:"noopener noreferrer"},g=r('<ol><li><p>新建空白页面动态表单</p></li><li><p>在其添加条形图，并设置其背景颜色为深黑，且设置宽高为600*400后保存</p></li></ol><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.wzy.card;

import java.util.EventObject;

import kd.bos.form.chart.BarChart;
import kd.bos.form.plugin.AbstractFormPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月11日
 * @version 1.0
 */
public class BarChartPlugin extends AbstractFormPlugin {
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.datamodel.events.IDataModelListener#afterCreateNewData(java.util.EventObject)
	 * @version 1.0
	 */
	@Override
	public void afterCreateNewData(EventObject e) {
		// TODO Auto-generated method stub
		super.afterCreateNewData(e);
		 BarChartHelper barChartHelper = new BarChartHelper();
		 //获得条形图控件
		 BarChart barChart = this.getControl(&quot;barchartap&quot;);
		 //调用画布填充方法
		 barChartHelper.drawChart(barChart ); 
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.lesson.card.plugin;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.google.common.collect.Maps;

import kd.bos.form.chart.Axis;
import kd.bos.form.chart.AxisType;
import kd.bos.form.chart.Label;
import kd.bos.form.chart.LineSeries;
import kd.bos.form.chart.PointLineChart;
import kd.bos.form.chart.Position;
/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月11日
 * see_to_overridden
 * @version 1.0
 */
public class PointLineChartHelper {

	/**
	 * void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: drawChart&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param pointLineChart
	 * @version 1.0
	 */
	public void drawChart(PointLineChart pointLineChart) {

		boolean isX = true;

		// 创建分类轴，X轴方式展现
		Axis categoryAxis = this.createCategoryAxis(pointLineChart, &quot;月度&quot;, isX);

		// 设置分类轴nametextstyle属性，
		Map&lt;String, Object&gt; nametextstyle = Maps.newHashMap();
		nametextstyle.put(&quot;color&quot;, &quot;#000000&quot;);
		// nametextstyle.put(&quot;fontStyle&quot;, &quot;italic&quot;);
		nametextstyle.put(&quot;fontSize&quot;, 18);
		categoryAxis.setPropValue(&quot;nameTextStyle&quot;, nametextstyle);

		// 设置分类轴名称位置属性，end表示在最后
		categoryAxis.setPropValue(&quot;nameLocation&quot;, new String(&quot;end&quot;));

		// 设置分类轴分类值显示位置，bottom表示在下
		categoryAxis.setPropValue(&quot;position&quot;, &quot;bottom&quot;);
		// 设置分类轴分类值liaxisLabel属性
		Map&lt;String, Object&gt; axislabel = Maps.newHashMap();
		Map&lt;String, Object&gt; textstyle = Maps.newHashMap();
		textstyle.put(&quot;color&quot;, &quot;#000000&quot;);
		textstyle.put(&quot;fontSize&quot;, &quot;16&quot;);
		axislabel.put(&quot;textStyle&quot;, textstyle);
		categoryAxis.setPropValue(&quot;axisLabel&quot;, axislabel);

		// 创建数据轴，name为其名字。
		Axis ValueAxis = this.createValueAxis(pointLineChart, &quot;千(元)&quot;, !isX);
		// 设置数据轴的nameTextStyle属性
		Map&lt;String, Object&gt; yAxisnametextstyle = Maps.newHashMap();
		yAxisnametextstyle.put(&quot;color&quot;, &quot;#000000&quot;);
		yAxisnametextstyle.put(&quot;fontSize&quot;, 18);
		// yAxisnametextstyle.put(&quot;fontStyle&quot;, &quot;oblique&quot;);
		ValueAxis.setPropValue(&quot;nameTextStyle&quot;, yAxisnametextstyle);

		// 设置分类轴数据
		categoryAxis.setCategorys(contructCatetoryData());

		// 创建折线并赋值
		this.createLineSeries(pointLineChart, &quot;A公司销售额&quot;, contructValueData(), &quot;red&quot;);

		// 创建多个折线按如下方式添加
		this.createLineSeries(pointLineChart, &quot;B公司销售额&quot;, contructValue2Data(), &quot;#0000CD&quot;);
//		 this.createLineSeries(pointLineChart,&quot;高度&quot;, contructValue3Data(), &quot;#282828&quot;);

		// 设置图的边距
		pointLineChart.setMargin(Position.right, &quot;80px&quot;);
		pointLineChart.setMargin(Position.top, &quot;80px&quot;);
		pointLineChart.setMargin(Position.left, &quot;80px&quot;);

		// 设置图例的位置
		pointLineChart.setLegendPropValue(&quot;top&quot;, &quot;8%&quot;);
		// 设置图例中文字的字体大小和颜色等
		Map&lt;String, Object&gt; legendtextstyle = Maps.newHashMap();
		legendtextstyle.put(&quot;fontSize&quot;, 18);
		legendtextstyle.put(&quot;color&quot;, &quot;#000000&quot;);
		pointLineChart.setLegendPropValue(&quot;textStyle&quot;, legendtextstyle);

		// 刷新图标
		pointLineChart.refresh();
	}

	/** Axis&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 创建类目型坐标轴
	 *
	 * @param name
	 *            坐标轴名称
	 * @param isX
	 *            是否X轴，ture创建X轴，false创建Y轴
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param pointLineChart
	 * @param name
	 * @param isx
	 * @return
	 * see_to_overridden
	 * @version 1.0
	 */
	private Axis createCategoryAxis(PointLineChart pointLineChart, String name, boolean isx) {
		Axis axis = null;
		if (isx)
			axis = pointLineChart.createXAxis(name, AxisType.category);
		else
			axis = pointLineChart.createYAxis(name, AxisType.category);

		// 创建一个map存储x轴的复杂属性的属性-值对
		Map&lt;String, Object&gt; axisTick = Maps.newHashMap();
		axisTick.put(&quot;interval&quot;, Integer.valueOf(0));

		axisTick.put(&quot;show&quot;, true);
		axisTick.put(&quot;grid&quot;, Position.left);
		axis.setPropValue(&quot;axisTick&quot;, axisTick);
		return axis;
	}
	
	/**
	 * Axis&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 创建值类型坐标轴
	 *
	 * @param name
	 *            坐标轴名称
	 * @param isX
	 *            是否X轴，ture创建X轴，false创建Y轴
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param pointLineChart
	 * @param name
	 * @param isx
	 * @return
	 * @version 1.0
	 */
	private Axis createValueAxis(PointLineChart pointLineChart, String name, boolean isx) {
		Axis axis = null;
		if (isx)
			axis = pointLineChart.createXAxis(name, AxisType.value);
		else
			axis = pointLineChart.createYAxis(name, AxisType.value);

		// 创建一个map存储y轴的复杂属性的属性-值对
		Map&lt;String, Object&gt; axisTick = Maps.newHashMap();
		axisTick.put(&quot;show&quot;, true);
		axis.setPropValue(&quot;axisTick&quot;, axisTick);

		// 创建一个map存储y轴的复杂属性的属性-值对
		Map&lt;String, Object&gt; splitLine = Maps.newHashMap();
		Map&lt;String, Object&gt; lineStyle = Maps.newHashMap();
		lineStyle.put(&quot;type&quot;, &quot;dotted&quot;);
		lineStyle.put(&quot;color&quot;, &quot;#E2E2E2&quot;);
		splitLine.put(&quot;lineStyle&quot;, lineStyle);
		axis.setPropValue(&quot;splitLine&quot;, splitLine);
		pointLineChart.setShowTooltip(true);
		return axis;
	}

	/**
	 * List&lt;String&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	private List&lt;String&gt; contructCatetoryData() {

		// 此处需修改成实际分类数据，以下为案例数据
		List&lt;String&gt; categoryData = new ArrayList&lt;&gt;();
		categoryData.add(&quot;2019.1&quot;);
		categoryData.add(&quot;2019.2&quot;);
		categoryData.add(&quot;2019.3&quot;);
		categoryData.add(&quot;2019.4&quot;);
		categoryData.add(&quot;2019.5&quot;);
		categoryData.add(&quot;2019.6&quot;);
		return categoryData;
	};

	/**
	 * List&lt;BigDecimal&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	private List&lt;BigDecimal&gt; contructValueData() {

		// 此处需添加实际数构建，以下为案例数据
		List&lt;BigDecimal&gt; valueData = new ArrayList&lt;&gt;();

		valueData.add(new BigDecimal(2566));
		valueData.add(new BigDecimal(1552));
		valueData.add(new BigDecimal(3786));
		valueData.add(new BigDecimal(2865));
		valueData.add(new BigDecimal(4098));
		valueData.add(new BigDecimal(7834));

		return valueData;
	}

	/**
	 * List&lt;BigDecimal&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	private List&lt;BigDecimal&gt; contructValue2Data() {

		// 此处需添加实际数构建，以下为案例数据
		List&lt;BigDecimal&gt; valueData = new ArrayList&lt;&gt;();

		valueData.add(new BigDecimal(934));
		valueData.add(new BigDecimal(1035));
		valueData.add(new BigDecimal(2342));
		valueData.add(new BigDecimal(2274));
		valueData.add(new BigDecimal(5067));
		valueData.add(new BigDecimal(6654));

		return valueData;
	}

	/**
	 * void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    创建折线
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param pointLineChart
	 * @param name
	 * @param values
	 * @param color
	 * see_to_overridden
	 * @version 1.0
	 */
	private void createLineSeries(PointLineChart pointLineChart, String name, List&lt;BigDecimal&gt; values, String color) {
		// 折线的名字
		LineSeries expireSeries = pointLineChart.createSeries(name);

		// 设置折线上文本的相关属性
		Label label = new Label();
		label.setShow(true);
		label.setColor(&quot;#000000&quot;);
		expireSeries.setLabel(label);

		// 连线颜色
		expireSeries.setItemColor(color);
		// 动画效果
		expireSeries.setAnimationDuration(2000);
		// 该点纵坐标的值setData(Number[] data)
		expireSeries.setData((Number[]) values.toArray(new Number[0]));
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>重启服务器后注册插件预览测试，如下图所示测试成功</li></ol><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹条形图样例</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',12);function h(x,q){const e=v("ExternalLinkIcon");return l(),s("div",null,[a(" more "),i("h1",b,[o,n(),i("a",p,[n("70-金蝶云苍穹条形图样例.md"),d(e)])]),g])}const C=t(m,[["render",h],["__file","index.html.vue"]]);export{C as default};
