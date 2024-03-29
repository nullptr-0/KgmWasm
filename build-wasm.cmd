@echo off
setlocal

set "CURR_DIR=%CD%"

set "BUILD_TYPE=%1"
if "%BUILD_TYPE%"=="" set "BUILD_TYPE=Release"

md build\wasm 2>nul
if not exist build\emsdk (
  git clone https://github.com/emscripten-core/emsdk.git build\emsdk
)

rem Check for Ninja binary
pushd build\wasm
if not exist "ninja.exe" (
  rem Install Ninja
  curl -L https://github.com/ninja-build/ninja/releases/download/v1.11.1/ninja-win.zip -o ninja.zip
  tar -xzvf ninja.zip
  del ninja.zip
)
rem must setup PATH for ninja first to avoid conflict with emsdk_env.bat
set PATH="%PATH%;%cd%"
popd

pushd build\emsdk
rem git pull
call emsdk.bat install 3.0.0
call emsdk.bat activate 3.0.0
call emsdk_env.bat
popd

pushd build\wasm

call emcmake cmake -DCMAKE_BUILD_TYPE=%BUILD_TYPE% ..\..
ninja.exe -f build.ninja -j 3

set "TARGET_FILES=KgmLegacy.js KgmWasm.js KgmWasm.wasm KgmWasmBundle.js %CURR_DIR%\LICENSE.txt"

for %%f in (%TARGET_FILES%) do (
copy "%%f" "%CURR_DIR%\npm"
)
popd

endlocal