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

