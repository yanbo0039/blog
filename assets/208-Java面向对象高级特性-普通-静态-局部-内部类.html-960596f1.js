const t=JSON.parse('{"key":"v-912c281c","path":"/zh/programBlog/ServerSideLanguage/Java/208-Java%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-%E6%99%AE%E9%80%9A-%E9%9D%99%E6%80%81-%E5%B1%80%E9%83%A8-%E5%86%85%E9%83%A8%E7%B1%BB.html","title":"Java面向对象高级特性-普通-静态-局部-内部类","lang":"zh-CN","frontmatter":{"title":"Java面向对象高级特性-普通-静态-局部-内部类","icon":"page","order":208,"author":"涎涎","date":"2023-01-06T11:02:29.000Z","isOriginal":true,"category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java面向对象高级特性-普通-静态-局部-内部类"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/208-Java%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-%E6%99%AE%E9%80%9A-%E9%9D%99%E6%80%81-%E5%B1%80%E9%83%A8-%E5%86%85%E9%83%A8%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java面向对象高级特性-普通-静态-局部-内部类"}],["meta",{"property":"og:description","content":"208-Java面向对象高级特性-普通-静态-局部-内部类.md 概念 示例代码 普通内部类 package com.tencent.chapter07.内部类; /** * &lt;p&gt;Title: Outer&lt;/p&gt; * &lt;p&gt; * Description: 内部类：定义在一个类中的类，即嵌套类 注意： 1.内部类可以访问外部类所有的属性与方法，不需要创建对象 2.外部类访问内部类的属性或方法时，必须创建对象 ① 在类中访问： Inner inner = new Inner(); inner.innerMethod(); ② 在类以外访问内部类 Outer outer = new Outer(); Inner inner = outer.new Inner(); 3.如果内部类与外部类的属性或方法重名，内部类的优先级 &gt; 外部类的优先级 4.不能定义static变量 外部类修饰符：public &lt;default&gt; 内部类修饰符：public protected &lt;default&gt; private //外部类 * &lt;/p&gt; * @author xianxian * @date 2023年1月4日 */ public class Outer { \\t//外部类属性 \\t\\tint outerNum = 10; \\t\\tint x = 666; \\t\\t \\t\\t//外部类方法 \\t\\tpublic void outerMethod() \\t\\t{ \\t\\t\\tSystem.out.println(\\"Outer.outerMethod()...\\"); \\t\\t} \\t\\t \\t\\t//内部类 \\t\\tclass Inner \\t\\t{ \\t\\t\\t//内部类属性 \\t\\t\\tint innerNum = 20; \\t\\t\\tint x = 888; \\t\\t\\t//static int y = 99;//定义静态变量 \\t\\t\\t \\t\\t\\t//内部类方法 \\t\\t\\tpublic void innerMethod() \\t\\t\\t{ \\t\\t\\t\\tSystem.out.println(\\"outerNum:\\" + outerNum); \\t\\t\\t\\touterMethod(); \\t\\t\\t\\tSystem.out.println(\\"Inner.x :\\" + x); //内部类变量 \\t\\t\\t\\tSystem.out.println(\\"Outer.x :\\" + Outer.this.x); //外部类变量 \\t\\t\\t} \\t\\t} \\t\\t \\t\\t//在类中访问内部类的属性与方法 \\t\\tpublic void showInner() \\t\\t{ \\t\\t\\tInner inner = new Inner(); \\t\\t\\tSystem.out.println(\\"innerNum:\\" + inner.innerNum); \\t\\t\\tinner.innerMethod(); \\t\\t} \\t\\t \\t\\tpublic static void main(String[] args) { \\t\\t\\t//在类中访问内部类 \\t\\t\\t//Outer outer = new Outer(); \\t\\t\\t//outer.showInner(); \\t\\t\\t \\t\\t\\t//在类以外访问内部类 \\t\\t\\tOuter outer = new Outer(); \\t\\t\\tInner inner = outer.new Inner(); \\t\\t\\tinner.innerMethod(); \\t\\t} \\t }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-06T11:02:29.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java面向对象高级特性-普通-静态-局部-内部类\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-06T11:02:29.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"208-Java面向对象高级特性-普通-静态-局部-内部类.md 概念 示例代码 普通内部类 package com.tencent.chapter07.内部类; /** * &lt;p&gt;Title: Outer&lt;/p&gt; * &lt;p&gt; * Description: 内部类：定义在一个类中的类，即嵌套类 注意： 1.内部类可以访问外部类所有的属性与方法，不需要创建对象 2.外部类访问内部类的属性或方法时，必须创建对象 ① 在类中访问： Inner inner = new Inner(); inner.innerMethod(); ② 在类以外访问内部类 Outer outer = new Outer(); Inner inner = outer.new Inner(); 3.如果内部类与外部类的属性或方法重名，内部类的优先级 &gt; 外部类的优先级 4.不能定义static变量 外部类修饰符：public &lt;default&gt; 内部类修饰符：public protected &lt;default&gt; private //外部类 * &lt;/p&gt; * @author xianxian * @date 2023年1月4日 */ public class Outer { \\t//外部类属性 \\t\\tint outerNum = 10; \\t\\tint x = 666; \\t\\t \\t\\t//外部类方法 \\t\\tpublic void outerMethod() \\t\\t{ \\t\\t\\tSystem.out.println(\\"Outer.outerMethod()...\\"); \\t\\t} \\t\\t \\t\\t//内部类 \\t\\tclass Inner \\t\\t{ \\t\\t\\t//内部类属性 \\t\\t\\tint innerNum = 20; \\t\\t\\tint x = 888; \\t\\t\\t//static int y = 99;//定义静态变量 \\t\\t\\t \\t\\t\\t//内部类方法 \\t\\t\\tpublic void innerMethod() \\t\\t\\t{ \\t\\t\\t\\tSystem.out.println(\\"outerNum:\\" + outerNum); \\t\\t\\t\\touterMethod(); \\t\\t\\t\\tSystem.out.println(\\"Inner.x :\\" + x); //内部类变量 \\t\\t\\t\\tSystem.out.println(\\"Outer.x :\\" + Outer.this.x); //外部类变量 \\t\\t\\t} \\t\\t} \\t\\t \\t\\t//在类中访问内部类的属性与方法 \\t\\tpublic void showInner() \\t\\t{ \\t\\t\\tInner inner = new Inner(); \\t\\t\\tSystem.out.println(\\"innerNum:\\" + inner.innerNum); \\t\\t\\tinner.innerMethod(); \\t\\t} \\t\\t \\t\\tpublic static void main(String[] args) { \\t\\t\\t//在类中访问内部类 \\t\\t\\t//Outer outer = new Outer(); \\t\\t\\t//outer.showInner(); \\t\\t\\t \\t\\t\\t//在类以外访问内部类 \\t\\t\\tOuter outer = new Outer(); \\t\\t\\tInner inner = outer.new Inner(); \\t\\t\\tinner.innerMethod(); \\t\\t} \\t }"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":3.52,"words":1055},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/208-Java面向对象高级特性-普通-静态-局部-内部类.md","localizedDate":"2023年1月6日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--208-Java-----fe4t98zp14at6az04bqtag86gwl4cq63bg8jgs3fwxsjteca0365b5gau56g.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">208-Java面向对象高级特性-普通-静态-局部-内部类.md</a></h1>\\n<h4> 概念</h4>\\n<blockquote></blockquote>\\n<h4> 示例代码</h4>\\n<ul>\\n<li>普通内部类</li>\\n</ul>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter07.内部类;\\n\\n/**\\n * &lt;p&gt;Title: Outer&lt;/p&gt;  \\n * &lt;p&gt;\\n *    Description: \\n内部类：定义在一个类中的类，即嵌套类\\n\\n注意：\\n1.内部类可以访问外部类所有的属性与方法，不需要创建对象\\n2.外部类访问内部类的属性或方法时，必须创建对象\\n① 在类中访问：\\nInner inner = new Inner();\\ninner.innerMethod();\\n② 在类以外访问内部类\\nOuter outer = new Outer();\\nInner inner = outer.new Inner();\\n\\n3.如果内部类与外部类的属性或方法重名，内部类的优先级 &gt; 外部类的优先级\\n4.不能定义static变量\\n\\n\\n外部类修饰符：public &lt;default&gt;\\n内部类修饰符：public protected &lt;default&gt; private \\n//外部类\\n * &lt;/p&gt;  \\n * @author xianxian \\n * @date 2023年1月4日\\n */\\npublic class Outer {\\n\\n\\t//外部类属性\\n\\t\\tint outerNum = 10;\\n\\t\\tint x = 666;\\n\\t\\t\\n\\t\\t//外部类方法\\n\\t\\tpublic void outerMethod()\\n\\t\\t{\\n\\t\\t\\tSystem.out.println(\\"Outer.outerMethod()...\\");\\n\\t\\t}\\n\\t\\t\\n\\t\\t//内部类\\n\\t\\tclass Inner\\n\\t\\t{\\n\\t\\t\\t//内部类属性\\n\\t\\t\\tint innerNum = 20;\\n\\t\\t\\tint x = 888;\\n\\t\\t\\t//static int y = 99;//定义静态变量\\n\\t\\t\\t\\n\\t\\t\\t//内部类方法\\n\\t\\t\\tpublic void innerMethod()\\n\\t\\t\\t{\\n\\t\\t\\t\\tSystem.out.println(\\"outerNum:\\" + outerNum);\\n\\t\\t\\t\\touterMethod();\\n\\t\\t\\t\\tSystem.out.println(\\"Inner.x :\\" + x); //内部类变量\\n\\t\\t\\t\\tSystem.out.println(\\"Outer.x :\\" + Outer.this.x); //外部类变量\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\t\\n\\t\\t//在类中访问内部类的属性与方法\\n\\t\\tpublic void showInner()\\n\\t\\t{\\n\\t\\t\\tInner inner = new Inner();\\n\\t\\t\\tSystem.out.println(\\"innerNum:\\" + inner.innerNum);\\n\\t\\t\\tinner.innerMethod();\\n\\t\\t}\\n\\t\\t\\n\\t\\tpublic static void main(String[] args) {\\n\\t\\t\\t//在类中访问内部类\\n\\t\\t\\t//Outer outer = new Outer();\\n\\t\\t\\t//outer.showInner();\\n\\t\\t\\t\\n\\t\\t\\t//在类以外访问内部类\\n\\t\\t\\tOuter outer = new Outer();\\n\\t\\t\\tInner inner = outer.new Inner();\\n\\t\\t\\tinner.innerMethod();\\n\\t\\t}\\n\\t\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
