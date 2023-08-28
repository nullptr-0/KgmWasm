# KgmWasm
WASM for Kgm Encryption & Decryption
- KgmWasm是从属于[音乐解锁Web]项目的Kgm类加密文件的WASM解密组件，属于[音乐解锁]系列项目之一。
- KgmWasm只提供对读入内存的加密内容进行解密的功能，并不能直接使用。如需直接使用，请转到[Web预构建版本]或[CLI预构建版本]。
- KgmWasm项目以学习和研究为初衷，并基于您同意并遵守[授权协议]各项条款在此项目上之应用的条件向您开放源代码。

## 支持的格式

- [x] 酷狗音乐 Normal (.kgm*)
- [x] 酷狗音乐 Viper (.vpr)

## 构建与使用

KgmWasm使用[GitHub Actions]构建和发布npm包，您可以在项目的配置中使用包名`@xhacker/kgmwasm`进行引用

### 使用方法

- 您可以参照[kgm_wasm.ts]中的使用方法
- 您也可以在您的项目中直接引用[kgm_wasm.ts]文件，例如：
```
import { DecryptKgmWasm } from '@/kgm_wasm';
// 其他代码 ...
const decrypted= (await DecryptKgmWasm(cipherText, extension)).data;
```

### 自行构建

#### 依赖
要自行构建此项目，请确保已经安装[Git]与[CMake]且其路径已经添加到 `PATH`
#### Linux
在此项目根目录中执行 `./build-wasm` 即可构建。构建结果将位于此项目根目录的npm子目录中。
#### Windows
在此项目根目录中执行 `build-wasm.cmd` 即可构建。构建结果将位于此项目根目录的npm子目录中。

[音乐解锁Web]: https://git.unlock-music.dev/um/web
[音乐解锁]: https://unlock-music.dev/
[Web预构建版本]: https://git.unlock-music.dev/um/-/packages/generic/web-build/
[CLI预构建版本]: https://git.unlock-music.dev/um/-/packages/generic/cli-build/
[授权协议]: https://github.com/nullptr-0/KgmWasm/blob/master/LICENSE.txt
[kgm_wasm.ts]: https://github.com/nullptr-0/KgmWasm/blob/master/kgm_wasm.ts
[GitHub Actions]: https://github.com/nullptr-0/KgmWasm/actions
[Git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[CMake]: https://cmake.org/download/
