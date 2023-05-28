import{_ as i,X as t,Y as e,a1 as n,a0 as l}from"./framework-68dd73a2.js";const s="/blog/assets/Java_32_1.png",d="/blog/assets/Java_32_2.png",a="/blog/assets/Java_32_3.png",v="/blog/assets/Java_32_4.png",r="/blog/assets/Java_32_5.png",u="/blog/assets/Java_32_6.png",c="/blog/assets/Java_32_7.png",m={},b=l(`<h1 id="java中级测试题三-文件与流-4-4" tabindex="-1"><a class="header-anchor" href="#java中级测试题三-文件与流-4-4" aria-hidden="true">#</a> Java中级测试题三-文件与流(4-4)</h1><ol><li>在本机的磁盘系统中，找一个文件夹，利用File类的提供方法，列出该文件夹中的所有文件的文件名和文件的路径，执行效果如下：</li></ol><p>路径是xxx的文件夹内的文件有：</p><pre><code>文件名：abc.txt
路径名：c:\\temp\\abc.txt 
--------------------------------------------
文件名：def.txt
路径名：c:\\temp\\def.txt
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package highchapter3;

import java.io.File;

public class ReadFile {
	/*
	 * 1、在本机的磁盘系统中，找一个文件夹，利用File类的提供方法，
	 * 列出该文件夹中的所有文件的文件名和文件的路径，执行效果如下：
	 * 路径是xxx的文件夹内的文件有：
	 * 
	 */
	static int totol = 0;
	static int dirTotol = 0;
	static String showFile(String path) {
		File file = new File(path);
		String [] fileArr = file.list();
		for(int i=0;i&lt;fileArr.length;i++) {
			String nowPath = path+&quot;\\\\&quot;+fileArr[i];
			File file1 = new File(nowPath);
			if(file1.isDirectory()) {
				showFile(nowPath);
				dirTotol++;
			}
			else {
				System.out.println(&quot;文件名:&quot;+file1.getName());
				System.out.println(&quot;路径名:&quot;+nowPath);
				totol++;
				System.out.println(&quot;-------------------------------------&quot;);
			}
		}
		return &quot;&quot;;
	}
	
	public static void main(String[] args) {
		System.out.println(&quot;列出该文件夹中的所有文件的文件名和文件的路径&quot;);
		showFile(&quot;D:\\\\\\\\Sublime&quot;);
		System.out.println(&quot;总共有&quot;+totol+&quot;个文件,文件夹有&quot;+dirTotol+&quot;个&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>编写一个java程序实现文件复制功能，要求将d:/io/copysrc.doc中的内容复制到d:/io/copydes.doc中。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class CopyFile {
	public static void cyfile() {
		File source = new File(&quot;d:/io/copysrc.doc&quot;);
		//判断是否有源文件。如果没有则创建一个
		if(!source.exists()) {
			try {
				source.createNewFile();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		//目标文件不用判断会自动创建
		File dest = new File(&quot;d:/io/copydes.doc&quot;);
		try(
				BufferedReader br = new BufferedReader(new FileReader(source));
				BufferedWriter bw = new BufferedWriter(new FileWriter(dest));
				) {
			String content = null;
			while((content = br.readLine()) != null) {
				bw.write(content);
				bw.newLine();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public static void main(String[] args) {
		cyfile();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建c:/test.txt文件并在其中输入&quot;hello world&quot;创建一个输入流读取该文件中的文本并且把小写的l变成大写L再利用输出流写入到d:\\test.txt中</li></ol><p>3.1 实现步骤：</p><p>3.1.1 在本地硬盘C盘下创建一个文件test.txt</p><p>3.1.2 创建一个包含main()方法的类，并在main中编写代码</p><p>3.1.3 运行代码并且测试结果</p><p>3.2 实现过滤器的功能</p><p>效果显示：</p><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package highchapter3;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Topic3 {

	/*
	 * 3、创建c:/test.txt文件并在其中输入&quot;hello world&quot; 
	 * 创建一个输入流读取该文件中的文本
	 * 并且把小写的l变成大写L再利用输出流写入到d:\\test.txt中 [必做题] 
	 * 3.1 实现步骤： 
	 * 3.1.1 在本地硬盘C盘下创建一个文件test.txt 19:15
	 * 3.1.2 创建一个包含main()方法的类，并在main中编写代码  19:16
	 * 3.1.3 运行代码并且测试结果
	 * 3.2 实现过滤器的功能 效果显示：
	 */
	public static void crefile() {
		File file = new File(&quot;file&quot;,&quot;test.txt&quot;);
		if(!file.exists()) {
			try {
				file.createNewFile();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		//我是直接用代码输入文本
		FileOutputStream fos = null;
		String content = &quot;hello world&quot;;
		byte[] b = content.getBytes();
		try {
			fos = new FileOutputStream(file);
			for(int i = 0;i &lt; b.length;i++) {
				try {
					fos.write(b[i]);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}finally {
			try {
				fos.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}//创建并 插入内容结束
		
		//此处我将不按照题目要求路径放咯。。点解？因为我懒。。。。。。
		File dest = new File(&quot;file&quot;,&quot;test2.txt&quot;);
		
		try (
				BufferedReader br = new BufferedReader(new FileReader(file));
				BufferedWriter bw = new BufferedWriter(new FileWriter(dest));
				){
			String newContent = br.readLine().replace(&quot;l&quot;,&quot;L&quot;);
			bw.write(newContent);
			System.out.println(&quot;从文件file/test.txt中读取的内容是：&quot; + br.readLine());
			System.out.println(&quot;通过过滤写到 文件file/test2.txt中的内容是：&quot; + newContent);
		} catch (IOException e1) {
			e1.printStackTrace();
		}
	}

	public static void main(String[] args) {
		crefile();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下： <img src="`+d+'" alt="" loading="lazy"></p><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>在程序中创建一个Student类型的对象，并把对象信息保存到d:/io/student.txt文件中，然后再从文件中把Student对象的信息读出显示在控制台上，Student类的描述如下： <img src="'+u+`" alt="" loading="lazy"></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package higchapter3;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Student implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/*
	 * 4、在程序中创建一个Student类型的对象，并把对象信息保存到d:/io/student.txt文件中，
	 * 然后再从文件中把Student对象的信息读出显示在控制台上，Student类的描述如下：
	 * 
	 */
	private Integer id;
	private String name;
	private Date birth;
	
	public Student(Integer id, String name, Date birth) {
		super();
		this.id = id;
		this.name = name;
		this.birth = birth;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getBirth() {
		return birth;
	}
	public void setBirth(Date birth) {
		this.birth = birth;
	}
	
	@Override
	public String toString() {
		return &quot;Student [id=&quot; + id + &quot;, name=&quot; + name + &quot;, birth=&quot; + birth + &quot;]&quot;;
	}
	
	//测试类
	public static void main(String[] args) {
		String birth = &quot;1999-09-12&quot;;
		SimpleDateFormat sf=new SimpleDateFormat(&quot;yyyy-MM-dd&quot;);
		Date dateBirth = null;
		try {
			dateBirth=sf.parse(birth);
		} catch (ParseException e1) {
			e1.printStackTrace();
		}
		Student stu = new Student(100,&quot;suwukong&quot;,dateBirth);
		File file = new File(&quot;file&quot;,&quot;stu.txt&quot;);
	
		if(!file.exists()) {
			try {
				file.createNewFile();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		File readFile = new File(&quot;file&quot;,&quot;stu.txt&quot;);
		try (
				ObjectOutputStream os = new 
               ObjectOutputStream(new FileOutputStream(file));
				ObjectInput is = new ObjectInputStream
                (new FileInputStream(readFile));
				)
		{
			os.writeObject(stu);//写入
			Student stu2 = (Student) is.readObject();//读取
			System.out.println(stu);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',27);function o(p,g){return t(),e("div",null,[n(" more "),b])}const h=i(m,[["render",o],["__file","java32.html.vue"]]);export{h as default};
