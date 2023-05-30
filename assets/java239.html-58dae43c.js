import{_ as t,X as s,Y as l,a1 as d,Z as n,$ as i,a2 as a,a0 as v,F as u}from"./framework-68dd73a2.js";const r={},c={id:"_239-java文件与流-文件与流-objectinputstream与objectoutputstream对象序列化-md",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_239-java文件与流-文件与流-objectinputstream与objectoutputstream对象序列化-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--239-Java--ObjectInputStreamObjectOutputStream-ct95ebas064ica3002b42k7y8ing3agc4fda8583iea46218b.md",target:"_blank",rel:"noopener noreferrer"},o=v(`<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_239_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_239_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.io流.序列化;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class ObjectInputStreamAndObjectOutputStream {

	/**
		序列化：对象 -&gt; 字节序列，将对象转换为字节序列，可以保存在本地文件，也可以在网络之间或进程之间传递对象
		
		反序列化： 字节序列 -&gt; 对象，字节序列恢复为对象
		
		注意：
			1.需要实现序列的对象，必须实现序列化接口Serializable或者Externalizable
				public class Student implements Serializable{}
				public class StuClass implements Serializable{}
				
			2.如果父类已经实现序列化接口，子类可以不用在实现
				public class Person implements Serializable{}
				public class Student extends Person{}
				
			3.建议所有的类显示声明serialVersionUID，用于序列化与反序列化判断对象是否为同一类型
				private static final long serialVersionUID = -6873608134389523921L;
				
			4.transient 修饰属性不被序列化出去
				private transient String address;
	 */
	public static void main(String[] args) {
		/**
		 * new对象
		 */
		StuClass stuClass = new StuClass(125, &quot;Java8班&quot;);
		Student jinquan = new Student(10000, &quot;锦权&quot;, 18, &quot;男&quot;, &quot;东软大厦125C&quot;,stuClass);
		
		/**
		 * 序列化
		 */
		serialize(jinquan);
		
		/**
		 * 反序列化
		 */
		deSerialize();
		
	}
	/**
	 * 反序列化
	 */
	private static void deSerialize() {
		ObjectInputStream input = null;
		try {
			//对象输入流
			FileInputStream in = new FileInputStream(&quot;file/student.txt&quot;);
			input = new ObjectInputStream(in);
			
			//读取对象
			Student jinquanClone = (Student)input.readObject();
			System.out.println(jinquanClone.toString());
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} finally {
			//关闭资源
			try {
				if(input != null)
				{
					input.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	/**
	 * 序列化：对象 -&gt; 字节序列
	 * @param 待序列化的对象
	 */
	private static void serialize(Student stu) {
		ObjectOutputStream output = null;
		try {
			//对象输出流
			FileOutputStream out = new FileOutputStream(&quot;file/student.txt&quot;);
			output = new ObjectOutputStream(out);
			
			//将对象写入文件
			output.writeObject(stu);
			
			//刷新暂存区
			output.flush();
			
			System.out.println(&quot;序列化成功！！&quot;);
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			//关闭资源
			try {
				if(output != null)
				{
					output.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.io流.序列化;

import java.io.Serializable;

public class Person implements Serializable{

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.io流.序列化;

import java.io.Serializable;

//学生班级
public class StuClass implements Serializable,Cloneable{

	//班级编号 125
	private int cid;
	
	//班级名称 &quot;java8班&quot;
	private String cname;

	//构造 函数
	public StuClass() {
		super();
	}
	public StuClass(int cid, String cname) {
		super();
		this.cid = cid;
		this.cname = cname;
	}
	
	//访问器
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}

	//重写父类的toString
	@Override
	public String toString() {
		return &quot;StuClass [cid=&quot; + cid + &quot;, cname=&quot; + cname + &quot;]&quot;;
	}
	
	@Override
	protected Object clone() throws CloneNotSupportedException {
		return super.clone();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.io流.序列化;

//学生类
public class Student extends Person implements Cloneable{

	private static final long serialVersionUID = -6873608134389523921L;
	
	//成员变量
	private int sid;
	private String sname;
	private int age;
	private String sex;
	private transient String address;//transient 保护属性不被序列化出去
	
	private StuClass stuClass;//复合属性
	
	//构造函数
	public Student()
	{
		
	}
	public Student(int sid, String sname, int age, String sex, String address, StuClass stuClass) {
		super();
		this.sid = sid;
		this.sname = sname;
		this.age = age;
		this.sex = sex;
		this.address = address;
		this.stuClass = stuClass;
	}


	//访问器
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public StuClass getStuClass() {
		return stuClass;
	}
	public void setStuClass(StuClass stuClass) {
		this.stuClass = stuClass;
	}
	
	//重写父类toString()
	@Override
	public String toString() {
		return &quot;Student [sid=&quot; + sid + &quot;, sname=&quot; + sname + &quot;, age=&quot; + age + &quot;, sex=&quot; + sex + &quot;, address=&quot; + address
				+ &quot;, stuClass=&quot; + stuClass + &quot;]&quot;;
	}
	
	@Override
	protected Object clone() throws CloneNotSupportedException {
		Student stuClone = (Student)super.clone();
		
		StuClass stuClassClone = (StuClass)stuClone.getStuClass().clone();
		stuClone.setStuClass(stuClassClone);
		
		return stuClone;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.io流.序列化;

public class Test深拷贝_浅拷贝 {

	/**
	  		浅拷贝：克隆对象时，不会克隆引用对象的属性，例如，不会克隆Student的StudentClass
	  		
	  		深拷贝：克隆对象时，会克隆引用对象的属性，例如，会克隆Student的StudentClass
	  		
	  			1. 对象序列化默认做深拷贝
	  			
	  			2. 其他对象需要被拷贝
	  				① 实现允许克隆的接口
	  					public class Student implements Cloneable{}
	  					
	  				② 重写clone方法
	  					protected Object clone() throws CloneNotSupportedException {
							Student stuClone = (Student)super.clone();
							
							StuClass stuClassClone = (StuClass)stuClone.getStuClass().clone();
							stuClone.setStuClass(stuClassClone);
							
							return stuClone;
						}
	 */
	public static void main(String[] args) throws CloneNotSupportedException {
		
		/**
		 * 原对象
		 */
		StuClass stuClass = new StuClass(125, &quot;Java8班&quot;);
		Student jinquan = new Student(10000, &quot;锦权&quot;, 18, &quot;男&quot;, &quot;东软大厦125C&quot;,stuClass);
		
		/**
		 * 克隆对象
		 */
		Student jinquanClone = (Student)jinquan.clone();
		
		//输出两个对象Student的地址
		System.out.println(jinquan.hashCode());     //2059712038
		System.out.println(jinquanClone.hashCode());//143833026
		
		jinquanClone.setSex(&quot;女&quot;);
		
		System.out.println(&quot;原来的锦权：&quot; + jinquan.getSex());     //男
		System.out.println(&quot;后来的锦权：&quot; + jinquanClone.getSex());//女
		
		//输出两个对象StudentClass的地址
		System.out.println(jinquan.getStuClass().hashCode());     //143833026
		System.out.println(jinquanClone.getStuClass().hashCode());//143833026
		
		jinquanClone.getStuClass().setCname(&quot;Java8大神班&quot;);
		
		System.out.println(&quot;原来的锦权：&quot; + jinquan.getStuClass().getCname());     //Java8大神班
		System.out.println(&quot;后来的锦权：&quot; + jinquanClone.getStuClass().getCname());//Java8大神班
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java文件与流-文件与流-ObjectInputStream与ObjectOutputStream对象序列化</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,18);function p(S,g){const e=u("ExternalLinkIcon");return s(),l("div",null,[d(" more "),n("h1",c,[m,i(),n("a",b,[i("239-Java文件与流-文件与流-ObjectInputStream与ObjectOutputStream对象序列化.md"),a(e)])]),o])}const h=t(r,[["render",p],["__file","java239.html.vue"]]);export{h as default};
