import{_ as d,X as s,Y as t,a1 as l,Z as e,$ as i,a2 as n,a0 as r,F as c}from"./framework-68dd73a2.js";const p="/blog/assets/Java_9_1.png",o="/blog/assets/Java_9_2.png",h="/blog/assets/Java_9_3.png",v="/blog/assets/Java_9_4.png",u="/blog/assets/Java_9_5.png",b="/blog/assets/Java_9_6.png",g="/blog/assets/Java_9_7.png",m="/blog/assets/Java_9_8.png",f="/blog/assets/Java_9_9.png",_="/blog/assets/Java_9_10.png",x="/blog/assets/Java_9_11.png",j="/blog/assets/Java_9_12.png",y="/blog/assets/Java_9_13.png",J="/blog/assets/Java_9_14.png",C="/blog/assets/Java_9_15.png",A="/blog/assets/Java_9_16.png",S="/blog/assets/Java_9_17.png",w="/blog/assets/Java_9_18.png",z="/blog/assets/Java_9_19.png",k="/blog/assets/Java_9_20.png",O="/blog/assets/Java_9_21.png",B="/blog/assets/Java_9_23.png",I="/blog/assets/Java_9_24.png",E="/blog/assets/Java_9_28.png",T={},X=r('<h1 id="java基础应用编程——-面向对象高级特性" tabindex="-1"><a class="header-anchor" href="#java基础应用编程——-面向对象高级特性" aria-hidden="true">#</a> Java基础应用编程—— 面向对象高级特性</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h2 id="本章内容" tabindex="-1"><a class="header-anchor" href="#本章内容" aria-hidden="true">#</a> 本章内容</h2><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="类的继承" tabindex="-1"><a class="header-anchor" href="#类的继承" aria-hidden="true">#</a> 类的继承</h2><h3 id="理解继承的含义" tabindex="-1"><a class="header-anchor" href="#理解继承的含义" aria-hidden="true">#</a> 理解继承的含义</h3><pre><code>在Java中定义一个类时，让该类通过关键字extends继承一个已有的类，这就是类的继承(泛化)。

被继承的类称为父类（超类，基类），新的类称为子类（派生类）。
    
子类继承父类的所有属性和方法，同时也可以增加自己的属性和方法。
</code></pre><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Java中只能单继承，也就是说每个类只能有一个直接父类；一个父类可以有多个子类。</p><p>其实，在继承关系中我们还能发现一个规律：子类是父类的一种，也可以说“子类就是父类”。如：人类就是动物，动物就是生物。记住这个定律对我们理解继承的概念非常有帮助。但是，反过来看，父类是子类的说法正确吗？</p><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="继承的语法和规则" tabindex="-1"><a class="header-anchor" href="#继承的语法和规则" aria-hidden="true">#</a> 继承的语法和规则</h3><p>示例 Employee.java Worker.java</p><pre><code>[修饰符]  class  子类名  extends  父类名
</code></pre><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="☻-练习-officer-java-testofficer-java" tabindex="-1"><a class="header-anchor" href="#☻-练习-officer-java-testofficer-java" aria-hidden="true">#</a> ☻ 练习 Officer.java TestOfficer.java</h3><p>用java中类的继承机制，实现Officer类，并设计一个测试程序TestOfficer类，来访问Officer类</p><h3 id="继承的好处" tabindex="-1"><a class="header-anchor" href="#继承的好处" aria-hidden="true">#</a> 继承的好处</h3><pre><code>使编码更高效
易维护
代码的重用

Java中只支持单继承，也就是说每个类只能有一个父类，不允许有多重继承
一个父类可以有多个子类
    
子类继承父类所有的属性和方法

示例     TestWorker.java
</code></pre><h3 id="子类实例化的过程" tabindex="-1"><a class="header-anchor" href="#子类实例化的过程" aria-hidden="true">#</a> 子类实例化的过程</h3><p>子类实例化时先实例化其父类，然后实例化子类。</p><p>要先调用父类的构造器，父类构造器运行完毕，才调用子类的构造器。</p><p>如果实例化类D，说出构造器执行的顺序。</p><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="super和this关键字" tabindex="-1"><a class="header-anchor" href="#super和this关键字" aria-hidden="true">#</a> super和this关键字</h3><p>super()</p><pre><code>作用：调用父类的构造器
只能出现在子类的构造器中，且必须是第一行
super()中的参数，决定了调用父类哪个构造器
如果子类构造器中没有出现super，那么编译器会默认加上super()，
即调用父类的空构造器，如果父类没有空构造器，编译器提示错误。
</code></pre><p>this()</p><pre><code>作用：调用本类的构造器
只能写在构造器的第一行
</code></pre><p>在同一个构造器中super()和this()不能同时出现</p><h3 id="子类实例化的过程-1" tabindex="-1"><a class="header-anchor" href="#子类实例化的过程-1" aria-hidden="true">#</a> 子类实例化的过程</h3><p>使用默认的构造器</p><p>在子类中的创建构造器 示例 Worker.java</p><pre><code>在子类中创建构造器时，必须调用父类的构造器
子类可以在自己的构造器中使用super关键字来调用父类的构造器

super (参数1，参数2，…);

如果使用super关键字调用父类构造器，必须写在该子类构造器的第一行
如调用的是父类中无参的构造器，则可以不写super( )
如果子类中调用了父类无参的构造器，而父类中没
 有无参构造器则系统编
译出错
</code></pre><p>super.</p><pre><code>指向父类的引用。

通过关键字super我们可以指定子类在构造时调用父类的哪个构造器，
达到先实例化父类然后实例化子类的目的。

子类的构造器默认的调用父类无参构造器，即子类构造器中没有用super
 指明调用父类哪个构造器的话，实际上编译器会自动的在子类构造器第
 一行加入代码super( );
</code></pre><p>this.</p><pre><code>指向本类的引用。

我们知道子类在实例化时必须调用父类的构造器，实际上有的子类构造器
也可以先调用本类的其他构造器，然后再通过那个构造器调用父类的构造
器

无论是调用父类的构造器还是子类的构造器，最终都是找到最顶级的父类自
上而下的实例化。只要中间环节有一个构造器没找到，这个子类就无法完成
实例化。
</code></pre><p>给定以下代码： <img src="`+m+`" alt="" loading="lazy"></p><pre><code> 下列描述哪些是正确的_____?

          A.   编译失败                    B. 代码正常运行
          C.   在第7行抛出异常      D. 在第2行抛出异常
</code></pre><p>答案：A</p><h2 id="java包的概念" tabindex="-1"><a class="header-anchor" href="#java包的概念" aria-hidden="true">#</a> Java包的概念</h2><h3 id="包的概念及应用" tabindex="-1"><a class="header-anchor" href="#包的概念及应用" aria-hidden="true">#</a> 包的概念及应用</h3><p>在Java中，包主要有以下用途 ：</p><pre><code>包允许将类组合成较小的单元 
有助于避免命名冲突 
包允许在更广的范围内保护类、数据和方法 
</code></pre><p>包可以是类、接口和子包的集合</p><p>将类放入包中</p><pre><code>       package   包名 ;
</code></pre><p>注意： 在java中位于包中的类，在文件系统中的存放位置，必须有与包名层次相对应的目录结构 package语句作为java源文件的第一条语句 每个源文件只能声明一个包 如果没有package语句，则默认为无名包</p><h3 id="java类库中常用的包" tabindex="-1"><a class="header-anchor" href="#java类库中常用的包" aria-hidden="true">#</a> Java类库中常用的包</h3><p>java.lang</p><pre><code>Java语言包，任何程序中，该包都被自动导入。
</code></pre><p>java.awt</p><pre><code>图形用户界面包。 
</code></pre><p>java.awt.event</p><pre><code>图形用户界面事件处理包。 
</code></pre><p>java.swing</p><pre><code>跨平台轻量级组件包。
</code></pre><p>java.sql</p><pre><code>数据库访问包。
</code></pre>`,62),V={href:"http://java.io",target:"_blank",rel:"noopener noreferrer"},D=e("pre",null,[e("code",null,`这个包由对您的输入/输出操作有用的类组成。
`)],-1),P=e("p",null,"java.util",-1),M=e("pre",null,[e("code",null,`该包提供了许多创建如：lists, calendar, date等所需要的类和接口。
`)],-1),N={href:"http://java.net",target:"_blank",rel:"noopener noreferrer"},W=r(`<pre><code>该包提供了许多进行TCP/IP网络编程的类和接口。
</code></pre><p>import导入包中的类 包名.路径名</p><pre><code>package test;
class Cat  extends p08.Animal{…}
</code></pre><p>使用import关键字引入其它包中的类</p><pre><code>package test;
import p08.Animal;
class Cat  extends Animal{…}
</code></pre><p>位于同一包中的类可以直接访问</p><p>导入包中所有的类</p><pre><code>   import   包名.*;
</code></pre><p>导入子包中所有的类</p><pre><code>   import   包名.子包名.*;
</code></pre><p>导入包中的某个类</p><pre><code>   import   包名.子包名.类名;
</code></pre><h2 id="权限访问操作符" tabindex="-1"><a class="header-anchor" href="#权限访问操作符" aria-hidden="true">#</a> 权限访问操作符</h2><p>使用访问权限修饰符对类的成员进行控制，在java中称为“封装”。</p><p>不过不要把封装理解为private，不要误认为不能访问成员才是封装。实际上对成员访问权限的任何控制（包括public）都可以称为封装机制。</p><p>构造器和类的权限通常为public；private权限最小，限制类外访问，一般把属性设为private，让其他类不能直接访问属性，达到保护属性的目的；friendly是默认权限，即不使用权限修饰符时，即为friendly，该权限声明的成员在类内以及在同一个包中的其他类可以访问；而protected所修饰的成员在类内、同一个包中、所在类的子类中都可以访问。</p><p>public &gt; protected &gt; friendly &gt; private</p><h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h3><p>信息隐藏,隐藏对象的实现细节，不让用户看到</p><p>将东西包装在一起，然后以新的完整形式呈现出来</p><pre><code>例如，两种或多种化学药品组成一个胶囊
将方法和属性一起包装到一个单元中，单元以类的形式实现
</code></pre><p>“隐藏属性、方法或实现细节的过程称为封装。”</p><p>隐藏类的实现细节</p><p>让使用者只能通过事先定制好的方法来访问数据，可以方便地加入控制逻辑，限制对属性的不合理操作</p><p>便于修改，增强代码的可维护性</p><p>可进行数据检查</p><p>示例 Employor.java TestEmployer.java</p><h3 id="访问权限修饰符" tabindex="-1"><a class="header-anchor" href="#访问权限修饰符" aria-hidden="true">#</a> 访问权限修饰符</h3><figure><img src="`+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>用来控制类的成员和类的使用范围</p><p>类成员的访问权限修饰符：private、default、protected、public</p><p>类的访问权限修饰符：public、default</p><figure><img src="'+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>       示例：Access.java    TestAccess.java
</code></pre><p>☻ 练习<br> 给定以下代码：</p><figure><img src="`+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>下列选项正确的是？
A. 编译失败         B. 成功编译并执行
C. 编译成功，但运行时在ClassTest.java的第5行抛出异常   
D.编译成功，但运行时在ClassTest.java的第6行抛出异常 
答案：A
</code></pre><h2 id="方法的覆盖" tabindex="-1"><a class="header-anchor" href="#方法的覆盖" aria-hidden="true">#</a> 方法的覆盖</h2><h3 id="方法的覆盖-override" tabindex="-1"><a class="header-anchor" href="#方法的覆盖-override" aria-hidden="true">#</a> 方法的覆盖（override)</h3><pre><code>重写（rewrite）
对从父类中继承来的方法进行改造
在子类继承父类时发生
</code></pre><h3 id="方法覆盖的规则" tabindex="-1"><a class="header-anchor" href="#方法覆盖的规则" aria-hidden="true">#</a> 方法覆盖的规则</h3><p>在子类中的覆盖方法与父类中被覆盖的方法应具有</p><pre><code>相同的方法名
相同的参数列表（参数数量、参数类型、参数顺序都要相同）
相同的返回值类型
子类覆盖方法的访问权限要不小于父类中被覆盖方法的访问权限
示例       Worker.java
</code></pre><h3 id="☻-练习" tabindex="-1"><a class="header-anchor" href="#☻-练习" aria-hidden="true">#</a> ☻ 练习</h3><p>给定下列代码： <img src="`+j+'" alt="" loading="lazy"> 当在第6行加入什么方法时会引起编译错误？ <img src="'+y+`" alt="" loading="lazy"> 答案：B</p><h3 id="☻-练习-1" tabindex="-1"><a class="header-anchor" href="#☻-练习-1" aria-hidden="true">#</a> ☻ 练习</h3><p>给定类</p><pre><code>class A {
int method1(int a, double b) { return 0; }
</code></pre><p>在其子类中</p><pre><code> 下列哪些覆盖方法可以正确的声明_____
A. int method1(int a, double b) { return 1; }
B. int method1(int a, long b) { return 1; } 
C. int method1(int b,double a){return 1;}
D. short method1(int a, double b) { return 1: } 
E. int method1(double b, int a) { return 1; } 	
答案：A C
</code></pre><h2 id="引用数据类型的转换" tabindex="-1"><a class="header-anchor" href="#引用数据类型的转换" aria-hidden="true">#</a> 引用数据类型的转换</h2><h3 id="上溯造型" tabindex="-1"><a class="header-anchor" href="#上溯造型" aria-hidden="true">#</a> 上溯造型</h3><p>示例：TestStudent.java</p><p>向上转型（Upcasting）— 子类转换为父类，自动转换；</p><pre><code>前提 — 具有继承或实现关系
向上转换损失了子类新扩展的属性和方法，仅可以使用从父类中继承的属性和方法
</code></pre><figure><img src="`+J+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="下溯造型-示例-teststudent-java" tabindex="-1"><a class="header-anchor" href="#下溯造型-示例-teststudent-java" aria-hidden="true">#</a> 下溯造型 示例：TestStudent.java</h3><p>向下转型（Downcasting）：强制转换</p><pre><code>将父类对象显示的转换成子类类型。

曾经向上转换过的对象，才能再向下转换。对象不允许不经过上溯造型而直接下溯造型。

如下写法是会出现运行期错误：

Person p = new Person();
Student s = (Student)p;

Animal a = new Cat( );
Cat c = (Cat)a;
</code></pre><p>instanceof 运算符</p><p>其实经过上溯和下溯造型之后，我们很难知道某个引用到底指向哪种类型的对象了。</p><p>可以通过instanceof来判断该经过上溯转型后是哪一个子类的。</p><p>instanceof运算符的一般格式：</p><pre><code>object instanceof class
object instanceof interface
返回值都是boolean
</code></pre><h3 id="instanceof-运算符" tabindex="-1"><a class="header-anchor" href="#instanceof-运算符" aria-hidden="true">#</a> instanceof 运算符</h3><p>判断一个类是否实现了某个接口</p><pre><code>   对象   instanceof   接口
</code></pre><p>判断一个实例对象是否属于一个类</p><pre><code>   对象   instanceof   类
</code></pre><p>它的返回值是boolean型的</p><p>示例 TestStudent.java</p><h2 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h2><h3 id="多态-1" tabindex="-1"><a class="header-anchor" href="#多态-1" aria-hidden="true">#</a> 多态</h3><p>简单来说，多态是具有表现多种形态的能力的特征 同一个实现接口，使用不同的实例而执行不同操作</p><figure><img src="`+C+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="多态-动态绑定、polymorphism" tabindex="-1"><a class="header-anchor" href="#多态-动态绑定、polymorphism" aria-hidden="true">#</a> 多态（动态绑定、Polymorphism )</h3><p>不同的对象对同一行为作出的不同响应</p><p>多态存在的三个必要条件</p><pre><code>要有继承，或实现
要有重写
父类引用指向子类对象

一旦满足以上3个条件，当调用父类中被重写的方法后，
</code></pre><p>运行时创建的是哪个子类的对象，就调用该子类中重写的那个方法</p><p>在执行期间（而非编译期间）判断所引用对象的实际类型，根据其实际类型调用相应的方法</p><h3 id="多态的优点" tabindex="-1"><a class="header-anchor" href="#多态的优点" aria-hidden="true">#</a> 多态的优点</h3><pre><code>简化代码
改善代码的组织性和可读性
易于扩展
</code></pre><h3 id="☻-示例-parker-java-vehicle-java-bus-java-truck-java-car-java" tabindex="-1"><a class="header-anchor" href="#☻-示例-parker-java-vehicle-java-bus-java-truck-java-car-java" aria-hidden="true">#</a> ☻ 示例 Parker.java Vehicle.java Bus.java Truck.java Car.java</h3><pre><code>在停车场收费系统中，
收费者会根据车型的不同收取不同的停车费，其中，
客车：15元/小时
货车：12元/小时
轿车：8元/小时
编写java程序完成此功能
</code></pre><h2 id="static关键字" tabindex="-1"><a class="header-anchor" href="#static关键字" aria-hidden="true">#</a> static关键字</h2><figure><img src="`+A+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="静态变量" tabindex="-1"><a class="header-anchor" href="#静态变量" aria-hidden="true">#</a> 静态变量</h3><p>所有对象共享</p><p>也称为类变量</p><p>用static修饰的成员变量，它们在类被载入时创建，只要类存在，static变量就存在（参考java虚拟机视频）</p><p>两种方式访问：</p><pre><code>直接访问：类名.属性；
实例化后访问：对象名.属性
</code></pre><figure><img src="`+S+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h3><p>不需要实例化，可以直接访问</p><pre><code>也称为类方法
</code></pre><p>两种方式访问：</p><pre><code>直接访问：类名.方法名()
实例化后访问：对象名.方法名()
</code></pre><p>static方法的作用</p><pre><code>简化方法的使用；
便于访问静态属性；
</code></pre><p>注意事项</p><pre><code>静态方法里只能直接访问静态成员，而不能直接访问类中的非静态成员
静态方法中不能使用this、super关键字
静态方法不能被非静态方法覆盖，静态方法不能修饰构造器
</code></pre><figure><img src="`+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="静态代码块" tabindex="-1"><a class="header-anchor" href="#静态代码块" aria-hidden="true">#</a> 静态代码块</h2><p>一个类中由static关键字修饰的，不包含在任何方法体中的代码块</p><p>当类被载入时，静态代码块被执行，且只被执行一次</p><p>静态块经常用来进行类属性的初始化</p><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>以下代码的执行结果是_____？ <img src="'+k+`" alt="" loading="lazy"></p><pre><code>A. 编译失败     
B. 编译成功，输出“0”
C. 编译成功，输出“1”
D. 编译成功，输出“2”
答案：A
</code></pre><h3 id="☻-练习-2" tabindex="-1"><a class="header-anchor" href="#☻-练习-2" aria-hidden="true">#</a> ☻ 练习</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class CircleStatic
{
    static double pi = 3.14;
    int radius=100;
    public static void main(String[ ] args)
    {
        System.out.println( _1_ );  //打印pi
        
        __________2__________ ;
        System.out.println(__3__); //打印radius   
    }
}
答案：
1、pi
2、CircleStatic c = new CircleStatic()
3、c.radius
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h3><p>单例模式（singleton）：保证一个类仅有一个实例，并提供一个访问它的全局访问点</p><p>单例模式要点：</p><pre><code>某个类只能有一个实例
它必须自行创建这个示例
必须自行向整个系统提供这个实例
</code></pre><p>单例模式实现：</p><pre><code>拥有一个私有构造器 
提供一个自身静态私有的成员变量
提供一个公有的静态公有的方法
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton { 
　　//在自己内部定义自己的一个实例，只供内部调用 
　　private static Singleton instance = new Singleton(); 
　　private Singleton(){ 
　　	//do something 
　　} 
　　//这里提供了一个供外部访问本class的静态方法，可以直接访问 
　　public static Singleton getInstance(){ 
　	　return instance; 
　　} 
　} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="final关键字" tabindex="-1"><a class="header-anchor" href="#final关键字" aria-hidden="true">#</a> final关键字</h2><h3 id="final关键字-1" tabindex="-1"><a class="header-anchor" href="#final关键字-1" aria-hidden="true">#</a> final关键字</h3><p>final可以修饰的元素：</p><p>类：不能被继承</p><p>变量(属性和局部变量)：不能被重新赋值</p><pre><code>在声明时赋值，或在构造器中赋值
系统不会对final属性默认的赋初始值
</code></pre><p>方法：不能在子类中被覆盖，即不能修改。</p><p>示例 Final.java TestFinal.java</p><p>在程序中经常使用的一些常量，如圆周率，没必要在程序中频繁的修改它那么我们可以：</p><figure><img src="`+O+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其次，设置为final类型，赋值以后不能再改变；</p><p>最后注意遵守常量命名规范，所有字母大写、单词之间用下划线。</p><h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2><p>抽象类与final类的区别？</p><p>final方法是否可以被子类继承？</p><h2 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h2><h3 id="抽象类和抽象方法的概念" tabindex="-1"><a class="header-anchor" href="#抽象类和抽象方法的概念" aria-hidden="true">#</a> 抽象类和抽象方法的概念</h3><p>抽象类是抽象方法和非抽象方法的集合</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[访问权限修饰符]  abstract   class   类名 {
                             ……
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特殊情况 全部是抽象方法 全部为非抽象方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>abtract class A {
      String   name; 
      abstract int method1(int a, int b); 
      void  sayHi( ){
            System.out.println(“Hello!”);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象类和抽象方法的概念-1" tabindex="-1"><a class="header-anchor" href="#抽象类和抽象方法的概念-1" aria-hidden="true">#</a> 抽象类和抽象方法的概念</h3><p>抽象方法 只有方法声明，没有方法实现的方法</p><pre><code>[访问权限修饰符]  abstract   返回值类型    抽象方法名 (参数列表) ; 

abstract class A {
    
abstract int method1(int a, int b);

}
</code></pre><h3 id="抽象类的规则" tabindex="-1"><a class="header-anchor" href="#抽象类的规则" aria-hidden="true">#</a> 抽象类的规则</h3><p>注意：</p><pre><code>抽象类不能被实例化；
其包含的抽象方法必须在其子类中被实现，否则该子类只能声明为abstract；
抽象方法不能为static；
</code></pre><p>在下列情况下，一个类必须声明为抽象类：</p><pre><code>当一个类的一个或多个方法是抽象方法时；
当类是一个抽象类的子类，并且没有实现父类的所有抽象方法，即只实现部分；
当一个类实现一个接口，并且不能为全部抽象方法都提供实现时；
</code></pre><h3 id="☻-练习-3" tabindex="-1"><a class="header-anchor" href="#☻-练习-3" aria-hidden="true">#</a> ☻ 练习</h3><p>给定以下代码：</p><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-889a4f67517b3cJava_9_22.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    执行下列哪些操作后，可以让代码通过编译？
A.对methodA方法添加方法体
B.将5~7行，用“;”代替
C.删除class前的abstract关键字
D.删除methodA方法前的abstract关键字
E.删除methodB方法前的abstract关键字
答案：BE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接-口-interface" tabindex="-1"><a class="header-anchor" href="#接-口-interface" aria-hidden="true">#</a> 接 口（interface）</h2><h3 id="接口的概念-示例-audiodevice-java-videodevice-java" tabindex="-1"><a class="header-anchor" href="#接口的概念-示例-audiodevice-java-videodevice-java" aria-hidden="true">#</a> 接口的概念 示例 AudioDevice.java VideoDevice.java</h3><figure><img src="`+B+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>接口对类来说是一套规范，是一套行为协议；</p><p>接口不是一个类，不能实例化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[访问权限修饰符]  interface   接口名 {
                          
                    接口的成员

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口的成员： 常量(字段) 抽象方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface Runnable {

    public abstract void run();

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意： 接口不是一个类，没有构造器，不能被实例化 接口使用interface关键字来定义，而不是class 接口默认： <img src="`+I+`" alt="" loading="lazy"> 常量：public static final 抽象方法： public abstract</p><h3 id="☻-练习-4" tabindex="-1"><a class="header-anchor" href="#☻-练习-4" aria-hidden="true">#</a> ☻ 练习</h3><p>给定以下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface Foo{
    int k = 4;
}
下列选项中，哪些选项可以用来替代第2行代码？
![](/assets/Java_9_25.png)
public int k =4;
static int k = 4;
private int k = 4;
abstract int k = 4;
答案：ABC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="☻-练习-5" tabindex="-1"><a class="header-anchor" href="#☻-练习-5" aria-hidden="true">#</a> ☻ 练习</h3><p>下列选项中，哪些可以定义在一个接口中？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>A void methoda();
B public double methoda();
C public final double methoda();
D static void methoda(double dl);
E protected void methoda(double dl);
答案：AB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口的概念" tabindex="-1"><a class="header-anchor" href="#接口的概念" aria-hidden="true">#</a> 接口的概念</h3><p><img src="https://upload-images.jianshu.io/upload_images/5227364-ba77bd8c5a8d5dJava_9_26.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"> 示例 VADevice.java</p><p>接口可以实现多继承：</p><p>用接口可以实现混合类型（主类型，副类型），java 中可以通过接口分出主次类型</p><p>主类型使用继承，副类型，使用接口实现</p><p>接口可以使方法的定义和实现相分离，降低模块间或系统间的耦合性</p><p>针对接口编程可以屏蔽不同实现间的差异，看到的只是实现好的功能。</p><h3 id="接口和类的关系" tabindex="-1"><a class="header-anchor" href="#接口和类的关系" aria-hidden="true">#</a> 接口和类的关系</h3><p>类实现接口 — implements</p><p>为了使用一个接口，你要编写实现接口的类</p><p>如果一个类要实现一个接口，那么这个类就必须实现接口中所有抽象方法。否则这个类只能声明为抽象类</p><p>多个无关的类可以实现一个接口，一个类可以实现多个无关的接口</p><p>一个类可以在继承一个父类的同时，实现一个或多个接口</p><p>示例 Television.java</p><h3 id="接口和类的关系-1" tabindex="-1"><a class="header-anchor" href="#接口和类的关系-1" aria-hidden="true">#</a> 接口和类的关系</h3><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-a6d3026f2211ce8c.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="☻-示例-student-java-consumer-java-person-java" tabindex="-1"><a class="header-anchor" href="#☻-示例-student-java-consumer-java-person-java" aria-hidden="true">#</a> ☻ 示例 Student.java Consumer.java Person.java</h3><pre><code>有一个Student类
该类继承了Person类，并实现了Consumer接口
该类具有String类型的属性school
并有一个study方法，在该方法中，系统可打印出学生在那所学校学习
并创建一个测试方法，测试Student类
</code></pre><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-47be04cJava_9_27.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="接口与抽象类的对比" tabindex="-1"><a class="header-anchor" href="#接口与抽象类的对比" aria-hidden="true">#</a> 接口与抽象类的对比</h3><p>接口不能含有任何非抽象方法，而抽象类可以。</p><p>类可以实现多个接口，但只能有一个父类。</p><p>接口和接口之间可以多继承</p><pre><code> 如：public interface A extends B,C
         B,C也是接口.
</code></pre><p>抽象类可以理解为抽象方法和非抽象方法的混合体，而接口中的方法完全是抽象方法，是一套纯粹的规范。一般来说，有关系的类才能继承同一个抽象类，而无关的类不可能有同一个抽象父类，但是无关的类可以实现同一个接口。</p><h2 id="内部类" tabindex="-1"><a class="header-anchor" href="#内部类" aria-hidden="true">#</a> 内部类</h2><h3 id="内部类特性" tabindex="-1"><a class="header-anchor" href="#内部类特性" aria-hidden="true">#</a> 内部类特性</h3><p>内部类就是定义在另一个类内部的类。</p><p>内部类对于同一包中的其它类来说，内部类能够隐藏起来。</p><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><p>内部类可以访问其外部类中所有的属性和方法</p><p>无需创建外部类的对象，即可从内部类访问外部类的变量和方法。</p><p>必须创建内部类的对象，否则无法从外部类访问内部类的变量和方法。</p><p>如果内部类中有和外部类同名的变量或方法，则内部类的变量和方法将获得比外部类的变量和方法更高的优先级。</p><p>不能定义static变量</p><h3 id="内部类特性-1" tabindex="-1"><a class="header-anchor" href="#内部类特性-1" aria-hidden="true">#</a> 内部类特性</h3><pre><code>示例 Outer.java
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Outer
{
    private int varOuter=100;
    class Inner
    {
        int varInner=200;
        public void showOuter()
        {
            System.out.println(varOuter); //是否能够输出？
        }
    }
    public void showInner()
    {
        Inner i=new Inner();
        System.out.println(i.varInner);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个类只会被这个类所调用，其他类不会使用他，你可以把它定义成一内部类，这样可以隐藏实现细节，避免错误的调用。</p><h3 id="内部类特性-2" tabindex="-1"><a class="header-anchor" href="#内部类特性-2" aria-hidden="true">#</a> 内部类特性</h3><p>普通类的访问权限修饰符</p><pre><code>default
public
</code></pre><p>内部类的访问权限修饰符</p><pre><code>default
public 
protected
private
</code></pre><p>示例 Outer3.java OuterTest.java</p><p>在Outer内访问Inner,只需如下:</p><pre><code>   Inner in = new Inner() ;
</code></pre><p>在Outer外访问Inner,必须如下:</p><pre><code>   Outer o = new Outer(); //实例化外部类
   Outer.Inner oi = o.new Inner(); //实例化内部类
</code></pre><h3 id="静态内部类" tabindex="-1"><a class="header-anchor" href="#静态内部类" aria-hidden="true">#</a> 静态内部类</h3><p>用static标识的内部类为静态内部类。</p><p>静态内部类作为外部类的静态成员，不能访问外部类非静态成员。</p><p>非静态内部类只能定义非静态成员，而静态内部类可以定义静态成员和非静态成员。</p><p>使用Outer.Inner inn=new Outer.Inner()方式实例化静态内部类。 <img src="`+E+`" alt="" loading="lazy"> 非静态内部类不可以使用上面的方式实例化。</p><h3 id="局部内部类" tabindex="-1"><a class="header-anchor" href="#局部内部类" aria-hidden="true">#</a> 局部内部类</h3><p>在一个类的方法体中或程序块内定义的内部类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class  A{
    int a;
    public void method(){     
    }
    class B{ }
}
类中定义的内部类
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class A{
    int a;
    public void method( int c ){
        int b=0;
        class B{ }
    }
}
局部内部类
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Outer2 {
      public int a = 1;
      private int b = 2;
      public void method( final int c) {
          int d = 3;
          final int e = 2;
          class Inner {
              private void iMethod( int e) {
                  //System.out.println(e);
              }
          }
      }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在方法定义的内部类中只能访问方法中的final类型的局部变量</p><h2 id="本章重点总结" tabindex="-1"><a class="header-anchor" href="#本章重点总结" aria-hidden="true">#</a> 本章重点总结</h2><pre><code>类的继承
Java中的包和访问修饰符
方法的覆盖
引用数据类型的转换
多态
static关键字
抽象类和接口
final关键字
</code></pre><h3 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h3><ol><li>创建一个球员类，并且该类最多只允许创建十一个对象。提示利用 static 和 封装性来完成。 [必做题] 类图如下：</li></ol><p><img src="https://upload-images.jianshu.io/upload_images/5227364-7868fd3f2f6bJava_9_30.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"> 效果如下：</p><ol start="2"><li>设计2个类，要求如下：（知识点：类的继承 方法的覆盖） [必做题]</li></ol><p>2.1 定义一个汽车类Vehicle，</p><p>2.1.1 属性包括：汽车品牌brand（String类型）、颜色color（String类型）和速度speed（double类型）。</p><p>2.1.3 为属性提供访问器方法。注意：汽车品牌一旦初始化之后不能修改。</p><p>2.1.4 定义一个一般方法run()，用打印语句描述汽车奔跑的功能</p><p>2.1.5 在main方法中创建一个品牌为“benz”、颜色为“black”的汽车。</p><p>2.2 定义一个Vehicle类的子类轿车类Car，要求如下：</p><p>2.2.1 轿车有自己的属性载人数loader（int 类型）。</p><p>2.2.2 提供该类初始化属性的构造方法。</p><p>2.2.3 重新定义run()，用打印语句描述轿车奔跑的功能。</p><p>2.2.4 在main方法中创建一个品牌为“Honda”、颜色为“red”，载人数为2人的轿车。</p><ol start="3"><li>设计三个类，分别如下：（知识点：抽象类及抽象方法） [必做题]</li></ol><p>3.1 设计Shape表示图形类，有面积属性area、周长属性per，颜色属性color，有两个构造方法（一个是默认的、一个是为颜色赋值的），还有3个抽象方法，分别是：getArea计算面积、getPer计算周长、showAll输出所有信息，还有一个求颜色的方法getColor。 3.2 设计 2个子类：</p><p>3.2.1 Rectangle表示矩形类，增加两个属性，Width表示长度、height表示宽度，重写getPer、getArea和showAll三个方法，另外又增加一个构造方法（一个是默认的、一个是为高度、宽度、颜色赋值的）。</p><p>3.2.2 Circle表示圆类，增加1个属性，radius表示半径，重写getPer、getArea和showAll三个方法，另外又增加两个构造方法（为半径、颜色赋值的）。</p><p>3.3 在main方法中，声明创建每个子类的对象，并调用2个子类的showAll方法。</p><ol start="4"><li>Cola公司的雇员分为以下若干类：(知识点：多态) [必做题]</li></ol><p>4.1 ColaEmployee ：这是所有员工总的父类，属性：员工的姓名,员工的生日月份。方法：getSalary(int month) 根据参数月份来确定工资，如果该月员工过生日，则公司会额外奖励100 元。 4.2 SalariedEmployee ： ColaEmployee 的子类，拿固定工资的员工。属性：月薪</p><p>4.3 HourlyEmployee ：ColaEmployee 的子类，按小时拿工资的员工，每月工作超出160 小时的部分按照1.5 倍工资发放。属性：每小时的工资、每月工作的小时数</p><p>4.4 SalesEmployee ：ColaEmployee 的子类，销售人员，工资由月销售额和提成率决定。属性：月销售额、提成率</p><p>4.5 定义一个类Company，在该类中写一个方法，调用该方法可以打印出某月某个员工的工资数额，写一个测试类TestCompany,在main方法，把若干各种类型的员工放在一个ColaEmployee 数组里，并单元出数组中每个员工当月的工资。</p><ol start="5"><li>利用接口实现动态的创建对象[选做题] 5.1 创建4个类： 苹果 香蕉 葡萄 园丁</li></ol><p>5.2 在三种水果的构造方法中打印一句话. 以苹果类为例 class apple { public apple() { System.out.println(“创建了一个苹果类的对象”); } } 类图如下：</p><p>5.3 要求从控制台输入一个字符串，根据字符串的值来判断创建三种水果中哪个类的对象 如图：</p><ol start="6"><li>编写三个系别的学生类：英语系，计算机系，文学系（要求通过继承学生类） [选做题]</li></ol><p>6.1各系有以下成绩： 英语系： 演讲，期末考试，期中考试； 计算机系：操作能力，英语写作，期中考试，期末考试； 文学系： 演讲，作品，期末考试，期中考试;</p><p>6.2各系总分评测标准： 英语系： 演讲 50% 期末考试 25% 期中考试 25% 计算机系： 操作能力 40% 英语写作 20% 期末考试 20% 期中考试 20% 文学系： 演讲 35% 作品 35% 期末考试 15% 期中考试 15%</p><p>6.3定义一个可容纳5个学生的学生类数组，使用随机数给该数组装入各系学生的对象，然后按如下格式输出数组中的信息： 学号:XXXXXXXX 姓名：XXX 性别：X 年龄：XX 综合成绩：XX</p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java基础应用编程—— 面向对象高级特性</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,266);function F(H,L){const a=c("ExternalLinkIcon");return s(),t("div",null,[l(" more "),X,e("p",null,[e("a",V,[i("java.io"),n(a)])]),D,P,M,e("p",null,[e("a",N,[i("java.net"),n(a)])]),W])}const q=d(T,[["render",F],["__file","java9.html.vue"]]);export{q as default};
