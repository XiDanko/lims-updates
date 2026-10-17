@ECHO OFF
setlocal
cd /d "%~dp0\.."

if not exist ".env.production" (
    echo [ERROR] .env.production not found!
    pause
    exit /b 1
)

echo Applying production env...
move /y ".env.production" ".env" >nul

echo Deleting cache and unwanted files...
if exist "storage\dev.key" del /f /q "storage\dev.key"
del /f /q bootstrap\cache\*.php 2>nul
del /f /q storage\logs\*.log 2>nul
for %%f in (storage\framework\sessions\*) do if not "%%~nxf"==".gitignore" del /f /q "%%f" 2>nul
del /f /q storage\framework\views\*.php 2>nul
for /d %%p in (storage\framework\cache\data\*) do rmdir /s /q "%%p" 2>nul
del /f /q storage\app\public\temp\* 2>nul

echo.
echo Production release preparation completed successfully!
pause
endlocal
