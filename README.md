# lyzh-applet-templete

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

#### 代码提交规范

[commitlint](https://github.com/conventional-changelog/commitlint)

```
commitlint:
eg.
git add --all
git commit -m 'feat: 提交功能'
git push
```

| 规范名   | 描述                                                    |
| -------- | ------------------------------------------------------- |
| docs     | 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等等 |
| build    | 调整编译脚本以及流程                                    |
| ci       | 持续集成 CICD 相关流程                                  |
| chore    | 改变构建流程、或者增加依赖库、工具等                    |
| feat     | 新增 feature                                            |
| fix      | 修复 bug                                                |
| merge    | 合并分之                                                |
| perf     | 优化相关，比如提升性能、体验                            |
| refactor | 代码重构，没有加新功能或者修复 bug                      |
| revert   | 回滚到上一个版本                                        |
| style    | 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑      |
| test     | 测试用例，包括单元测试、集成测试等                      |
