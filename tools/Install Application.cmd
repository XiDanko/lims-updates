@ECHO OFF
cd..
call composer update --no-dev --optimize-autoloader --no-interaction
php artisan app:install
pause
