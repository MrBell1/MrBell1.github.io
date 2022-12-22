
SET c=  %date% %a%
@REM echo %c%
git add --all

git commit -a -m "[%date%--%time%] Publish"

git push -f