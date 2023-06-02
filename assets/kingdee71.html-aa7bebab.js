import{_ as t,X as s,Y as l,a1 as d,Z as i,$ as n,a2 as a,a0 as r,F as v}from"./framework-68dd73a2.js";const u="/blog/assets/Kingdee_71_1.png",m="/blog/assets/Kingdee_71_1.gif",c={},b={id:"_71-金蝶云苍穹柱状图样例-md",tabindex:"-1"},o=i("a",{class:"header-anchor",href:"#_71-金蝶云苍穹柱状图样例-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--71--dj9ds8b50z112abqav96exxrb4u8ymwy6a.md",target:"_blank",rel:"noopener noreferrer"},g=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li><p>新建空白页面动态表单</p></li><li><p>在其添加柱状图，且设置宽高为600*400后保存</p></li></ol><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.card.plugin;

import java.util.ArrayList;
import java.util.EventObject;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.google.common.collect.Maps;

import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.chart.Axis;
import kd.bos.form.chart.AxisType;
import kd.bos.form.chart.BarSeries;
import kd.bos.form.chart.ChartType;
import kd.bos.form.chart.HistogramChart;
import kd.bos.form.chart.Label;
import kd.bos.form.chart.Position;
import kd.bos.form.plugin.AbstractFormPlugin;

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
public class HistogramTest01 extends AbstractFormPlugin {
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
		this.drawChart();
	}

	/**
	 * void&lt;/br&gt;
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
	 * @version 1.0
	 */
	public void drawChart() {
		HistogramChart customchart = this.getMainChart();
		customchart.clearData(); // 清除数据 避免重复增加数据
		// customchart.setShowLegend(false); //图例
		// customchart.setShowTitle(false); //标题

		// 设置图形的位置
		customchart.setMargin(Position.right, &quot;80&quot;);

		// 设置图例
		customchart.setShowLegend(true);
		// customchart.setLegendPropValue(&quot;left&quot;, 1000);
		// customchart.setLegendPropValue(&quot;top&quot;, 0);
		// customchart.setLegendPropValue(&quot;itemWidth&quot;, 8);
		// customchart.setLegendPropValue(&quot;itemHeight&quot;, 8);

		// true纵向显示 false不纵向显示
		customchart.setLegendVertical(false);

		// 获取默认x轴数据
		List&lt;String&gt; materiaName = this.getMateriaName();

		// 设置柱状图类别数据
		Map&lt;Group, List&lt;Number&gt;&gt; sortedData = this.getData02(materiaName);

		// 利用lambda表达式遍历sortedData
		sortedData.forEach((group, data) -&gt; {
			this.createBarSeries(group, data);
		});
		// 创建X轴
		Axis xAxis = this.createCategoryAxis(&quot;&quot;, true);
		// 设置X轴坐标数据
		xAxis.setCategorys(materiaName);
		// X轴指示器属性设置
		Map&lt;String, Object&gt; xAxisPointer = Maps.newHashMap();
		xAxisPointer.put(&quot;show&quot;, true);
		xAxisPointer.put(&quot;type&quot;, &quot;shadow&quot;);
		// X轴文本标签设置
		Label xAxisLabel = new Label();
		// 显示文本标签
		xAxisLabel.setShow(true);
		// 背景色黑色
		xAxisLabel.setBackgroundColor(&quot;black&quot;);
		// xAxisPointer.put(&quot;nameGap&quot;, &quot;2&quot;);
		xAxisPointer.put(&quot;label&quot;, xAxisLabel);
		// 坐标轴名字
		xAxis.setName(&quot;物料名称&quot;);
		xAxis.setPropValue(&quot;axisPointer&quot;, xAxisPointer);

		// 创建Y轴
		Axis yAxis = this.createValueAxis(&quot;厘米&quot;, false);

		// yAxis.setMax(200);

		// 设置Y轴数据显示格式
		Map&lt;String, Object&gt; axisLabel1 = Maps.newHashMap();
		axisLabel1.put(&quot;formatter&quot;, &quot;{value} 厘米&quot;);
		yAxis.setPropValue(&quot;axisLabel&quot;, axisLabel1);

		// Y轴设置最小刻度
		yAxis.setPropValue(&quot;minInterval&quot;, 1);

		// Y轴指示器属性
		Map&lt;String, Object&gt; yAxisPointer = Maps.newHashMap();
		yAxisPointer.put(&quot;show&quot;, true);
		yAxisPointer.put(&quot;type&quot;, &quot;line&quot;);

		// Y轴文本标签设置
		Label yAxisLabel = new Label();
		yAxisLabel.setShow(true);
		yAxisLabel.setBackgroundColor(&quot;black&quot;);
		yAxisPointer.put(&quot;label&quot;, xAxisLabel);

		// Y轴设置指示线类型
		Map&lt;String, Object&gt; lineStyle = Maps.newHashMap();
		lineStyle.put(&quot;type&quot;, &quot;dotted&quot;);
		yAxisPointer.put(&quot;lineStyle&quot;, lineStyle);

		// 设置Y轴不触发悬浮提示信息
		yAxisPointer.put(&quot;triggerTooltip&quot;, false);

		yAxis.setPropValue(&quot;axisPointer&quot;, yAxisPointer);

		// 刷新图表
		customchart.refresh();
	}

	/**
	 * void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    创建柱状图series
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param group
	 * @param data
	 * see_to_overridden
	 * @version 1.0
	 */
	private void createBarSeries(Group group, List&lt;Number&gt; data) {
		// TODO Auto-generated method stub
		BarSeries barSeries = this.getMainChart().createBarSeries(group.groupName);

		// 设置标签值
		Label label = new Label();
		label.setBackgroundColor(&quot;#0000FF&quot;);
		label.setShow(true);
		// 设置位置为insideRight
		label.setPosition(Position.insideRight);
		// series[i]-bar.label.fontSize 文字的字体大小[ default: 12 ]
		// label.setFontSize(&quot;10&quot;);
		barSeries.setLabel(label);

		/**
		 * 不设置柱宽度 让其随类目宽度自适应
		 */
		// 设置柱宽度
		// barSeries.setBarWidth(&quot;25px&quot;);

		// 设置柱颜色
		barSeries.setColor(group.color);
		// 设置类别展示类型
		barSeries.setType(group.chartType);
		// 动画过度时间
		barSeries.setAnimationDuration(2000);
		// 设置相同的stack会堆叠显示
//		 barSeries.setStack(&quot;stack&quot;);
		// 设置所属坐标轴
		barSeries.setPropValue(&quot;yAxisIndex&quot;, group.yAxisIndex);
		// 设置类别对应的数据包
		barSeries.setData((Number[]) data.toArray(new Number[0]));

	}
	
	/**
	 * List&lt;String&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    获取每个物料的名称
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * see_to_overridden
	 * @version 1.0
	 */
	private List&lt;String&gt; getMateriaName() {
		List&lt;String&gt; materiaName = new ArrayList&lt;&gt;();
		materiaName.add(&quot;手机&quot;);
		materiaName.add(&quot;电脑&quot;);
		materiaName.add(&quot;桌子&quot;);
		return materiaName;
	}

	/**
	 * Map&lt;Group,List&lt;Number&gt;&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *  获取主数据
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param materiaName
	 * @return
	 * see_to_overridden
	 * @version 1.0
	 */
	private Map&lt;Group, List&lt;Number&gt;&gt; getData02(List&lt;String&gt; materiaName) {
		// TODO Auto-generated method stub
		Map&lt;Group, List&lt;Number&gt;&gt; summaryResult = new LinkedHashMap&lt;Group, List&lt;Number&gt;&gt;();
		// 得到默认groups
		List&lt;Group&gt; groups = this.getDefaultGroups();
		
		// 给每个分组添加根据日期添加默认数据值
		List&lt;Number&gt; list01=new ArrayList&lt;&gt;();
		list01.add(10);
		list01.add(100);
		list01.add(70);
		summaryResult.put(groups.get(0), list01);
		
		List&lt;Number&gt; list02=new ArrayList&lt;&gt;();
		list02.add(15);
		list02.add(80);
		list02.add(130);
		summaryResult.put(groups.get(1), list02);
		
		List&lt;Number&gt; list03=new ArrayList&lt;&gt;();
		list03.add(20);
		list03.add(120);
		list03.add(200);
		summaryResult.put(groups.get(2), list03);

		return summaryResult;
	}

	/**
	 * Group&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * 根据xingqi来匹配分组 从而加入对应的数据
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param groups
	 * @param ren
	 * @return
	 * see_to_overridden
	 * @version 1.0
	 */
	private Group matchGroup(List&lt;Group&gt; groups, String ren) {
		// TODO Auto-generated method stub
		for (Group group : groups) {
			if (StringUtils.equals(group.groupKey, ren)) {
				return group;
			}
		}
		return null;
	}

	/**
	 * Axis&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    创建类目型坐标轴
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param name 坐标轴名称
	 * @param isX 是否X轴，ture创建X轴，false创建Y轴
	 * @return
	 * @version 1.0
	 */
	private Axis createCategoryAxis(String name, boolean isX) {
		Axis axis = null;
		if (isX) {
			// X轴
			axis = this.getMainChart().createXAxis(name, AxisType.category);
		} else {
			// Y轴
			axis = this.getMainChart().createYAxis(name, AxisType.category);
		}
		// axis.setCategorys(x);
		// 坐标轴刻度相关设置
		Map&lt;String, Object&gt; axisTick = new HashMap&lt;&gt;();
		// 坐标轴刻度的显示间隔为0
		axisTick.put(&quot;interval&quot;, 0);
		// 坐标轴刻度设置为不显示
		// axisTick.put(&quot;show&quot;, true);
		// 设置坐标轴的属性-刻度
		axis.setPropValue(&quot;axisTick&quot;, axisTick);
		// 设置坐标轴轴线颜色
		this.setLineColor(axis, &quot;#5F9EA0&quot;);
		return axis;
	}

	/**
	 * Axis&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    创建值类型坐标轴
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param name 坐标轴名称
	 * @param isX 是否X轴，ture创建X轴，false创建Y轴
	 * @return
	 * @version 1.0
	 */
	private Axis createValueAxis(String name, boolean isX) {
		Axis axis = null;
		if (isX) {
			// X轴
			axis = this.getMainChart().createXAxis(name, AxisType.value);
		} else {
			// Y轴
			axis = this.getMainChart().createYAxis(name, AxisType.value);
		}

		// 坐标轴刻度相关设置
		Map&lt;String, Object&gt; axisTick = new HashMap&lt;&gt;();
		// 坐标轴刻度设置为不显示
		// axisTick.put(&quot;show&quot;, false);
		// 设置坐标轴的属性-刻度
		axis.setPropValue(&quot;axisTick&quot;, axisTick);

		//
		Map&lt;String, Object&gt; splitLine = new HashMap&lt;&gt;();
		Map&lt;String, Object&gt; lineStyle = new HashMap&lt;&gt;();
		// 分隔线的类型
		lineStyle.put(&quot;type&quot;, &quot;dotted&quot;);
		// 分隔线的颜色
		lineStyle.put(&quot;color&quot;, &quot;#E2E2E2&quot;);
		splitLine.put(&quot;lineStyle&quot;, lineStyle);
		// 设置坐标轴的属性-分隔线
		axis.setPropValue(&quot;splitLine&quot;, splitLine);
		// 设置坐标轴轴线颜色
		this.setLineColor(axis, &quot;#5F9EA0&quot;);
		// 显示悬浮提示框
		this.getMainChart().setShowTooltip(true);
		return axis;
	}

	/**
	 * void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    设置坐标轴轴线的颜色
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param axix 坐标轴对象
	 * @param color 颜色色值
	 * @version 1.0
	 */
	private void setLineColor(Axis axix, String color) {
		Map&lt;String, Object&gt; axisLineMap = new HashMap&lt;&gt;();
		Map&lt;String, Object&gt; lineStyleMap = new HashMap&lt;&gt;();
		// 坐标轴轴线的颜色
		lineStyleMap.put(&quot;color&quot;, color);
		axisLineMap.put(&quot;lineStyle&quot;, lineStyleMap);
		// 设置坐标轴的属性-轴线
		axix.setPropValue(&quot;axisLine&quot;, axisLineMap);
	}

	/**
	 * HistogramChart&lt;/br&gt;
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
	private HistogramChart getMainChart() {
		return (HistogramChart) this.getControl(&quot;histogramchartap&quot;);
	}

	/**
	 * List&lt;Group&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    默认的类别分组
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	private List&lt;Group&gt; getDefaultGroups() {
		List&lt;Group&gt; defaultGroupList = new ArrayList&lt;&gt;(4);
		defaultGroupList.add(new Group(&quot;长度&quot;, &quot;length&quot;, &quot;#3CB371&quot;, true, ChartType.bar, 0));
		defaultGroupList.add(new Group(&quot;宽度&quot;, &quot;width&quot;, &quot;#FF0000&quot;, true, ChartType.bar, 0));
		defaultGroupList.add(new Group(&quot;高度&quot;, &quot;height&quot;, &quot;#FFCC00&quot;, true, ChartType.bar, 0));

		return defaultGroupList;
	}

	class Group {
		// 组名
		String groupName;
		// 组别key
		String groupKey;
		// 组别显示颜色
		String color;
		// 是否选中
		Boolean selected;
		// 展示类型，柱形、折线等等。
		ChartType chartType;
		// 所属轴标识，这里只用到了多个Y轴，故只设置了Y轴标识
		Integer yAxisIndex;

		public Group(String groupName, String groupkey, String color, Boolean selected, ChartType chartType,
				Integer yAxisIndex) {
			this.groupName = groupName;
			this.groupKey = groupkey;
			this.color = color;
			this.selected = selected;
			this.chartType = chartType;
			this.yAxisIndex = yAxisIndex;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>重启服务器后注册插件预览测试，如下图所示测试成功</li></ol><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹柱状图样例</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',12);function h(x,q){const e=v("ExternalLinkIcon");return s(),l("div",null,[d(" more "),i("h1",b,[o,n(),i("a",p,[n("71-金蝶云苍穹柱状图样例.md"),a(e)])]),g])}const _=t(c,[["render",h],["__file","kingdee71.html.vue"]]);export{_ as default};
