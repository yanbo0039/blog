import{_ as t,X as a,Y as l,a1 as r,a0 as e}from"./framework-68dd73a2.js";const c={},o=e('<h1 id="oracle-pl-sql数据库表的导入与导出" tabindex="-1"><a class="header-anchor" href="#oracle-pl-sql数据库表的导入与导出" aria-hidden="true">#</a> Oracle-PL-SQL数据库表的导入与导出</h1><h3 id="数据库表导出" tabindex="-1"><a class="header-anchor" href="#数据库表导出" aria-hidden="true">#</a> 数据库表导出</h3><ol><li>打开pl/sql工具选择tools--&gt;Export Tables 如图： <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_26_1.png" alt="" loading="lazy"></li><li>选择导出方式</li></ol><p>例：以sql方式导出 选择SQL Inserts -----&gt;勾选Create tables <strong>血与泪的教训：若未勾选Create tables则导入时不能生成对应的表格！！！！！！！我的个天鬼知道我经历咯什么 ！！！！！！！</strong><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_26_2.png" alt="" loading="lazy"></p><ol start="3"><li>选择需要导出的表 <strong>按住ctrl键可选择多个数据表</strong></li></ol><p>例：同时导出三个数据表 tab_book tab_record tab_user <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_26_3.png" alt="" loading="lazy"> 4. 导出路径选择 <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_26_4.png" alt="" loading="lazy"> 5. 导出 <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_26_5.png" alt="" loading="lazy"></p><h3 id="数据库表导入" tabindex="-1"><a class="header-anchor" href="#数据库表导入" aria-hidden="true">#</a> 数据库表导入</h3><ol><li><p>导入文件路径选择 <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_26_6.png" alt="" loading="lazy"><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_26_7.png" alt="" loading="lazy"></p></li><li><p>执行文件导入 <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_26_8.png" alt="" loading="lazy"></p></li><li><p>刷新 Objects ---&gt;Tables -----&gt;右键------&gt; refresh <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_26_9.png" alt="" loading="lazy"></p></li><li><p>查询后数据如初 <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_26_10.png" alt="" loading="lazy"></p></li></ol><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',12);function s(d,n){return a(),l("div",null,[r(" more "),o])}const p=t(c,[["render",s],["__file","oracle26.html.vue"]]);export{p as default};
