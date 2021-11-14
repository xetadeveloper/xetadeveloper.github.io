@ECHO off

ECHO ========================================
ECHO Pushing Jekyll Development Files to Github DevEnv........
ECHO ========================================
Title Github Dev Environment Site Push

ECHO Adding dev files to staging area......
git add .

ECHO Committing files to local repo......
git commit

ECHO Pushing files to origin......
git push origin devEnv