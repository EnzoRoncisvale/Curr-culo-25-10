@echo off
chcp 65001 > nul
echo ========================================================
echo   PUBLICAR PROJETO NO GITHUB (ENZO RONCISVALE)
echo ========================================================
echo.

echo 1. Verificando repositório remoto...
git remote -v > nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Nenhum link remoto configurado ainda.
    echo Certifique-se de ter criado o repositório em https://github.com/new
    echo Configurando remote origin para https://github.com/EnzoRoncisvale/curriculo.git ...
    git remote add origin https://github.com/EnzoRoncisvale/curriculo.git
)

echo.
echo 2. Adicionando alterações e fazendo commit...
git add .
git commit -m "update: landing page curriculo Enzo Roncisvale"

echo.
echo 3. Enviando para o GitHub (branch main)...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   [SUCESSO] Código enviado com sucesso para o GitHub!
    echo   Acesse: https://github.com/EnzoRoncisvale/curriculo
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo   [AVISO] Verifique se você já criou o repositório 'curriculo'
    echo   no seu GitHub (https://github.com/new) antes de rodar o push.
    echo ========================================================
)

echo.
pause
