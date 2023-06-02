import{_ as l,X as a,Y as d,a1 as r,Z as e,$ as t,a2 as n,a0 as s,F as c}from"./framework-68dd73a2.js";const u={},v={id:"_136-java-file类的介绍-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_136-java-file类的介绍-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--136-Java-File-uc3ui637bb7tau6i.md",target:"_blank",rel:"noopener noreferrer"},b=s(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li>文件管理的概述 <ul><li>Java中的对文件的管理，通过java.io包中的File类实现</li><li>Java中文件的管理，主要是针对文件或是目录路径名的管理 <ul><li>文件的属性信息</li><li>文件的检查</li><li>文件的删除等</li><li>不包括文件的访问</li></ul></li></ul></li><li>File类 <ul><li>File类的构造方法</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>File  变量名 = new  File(String pathname) ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>通过将给定路径名字符串转换成抽象路径名来创建一个新 File 实例</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>File f1 = new File (“d:/temp/abc.txt”);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>File类的构造方法</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>File  变量名 = new  File(String pathname) ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>通过将给定路径名字符串转换成抽象路径名来创建一个新 File 实例</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>File f1 = new File (“d:/temp/abc.txt”);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>File类的构造方法</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>File  变量名 = new  File(URI uri) ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>通过将给定File的uri转换成抽象路径名来创建一个新 File 实例</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>File f2 = new File(“abc.txt”); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>File类的构造方法</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>File  变量名 = new  File(String parent,Stirng child) ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>根据 parent 路径名字符串和 child 路径名字符串创建一个新 File 实例</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>File f3 = new File(“d:/temp”,“abc.txt”); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>File类的构造方法</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>File  变量名 = new  File(File parent,Stirng child) ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>根据 parent 抽象路径名和 child 路径名字符串创建一个新 File 实例</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>File f = new File(“d:/temp”);
File f4 = new File(f,“abc.txt”);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>File类</li></ul><table><thead><tr><th>方法</th><th>含义</th></tr></thead><tbody><tr><td>boolean createNewFile()</td><td>当且仅当不存在具有此抽象路径名指定的名称的文件时，原子地创建由此抽象路径名指定的一个新的空文件。</td></tr><tr><td>static File createTempFile(String prefix,String suffix)</td><td>在默认临时文件目录中创建一个空文件，使用给定前缀和后缀生成其名称</td></tr><tr><td>static File createTempFile(String prefix,Stirng suffix,File directory)</td><td>在指定目录中创建一个新的空文件，使用给定的前缀和后缀字符串生成其名称</td></tr><tr><td>boolean exists( )</td><td>测试此抽象路径名表示的文件或目录是否存在</td></tr><tr><td>boolean delete( )</td><td>删除此抽象路径名表示的文件或目录</td></tr><tr><td>boolean equals(Object obj)</td><td>测试此抽象路径名与给定对象是否相等</td></tr><tr><td>boolean canRead()</td><td>测试应用程序是否可以读取此抽象路径名表示的文件</td></tr><tr><td>boolean canWrite()</td><td>测试应用程序是否可以修改此抽象路径名表示的文件</td></tr><tr><td>String[] list( )</td><td>返回由此抽象路径名所表示的目录中的文件和目录的名称所组成字符串数组</td></tr><tr><td>String getAbsolutePath( )</td><td>返回抽象路径名的绝对路径名字符串</td></tr><tr><td>String getName( )</td><td>返回由此抽象路径名表示的文件或目录的名称，不包括路径名称</td></tr><tr><td>String getPath( )</td><td>将此抽象路径名转换为一个路径名字符串</td></tr><tr><td>File[] listFiles()</td><td>返回一个抽象路径名数组，这些路径名表示此抽象路径名所表示目录中的文件</td></tr><tr><td>boolean renameTo(File dest )</td><td>重新命名此抽象路径名表示的文件</td></tr><tr><td>long length( )</td><td>返回由此抽象路径名表示的文件的大小，以byte为单位</td></tr><tr><td>boolean mkdir( )</td><td>创建此抽象路径名指定的目录</td></tr><tr><td>boolean mkdirs( )</td><td>创建此抽象路径名指定的目录，包括创建必需但不存在的父目录。注意，如果此操作失败，可能已成功创建了一些必需的父目录</td></tr></tbody></table><h4 id="文件管理——java7特性" tabindex="-1"><a class="header-anchor" href="#文件管理——java7特性" aria-hidden="true">#</a> 文件管理——Java7特性</h4><ul><li>NIO 2 <ul><li>在Java7之前，文件的操作一向都比较不便，Java7推出了全新的NIO 2 API，包括java.nio.file包，以及相关的java.nio.file.attribute包，全面支持了文件IO以及对默认文件系统的访问，使得在java.nio.file包下使用Path、Paths、Files、WatchService、FileSystem等常用类型可以很好的简化开发人员对文件管理的编码工作。</li></ul></li><li>NIO 2 <ul><li>Path接口常用方法如下：</li></ul></li></ul><table><thead><tr><th>方法名称</th><th>方法返回类型</th><th>方法描述</th></tr></thead><tbody><tr><td>getNameCount()</td><td>int</td><td>获取当前文件节点数</td></tr><tr><td>getFileName()</td><td>java.nio.file.Path</td><td>获取当前文件名称</td></tr><tr><td>getRoot()</td><td>java.nio.file.Path</td><td>获取当前文件根目录</td></tr><tr><td>getParent()</td><td>java.nio.file.Path</td><td>获取当前文件上级关联目录</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Path path = Paths.get(&quot;C:/windows&quot;);
System.out.println(&quot;文件节点数:&quot; + path.getNameCount());
System.out.println(&quot;文件名称:&quot; + path.getFileName());
System.out.println(&quot;文件根目录:&quot; + path.getRoot());
System.out.println(&quot;文件上级关联目录:&quot; + path.getParent());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>NIO 2 <ul><li>Files类型常用方法如下：</li></ul></li></ul><table><thead><tr><th>方法名称</th><th>方法返回类型</th><th>方法描述</th></tr></thead><tbody><tr><td>createFile()</td><td>java.nio.file.Path</td><td>在指定的目标目录创建新文件</td></tr><tr><td>delete()</td><td>void</td><td>删除指定目标路径的文件或文件夹</td></tr><tr><td>copy()</td><td>java.nio.file.Path</td><td>将指定目标路径的文件拷贝到另一个文件中</td></tr><tr><td>move()</td><td>java.nio.file.Path</td><td>将指定目标路径的文件转移到其他路径下，并删除源文件</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try {
	Files.copy(Paths.get(&quot;C:/a.txt&quot;), Paths.get(&quot;C:/b.txt&quot;));
} catch (IOException e) {
	e.printStackTrace();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>NIO 2 <ul><li>使用WatchService类型实现文件监控</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*监控目标路径 */
Path path = Paths.get(&quot;C:/&quot;);
try {
	/* 创建文件监控对象 */
	WatchService watchService = FileSystems.getDefault().newWatchService();
	/* 注册文件监控的所有事件类型 */
	path.register(watchService, StandardWatchEventKinds.ENTRY_CREATE,
			StandardWatchEventKinds.ENTRY_DELETE,
			StandardWatchEventKinds.ENTRY_MODIFY);
	/* 循环监测文件 */
	while (true) {
		WatchKey watchKey = watchService.take();
		/* 迭代触发事件的所有文件 */
		for (WatchEvent&lt;?&gt; event : watchKey.pollEvents())
			System.out.println(event.context().toString() + &quot; 事件类型：&quot;
					+ event.kind());
		if (!watchKey.reset())
			return;
	}
} catch (Exception e) {
	e.printStackTrace();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 文件类;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TestFile {

	public static void main(String[] args) {
		//1. 如何创建File对象
		
		File file = new File(&quot;D:\\\\a.txt&quot;);
		//2. File类的方法有哪些？
		if(!file.exists()) {
			try {
				file.createNewFile();//文件不存在就创建
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		File b = new File(&quot;D:\\\\a\\\\b\\\\c&quot;);
		if(!b.exists()) {
			b.mkdirs();//创建多级目录，创建单级目录则为mkdir()
		}
		//3.
		File c = new File(&quot;file&quot;,&quot;abc.txt&quot;);//此处必须保证项目根目录有file文件夹
		if(!c.exists()) {
			try {
				c.createNewFile();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		System.out.println(&quot;c.canRead(): &quot; + c.canRead());//是否可读
		System.out.println(&quot;c.canWrite(): &quot; + c.canWrite());//是否可写
		System.out.println(&quot;c.getAbsolutePath(): &quot; + c.getAbsolutePath());//绝对路径
		System.out.println(&quot;c.exists(): &quot; + c.exists());//是否存在
		System.out.println(&quot;c.getName(): &quot; + c.getName());//文件名
		System.out.println(&quot;c.lastModified(): &quot; + new SimpleDateFormat(&quot;yyyy-MM-dd hh:mm:ss&quot;).
				format(new Date(c.lastModified())));//最后修改时间
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="拓展知识" tabindex="-1"><a class="header-anchor" href="#拓展知识" aria-hidden="true">#</a> 拓展知识：</h4>`,35),h={href:"https://www.runoob.com/java/java-file.html",target:"_blank",rel:"noopener noreferrer"},p={href:"http://c.biancheng.net/view/1133.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.cnblogs.com/wangjinlong-padan/p/6382924.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.yiibai.com/java/java_file_class.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.runoob.com/java/java-date-time.html",target:"_blank",rel:"noopener noreferrer"},f=e("em",null,"Java-File类的介绍",-1),_={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"},S=e("hr",null,null,-1),w=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),t(" 分割线")],-1),q=e("hr",null,null,-1),y=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function j(N,k){const i=c("ExternalLinkIcon");return a(),d("div",null,[r(" more "),e("h1",v,[o,t(),e("a",m,[t("136-Java-File类的介绍.md"),n(i)])]),b,e("p",null,[e("a",h,[t("Java File类 | 菜鸟教程"),n(i)])]),e("p",null,[e("a",p,[t("Java File类（文件操作类）详解"),n(i)])]),e("p",null,[e("a",g,[t("Java中File类的常用所有方法及其应用"),n(i)])]),e("p",null,[e("a",x,[t("Java File类-易百教程"),n(i)])]),e("p",null,[e("a",F,[t("Java 日期时间-菜鸟教程"),n(i)])]),e("p",null,[e("strong",null,[t("以上就是我关于 "),f,t(" 知识点的整理与总结的全部内容,"),e("a",_,[t("另附源码"),n(i)])])]),S,w,q,y])}const E=l(u,[["render",j],["__file","java136.html.vue"]]);export{E as default};
