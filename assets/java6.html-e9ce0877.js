import{_ as e,X as i,Y as n,a1 as a,a0 as d}from"./framework-68dd73a2.js";const s="/blog/assets/Java_6_1.png",r="/blog/assets/Java_6_2.png",l="/blog/assets/Java_6_3.png",t={},c=d('<h1 id="java基础应用编程——-方法定义及调用" tabindex="-1"><a class="header-anchor" href="#java基础应用编程——-方法定义及调用" aria-hidden="true">#</a> Java基础应用编程—— 方法定义及调用</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h2 id="本章内容" tabindex="-1"><a class="header-anchor" href="#本章内容" aria-hidden="true">#</a> 本章内容</h2><figure><img src="'+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="方法的定义" tabindex="-1"><a class="header-anchor" href="#方法的定义" aria-hidden="true">#</a> 方法的定义</h2><h3 id="什么是方法" tabindex="-1"><a class="header-anchor" href="#什么是方法" aria-hidden="true">#</a> 什么是方法</h3><p>方法是完成某个功能的一组语句，通常将常用的功能写成一个方法 示例 Func_sample1.java</p><h3 id="方法的定义-1" tabindex="-1"><a class="header-anchor" href="#方法的定义-1" aria-hidden="true">#</a> 方法的定义</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[访问控制符] [修饰符] 返回值类型 方法名(参数类型 形式参数,参数类型 形式参数,…)
{
    方法体
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 Func_sample2.java</p><p>修饰符：public 、static 被称为修饰符（后续会详细讲解它们）；</p><p>返回值类型：用来说明该方法运算结果的类型。如果返回其他类型，编译就可能出错；</p><p>方法名：它作为调用时引用方法的标识；</p><p>参数列表：方法的参数个数可以是0个到多个，每个参数前面要声明参数的数据类型；每个参数要用逗号分开。也可以一个参数都没有。</p><p>方法体：它是一个语句块，执行特定的功能操作。对于有返回值类型的方法，方法体当中最后一个语句是return关键字，它的作用是把方法的执行（运算）结果返回到方法外部。</p><p>return 表达式：这里，进一步分析，return后面的表达式就是方法的返回值。需要注意表达式的类型，必须与方法头中声明的“返回类型”相匹配。</p><h3 id="方法的定义-2" tabindex="-1"><a class="header-anchor" href="#方法的定义-2" aria-hidden="true">#</a> 方法的定义</h3><pre><code>形式参数：在方法被调用时用于接受外部传入的变量
参数类型：就是该形式参数的数据类型
返回值：方法在执行完毕后返回给调用它的程序的数据
返回值类型：方法要返回的结果的数据类型
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static int square( int x ) 
{
    int y=x*x;
    return y;   //返回值
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法的分类" tabindex="-1"><a class="header-anchor" href="#方法的分类" aria-hidden="true">#</a> 方法的分类</h3><h3 id="根据参数个数" tabindex="-1"><a class="header-anchor" href="#根据参数个数" aria-hidden="true">#</a> 根据参数个数：</h3><pre><code>无参方法
有参方法
</code></pre><h3 id="根据返回值类型" tabindex="-1"><a class="header-anchor" href="#根据返回值类型" aria-hidden="true">#</a> 根据返回值类型:</h3><pre><code>有返回值的方法：
基本数据类型
引用数据类型
无返回值的方法
void
</code></pre><h3 id="方法的分类-1" tabindex="-1"><a class="header-anchor" href="#方法的分类-1" aria-hidden="true">#</a> 方法的分类</h3><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对于无返回值类型的方法，它不向本方法外部返回任何值。定义这样的方法时，声明方法返回类型的位置不能省略不写，而应该用关键字void来代替，即 “空”的意思。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class FunctionDemo {
       public int absolut(int x){
	if(x&gt;=0){
	        return x;
	}
	else{
	        return -x;
	}
       }
}
有返回值有参方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法体有两个return 语句，但是只有一个return语句能被执行。 方法的返回类型可以是java中的任何数据类型：基本数据类型（4种整型、2种浮点型、字符型、布尔型共8种） 和引用数据类型（数组、类、接口）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class FunctionAdd
{
    public static int add()
    {
        x=100;
        y=200;
        int z=x+y;
        return z;
    }
}
有返回值无参方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class FunctionRect
{
    void drawRect()
    {
        int width=10
        int height=5;
        for(int i=0;i&lt;height;i++)
        {
            for(int j=0;j&lt;width;j++)
            {
                System.out.print(&quot;#&quot;);
            }
            System.out.println();
        }
    }
}
无返回值无参方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法的调用" tabindex="-1"><a class="header-anchor" href="#方法的调用" aria-hidden="true">#</a> 方法的调用</h3><pre><code>方法只有在被调用后才生效
方法的调用方法：
无参方法的调用
有参方法的调用
</code></pre><h3 id="无参方法的调用" tabindex="-1"><a class="header-anchor" href="#无参方法的调用" aria-hidden="true">#</a> 无参方法的调用</h3><pre><code>方法名(  )
</code></pre><p>定义方法就是编写一段有特定功能的代码，在程序中使用同样功能的地方，没有必要重复编写同样的代码，只要调用定义好的方法就可以。可以实现代码的重用。简化了程序的编写和维护工作。</p><p>所谓调用方法，其实就是给方法的入口传入一些值（参数），然后在出口得到方法执行的结果（返回值）。给方法传入参数的过程，称为“传参”。 理解“实参”、“形参”。</p><p>实际上，方法传参的过程就是把实参赋值给对应的形参的过程，并且实参和形参的数量、类型必须匹配。</p><h3 id="有参方法的调用" tabindex="-1"><a class="header-anchor" href="#有参方法的调用" aria-hidden="true">#</a> 有参方法的调用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  public class FunctionDemo
  {
      public int add( int x , int y )
      {
             int z=x+y;
             return z ;
      }
     public static void main(String[] args)
     {
            FunctionDemo fd = new FuctionDemo()
            int x = fd.add( 10 , 20 );
            System.out.println(x);
            int y = fd.add(100,200);
           System.out.println(y);
     }
 }
其中 int x,int y 是形参
10，20是实参
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本数据类型和引用类型比较" tabindex="-1"><a class="header-anchor" href="#基本数据类型和引用类型比较" aria-hidden="true">#</a> 基本数据类型和引用类型比较</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class FuncTest {
public static void getX(int x){
	x = 3*x;
}
public static void getY(int[] y){
	y[0] = 3*y[0];
} 

public static void main(String[] args) {
int x = 10;
System.out.println(&quot;x调用方法前：&quot; +x);
getX(x);
System.out.println(&quot;x调用方法后：&quot; +x);
int[] y = {10};
System.out.println(&quot;y调用方法前：&quot; +y[0]);
getY(y);
System.out.println(&quot;y调用方法后：&quot; +y[0]);
}

输出结果
x调用方法前：10
x调用方法后：10
y调用方法前：10
y调用方法后：30

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法的调用-1" tabindex="-1"><a class="header-anchor" href="#方法的调用-1" aria-hidden="true">#</a> 方法的调用</h2><h3 id="使用方法时的注意问题" tabindex="-1"><a class="header-anchor" href="#使用方法时的注意问题" aria-hidden="true">#</a> 使用方法时的注意问题</h3><pre><code>形参必须注明数据类型
实参直接写，不需要类型声明
return只能返回一次
遇到return语句，方法结束执行，后续语句不执行
方法的返回值，必须与方法声明中的返回值类型匹配
方法定义，不能写在main()中
方法是不能嵌套的
</code></pre><h2 id="方法的重载" tabindex="-1"><a class="header-anchor" href="#方法的重载" aria-hidden="true">#</a> 方法的重载</h2><h3 id="方法的重载-overload" tabindex="-1"><a class="header-anchor" href="#方法的重载-overload" aria-hidden="true">#</a> 方法的重载（overload）</h3><pre><code>方法的重载就是在同一个类中允许同时存在一个以上同名的方法
</code></pre><h3 id="方法重载的规则" tabindex="-1"><a class="header-anchor" href="#方法重载的规则" aria-hidden="true">#</a> 方法重载的规则</h3><pre><code>方法名称相同
方法的参数必须不同
参数个数不同   或
参数类型不同
方法的返回值类型可以相同，也可以不同
</code></pre><h2 id="方法的重载-overload-1" tabindex="-1"><a class="header-anchor" href="#方法的重载-overload-1" aria-hidden="true">#</a> 方法的重载（overload）</h2><h3 id="示例-employee-java" tabindex="-1"><a class="header-anchor" href="#示例-employee-java" aria-hidden="true">#</a> 示例 Employee.java</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Employee{
              
     public  Employee( )
    {

    }

    public Employee(String _name,int age){
       name = _name;
       age = _age;
       salary = _salary;
  }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例-funcsum-java" tabindex="-1"><a class="header-anchor" href="#示例-funcsum-java" aria-hidden="true">#</a> 示例 FuncSum.java</h3><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="☻-练习" tabindex="-1"><a class="header-anchor" href="#☻-练习" aria-hidden="true">#</a> ☻ 练习</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 下列选项中，哪些可以与void  setAge(int year,int month,int day)方法在同一个类中定义____?
A. public void setAge() { }              
B. void setAge(int age) {}                                                 
C. void setAge(int y,int m,int d){}    
D. int setAge(Date d) {}                                                   
E. int  setAge(int year,int month,int day){}
F.  void setage(int year,int month,int dat){}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本章重点总结" tabindex="-1"><a class="header-anchor" href="#本章重点总结" aria-hidden="true">#</a> 本章重点总结</h2><h3 id="方法定义" tabindex="-1"><a class="header-anchor" href="#方法定义" aria-hidden="true">#</a> 方法定义</h3><h3 id="方法调用" tabindex="-1"><a class="header-anchor" href="#方法调用" aria-hidden="true">#</a> 方法调用</h3><pre><code>有参方法的调用
无参方法的调用
</code></pre><h3 id="方法的重载-1" tabindex="-1"><a class="header-anchor" href="#方法的重载-1" aria-hidden="true">#</a> 方法的重载</h3><h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h2><ol><li>编写一个方法，求整数n的阶乘，例如5的阶乘是1<em>2</em>3<em>4</em>5。 [必做题]</li><li>编写一个方法，判断该年份是平年还是闰年。[必做题]</li><li>编写一个方法，输出大于200的最小的质数。[选做题]</li><li>写一个方法，功能：定义一个一维的int 数组，长度任意,然后将它们按从小到大的顺序输出（使用冒泡排序）（知识点：方法的定义和访问）。[选做题]</li></ol><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java基础应用编程—— 方法定义及调用</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,68);function v(u,h){return i(),n("div",null,[a(" more "),c])}const b=e(t,[["render",v],["__file","java6.html.vue"]]);export{b as default};
