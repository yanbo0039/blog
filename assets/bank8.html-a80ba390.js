import{_ as i,X as n,Y as e,a1 as d,a0 as s}from"./framework-68dd73a2.js";const l="/blog/assets/bank_8_1.png",v="/blog/assets/bank_8_2.png",R="/blog/assets/bank_8_3.png",a="/blog/assets/bank_8_4.png",r="/blog/assets/bank_8_5.png",A="/blog/assets/bank_8_6.png",C={},c=s(`<h1 id="三件套" tabindex="-1"><a class="header-anchor" href="#三件套" aria-hidden="true">#</a> 三件套</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="量能王" tabindex="-1"><a class="header-anchor" href="#量能王" aria-hidden="true">#</a> 量能王</h3><div class="language-tn6 line-numbers-mode" data-ext="tn6"><pre class="language-tn6"><code>DIF:=EMA(CLOSE,12)-EMA(CLOSE,26);



DEA:=EMA(DIF,9);



MACD:=(DIF-DEA)*2,COLORSTICK;

STICKLINE(MACD&gt;0,0,MACD,2.5,1)COLORRED;

STICKLINE(MACD&lt;0,0,MACD,2.5,0)COLORFFFF00;

JC:=DEA-DIF;

GREENB:IF(MACD&lt;0,SUM(0-MACD,BARSLAST(JC&lt;0))*3,0),NODRAW,COLOR00FF00;

REDN:IF(MACD&gt;0,SUM(MACD,BARSLAST(JC&gt;0))*3,0),NODRAW,COLOR00FFFF;

A1:=IF(MACD&lt;0,HHV(GREENB,BARSLAST(JC&lt;0)),0);

A2:=IF(MACD&gt;0,HHV(REDN,BARSLAST(JC&gt;0)),0);



AA1:=CROSS(MACD,0);



AA2:=BARSLAST(AA1);



AA3:=HHVBARS(&quot;MACD.MACD&quot;,AA2+1);



AA4:=BACKSET(REF(AA3&gt;=1,1) AND &quot;MACD.MACD&quot;&lt;0,AA3);

AA5:=BACKSET(REF(AA4=0,1) AND AA4=1,2);

最大值:=IF(FILTER(AA5,2),&quot;MACD.MACD&quot;,0);

AB1:=CROSS(0,MACD);

AB2:=BARSLAST(AB1);

AB3:=LLVBARS(MACD,AB2+1);

AB4:=BACKSET(REF(AA3&gt;=1,1) AND &quot;MACD.MACD&quot;&gt;0,AB3);

AB5:=BACKSET(REF(AB4=0,1) AND AB4=1,2);

最小值:=IF(FILTER(AB5,2),&quot;MACD.MACD&quot;,0);



DRAWNUMBER(最大值!=0,0,REFX(A2,BARSNEXT(AB1)-1)),COLORRED;

DRAWNUMBER(最小值!=0,0,REFX(A1,BARSNEXT(AA1)-1)),COLOR00FF00,DRAWABOVE;

STICKLINE(最大值!=0,0,MACD,2.5,0)COLORFF80FF;

STICKLINE(最小值!=0,0,MACD,2.5,0)COLORFF0000;



{

DRAWNUMBER(最大值&gt;0,0,最大值);

DRAWNUMBER(最大值&gt;0,0,REFX(A2,BARSNEXT(AB1)-1));

DRAWNUMBER(CROSS(DIF,DEA),1,REF(A1,1)),COLOR00FF00;

DRAWNUMBER(CROSS(DEA,DIF),-0.5,REF(A2,1)),COLOR00FFFF;

}

{

AA:FINDHIGHBARS(VAR,N,M,T)

HH:IF(CROSS(DEA,DIF),HHV(MACD,BARSLAST(CROSS(DIF,DEA))),0);

LL:IF(CROSS(DIF,DEA),LLV(MACD,BARSLAST(CROSS(DEA,DIF))),0);



IF(CROSS(DIF,DEA),DRAWNUMBER(BARSLAST(MACD=HH),HH,REF(A1,1)),DRAWNULL),COLOR00FF00;

IF(CROSS(DEA,DIF),DRAWNUMBER(BARSLAST(MACD=LL),LL,REF(A1,1)),DRAWNULL),COLOR00FF00;

DRAWNUMBER(CC,0.1,DD);

DRAWNUMBER(BARSNEXT(ISLASTBAR)=CC,0,REFX(DD,BARSNEXT(ISLASTBAR)));





CC:=IF(MACD&gt;0,BARSLAST(AA1),BARSLAST(AB1));

DD:=IF(MACD&gt;0,REDN,GREENB);

DRAWNUMBER(BARSNEXT(ISLASTBAR)=CC,0,REFX(DD,BARSNEXT(ISLASTBAR))),DRAWABOVE;

DRAWNUMBER(BARSNEXT(ISLASTBAR)=CC,0,REFX(DD,BARSNEXT(ISLASTBAR)));



};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="筹码结构" tabindex="-1"><a class="header-anchor" href="#筹码结构" aria-hidden="true">#</a> 筹码结构</h3><div class="language-tn6 line-numbers-mode" data-ext="tn6"><pre class="language-tn6"><code>{公式名称: 筹码结构
公式描述: 
无参数
公式类型: 技术指标公式-其他类型
画线方法: 副图
公式版本: 0
显示小数: 缺省位数
坐标线位置: 自动
额外Y轴分界: 无

参数精灵:无
用法注释:无
公式源码:}
X_1:=WINNER(CLOSE*0.9)*100;
X_2:=100-WINNER(CLOSE*1.1)*100;
X_3:=100-X_1-X_2;
STICKLINE(1,X_1,X_1+X_3,3,0),COLOR009999;
STICKLINE(1,X_1,X_1+X_3,2.5,0),COLOR00AAAA;
STICKLINE(1,X_1,X_1+X_3,2,0),COLOR00BBBB;
STICKLINE(1,X_1,X_1+X_3,1.5,0),COLOR00CCCC;
STICKLINE(1,X_1,X_1+X_3,1,0),COLOR00DDDD;
STICKLINE(1,X_1,X_1+X_3,0.5,0),COLOR00EEEE;
STICKLINE(1,X_1,X_1+X_3,0,0),COLORYELLOW;
STICKLINE(1,0,X_1,3,0),COLOR000077;
STICKLINE(1,0,X_1,2.5,0),COLOR000099;
STICKLINE(1,0,X_1,2,0),COLOR0000AA;
STICKLINE(1,0,X_1,1.5,0),COLOR0000BB;
STICKLINE(1,0,X_1,1,0),COLOR0000DD;
STICKLINE(1,0,X_1,0.5,0),COLOR0000EE;
STICKLINE(1,0,X_1,0,0),COLORRED;
STICKLINE(1,X_1+X_3,100,3,0),COLOR007700;
STICKLINE(1,X_1+X_3,100,2.5,0),COLOR009900;
STICKLINE(1,X_1+X_3,100,2,0),COLOR00AA00;
STICKLINE(1,X_1+X_3,100,1.5,0),COLOR00BB00;
STICKLINE(1,X_1+X_3,100,1,0),COLOR00CC00;
STICKLINE(1,X_1+X_3,100,0.5,0),COLOR00DD00;
STICKLINE(1,X_1+X_3,100,0,0),COLORGREEN;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="预测两点买" tabindex="-1"><a class="header-anchor" href="#预测两点买" aria-hidden="true">#</a> 预测两点买</h3><div class="language-tn6 line-numbers-mode" data-ext="tn6"><pre class="language-tn6"><code>VAR1:=BARSCOUNT(C);
VAR2:=CONST(VAR1);
VAR3:=VAR2-VAR1;

K线计数:VAR3+1,NODRAW,COLORYELLOW;

最高价格:=HHV(REF(HIGH,高点-1),2),NODRAW;

最低价格:=LLV(REF(LOW,低点-1),2),NODRAW;

高低比:=最高价格/最低价格;

高低比平方:=SQRT(高低比);

再平放:=SQRT(高低比平方);

预测高点:CONST(最高价格/再平放),NODRAW;

预测中点:CONST(最高价格/高低比平方),NODRAW;
VAR11:=SQRT(高低比)+再平放-1;

VAR12:=最高价格/VAR11;

预测低点:CONST(VAR12),NODRAW;
DRAWLINE(CURRBARSCOUNT&lt;=高点,预测高点,预测高点,预测高点,0)DOTLINE,LINETHICK1,COLOREB9B00;

DRAWLINE(CURRBARSCOUNT&lt;=高点,预测中点,预测中点,预测中点,0)DOTLINE,LINETHICK1,COLOREB9B00;

DRAWLINE(CURRBARSCOUNT&lt;=高点,预测低点,预测低点,预测低点,0)DOTLINE,LINETHICK1,COLOREB9B00;

DRAWTEXT(CURRBARSCOUNT=高点,预测高点*0.98,STRCAT(&#39;  C1:&#39;,CON2STR(预测高点,2)))COLOREB9B00;

DRAWTEXT(CURRBARSCOUNT=高点,预测低点*0.98,STRCAT(&#39;  C3:&#39;,CON2STR(预测低点,2)))COLOREB9B00;

DRAWTEXT(CURRBARSCOUNT=高点,预测中点*0.98,STRCAT(&#39;  C2:&#39;,CON2STR(预测中点,2)))COLOREB9B00;

DRAWTEXT(CURRBARSCOUNT=高点,H,&#39;( 高B )&#39;),COLORYELLOW;
DRAWTEXT(CURRBARSCOUNT=低点,L,&#39;( 低A )&#39;),COLORYELLOW;

DRAWLINE(CURRBARSCOUNT=高点 ,H,CURRBARSCOUNT=低点,L,0)COLOREB9B00,LINETHICK2;
{最高到低点划线}
DRAWLINE(CURRBARSCOUNT=低点,L,CURRBARSCOUNT=高点,H,0)COLOREB9B00,LINETHICK2;
{最低到高点划线};
DRAWICON(CURRBARSCOUNT=低点,L,38);
{历史低点标记}
DRAWICON(CURRBARSCOUNT=高点,H,39);{历史高点标记};

DRAWLINE(CURRBARSCOUNT=高点,H,预测低点,预测低点,-1)DOTLINE,LINETHICK1,COLOREB9B00;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+R+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="预测两点卖" tabindex="-1"><a class="header-anchor" href="#预测两点卖" aria-hidden="true">#</a> 预测两点卖</h3><div class="language-tn6 line-numbers-mode" data-ext="tn6"><pre class="language-tn6"><code>VAR1:=BARSCOUNT(C);
VAR2:=CONST(VAR1);
VAR3:=VAR2-VAR1;

K线计数:VAR3+1,NODRAW,COLORYELLOW;

最高价格:=HHV(REF(HIGH,最高-1),2),NODRAW;

最低价格:=LLV(REF(LOW,最低-1),2),NODRAW;

高低比:=最高价格/最低价格;

高低比平方:=SQRT(高低比);

再平放:=SQRT(高低比平方);

短高点:CONST(最高价格/再平放),NODRAW;

短中点:CONST(最高价格/高低比平方),NODRAW;

VAR11:=再平放+高低比平方-1;

VAR12:=最高价格/VAR11;

短低点:CONST(VAR12),NODRAW;

求最高值:=REFDATE(HHV(HIGH,最高),DATE);

求最低值:=REFDATE(LLV(LOW,最低),DATE);

DRAWLINE(CURRBARSCOUNT=最低,短高点,CURRBARSCOUNT,短高点,0)DOTLINE,LINETHICK1,COLORMAGENTA;
{C3横线}
DRAWLINE(CURRBARSCOUNT=最低,短中点,CURRBARSCOUNT,短中点,0)DOTLINE,LINETHICK1,COLORMAGENTA;
{C2横线}
DRAWLINE(CURRBARSCOUNT=最低,短低点,CURRBARSCOUNT,短低点,0)DOTLINE,LINETHICK1,COLORMAGENTA;
{C1横线}
DRAWTEXT(CURRBARSCOUNT=最低,短高点*0.98,STRCAT(&#39;  C3:&#39;,CON2STR(短高点,2))),COLORMAGENTA;

DRAWTEXT(CURRBARSCOUNT=最低,短中点*0.98,STRCAT(&#39;  C2:&#39;,CON2STR(短中点,2)))COLORMAGENTA;

DRAWTEXT(CURRBARSCOUNT=最低,短低点*0.98,STRCAT(&#39;  C1:&#39;,CON2STR(短低点,2)))COLORMAGENTA;

DRAWTEXT(CURRBARSCOUNT=最高,H,&#39;( 高B )&#39;),COLORYELLOW;
DRAWTEXT(CURRBARSCOUNT=最低,L,&#39;( 低A )&#39;),COLORYELLOW;

DRAWICON(CURRBARSCOUNT=最低,L,38);{历史低点标记}
DRAWICON(CURRBARSCOUNT=最高,H,39);{历史高点标记};

DRAWLINE(CURRBARSCOUNT=最低,L,CURRBARSCOUNT=最高,H,0)COLORMAGENTA,LINETHICK2;
{最高到低点划线}
DRAWLINE(CURRBARSCOUNT=最高,H,CURRBARSCOUNT=最低,L,0)COLORMAGENTA,LINETHICK2;
{最低到高点划线};
DRAWLINE(CURRBARSCOUNT=最低,L,短高点,短高点,-1)DOTLINE,LINETHICK1,
COLORMAGENTA;
STICKLINE(CURRBARSCOUNT=最低,L,短高点,0,0),COLORMAGENTA;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="预测三点买" tabindex="-1"><a class="header-anchor" href="#预测三点买" aria-hidden="true">#</a> 预测三点买</h3><div class="language-tn6 line-numbers-mode" data-ext="tn6"><pre class="language-tn6"><code>VAR1:=BARSCOUNT(C);
VAR2:=CONST(VAR1);

VAR3:=VAR2-VAR1;
K线计数:VAR3+1,NODRAW,COLORYELLOW;

最高价格B:HHV(REF(HIGH,最高-1),2),NODRAW;

最低价格A:LLV(REF(LOW,最低-1),2),NODRAW;

次高价格C:HHV(REF(H,次高-1),2),NODRAW;

D3:=(SQRT(SQRT(最高价格B/最低价格A))+SQRT(最高价格B/最低价格A))-1;

预测D3:CONST(最低价格A/D3),NODRAW;

D2计算:=最低价格A/SQRT(最高价格B/最低价格A);

预测D2:CONST(D2计算),NODRAW;
D1计算:=最低价格A/SQRT(SQRT(最高价格B/最低价格A));

预测D1:CONST(D1计算),NODRAW;

DRAWLINE(CURRBARSCOUNT&lt;=次高,预测D3,CURRBARSCOUNT&lt;=次高,预测D3,0)DOTLINE,LINETHICK1,COLOREB9B00;

DRAWLINE(CURRBARSCOUNT&lt;=次高,预测D3,CURRBARSCOUNT&lt;=次高,预测D3,0)DOTLINE,LINETHICK1,COLOREB9B00;

DRAWLINE(CURRBARSCOUNT&lt;=次高,预测D2,CURRBARSCOUNT&lt;=次高,预测D2,0)DOTLINE,LINETHICK1,COLOREB9B00;

DRAWLINE(CURRBARSCOUNT&lt;=次高,预测D1,CURRBARSCOUNT&lt;=次高,预测D1,0)DOTLINE,LINETHICK1,COLOREB9B00;

DRAWTEXT(CURRBARSCOUNT=次高,预测D3*0.97,STRCAT(&#39;  D3:&#39;,CON2STR(预测D3,2))),COLOREB9B00;

DRAWTEXT(CURRBARSCOUNT=次高,预测D1*0.97,STRCAT(&#39;  D1:&#39;,CON2STR(预测D1,2)))COLOREB9B00;

DRAWTEXT(CURRBARSCOUNT=次高,预测D2*0.97,STRCAT(&#39;  D2:&#39;,CON2STR(预测D2,2)))COLOREB9B00;

STICKLINE(CURRBARSCOUNT=次高,L,预测D3,0,0),COLOREB9B00,;
STICKLINE(CURRBARSCOUNT=最高,C,H,0,-1),COLOREB9B00;

STICKLINE(CURRBARSCOUNT=最低,C,O,0,-1),COLOREB9B00;
STICKLINE(CURRBARSCOUNT=次高,C,O,0,-1),COLOREB9B00;

DRAWLINE(CURRBARSCOUNT=最高,H,CURRBARSCOUNT=最低,L,0)COLOREB9B00,LINETHICK2;

DRAWLINE(CURRBARSCOUNT=最低,L,CURRBARSCOUNT=次高,H,0),COLOREB9B00,LINETHICK2;

DRAWTEXT(CURRBARSCOUNT=最高,H,&#39;( 高B )&#39;),COLORYELLOW;

DRAWTEXT(CURRBARSCOUNT=最低,L,&#39;( 低A )&#39;),COLORYELLOW;

DRAWTEXT(CURRBARSCOUNT=次高,H,&#39;( 次高C )&#39;),COLORYELLOW;

DRAWICON(CURRBARSCOUNT=最低,L,38);

DRAWICON(CURRBARSCOUNT=最高,H,39);

DRAWICON(CURRBARSCOUNT=次高,H,39);

DRAWLINE(CURRBARSCOUNT=次高,H,预测D3,预测D3,0)DOTLINE,LINETHICK1,COLOREB9B00;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="预测三点卖" tabindex="-1"><a class="header-anchor" href="#预测三点卖" aria-hidden="true">#</a> 预测三点卖</h3><div class="language-tn6 line-numbers-mode" data-ext="tn6"><pre class="language-tn6"><code>VAR1:=BARSCOUNT(C);

VAR2:=CONST(VAR1);

VAR3:=VAR2-VAR1;

K线计数:VAR3+1,NODRAW,COLORYELLOW;

最高价格B:=HHV(REF(HIGH,最高-1),2),NODRAW;

最低价格A:=LLV(REF(LOW,最低-1),2),NODRAW;

次低价格C:=LLV(REF(LOW,次低-1),2),NODRAW;

S1:=最高价格B/SQRT(SQRT(最高价格B/最低价格A));

S2:=最高价格B/SQRT(最高价格B/最低价格A);

S3:=最高价格B/(SQRT(SQRT(最高价格B/最低价格A))+SQRT(最高价格B/最低价格A)-1);

AM:=最高价格B+(最高价格B-最低价格A);
BM:=ROUND2((AM-次低价格C)/7.3,3);
{倍数7.26-7.3}
D3计算:=2*最高价格B-最低价格A+(S1-S2);

预测D3:CONST(D3计算),NODRAW;

中计算:=2*最高价格B-最低价格A;

预测中:=CONST(中计算),NODRAW;

预测D2:CONST(AM),NODRAW;

D1计算:=2*最高价格B-最低价格A-(S2-S3);

预测D1:CONST(D1计算),NODRAW;

DRAWLINE(CURRBARSCOUNT&lt;=次低,预测D3,CURRBARSCOUNT,预测D3,0)DOTLINE,LINETHICK1,COLORMAGENTA;
{D3横线}
DRAWLINE(CURRBARSCOUNT&lt;=次低,预测D3,CURRBARSCOUNT,预测D3,0)DOTLINE,LINETHICK1,COLORMAGENTA;
{D3横线}
DRAWLINE(CURRBARSCOUNT&lt;=次低,预测D1,CURRBARSCOUNT,预测D1,0)DOTLINE,LINETHICK1,COLORMAGENTA;
{D1横线}
DRAWLINE(CURRBARSCOUNT&lt;=次低,预测D2,CURRBARSCOUNT,预测D2,0)DOTLINE,LINETHICK1,COLORMAGENTA;
{D2横线}
STICKLINE(CURRBARSCOUNT&lt;=次低,预测D3,预测D3,0.3,0),COLORMAGENTA;{低点横线}
DRAWTEXT(CURRBARSCOUNT=次低,预测D1*0.99,STRCAT(&#39;  D1:&#39;,CON2STR(预测D1,2))),COLORMAGENTA;

DRAWTEXT(CURRBARSCOUNT=次低,预测D3*0.99,STRCAT(&#39;  D3:&#39;,CON2STR(预测D3,2)))COLORMAGENTA;

DRAWTEXT(CURRBARSCOUNT=次低,预测D2*0.99,STRCAT(&#39;  D2:&#39;,CON2STR(预测D2,2)))COLORMAGENTA;
STICKLINE(CURRBARSCOUNT=次低,L,预测D3,0,0),COLORMAGENTA;{中点横线}
STICKLINE(CURRBARSCOUNT=最高,C,H,0,-1),COLORMAGENTA;{最高点划线}
STICKLINE(CURRBARSCOUNT=最低,C,O,0,-1),COLORMAGENTA;
{最低点划线}
STICKLINE(CURRBARSCOUNT=次低,C,O,0,-1),COLORMAGENTA;
{最次点划线}
DRAWLINE(CURRBARSCOUNT=最低,L,CURRBARSCOUNT=最高,H,0)COLORFF00FF,LINETHICK2;
{最高到低点划线}
DRAWLINE(CURRBARSCOUNT=最高,H,CURRBARSCOUNT=次低,L,0)COLORMAGENTA,LINETHICK2;
{最低到高点划线};
DRAWTEXT(CURRBARSCOUNT=最高,H,&#39;( 高B )&#39;),COLORYELLOW;

DRAWTEXT(CURRBARSCOUNT=最低,L,&#39;( 低A )&#39;),COLORYELLOW;
DRAWTEXT(CURRBARSCOUNT=次低,L,&#39;( 次低C )&#39;),COLORYELLOW;

DRAWICON(CURRBARSCOUNT=最低,L,38);{历史低点标记}
DRAWICON(CURRBARSCOUNT=最高,H,39);
{历史高点标记};
DRAWICON(CURRBARSCOUNT=次低,L,38);{历史次低标记};

DRAWLINE(CURRBARSCOUNT=次低,H,预测D3,预测D3,-1)DOTLINE,LINETHICK1,COLORMAGENTA;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>三件套</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',24);function u(m,b){return n(),e("div",null,[d(" more "),c])}const T=i(C,[["render",u],["__file","bank8.html.vue"]]);export{T as default};
