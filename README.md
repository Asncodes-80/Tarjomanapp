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

![TarjomanHomeScreen](https://github.com/asnTeam/Tarjoman/blob/master/images/Screenshot_1589553412.png)
![TarjomanCodeScreen](https://github.com/asnTeam/Tarjoman/blob/master/images/Screenshot_1589553421.png)
![description](https://github.com/asnTeam/Tarjoman/blob/master/images/Screenshot_1589553539.png)
## Section#1
you can download Tarjoman app for Android or iOS from our site 
http://tarjomanapp.ir/
only one click you need to enjoy code learning with Tarjoman

## Section#2
**If you are a programmer, it is important to read the following details**
Tarjoman developed by **ReactNatve.js** for _Android _and _iOS _app. if you want to know what did package i use, you need to install npm.js

* Necessary Prerequires 
   * Use expo cli to run your app in emulator / simpolator or real devices, during publishing this app i used expo-cli 3.20.0 version
   * If you have windows devices Android Studio 3.5+ and SDK API R or API 29+
   * If you have MacOS use Xcode 10+ & simulator iOS 12+
   * Use VS Code or Atom editors to write JS & JSX code, i recommend VS Code

This app based on 3 independent modules:
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
|lang| Ineger |Each programming language uses an ID desired results from the database           |
