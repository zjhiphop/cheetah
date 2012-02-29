
1.整个项目架构基于RequireJS/backbone/underscore/mustache   
2.项目结构： 
  ├─activity   
  ├─collections  
  ├─helper  
  │  └─nls  
  ├─lib  
  │  ├─backbone  
  │  ├─jquery  
  │  ├─modernizr  
  │  ├─mustache  
  │  └─underscore   
  ├─models  
  ├─moduler  
  ├─views  
  │  ├─home  
  │  ├─projects  
  │  └─users  
  └─widget


##Efficient Convention:
 
###1.All the require context should be used in 'strict mode'  
###2.Avoid global varible,use Single var Pattern  eg: var a = 1,b = 2   
###3.Use for-loop for 'Array',for-in for 'Object'  
###4.Not Augmenting Built-in Prototypes,only ECMAScript 5 method can be considered  
###5.Avoiding Implied Typecasting  use === and !== instead of == and !=  
###6.Don't use 'eval' and 'with'.Sometines u can use 'new Function()' instead of eval.    
###7.Don't pass a string to the constructor of setInterval(), setTimeout() and Function()   
###8.Number Conversions with parseInt must pass a base parameters  

##Code Convention:  
###1.Indentation:use 4 space  
###2.Opening Brace Location should in the same line  
###3.• Before opening curly braces ({) in functions, if-else cases, loops, and object literals  
###  • Between the closing curly brace (}) and else or while  

##Name Convention:
###1.Capitalizing Constructors  
###2.Use lower camel case for function/method  
###3.using capital letters for names of global variables and const   
###4.Private convention:  
#### • Using a trailing underscore to mean private, as in name_ and getElements_()  
#### • Using one underscore prefix for _protected properties and two for __private properties  

##Writing Comments and API documents  