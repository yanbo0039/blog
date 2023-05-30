const t=JSON.parse('{"key":"v-28a9a84e","path":"/zh/programBlog/ServerSideLanguage/Java/java52.html","title":"Java实现用户注册功能","lang":"zh-CN","frontmatter":{"title":"Java实现用户注册功能","icon":"page","order":52,"author":"涎涎","date":"2019-06-18T20:36:34.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java52.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java实现用户注册功能"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java52.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java实现用户注册功能"}],["meta",{"property":"og:description","content":"Java实现用户注册功能 my12306_tab_user用户表 列名 数据类型 可否为空 说明 id number(11) not null id(Parimary主键) username varchar2(30) not null 用户名(Unique唯一) password varchar2(50) not null 密码 rule varchar2(2) not null 权限(1 管理员 2 普通用户) realname varchar2(50) not null 真实姓名 sex char(1) not null 性别(1 男 2 女) city number(11) not null 城市信息id值((Foreign外键my12306_tab_city)) cert_type number(11) not null 证件类型(1二代身份证2港澳通行证3台湾通行证4护照)(Foreign外键my12306_tab_certtype) cert varchar2(50) not null 证件号码 birthday date not null 生日 user_type number(11) not null 旅客类型(1成人2儿童3学生4残疾军人、伤残人民警察)((Foreign外键my12306_tab_usertype)) content varchar2(3000) null 备注信息 status char(1) not null 用户状态(0 无效 1 有效) login_ip varchar2(50) not null 登陆IP image_path varchar2(200) not null 用户头像路径"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-30T04:53:46.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-18T20:36:34.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-30T04:53:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java实现用户注册功能\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-18T20:36:34.000Z\\",\\"dateModified\\":\\"2023-05-30T04:53:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java实现用户注册功能 my12306_tab_user用户表 列名 数据类型 可否为空 说明 id number(11) not null id(Parimary主键) username varchar2(30) not null 用户名(Unique唯一) password varchar2(50) not null 密码 rule varchar2(2) not null 权限(1 管理员 2 普通用户) realname varchar2(50) not null 真实姓名 sex char(1) not null 性别(1 男 2 女) city number(11) not null 城市信息id值((Foreign外键my12306_tab_city)) cert_type number(11) not null 证件类型(1二代身份证2港澳通行证3台湾通行证4护照)(Foreign外键my12306_tab_certtype) cert varchar2(50) not null 证件号码 birthday date not null 生日 user_type number(11) not null 旅客类型(1成人2儿童3学生4残疾军人、伤残人民警察)((Foreign外键my12306_tab_usertype)) content varchar2(3000) null 备注信息 status char(1) not null 用户状态(0 无效 1 有效) login_ip varchar2(50) not null 登陆IP image_path varchar2(200) not null 用户头像路径"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685422426000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":4}]},"readingTime":{"minutes":15.48,"words":4643},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/52-Java实现用户注册功能.md","localizedDate":"2019年6月18日","excerpt":"<!-- more -->\\n<h1> Java实现用户注册功能</h1>\\n<h5> my12306_tab_user用户表</h5>\\n<table>\\n<thead>\\n<tr>\\n<th>列名</th>\\n<th>数据类型</th>\\n<th>可否为空</th>\\n<th>说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>id</td>\\n<td>number(11)</td>\\n<td>not null</td>\\n<td>id(Parimary主键)</td>\\n</tr>\\n<tr>\\n<td>username</td>\\n<td>varchar2(30)</td>\\n<td>not null</td>\\n<td>用户名(Unique唯一)</td>\\n</tr>\\n<tr>\\n<td>password</td>\\n<td>varchar2(50)</td>\\n<td>not null</td>\\n<td>密码</td>\\n</tr>\\n<tr>\\n<td>rule</td>\\n<td>varchar2(2)</td>\\n<td>not null</td>\\n<td>权限(1 管理员 2 普通用户)</td>\\n</tr>\\n<tr>\\n<td>realname</td>\\n<td>varchar2(50)</td>\\n<td>not null</td>\\n<td>真实姓名</td>\\n</tr>\\n<tr>\\n<td>sex</td>\\n<td>char(1)</td>\\n<td>not null</td>\\n<td>性别(1 男 2 女)</td>\\n</tr>\\n<tr>\\n<td>city</td>\\n<td>number(11)</td>\\n<td>not null</td>\\n<td>城市信息id值((Foreign外键my12306_tab_city))</td>\\n</tr>\\n<tr>\\n<td>cert_type</td>\\n<td>number(11)</td>\\n<td>not null</td>\\n<td>证件类型(1二代身份证2港澳通行证3台湾通行证4护照)(Foreign外键my12306_tab_certtype)</td>\\n</tr>\\n<tr>\\n<td>cert</td>\\n<td>varchar2(50)</td>\\n<td>not null</td>\\n<td>证件号码</td>\\n</tr>\\n<tr>\\n<td>birthday</td>\\n<td>date</td>\\n<td>not null</td>\\n<td>生日</td>\\n</tr>\\n<tr>\\n<td>user_type</td>\\n<td>number(11)</td>\\n<td>not null</td>\\n<td>旅客类型(1成人2儿童3学生4残疾军人、伤残人民警察)((Foreign外键my12306_tab_usertype))</td>\\n</tr>\\n<tr>\\n<td>content</td>\\n<td>varchar2(3000)</td>\\n<td>null</td>\\n<td>备注信息</td>\\n</tr>\\n<tr>\\n<td>status</td>\\n<td>char(1)</td>\\n<td>not null</td>\\n<td>用户状态(0 无效 1 有效)</td>\\n</tr>\\n<tr>\\n<td>login_ip</td>\\n<td>varchar2(50)</td>\\n<td>not null</td>\\n<td>登陆IP</td>\\n</tr>\\n<tr>\\n<td>image_path</td>\\n<td>varchar2(200)</td>\\n<td>not null</td>\\n<td>用户头像路径</td>\\n</tr>\\n<tr>\\n<td><img src=\\"http://rvg3orptc.hd-bkt.clouddn.com/assets/oracleUserTab.png\\" alt=\\"\\" loading=\\"lazy\\"></td>\\n<td></td>\\n<td></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};
