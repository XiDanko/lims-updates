@ECHO OFF
cd..

echo Coping production env...
copy .env.production .env

echo Deleting unwanted files...
rm ".env.production"
del /s /q storage\framework\sessions\*

pause
