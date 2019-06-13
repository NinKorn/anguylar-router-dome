# AngularRouterDome

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# anguylar-router-dome

# angular 路由学习

##  第一步 创建项目
    ng new projectName --routing  创建有路由的项目
##  第一步 创建模块
    ng g c modelName  创建模块
##  第二部 配置路由
    对`const routes: Routes`这个数组中添加路由信息
    在app-routing.module.ts 配置路由
    // 当只是单纯的域名访问时转到首页路由
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    // 首页路由，这是根路由不要带有斜杠和点
    // path 是 URL 路径
    // component 显示的是哪个组件
    {path: 'home', component: HomeComponent},
