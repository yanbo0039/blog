import{_ as i,X as n,Y as e,a1 as r,a0 as l}from"./framework-68dd73a2.js";const t={},s=l(`<h1 id="javascript实践数据结构和算法——归并排序" tabindex="-1"><a class="header-anchor" href="#javascript实践数据结构和算法——归并排序" aria-hidden="true">#</a> JavaScript实践数据结构和算法——归并排序</h1><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/JavaScript_8_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/JavaScript_8_1.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;归并排序&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
    function mergeSort(arr) {
        if(arr.length&lt;2){
            return
        }
        var step = 1;
        var left,right;
        while (step&lt;arr.length){
            left = 0;
            right = step;
            while (right+step&lt;=arr.length){
                mergeArrays(arr,left,left+step,right,right+step);
                left = right + step;
                right = left + step;
            }
            if(right&lt;arr.length){
                mergeArrays(arr,left,left+step,right,arr.length);
            }
            step *= 2;
        }
    }
    function mergeArrays(arr,startLeft,stopLeft,startRight,stopRight) {
        var rightArr = new Array(stopRight - startRight + 1);
        var leftArr = new Array(stopLeft - startLeft +1);
        k = startRight;
        for(var i = 0;i&lt;(rightArr.length - 1);i++){
            rightArr[i] = arr[k];
            ++k;
        }
        k = startLeft;
        for(var i=0;i&lt;(leftArr.length-1);i++){
            leftArr[i] = arr[k];
            ++k;
        }
        rightArr[rightArr.length-1] = Infinity;
        leftArr[leftArr.length-1] = Infinity;
        var m = 0;
        var n = 0;
        for(var k = startLeft;k&lt;stopRight;k++){
            if(leftArr[m]&lt;=rightArr[n]){
                arr[k] = leftArr[m];
                m++;
            }else {
                arr[k] = rightArr[n];
                n++;
            }
        }

    }
    var arr = [23,45,19,98,32,67,12,3,9];
    mergeSort(arr);
    console.log(arr);
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到结果：</p><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/JavaScript_8_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,10);function a(d,v){return n(),e("div",null,[r(" more "),s])}const m=i(t,[["render",a],["__file","javascript8.html.vue"]]);export{m as default};
