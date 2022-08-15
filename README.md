# GameSalad Electron Boilerplate

This boilerplate project makes is easier to turn GameSalad HTML5 Projects into Electron wrapped desktop apps. 

The boilerplat was generated from the Electron Forge Project:
https://www.electronforge.io/templates/webpack-template

## Setup
* Install Node.js
-- Install current version: https://node.js.org/en/
  - Install via NVM (Node Version Manager) https://github.com/nvm-sh/nvm
* Download this repo
* Install git (some of the npm dependecies need it.
* Run `npm install` to install all dependencies.

## Game Setup
You'll need to copy/replace the following directories from your GameSalad HTML5 package. You need to copy the following files into the "static" subdirectory of this project.

| GameSalad HTML5 | GS Electron Project | Note                          |
| --------------- | ------------------- | ----------------------------- |
| game            | static/game         | Game Project                  |
| images          | static/images       | Scene loading indicator image |
| js/gse          | static/js/gse       | Game Engine                   |
| css             | src/css             | CSS. Optional since it doesn't change often |

Executable Name. Change "productName" in package.json to the executable name you want.

## Delegates
If you want to customize what your game does on certain events, you can change or add delegates functions in srce/renderer.js

To learn about available delegates, take a look here:
https://help.gamesalad.com/knowledge-base/does-the-html5-engine-have-any-apis-i-can-interact-with/

## Development
If you're looking to test locally, just run `npm start` and it will pop up a desktop app with the browser development console open to help you debug.

## Create an app
In package.json there are a number of plugins under config.forge.makers that allow you to generage app pacakges.

If you don't see what you want to add more options.

Learn more about your options here: https://www.electronforge.io/config/makers

This project is currently set up for MacOS (look for 'darwin' in package.json under config.forge.makers)

What you'll want to do is change that to one of the following.
* darwin (MacOS)
* mas (MacOS for the Mac App Store)
* linux
* win32 (Windows)

`npm run make`

This will build apps for your current platform.

## Code signing
Some stores and operating systems want you to sign your app. Here are some tips on signing an electron app.

https://www.electronjs.org/docs/latest/tutorial/code-signing#electron-forge
