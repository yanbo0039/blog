import{_ as o,X as n,Y as l,a1 as s,Z as t,$ as d,a2 as r,a0 as a,F as i}from"./framework-68dd73a2.js";const h={},c={id:"_78-java标识符命名规范-md",tabindex:"-1"},p=t("a",{class:"header-anchor",href:"#_78-java标识符命名规范-md","aria-hidden":"true"},"#",-1),_={href:"http://xn--78-Java-ey3lp6ae34lp74biztg8trng.md",target:"_blank",rel:"noopener noreferrer"},m=a('<ul><li><p>Java中的包、类、方法、参数和变量的名称</p></li><li><p>标识符的命名规则</p><ul><li><p>必须以字母、下划线（_）或美元符号（$）开头</p></li><li><p>余下的字符可以是下划线、美元符号或任何的字母或数字，长度不限。标识符中不能有空格。</p></li><li><p>不能使用Java中的关键字或者保留字做为标识符</p></li></ul></li></ul><table><thead><tr><th>元素</th><th>规范</th><th>示例</th></tr></thead><tbody><tr><td>类名</td><td>Pascal规则</td><td>Person StudentDemo</td></tr><tr><td>变量名</td><td>Camel规则</td><td>age height avgValue</td></tr><tr><td>方法名</td><td>Camel规则</td><td>getAge setUserName</td></tr><tr><td>包名</td><td>全部小写</td><td>com.tencent</td></tr><tr><td>常量名</td><td>全部大写</td><td>MAX_VALUE</td></tr></tbody></table><p>大到工程名，小到变量名，还有包名，类名，还有方法名这些都是标识符</p><ol><li>标识符有哪些？</li></ol><p>工程名</p><p>包名</p><p>类名</p><p>方法名</p><p>变量名</p><ol start="2"><li>标识符命名规范：</li></ol><p>工程名：简短 ，全部英文字母 ，小写 hospitalInformationSystem × his √</p><p>包名：域名.公司名.工程名.模块名<br> net.tencent.hospitalInformationSystem × net.tencent.his √</p><p>类名：首字母大写，驼峰命名法 订单明细类：OrderDetail.java __/_<em>/_</em></p><p>方法名：首字母小写，驼峰命名法 显示名字的方法：displayName()</p><p>变量名：首字母小写，驼峰命名法</p><p>dao： DataAccessObject 数据访问对象</p><ol start="3"><li>标识符的命名规则：</li></ol><p>必须以字母、下划线（_）或美元符号（$）开头</p><p>余下的字符可以是下划线、美元符号或任何的字母或数字，长度不限。标识符中不能有空格。</p><p>不能使用Java中的关键字或者保留字做为标识符</p>',20),u=t("strong",null,"拓展知识：",-1),f={href:"https://www.runoob.com/eclipse/eclipse-shortcuts.html",target:"_blank",rel:"noopener noreferrer"},b=a("<table><thead><tr><th>关键字/保留字</th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td>abstract</td><td>continue</td><td>goto</td><td>null</td><td>switch</td></tr><tr><td>assert</td><td>default</td><td>if</td><td>package</td><td>synchronized</td></tr><tr><td>boolean</td><td>do</td><td>implements</td><td>private</td><td>this</td></tr><tr><td>break</td><td>double</td><td>import</td><td>protected</td><td>throw</td></tr><tr><td>byte</td><td>else</td><td>instanceof</td><td>public</td><td>throws</td></tr><tr><td>case</td><td>extends</td><td>int</td><td>return</td><td>transient</td></tr><tr><td>catch</td><td>final</td><td>interface</td><td>short</td><td>try</td></tr><tr><td>char</td><td>finally</td><td>long</td><td>static</td><td>void</td></tr><tr><td>class</td><td>float</td><td>native</td><td>strictfp</td><td>volatile</td></tr><tr><td>const</td><td>for</td><td>new</td><td>super</td><td>while</td></tr></tbody></table>",1),v=t("em",null,"Java标识符命名规范",-1),g={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"},x=t("hr",null,null,-1),y=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),d(" 分割线")],-1),k=t("hr",null,null,-1),w=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function N(V,j){const e=i("ExternalLinkIcon");return n(),l("div",null,[s(" more "),t("h1",c,[p,d(),t("a",_,[d("78-Java标识符命名规范.md"),r(e)])]),m,t("p",null,[u,d(),t("a",f,[d("Eclipse快捷键大全"),r(e)])]),b,t("p",null,[t("strong",null,[d("以上就是我关于 "),v,d(" 知识点的整理与总结的全部内容，"),t("a",g,[d("另附源码"),r(e)])])]),x,y,k,w])}const E=o(h,[["render",N],["__file","index.html.vue"]]);export{E as default};
