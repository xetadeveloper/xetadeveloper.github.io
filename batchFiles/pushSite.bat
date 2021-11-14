@ECHO off

ECHO ========================================
ECHO Pushing Jekyll Site to Github Master........
ECHO ========================================
Title Github Site Push

ECHO Switched to dist directory
cd ../dist


ECHO Initializing Git repo
git init

ECHO Adding files to staging area
git add .

ECHO Committing files to local repo
git commit

ECHO Pushing files to origin
git push origin master