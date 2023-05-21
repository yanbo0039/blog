const t=JSON.parse('{"key":"v-b9951c88","path":"/zh/programBlog/LittleBlogs/JavaScript/7-JavaScript%E5%AE%9E%E8%B7%B5%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%AE%97%E6%B3%95%E2%80%94%E2%80%94%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F.html","title":"JavaScript实践数据结构和算法——希尔排序","lang":"zh-CN","frontmatter":{"title":"JavaScript实践数据结构和算法——希尔排序","icon":"page","order":7,"author":"涎涎","date":"2019-06-16T20:45:53.000Z","isOriginal":true,"category":["JavaScript"],"tag":["JavaScript"],"head":[["meta",{"name":"keywords","content":"JavaScript实践数据结构和算法——希尔排序"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/LittleBlogs/JavaScript/7-JavaScript%E5%AE%9E%E8%B7%B5%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%AE%97%E6%B3%95%E2%80%94%E2%80%94%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"JavaScript实践数据结构和算法——希尔排序"}],["meta",{"property":"og:description","content":"JavaScript实践数据结构和算法——希尔排序 &lt;!DOCTYPE html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;meta charset=\\"UTF-8\\"&gt; &lt;title&gt;希尔排序&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;script&gt; var CArray = function () { this.dataStore = [10,8,3,2,5,9,4,7,35,47,20]; this.shellsort = shellsort; this.gaps = [5,3,1]; this.swap = swap; this.dynamiSort = dynamiSort; }; function shellsort(arr,index1,index2) { for(var g = 0;g&lt;this.gaps.length;g++){ for(var i = this.gaps[g];i&lt;this.dataStore.length;i++){ var temp = this.dataStore[i]; for(var j=i;j&gt;=this.gaps[g]&amp;&amp;this.dataStore[j-this.gaps[g]]&gt;temp;j-=this.gaps[g]){ this.dataStore[j] = this.dataStore[j-this.gaps[g]]; } this.dataStore[j] = temp; } console.log(\\"调换后\\",this.dataStore); } } //交换数组 function swap(arr,index1,index2) { var temp = arr[index1]; arr[index1] = arr[index2]; arr[index2] = temp; } function dynamiSort() { var N = this.dataStore.length; var h = 1; while (h&lt;N/3){ h =3*h+1; } while (h&gt;=1){ for(var i = h;i&lt;N;i++){ for(var j = i;j&gt;=h &amp;&amp; this.dataStore[j]&lt;this.dataStore[j-h];j=j-h){ this.swap(this.dataStore,j,j-h); } } h = (h-1)/3; } } var mynums = new CArray(); // mynums.shellsort(); mynums.dynamiSort(); console.info(mynums.dataStore); &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2019-06-16T20:45:53.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript实践数据结构和算法——希尔排序\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T20:45:53.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"JavaScript实践数据结构和算法——希尔排序 &lt;!DOCTYPE html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;meta charset=\\"UTF-8\\"&gt; &lt;title&gt;希尔排序&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;script&gt; var CArray = function () { this.dataStore = [10,8,3,2,5,9,4,7,35,47,20]; this.shellsort = shellsort; this.gaps = [5,3,1]; this.swap = swap; this.dynamiSort = dynamiSort; }; function shellsort(arr,index1,index2) { for(var g = 0;g&lt;this.gaps.length;g++){ for(var i = this.gaps[g];i&lt;this.dataStore.length;i++){ var temp = this.dataStore[i]; for(var j=i;j&gt;=this.gaps[g]&amp;&amp;this.dataStore[j-this.gaps[g]]&gt;temp;j-=this.gaps[g]){ this.dataStore[j] = this.dataStore[j-this.gaps[g]]; } this.dataStore[j] = temp; } console.log(\\"调换后\\",this.dataStore); } } //交换数组 function swap(arr,index1,index2) { var temp = arr[index1]; arr[index1] = arr[index2]; arr[index2] = temp; } function dynamiSort() { var N = this.dataStore.length; var h = 1; while (h&lt;N/3){ h =3*h+1; } while (h&gt;=1){ for(var i = h;i&lt;N;i++){ for(var j = i;j&gt;=h &amp;&amp; this.dataStore[j]&lt;this.dataStore[j-h];j=j-h){ this.swap(this.dataStore,j,j-h); } } h = (h-1)/3; } } var mynums = new CArray(); // mynums.shellsort(); mynums.dynamiSort(); console.info(mynums.dataStore); &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":1.12,"words":337},"filePathRelative":"zh/programBlog/LittleBlogs/JavaScript/7-JavaScript实践数据结构和算法——希尔排序.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> JavaScript实践数据结构和算法——希尔排序</h1>\\n<p><img src=\\"/assets/JavaScript_7_1.png\\" alt=\\"\\" loading=\\"lazy\\">\\n<img src=\\"/assets/JavaScript_7_1.gif\\" alt=\\"\\" loading=\\"lazy\\"></p>\\n<figure><img src=\\"/assets/JavaScript_7_2.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>&lt;!DOCTYPE html&gt;\\n&lt;html lang=\\"en\\"&gt;\\n&lt;head&gt;\\n    &lt;meta charset=\\"UTF-8\\"&gt;\\n    &lt;title&gt;希尔排序&lt;/title&gt;\\n&lt;/head&gt;\\n&lt;body&gt;\\n&lt;script&gt;\\n    var CArray = function () {\\n        this.dataStore = [10,8,3,2,5,9,4,7,35,47,20];\\n        this.shellsort = shellsort;\\n        this.gaps = [5,3,1];\\n        this.swap = swap;\\n        this.dynamiSort = dynamiSort;\\n    };\\n    function shellsort(arr,index1,index2) {\\n        for(var g = 0;g&lt;this.gaps.length;g++){\\n            for(var i = this.gaps[g];i&lt;this.dataStore.length;i++){\\n                var temp = this.dataStore[i];\\n                for(var j=i;j&gt;=this.gaps[g]&amp;&amp;this.dataStore[j-this.gaps[g]]&gt;temp;j-=this.gaps[g]){\\n                    this.dataStore[j] = this.dataStore[j-this.gaps[g]];\\n                }\\n                this.dataStore[j] = temp;\\n            }\\n            console.log(\\"调换后\\",this.dataStore);\\n        }\\n    }\\n    //交换数组\\n    function swap(arr,index1,index2) {\\n        var temp = arr[index1];\\n        arr[index1] = arr[index2];\\n        arr[index2] = temp;\\n    }\\n    function dynamiSort() {\\n        var N = this.dataStore.length;\\n        var h = 1;\\n        while (h&lt;N/3){\\n            h =3*h+1;\\n        }\\n        while (h&gt;=1){\\n            for(var i = h;i&lt;N;i++){\\n                for(var j = i;j&gt;=h &amp;&amp; this.dataStore[j]&lt;this.dataStore[j-h];j=j-h){\\n                    this.swap(this.dataStore,j,j-h);\\n                }\\n            }\\n            h = (h-1)/3;\\n        }\\n    }\\n    var mynums = new CArray();\\n    // mynums.shellsort();\\n    mynums.dynamiSort();\\n    console.info(mynums.dataStore);\\n&lt;/script&gt;\\n&lt;/body&gt;\\n&lt;/html&gt;\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
