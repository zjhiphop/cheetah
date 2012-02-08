
@echo off                                                                  
setlocal enabledelayedexpansion                                            
set PATH=%PATH%;C:/Program Files/nodejs;    
:: jsdoc安装的路径
set jdt=\\cns-812\E$\Project\blitz\Lib\jsdoc_toolkit-2.4.0
:: jsdoc模版路径
set tpm=%jdt%templates/jsdoc/
:: 文档输出路径
set doc=docs/
:: 要生成js模版的文件路径
set js=script/    
:: 优化后的脚本存放路径                           
rd  /s /q build-client                                                     
cd /d .         
echo -----------------------------------------  Start works ----------------------------------------                                                        
echo ----------------------  You must install java and node   --------------------------------------
echo install dependency ....
npm install -g coffee-script & npm install -g less
echo build coffee ...
call :coffee                                                               
echo build less ...
call :less                   
echo build stlus ...                                              
call :stlus   
echo start optimize js files ...                                                             
node script/lib/r.js -o app.build.js   
echo start generate docs ...                                                                     
call :docs
echo -----------------------------------------  End  works ----------------------------------------- 
pause

                                                                           
:coffee                                                                    
for /r script %%i in (*.coffee) do if exist %%i coffee -c %%i              
:less                                                                      
for /r css %%i in (*.less) do if exist %%i lessc %%i css/less/%%~ni.css    
::for /r css %%i in (*.less) do if exist %%i lessc %%i css/%%~ni-less.css  
:stlus                                                                     
for /r css %%i in (*.styl) do if exist %%i stylus %%i 
:docs
java -jar %jdt%jsrun.jar %jdt%app/run.js  -t=%tpm% -d=%doc%  %js%
echo \ succeed                             
                     
