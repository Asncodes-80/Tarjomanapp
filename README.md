<p align="center">
<img
alt="ReactNative.js"
src="https://www.codeplusinfo.com/wp-content/uploads/2020/02/react-native-logo-e1581157043920.png"
width="200"
/>
</p>


[![npm Version][npm-image]][npm-url]
[![CI][actions-image]][actions-url]
[![Dependency Status][david-image]][david-url]
[![Code Style: Google][gts-image]][gts-url]


# Welcome to Tarjoman app
* This is cross platfrom app and you can run it on your Android / iOS devices or apple watches, even in a web browser.
* Beginner and advance programmers can use this app easlily!
* If you're a user, read section#1 to download our app!
* If you're programmer read section#2 to know how to installation.

⚠️**Beta5 in 2020.05.17** This app is not finalized yet! 
##  Introduction
Tarjoman: is simple code translator like Google Translator, to translate your word you want to programming language.
sorry, for now we developed Tarjoman to persian language for Iranian people.

**You can see some screenshots from Tarjoman app:**

![TarjomanHomeScreen](https://github.com/AlirezaSoltaniNeshan/Tarjomanapp/blob/master/images/TarjomanCodeDescription.png)
![TarjomanCodeScreen](https://github.com/AlirezaSoltaniNeshan/Tarjomanapp/blob/master/images/TarjomanCodepage.png)
![description](https://github.com/AlirezaSoltaniNeshan/Tarjomanapp/blob/master/images/TarjomanHomePage.png)
## Section#1
you can download Tarjoman app for Android or iOS from our site 
http://tarjomanapp.ir/
only one click you need to enjoy code learning with Tarjoman

## Section#2
**If you are a programmer, it is important to read the following details**
Tarjoman developed by **ReactNatve.js** for _Android _and _iOS _app. if you want to know what did package i use, you need to install npm.js

* Necessary Prerequires 
   * Use expo cli to run your app in emulator / simpolator or real devices, during publishing this app i used expo-cli 3.20.0 version
   * If you have windows devices Android Studio 3.5+ and SDK API R (latest version) or API 20+
   * If you have MacOS use Xcode 9+ & simulator iOS 9+
   * Use VS Code or Atom editors to write JS & JSX code, i recommend VS Code😎

This app based on 2 independent modules:
* The mobile app
   * Check out the /app folder for instructions on how to deploy the app to your mobile.
* The API 
   * You need to this URL https://tarjoman-tarjoman.fandogh.cloud/

You my ask me, How can i use this base url and and where should we put it?

## Usage from Tarjoman API

Request

`GET https://tarjoman-tarjoman.fandogh.cloud/syncLan`

| Name | Type | Description                                                                     |
|------|------|---------------------------------------------------------------------------------|
|parameter| String |Required, when you want search command like class or function               |
|lang| Integer |Each programming language uses an ID desired results from the database           |

Now you must create Axios module in your repository 

but before you need to install package axios from npm

`npm install axios --save `

Then create folder API and file as TarjomanAPI.js

create code module:

```js
import axios from 'axios';
// Tarjoman module
export default axios.create({
    baseURL:'https://tarjoman-tarjoman.fandogh.cloud/'
});
```

 ## License

Copyright © 2020 Alireza Soltani Neshan

[actions-image]: https://github.com/google/js-green-licenses/workflows/ci/badge.svg
[actions-url]: https://github.com/google/js-green-licenses/actions
[codecov-image]: https://codecov.io/gh/google/js-green-licenses/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/google/js-green-licenses
[david-image]: https://david-dm.org/google/js-green-licenses.svg
[david-url]: https://david-dm.org/google/js-green-licenses
[gts-image]: https://img.shields.io/badge/code%20style-google-blueviolet.svg
[gts-url]: https://github.com/google/gts
[npm-image]: https://img.shields.io/npm/v/js-green-licenses.svg
[npm-url]: https://npmjs.org/package/js-green-licenses
[snyk-image]: https://snyk.io/test/github/google/js-green-licenses/badge.svg
[snyk-url]: https://snyk.io/test/github/google/js-green-licenses
