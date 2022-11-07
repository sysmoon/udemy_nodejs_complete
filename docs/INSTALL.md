# Introduce
Set NodeJS Dev Environemtn on MacOS.

# Installation
- nvm
- nodejs


## NVM

### Installation

- Install NVM
```
brew install nvm
```

- Create ~/.nvm
```
mkdir -p ~/.nvm
```

- Set envrionments variables to zsh
```
$ cat <<EOF >> .zshrc

# NVM in Homebrew
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
EOF
```

- Check nvm version
```
source ~/.zshrc
nvm --version (or nvm -V)
```

### Uninstallation

- delete nmv
```
brew uninstall nvm
```

- delete nvm dir
```
rm -rf ~/.nvm
```

- delete nvm shell script in ~/.zshrc

### Usage

- Search all available nvm version
```
nvm ls-remote
```

- Search current installed nvm version
```
nvm ls
```

- Use certain nvm version
```
nvm use <version>
```

- Check current nvm version
```
nvm current
```

- Install certain nvm version
```
nvm install <version>
```

- Install latest nvm version
```
nvm install node
```

- Install LTS nvm version
```
nvm install --lts
```

- Delete certain nvm version
```
nvm uninstall <version>
```

### Directory Structure

* Version Info
  - Node.js: v16.18.0
  - 8.19.2

Dependency Packages is split with global and local.
In my case install package local basically.

* Global Dependency Packages
```
/Users/sysmoon/.nvm/versions/node/v17.5.0/lib
```

* Local Dependency Packages
```
PROJECT
  |- node_modules/      # 의존 패키지가 설치되는 디렉토리입니다.
  |- package.json       # 현재 프로젝트와 의존 패키지 정보의 명세서입니다.
  |- package-lock.json  # 의존 패키지 수정 시점의 명세를 기록한 파일입니다.
  |                     # npm install의 기준이 되는 파일입니다.
```

### Run Test

1. Create sample js files (test.js)

```
console.log('Hello sysmoon');
```

2. Run test.js on NodeJS runtime environment.
```
node test.js
Hello sysmoon
```

3. Set Node Environment

Using npm(node package module) set node dev env.

* create package.json
```
npm init
```

There are some configuration set for project.
If you want to skip use this.
```
npm init -y
```

4. Install packages

* Local Env
```
npm install <package-name>
```

* Global Env
```
npm install -g <package-name>
```

* Install package dependency mode
```
npm install --save <package-name>
```

* Install package dev dependency mode
```
npm instlal --save-dev <package-name>
or
npm instlal -D <package-name>
```

* Install packages specific version
```
npm install <package-name>@<version>
```

5. Uninstall packages
* Delete local package
```
npm uninstall <package-name>
```

* Delete global package
```
npm uninstall -g <package-name>
```

6. Update package
* Update all packages in package.json
```
npm update
```

* Update specific package version
```
npm update <package-name>
```

7. Package Path

* Search local package path
```
npm root
```

* Search global package path
```
npm root -g
```

* Run start script of packages.json
```
npm start
```

* Run specific start script of packages.json
```
npm run <script-name>
```

## 3'rd Parhy Tools

- neovim
  - install neovim on osx
  - install neovim on vscode

- vscode plugin
  - neovim
  - npm intelligence

