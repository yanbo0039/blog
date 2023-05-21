const t=JSON.parse('{"key":"v-78fcd50d","path":"/zh/programBlog/ServerSideLanguage/Java/192-Java%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-%E7%BB%A7%E6%89%BF.html","title":"Java面向对象高级特性-继承","lang":"zh-CN","frontmatter":{"title":"Java面向对象高级特性-继承","icon":"page","order":192,"author":"涎涎","date":"2023-01-04T15:05:00.000Z","isOriginal":true,"category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java面向对象高级特性-继承"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/192-Java%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-%E7%BB%A7%E6%89%BF.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java面向对象高级特性-继承"}],["meta",{"property":"og:description","content":"192-Java面向对象高级特性-继承.md 概念 继承（泛化）： ​\\t语法： ​\\t\\t&lt;修饰符&gt; class 子类（派生类） extends 父类（超类、基类） ​\\t\\t{ ​\\t\\t} ​\\t特点： ​\\t\\t1.复用父类的所有非private修饰的属性与方法 ​\\t\\t2.扩充自有的属性与方法 ​\\t注意： ​\\t\\t1.只允许单继承，一个子类只允许有一个直接父类，但是一个父类可以有多个子类 ​\\t\\t public class Worker extends Employee{} ​\\t\\t public class Officer extends Employee{} ​\\t\\t2.可以变相的\\"多继承\\" ​\\t\\t public class Officer extends Employee{} ​\\t\\t public class Worker extends Officer{} ​\\t\\t Worker（孙子） -&gt; Officer（爸爸） -&gt; Employee（爷爷） ​\\t\\t 此时，Worker可以继承Officer与Employee两个类中所有的非private修饰的属性与方法 ​\\t 3.Object是所有类的超级父类，而且是java语言中唯一一个没有父类的超级类 ------------------------------------------------------------------------ ​ 子类实例化的过程：父类先实例化，子类再实例化 ------------------------------------------------------------------------ super(): ​\\t条件： 1.基于继承关系 ​ ​\\t作用： 调用父类的构造器 ​ ​\\t注意: ​\\t\\t1.只能出现在子类的构造器中，且必须是第一行 ​\\t\\t2.super()中的参数，决定了调用父类哪个构造器 ​\\t\\t3.如果子类构造器中没有出现super，那么编译器会默认加上super()， ​\\t\\t 即调用父类的空构造器，如果父类没有空构造器，编译器提示错误。 ​ this(): ​\\t条件：1.基于当前类 ​ ​\\t作用：调用类自己的构造器 ​ super:表示父类的引用 this:表示类自身的引用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-04T15:05:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java面向对象高级特性-继承\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-04T15:05:00.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"192-Java面向对象高级特性-继承.md 概念 继承（泛化）： ​\\t语法： ​\\t\\t&lt;修饰符&gt; class 子类（派生类） extends 父类（超类、基类） ​\\t\\t{ ​\\t\\t} ​\\t特点： ​\\t\\t1.复用父类的所有非private修饰的属性与方法 ​\\t\\t2.扩充自有的属性与方法 ​\\t注意： ​\\t\\t1.只允许单继承，一个子类只允许有一个直接父类，但是一个父类可以有多个子类 ​\\t\\t public class Worker extends Employee{} ​\\t\\t public class Officer extends Employee{} ​\\t\\t2.可以变相的\\"多继承\\" ​\\t\\t public class Officer extends Employee{} ​\\t\\t public class Worker extends Officer{} ​\\t\\t Worker（孙子） -&gt; Officer（爸爸） -&gt; Employee（爷爷） ​\\t\\t 此时，Worker可以继承Officer与Employee两个类中所有的非private修饰的属性与方法 ​\\t 3.Object是所有类的超级父类，而且是java语言中唯一一个没有父类的超级类 ------------------------------------------------------------------------ ​ 子类实例化的过程：父类先实例化，子类再实例化 ------------------------------------------------------------------------ super(): ​\\t条件： 1.基于继承关系 ​ ​\\t作用： 调用父类的构造器 ​ ​\\t注意: ​\\t\\t1.只能出现在子类的构造器中，且必须是第一行 ​\\t\\t2.super()中的参数，决定了调用父类哪个构造器 ​\\t\\t3.如果子类构造器中没有出现super，那么编译器会默认加上super()， ​\\t\\t 即调用父类的空构造器，如果父类没有空构造器，编译器提示错误。 ​ this(): ​\\t条件：1.基于当前类 ​ ​\\t作用：调用类自己的构造器 ​ super:表示父类的引用 this:表示类自身的引用"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":3.09,"words":926},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/192-Java面向对象高级特性-继承.md","localizedDate":"2023年1月4日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--192-Java--sw8oy90e4ol5mh6p4djgybm3au98nxn1bc0n.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">192-Java面向对象高级特性-继承.md</a></h1>\\n<h4> 概念</h4>\\n<blockquote>\\n<p>继承（泛化）：</p>\\n<p>​\\t语法：</p>\\n<p>​\\t\\t&lt;修饰符&gt; class 子类（派生类） extends 父类（超类、基类）</p>\\n<p>​\\t\\t{</p>\\n<p>​\\t\\t}</p>\\n<p>​\\t特点：</p>\\n<p>​\\t\\t1.复用父类的所有非private修饰的属性与方法</p>\\n<p>​\\t\\t2.扩充自有的属性与方法</p>\\n<p>​\\t注意：</p>\\n<p>​\\t\\t1.只允许单继承，一个子类只允许有一个直接父类，但是一个父类可以有多个子类</p>\\n<p>​\\t\\t  public class Worker extends Employee{}</p>\\n<p>​\\t\\t  public class Officer extends Employee{}</p>\\n<p>​\\t\\t2.可以变相的\\"多继承\\"</p>\\n<p>​\\t\\t  public class Officer extends Employee{}</p>\\n<p>​\\t\\t  public class Worker extends Officer{}</p>\\n<p>​\\t\\t  Worker（孙子） -&gt;  Officer（爸爸） -&gt; Employee（爷爷）</p>\\n<p>​\\t\\t     此时，Worker可以继承Officer与Employee两个类中所有的非private修饰的属性与方法</p>\\n<p>​\\t    3.Object是所有类的超级父类，而且是java语言中唯一一个没有父类的超级类</p>\\n<p>------------------------------------------------------------------------</p>\\n<p>​    子类实例化的过程：父类先实例化，子类再实例化</p>\\n<p>------------------------------------------------------------------------</p>\\n<p>super():</p>\\n<p>​\\t条件：  1.基于继承关系</p>\\n<p>​</p>\\n<p>​\\t作用： 调用父类的构造器</p>\\n<p>​</p>\\n<p>​\\t注意:</p>\\n<p>​\\t\\t1.只能出现在子类的构造器中，且必须是第一行</p>\\n<p>​\\t\\t2.super()中的参数，决定了调用父类哪个构造器</p>\\n<p>​\\t\\t3.如果子类构造器中没有出现super，那么编译器会默认加上super()，</p>\\n<p>​\\t\\t      即调用父类的空构造器，如果父类没有空构造器，编译器提示错误。</p>\\n<p>​</p>\\n<p>this():</p>\\n<p>​\\t条件：1.基于当前类</p>\\n<p>​</p>\\n<p>​\\t作用：调用类自己的构造器</p>\\n<p>​</p>\\n<p>super:表示父类的引用</p>\\n<p>this:表示类自身的引用</p>\\n</blockquote>","autoDesc":true}');export{t as data};
