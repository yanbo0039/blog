const e=JSON.parse('{"key":"v-43134242","path":"/zh/programBlog/ServerSideLanguage/Kingdee/133-EAS-WEB%E8%AE%B0%E5%BD%95%E4%B8%80%E6%AC%A1%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E6%89%BEbug%E7%BB%8F%E5%8E%86-%E6%89%A7%E8%A1%8C%E8%84%9A%E6%9C%AC%E6%97%B6%E5%8F%91%E7%94%9F%E9%94%99%E8%AF%AF.html","title":"EAS-WEB记录一次有意思的找bug经历-执行脚本时发生错误","lang":"zh-CN","frontmatter":{"title":"EAS-WEB记录一次有意思的找bug经历-执行脚本时发生错误","icon":"page","order":133,"author":"涎涎","date":"2020-06-01T00:00:00.000Z","category":["Kingdee"],"tag":["Kingdee"],"head":[["meta",{"name":"keywords","content":"EAS-WEB记录一次有意思的找bug经历-执行脚本时发生错误"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Kingdee/133-EAS-WEB%E8%AE%B0%E5%BD%95%E4%B8%80%E6%AC%A1%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%E6%89%BEbug%E7%BB%8F%E5%8E%86-%E6%89%A7%E8%A1%8C%E8%84%9A%E6%9C%AC%E6%97%B6%E5%8F%91%E7%94%9F%E9%94%99%E8%AF%AF.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"EAS-WEB记录一次有意思的找bug经历-执行脚本时发生错误"}],["meta",{"property":"og:description","content":"133-EAS-WEB记录一次有意思的找bug经历-执行脚本时发生错误.md 故事背景 事情是这样子的，最近有在接盘我厂大佬的一EAS项目。但另一项目由于之前小伙伴跑路，暂无人维护，突然客户点点点发现有bug，于是乎项目经理一声令下，当当当当，我就闪亮登场了。。。好高兴。。。。额。。 ^^ ,突然接手一个不熟悉的项目，虽然有点小激动，但同时也存在其最大的问题，可能是一个很小的问题都会由于业务不熟悉，而导致花费大量的时间，调用大量的求助资源才有可能排查到这个问题。。。比如笔者这次就基本是这样子的。。。。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-15T10:10:00.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Kingdee"}],["meta",{"property":"article:published_time","content":"2020-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-15T10:10:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"EAS-WEB记录一次有意思的找bug经历-执行脚本时发生错误\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-15T10:10:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"133-EAS-WEB记录一次有意思的找bug经历-执行脚本时发生错误.md 故事背景 事情是这样子的，最近有在接盘我厂大佬的一EAS项目。但另一项目由于之前小伙伴跑路，暂无人维护，突然客户点点点发现有bug，于是乎项目经理一声令下，当当当当，我就闪亮登场了。。。好高兴。。。。额。。 ^^ ,突然接手一个不熟悉的项目，虽然有点小激动，但同时也存在其最大的问题，可能是一个很小的问题都会由于业务不熟悉，而导致花费大量的时间，调用大量的求助资源才有可能排查到这个问题。。。比如笔者这次就基本是这样子的。。。。"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684145400000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":1}]},"readingTime":{"minutes":6.7,"words":2009},"filePathRelative":"zh/programBlog/ServerSideLanguage/Kingdee/133-EAS-WEB记录一次有意思的找bug经历-执行脚本时发生错误.md","localizedDate":"2020年6月1日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--133-EAS-WEBbug--bf3x500evgbf25kljdg9foyi7oav10efegj0af59e147drpi318d93odk8c7mxa22b8z9l.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">133-EAS-WEB记录一次有意思的找bug经历-执行脚本时发生错误.md</a></h1>\\n<h4> 故事背景</h4>\\n<blockquote>\\n<p>事情是这样子的，最近有在接盘我厂大佬的一EAS项目。但另一项目由于之前小伙伴跑路，暂无人维护，突然客户点点点发现有bug，于是乎项目经理一声令下，当当当当，我就闪亮登场了。。。好高兴。。。。额。。 <em>^^</em> ,突然接手一个不熟悉的项目，虽然有点小激动，但同时也存在其最大的问题，可能是一个很小的问题都会由于业务不熟悉，而导致花费大量的时间，调用大量的求助资源才有可能排查到这个问题。。。比如笔者这次就基本是这样子的。。。。</p>\\n</blockquote>","autoDesc":true}');export{e as data};
