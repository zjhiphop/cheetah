# CSS base Alice Spec 
### 1.Object oriented CSS  <http://oocss.org/>  
### 2.Dynamic CSS     
### 3.Build CSS Component  
### 4.Build CSS Solution  

#   Reference  

##  Alice的设计哲学：<http://aliceui.com/alice-css-guide/>    
### 减少依赖，避免耦合   
### 统一风格，让代码有规可循，保证团队协作效率      
  
##  jQuery UI CSS Framework <http://jqueryui.com/docs/Theming/API>    
### 1.adopting shared markup conventions  
### 2.allowing for ease of code integration across the plugin community at large  

##  Bootstrap, from Twitter <http://twitter.github.com/bootstrap/#overview>     
### 1.Browser support  
### 2.Javascript plugins  
### 3.All css has a less file 

# Structure

###---   
### |---- solutions/           浏览器兼容解决方案    
### |---- component/           UI组件，solution的基元                  
### |---- tpl/                 参考的模板文件   
### |---- lab/                 CSS相关实验室：动态，OO 测试  
### |---- lib/                 第三方的CSS  
### |---- base.css             CSS的基础，所有样式均基于它(这个主要参考alice)  
 
# Model Lib (模式库，如：注册框架，搜索框架)  
 
## Yahoo! Design Pattern Library <http://developer.yahoo.com/ypatterns/>