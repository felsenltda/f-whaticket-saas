@echo off
setlocal enabledelayedexpansion

set "rootDir=%CD%"
set "rootDirLen=0"
for %%A in ("%rootDir%") do set "rootDirLen=%%~nxA"

set "outputFile=output.txt"

echo Lista de arquivos e pastas em "%rootDir%" com caminhos relativos:

(for /r %%B in (*) do (
  set "file=%%~pnxB"
  set "file=!file:%rootDir%\=!"
  set "file=!file:\Users\Lucas Rocha\Documents\GitHub\=!"
  echo !file!
)) > "%outputFile%"

echo Resultado exportado para "%outputFile%"

endlocal
