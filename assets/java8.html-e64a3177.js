import{_ as e,X as i,Y as a,a1 as n,a0 as d}from"./framework-68dd73a2.js";const s="/blog/assets/Java_8_1.png",r="/blog/assets/Java_8_2.png",l="/blog/assets/Java_8_3.png",t="/blog/assets/Java_8_4.png",c="/blog/assets/Java_8_5.png",h="/blog/assets/Java_8_6.png",v="/blog/assets/Java_8_7.png",o={},u=d(`<h1 id="java基础应用编程——-面向对象基础" tabindex="-1"><a class="header-anchor" href="#java基础应用编程——-面向对象基础" aria-hidden="true">#</a> Java基础应用编程—— 面向对象基础</h1><h2 id="本章内容" tabindex="-1"><a class="header-anchor" href="#本章内容" aria-hidden="true">#</a> 本章内容</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>节	知识点	掌握程度	难易程度
面向对象编程思想	面向对象编程思想	理解	
类的定义	什么是类	掌握	
类的格式	掌握	
类的成员	掌握	
对象的创建和使用	什么是对象	理解	
创建对象	掌握	
构造器	掌握	难
使用对象	掌握	
匿名对象	理解	难
变量的作用域	掌握	
this关键字	this关键字	掌握	
垃圾回收机制	垃圾回收机制原理	掌握	难
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面向对象编程思想" tabindex="-1"><a class="header-anchor" href="#面向对象编程思想" aria-hidden="true">#</a> 面向对象编程思想</h2><h3 id="面向过程编程" tabindex="-1"><a class="header-anchor" href="#面向过程编程" aria-hidden="true">#</a> 面向过程编程</h3><pre><code>传统的C语言属于面向过程编程。面向过程解决问题的思路：通常是分析出解
决问题所需要的步骤，然后用方法把这些步骤一步一步实现，最后一个一个依
次调用方法来解决。 
案例：ATM提款机终端系统（面向过程编程）
</code></pre><p>步骤1：输入密码，系统判断是否正确，如正确，进入取款界面，如错误，提示重新输入。</p><p>步骤2：进入取款界面，输入取款金额，系统判断余额是否足够，如不足，提示；如足够，点钞。</p><p>步骤3：吐出钞票，打印票据。</p><p>面向过程编程考虑的问题是程序运行的流程，主要是程序的算法，而数据只是在必要的时候插入到算法中间。</p><h3 id="面向对象编程-oop-object-oriented-programming" tabindex="-1"><a class="header-anchor" href="#面向对象编程-oop-object-oriented-programming" aria-hidden="true">#</a> 面向对象编程（OOP：Object-Oriented Programming ）</h3><p>从现实世界中客观存在的事物出发来构造软件系统，并在系统构造中尽可能运用人类的自然思维方式，强调直接以问题域中的事物为中心来思考问题，认识问题，并根据这些事物的本质特点，把它们抽象地表示为系统中的对象，作为系统的基本构成单位。面向对象解决问题的思路：通常是把构成问题域的事务分解成各个对象，给对象赋予相应的属性和行为，通过多个对象的相互协调来解决问题。建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为 。支持面向对象编程是Java 语言的重要特点。</p><h3 id="案例-atm提款机终端系统-面向对象编程" tabindex="-1"><a class="header-anchor" href="#案例-atm提款机终端系统-面向对象编程" aria-hidden="true">#</a> 案例：ATM提款机终端系统(面向对象编程)</h3><pre><code>根据要解决的问题，可以抽象出如下对象：
客户
银行卡
现金
票据
这些对象没有先后顺序，共同作用才构成了整个系统。我们只要用代码设计出
这几个类型的对象，然后让他们互相通信、传递消息就可以完成系统功能。
面向对象编程思想实际上就是一种运用对象、类、继承、封装、聚合、关联、
消息、多态性等概念来构造系统的软件开发方法。
</code></pre><h3 id="面向过程" tabindex="-1"><a class="header-anchor" href="#面向过程" aria-hidden="true">#</a> 面向过程</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>系统以过程/方法为中心来组织
过程间相互发送数据
过程的执行动作与数据被明显的分离
关注的焦点在于数据结构、算法和执行步骤
过程通常难以被复用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>系统以对象为中心来组织
对象相互间发送消息
相关的属性和行为被统一到对象上
关注的焦点是对象及对象的职责
使得系统构建更容易，易维护，易扩展，易复用
解决问题的方式更接近人的思维方式，使人更容易理解
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="从面向过程到面向对象-不仅仅是编程方式的改变-更重要的是思考方式的改变。" tabindex="-1"><a class="header-anchor" href="#从面向过程到面向对象-不仅仅是编程方式的改变-更重要的是思考方式的改变。" aria-hidden="true">#</a> 从面向过程到面向对象，不仅仅是编程方式的改变，更重要的是思考方式的改变。</h4><h3 id="面向对象基本概念" tabindex="-1"><a class="header-anchor" href="#面向对象基本概念" aria-hidden="true">#</a> 面向对象基本概念</h3><h4 id="抽象-abstract" tabindex="-1"><a class="header-anchor" href="#抽象-abstract" aria-hidden="true">#</a> 抽象（abstract）：</h4><pre><code>从事物中舍弃个别的非本质特征，抽取共同的本质特征
只考虑与问题域相关的信息，而忽略与问题域不相关的部分
</code></pre><h4 id="对象-object-是系统中用来描述客观事物的一个实体。" tabindex="-1"><a class="header-anchor" href="#对象-object-是系统中用来描述客观事物的一个实体。" aria-hidden="true">#</a> 对象（object）：是系统中用来描述客观事物的一个实体。</h4><pre><code>可以是有形的，也可以是无形的（如一个客户，一张银行卡，窗体中的一个按钮等等）
对象是构成世界的一个独立单位
具有自己的静态结构（属性）和动态行为（方法）
每个对象有自己的唯一标识
</code></pre><h3 id="类-class" tabindex="-1"><a class="header-anchor" href="#类-class" aria-hidden="true">#</a> 类（class）：</h3><pre><code>类是一组具有相同属性和行为的对象的抽象，
类的作用是用来创建对象，对象是类的一个实例
</code></pre><h3 id="类和对象的关系" tabindex="-1"><a class="header-anchor" href="#类和对象的关系" aria-hidden="true">#</a> 类和对象的关系</h3><pre><code>抽象和具体的关系。

每一个类在某一时刻都有零个或更多的实例， 类是生成对象的模板

一个类定义了使用哪些数据来描述属性，每一个对象都有相应的属性值数据， 
一个类通过一系列方法来定义行为，这些方法能在每个对象中被激活
</code></pre><h3 id="面向对象主要特征" tabindex="-1"><a class="header-anchor" href="#面向对象主要特征" aria-hidden="true">#</a> 面向对象主要特征</h3><h4 id="封装-encapsulation" tabindex="-1"><a class="header-anchor" href="#封装-encapsulation" aria-hidden="true">#</a> 封装（encapsulation）：</h4><pre><code>所谓封装是把对象的属性和行为结合在一个独立的系统单位内部
尽可能隐蔽对象的内部细节，只向外部提供接口
降低对象间的耦合度
封装的重要意义：
    使对象能够集中而完整地描述并对应一个具体事物
    体现了事物的相对独立性，使对象外部不能随意存取对象的内部数据
</code></pre><h4 id="继承-inheritance" tabindex="-1"><a class="header-anchor" href="#继承-inheritance" aria-hidden="true">#</a> 继承（inheritance）：</h4><pre><code>也称泛化，继承性是子类自动共享父类属性和方法的机制，在定义和实现一个
类的时候，可以在一个已经存在的类的基础之上来进行，把这个已经存在的类
所定义的内容作为自己的内容，并加入自己若干新的内容

继承简化了人们对事物的认识和描述，有益于软件复用，是OO技术提高软件开发效率的重要原因之一

是类之间的一种关系，一般类与特殊类之间的关系

继承关系的语义：“is a kind of”
</code></pre><h4 id="多态-polymorphism" tabindex="-1"><a class="header-anchor" href="#多态-polymorphism" aria-hidden="true">#</a> 多态（polymorphism）：</h4><pre><code>指同一个命名可具有不同的语义

OO方法中，常指在一般类中定义的属性或方法被特殊类继承之后，可以具有 
不同的数据类型或表现出不同的行为，对于子类，可用不同的方法替代实现父 
类的服务的方法
</code></pre><h2 id="类的定义" tabindex="-1"><a class="header-anchor" href="#类的定义" aria-hidden="true">#</a> 类的定义</h2><h3 id="什么是类" tabindex="-1"><a class="header-anchor" href="#什么是类" aria-hidden="true">#</a> 什么是类</h3><pre><code>把相似的对象划归成一个类。

在软件设计中，类，就是一个模板，它定义了通用于一个特定种类的所有对象 
的属性（变量）和行为（方法）。
</code></pre><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="什么是类-示例-xiyoujirole-java" tabindex="-1"><a class="header-anchor" href="#什么是类-示例-xiyoujirole-java" aria-hidden="true">#</a> 什么是类？ 示例 XiyoujiRole.java</h3><pre><code>西游记游戏软件中的游戏人物
孙悟空：孙悟空的武器是金箍棒，战斗力五颗星，耐力五颗星
唐  僧：唐僧没有武器，战斗力为零，耐力五颗星
猪八戒：猪八戒的武器是耙子，战斗力四颗星，耐力两颗星
沙  僧：沙僧的武器是月牙铲 ，战斗力三颗星，耐力四颗星
</code></pre><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="类的格式" tabindex="-1"><a class="header-anchor" href="#类的格式" aria-hidden="true">#</a> 类的格式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[类修饰符] class 类名
{
       类的成员
          …
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>修饰符一般为public，也可以没有修饰符。
注意类名的命名规范。类名一般大写
类的成员：
    成员变量（属性）
    成员方法（方法）
    嵌套类
通过“.”调用属性和方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的格式-1" tabindex="-1"><a class="header-anchor" href="#类的格式-1" aria-hidden="true">#</a> 类的格式</h3><p>示例 Employee.java</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Employee {
    String name;//属性
    int age;//属性
    double salary;//属性
    public String showName(){
        System.out.println(name);
        return name;
    }
   public int showAge(){
        System.out.println(age);
        return age;
   }
   public void updateName(String name2){
        name = name2;
   }
   public void getSalary(){
       System.out.println(&quot;The salary of this month is 2000&quot;);
   }
}
/**
*showName showAge 
*updateName getSalary 方法
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的成员" tabindex="-1"><a class="header-anchor" href="#类的成员" aria-hidden="true">#</a> 类的成员</h3><p>成员变量：</p><pre><code>[修饰符] 类型 属性名=[默认值];
</code></pre><p>其中修饰符有：public、private、protected,也可以省略不写。</p><p>例如：</p><pre><code>private int id;
private int age=20;
</code></pre><p>方法：</p><pre><code>[修饰符]  返回值类型 方法名(形参列表){ 	语句
}
</code></pre><h2 id="对象的创建和使用" tabindex="-1"><a class="header-anchor" href="#对象的创建和使用" aria-hidden="true">#</a> 对象的创建和使用</h2><h3 id="什么是对象" tabindex="-1"><a class="header-anchor" href="#什么是对象" aria-hidden="true">#</a> 什么是对象</h3><pre><code>类(class) — 是对某一类事物的描述
对象(object) — 是实际存在的某类事物的个体，
                            也称为实例(instance)
类是创建对象的模板，对象是类的实例。
</code></pre><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="创建对象" tabindex="-1"><a class="header-anchor" href="#创建对象" aria-hidden="true">#</a> 创建对象</h3><p>语法格式</p><pre><code>类名   对象名 = new   构造器
</code></pre><p>示例</p><pre><code>Employee   zhang = new   Employee( )
</code></pre><p>示例 TestEmployee.java</p><h3 id="构造器-构造方法-构造器-constructor" tabindex="-1"><a class="header-anchor" href="#构造器-构造方法-构造器-constructor" aria-hidden="true">#</a> 构造器（构造方法/构造器，Constructor）</h3><pre><code>具有与类相同的名称
不含返回值类型
不能在方法中用return语句返回一个值
一般访问权限为public
    在一个类中，具有上述特征的方法就是构造器。
</code></pre><h3 id="构造器的作用" tabindex="-1"><a class="header-anchor" href="#构造器的作用" aria-hidden="true">#</a> 构造器的作用</h3><pre><code>完成对象的创建，即完成对象的实例化
一般使用构造器来完成对成员变量的初始化
        示例   Employee.java
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>01  public class Person{
02      String name;
03      int age;
04      String sex;
05      
06      public Person( String n,int a, String s)    {
07          name=n;
08          age=a;
09          sex=s;
10      }
11      
12      public void sayHello(){
13          System.out.println(&quot;Hello, my name is &quot;+name);
14      }    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过实例Person ，可以看到使用带参数的构造器进行实例化简化了代码，在创建对象的同时给对象的属性赋值。此时，类由一个抽象的蓝图变化为一个具体的对象，同时对象的属性已经赋值。通过多次调用构造器，一个类可以实例化出多个对象。 构造器也是方法，但是它是特殊的方法而已。它也可以像普通方法一样发生重载。通常一个类中不止一个构造方法，而是有多个不同参数的构造器，用户可以根据需要选择不同的构造器创建对象。 注意在开发中，我们在编写自己的类时，应该根据需要提供相应的构造器，保证在使用这个类时，能够选择到合适的构造方法。 所有的对象都是通过构造器来创建的，也可以说任何对象都是通过内存分配操作符new 创建和开辟内存空间的。如果在开发时，没有明确的写出构造方法，在编译时编译器会发现该类没有构造器，这时编译器会自动的给这个类增加一个构造器，该构造器没有任何参数，我们称之为“默认的空构造器”。相反，如果我们在编写时，手写了一个或是若干个带参的构造器，那么，这个不带参的空构造器就不会再自动产生并存在。在这样的情况下，如果在某些情况下还想使用这样的无参数默认构造器的话，最好还是养成手写出这个无参数的构造器来，以备后用。否则在这个类中，将不再存在这个默认的构造器。 <img src="`+t+`" alt="" loading="lazy"></p><h3 id="默认的构造器" tabindex="-1"><a class="header-anchor" href="#默认的构造器" aria-hidden="true">#</a> 默认的构造器</h3><p>在Java中，每个类都至少要有一个构造器，如果程序员没有在类里定义构造器，系统会自动为这个类产生一个默认的访问权限为public且参数列表为空的构造器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Employee{
         ……

}

class Employee{
               ……
     public  Employee( )
    {

    }
               ……
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦编程者为该类定义了构造器，系统就不再提供默认的构造器</p><h2 id="☻-练习" tabindex="-1"><a class="header-anchor" href="#☻-练习" aria-hidden="true">#</a> ☻ 练习</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 下列关于类的定义的选项中，哪些可以通过new Thing()方法来创建该类的一个对象____?
A. public class Thing {}               
B. public class Thing {public Thing() {}}                                  
C. public class Thing {public Thing(void) {}} 
D. public class Thing {public Thing(String s) {}}                          
E. public class Thing {public void Thing() {} public Thing(String s) {}}
答案：A、B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象创建的内存模型" tabindex="-1"><a class="header-anchor" href="#对象创建的内存模型" aria-hidden="true">#</a> 对象创建的内存模型</h3><p>在java中所有的变量、数组、对象都是分配在内存中的，根据变量类型的不同分配的内存也有所不同。Java中主要有3种类型的变量：</p><pre><code>局部变量：定义在方法体中的变量；或是方法的形参。
实例变量：即类的属性，也是全局变量。
静态变量：在类中声明为static 的属性。	
</code></pre><p>内存的类别</p><pre><code>栈stack：栈的存取速度比堆快，效率高。在栈内保存基本数据类型的局部变
量和对象的引用值。
堆heap：堆可以保存那些对空间要求较大的变量。如对象的属性和数组的元
素。在堆内存中开辟空间，只能通过内存分配操作符号new，凡是出现关键字
 new的地方必定分配了一个堆内存。
我们在实例化一个对象时，同时操作了栈内存和堆内存。在栈内保存对象的首
地址，即   引用；在堆内存中保存了对象的属性。对对象的所有操作只能通过
引用完成，一旦引用出栈释放没有任何引用指向该对象，对象就变成垃圾失
效。
</code></pre><p>堆和栈分别存储哪些变量？</p><p>除了8种基本数据类型的变量，其他变量都是引用类型变量 类（class）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person  p ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接口（interface）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Animal a ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int[ ] c ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="对象创建的内存模型-1" tabindex="-1"><a class="header-anchor" href="#对象创建的内存模型-1" aria-hidden="true">#</a> 对象创建的内存模型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person  p  =  new  Person( “lisi”, 44, “male”);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="示例-person-java-persontest-java" tabindex="-1"><a class="header-anchor" href="#示例-person-java-persontest-java" aria-hidden="true">#</a> 示例 Person.java PersonTest.java</h3><p><img src="`+c+`" alt="" loading="lazy"> 内存结构参考java虚拟机视频</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person  p  =  new  Person( “zhang”, 33,”male”);
Person  q  =  new  Person( “lisi”, 44, “male”);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上所示，对象的属性name 、age、sex都分配在堆内存中，但是对象名 p、q都分配在栈内存中。p 、q也称为对象的引用(reference)，引用在java中是地址的同义词。 访问对象：在其他类中或main方法中，若想访问对象的属性或是方法必须先实例化这个类，然后通过对象名（引用）和点操作符来完成：</p><pre><code>对象名. 属性名（）；
对象名. 方法名（）；
如果在类内的方法中，访问本类的属性和方法就可以直接访问了。
</code></pre><h3 id="匿名对象" tabindex="-1"><a class="header-anchor" href="#匿名对象" aria-hidden="true">#</a> 匿名对象</h3><p>创建完对象，在调用该对象的方法时，也可以不定义对象的句柄，而直接调用这个对象的方法。这样的对象叫匿名对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person p1 = new Person();
p1.sayHello();

new Person().sayHello()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 Person.java PersonTest.java</p><p>使用匿名对象的情况</p><p>如果对一个对象只需要进行一次方法调用</p><h3 id="垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#垃圾回收机制" aria-hidden="true">#</a> 垃圾回收机制</h3><p>Java的垃圾回收机制是自动的，它保证程序健壮的主要手段，避免了由于程序员忘记回收内存而引起的内存泄漏，同时也避免了回收内存带来的代码繁琐。</p><p>垃圾回收机制实际上是JVM内部运行的一个优先级比较低的后台线程，这种多线程的模式使得java 具有更好的性能，完全不用程序员参与。</p><p>垃圾回收机制仅仅作用于堆内存，于栈内存无关。</p><p>对于程序员来说，对象何时变成垃圾呢？</p><pre><code>对象的引用被赋值为null； Person p = new Person( );   p = null;
一次性使用的匿名对象;	new Person( ).sayHello( );
超出生命周期的；如：
    for( int I = 0; i&lt; 100; i++){
        Person p = new Person( );
    }	
这里，变量p 被实例化100次，每结束一次循环，变量p就超出生命周期，对象变为垃圾。
</code></pre><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="g1垃圾回收器" tabindex="-1"><a class="header-anchor" href="#g1垃圾回收器" aria-hidden="true">#</a> G1垃圾回收器</h3><p>JDK7中引入了一个新的垃圾回收器，G1，它是Garbage First的缩写。G1回收器优先回收垃圾最多的区域。为了实现这个策略它把堆分成了多个区域，就好比Java 7之前分成三个区域那样（新生代，老生代和持久代）。G1回收器是一个可预测的回收器，同时对那些内存密集型的程序它还能保证较高的吞吐量。</p><h3 id="变量的作用域" tabindex="-1"><a class="header-anchor" href="#变量的作用域" aria-hidden="true">#</a> 变量的作用域</h3><h4 id="类变量" tabindex="-1"><a class="header-anchor" href="#类变量" aria-hidden="true">#</a> 类变量</h4><p>用static修饰的成员变量，它们在类被载入时创建，只要类存在，static变量就存在</p><h4 id="实例变量" tabindex="-1"><a class="header-anchor" href="#实例变量" aria-hidden="true">#</a> 实例变量</h4><p>类体中声明的成员变量，即非static的属性</p><h4 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h4><p>方法体中声明的变量，方法中的参数，或代码块中声明的变量，都是局部变量 局部变量只在方法调用的过程中有效，方法调用结束后失效</p><h3 id="变量的作用域-1" tabindex="-1"><a class="header-anchor" href="#变量的作用域-1" aria-hidden="true">#</a> 变量的作用域</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Employee {

    String name;//实例变量
    int age;//实例变量
    double salary;//实例变量

    public String showName(){
        String hello = “你好”;//hello为局部变量
        System.out.println(hello+name);
        return name;
    }
   public void updateName(String name2){//name2为局部变量
        name = name2;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量初始化的顺序" tabindex="-1"><a class="header-anchor" href="#变量初始化的顺序" aria-hidden="true">#</a> 变量初始化的顺序</h3><p>隐式赋予变量默认值 成员变量</p><p>显式赋予初始值</p><p>通过构造器体赋予新值</p><p>示例 PersianCat.java</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型	缺省值	类型	缺省值
byte	(byte)0	char	&#39;\\u0000 &#39; 
short	(short)0	float	0.0F
int	0	double	0.0D
long	0L	引用对象	null
boolean	false		
各类型变量默认初始化值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="this关键字" tabindex="-1"><a class="header-anchor" href="#this关键字" aria-hidden="true">#</a> this关键字</h2><h3 id="this关键字-1" tabindex="-1"><a class="header-anchor" href="#this关键字-1" aria-hidden="true">#</a> this关键字</h3><p>代表对象自身的引用 一个引用 指向调用该方法的当前对象 通常在类的方法定义中使用</p><h3 id="用this关键字的情况" tabindex="-1"><a class="header-anchor" href="#用this关键字的情况" aria-hidden="true">#</a> 用this关键字的情况</h3><p>方法中的变量与成员变量重名 在一个构造器中，调用其它重载的构造器 返回当前对象的引用 示例 Employee.java Dog.java</p><h2 id="本章重点总结" tabindex="-1"><a class="header-anchor" href="#本章重点总结" aria-hidden="true">#</a> 本章重点总结</h2><h3 id="面向对象的思想" tabindex="-1"><a class="header-anchor" href="#面向对象的思想" aria-hidden="true">#</a> 面向对象的思想</h3><h3 id="类的定义-1" tabindex="-1"><a class="header-anchor" href="#类的定义-1" aria-hidden="true">#</a> 类的定义</h3><pre><code>什么是类
类的属性
</code></pre><h3 id="对象的创建和使用-1" tabindex="-1"><a class="header-anchor" href="#对象的创建和使用-1" aria-hidden="true">#</a> 对象的创建和使用</h3><pre><code>创建对象
构造器
</code></pre><h3 id="this关键字-2" tabindex="-1"><a class="header-anchor" href="#this关键字-2" aria-hidden="true">#</a> this关键字</h3><h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h2><ol><li>定义一个点类Point，包含2个成员变量x、y分别表示x和y坐标，2个构造器Point()和Point(int x0,y0),以及一个movePoint（int dx,int dy）方法实现点的位置移动，创建两个Point对象p1、p2，分别调用movePoint方法后，打印p1和p2的坐标。[必作题]</li><li>定义一个矩形类Rectangle：（知识点：对象的创建和使用）[必做题]</li><li>1.定义三个方法：getArea()求面积、getPer()求周长，showAll()分别在控制台输出长、宽、面积、周长。</li><li>2 有2个属性：长length、宽width</li><li>3 通过构造方法Rectangle(int width, int length)，分别给两个属性赋值</li><li>4 创建一个Rectangle对象，并输出相关信息</li><li>定义一个笔记本类，该类有颜色（char）和cpu型号（int）两个属性。 [必做题]</li><li>1 无参和有参的两个构造方法；有参构造方法可以在创建对象的同时为每个属性赋值；</li><li>2 输出笔记本信息的方法</li><li>3 然后编写一个测试类，测试笔记本类的各个方法。</li><li>设计一个类Student，该类包括姓名、学号和成绩。设计一个方法，按照成绩从高到低的顺序输出姓名、学号和成绩信息。[选做题]</li><li>定义两个类，描述如下： [必做题]</li><li>1定义一个人类Person：</li><li>1.1定义一个方法sayHello()，可以向对方发出问候语“hello,my name is XXX”</li><li>1.2有三个属性：名字、身高、体重</li><li>2定义一个PersonCreate类：</li><li>2.1创建两个对象，分别是zhangsan，33岁，1.73；lishi，44，1.74</li><li>2.2分别调用对象的sayHello()方法。</li><li>定义两个类，描述如下： [必做题]</li><li>1定义一个人类Person：</li><li>1.1定义一个方法sayHello()，可以向对方发出问候语“hello,my name is XXX”</li><li>1.2有三个属性：名字、身高、体重</li><li>1.3通过构造方法，分别给三个属性赋值</li><li>2定义一个Constructor类：</li><li>2.1创建两个对象，分别是zhangsan，33岁，1.73；lishi，44，1.74</li><li>2.2分别调用对象的sayHello()方法。</li><li>定义一个汽车类Vehicle，要求如下：[选做题]</li><li>1属性包括：汽车品牌brand（String类型）、颜色color（String类型）和速度speed（double类型），并且所有属性为私有。</li><li>2至少提供一个有参的构造方法（要求品牌和颜色可以初始化为任意值，但速度的初始值必须为0）。</li><li>3为私有属性提供访问器方法。注意：汽车品牌一旦初始化之后不能修改。</li><li>4定义一个一般方法run()，用打印语句描述汽车奔跑的功能</li><li>5定义测试类VehicleTest，在其main方法中创建一个品牌为“benz”、颜色为“black”的汽车。</li></ol><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,146);function p(b,m){return i(),a("div",null,[n(" more "),u])}const x=e(o,[["render",p],["__file","java8.html.vue"]]);export{x as default};
