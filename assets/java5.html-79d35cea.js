import{_ as e,X as i,Y as a,a1 as n,a0 as d}from"./framework-68dd73a2.js";const s="/blog/assets/Java_5_1.png",r="/blog/assets/Java_5_2.png",l="/blog/assets/Java_5_3.png",t="/blog/assets/Java_5_4.png",c="/blog/assets/Java_5_5.png",v="/blog/assets/Java_5_6.png",u="/blog/assets/Java_5_7.png",o="/blog/assets/Java_5_8.png",m="/blog/assets/Java_5_9.png",b="/blog/assets/Java_5_10.png",h="/blog/assets/Java_5_11.png",p="/blog/assets/Java_5_12.png",g={},x=d('<h1 id="java基础应用编程——-数组" tabindex="-1"><a class="header-anchor" href="#java基础应用编程——-数组" aria-hidden="true">#</a> Java基础应用编程—— 数组</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h2 id="本章内容" tabindex="-1"><a class="header-anchor" href="#本章内容" aria-hidden="true">#</a> 本章内容</h2><figure><img src="'+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一维数组" tabindex="-1"><a class="header-anchor" href="#一维数组" aria-hidden="true">#</a> 一维数组</h2><h3 id="数组的定义和创建" tabindex="-1"><a class="header-anchor" href="#数组的定义和创建" aria-hidden="true">#</a> 数组的定义和创建</h3><p>数组可以看成是多个相同类型数据的组合，实现对这些数据的统一管理</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{1，2，3，4，5}
{“apple”，“pear”，“banana”，“grape”}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>数组中的每一个数据 — 数组的一个元素（element）</p><p>数组中的元素可以是任何数据类型，包括基本数据类型和引用类型</p><p>数组中元素的个数，称为数组的长度（length）</p><p>JAVA语言中声明数组时不能指定其长度</p><pre><code> e.g.  int  a[5];     //非法
</code></pre><h3 id="数组的其他基本概念" tabindex="-1"><a class="header-anchor" href="#数组的其他基本概念" aria-hidden="true">#</a> 数组的其他基本概念</h3><pre><code>数组的索引 -- index
数组的类型 -- type
数组的名称 – name
</code></pre><h3 id="数组的定义和创建-1" tabindex="-1"><a class="header-anchor" href="#数组的定义和创建-1" aria-hidden="true">#</a> 数组的定义和创建</h3><p>数组类型 数组名 [ ]</p><p>或</p><p>数组类型[ ] 数组名</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数组的定义和创建-2" tabindex="-1"><a class="header-anchor" href="#数组的定义和创建-2" aria-hidden="true">#</a> 数组的定义和创建</h3><p>数组名 = new 数据元素类型[ 元素个数 ]</p><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数组的内存模型" tabindex="-1"><a class="header-anchor" href="#数组的内存模型" aria-hidden="true">#</a> 数组的内存模型</h3><p>数组是存储多个相同类型变量的对象。数组的所有元素保存在堆内存中。 创建一个数组就是在堆中创建一个数组对象。 数组创建后立即拥有默认值。 索引从0开始。 连续分配</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数组的初始化" tabindex="-1"><a class="header-anchor" href="#数组的初始化" aria-hidden="true">#</a> 数组的初始化</h3><p>在创建数组的同时就为数组元素分配空间并赋值</p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>声明数组：和使用变量要先声明一样，先声明数组的类型和名称</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int[] = myNumbers;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构造数组：声明之后，还不知道能存放多少个数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>myNumbers = new int[20];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构造/创建数组使用了关键字new，它是内存分配操作符，所谓创建数组，就是在内存中给数组分配空间。</p><p>初始化数组：使用new创建数组后，所有元素其实已经被初始化，元素都是默认值，这种初始化就叫做”动态初始化“。</p><p>还有一种初始化方式是不使用new，而是在声明数组的同时就完成创建和初始化工作，这叫做”静态初始化“。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如：int[ ] buf = {10,20,30,66};
myNumbers[0] = 5;
myNumbers[1] = 10;
myNumbers[2] = 15;
myNumbers[3] = 20;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组元素的访问" tabindex="-1"><a class="header-anchor" href="#数组元素的访问" aria-hidden="true">#</a> 数组元素的访问</h2><p>Java中，数组元素的下标从0开始</p><p>元素的下标可以是整型常量或整型表达式</p><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数组的属性" tabindex="-1"><a class="header-anchor" href="#数组的属性" aria-hidden="true">#</a> 数组的属性</h3><p>数组的长度(length)必须&gt;=0；</p><p>length为只读。</p><p>利用length遍历数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   示例      Test.java
   int[ ] array ;
   array  = new int [4] ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>☻ 练习

说明下列创建数组的方法那些是正确的______。         
A)  int dim[ ] = new int[4];
B)  int dim[4] = new int[ ];
C)  int dim[ ] = new int[ ]{1,2,3,4};
D)  char a[ ] = {‘A’, ‘B’};
E)  char c[ ] = “ABC”;

答案 ：A、C、D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组的异常-示例" tabindex="-1"><a class="header-anchor" href="#数组的异常-示例" aria-hidden="true">#</a> 数组的异常 示例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array_exception2.java
数组越界异常（ ArrayIndexOutOfBoundsException ）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Array_exception2 {
    public static void main(String args[]){
         int a[]=new int[3];
         a[0]=1;
         a[1]=2;
         a[2]=3;
         a[3]=4;
         System.out.println(a[3]);
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="多维数组的创建" tabindex="-1"><a class="header-anchor" href="#多维数组的创建" aria-hidden="true">#</a> 多维数组的创建</h3><p>Java中没有真正的多维数组，只有数组的数组 <img src="'+o+'" alt="" loading="lazy"></p><h3 id="锯齿数组" tabindex="-1"><a class="header-anchor" href="#锯齿数组" aria-hidden="true">#</a> 锯齿数组</h3><p>Java中多维数组不一定是规则矩阵形式</p><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="多维数组的创建-1" tabindex="-1"><a class="header-anchor" href="#多维数组的创建-1" aria-hidden="true">#</a> 多维数组的创建</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数组类型   数组名 [  ] [  ]
数组类型[  ] [  ]   数组名
数组类型[  ]   数组名 [  ]

int  a[ ] [ ] ;
int[ ][ ]  b ;
int[ ]   c[ ] ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多维数组的创建-2" tabindex="-1"><a class="header-anchor" href="#多维数组的创建-2" aria-hidden="true">#</a> 多维数组的创建</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数组名 = new  数据元素类型[ 行数 ] [ 列数 ] ;
数组名 = new  数据元素类型[ 行数 ] [   ] ;

 a = new  int [3][4] ;
 a = new  int [3][ ]  ;
 a = new  int [ ][4]  ; //非法

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多维数组的初始化" tabindex="-1"><a class="header-anchor" href="#多维数组的初始化" aria-hidden="true">#</a> 多维数组的初始化</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  数组类型  数组名[ ][ ] = { {元素11，元素12，…} , {元素21，元素22，… } }

  数组类型  数组名[ ][ ] = new 数据类型[ ][ ] { {元素11，元素12，…} , {元素21，… } }

int  a[ ][ ] = { {1,2,3}, {4,5}, {7} } ;

int  a[ ][ ] = new int[ ][ ]{ {1,2,3}, {4,5}, {7} } ;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 MulArray.java</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

int[ ][ ]  a = new int[3][ ];

a[0] = new int[2];
a[1] = new int[3];
a[2] = new int[4];

a[0][0] = 1;
a[0][1] = 2;
…
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多维数组的内存模型" tabindex="-1"><a class="header-anchor" href="#多维数组的内存模型" aria-hidden="true">#</a> 多维数组的内存模型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int  a[ ][ ] = { {1,2,3}, {4,5}, {7} } ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="☻-练习" tabindex="-1"><a class="header-anchor" href="#☻-练习" aria-hidden="true">#</a> ☻ 练习</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    int[ ][ ]a = new int[3][4]; 
    for(int i=0;i &lt;a.length;i++){ 
        for(int j=0;j &lt;a[i].length;j++){ 
            a[i][j]=i+j; 
            } 
       },    
    则a[2][3] = ____    
    A.3      B.4         C.5          D.2
    答案 ：C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多维数组的遍历" tabindex="-1"><a class="header-anchor" href="#多维数组的遍历" aria-hidden="true">#</a> 多维数组的遍历</h3><p>利用循环语句 和 数组下标</p><h3 id="☻-练习-array-traversal-java" tabindex="-1"><a class="header-anchor" href="#☻-练习-array-traversal-java" aria-hidden="true">#</a> ☻ 练习 Array_traversal.java</h3><p>循环遍历字符串数组{“red”,”orange”,”yellow”,“green”,“blue”,”purple”}， 并将其打印</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Array_traversal {
      public static void main(String args[ ]){
            String color[ ] = {&quot;red&quot;,&quot;orange&quot;,&quot;yellow&quot;,
                            &quot;green&quot;,&quot;blue&quot;,&quot;purple&quot;}; 
            for(int i=0;i&lt;color.length;i++){
            System.out.println(color[i]);
            }
      }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组的复制-和排序" tabindex="-1"><a class="header-anchor" href="#数组的复制-和排序" aria-hidden="true">#</a> 数组的复制 和排序</h3><pre><code>System.arraycopy(source,srcPos,dest,destPos,length)
</code></pre><p>复制source数组中从下标srcPos开始的length个元素到目标数组dest，并从目标数组的下标为destPos的位置开始储存</p><pre><code>source： 源数组
srcPos： 源数组中的起始位置
dest：     目标数组
destPos：目标数组中的起始位置
length：  要复制的数组元素的个数
</code></pre><h3 id="☻-练习-array-copy-java" tabindex="-1"><a class="header-anchor" href="#☻-练习-array-copy-java" aria-hidden="true">#</a> ☻ 练习 Array_copy.java</h3><p>复制数组{1,2,3,4,5}中从下标0开始的 5个元素到目标数组{6,7,8,9,10,11,12,13,14,15}， 并从目标数组的下标为0的位置开始储存</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Arrays.sort(arr_name)
Arrays.sort(arr_name,fromIndex,toIndex)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对数组arr_name中，从下标为fromIndex到toIndex的元素（不包括toIndex）进行升序排序</p><h3 id="示例-arraysort-sample-java" tabindex="-1"><a class="header-anchor" href="#示例-arraysort-sample-java" aria-hidden="true">#</a> 示例：ArraySort_sample.java</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int[ ] point = {1,6,2,3,9,4,5,7,8};
java.util.Arrays.sort( point );
for(int i=0;i&lt;point.length;i++)
{
    System.out.println(point[i]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="冒泡排序法-bubble-sort" tabindex="-1"><a class="header-anchor" href="#冒泡排序法-bubble-sort" aria-hidden="true">#</a> 冒泡排序法（Bubble Sort）</h3><p>冒泡排序法是一种简单的排序算法 它重复地走访过要排序的数组，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数组的工作是重复地进行直到没有再需要交换，也就是说该数组已经排序完成。</p><h3 id="冒泡排序法-bubble-sort-1" tabindex="-1"><a class="header-anchor" href="#冒泡排序法-bubble-sort-1" aria-hidden="true">#</a> 冒泡排序法（Bubble Sort）</h3><p>假设输入6个数为：9，8，5，4，2，0。 <img src="`+h+'" alt="" loading="lazy"></p><p>经过第一趟(共5次比较与交换)后，最大的数9已“沉底” 。</p><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后进行对余下的前面5个数第二趟比较，如果有n个数，则要进行n-1趟比较。在第1趟比较中要进行n-1次两两比较，在第j趟比较中要进行n-j次两两比较。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>按上面的规律，要将n个元素排序，其核心代码表示如下：
  for（i = 1; i &lt; n; i++）
   {
      for（j = 0; j &lt; n-i; j++）
       {
           if(a[ j ] &gt; a[ j +1 ]) 
            {
                t = a[ j ]; 
	            a[ j ] = a[ j +1 ]; 
	            a[ j +1 ] = t;  
            }
       }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	// 冒泡排序(下沉法)
	public static void bubbleSort(int[] a) {
		for (int i = 1; i &lt; a.length; i++) {
		        for (int j = 0; j &lt; a.length - i ; j++) {
			    if (a[j] &gt; a[j + 1]) {
			           int t = a[j];
			           a[j] = a[j + 1];
			           a[j + 1] = t;
			    }
		          }
		}
	}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本章重点总结" tabindex="-1"><a class="header-anchor" href="#本章重点总结" aria-hidden="true">#</a> 本章重点总结</h2><h3 id="一维数组-1" tabindex="-1"><a class="header-anchor" href="#一维数组-1" aria-hidden="true">#</a> 一维数组</h3><pre><code>掌握数组的长度
掌握一维数组的声明、创建、初始化
数组的常见错误
</code></pre><h3 id="多维数组" tabindex="-1"><a class="header-anchor" href="#多维数组" aria-hidden="true">#</a> 多维数组</h3><pre><code>掌握二维数组的声明、创建、初始化
理解数组的复制
理解数组的排序
</code></pre><h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h2><ol><li>编写一个简单程序，要求数组长度为5，分别赋值10，20，30，40，50，在控制台输出该数组的值。（知识点：数组定义和创建、一维数组初始化）[必做题]</li><li>将一个字符数组的值（neusofteducation）拷贝到另一个字符数组中。（知识点：数组复制） [必做题]</li><li>给定一个有9个整数（1,6,2,3,9,4,5,7,8）的数组，先排序，然后输出排序后的数组的值。（知识点：Arrays.sort排序、冒泡排序） [必做题]</li><li>有2个多维数组分别是 2 3 4 和 1 5 2 8 4 6 8 5 9 10 -3 2 7 -5 -18 按照如下方式进行运算。生成一个2行4列的数组。此数组的第1行1列是2<em>1+3</em>5+4<em>2第1行2列是2</em>5+3<em>9+4</em>7 第2行1列是4<em>1+6</em>5+8*2 依次类推。（知识点：多维数组定义和创建、数组遍历、数组元素访问） [选作题]</li><li>输出一个double型二维数组（长度分别为5、4，值自己设定）的值。（知识点：数组定义和创建、多维数组初始化、数组遍历） [必做题]</li><li>在一个有8个整数（18，25，7，36，13，2，89，63）的数组中找出其中最大的数及其下标。（知识点：数组遍历、数组元素访问） [必做题]</li><li>将一个数组中的元素逆序存放（知识点：数组遍历、数组元素访问） [选作题]</li><li>将一个数组中的重复元素保留一个其他的清零。（知识点：数组遍历、数组元素访问） [选作题]</li><li>给定一维数组{ -10，2，3，246，-100，0，5} ，计算出数组中的平均值、最大值、最小值。（知识点：数组遍历、数组元素访问） [选作题]</li></ol><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java基础应用编程—— 数组</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,107);function f(_,y){return i(),a("div",null,[n(" more "),x])}const w=e(g,[["render",f],["__file","java5.html.vue"]]);export{w as default};
