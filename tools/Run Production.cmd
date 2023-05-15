@ECHO OFF
cd..
echo Optimizing composer autoloader
call composer update --no-dev --optimize-autoloader --no-interaction

echo Coping production env...
copy .env.production .env

echo Coping production rr.yaml
copy .rr.production.yaml .rr.yaml

echo Deleting unwanted files...
rm ".env.production"
rm ".rr.production.yaml"
powershell -Command "Remove-Item 'storage/framework/cache/data/*' -Recurse -Force"
powershell -Command "Remove-Item 'storage/framework/sessions/*' -Recurse -Force"
powershell -Command "Remove-Item 'storage/framework/views/*' -Recurse -Force"

pause
