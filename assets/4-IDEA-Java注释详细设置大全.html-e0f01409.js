import{_ as a,X as l,Y as s,a1 as d,Z as i,$ as e,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/IDEA_4_1.png",u="/blog/assets/IDEA_4_2.png",m="/blog/assets/IDEA_4_3.png",o="/blog/assets/IDEA_4_4.png",p="/blog/assets/IDEA_4_5.png",b={},g={id:"_4-idea-java注释详细设置大全-md",tabindex:"-1"},h=i("a",{class:"header-anchor",href:"#_4-idea-java注释详细设置大全-md","aria-hidden":"true"},"#",-1),E={href:"http://xn--4-IDEA-Java-u56rs91f1g7dk9zc2gc7s8fsual90g.md",target:"_blank",rel:"noopener noreferrer"},x=r(`<h4 id="设置最终效果" tabindex="-1"><a class="header-anchor" href="#设置最终效果" aria-hidden="true">#</a> 设置最终效果</h4><blockquote><p>如下所未是我常用的注释最终效果,分享给大家</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    /**
     * @methodName copyDir
     * &lt;p&gt;
     *    Description:
     * &lt;/p&gt; 
     * @param: oldPath
     * @param: newPath
     * @return void
     * @throws IOException 
     * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
     * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
     * @author xianxian
     * @Date 2023/2/1  16:39
     * @version 1.0
    */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>由于一直使用Eclipse，在Eclipse中注释使用是一件非常方便的事，只需要将别人设置好的注释模板生成.xml文件直接导入而后通过 /** + ENTER 快捷键 在类或者方法上可以使用了，但这是IDEA 所以 习惯使用Eclipse的小伙伴一定要避免以下误区</li></ul><p><strong>网络上大把使用EclipseCodeFormatter插件而后导入xml文件而后就可以在IDEA中使用的，本人亲测是不行的！！！！！大家不必去浪费时间，如果有小伙伴用这种方式而成功的，欢迎指导一下本人。</strong></p><h4 id="设置步骤" tabindex="-1"><a class="header-anchor" href="#设置步骤" aria-hidden="true">#</a> 设置步骤</h4><blockquote><p>请进入如下设置界面 file --&gt; setting --&gt; editor</p></blockquote><ol><li>设置 File and Code Templates 里的 Files列表下的 class / interface / Enum / annationtype</li></ol><blockquote><p>这们的共性是取消勾选 Reformat according to style 与Enable Live Templates 两个勾选框，而后代码界面按如下界面设置</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>#if (\${PACKAGE_NAME} &amp;&amp; \${PACKAGE_NAME} != &quot;&quot;)package \${PACKAGE_NAME};#end
#parse(&quot;File Header.java&quot;)

/**
 * @className \${NAME}
 * &lt;p&gt;
 *    Description: \${description}
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
 * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
 * @author xianxian
 * @date \${YEAR}/\${MONTH}/\${DAY}  \${HOUR}:\${MINUTE}
 * @version V1.0
**/
public class \${NAME} {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>#if (\${PACKAGE_NAME} &amp;&amp; \${PACKAGE_NAME} != &quot;&quot;)package \${PACKAGE_NAME};#end
#parse(&quot;File Header.java&quot;)


/**
 * @interfaceName \${NAME}
 * &lt;p&gt;
 *    Description: \${description}
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
 * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
 * @author xianxian
 * @date \${YEAR}/\${MONTH}/\${DAY}  \${HOUR}:\${MINUTE}
 * @version V2.0
**/
public interface \${NAME} {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>#if (\${PACKAGE_NAME} &amp;&amp; \${PACKAGE_NAME} != &quot;&quot;)package \${PACKAGE_NAME};#end
#parse(&quot;File Header.java&quot;)


/**
 * @enumName \${NAME}
 * &lt;p&gt;
 *    Description: \${description}
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
 * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
 * @author xianxian
 * @date \${YEAR}/\${MONTH}/\${DAY}  \${HOUR}:\${MINUTE}
 * @version V2.0
**/
public enum \${NAME} {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>#if (\${PACKAGE_NAME} &amp;&amp; \${PACKAGE_NAME} != &quot;&quot;)package \${PACKAGE_NAME};#end
#parse(&quot;File Header.java&quot;)

/**
 * @annotationName \${NAME}
 * &lt;p&gt;
 *    Description: \${description}
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
 * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
 * @author xianxian
 * @date \${YEAR}/\${MONTH}/\${DAY}  \${HOUR}:\${MINUTE}
 * @version V2.0
**/
public @interface \${NAME} {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>只贴一个示意图，方便大家理解,设置完成apply一下就行了</li></ul><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>备注：网络上一大把博客，你抄我抄你的叫我们设置Includes，本人亲测，不用设置，如果你设置了那么恭喜你，新建类等在它的开头会出现两段注释，不用感谢我！！！！！！！！</strong></p><ol start="2"><li>设置 Live Templates</li></ol><ul><li><p>1.点击右边 + 号选择 Template Group 新建一个分组命名为 Custom</p></li><li><ol start="2"><li>然后再在这个分组下新建一个 Live Template</li></ol></li></ul><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><ol start="3"><li>Abbreviation: * Description：方法注释</li></ol></li><li><ol start="4"><li>Template text：</li></ol></li></ul><p><strong>注：如下代码是没有/*的是以*开头的不要弄错了</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>*
 * @methodName $methodName$
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt; 
 $param$
 * @return $returns$
 * @throws $throws$
 * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
 * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
 * @author xianxian
 * @Date $DATE$  $TIME$
 * @version 1.0
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol start="5"><li>Define 点击开来 勾选 整个Java</li></ol></li><li><ol start="6"><li>设置Option</li></ol><ul><li><p>Expand with 设置成 Enter</p></li><li><p>取消勾选前两复选框，保留勾选最后一个复选框</p></li></ul></li><li><ol start="7"><li>点击 Edit Variables 为里面的变量赋值</li></ol></li></ul><table><thead><tr><th style="text-align:left;">Name</th><th>Epression</th><th>Skip if defined</th></tr></thead><tbody><tr><td style="text-align:left;">methodName</td><td>methodName()</td><td>勾选</td></tr><tr><td style="text-align:left;">param</td><td>如下param</td><td>勾选</td></tr><tr><td style="text-align:left;">returns</td><td>如下returns</td><td>勾选</td></tr><tr><td style="text-align:left;">throws</td><td>completeSmart()</td><td>不勾选</td></tr><tr><td style="text-align:left;">DATE</td><td>date()</td><td>勾选</td></tr><tr><td style="text-align:left;">TIME</td><td>time()</td><td>勾选</td></tr></tbody></table><p><strong>param</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>groovyScript(&quot;def result=&#39;&#39;; def params=\\&quot;\${_1}\\&quot;.replaceAll(&#39;[\\\\\\\\[|\\\\\\\\]|\\\\\\\\s]&#39;, &#39;&#39;).split(&#39;,&#39;).toList(); for(i = 0; i &lt; params.size(); i++) {result+=&#39;* @param: &#39; + params[i] + ((i &lt; params.size() - 1) ? &#39;\\\\n &#39; : &#39;&#39;)};return result&quot;, methodParameters())methodParameters())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>returns</strong></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>groovyScript(&quot;def result=&#39;&#39;; def params=\\&quot;\${_1}\\&quot;.replaceAll(&#39;[\\\\\\\\[|\\\\\\\\]|\\\\\\\\s]&#39;, &#39;&#39;).split(&#39;&lt;&#39;).toList(); for(i = 0; i &lt; params.size(); i++) {if(i!=0){result+=&#39;&lt;&#39;;};  def p1=params[i].split(&#39;,&#39;).toList();  for(i2 = 0; i2 &lt; p1.size(); i2++) { def p2=p1[i2].split(&#39;\\\\\\\\.&#39;).toList();  result+=p2[p2.size()-1]; if(i2!=p1.size()-1){result+=&#39;,&#39;}  } ;  };  return result&quot;, methodReturnType()) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><ol><li>测试新建 class / interface / Enum / annationtype</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.yoyling;
/**
 * @className TestClass
 * &lt;p&gt;
 *    Description: testclass
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
 * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
 * @author xianxian
 * @date 2023/02/01  17:28
 * @version V1.0
**/
public class TestClass {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.yoyling;

/**
 * @interfaceName TestInter
 * &lt;p&gt;
 *    Description: testinterface
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
 * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
 * @author xianxian
 * @date 2023/02/01  17:29
 * @version V2.0
**/
public interface TestInter {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.yoyling;

/**
 * @enumName TestEnum
 * &lt;p&gt;
 *    Description: TestEnum
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
 * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
 * @author xianxian
 * @date 2023/02/01  17:29
 * @version V2.0
**/
public enum TestEnum {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.yoyling;
/**
 * @annotationName TestAnn
 * &lt;p&gt;
 *    Description: TestAnn
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
 * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
 * @author xianxian
 * @date 2023/02/01  17:30
 * @version V2.0
**/
public @interface TestAnn {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>方法等注释测试 ---- 使用 /** + Enter 快捷键在方法头上自动生成注释</li></ol><ul><li>2.1 有参无返回无抛异常</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>  /**
     * @methodName info
     * &lt;p&gt;
     *    Description:
     * &lt;/p&gt; 
     * @param: s
     * @param: s1
     * @return void
     * @throws 
     * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
     * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
     * @author xianxian
     * @Date 2023/2/1  17:32
     * @version 1.0
    */
    private static void info(String s, String s1) {
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.2 无参无返回无异常</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    /**
     * @methodName haha
     * &lt;p&gt;
     *    Description:
     * &lt;/p&gt; 
     * @param: 
     * @return void
     * @throws 
     * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
     * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
     * @author xianxian
     * @Date 2023/2/1  17:33
     * @version 1.0
    */
    private static void haha(){
        
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.3 有参有返回无异常</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    /**
     * @methodName TestReturn
     * &lt;p&gt;
     *    Description:
     * &lt;/p&gt; 
     * @param: str
     * @param: num
     * @param: bl
     * @return String
     * @throws 
     * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
     * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
     * @author xianxian
     * @Date 2023/2/1  17:34
     * @version 1.0
    */
    private static String TestReturn(String str,int num,Boolean bl){
        return str;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.4 有参无返回有异常</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>  /**
     * @methodName copyDirs
     * &lt;p&gt;
     *    Description:
     * &lt;/p&gt; 
     * @param: oldPath
     * @param: newPath
     * @return void
     * @throws IOException 
     * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
     * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
     * @author xianxian
     * @Date 2023/2/1  17:37
     * @version 1.0
    */
    private static void copyDirs(String oldPath, String newPath) throws IOException {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注：取异常值可能有时候取不到， 不过不要紧，在设置里的勾选框，多取消或添加上勾选多测试几次后，只要成功了就一直能取到值了。</strong></p><p><strong>以上就是我关于 <em>IDEA-Java注释详细设置大全</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,56);function f(y,A){const n=v("ExternalLinkIcon");return l(),s("div",null,[d(" more "),i("h1",g,[h,e(),i("a",E,[e("4-IDEA-Java注释详细设置大全.md"),t(n)])]),x])}const C=a(b,[["render",f],["__file","4-IDEA-Java注释详细设置大全.html.vue"]]);export{C as default};
