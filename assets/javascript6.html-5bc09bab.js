import{_ as n,X as e,Y as i,a1 as t,a0 as a}from"./framework-68dd73a2.js";const s={},r=a(`<h1 id="javascript实践数据结构和算法——插入排序" tabindex="-1"><a class="header-anchor" href="#javascript实践数据结构和算法——插入排序" aria-hidden="true">#</a> JavaScript实践数据结构和算法——插入排序</h1><p><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/JavaScript_6_1.png" alt="" loading="lazy"><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/JavaScript_6_2.gif" alt="" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;插入排序&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
    var CArray = function () {
        this.dataStore = [1,8,3,2,9,5,4,7];
        this.insertSort = insertSort;
    };
    function insertSort(arr,index1,index2) {
        var temp,inner;
        for(var outer = 1;outer&lt;this.dataStore.length;++outer){
            temp = this.dataStore[outer];
            inner = outer;
            while (inner&gt;0&amp;&amp;(this.dataStore[inner-1]&gt;=temp)){
                this.dataStore[inner] = this.dataStore[inner-1];
                console.log(&quot;内部数据&quot;,this.dataStore);
                inner--;
            }
            this.dataStore[inner] = temp;
            console.log(&quot;数据&quot;,this.dataStore);
        }
    }
    var mynums = new CArray();
    mynums.insertSort();
    console.log(mynums.dataStore);
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到结果： <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/JavaScript_6_3.png" alt="" loading="lazy"></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,8);function l(d,c){return e(),i("div",null,[t(" more "),r])}const o=n(s,[["render",l],["__file","javascript6.html.vue"]]);export{o as default};
