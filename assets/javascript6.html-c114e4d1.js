import{_ as i,X as n,Y as e,a1 as t,a0 as a}from"./framework-68dd73a2.js";const s="/blog/assets/JavaScript_6_1.png",r="/blog/assets/JavaScript_6_2.gif",l="/blog/assets/JavaScript_6_3.png",d={},c=a('<h1 id="javascript实践数据结构和算法——插入排序" tabindex="-1"><a class="header-anchor" href="#javascript实践数据结构和算法——插入排序" aria-hidden="true">#</a> JavaScript实践数据结构和算法——插入排序</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p><img src="'+s+'" alt="" loading="lazy"><img src="'+r+`" alt="" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>得到结果：</li></ul><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>JavaScript实践数据结构和算法——插入排序</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',10);function v(o,m){return n(),e("div",null,[t(" more "),c])}const b=i(d,[["render",v],["__file","javascript6.html.vue"]]);export{b as default};
