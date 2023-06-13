const e=JSON.parse('{"key":"v-05e49da2","path":"/zh/programBlog/ServerSideLanguage/Kingdee/kingdee127.html","title":"EAS如何实现导入多页签的Excel功能？","lang":"zh-CN","frontmatter":{"title":"EAS如何实现导入多页签的Excel功能？","icon":"page","order":127,"author":"涎涎","date":"2020-05-26T17:16:14.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Kingdee/kingdee127.html","category":["Kingdee"],"tag":["Kingdee"],"head":[["meta",{"name":"keywords","content":"EAS如何实现导入多页签的Excel功能？"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Kingdee/kingdee127.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"EAS如何实现导入多页签的Excel功能？"}],["meta",{"property":"og:description","content":"127-EAS中如何实现导入多页签的Excel功能？.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 需求场景 最近项目中有遇到需要在EAS中实现导入的功能，但是是多页签Excel导入，由于Eas中标准不支持多页签的导入，那么此刻需求来了，EAS中如何实现导入多页签的Excel功能呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-13T03:33:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Kingdee"}],["meta",{"property":"article:published_time","content":"2020-05-26T17:16:14.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-13T03:33:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"EAS如何实现导入多页签的Excel功能？\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-26T17:16:14.000Z\\",\\"dateModified\\":\\"2023-06-13T03:33:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"127-EAS中如何实现导入多页签的Excel功能？.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 需求场景 最近项目中有遇到需要在EAS中实现导入的功能，但是是多页签Excel导入，由于Eas中标准不支持多页签的导入，那么此刻需求来了，EAS中如何实现导入多页签的Excel功能呢？"},"headers":[{"level":3,"title":"需求场景","slug":"需求场景","link":"#需求场景","children":[]},{"level":3,"title":"实现思路","slug":"实现思路","link":"#实现思路","children":[]},{"level":3,"title":"实现步骤","slug":"实现步骤","link":"#实现步骤","children":[]},{"level":3,"title":"禁用标准的导入弹出框","slug":"禁用标准的导入弹出框","link":"#禁用标准的导入弹出框","children":[]},{"level":3,"title":"画出点击导入出弹的自定义弹出框","slug":"画出点击导入出弹的自定义弹出框","link":"#画出点击导入出弹的自定义弹出框","children":[]},{"level":3,"title":"自定义导入的Excel模板并放入对应的路径","slug":"自定义导入的excel模板并放入对应的路径","link":"#自定义导入的excel模板并放入对应的路径","children":[]},{"level":3,"title":"编码实现对应的功能","slug":"编码实现对应的功能","link":"#编码实现对应的功能","children":[]},{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1686627231000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":9}]},"readingTime":{"minutes":14.58,"words":4375},"filePathRelative":"zh/programBlog/ServerSideLanguage/Kingdee/127-EAS如何实现导入多页签的Excel功能？.md","localizedDate":"2020年5月26日","excerpt":"<!-- more -->\\n<h1> 127-EAS中如何实现导入多页签的Excel功能？.md</h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<h3> 需求场景</h3>\\n<blockquote>\\n<p>最近项目中有遇到需要在EAS中实现导入的功能，但是是多页签Excel导入，由于Eas中标准不支持多页签的导入，那么此刻需求来了，EAS中如何实现导入多页签的Excel功能呢？</p>\\n</blockquote>","autoDesc":true}');export{e as data};