## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 生成版本日志

```bash
$ npm run changelog
```

## package.json中的version版本管理

```bash
# 运行该命令会自动打tag并提交，运行该命令要确保所有文件已经提交
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]

major：主版本号

minor：次版本号

patch：补丁号

premajor：预备主版本

prepatch：预备次版本

prerelease：预发布版本
```