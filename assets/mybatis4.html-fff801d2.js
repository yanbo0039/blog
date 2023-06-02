import{_ as e,X as n,Y as i,a1 as a,a0 as r}from"./framework-68dd73a2.js";const s={},t=r(`<h1 id="mybatis-plus-generator生成代码简单示范" tabindex="-1"><a class="header-anchor" href="#mybatis-plus-generator生成代码简单示范" aria-hidden="true">#</a> MyBatis-Plus Generator生成代码简单示范</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><blockquote><p>MyBatis-Plus Generator 是一个代码生成器，可以根据数据库表结构自动生成对应的实体类、 Mapper 接口、Service 类等代码，极大地减少了手动编写重复代码的工作量。下面是 MyBatis-Plus Generator 的详细使用方法：</p></blockquote><ol><li>添加 Maven 依赖：在 pom.xml 文件中添加 MyBatis-Plus Generator 的依赖</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-plus-generator&lt;/artifactId&gt;
    &lt;version&gt;最新版本号&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建代码生成器配置文件：在项目的 src/main/resources 目录下创建一个名为 generator.properties 的配置文件，用于配置代码生成器的参数。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 数据库连接配置
generator.jdbc.driver=com.mysql.cj.jdbc.Driver
generator.jdbc.url=jdbc:mysql://localhost:3306/mydatabase?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false
generator.jdbc.username=root
generator.jdbc.password=root

# 代码生成配置
generator.package.base=com.example  # 基础包名
generator.package.module=user     # 模块名
generator.package.entity=entity    # 实体类包名
generator.package.mapper=mapper    # Mapper 接口包名
generator.package.service=service  # Service 接口包名
generator.package.controller=controller  # Controller 包名
generator.table.names=user        # 需要生成代码的表名，多个表名用逗号分隔
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建代码生成器类：在项目中创建一个名为 CodeGenerator 的 Java 类，用于执行代码生成器的主要逻辑。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
import com.baomidou.mybatisplus.generator.config.GlobalConfig;
import com.baomidou.mybatisplus.generator.config.PackageConfig;
import com.baomidou.mybatisplus.generator.config.StrategyConfig;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;

public class CodeGenerator {

    public static void main(String[] args) {
        // 代码生成器
        AutoGenerator generator = new AutoGenerator();

        // 数据源配置
        DataSourceConfig dataSourceConfig = new DataSourceConfig();
        dataSourceConfig.setDbType(DbType.MYSQL);
        dataSourceConfig.setUrl(&quot;jdbc:mysql://localhost:3306/mydatabase?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false&quot;);
        dataSourceConfig.setUsername(&quot;root&quot;);
        dataSourceConfig.setPassword(&quot;root&quot;);
        generator.setDataSource(dataSourceConfig);

        // 全局配置
        GlobalConfig globalConfig = new GlobalConfig();
        globalConfig.setOutputDir(System.getProperty(&quot;user.dir&quot;) + &quot;/src/main/java&quot;);
        globalConfig.setAuthor(&quot;Your Name&quot;);
        globalConfig.setOpen(false);
        generator.setGlobalConfig(globalConfig);

        // 包配置
        PackageConfig packageConfig = new PackageConfig();
        packageConfig.setParent(&quot;com.example&quot;);
        packageConfig.setModuleName(&quot;user&quot;);
        generator.setPackageInfo(packageConfig);

        // 策略配置
        StrategyConfig strategyConfig = new StrategyConfig();
        strategyConfig.setNaming(NamingStrategy.underline_to_camel);
        strategyConfig.setColumnNaming(NamingStrategy.underline_to_camel);
        strategyConfig.setEntityLombokModel(true);
        strategyConfig.setRestControllerStyle(true);
        strategyConfig.setInclude(StringUtils.split(&quot;user&quot;, &quot;,&quot;));
        generator.setStrategy(strategyConfig);

        // 执行生成代码
        generator.execute();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>运行代码生成器：执行 CodeGenerator 类的 main 方法，即可自动生成代码。生成的代码将会按照配置的包名和目录结构生成在指定的目录中。</li></ol><blockquote><p>这是一个简单的 MyBatis-Plus Generator 的示例，你可以根据自己的需求进行配置和扩展。 配置文件中可以设置需要生成代码的表名，你也可以根据需要配置更多的选项，如数据库连接信息、 代码风格等。生成的代码可以直接用于你的 Spring Boot 项目中。 请注意，使用代码生成器时需要谨慎操作，确保生成的代码符合项目需求，并且定期进行代码生成以保持代码与数据库表结构的同步。</p></blockquote><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>MyBatis-Plus Generator生成代码简单示范</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,15);function l(o,d){return n(),i("div",null,[a(" more "),t])}const u=e(s,[["render",l],["__file","mybatis4.html.vue"]]);export{u as default};
