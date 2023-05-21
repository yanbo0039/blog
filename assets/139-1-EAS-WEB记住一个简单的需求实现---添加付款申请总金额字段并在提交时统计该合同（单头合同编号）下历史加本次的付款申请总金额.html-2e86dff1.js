const E=JSON.parse('{"key":"v-e7b31cc2","path":"/zh/programBlog/ServerSideLanguage/Kingdee/139-1-EAS-WEB%E8%AE%B0%E4%BD%8F%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E9%9C%80%E6%B1%82%E5%AE%9E%E7%8E%B0---%E6%B7%BB%E5%8A%A0%E4%BB%98%E6%AC%BE%E7%94%B3%E8%AF%B7%E6%80%BB%E9%87%91%E9%A2%9D%E5%AD%97%E6%AE%B5%E5%B9%B6%E5%9C%A8%E6%8F%90%E4%BA%A4%E6%97%B6%E7%BB%9F%E8%AE%A1%E8%AF%A5%E5%90%88%E5%90%8C%EF%BC%88%E5%8D%95%E5%A4%B4%E5%90%88%E5%90%8C%E7%BC%96%E5%8F%B7%EF%BC%89%E4%B8%8B%E5%8E%86%E5%8F%B2%E5%8A%A0%E6%9C%AC%E6%AC%A1%E7%9A%84%E4%BB%98%E6%AC%BE%E7%94%B3%E8%AF%B7%E6%80%BB%E9%87%91%E9%A2%9D.html","title":"EAS-WEB记住一个简单的需求实现---添加付款申请总金额字段并在提交时统计该合同（单头合同编号）下历史加本次的付款申请总金额","lang":"zh-CN","frontmatter":{"title":"EAS-WEB记住一个简单的需求实现---添加付款申请总金额字段并在提交时统计该合同（单头合同编号）下历史加本次的付款申请总金额","icon":"page","order":139,"author":"涎涎","date":"2020-06-08T21:53:53.000Z","isOriginal":true,"category":["Kingdee"],"tag":["Kingdee"],"head":[["meta",{"name":"keywords","content":"EAS-WEB记住一个简单的需求实现---添加付款申请总金额字段并在提交时统计该合同（单头合同编号）下历史加本次的付款申请总金额"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Kingdee/139-1-EAS-WEB%E8%AE%B0%E4%BD%8F%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E9%9C%80%E6%B1%82%E5%AE%9E%E7%8E%B0---%E6%B7%BB%E5%8A%A0%E4%BB%98%E6%AC%BE%E7%94%B3%E8%AF%B7%E6%80%BB%E9%87%91%E9%A2%9D%E5%AD%97%E6%AE%B5%E5%B9%B6%E5%9C%A8%E6%8F%90%E4%BA%A4%E6%97%B6%E7%BB%9F%E8%AE%A1%E8%AF%A5%E5%90%88%E5%90%8C%EF%BC%88%E5%8D%95%E5%A4%B4%E5%90%88%E5%90%8C%E7%BC%96%E5%8F%B7%EF%BC%89%E4%B8%8B%E5%8E%86%E5%8F%B2%E5%8A%A0%E6%9C%AC%E6%AC%A1%E7%9A%84%E4%BB%98%E6%AC%BE%E7%94%B3%E8%AF%B7%E6%80%BB%E9%87%91%E9%A2%9D.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"EAS-WEB记住一个简单的需求实现---添加付款申请总金额字段并在提交时统计该合同（单头合同编号）下历史加本次的付款申请总金额"}],["meta",{"property":"og:description","content":"139-EAS-WEB记住一个简单的需求实现---添加付款申请总金额字段并在提交时统计该合同（单头合同编号）下历史加本次的付款申请总金额.md 需求 最近拉到一个需求：合同管理下付款申请单添加“付款申请总金额”字段。逻辑是：单据提交时，统计该合同（单头合同编号）下历史加本次的付款申请总金额。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Kingdee"}],["meta",{"property":"article:published_time","content":"2020-06-08T21:53:53.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"EAS-WEB记住一个简单的需求实现---添加付款申请总金额字段并在提交时统计该合同（单头合同编号）下历史加本次的付款申请总金额\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-08T21:53:53.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"139-EAS-WEB记住一个简单的需求实现---添加付款申请总金额字段并在提交时统计该合同（单头合同编号）下历史加本次的付款申请总金额.md 需求 最近拉到一个需求：合同管理下付款申请单添加“付款申请总金额”字段。逻辑是：单据提交时，统计该合同（单头合同编号）下历史加本次的付款申请总金额。"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":0.86,"words":259},"filePathRelative":"zh/programBlog/ServerSideLanguage/Kingdee/139-1-EAS-WEB记住一个简单的需求实现---添加付款申请总金额字段并在提交时统计该合同（单头合同编号）下历史加本次的付款申请总金额.md","localizedDate":"2020年6月8日","excerpt":"<!-- more -->\\n<h1> 139-EAS-WEB记住一个简单的需求实现---添加付款申请总金额字段并在提交时统计该合同（单头合同编号）<a href=\\"http://xn--ghq6sx4gj0appy30dm9ktvhrhk42g3jdz82gp5p9nw.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">下历史加本次的付款申请总金额.md</a></h1>\\n<h4> 需求</h4>\\n<blockquote>\\n<p>最近拉到一个需求：合同管理下付款申请单添加“付款申请总金额”字段。逻辑是：单据提交时，统计该合同（单头合同编号）下历史加本次的付款申请总金额。</p>\\n</blockquote>","autoDesc":true}');export{E as data};
