const e=JSON.parse('{"key":"v-87547130","path":"/zh/programBlog/ServerSideLanguage/Java/java114.html","title":"Java-Object","lang":"zh-CN","frontmatter":{"title":"Java-Object","icon":"page","order":114,"author":"涎涎","date":"2019-07-10T17:17:13.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java114.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-Object"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java114.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-Object"}],["meta",{"property":"og:description","content":"114-Java-Object.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 Object介绍及方法 Object类是所有类的超类， Object是Java语言中唯一一个没有父类的类。 一个类可以不是Object类的直接子类，但一定是Object类的子类，Java中的每一个类都是从Object扩展来的。 在Object类中定义的方法，在所有类中都可以使用。 public boolean equals(Object&nbsp;obj) 比较两个对象引用的值是否相等（比较哈希地址） public int hashCode() 返回十进制整数，唯一标识一个对象 public String toString() 返回 类名@hashcode Object类常用方法 public boolean equals(Object&nbsp;obj)： 比较两个对象引用的值是否相等（比较地址）。指出调用该方法的对象是否与obj对象相等。即地址是否相等。 public int hashCode()：该方法返回对象的哈希码，哈希码是一个代表对象的十六进制整数，比作对象的身份证号。在程序运行期间，每次调用同一个对象的hashCode()返回的哈希码必定相同，但是多次执行同一个程序，程序的一次执行和下一次执行期间同一个对象的哈希码不一定相同。实际上默认的哈希码是将对象的内存地址通过某种转换得到的，所以不同对象会有不同的哈希码。 public String toString()：返回 类名@hashcode ；事实上返回这样的字符串没有什么实际的意义。一般子类都会覆盖该方法，让它返回有意义的文本。 通常，子类会覆盖equals( )，改变它的含义，所以有的类中equals( )是比较地址，有的类中该方法就不比较地址，具体的，就看子类新定义的该方法的规定。看看包装类中的equals()方法？ 在java中有个规定：如果equals( )返回两个对象是相等的，那这两个对象上调用hashCode( )返回的整数必须相等。否则在使用Hash类型集合时就会产生错误。 所以在我们覆盖equals( )方法同时，还要记得覆盖hashCode( ）方法。需要说明，如果equals( )返回两个对象不等，它们的hashCode( )也可以返回相同的整数。但是最好让它们的hashCode( )返回不同的整数，这有利于提高Hash类型集合的性能。 重写equals方法时，一定要重写hashcode（）方法吗？ 先说说hashcode的调用的条件。 如果你想往map里面放一个类作为map的键值，这个类又是你自己设计的，或者这个类不是你写的但是你修改了这个类的equals方法，这个时候，你就要注意重写hashcode方法。 这样 当你往map里放值得时候，系统会调用这个对象的.hashcode()方法来生成相应的hash值，来映射相应的对象。 如果同一个类的两个对象的属性值相等，那么他们的hashcode一定相等吗 这个要看你具体如何实现你的hashcode，如果你希望他们的值一样hashcode也一样，你就可以这样实现。 但是hashcode的实现，一般要满足几个特征，比如 自反性，传递性什么的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-13T03:33:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-10T17:17:13.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-13T03:33:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-Object\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-10T17:17:13.000Z\\",\\"dateModified\\":\\"2023-06-13T03:33:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"114-Java-Object.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 Object介绍及方法 Object类是所有类的超类， Object是Java语言中唯一一个没有父类的类。 一个类可以不是Object类的直接子类，但一定是Object类的子类，Java中的每一个类都是从Object扩展来的。 在Object类中定义的方法，在所有类中都可以使用。 public boolean equals(Object&nbsp;obj) 比较两个对象引用的值是否相等（比较哈希地址） public int hashCode() 返回十进制整数，唯一标识一个对象 public String toString() 返回 类名@hashcode Object类常用方法 public boolean equals(Object&nbsp;obj)： 比较两个对象引用的值是否相等（比较地址）。指出调用该方法的对象是否与obj对象相等。即地址是否相等。 public int hashCode()：该方法返回对象的哈希码，哈希码是一个代表对象的十六进制整数，比作对象的身份证号。在程序运行期间，每次调用同一个对象的hashCode()返回的哈希码必定相同，但是多次执行同一个程序，程序的一次执行和下一次执行期间同一个对象的哈希码不一定相同。实际上默认的哈希码是将对象的内存地址通过某种转换得到的，所以不同对象会有不同的哈希码。 public String toString()：返回 类名@hashcode ；事实上返回这样的字符串没有什么实际的意义。一般子类都会覆盖该方法，让它返回有意义的文本。 通常，子类会覆盖equals( )，改变它的含义，所以有的类中equals( )是比较地址，有的类中该方法就不比较地址，具体的，就看子类新定义的该方法的规定。看看包装类中的equals()方法？ 在java中有个规定：如果equals( )返回两个对象是相等的，那这两个对象上调用hashCode( )返回的整数必须相等。否则在使用Hash类型集合时就会产生错误。 所以在我们覆盖equals( )方法同时，还要记得覆盖hashCode( ）方法。需要说明，如果equals( )返回两个对象不等，它们的hashCode( )也可以返回相同的整数。但是最好让它们的hashCode( )返回不同的整数，这有利于提高Hash类型集合的性能。 重写equals方法时，一定要重写hashcode（）方法吗？ 先说说hashcode的调用的条件。 如果你想往map里面放一个类作为map的键值，这个类又是你自己设计的，或者这个类不是你写的但是你修改了这个类的equals方法，这个时候，你就要注意重写hashcode方法。 这样 当你往map里放值得时候，系统会调用这个对象的.hashcode()方法来生成相应的hash值，来映射相应的对象。 如果同一个类的两个对象的属性值相等，那么他们的hashcode一定相等吗 这个要看你具体如何实现你的hashcode，如果你希望他们的值一样hashcode也一样，你就可以这样实现。 但是hashcode的实现，一般要满足几个特征，比如 自反性，传递性什么的。"},"headers":[{"level":3,"title":"拓展知识","slug":"拓展知识","link":"#拓展知识","children":[]},{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1686627231000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":9}]},"readingTime":{"minutes":5.91,"words":1772},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/114-Java-Object.md","localizedDate":"2019年7月10日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://114-Java-Object.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">114-Java-Object.md</a></h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<ul>\\n<li>Object介绍及方法\\n<ul>\\n<li>Object类是所有类的超类， Object是Java语言中唯一一个没有父类的类。</li>\\n<li>一个类可以不是Object类的直接子类，但一定是Object类的子类，Java中的每一个类都是从Object扩展来的。</li>\\n<li>在Object类中定义的方法，在所有类中都可以使用。</li>\\n<li>public boolean equals(Object&nbsp;obj)\\n<ul>\\n<li>比较两个对象引用的值是否相等（比较哈希地址）</li>\\n</ul>\\n</li>\\n<li>public int hashCode()\\n<ul>\\n<li>返回十进制整数，唯一标识一个对象</li>\\n</ul>\\n</li>\\n<li>public String toString()\\n<ul>\\n<li>返回  类名@hashcode</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>Object类常用方法\\n<ul>\\n<li>public boolean equals(Object&nbsp;obj)： 比较两个对象引用的值是否相等（比较地址）。指出调用该方法的对象是否与obj对象相等。即地址是否相等。</li>\\n<li>public int hashCode()：该方法返回对象的哈希码，哈希码是一个代表对象的十六进制整数，比作对象的身份证号。在程序运行期间，每次调用同一个对象的hashCode()返回的哈希码必定相同，但是多次执行同一个程序，程序的一次执行和下一次执行期间同一个对象的哈希码不一定相同。实际上默认的哈希码是将对象的内存地址通过某种转换得到的，所以不同对象会有不同的哈希码。</li>\\n<li>public String toString()：返回  类名@hashcode ；事实上返回这样的字符串没有什么实际的意义。一般子类都会覆盖该方法，让它返回有意义的文本。</li>\\n</ul>\\n</li>\\n<li>通常，子类会覆盖equals( )，改变它的含义，所以有的类中equals( )是比较地址，有的类中该方法就不比较地址，具体的，就看子类新定义的该方法的规定。看看包装类中的equals()方法？</li>\\n<li>在java中有个规定：如果equals( )返回两个对象是相等的，那这两个对象上调用hashCode( )返回的整数必须相等。否则在使用Hash类型集合时就会产生错误。</li>\\n<li>所以在我们覆盖equals( )方法同时，还要记得覆盖hashCode( ）方法。需要说明，如果equals( )返回两个对象不等，它们的hashCode( )也可以返回相同的整数。但是最好让它们的hashCode( )返回不同的整数，这有利于提高Hash类型集合的性能。</li>\\n<li>重写equals方法时，一定要重写hashcode（）方法吗？\\n<ul>\\n<li>先说说hashcode的调用的条件。 如果你想往map里面放一个类作为map的键值，这个类又是你自己设计的，或者这个类不是你写的但是你修改了这个类的equals方法，这个时候，你就要注意重写hashcode方法。 这样 当你往map里放值得时候，系统会调用这个对象的.hashcode()方法来生成相应的hash值，来映射相应的对象。 如果同一个类的两个对象的属性值相等，那么他们的hashcode一定相等吗 这个要看你具体如何实现你的hashcode，如果你希望他们的值一样hashcode也一样，你就可以这样实现。 但是hashcode的实现，一般要满足几个特征，比如 自反性，传递性什么的。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};