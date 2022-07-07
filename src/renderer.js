/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './css/gse-style.css'
import './css/gse-style-loading.css'

(function(global) {

	// This function is called after the engine script file has loaded.
	// At that point, the gse.ready function has be defined and we can call it.
	global.onEngineLoad = function() {

		// gse.ready() is a global function defined by the engine JavaScript
		// file. It is the only global function of the API and the only way to
		// initially interact with the game. The remainder of the API is object-
		// oriented.
		// We define a ready callback function and pass it to gse.ready().
		// Later, that callback will be invoked when the engine is ready.
		// Via the callback's arguments, the GameSalad code passes us back an
		// object called "engine" which implements several useful API functions.
		gse.ready(function(engine) {

			// These bits of code are optional.
			
			// A delegate is a JavaScript object that receives callback from the
			// engine on particular events.
			
			// To learn more about available delegates, look here:
			// https://help.gamesalad.com/knowledge-base/does-the-html5-engine-have-any-apis-i-can-interact-with/
			var loadingElement = document.getElementById('gse-loading');
			var playerDelegate = {
				onLoadingBegin: function() {
					engine.showOverlay();
					loadingElement.style.visibility = 'visible';
				},

				onLoadingEnd: function() {
					loadingElement.style.visibility = 'hidden';
					engine.hideOverlay();
				},

				onWindowResize: function() {
					engine.relayout();
				}
			};
			engine.appendDelegate(playerDelegate);
			window.addEventListener('resize', playerDelegate.onWindowResize, false);

			// These lines initialize and configure the engine.
			// The choices for engine.setOptions are:
			// viewport-reference = game | frame | window
			// viewport-fit = none | center | fill | letterbox | overscan
			engine.setRenderFrame('gse-player');
			engine.setOptions({
				'viewport-reference': 'window',
				'viewport-fit': 'letterbox'
			});
			engine.loadOptionsFromURL();

			// While the engine is ready, the game assets have not been loaded
			// yet. The final step is to begin loading the game.
			// We have a few options:

			// 1. Begin loading game assets immediately, from the default game
			// location, and then start the first scene soon as it is complete.
			// This is the simplest option with just one line.
			engine.play();


			// 3. Begin loading the game in the background, but do not
			// immediately start the first scene.
			// Instead, we will delay starting the game until some user event,
			// such as waiting for them to click a button. This is an open ended
			// choice, so implementations will vary.
			// A very simple example might look like this below.
			// Notice we pass a path to the load() function and then later call
			// the play() function without any arguments. You just need a
			// reference to the engine object, either in this closure scope or
			// with a global variable.
			// If you choose this route, you might want to tinker with the
			// loading animation code so that you get the right visual experience.

			// begin loading...
			//engine.load('path/to/game/directory');

			// register a click listener to start the game
			//document.getElementById('gse-player').addEventListener('click', function() {
			//	engine.play();
			//});


			// 4. Neither load nor play the game immediately. Like the previous
			// option, this can be very open ended. For example, maybe you want
			// to play a video clip first, and then load the game.
			// You can defer calling engine.load() and engine.play() in response
			// to whatever JavaScript events suits your design.
		});
	};

}(window));

onEngineLoad()

console.log('👋 This message is being logged by "renderer.js", included via webpack');
