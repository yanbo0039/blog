import{_ as i,X as n,Y as e,a1 as a,a0 as t}from"./framework-68dd73a2.js";const s="/blog/assets/JavaScript_5_1.png",r="/blog/assets/JavaScript_5_2.png",l="/blog/assets/JavaScript_5_3.png",d={},c=t('<h1 id="javascript实践数据结构和算法——选择排序" tabindex="-1"><a class="header-anchor" href="#javascript实践数据结构和算法——选择排序" aria-hidden="true">#</a> JavaScript实践数据结构和算法——选择排序</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;选择排序&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
    var CArray = function () {
        this.dataStore = [1,8,3,2,9,5,4,7];
        this.swap = swap;
        this.selectSort = selectSort;
    }
    function swap(arr,index1,index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    function selectSort() {
        var min;
        for(var outer=0;outer&lt;this.dataStore.length-2;++outer){
            min = outer;
            for(var inner = outer+1;inner&lt;=this.dataStore.length-1;++inner){
                if(this.dataStore[inner]&lt;this.dataStore[min]){
                    min = inner;
                }
            }
            this.swap(this.dataStore,outer,min);
        }
    }
    var mynums = new CArray();
    mynums.selectSort(mynums);
    console.log(mynums.dataStore);
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到结果： <img src="`+l+'" alt="" loading="lazy"></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',10);function v(m,o){return n(),e("div",null,[a(" more "),c])}const b=i(d,[["render",v],["__file","javascript5.html.vue"]]);export{b as default};
