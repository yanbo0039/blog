import{_ as i,X as n,Y as e,a1 as d,a0 as a}from"./framework-68dd73a2.js";const s="/blog/assets/bank_7_1.png",l="/blog/assets/bank_7_2.png",r={},c=a(`<h1 id="七彩神龙" tabindex="-1"><a class="header-anchor" href="#七彩神龙" aria-hidden="true">#</a> 七彩神龙</h1><h4 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h4><div class="language-tn6 line-numbers-mode" data-ext="tn6"><pre class="language-tn6"><code>M:=13;N:=30;
A01:=(C+O+L+H)/4;

A02:=(WINNER((A01 * 1.04)) * 100.000);

A03:=(WINNER((A01 * 0.96)) * 100.000);

A04:A03,NODRAW;
A08:A02-A03,NODRAW;

A06:( 100.000 - A02),NODRAW;
STICKLINE( 1.000,0,A04, 2,0),
COLORRED;
STICKLINE( 1.000, 100.000,A02, 2,0),
COLORGREEN;
STICKLINE( 1.000,A04,(100-A06), 2,0),
COLORYELLOW;
A0A:=(((((HHV(A04, 15.000) - A03) / A03) * 100.000) &gt; N) AND
 (HHV(A04, 15.000) &gt; 50.000));
STICKLINE(A0A,(0 - 2.000), 2.000, 4,0),
COLORYELLOW;
STICKLINE(NOT(A0A),(0 - 2.000), 2.000, 4,0),COLORMAGENTA;

获利:MA(A03,M),COLORRED,LINETHICK3;

浮动: (MA(A02,M) - MA(A03,M)),COLORYELLOW,LINETHICK3;

套牢: (100.000 - MA(A02,M)),COLORGREEN,LINETHICK3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h4><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h4><blockquote><p>如果不需要那三条线 只需要将最后三条代码去掉即可</p></blockquote><div class="language-tn6 line-numbers-mode" data-ext="tn6"><pre class="language-tn6"><code>
获利:MA(A03,M),COLORRED,LINETHICK3;

浮动: (MA(A02,M) - MA(A03,M)),COLORYELLOW,LINETHICK3;

套牢: (100.000 - MA(A02,M)),COLORGREEN,LINETHICK3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',9);function v(u,t){return n(),e("div",null,[d(" more "),c])}const b=i(r,[["render",v],["__file","index.html.vue"]]);export{b as default};