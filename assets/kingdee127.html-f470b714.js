const e=JSON.parse('{"key":"v-05e49da2","path":"/zh/programBlog/ServerSideLanguage/Kingdee/kingdee127.html","title":"EAS如何实现导入多页签的Excel功能？","lang":"zh-CN","frontmatter":{"title":"EAS如何实现导入多页签的Excel功能？","icon":"page","order":127,"author":"涎涎","date":"2020-05-26T17:16:14.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Kingdee/kingdee127.html","category":["Kingdee"],"tag":["Kingdee"],"head":[["meta",{"name":"keywords","content":"EAS如何实现导入多页签的Excel功能？"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Kingdee/kingdee127.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"EAS如何实现导入多页签的Excel功能？"}],["meta",{"property":"og:description","content":"127-EAS中如何实现导入多页签的Excel功能？.md 需求场景 最近项目中有遇到需要在EAS中实现导入的功能，但是是多页签Excel导入，由于Eas中标准不支持多页签的导入，那么此刻需求来了，EAS中如何实现导入多页签的Excel功能呢？ 实现思路 禁用标准的导入弹出框 自定义导入模板 编码读取Excel数据 过滤以判断数据的合法性，不合法则给出提示 数据通过校验则存入数据库，不通过则给出提示并中断导入"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-30T04:53:46.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Kingdee"}],["meta",{"property":"article:published_time","content":"2020-05-26T17:16:14.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-30T04:53:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"EAS如何实现导入多页签的Excel功能？\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-26T17:16:14.000Z\\",\\"dateModified\\":\\"2023-05-30T04:53:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"127-EAS中如何实现导入多页签的Excel功能？.md 需求场景 最近项目中有遇到需要在EAS中实现导入的功能，但是是多页签Excel导入，由于Eas中标准不支持多页签的导入，那么此刻需求来了，EAS中如何实现导入多页签的Excel功能呢？ 实现思路 禁用标准的导入弹出框 自定义导入模板 编码读取Excel数据 过滤以判断数据的合法性，不合法则给出提示 数据通过校验则存入数据库，不通过则给出提示并中断导入"},"headers":[],"git":{"createdTime":1684701424000,"updatedTime":1685422426000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":4}]},"readingTime":{"minutes":14.66,"words":4399},"filePathRelative":"zh/programBlog/ServerSideLanguage/Kingdee/127-EAS如何实现导入多页签的Excel功能？.md","localizedDate":"2020年5月26日","excerpt":"<!-- more -->\\n<h1> 127-EAS中如何实现导入多页签的Excel功能？.md</h1>\\n<h4> 需求场景</h4>\\n<blockquote>\\n<p>最近项目中有遇到需要在EAS中实现导入的功能，但是是多页签Excel导入，由于Eas中标准不支持多页签的导入，那么此刻需求来了，EAS中如何实现导入多页签的Excel功能呢？</p>\\n</blockquote>\\n<h4> 实现思路</h4>\\n<ol>\\n<li>\\n<p>禁用标准的导入弹出框</p>\\n</li>\\n<li>\\n<p>自定义导入模板</p>\\n</li>\\n<li>\\n<p>编码读取Excel数据</p>\\n</li>\\n<li>\\n<p>过滤以判断数据的合法性，不合法则给出提示</p>\\n</li>\\n<li>\\n<p>数据通过校验则存入数据库，不通过则给出提示并中断导入</p>\\n</li>\\n</ol>","autoDesc":true}');export{e as data};
