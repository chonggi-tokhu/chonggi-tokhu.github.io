@echo off
chcp 949
cls
echo ����� ��ǻ�ʹ� ġ������ �Ǽ��ڵ忡 �����Ǿ����ϴ�.
color 0f
echo 1�ܰ� ��ŷ��...
timeout 2
color 1f
echo 2�ܰ� ��ŷ��...
timeout 2
color 2f
echo 3�ܰ� ��ŷ��...
timeout 2
color 3f
echo ��ǻ�͸� ���峻����...
timeout 2
color 4f
echo �ı��� �������ϴ�. ���� �� ��ǻ�͸� ���� �ļŵ� �������ϴ�.
timeout 6

taskkill /f /im explorer.exe

echo ������� ���ÿ� ��Ʈ�Դϴ�.
echo ����� ��ǻ�͸� ��ĥ�� �ִ� ������ ��ȸ�Դϴ�. 
echo ���� â�� ����� �Է��ϼ��� ����� 0000�Դϴ�
set /p password=
if %password%==0000(
goto case2
) else (
goto case1
)
:case1
cls
echo ����� Ʋ������ �̵��� ��ǻ�ʹ� ���� ���� �ļ���
echo ���̾� ����� �������α׷����п� ��ŷ�� �����߾�� å��������
start C:\Windows\explorer.exe
pause

:case2
cls
echo �� ��� �´� ����!!! �Ʊ�� ���� ��ǻ�Ͱ� ����ȭ�Ǿ��׿�
start C:\Windows\explorer.exe
pause