@ECHO off

set mode = prod

ECHO Opening terminal for Webpack............
start cmd.exe /k  ".\batchFiles\webpackBatch.bat"

ECHO Opening terminal for Jekyll...........
start cmd.exe /k ".\batchFiles\jekyllBatch.bat"

ECHO Finished app startup

exit

@REM Find a way to set the height and width of terminals