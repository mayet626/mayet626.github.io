@Echo OFF
:loop

set /P c=do it again?[Y/N]: 
if /I "%c%" EQU "Y" goto :doit
if /I "%c%" EQU "N" exit 0
goto :loop

:doit

RD /S /Q "Z:\home\localhost\www\test"
MD "Z:\home\localhost\www\test"
xcopy "%CD%" "Z:\home\localhost\www\test" /S /E
goto :loop