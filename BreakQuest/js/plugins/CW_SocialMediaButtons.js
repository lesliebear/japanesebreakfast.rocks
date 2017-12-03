//=======================================================================
// Social Media Buttons/In-Game Website Plugin (RMMV) v1.5
//=======================================================================
// * The Social Media Buttons/In-Game Website plugin is a simple plugin
//	 to add social media buttons to the Title Screen.  Clicking on them
//	 opens a new window with their respective ULs displayed.
//
//   This was inspired by Yanfly's excellent "External Links" plugin. I
//	 You can  also use  the plugin  to display a  web page  in-game  by
//	 calling a Plugin Command and the URL in an event.
//
//   This was inspired by Yanfly's excellent "External Links" plugin. I
//   integrated it into "Adventures of Tryggr", then into "Otherworld",
//   but wrote my own to trim out some of the superfluous code and make
//   it more compatible with "Otherworld"'s menu.
//
//	 So based on that same principle, I decided to add a separate block
//	 on the Title Screen to contain  "Otherworld"'s Twitter account and
//	 official  blogsite,  as well as  RPG  Maker  Times Facebook  page,
//	 rather than putting them in the main menu, to declutter it. I then
//	 adapted it for more general use.
//
//	 The plugin only has 3 social  media buttons (Twitter, Facebook and
//	 Website) displayed on the Title Screen, but more may be added over
//	 time. You have a choice on whether to open the links in a separate
//	 game window or in your default browser.
//
//       * © 2016, Companion Wulf
//
//========================================================================
// CW_SocialMediaButtons.js
//========================================================================
 
var Imported = Imported || {}; Imported.CW_SocialMediaButtons = true;
var CWT = CWT || {};

CWT.Version = 1.5;
CWT.Build = 7.3;
CWT.Copyright = '© 2016, Companion Wulf';

/*:
 @plugindesc Add social media buttons to the Title Screen.
 @author Companion Wulf
 
 @param Twitter
 @desc Toggles Twitter button On/Off.
 @default On

 @param Twitter Icon
 @desc The default Twitter icon to use.
 @default OW-Twitter

 @param Twitter URL
 @desc The URL to show your project's Twitter account.
 @default https://twitter.com/OtherworldMV

 @param Facebook
 @desc Toggles Facebook button On/Off.
 @default On

 @param Facebook Icon
 @desc The default Facebook icon to use.
 @default OW-Facebook

 @param Facebook URL
 @desc The URL to show your project's Facebook account.
 @default https://www.facebook.com/RPGMakerTimes/

 @param Website
 @desc Toggles Website button On/Off.
 @default On

 @param Website Icon
 @desc The default Website icon to use.
 @default OW-Website

 @param Website URL
 @desc The URL to show your website.
 @default http://blog.rpgmakertimes.info

 @param Display Method
 @desc Choose to display in a Window or Browser
 @default Window
 
 @help
 The Social Media Buttons/In-Game Website plugin only has three right now:
 Twitter, Facebook and Website. The plugin will be improved over time,
 including adding more buttons and being able to adjust its position
 on-screen (currently it shows in the bottom right corner).

 You can also call a website from within the game (see Plugin Commands
 below).

 For each social media button there are three parts: Account, Icon and URL.

 NOTE: If playing in a browser, the URL might not open if you have a popup
 blocker, so make sure you allow it. In Windows versions, a new window
 will open to display the website.

 --------------------------------------------------------------
  Account
 --------------------------------------------------------------
 Each account can be toggled On or Off, so you can choose which ones to use.

 --------------------------------------------------------------
  Icon
 --------------------------------------------------------------
 This setting is the icon you want to use. Recommended size is 32x32. Save
 these in the Pictures folder. If you use your own icons, be sure to
 change this setting to the filename you used.

 --------------------------------------------------------------
  URL
 --------------------------------------------------------------
 This is the full website of your social media account or page. When the
 button is  clicked, a window will open displaying it.

 --------------------------------------------------------------
  Display Method
 --------------------------------------------------------------
 This selects how to display the URL. You can choose to display your links
 in a game Window or in your default Browser.

 --------------------------------------------------------------
  Plugin Commands
 --------------------------------------------------------------
 You can also call a website from within the game using the following Plugin
 Command:

 showurl <url>

 where <url> is the FULL web address to open. This will open in a new window
 or browser tab (depending on the Display Method setting above).

 --------------------------------------------------------------
  * Terms & Conditions of Use *
 --------------------------------------------------------------
 This plugin is free to use under CC BY-NC 4.0, but please refer to
 the RPG Maker Times blogsite for other details, including for
 commercial use.
 
 Credit "Companion Wulf" or "RPG Maker Times" if using this plugin
 in your projects.
 
	For all Terms of Use, visit: http://wp.me/P2Vm8L-1z4
*/

(function() {

	CWT.parameters = PluginManager.parameters('CW_SocialMediaButtons');
	// Twitter
	CWT.twitterToggle = String(CWT.parameters['Twitter'] || 'OFF');
	CWT.twitterIcon = String(CWT.parameters['Twitter Icon'] || '');
	CWT.twitterUrl = String(CWT.parameters['Twitter URL'] || 'https://twitter.com');
	// Facebook
	CWT.facebookToggle = String(CWT.parameters['Facebook'], 'OFF');
	CWT.facebookIcon = String(CWT.parameters['Facebook Icon'] || '');
	CWT.facebookUrl = String(CWT.parameters['Facebook URL'] || 'https://facebook.com');
	// Website
	CWT.websiteToggle = String(CWT.parameters['Website'], 'ON');
	CWT.websiteIcon = String(CWT.parameters['Website Icon'] || '');
	CWT.websiteUrl = String(CWT.parameters['Website URL'] || '');
	CWT.displayMethod = String(CWT.parameters['Display Method' || 'Window']);

	CWT._alias_Scene_Title_create = Scene_Title.prototype.create;
	Scene_Title.prototype.create = function() {
		CWT._alias_Scene_Title_create.call(this);
		this.createSocialButtons();
	};

	CWT._alias_GameInterpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
		if (command.toUpperCase() === 'SHOWURL') {
			var uri = args[0];
			switch(CWT.displayMethod.toUpperCase()) {
				case 'WINDOW':
					var urlWin = window.open(uri, '_blank');
					if (urlWin) { urlWin.focus(); } else { return false; };
					break;
				case 'BROWSER':
					var gui = require('nw.gui');
					gui.Shell.openExternal(uri);
					break;
			}
		}
	};

	// ** Social Media Buttons
	Scene_Title.prototype.createSocialButtons = function() {
		// * Create Buttons
		this._twitterButton = new Sprite_Button();
		this._twitterButton.bitmap = ImageManager.loadPicture('OW-Twitter');
		this._facebookButton = new Sprite_Button();
		this._facebookButton.bitmap = ImageManager.loadPicture('OW-Facebook');
		this._websiteButton = new Sprite_Button();
		this._websiteButton.bitmap = ImageManager.loadPicture('OW-Website');
		// * Add Buttons
		if (CWT.twitterToggle.toUpperCase() === 'ON') this.addChild(this._twitterButton);
		if (CWT.facebookToggle.toUpperCase() === 'ON') this.addChild(this._facebookButton);
		if (CWT.websiteToggle.toUpperCase() === 'ON') this.addChild(this._websiteButton);
		// * Set Commands
		this._twitterButton.setClickHandler(this.visitTwitter.bind(this));
		this._facebookButton.setClickHandler(this.visitFacebook.bind(this));
		this._websiteButton.setClickHandler(this.visitWebsite.bind(this));
		// * Position Buttons Block
		this.positionBlock(700, 570);
	};

	Scene_Title.prototype.visitTwitter = function() {
		this.openUrl(CWT.twitterUrl);
	};

	Scene_Title.prototype.visitFacebook = function() {
		this.openUrl(CWT.facebookUrl);
	};

	Scene_Title.prototype.visitWebsite = function() {
		this.openUrl(CWT.websiteUrl);
	}

	Scene_Title.prototype.openUrl = function(uri) {
		if (!this.isBusy()) {
			switch(CWT.displayMethod.toUpperCase()) {
				case 'WINDOW':
					var urlWin = window.open(uri, '_blank');
					if (urlWin) { urlWin.focus(); } else { return false; };
					break;
				case 'BROWSER':
					var gui = require('nw.gui');
					gui.Shell.openExternal(uri);
					break;
			}
		}
	};

	Scene_Title.prototype.positionBlock = function(x, y) {
		this._twitterButton.x = x, this._twitterButton.y = y;
		this._facebookButton.x = x + 34, this._facebookButton.y = y;
		this._websiteButton.x = x + 68, this._websiteButton.y = y;
	};

})();

/*
==========================================================================
  ** Social Media Buttons/In-Game Website Plugin Updates Log **
--------------------------------------------------------------------------
	* This is mainly for my own use and because I like keeping records 
		of updates to any scripts/plugins I write to keep track.

		** TO DO/FUTURE UPDATES
			* Dynamic popup blocker alerter
			* Dynamically change positioning of icons if one is OFF
			* Allow manual positioning of button block (to top left, top right, etc.)
			* Add mouse-over effects for icons??
		
		Version.Update.Bug Fix/Tweak
	
	* v1.5.0 (10-Apr-2016)
		--RELEASE: Version 1.5 (Public)
	* v1.4.1 (09-Apr-2016)
		--TWEAK: showUrl Plugin Command also has Window/Browser options
		--ADD: Plugin options to open links in either a Window or Browser
		--ADD: Gui method to open links in default browser
	* v1.2.0 (07-Apr-2016)
		--RELEASE: Version 1.2 (Public)
	* v1.1.1b (06-Apr-2016)
		--TWEAK: Change plugin title to "Social Media Buttons/In-Game Website Plugin (RMMV) v1.2"
		--ADD: Plugin Command to call website from within the game
	* v1.0.0b (03-Apr-2016)
		--RELEASE: Version 1.0 (Beta)
		--BUG FIX: Icons show up even if toggle is OFF
		--ADD: More settings for choice of icon and websites
		--ADD: Website button
		--ADD: Facebook button
		--ADD: Twitter button
		--Created Social Media Buttons Plugin
		
==========================================================================		
*/