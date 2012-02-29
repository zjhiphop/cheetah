# Cheetah Structure  
![Front End Architec](cheetah/raw/master/imgs/project_architec.png)  

File Structure  
│  app.build.js   //requirejs optimize script  
│  build.bat      //used to build less/stylus/coffee  
│  index.html    
├─css  
│  ├─activity     //activity relatate css  
│  ├─component    //widegt and module's css  
│  ├─lab  
│  │  ├─less  
│  │  └─stylus  
│  ├─lib  
│  ├─solution  
│  └─tpl  
├─imgs  
├─script  
│  ├─collections  //all the collections  
│  │  ├─activity  //activity related collection  
│  │  ├─modules   //just used to reuse,such as: bottom_button,feedback_tab  
│  │  └─widget    //some function independent modules,such as:audio_player,epaper,video_player  
│  ├─helper       //some util method and requirejs plugins  
│  │  └─nls  
│  ├─lib          //third party libs  
│  │  ├─backbone  
│  │  ├─jquery  
│  │  ├─modernizr  
│  │  ├─mustache  
│  │  └─underscore  
│  ├─models  
│  │  ├─activity  
│  │  ├─modules  
│  │  └─widget  
│  └─views  
│      ├─activity  
│      ├─modules  
│      └─widget  
├─main.js         //the entrance for application  
└─tpl             //html template   
    ├─coffeekup  
    ├─jtemplate  
    ├─mustache  
    │  ├─activity  
    │  └─common  
    └─underscore  
        ├─home  
        ├─projects  
        └─users  

TODO  
1.add activity_app controls?  
2.add unit test for all routers   
3.find a better solution to solve too many router   
4.js&css minify related work   
5.the latest backbone has changed API el--reference to html element   
                                     $el--reference to jQuery element
6.how to test?  
7.refactor code  
8.object weak reference problem  
9.script# 中会扩展ie中dom所具有的行为，如attachEvent。如果用此类属性进行判断浏览器时，会适的其反  
10.script#中扩展了Array 原型方法，而underscore在迭代数组元素的时候并没有判断，导致额外的元素操作。  
