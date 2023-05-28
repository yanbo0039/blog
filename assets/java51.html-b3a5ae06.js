const t=JSON.parse('{"key":"v-2c13598c","path":"/zh/programBlog/ServerSideLanguage/Java/java51.html","title":"JavaString类型转引用类型","lang":"zh-CN","frontmatter":{"title":"JavaString类型转引用类型","icon":"page","order":51,"author":"涎涎","date":"2019-06-18T19:58:55.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java51.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"JavaString类型转引用类型"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java51.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"JavaString类型转引用类型"}],["meta",{"property":"og:description","content":"Java中String类型转引用类型 entity层Users.java package net.ptcs.my12306.entity; import java.util.Date; /** * 用户实体类 * @author hp */ public class Users { \\tprivate Integer id; \\tprivate String username; \\tprivate String password; \\tprivate String rule;// 1、管理员 2、普通用户 \\tprivate String realname; \\tprivate Character sex;//性别(1、男 2、女) \\tprivate City city; \\tprivate CertType certtype;//证件类型1、二代身份证 2、港澳通行证 3、台湾通行证 4、护照 \\tprivate String cert;//证件号码 \\tprivate Date birthday; \\tprivate UserType usertype; \\tprivate String content; \\tprivate Character status;//用户状态（0、无效 1、有效 ） \\tprivate String loginIp; \\tprivate String imagePath; \\t \\t \\tpublic Integer getId() { \\t\\treturn id; \\t} \\tpublic void setId(Integer id) { \\t\\tthis.id = id; \\t} \\tpublic String getUsername() { \\t\\treturn username; \\t} \\tpublic void setUsername(String username) { \\t\\tthis.username = username; \\t} \\tpublic String getPassword() { \\t\\treturn password; \\t} \\tpublic void setPassword(String password) { \\t\\tthis.password = password; \\t} \\tpublic String getRule() { \\t\\treturn rule; \\t} \\tpublic void setRule(String rule) { \\t\\tthis.rule = rule; \\t} \\tpublic String getRealname() { \\t\\treturn realname; \\t} \\tpublic void setRealname(String realname) { \\t\\tthis.realname = realname; \\t} \\tpublic Character getSex() { \\t\\treturn sex; \\t} \\tpublic void setSex(Character sex) { \\t\\tthis.sex = sex; \\t} \\tpublic City getCity() { \\t\\treturn city; \\t} \\tpublic void setCity(City city) { \\t\\tthis.city = city; \\t} \\tpublic CertType getCerttype() { \\t\\treturn certtype; \\t} \\tpublic void setCerttype(CertType certtype) { \\t\\tthis.certtype = certtype; \\t} \\tpublic String getCert() { \\t\\treturn cert; \\t} \\tpublic void setCert(String cert) { \\t\\tthis.cert = cert; \\t} \\tpublic Date getBirthday() { \\t\\treturn birthday; \\t} \\tpublic void setBirthday(Date birthday) { \\t\\tthis.birthday = birthday; \\t} \\tpublic UserType getUsertype() { \\t\\treturn usertype; \\t} \\tpublic void setUsertype(UserType usertype) { \\t\\tthis.usertype = usertype; \\t} \\tpublic String getContent() { \\t\\treturn content; \\t} \\tpublic void setContent(String content) { \\t\\tthis.content = content; \\t} \\tpublic Character getStatus() { \\t\\treturn status; \\t} \\tpublic void setStatus(Character status) { \\t\\tthis.status = status; \\t} \\tpublic String getLoginIp() { \\t\\treturn loginIp; \\t} \\tpublic void setLoginIp(String loginIp) { \\t\\tthis.loginIp = loginIp; \\t} \\tpublic String getImagePath() { \\t\\treturn imagePath; \\t} \\tpublic void setImagePath(String imagePath) { \\t\\tthis.imagePath = imagePath; \\t} \\tpublic Users() { \\t\\tsuper(); \\t} \\tpublic Users(Integer id, String username, String password, String rule, \\t\\t\\tString realname, Character sex, City city, CertType certtype, \\t\\t\\tString cert, Date birthday, UserType usertype, String content, \\t\\t\\tCharacter status, String loginIp, String imagePath) { \\t\\tsuper(); \\t\\tthis.id = id; \\t\\tthis.username = username; \\t\\tthis.password = password; \\t\\tthis.rule = rule; \\t\\tthis.realname = realname; \\t\\tthis.sex = sex; \\t\\tthis.city = city; \\t\\tthis.certtype = certtype; \\t\\tthis.cert = cert; \\t\\tthis.birthday = birthday; \\t\\tthis.usertype = usertype; \\t\\tthis.content = content; \\t\\tthis.status = status; \\t\\tthis.loginIp = loginIp; \\t\\tthis.imagePath = imagePath; \\t} \\t@Override \\tpublic String toString() { \\t\\treturn \\"Users [id=\\" + id + \\", username=\\" + username + \\", password=\\" \\t\\t\\t\\t+ password + \\", rule=\\" + rule + \\", realname=\\" + realname \\t\\t\\t\\t+ \\", sex=\\" + sex + \\", city=\\" + city + \\", certtype=\\" + certtype \\t\\t\\t\\t+ \\", cert=\\" + cert + \\", birthday=\\" + birthday + \\", usertype=\\" \\t\\t\\t\\t+ usertype + \\", content=\\" + content + \\", status=\\" + status \\t\\t\\t\\t+ \\", loginIp=\\" + loginIp + \\", imagePath=\\" + imagePath + \\"]\\\\n\\"; \\t} \\tpublic Users(String username, String password, Character sex, Date birthday) { \\t\\tsuper(); \\t\\tthis.username = username; \\t\\tthis.password = password; \\t\\tthis.sex = sex; \\t\\tthis.birthday = birthday; \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T07:02:16.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-18T19:58:55.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T07:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaString类型转引用类型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-18T19:58:55.000Z\\",\\"dateModified\\":\\"2023-05-28T07:02:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java中String类型转引用类型 entity层Users.java package net.ptcs.my12306.entity; import java.util.Date; /** * 用户实体类 * @author hp */ public class Users { \\tprivate Integer id; \\tprivate String username; \\tprivate String password; \\tprivate String rule;// 1、管理员 2、普通用户 \\tprivate String realname; \\tprivate Character sex;//性别(1、男 2、女) \\tprivate City city; \\tprivate CertType certtype;//证件类型1、二代身份证 2、港澳通行证 3、台湾通行证 4、护照 \\tprivate String cert;//证件号码 \\tprivate Date birthday; \\tprivate UserType usertype; \\tprivate String content; \\tprivate Character status;//用户状态（0、无效 1、有效 ） \\tprivate String loginIp; \\tprivate String imagePath; \\t \\t \\tpublic Integer getId() { \\t\\treturn id; \\t} \\tpublic void setId(Integer id) { \\t\\tthis.id = id; \\t} \\tpublic String getUsername() { \\t\\treturn username; \\t} \\tpublic void setUsername(String username) { \\t\\tthis.username = username; \\t} \\tpublic String getPassword() { \\t\\treturn password; \\t} \\tpublic void setPassword(String password) { \\t\\tthis.password = password; \\t} \\tpublic String getRule() { \\t\\treturn rule; \\t} \\tpublic void setRule(String rule) { \\t\\tthis.rule = rule; \\t} \\tpublic String getRealname() { \\t\\treturn realname; \\t} \\tpublic void setRealname(String realname) { \\t\\tthis.realname = realname; \\t} \\tpublic Character getSex() { \\t\\treturn sex; \\t} \\tpublic void setSex(Character sex) { \\t\\tthis.sex = sex; \\t} \\tpublic City getCity() { \\t\\treturn city; \\t} \\tpublic void setCity(City city) { \\t\\tthis.city = city; \\t} \\tpublic CertType getCerttype() { \\t\\treturn certtype; \\t} \\tpublic void setCerttype(CertType certtype) { \\t\\tthis.certtype = certtype; \\t} \\tpublic String getCert() { \\t\\treturn cert; \\t} \\tpublic void setCert(String cert) { \\t\\tthis.cert = cert; \\t} \\tpublic Date getBirthday() { \\t\\treturn birthday; \\t} \\tpublic void setBirthday(Date birthday) { \\t\\tthis.birthday = birthday; \\t} \\tpublic UserType getUsertype() { \\t\\treturn usertype; \\t} \\tpublic void setUsertype(UserType usertype) { \\t\\tthis.usertype = usertype; \\t} \\tpublic String getContent() { \\t\\treturn content; \\t} \\tpublic void setContent(String content) { \\t\\tthis.content = content; \\t} \\tpublic Character getStatus() { \\t\\treturn status; \\t} \\tpublic void setStatus(Character status) { \\t\\tthis.status = status; \\t} \\tpublic String getLoginIp() { \\t\\treturn loginIp; \\t} \\tpublic void setLoginIp(String loginIp) { \\t\\tthis.loginIp = loginIp; \\t} \\tpublic String getImagePath() { \\t\\treturn imagePath; \\t} \\tpublic void setImagePath(String imagePath) { \\t\\tthis.imagePath = imagePath; \\t} \\tpublic Users() { \\t\\tsuper(); \\t} \\tpublic Users(Integer id, String username, String password, String rule, \\t\\t\\tString realname, Character sex, City city, CertType certtype, \\t\\t\\tString cert, Date birthday, UserType usertype, String content, \\t\\t\\tCharacter status, String loginIp, String imagePath) { \\t\\tsuper(); \\t\\tthis.id = id; \\t\\tthis.username = username; \\t\\tthis.password = password; \\t\\tthis.rule = rule; \\t\\tthis.realname = realname; \\t\\tthis.sex = sex; \\t\\tthis.city = city; \\t\\tthis.certtype = certtype; \\t\\tthis.cert = cert; \\t\\tthis.birthday = birthday; \\t\\tthis.usertype = usertype; \\t\\tthis.content = content; \\t\\tthis.status = status; \\t\\tthis.loginIp = loginIp; \\t\\tthis.imagePath = imagePath; \\t} \\t@Override \\tpublic String toString() { \\t\\treturn \\"Users [id=\\" + id + \\", username=\\" + username + \\", password=\\" \\t\\t\\t\\t+ password + \\", rule=\\" + rule + \\", realname=\\" + realname \\t\\t\\t\\t+ \\", sex=\\" + sex + \\", city=\\" + city + \\", certtype=\\" + certtype \\t\\t\\t\\t+ \\", cert=\\" + cert + \\", birthday=\\" + birthday + \\", usertype=\\" \\t\\t\\t\\t+ usertype + \\", content=\\" + content + \\", status=\\" + status \\t\\t\\t\\t+ \\", loginIp=\\" + loginIp + \\", imagePath=\\" + imagePath + \\"]\\\\n\\"; \\t} \\tpublic Users(String username, String password, Character sex, Date birthday) { \\t\\tsuper(); \\t\\tthis.username = username; \\t\\tthis.password = password; \\t\\tthis.sex = sex; \\t\\tthis.birthday = birthday; \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685257336000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":3.1,"words":931},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/51-JavaString类型转引用类型.md","localizedDate":"2019年6月18日","excerpt":"<!-- more -->\\n<h1> Java中String类型转引用类型</h1>\\n<h5> entity层Users.java</h5>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package net.ptcs.my12306.entity;\\n\\nimport java.util.Date;\\n\\n/**\\n * 用户实体类\\n * @author hp\\n */\\npublic class Users {\\n\\n\\tprivate Integer id;\\n\\tprivate String username;\\n\\tprivate String password;\\n\\tprivate String rule;// 1、管理员 2、普通用户\\n\\tprivate String realname;\\n\\tprivate Character sex;//性别(1、男 2、女)\\n\\tprivate City city;\\n\\tprivate CertType certtype;//证件类型1、二代身份证 2、港澳通行证 3、台湾通行证 4、护照\\n\\tprivate String cert;//证件号码\\n\\tprivate Date birthday;\\n\\tprivate UserType usertype;\\n\\tprivate String content;\\n\\tprivate Character status;//用户状态（0、无效  1、有效 ）\\n\\tprivate String loginIp;\\n\\tprivate String imagePath;\\n\\t\\n\\t\\n\\tpublic Integer getId() {\\n\\t\\treturn id;\\n\\t}\\n\\tpublic void setId(Integer id) {\\n\\t\\tthis.id = id;\\n\\t}\\n\\tpublic String getUsername() {\\n\\t\\treturn username;\\n\\t}\\n\\tpublic void setUsername(String username) {\\n\\t\\tthis.username = username;\\n\\t}\\n\\tpublic String getPassword() {\\n\\t\\treturn password;\\n\\t}\\n\\tpublic void setPassword(String password) {\\n\\t\\tthis.password = password;\\n\\t}\\n\\tpublic String getRule() {\\n\\t\\treturn rule;\\n\\t}\\n\\tpublic void setRule(String rule) {\\n\\t\\tthis.rule = rule;\\n\\t}\\n\\tpublic String getRealname() {\\n\\t\\treturn realname;\\n\\t}\\n\\tpublic void setRealname(String realname) {\\n\\t\\tthis.realname = realname;\\n\\t}\\n\\tpublic Character getSex() {\\n\\t\\treturn sex;\\n\\t}\\n\\tpublic void setSex(Character sex) {\\n\\t\\tthis.sex = sex;\\n\\t}\\n\\tpublic City getCity() {\\n\\t\\treturn city;\\n\\t}\\n\\tpublic void setCity(City city) {\\n\\t\\tthis.city = city;\\n\\t}\\n\\tpublic CertType getCerttype() {\\n\\t\\treturn certtype;\\n\\t}\\n\\tpublic void setCerttype(CertType certtype) {\\n\\t\\tthis.certtype = certtype;\\n\\t}\\n\\tpublic String getCert() {\\n\\t\\treturn cert;\\n\\t}\\n\\tpublic void setCert(String cert) {\\n\\t\\tthis.cert = cert;\\n\\t}\\n\\tpublic Date getBirthday() {\\n\\t\\treturn birthday;\\n\\t}\\n\\tpublic void setBirthday(Date birthday) {\\n\\t\\tthis.birthday = birthday;\\n\\t}\\n\\tpublic UserType getUsertype() {\\n\\t\\treturn usertype;\\n\\t}\\n\\tpublic void setUsertype(UserType usertype) {\\n\\t\\tthis.usertype = usertype;\\n\\t}\\n\\tpublic String getContent() {\\n\\t\\treturn content;\\n\\t}\\n\\tpublic void setContent(String content) {\\n\\t\\tthis.content = content;\\n\\t}\\n\\tpublic Character getStatus() {\\n\\t\\treturn status;\\n\\t}\\n\\tpublic void setStatus(Character status) {\\n\\t\\tthis.status = status;\\n\\t}\\n\\tpublic String getLoginIp() {\\n\\t\\treturn loginIp;\\n\\t}\\n\\tpublic void setLoginIp(String loginIp) {\\n\\t\\tthis.loginIp = loginIp;\\n\\t}\\n\\tpublic String getImagePath() {\\n\\t\\treturn imagePath;\\n\\t}\\n\\tpublic void setImagePath(String imagePath) {\\n\\t\\tthis.imagePath = imagePath;\\n\\t}\\n\\tpublic Users() {\\n\\t\\tsuper();\\n\\t}\\n\\tpublic Users(Integer id, String username, String password, String rule,\\n\\t\\t\\tString realname, Character sex, City city, CertType certtype,\\n\\t\\t\\tString cert, Date birthday, UserType usertype, String content,\\n\\t\\t\\tCharacter status, String loginIp, String imagePath) {\\n\\t\\tsuper();\\n\\t\\tthis.id = id;\\n\\t\\tthis.username = username;\\n\\t\\tthis.password = password;\\n\\t\\tthis.rule = rule;\\n\\t\\tthis.realname = realname;\\n\\t\\tthis.sex = sex;\\n\\t\\tthis.city = city;\\n\\t\\tthis.certtype = certtype;\\n\\t\\tthis.cert = cert;\\n\\t\\tthis.birthday = birthday;\\n\\t\\tthis.usertype = usertype;\\n\\t\\tthis.content = content;\\n\\t\\tthis.status = status;\\n\\t\\tthis.loginIp = loginIp;\\n\\t\\tthis.imagePath = imagePath;\\n\\t}\\n\\t@Override\\n\\tpublic String toString() {\\n\\t\\treturn \\"Users [id=\\" + id + \\", username=\\" + username + \\", password=\\"\\n\\t\\t\\t\\t+ password + \\", rule=\\" + rule + \\", realname=\\" + realname\\n\\t\\t\\t\\t+ \\", sex=\\" + sex + \\", city=\\" + city + \\", certtype=\\" + certtype\\n\\t\\t\\t\\t+ \\", cert=\\" + cert + \\", birthday=\\" + birthday + \\", usertype=\\"\\n\\t\\t\\t\\t+ usertype + \\", content=\\" + content + \\", status=\\" + status\\n\\t\\t\\t\\t+ \\", loginIp=\\" + loginIp + \\", imagePath=\\" + imagePath + \\"]\\\\n\\";\\n\\t}\\n\\tpublic Users(String username, String password, Character sex, Date birthday) {\\n\\t\\tsuper();\\n\\t\\tthis.username = username;\\n\\t\\tthis.password = password;\\n\\t\\tthis.sex = sex;\\n\\t\\tthis.birthday = birthday;\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
