const t=JSON.parse('{"key":"v-fec0dc60","path":"/zh/javascript4/","title":"JavaScript实践数据结构和算法——冒泡排序","lang":"zh-CN","frontmatter":{"title":"JavaScript实践数据结构和算法——冒泡排序","icon":"page","order":4,"author":"涎涎","date":"2019-06-16T20:43:27.000Z","isOriginal":true,"permalinkPattern":"javascript4","category":["JavaScript"],"tag":["JavaScript"],"head":[["meta",{"name":"keywords","content":"JavaScript实践数据结构和算法——冒泡排序"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/javascript4/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"JavaScript实践数据结构和算法——冒泡排序"}],["meta",{"property":"og:description","content":"JavaScript实践数据结构和算法——冒泡排序 &lt;!DOCTYPE html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;meta charset=\\"UTF-8\\"&gt; &lt;title&gt;冒泡排序&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;script&gt; var CArray = function () { this.dataStore = [10,8,3,2,9,4,5,7]; this.swap = swap; this.bubbleSort = bubbleSort; } function swap(arr,index1,index2) { var temp = arr[index1]; arr[index1] = arr[index2]; arr[index2] = temp; } function bubbleSort() { var data = this.dataStore; numElements = data.length; for(var outer = numElements;outer&gt;=2;--outer){ for(var inner = 0;inner&lt;=outer-1;inner++){ if(data[inner]&gt;data[inner+1]){ this.swap(this.dataStore,inner,inner+1) } } } } var mynums = new CArray(); mynums.bubbleSort(mynums); console.log(mynums.dataStore); &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2019-06-16T20:43:27.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript实践数据结构和算法——冒泡排序\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T20:43:27.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"JavaScript实践数据结构和算法——冒泡排序 &lt;!DOCTYPE html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;meta charset=\\"UTF-8\\"&gt; &lt;title&gt;冒泡排序&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;script&gt; var CArray = function () { this.dataStore = [10,8,3,2,9,4,5,7]; this.swap = swap; this.bubbleSort = bubbleSort; } function swap(arr,index1,index2) { var temp = arr[index1]; arr[index1] = arr[index2]; arr[index2] = temp; } function bubbleSort() { var data = this.dataStore; numElements = data.length; for(var outer = numElements;outer&gt;=2;--outer){ for(var inner = 0;inner&lt;=outer-1;inner++){ if(data[inner]&gt;data[inner+1]){ this.swap(this.dataStore,inner,inner+1) } } } } var mynums = new CArray(); mynums.bubbleSort(mynums); console.log(mynums.dataStore); &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":0.85,"words":255},"filePathRelative":"zh/programBlog/LittleBlogs/JavaScript/4-JavaScript实践数据结构和算法——冒泡排序.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> JavaScript实践数据结构和算法——冒泡排序</h1>\\n<figure><img src=\\"/assets/JavaScript_4_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<figure><img src=\\"/assets/JavaScript_4_2.gif\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>&lt;!DOCTYPE html&gt;\\n&lt;html lang=\\"en\\"&gt;\\n&lt;head&gt;\\n    &lt;meta charset=\\"UTF-8\\"&gt;\\n    &lt;title&gt;冒泡排序&lt;/title&gt;\\n&lt;/head&gt;\\n&lt;body&gt;\\n&lt;script&gt;\\n    var CArray = function () {\\n        this.dataStore = [10,8,3,2,9,4,5,7];\\n        this.swap = swap;\\n        this.bubbleSort = bubbleSort;\\n    }\\n    function swap(arr,index1,index2) {\\n        var temp = arr[index1];\\n        arr[index1] = arr[index2];\\n        arr[index2] = temp;\\n    }\\n    function bubbleSort() {\\n        var data = this.dataStore;\\n        numElements = data.length;\\n        for(var outer = numElements;outer&gt;=2;--outer){\\n            for(var inner = 0;inner&lt;=outer-1;inner++){\\n                if(data[inner]&gt;data[inner+1]){\\n                    this.swap(this.dataStore,inner,inner+1)\\n                }\\n            }\\n        }\\n    }\\n    var mynums = new CArray();\\n    mynums.bubbleSort(mynums);\\n    console.log(mynums.dataStore);\\n&lt;/script&gt;\\n&lt;/body&gt;\\n&lt;/html&gt;\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};