@echo off
echo Building Vue 3 Design System...

REM Clean previous builds
if exist dist rmdir /s /q dist
if exist storybook-static rmdir /s /q storybook-static

REM Build the library
echo Building library...
call npm run build:lib
if %errorlevel% neq 0 (
    echo Library build failed!
    exit /b 1
)

REM Build Storybook
echo Building Storybook...
call npm run build-storybook
if %errorlevel% neq 0 (
    echo Storybook build failed!
    exit /b 1
)

echo Build completed successfully!
echo Library: .\dist\
echo Storybook: .\storybook-static\

if exist dist\*.* (
    echo.
    echo Built files:
    dir dist /b
)
