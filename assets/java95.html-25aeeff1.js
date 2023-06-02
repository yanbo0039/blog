const e=JSON.parse('{"key":"v-773aba8c","path":"/zh/programBlog/ServerSideLanguage/Java/java95.html","title":"Java-权限访问操作符","lang":"zh-CN","frontmatter":{"title":"Java-权限访问操作符","icon":"page","order":95,"author":"涎涎","date":"2019-07-05T14:26:04.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java95.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-权限访问操作符"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java95.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-权限访问操作符"}],["meta",{"property":"og:description","content":"95-Java-权限访问操作符.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 使用访问权限修饰符对类的成员进行控制，在java中称为“封装”。 不过不要把封装理解为private，不要误认为不能访问成员才是封装。实际上对成员访问权限的任何控制（包括public）都可以称为封装机制。 构造器和类的权限通常为public； private权限最小，限制类外访问，一般把属性设为private，让其他类不能直接访问属性，达到保护属性的目的； friendly是默认权限，即不使用权限修饰符时，即为friendly，该权限声明的成员在类内以及在同一个包中的其他类可以访问； 而protected所修饰的成员在类内、同一个包中、所在类的子类中都可以访问。 public &gt; protected &gt; friendly &gt; private 封装 信息隐藏,隐藏对象的实现细节，不让用户看到 将东西包装在一起，然后以新的完整形式呈现出来 例如，两种或多种化学药品组成一个胶囊 将方法和属性一起包装到一个单元中，单元以类的形式实现"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-02T09:56:49.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-05T14:26:04.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-02T09:56:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-权限访问操作符\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-05T14:26:04.000Z\\",\\"dateModified\\":\\"2023-06-02T09:56:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"95-Java-权限访问操作符.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 使用访问权限修饰符对类的成员进行控制，在java中称为“封装”。 不过不要把封装理解为private，不要误认为不能访问成员才是封装。实际上对成员访问权限的任何控制（包括public）都可以称为封装机制。 构造器和类的权限通常为public； private权限最小，限制类外访问，一般把属性设为private，让其他类不能直接访问属性，达到保护属性的目的； friendly是默认权限，即不使用权限修饰符时，即为friendly，该权限声明的成员在类内以及在同一个包中的其他类可以访问； 而protected所修饰的成员在类内、同一个包中、所在类的子类中都可以访问。 public &gt; protected &gt; friendly &gt; private 封装 信息隐藏,隐藏对象的实现细节，不让用户看到 将东西包装在一起，然后以新的完整形式呈现出来 例如，两种或多种化学药品组成一个胶囊 将方法和属性一起包装到一个单元中，单元以类的形式实现"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685699809000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":7}]},"readingTime":{"minutes":2.63,"words":790},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/95-Java-权限访问操作符.md","localizedDate":"2019年7月5日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--95-Java--pl2mt48o8wft30eed5b213a7gb.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">95-Java-权限访问操作符.md</a></h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<ul>\\n<li>\\n<p>使用访问权限修饰符对类的成员进行控制，在java中称为“封装”。</p>\\n</li>\\n<li>\\n<p>不过不要把封装理解为private，不要误认为不能访问成员才是封装。实际上对成员访问权限的任何控制（包括public）都可以称为封装机制。</p>\\n</li>\\n<li>\\n<p><strong>构造器和类的权限通常为public；</strong></p>\\n</li>\\n<li>\\n<p><strong>private权限最小，限制类外访问，一般把属性设为private，让其他类不能直接访问属性，达到保护属性的目的；</strong></p>\\n</li>\\n<li>\\n<p><strong>friendly是默认权限，即不使用权限修饰符时，即为friendly，该权限声明的成员在类内以及在同一个包中的其他类可以访问；</strong></p>\\n</li>\\n<li>\\n<p><strong>而protected所修饰的成员在类内、同一个包中、所在类的子类中都可以访问。</strong></p>\\n</li>\\n<li>\\n<p>public &gt; protected &gt; friendly &gt; private</p>\\n</li>\\n<li>\\n<p>封装</p>\\n<ul>\\n<li>信息隐藏,隐藏对象的实现细节，不让用户看到</li>\\n<li>将东西包装在一起，然后以新的完整形式呈现出来\\n<ul>\\n<li>例如，两种或多种化学药品组成一个胶囊</li>\\n<li>将方法和属性一起包装到一个单元中，单元以类的形式实现</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
