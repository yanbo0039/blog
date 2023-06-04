import{_ as e,X as s,Y as t,a1 as l,Z as i,$ as n,a2 as r,a0 as c,F as o}from"./framework-68dd73a2.js";const g="/blog/assets/Oracle_45_1.png",d="/blog/assets/Oracle_45_2.png",p="/blog/assets/Oracle_45_3.png",m="/blog/assets/Oracle_45_4.png",_="/blog/assets/Oracle_45_5.png",u="/blog/assets/Oracle_45_6.png",b="/blog/assets/Oracle_45_7.png",f="/blog/assets/Oracle_45_8.png",v="/blog/assets/Oracle_45_9.png",h="/blog/assets/Oracle_45_10.png",x="/blog/assets/Oracle_45_11.png",y="/blog/assets/Oracle_45_12.png",O="/blog/assets/Oracle_45_13.png",z="/blog/assets/Oracle_45_14.png",q="/blog/assets/Oracle_45_15.png",k="/blog/assets/Oracle_45_16.png",L="/blog/assets/Oracle_45_17.png",S="/blog/assets/Oracle_45_18.png",w="/blog/assets/Oracle_45_19.png",Q="/blog/assets/Oracle_45_20.png",N="/blog/assets/Oracle_45_21.png",C="/blog/assets/Oracle_45_22.png",E="/blog/assets/Oracle_45_23.png",V="/blog/assets/Oracle_45_24.png",j="/blog/assets/Oracle_45_25.png",B="/blog/assets/Oracle_45_26.png",T="/blog/assets/Oracle_45_27.png",R="/blog/assets/Oracle_45_28.png",A="/blog/assets/Oracle_45_29.png",D="/blog/assets/Oracle_45_30.png",I="/blog/assets/Oracle_45_31.png",F="/blog/assets/Oracle_45_32.png",G="/blog/assets/Oracle_45_33.png",P="/blog/assets/Oracle_45_34.png",X={},Y={id:"_45-oracle数据库安装及可视化工具plsql安装-md",tabindex:"-1"},Z=i("a",{class:"header-anchor",href:"#_45-oracle数据库安装及可视化工具plsql安装-md","aria-hidden":"true"},"#",-1),$={href:"http://xn--45-Oracleplsql-j27wy3qo9cbtam96ija197jiwd2s2bpwk2w6tla340e.md",target:"_blank",rel:"noopener noreferrer"},H=c('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="安装oracle" tabindex="-1"><a class="header-anchor" href="#安装oracle" aria-hidden="true">#</a> 安装Oracle</h3><blockquote><p>如下图所示，安装包请自行在官网下载 本文只介绍安装步骤</p></blockquote><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+O+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>测试是否安装成功</p></blockquote><figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="安装oracle-可以化工具-plsql" tabindex="-1"><a class="header-anchor" href="#安装oracle-可以化工具-plsql" aria-hidden="true">#</a> 安装Oracle 可以化工具 PLSQL</h3><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+Q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+j+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>连接测试</p></blockquote><figure><img src="'+T+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+R+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+D+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+F+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+G+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+P+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>如上图所示 能够查到ORACLE数据库自带的emp/demp 表则表明操作成功</p></blockquote><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Oracle数据库安装及可视化工具plsql安装</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div><h3 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>管理员账号：sys/sys as sysdba
	    system/sytem  as sysdba

普通账号：scott/tiger

1. win+R 打开运行窗口  -&gt; 输入sqlplus -&gt; 回车

2.输入用户名与密码登陆oracle数据
   请输入用户名： sys
   输入口令：sys as sysdba

3.【问题一】权限不足  win7
    计算机 -&gt; 右键点击管理 -&gt; 本地用户和组 -&gt; 组 -&gt; ora_dba -&gt;添加登陆用户权限

    【问题一】权限不足  win10
    程序-oracle安装路径-配置和移植工具-Administrator assistant for windows-操作系统数据库管理员 -添加指定用户权限

4.【问题二】协议适配器错误
      计算机 -&gt; 右键点击管理 -&gt; 服务与应用程序 -&gt; 服务

     开启数据库的监听器与服务：
	 ① OracleOraDb11g_home1TNSListener
                ② OracleServiceORCL  

5.已登录，可切换账号
   SQL &gt; conn scott/tiger;
   已连接
   SQL &gt; select * from emp;

6.【问题三】账户被锁定：the account is locked，需管理员解锁账号 
     SQL &gt; conn sys/sys as sysdba;
     SQL &gt; alter user scott account unlock;

7.【问题四】忘记密码：invalid username/password;logon denied
     SQL &gt; conn sys/sys as sysdba;
     SQL &gt; alter user scott identified by tiger;

8. SCOTT用户数据库表结构
   
   Emp表（员工信息表）
   	empno 雇员编号
   	ename 雇员姓名
   	job   职位
               mgr  经理编号（上级主管）
   	hiredate 入职日期
  	sal  薪水
   	comm  奖金
  	deptno 部门编号

  Dept表（部门表）
     	deptno 部门编号
	dname  部门名称
	loc 所在位置
 
  Bonus(薪资福利表)：结构与emp类似

  SalGrade(薪资等级表)
              grade:等级
	losal:开始区间值
	hisal:结束区间值

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线-1" tabindex="-1"><a class="header-anchor" href="#分割线-1" aria-hidden="true">#</a> 分割线</h3><hr>`,50);function J(K,M){const a=o("ExternalLinkIcon");return s(),t("div",null,[l(" more "),i("h1",Y,[Z,n(),i("a",$,[n("45-Oracle数据库安装及可视化工具plsql安装.md"),r(a)])]),H])}const W=e(X,[["render",J],["__file","oracle45.html.vue"]]);export{W as default};
