@ECHO off

ECHO ========================================
ECHO Creating Webpack Build........
ECHO ========================================
Title Webpack Console

set mode=dev
ECHO App Mode is %mode%

@REM Find out how to use if else statement for this and also how to assign environment variables from parent terminal
npm run wbp-dev-watch
