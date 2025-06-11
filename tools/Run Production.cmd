@ECHO OFF
cd..
call php artisan optimize:clear
echo Optimizing composer autoloader
call composer update --no-dev --optimize-autoloader --no-interaction

echo Coping production env...
copy .env.production .env

echo Deleting unwanted files...
rm ".env.production"
del /s /q storage\framework\sessions\*

pause
