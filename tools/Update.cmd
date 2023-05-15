@ECHO OFF
cd ../
call composer update --no-dev --optimize-autoloader --no-interaction
php artisan optimize:clear
php artisan optimize
php artisan permission:sync
php artisan setting:sync
rr reset
pause
