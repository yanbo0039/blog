import{_ as i,X as e,Y as n,a1 as s,a0 as t}from"./framework-68dd73a2.js";const a="/blog/assets/Java_38_1.png",r="/blog/assets/Java_38_2.png",d={},l=t('<h1 id="java-参数配置化" tabindex="-1"><a class="header-anchor" href="#java-参数配置化" aria-hidden="true">#</a> Java-参数配置化</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>使用工具：</p><p>eclipse</p><h4 id="首先在自己项目文件的src文件夹上右键-new-file-输入-文件名-properties" tabindex="-1"><a class="header-anchor" href="#首先在自己项目文件的src文件夹上右键-new-file-输入-文件名-properties" aria-hidden="true">#</a> 首先在自己项目文件的src文件夹上右键-----&gt;new-----&gt;file----&gt;输入 文件名.properties</h4><p>如图：</p><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>项目目录 <img src="'+r+`" alt="" loading="lazy"></p><p>以下以sql的配置为例，其它工程同理：</p><p>jdbc.properties:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jdbc_url=jdbc:oracle:thin:@localhost:1521:orcl
jdbc_username=scott
jdbc_password=abcdef123
jdbc_driver=oracle.jdbc.driver.OracleDriver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DBUtil：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;


/**
 * 连接数据库的工具类
 *
 */
public class DBUtil {

	/**
	 * 静态私有化块只执行一次
	 * 
	 * 如何读取属性文件：jdbc.properties
	 * date timestamp 的区别(oracle数据库）
	 */
	private static String driverName;
	private static String url;
	private static String username;
	private static String password;
	
	static
	{
		//如何读取属性文件：jdbc.properties
		//使用的技术：使用类加载器获取输入流进而加载属性文件，拿到其中的数据
		InputStream in = DBUtil.class.getClassLoader().getResourceAsStream(&quot;jdbc.properties&quot;);
		Properties prop = new Properties();
		
		try {
			prop.load(in);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		driverName = prop.getProperty(&quot;jdbc_driver&quot;);
		url = prop.getProperty(&quot;jdbc_url&quot;);
		username = prop.getProperty(&quot;jdbc_username&quot;);
		password = prop.getProperty(&quot;jdbc_password&quot;);
		
	}

	//获取连接对象的方法
	public static Connection getConnection()
	{
		Connection conn = null;
		try {
			Class.forName(driverName);
			conn = DriverManager.getConnection(url,username,password);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return conn;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.sql.Connection;

public class Test {

	public static void main(String[] args) {
		Connection conn = DBUtil.getConnection();
		System.out.println(conn);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java-参数配置化</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,19);function v(c,u){return e(),n("div",null,[s(" more "),l])}const m=i(d,[["render",v],["__file","java38.html.vue"]]);export{m as default};
