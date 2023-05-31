import{_ as i,X as n,Y as e,a1 as s,a0 as a}from"./framework-68dd73a2.js";const l="/blog/assets/JavaScript_7_1.png",t="/blog/assets/JavaScript_7_1.gif",d="/blog/assets/JavaScript_7_2.png",r="/blog/assets/JavaScript_7_3.png",v={},c=a('<h1 id="javascript实践数据结构和算法——希尔排序" tabindex="-1"><a class="header-anchor" href="#javascript实践数据结构和算法——希尔排序" aria-hidden="true">#</a> JavaScript实践数据结构和算法——希尔排序</h1><p><img src="'+l+'" alt="" loading="lazy"><img src="'+t+'" alt="" loading="lazy"></p><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;希尔排序&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
    var CArray = function () {
        this.dataStore = [10,8,3,2,5,9,4,7,35,47,20];
        this.shellsort = shellsort;
        this.gaps = [5,3,1];
        this.swap = swap;
        this.dynamiSort = dynamiSort;
    };
    function shellsort(arr,index1,index2) {
        for(var g = 0;g&lt;this.gaps.length;g++){
            for(var i = this.gaps[g];i&lt;this.dataStore.length;i++){
                var temp = this.dataStore[i];
                for(var j=i;j&gt;=this.gaps[g]&amp;&amp;this.dataStore[j-this.gaps[g]]&gt;temp;j-=this.gaps[g]){
                    this.dataStore[j] = this.dataStore[j-this.gaps[g]];
                }
                this.dataStore[j] = temp;
            }
            console.log(&quot;调换后&quot;,this.dataStore);
        }
    }
    //交换数组
    function swap(arr,index1,index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    function dynamiSort() {
        var N = this.dataStore.length;
        var h = 1;
        while (h&lt;N/3){
            h =3*h+1;
        }
        while (h&gt;=1){
            for(var i = h;i&lt;N;i++){
                for(var j = i;j&gt;=h &amp;&amp; this.dataStore[j]&lt;this.dataStore[j-h];j=j-h){
                    this.swap(this.dataStore,j,j-h);
                }
            }
            h = (h-1)/3;
        }
    }
    var mynums = new CArray();
    // mynums.shellsort();
    mynums.dynamiSort();
    console.info(mynums.dataStore);
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到结果： <img src="`+r+'" alt="" loading="lazy"></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',9);function m(o,u){return n(),e("div",null,[s(" more "),c])}const b=i(v,[["render",m],["__file","javascript7.html.vue"]]);export{b as default};
