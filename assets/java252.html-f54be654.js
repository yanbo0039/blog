import{_ as i,X as d,Y as s,a1 as l,Z as n,$ as e,a2 as a,a0 as u,F as v}from"./framework-68dd73a2.js";const r="/blog/assets/Java_252_1.png",o={},c={id:"_252-javagui界面编程-安装windowbuilder插件并新建jframe简单窗体-页面交互-常用的表单域-获取表单域的值-md",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_252-javagui界面编程-安装windowbuilder插件并新建jframe简单窗体-页面交互-常用的表单域-获取表单域的值-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--hxq58eblk7kzq2cftqiqh.md",target:"_blank",rel:"noopener noreferrer"},p=u('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><ol><li><p>在 Eclipse的 <strong>dropins</strong> 文件夹 放入 <strong>WinBuilder_v1.8.0_mars</strong> 文件</p></li><li><p>重启 Eclipse 若 window--&gt; preferences --&gt; 下有WindowBuilder 则安装成功</p></li></ol><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter06.gui;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ButtonGroup;
import javax.swing.DefaultComboBoxModel;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JRadioButton;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class AddEmpPanel extends JPanel {
	private JTextField txt_empno;
	private JTextField txt_ename;
	private JPasswordField txt_password;
	private final ButtonGroup buttonGroup = new ButtonGroup();
	private JRadioButton rdb_man;
	private JRadioButton rdb_female;
	private JCheckBox cbx_dajidali;
	private JCheckBox cbx_code;
	private JCheckBox cbx_basketball;
	private JCheckBox cbx_sing;
	private JTextArea txt_demo;
	private JComboBox combx_address;

	/**
	 * Create the panel.
	 */
	public AddEmpPanel() {
		setLayout(null);
		
		JLabel label = new JLabel(&quot;\\u5458\\u5DE5\\u7F16\\u53F7\\uFF1A&quot;);
		label.setBounds(46, 43, 72, 15);
		add(label);
		
		txt_empno = new JTextField();
		txt_empno.setText(&quot;123&quot;);
		txt_empno.setBounds(128, 35, 110, 31);
		add(txt_empno);
		txt_empno.setColumns(10);
		
		JLabel label_1 = new JLabel(&quot;\\u5458\\u5DE5\\u59D3\\u540D\\uFF1A&quot;);
		label_1.setBounds(321, 43, 72, 15);
		add(label_1);
		
		txt_ename = new JTextField();
		txt_ename.setBounds(403, 36, 126, 28);
		add(txt_ename);
		txt_ename.setColumns(10);
		
		JLabel label_2 = new JLabel(&quot;\\u5458\\u5DE5\\u5BC6\\u7801\\uFF1A&quot;);
		label_2.setBounds(46, 88, 72, 15);
		add(label_2);
		
		txt_password = new JPasswordField();
		txt_password.setBounds(128, 80, 110, 31);
		add(txt_password);
		
		JLabel label_3 = new JLabel(&quot;\\u6027    \\u522B\\uFF1A&quot;);
		label_3.setBounds(321, 88, 72, 15);
		add(label_3);
		
		rdb_man = new JRadioButton(&quot;\\u7537&quot;);
		buttonGroup.add(rdb_man);
		rdb_man.setBounds(403, 84, 46, 23);
		add(rdb_man);
		
		rdb_female = new JRadioButton(&quot;\\u5973&quot;);
		buttonGroup.add(rdb_female);
		rdb_female.setBounds(475, 84, 54, 23);
		add(rdb_female);
		
		JLabel label_4 = new JLabel(&quot;\\u7231    \\u597D\\uFF1A&quot;);
		label_4.setBounds(46, 142, 72, 15);
		add(label_4);
		
		cbx_dajidali = new JCheckBox(&quot;\\u5927\\u5409\\u5927\\u5229&quot;);
		cbx_dajidali.setBounds(128, 138, 82, 23);
		add(cbx_dajidali);
		
		cbx_code = new JCheckBox(&quot;\\u5199\\u4EE3\\u7801&quot;);
		cbx_code.setBounds(214, 138, 72, 23);
		add(cbx_code);
		
		cbx_basketball = new JCheckBox(&quot;\\u7BEE\\u7403&quot;);
		cbx_basketball.setBounds(288, 138, 54, 23);
		add(cbx_basketball);
		
		cbx_sing = new JCheckBox(&quot;\\u5531\\u6B4C&quot;);
		cbx_sing.setBounds(350, 138, 72, 23);
		add(cbx_sing);
		
		JLabel label_5 = new JLabel(&quot;\\u7C4D    \\u8D2F\\uFF1A&quot;);
		label_5.setBounds(46, 184, 72, 15);
		add(label_5);
		
		combx_address = new JComboBox();
		combx_address.setModel(new DefaultComboBoxModel(new String[] {&quot;&quot;, &quot;\\u5E7F\\u5DDE\\u5E02&quot;, &quot;\\u6C55\\u5934\\u5E02&quot;, &quot;\\u6F6E\\u5DDE\\u5E02&quot;, &quot;\\u6DF1\\u5733\\u5E02&quot;, &quot;\\u6E5B\\u6C5F\\u5E02&quot;, &quot;\\u6C5F\\u95E8\\u5E02&quot;}));
		combx_address.setBounds(128, 181, 89, 21);
		add(combx_address);
		
		JLabel label_6 = new JLabel(&quot;\\u5907    \\u6CE8\\uFF1A&quot;);
		label_6.setBounds(46, 242, 72, 15);
		add(label_6);
		
		JScrollPane scrollPane = new JScrollPane();
		scrollPane.setBounds(124, 237, 230, 78);
		add(scrollPane);
		
		txt_demo = new JTextArea();
		txt_demo.setLocation(128, 0);
		scrollPane.setViewportView(txt_demo);
		txt_demo.setLineWrap(true);
		
		//新增
		JButton button = new JButton(&quot;\\u65B0\\u589E&quot;);
		button.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//员工编号
				String empno = txt_empno.getText();
				//员工姓名
				String ename = txt_ename.getText();
				//密码
				char[] passwordArray = txt_password.getPassword();
				//性别
				String sex = &quot;不详&quot;;
				if(rdb_man.isSelected())
				{
					sex = rdb_man.getText();
				}
				else if(rdb_female.isSelected())
				{
					sex = rdb_female.getText();
				}
				//爱好
				String hobby = &quot;&quot;;
				if(cbx_dajidali.isSelected())
				{
					hobby += cbx_dajidali.getText() + &quot;;&quot;;
				}
				if(cbx_code.isSelected())
				{
					hobby += cbx_code.getText() + &quot;;&quot;;
				}
				if(cbx_basketball.isSelected())
				{
					hobby += cbx_basketball.getText() + &quot;;&quot;;
				}
				if(cbx_sing.isSelected())
				{
					hobby += cbx_sing.getText() + &quot;;&quot;;
				}
				//籍贯
				String address = (String)combx_address.getSelectedItem();
				//备注
				String demo = txt_demo.getText();
				
				System.out.println(&quot;员工编号：&quot; + empno + &quot;\\n&quot;
						+ &quot; 员工姓名：&quot; + ename + &quot;\\n&quot;
						+ &quot; 密码：&quot; + new String(passwordArray) + &quot;\\n&quot;
						+ &quot; 性别：&quot; + sex + &quot;\\n&quot;
						+ &quot; 爱好：&quot; + hobby + &quot;\\n&quot;
						+ &quot; 籍贯：&quot; + address + &quot;\\n&quot;
						+ &quot; 备注：&quot; + demo + &quot;\\n&quot;);
			}
		});
		button.setBounds(535, 319, 93, 23);
		add(button);
		
		JButton button_1 = new JButton(&quot;\\u91CD\\u7F6E&quot;);
		button_1.setBounds(417, 319, 93, 23);
		add(button_1);

	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter06.gui;

import java.awt.EventQueue;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;
import javax.swing.JSeparator;
import javax.swing.JToolBar;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;
import javax.swing.border.EmptyBorder;

public class MainFrame extends JFrame {

	private JPanel contentPane;
	private JPanel panel;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					MainFrame frame = new MainFrame();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}
	
	static{
		try {
//			UIManager.setLookAndFeel(&quot;com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel&quot;);//Nimbus风格，jdk6 update10版本以后的才会出现
			UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());//当前系统风格
//			UIManager.setLookAndFeel(&quot;com.sun.java.swing.plaf.motif.MotifLookAndFeel&quot;);//Motif风格，是蓝黑
//			UIManager.setLookAndFeel(UIManager.getCrossPlatformLookAndFeelClassName());//跨平台的Java风格
//			UIManager.setLookAndFeel(&quot;com.sun.java.swing.plaf.windows.WindowsLookAndFeel&quot;);//windows风格
//			UIManager.setLookAndFeel(&quot;javax.swing.plaf.windows.WindowsLookAndFeel&quot;);//windows风格
//			UIManager.setLookAndFeel(&quot;javax.swing.plaf.metal.MetalLookAndFeel&quot;);//java风格
//			UIManager.setLookAndFeel(&quot;com.apple.mrj.swing.MacLookAndFeel&quot;);//待考察，
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (UnsupportedLookAndFeelException e) {
			e.printStackTrace();
		}
	}

	/**
	 * Create the frame.
	 */
	public MainFrame() {
		setIconImage(Toolkit.getDefaultToolkit().getImage(&quot;E:\\\\Tencent\\\\MySeniorProject\\\\icon\\\\layers.png&quot;));
		setTitle(&quot;\\u96C7\\u5458\\u7BA1\\u7406\\u7CFB\\u7EDF&quot;);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 761, 449);
		
		JMenuBar menuBar = new JMenuBar();
		setJMenuBar(menuBar);
		
		JMenu menu = new JMenu(&quot;\\u5458\\u5DE5\\u7BA1\\u7406&quot;);
		menuBar.add(menu);
		
		JMenu menu_4 = new JMenu(&quot;\\u65B0\\u589E\\u5458\\u5DE5&quot;);
		menu.add(menu_4);
		
		JMenuItem menuItem = new JMenuItem(&quot;\\u65B0\\u589E\\u666E\\u901A\\u5458\\u5DE5&quot;);
		menu_4.add(menuItem);
		
		JMenuItem menuItem_1 = new JMenuItem(&quot;\\u65B0\\u589E\\u7BA1\\u7406\\u5458&quot;);
		menu_4.add(menuItem_1);
		
		JMenuItem menuItem_2 = new JMenuItem(&quot;\\u67E5\\u8BE2\\u5458\\u5DE5&quot;);
		menu.add(menuItem_2);
		
		JSeparator separator = new JSeparator();
		menu.add(separator);
		
		JMenuItem menuItem_3 = new JMenuItem(&quot;\\u9000\\u51FA&quot;);
		menu.add(menuItem_3);
		
		JMenu menu_1 = new JMenu(&quot;\\u90E8\\u95E8\\u7BA1\\u7406&quot;);
		menuBar.add(menu_1);
		
		JMenu menu_2 = new JMenu(&quot;\\u5C97\\u4F4D\\u7BA1\\u7406&quot;);
		menuBar.add(menu_2);
		
		JMenu menu_3 = new JMenu(&quot;\\u7CFB\\u7EDF\\u8BBE\\u7F6E&quot;);
		menuBar.add(menu_3);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JToolBar toolBar = new JToolBar();
		toolBar.setBounds(0, 0, 745, 35);
		contentPane.add(toolBar);
		
		//新增员工
		JButton button = new JButton(&quot;&quot;);
		button.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//1.先移除原panel中所有的内容
				panel.removeAll();
				panel.repaint();
				
				//2.再想panel中添加新的内容（新增员工的界面）
				AddEmpPanel addEmpPanel = new AddEmpPanel();
				addEmpPanel.setBounds(0, 0, 745, 352);
				panel.add(addEmpPanel);
			}
		});
		button.setToolTipText(&quot;\\u65B0\\u589E\\u5458\\u5DE5&quot;);
		button.setIcon(new ImageIcon(&quot;E:\\\\Tencent\\\\MySeniorProject\\\\icon\\\\add.png&quot;));
		toolBar.add(button);
		
		JButton button_1 = new JButton(&quot;&quot;);
		button_1.setToolTipText(&quot;\\u8C03\\u8F6C\\u90E8\\u95E8&quot;);
		button_1.setIcon(new ImageIcon(&quot;E:\\\\Tencent\\\\MySeniorProject\\\\icon\\\\layout_edit.png&quot;));
		toolBar.add(button_1);
		
		JButton button_2 = new JButton(&quot;&quot;);
		button_2.setToolTipText(&quot;\\u8C03\\u6574\\u85AA\\u8D44&quot;);
		button_2.setIcon(new ImageIcon(&quot;E:\\\\Tencent\\\\MySeniorProject\\\\icon\\\\money.png&quot;));
		toolBar.add(button_2);
		
		panel = new JPanel();
		panel.setBounds(0, 38, 745, 352);
		contentPane.add(panel);
		panel.setLayout(null);
		
		JLabel lblNewLabel = new JLabel(&quot;&quot;);
		lblNewLabel.setIcon(new ImageIcon(&quot;E:\\\\Tencent\\\\MySeniorProject\\\\icon\\\\bg.jpg&quot;));
		lblNewLabel.setBounds(0, 0, 745, 352);
		panel.add(lblNewLabel);
		
		//窗体居中
		this.setLocationRelativeTo(null);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>JavaGUI界面编程-安装WindowBuilder插件并新建JFrame简单窗体&amp;页面交互 &amp; 常用的表单域&amp;获取表单域的值</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,15);function _(q,x){const t=v("ExternalLinkIcon");return d(),s("div",null,[l(" more "),n("h1",c,[m,e(" 252-JavaGUI界面编程-安装WindowBuilder插件并新建JFrame简单窗体&页面交互 & 常用的表单域&"),n("a",b,[e("获取表单域的值.md"),a(t)])]),p])}const g=i(o,[["render",_],["__file","java252.html.vue"]]);export{g as default};
