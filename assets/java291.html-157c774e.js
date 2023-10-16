import{_ as n,X as e,Y as s,a1 as i,a0 as l}from"./framework-68dd73a2.js";const d={},a=l(`<h1 id="java浅拷贝和深拷贝简单示例" tabindex="-1"><a class="header-anchor" href="#java浅拷贝和深拷贝简单示例" aria-hidden="true">#</a> Java浅拷贝和深拷贝简单示例</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><blockquote><p>Java中也有浅拷贝和深拷贝的概念。 Java中的对象赋值操作（=）和Object.clone()方法都是浅拷贝， 而使用序列化和反序列化实现对象复制则可以实现深拷贝。</p></blockquote><ul><li>浅拷贝示例：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Person implements Cloneable {
    public String name;
    public int age;
    public Address address;

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

public class Address {
    public String city;
    public String country;
}

public class Main {
    public static void main(String[] args) throws CloneNotSupportedException {
        Person p1 = new Person();
        p1.name = &quot;Alice&quot;;
        p1.age = 25;
        p1.address = new Address();
        p1.address.city = &quot;Shanghai&quot;;
        p1.address.country = &quot;China&quot;;

        Person p2 = (Person) p1.clone();

        p1.name = &quot;Bob&quot;;
        p1.address.city = &quot;Beijing&quot;;

        System.out.println(p2.name); // Alice
        System.out.println(p2.address.city); // Beijing
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在上面的示例中，p1和p2是浅拷贝关系，当我们修改p1的属性值时，p2中相应的属性值也会发生变化。</p></blockquote><ul><li>深拷贝示例：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Person implements Serializable {
    public String name;
    public int age;
    public Address address;

    public Person deepCopy() throws IOException, ClassNotFoundException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ObjectOutputStream oos = new ObjectOutputStream(baos);
        oos.writeObject(this);

        ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
        ObjectInputStream ois = new ObjectInputStream(bais);
        return (Person) ois.readObject();
    }
}

public class Address implements Serializable {
    public String city;
    public String country;
}

public class Main {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Person p1 = new Person();
        p1.name = &quot;Alice&quot;;
        p1.age = 25;
        p1.address = new Address();
        p1.address.city = &quot;Shanghai&quot;;
        p1.address.country = &quot;China&quot;;

        Person p2 = p1.deepCopy();

        p1.name = &quot;Bob&quot;;
        p1.address.city = &quot;Beijing&quot;;

        System.out.println(p2.name); // Alice
        System.out.println(p2.address.city); // Shanghai
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在上面的示例中，我们通过序列化和反序列化实现了深拷贝， 当我们修改p1的属性值时，p2中相应的属性值并不会发生变化。</p></blockquote><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java浅拷贝和深拷贝简单示例</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,13);function r(c,t){return e(),s("div",null,[i(" more "),i(" sticky "),a])}const u=n(d,[["render",r],["__file","java291.html.vue"]]);export{u as default};
