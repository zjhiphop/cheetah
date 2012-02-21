@echo off                                                                  
setlocal enabledelayedexpansion                                            
set PATH=%PATH%;C:/Program Files/nodejs;    
set jdt=\\cns-812\E$\Project\blitz\Lib\jsdoc_toolkit-2.4.0\
set tpm=%jdt%templates/jsdoc/
set doc=docs/
set js=script/           
::rd  /s /q build                                              
rd  /s /q %doc%   
cd /d .         
echo -----------------------------------------  Start works ----------------------------------------                                                        
echo ----------------------  You must install java and node   --------------------------------------
::echo install dependency ....
::npm install -g coffee-script & npm install -g less & npm install -g stylus
echo build coffee ...
call :coffee                                                               
echo build less ...
call :less
echo build stylus ...        
call :stylus       
echo start optimize js/css files ...                                                             
::call :optimize
echo start generate docs ...                                                                     
::call :docs  
::remove some dirs which is only used in developement environment
cd /d build/css
rd  /s /q tpl
rd  /s /q solution
rd  /s /q lab
echo -----------------------------------------  End  works -----------------------------------------  
pause  

:coffee                                                                    
for /r script %%i in (*.coffee) do if exist %%i coffee -c %%i
goto :eof
:less                                                                         
for /r css %%i in (*.less) do if exist %%i lessc %%i %%~pi%%~ni.css 
goto :eof   
:stylus                                                                     
for /r css %%i in (*.styl) do if exist %%i stylus %%i 
goto :eof
:docs
for /r script %%i in (*.js) do if exist %%i java -jar %jdt%jsrun.jar %jdt%app/run.js  -t=%tpm% -d=%doc% %%i                         
goto :eof
:optimize
node script/lib/r.js -o app.build.js   
goto :eof
