const t=JSON.parse('{"key":"v-b21f1cac","path":"/zh/programBlog/LittleBlogs/Css/2-Css-IE%E7%9B%92%E6%A8%A1%E5%9E%8B%E5%92%8C%E6%A0%87%E5%87%86%E7%9B%92%E6%A8%A1%E5%9E%8B.html","title":"Css-IE盒模型和标准盒模型","lang":"zh-CN","frontmatter":{"title":"Css-IE盒模型和标准盒模型","icon":"page","order":2,"author":"涎涎","date":"2019-06-16T21:10:31.000Z","isOriginal":true,"category":["Css"],"tag":["Css"],"head":[["meta",{"name":"keywords","content":"Css-IE盒模型和标准盒模型"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/LittleBlogs/Css/2-Css-IE%E7%9B%92%E6%A8%A1%E5%9E%8B%E5%92%8C%E6%A0%87%E5%87%86%E7%9B%92%E6%A8%A1%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Css-IE盒模型和标准盒模型"}],["meta",{"property":"og:description","content":"Css-IE盒模型和标准盒模型 最近无意刷咯一题。。算出IE盒模型所占的高度。。。果然。。。不知如何算。。。因为谁特么去关心IE。。。但是。。。基于是自已的错题情况下。。还是弄清楚为好。。 参考咯很多文章最后得出结论 标准盒模型 .box { width: 200px; height: 180px; border: 5px solid #666; margin: 10px; padding: 10px; } 那么，这个盒子需要占据的尺寸为， 宽度 = margin.left + border.left + padding.left + content.width + padding.right + border.right + margin.right = 10 + 5 + 10 + 200 + 10 + 5 + 10 = 300 高度 = margin.top + border.top + padding.top + content.height + padding.bottom + border.bottom + margin.bottom = 10 + 5 + 10 + 180 + 10 + 5 + 10 = 280 而盒子的实际大小为， 宽度 = border.left + padding.left + content.width + padding.right + border.right = 5 + 10 + 200 + 10 + 5 = 280 高度 = border.top + padding.top + content.height + padding.bottom + border.bottom = 5 + 10 + 180 + 10 + 5 = 260"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Css"}],["meta",{"property":"article:published_time","content":"2019-06-16T21:10:31.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Css-IE盒模型和标准盒模型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T21:10:31.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Css-IE盒模型和标准盒模型 最近无意刷咯一题。。算出IE盒模型所占的高度。。。果然。。。不知如何算。。。因为谁特么去关心IE。。。但是。。。基于是自已的错题情况下。。还是弄清楚为好。。 参考咯很多文章最后得出结论 标准盒模型 .box { width: 200px; height: 180px; border: 5px solid #666; margin: 10px; padding: 10px; } 那么，这个盒子需要占据的尺寸为， 宽度 = margin.left + border.left + padding.left + content.width + padding.right + border.right + margin.right = 10 + 5 + 10 + 200 + 10 + 5 + 10 = 300 高度 = margin.top + border.top + padding.top + content.height + padding.bottom + border.bottom + margin.bottom = 10 + 5 + 10 + 180 + 10 + 5 + 10 = 280 而盒子的实际大小为， 宽度 = border.left + padding.left + content.width + padding.right + border.right = 5 + 10 + 200 + 10 + 5 = 280 高度 = border.top + padding.top + content.height + padding.bottom + border.bottom = 5 + 10 + 180 + 10 + 5 = 260"},"headers":[{"level":3,"title":"标准盒模型","slug":"标准盒模型","link":"#标准盒模型","children":[]},{"level":3,"title":"IE盒模型","slug":"ie盒模型","link":"#ie盒模型","children":[]},{"level":3,"title":"结论","slug":"结论","link":"#结论","children":[]},{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":2.98,"words":893},"filePathRelative":"zh/programBlog/LittleBlogs/Css/2-Css-IE盒模型和标准盒模型.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Css-IE盒模型和标准盒模型</h1>\\n<p>最近无意刷咯一题。。算出IE盒模型所占的高度。。。果然。。。不知如何算。。。因为谁特么去关心IE。。。但是。。。基于是自已的错题情况下。。还是弄清楚为好。。</p>\\n<pre><code>参考咯很多文章最后得出结论 \\n</code></pre>\\n<h3> 标准盒模型</h3>\\n<pre><code>.box {\\n    width: 200px;\\n    height: 180px;\\n    border: 5px solid #666;\\n    margin: 10px;\\n    padding: 10px;\\n}\\n那么，这个盒子需要占据的尺寸为，\\n宽度 = margin.left + border.left + padding.left + content.width\\n+ padding.right + border.right + margin.right\\n= 10 + 5 + 10 + 200 + 10 + 5 + 10\\n= 300\\n高度 = margin.top + border.top + padding.top + content.height \\n+ padding.bottom + border.bottom + margin.bottom\\n= 10 + 5 + 10 + 180 + 10 + 5 + 10\\n= 280\\n而盒子的实际大小为，\\n宽度 = border.left + padding.left + content.width \\n+ padding.right + border.right\\n= 5 + 10 + 200 + 10 + 5\\n= 280\\n高度 = border.top + padding.top + content.height \\n+ padding.bottom + border.bottom\\n= 5 + 10 + 180 + 10 + 5\\n= 260\\n</code></pre>","autoDesc":true}');export{t as data};
