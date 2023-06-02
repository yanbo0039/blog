import{_ as n,X as i,Y as e,a1 as l,a0 as s}from"./framework-68dd73a2.js";const d="/blog/assets/bank_6_1.png",v={},L=s(`<h1 id="翻倍开始" tabindex="-1"><a class="header-anchor" href="#翻倍开始" aria-hidden="true">#</a> 翻倍开始</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li>源码</li></ul><div class="language-tn6 line-numbers-mode" data-ext="tn6"><pre class="language-tn6"><code>DRAWGBK(CURRBARSCOUNT=1,RGB(110,108,108),RGB(88,30,0),0,3,0);
X_1:=HHV(HIGH,9)-LLV(LOW,9);
X_2:=HHV(HIGH,9)-CLOSE;
X_3:=CLOSE-LLV(LOW,9);
X_4:=X_2/X_1*100-70;
X_5:=(CLOSE-LLV(LOW,60))/(HHV(HIGH,60)-LLV(LOW,60))*100;
X_6:=(CLOSE+HIGH+LOW)/3;
X_7:=SMA(X_3/X_1*100,3,1);
X_8:=LLV(LOW,34);
X_9:=SMA(X_7,3,1)-SMA(X_4,9,1);
X_10:=IF(X_9&gt;100,X_9-100,0);
X_11:=HHV(HIGH,34);
X_12:=EMA((X_6-X_8)/(X_11-X_8)*100,13);
X_13:=EMA(0.667*REF(X_12,1)+0.333*X_12,2);
X_14:=SMA(MAX(CLOSE-REF(CLOSE,1),0)/CLOSE,8,1)/SMA(ABS(INDEXC-REF(INDEXC,1))/INDEXC,8,1)*100-25;
X_15:=MA(X_14,3);
X_16:=HHV(HIGH,9)-LLV(LOW,9);
X_17:=HHV(HIGH,9)-CLOSE;
X_18:=CLOSE-LLV(LOW,9);
X_19:=X_17/X_16*100-70;
X_20:=(CLOSE-LLV(LOW,60))/(HHV(HIGH,60)-LLV(LOW,60))*100;
X_21:=(2*CLOSE+HIGH+LOW)/4;
X_22:=SMA(X_18/X_16*100,3,1);
X_23:=LLV(LOW,34);
X_24:=SMA(X_22,3,1)-SMA(X_19,9,1);
X_25:=IF(X_24&gt;100,X_24-100,0);
X_26:=HHV(HIGH,34);
X_27:=EMA((X_21-X_23)/(X_26-X_23)*100,8);
DRAWKLINE(EMA(X_27,5),EMA(X_27,5),X_27+1,X_27);
领先:EMA(X_27,5),COLORCYAN;
生命线:EMA(X_13,1),COLORYELLOW;
X_28:=MA(CLOSE,5)=HHV(MA(CLOSE,5),20);
X_29:=MA(CLOSE,5)&gt;MA(CLOSE,10);
X_30:=MA(VOL,5)&gt;MA(VOL,40)*1.01;
X_31:=COUNT(MA(CLOSE,1)&gt;REF(CLOSE,1),2)=2;
X_32:=X_28 AND X_29 AND X_30 AND X_31;
X_33:=EMA(CLOSE,8);
X_34:=EMA(X_33,20);
X_35:=CROSS(X_33,X_34);
X_36:=X_33&lt;EMA(CLOSE,120);
STICKLINE(X_35 AND X_36 OR (X_28 AND X_29 AND X_30 AND X_31),X_27*1.03,X_27*1.12,1,0),COLORYELLOW;
X_37:=3*SMA((CLOSE-LLV(LOW,18))/(HHV(HIGH,18)-LLV(LOW,18))*100,21,1)-2*SMA(SMA((CLOSE-LLV(LOW,18))/(HHV(HIGH,18)-LLV(LOW,18))*100,20,1),8,1);
X_38:=20;
低位转强:IF(CROSS(X_37,X_38),50,0),STICK,COLORMAGENTA,LINETHICK2;
开始拉升:IF(CROSS(X_12,生命线) AND X_12&gt;X_13 AND X_12&lt;55 AND CLOSE&gt;OPEN,50,0),POINTDOT,COLORLIRED;
X_39:=LLV(CLOSE,500)=LLV(CLOSE,5) AND CLOSE/REF(CLOSE,1)&gt;1+9.8/100;
极地上涨:IF(X_39,领先,0),COLORGREEN,LINETHICK2;
STICKLINE(开始拉升&gt;0,15,开始拉升*1.01,1,0),COLORBLUE;
STICKLINE(开始拉升&gt;0 AND 开始拉升&lt;400 OR (极地上涨&gt;0 AND 极地上涨&lt;400) OR (低位转强&gt;0 AND 低位转强&lt;400) OR 低位转强&gt;0,30,开始拉升,1,0),COLORRED;
STICKLINE(开始拉升&gt;0,15,开始拉升*0.6,3,0),COLORBLUE;
STICKLINE(开始拉升&gt;0,15,开始拉升*0.4,3,0),COLORGREEN;
STICKLINE(开始拉升&gt;0,15,开始拉升*0.2,3,0),COLOR0099CC;
STICKLINE(低位转强&gt;0,15,低位转强*1.01,1,0),COLORMAGENTA;
STICKLINE(低位转强&gt;0 OR 极地上涨&gt;0,15,低位转强*0.4,3,0),COLORYELLOW;
STICKLINE(低位转强&gt;0,15,低位转强*0.2,3,0),COLORFFCC66;
STICKLINE(极地上涨&gt;0,15,极地上涨*1.01,1,0),COLORYELLOW;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>作用在副图</p></blockquote><ul><li>效果</li></ul><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>翻倍开始</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',8);function _(a,X){return i(),e("div",null,[l(" more "),L])}const r=n(v,[["render",_],["__file","bank6.html.vue"]]);export{r as default};
