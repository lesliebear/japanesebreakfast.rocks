// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.24 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"SRD_Debug_SpeedUp","status":false,"description":"Allows you to speed up your game during testing!","parameters":{"Playtesting Only?":"true","Speed Toggle Key":"L","Fade Indicator?":"false","== Speed Keys ==":"","x1 Speed Key":"U","x1.25 Speed Key":"","x1.5 Speed Key":"I","x2 Speed Key":"O","x3 Speed Key":"","x5 Speed Key":"P","x10 Speed Key":""}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.44 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"1","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"280 + index * 48","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"180","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"false","Show Surprise Text":"false","Optimize Speed":"false","Show Action Text":"true","Show State Text":"true","Show Buff Text":"true","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"true","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_ActSeqPack2","status":true,"description":"v1.11 (Requires YEP_BattleEngineCore.js) Visual functions\nare added to the Battle Engine Core's action sequences.","parameters":{}},
{"name":"YEP_X_AnimatedSVEnemies","status":true,"description":"v1.17 (Requires YEP_BattleEngineCore.js) This plugin lets\nyou use Animated Sideview Actors for enemies!","parameters":{"---General---":"","Anchor X":"0.5","Anchor Y":"1","Sprite Smoothing":"true","Sprite Width":"auto","Sprite Height":"auto","Collapse":"false","Frame Speed":"12","Show State Overlay":"true","---Shadows---":"","Show Shadow":"false","Shadow Scale X":"auto","Shadow Scale Y":"auto","---Breathing---":"","Enable Breathing":"1","Breathing Speed":"20","Breathing X Rate":"0.001","Breathing Y Rate":"0.02","HP Link Breathing":"false","---Floating---":"","Floating Speed":"20","Floating Rate":"0.3","Floating Height":"50","Floating Death":"true","---Motions---":"","Attack Motion":"thrust","Weapon Image Index":"0","Idle Motion":"walk","Damage Motion":"damage","Evade Motion":"evade","Escape Motion":"escape","Guard Motion":"guard","Abnormal Motion":"abnormal","Sleep Motion":"sleep","Dying Motion":"dying","Dead Motion":"dead","---Weapons---":"","Weapon 1 Motion":"swing","Weapon 1 Animation":"6","Weapon 2 Motion":"swing","Weapon 2 Animation":"6","Weapon 3 Motion":"swing","Weapon 3 Animation":"1","Weapon 4 Motion":"swing","Weapon 4 Animation":"6","Weapon 5 Motion":"swing","Weapon 5 Animation":"6","Weapon 6 Motion":"swing","Weapon 6 Animation":"1","Weapon 7 Motion":"missile","Weapon 7 Animation":"11","Weapon 8 Motion":"missile","Weapon 8 Animation":"11","Weapon 9 Motion":"missile","Weapon 9 Animation":"111","Weapon 10 Motion":"thrust","Weapon 10 Animation":"16","Weapon 11 Motion":"thrust","Weapon 11 Animation":"1","Weapon 12 Motion":"thrust","Weapon 12 Animation":"11","Weapon 13 Motion":"swing","Weapon 13 Animation":"1","Weapon 14 Motion":"swing","Weapon 14 Animation":"1","Weapon 15 Motion":"swing","Weapon 15 Animation":"1","Weapon 16 Motion":"swing","Weapon 16 Animation":"6","Weapon 17 Motion":"swing","Weapon 17 Animation":"7","Weapon 18 Motion":"swing","Weapon 18 Animation":"1","Weapon 19 Motion":"missile","Weapon 19 Animation":"11","Weapon 20 Motion":"missile","Weapon 20 Animation":"111","Weapon 21 Motion":"missile","Weapon 21 Animation":"111","Weapon 22 Motion":"thrust","Weapon 22 Animation":"7","Weapon 23 Motion":"missile","Weapon 23 Animation":"15","Weapon 24 Motion":"thrust","Weapon 24 Animation":"15","Weapon 25 Motion":"swing","Weapon 25 Animation":"1","Weapon 26 Motion":"thrust","Weapon 26 Animation":"1","Weapon 27 Motion":"thrust","Weapon 27 Animation":"1","Weapon 28 Motion":"thrust","Weapon 28 Animation":"1","Weapon 29 Motion":"thrust","Weapon 29 Animation":"1","Weapon 30 Motion":"thrust","Weapon 30 Animation":"1"}},
{"name":"YEP_CreditsPage","status":true,"description":"v1.00 Adds a 'Credits' command to the title screen that\nwill take the player to a credits scene.","parameters":{"---General---":"","Command Name":"Credits","---Credit Lines---":"","Line 1 Text":"","Line 1 URL":"","Line 2 Text":"\\{\\C[1]Music: Japanese Breakfast","Line 2 URL":"","Line 3 Text":"Website and portfolio: click here, or japanesebreakfast.rocks","Line 3 URL":"http://japanesebreakfast.rocks","Line 4 Text":"","Line 4 URL":"","Line 5 Text":"\\{\\C[1]Script, Music and Design: Michelle Zauner","Line 5 URL":"","Line 6 Text":"   ","Line 6 URL":"","Line 7 Text":"\\{\\C[1]Game Design and Development, Script: Elaine Fath","Line 7 URL":"","Line 8 Text":"Website and Portfolio: click here or elainefath.com","Line 8 URL":"https://www.elainefath.com","Line 9 Text":"   ","Line 9 URL":"","Line 10 Text":"Midi: Peter Bradley. Intro Screen Art: Jude Buffum.","Line 10 URL":"","Line 11 Text":"Menu Character Portraits: Nathan Utesch | ","Line 11 URL":"","Line 12 Text":"","Line 12 URL":"","Line 13 Text":"Special Thanks to Our Design Consults:","Line 13 URL":"","Line 14 Text":"Dr. Jessica Hammer, CMU. Tim Sweeney, Schell Games.","Line 14 URL":"","Line 15 Text":"Evan Whikehart, Secretly Group. ","Line 15 URL":"","Line 16 Text":"Special Thanks to Our Playtesters:","Line 16 URL":"","Line 17 Text":"FuYen Hsiao, Seth Glickman, Chuck Hoover,","Line 17 URL":"","Line 18 Text":"Adam Kolodny, Rob LeFevre, Dave Medina, Peter Bradley","Line 18 URL":"","Line 19 Text":"Leslie Bear, Gabe Liberti, Evan Whikehart, Vernon Shaw","Line 19 URL":"","Line 20 Text":"Jack Greenleaf, Emily Sprague","Line 20 URL":"","Line 21 Text":"","Line 21 URL":"","Line 22 Text":"Preload Manager by Tor Damian Design","Line 22 URL":"","Line 23 Text":"Thanks to Yanfly for numerous plugins","Line 23 URL":"","Line 24 Text":"Poop by Peter Parničan from the Noun Project","Line 24 URL":"","Line 25 Text":"Some sprites by Shigekichi/Bougainvillea ","Line 25 URL":"","Line 26 Text":"","Line 26 URL":"","Line 27 Text":"","Line 27 URL":"","Line 28 Text":"","Line 28 URL":"","Line 29 Text":"","Line 29 URL":"","Line 30 Text":"","Line 30 URL":"","Line 31 Text":"","Line 31 URL":"","Line 32 Text":"","Line 32 URL":"","Line 33 Text":"","Line 33 URL":"","Line 34 Text":"","Line 34 URL":"","Line 35 Text":"","Line 35 URL":"","Line 36 Text":"","Line 36 URL":"","Line 37 Text":"","Line 37 URL":"","Line 38 Text":"","Line 38 URL":"","Line 39 Text":"","Line 39 URL":"","Line 40 Text":"","Line 40 URL":"","Line 41 Text":"","Line 41 URL":"","Line 42 Text":"","Line 42 URL":"","Line 43 Text":"","Line 43 URL":"","Line 44 Text":"","Line 44 URL":"","Line 45 Text":"","Line 45 URL":"","Line 46 Text":"","Line 46 URL":"","Line 47 Text":"","Line 47 URL":"","Line 48 Text":"","Line 48 URL":"","Line 49 Text":"","Line 49 URL":"","Line 50 Text":"","Line 50 URL":"","Line 51 Text":"","Line 51 URL":"","Line 52 Text":"","Line 52 URL":"","Line 53 Text":"","Line 53 URL":"","Line 54 Text":"","Line 54 URL":"","Line 55 Text":"","Line 55 URL":"","Line 56 Text":"","Line 56 URL":"","Line 57 Text":"","Line 57 URL":"","Line 58 Text":"","Line 58 URL":"","Line 59 Text":"","Line 59 URL":"","Line 60 Text":"","Line 60 URL":"","Line 61 Text":"","Line 61 URL":"","Line 62 Text":"","Line 62 URL":"","Line 63 Text":"","Line 63 URL":"","Line 64 Text":"","Line 64 URL":"","Line 65 Text":"","Line 65 URL":"","Line 66 Text":"","Line 66 URL":"","Line 67 Text":"","Line 67 URL":"","Line 68 Text":"","Line 68 URL":"","Line 69 Text":"","Line 69 URL":"","Line 70 Text":"","Line 70 URL":"","Line 71 Text":"","Line 71 URL":"","Line 72 Text":"","Line 72 URL":"","Line 73 Text":"","Line 73 URL":"","Line 74 Text":"","Line 74 URL":"","Line 75 Text":"","Line 75 URL":"","Line 76 Text":"","Line 76 URL":"","Line 77 Text":"","Line 77 URL":"","Line 78 Text":"","Line 78 URL":"","Line 79 Text":"","Line 79 URL":"","Line 80 Text":"","Line 80 URL":"","Line 81 Text":"","Line 81 URL":"","Line 82 Text":"","Line 82 URL":"","Line 83 Text":"","Line 83 URL":"","Line 84 Text":"","Line 84 URL":"","Line 85 Text":"","Line 85 URL":"","Line 86 Text":"","Line 86 URL":"","Line 87 Text":"","Line 87 URL":"","Line 88 Text":"","Line 88 URL":"","Line 89 Text":"","Line 89 URL":"","Line 90 Text":"","Line 90 URL":"","Line 91 Text":"","Line 91 URL":"","Line 92 Text":"","Line 92 URL":"","Line 93 Text":"","Line 93 URL":"","Line 94 Text":"","Line 94 URL":"","Line 95 Text":"","Line 95 URL":"","Line 96 Text":"","Line 96 URL":"","Line 97 Text":"","Line 97 URL":"","Line 98 Text":"","Line 98 URL":"","Line 99 Text":"","Line 99 URL":"","Line 100 Text":"","Line 100 URL":"","Line 101 Text":"","Line 101 URL":"","Line 102 Text":"","Line 102 URL":"","Line 103 Text":"","Line 103 URL":"","Line 104 Text":"","Line 104 URL":"","Line 105 Text":"","Line 105 URL":"","Line 106 Text":"","Line 106 URL":"","Line 107 Text":"","Line 107 URL":"","Line 108 Text":"","Line 108 URL":"","Line 109 Text":"","Line 109 URL":"","Line 110 Text":"","Line 110 URL":"","Line 111 Text":"","Line 111 URL":"","Line 112 Text":"","Line 112 URL":"","Line 113 Text":"","Line 113 URL":"","Line 114 Text":"","Line 114 URL":"","Line 115 Text":"","Line 115 URL":"","Line 116 Text":"","Line 116 URL":"","Line 117 Text":"","Line 117 URL":"","Line 118 Text":"","Line 118 URL":"","Line 119 Text":"","Line 119 URL":"","Line 120 Text":"","Line 120 URL":"","Line 121 Text":"","Line 121 URL":"","Line 122 Text":"","Line 122 URL":"","Line 123 Text":"","Line 123 URL":"","Line 124 Text":"","Line 124 URL":"","Line 125 Text":"","Line 125 URL":"","Line 126 Text":"","Line 126 URL":"","Line 127 Text":"","Line 127 URL":"","Line 128 Text":"","Line 128 URL":"","Line 129 Text":"","Line 129 URL":"","Line 130 Text":"","Line 130 URL":"","Line 131 Text":"","Line 131 URL":"","Line 132 Text":"","Line 132 URL":"","Line 133 Text":"","Line 133 URL":"","Line 134 Text":"","Line 134 URL":"","Line 135 Text":"","Line 135 URL":"","Line 136 Text":"","Line 136 URL":"","Line 137 Text":"","Line 137 URL":"","Line 138 Text":"","Line 138 URL":"","Line 139 Text":"","Line 139 URL":"","Line 140 Text":"","Line 140 URL":"","Line 141 Text":"","Line 141 URL":"","Line 142 Text":"","Line 142 URL":"","Line 143 Text":"","Line 143 URL":"","Line 144 Text":"","Line 144 URL":"","Line 145 Text":"","Line 145 URL":"","Line 146 Text":"","Line 146 URL":"","Line 147 Text":"","Line 147 URL":"","Line 148 Text":"","Line 148 URL":"","Line 149 Text":"","Line 149 URL":"","Line 150 Text":"","Line 150 URL":"","Line 151 Text":"","Line 151 URL":"","Line 152 Text":"","Line 152 URL":"","Line 153 Text":"","Line 153 URL":"","Line 154 Text":"","Line 154 URL":"","Line 155 Text":"","Line 155 URL":"","Line 156 Text":"","Line 156 URL":"","Line 157 Text":"","Line 157 URL":"","Line 158 Text":"","Line 158 URL":"","Line 159 Text":"","Line 159 URL":"","Line 160 Text":"","Line 160 URL":"","Line 161 Text":"","Line 161 URL":"","Line 162 Text":"","Line 162 URL":"","Line 163 Text":"","Line 163 URL":"","Line 164 Text":"","Line 164 URL":"","Line 165 Text":"","Line 165 URL":"","Line 166 Text":"","Line 166 URL":"","Line 167 Text":"","Line 167 URL":"","Line 168 Text":"","Line 168 URL":"","Line 169 Text":"","Line 169 URL":"","Line 170 Text":"","Line 170 URL":"","Line 171 Text":"","Line 171 URL":"","Line 172 Text":"","Line 172 URL":"","Line 173 Text":"","Line 173 URL":"","Line 174 Text":"","Line 174 URL":"","Line 175 Text":"","Line 175 URL":"","Line 176 Text":"","Line 176 URL":"","Line 177 Text":"","Line 177 URL":"","Line 178 Text":"","Line 178 URL":"","Line 179 Text":"","Line 179 URL":"","Line 180 Text":"","Line 180 URL":"","Line 181 Text":"","Line 181 URL":"","Line 182 Text":"","Line 182 URL":"","Line 183 Text":"","Line 183 URL":"","Line 184 Text":"","Line 184 URL":"","Line 185 Text":"","Line 185 URL":"","Line 186 Text":"","Line 186 URL":"","Line 187 Text":"","Line 187 URL":"","Line 188 Text":"","Line 188 URL":"","Line 189 Text":"","Line 189 URL":"","Line 190 Text":"","Line 190 URL":"","Line 191 Text":"","Line 191 URL":"","Line 192 Text":"","Line 192 URL":"","Line 193 Text":"","Line 193 URL":"","Line 194 Text":"","Line 194 URL":"","Line 195 Text":"","Line 195 URL":"","Line 196 Text":"","Line 196 URL":"","Line 197 Text":"","Line 197 URL":"","Line 198 Text":"","Line 198 URL":"","Line 199 Text":"","Line 199 URL":"","Line 200 Text":"","Line 200 URL":"","Line 201 Text":"","Line 201 URL":"","Line 202 Text":"","Line 202 URL":"","Line 203 Text":"","Line 203 URL":"","Line 204 Text":"","Line 204 URL":"","Line 205 Text":"","Line 205 URL":"","Line 206 Text":"","Line 206 URL":"","Line 207 Text":"","Line 207 URL":"","Line 208 Text":"","Line 208 URL":"","Line 209 Text":"","Line 209 URL":"","Line 210 Text":"","Line 210 URL":"","Line 211 Text":"","Line 211 URL":"","Line 212 Text":"","Line 212 URL":"","Line 213 Text":"","Line 213 URL":"","Line 214 Text":"","Line 214 URL":"","Line 215 Text":"","Line 215 URL":"","Line 216 Text":"","Line 216 URL":"","Line 217 Text":"","Line 217 URL":"","Line 218 Text":"","Line 218 URL":"","Line 219 Text":"","Line 219 URL":"","Line 220 Text":"","Line 220 URL":"","Line 221 Text":"","Line 221 URL":"","Line 222 Text":"","Line 222 URL":"","Line 223 Text":"","Line 223 URL":"","Line 224 Text":"","Line 224 URL":"","Line 225 Text":"","Line 225 URL":"","Line 226 Text":"","Line 226 URL":"","Line 227 Text":"","Line 227 URL":"","Line 228 Text":"","Line 228 URL":"","Line 229 Text":"","Line 229 URL":"","Line 230 Text":"","Line 230 URL":"","Line 231 Text":"","Line 231 URL":"","Line 232 Text":"","Line 232 URL":"","Line 233 Text":"","Line 233 URL":"","Line 234 Text":"","Line 234 URL":"","Line 235 Text":"","Line 235 URL":"","Line 236 Text":"","Line 236 URL":"","Line 237 Text":"","Line 237 URL":"","Line 238 Text":"","Line 238 URL":"","Line 239 Text":"","Line 239 URL":"","Line 240 Text":"","Line 240 URL":"","Line 241 Text":"","Line 241 URL":"","Line 242 Text":"","Line 242 URL":"","Line 243 Text":"","Line 243 URL":"","Line 244 Text":"","Line 244 URL":"","Line 245 Text":"","Line 245 URL":"","Line 246 Text":"","Line 246 URL":"","Line 247 Text":"","Line 247 URL":"","Line 248 Text":"","Line 248 URL":"","Line 249 Text":"","Line 249 URL":"","Line 250 Text":"","Line 250 URL":"","Line 251 Text":"","Line 251 URL":"","Line 252 Text":"","Line 252 URL":"","Line 253 Text":"","Line 253 URL":"","Line 254 Text":"","Line 254 URL":"","Line 255 Text":"","Line 255 URL":"","Line 256 Text":"","Line 256 URL":"","Line 257 Text":"","Line 257 URL":"","Line 258 Text":"","Line 258 URL":"","Line 259 Text":"","Line 259 URL":"","Line 260 Text":"","Line 260 URL":"","Line 261 Text":"","Line 261 URL":"","Line 262 Text":"","Line 262 URL":"","Line 263 Text":"","Line 263 URL":"","Line 264 Text":"","Line 264 URL":"","Line 265 Text":"","Line 265 URL":"","Line 266 Text":"","Line 266 URL":"","Line 267 Text":"","Line 267 URL":"","Line 268 Text":"","Line 268 URL":"","Line 269 Text":"","Line 269 URL":"","Line 270 Text":"","Line 270 URL":"","Line 271 Text":"","Line 271 URL":"","Line 272 Text":"","Line 272 URL":"","Line 273 Text":"","Line 273 URL":"","Line 274 Text":"","Line 274 URL":"","Line 275 Text":"","Line 275 URL":"","Line 276 Text":"","Line 276 URL":"","Line 277 Text":"","Line 277 URL":"","Line 278 Text":"","Line 278 URL":"","Line 279 Text":"","Line 279 URL":"","Line 280 Text":"","Line 280 URL":"","Line 281 Text":"","Line 281 URL":"","Line 282 Text":"","Line 282 URL":"","Line 283 Text":"","Line 283 URL":"","Line 284 Text":"","Line 284 URL":"","Line 285 Text":"","Line 285 URL":"","Line 286 Text":"","Line 286 URL":"","Line 287 Text":"","Line 287 URL":"","Line 288 Text":"","Line 288 URL":"","Line 289 Text":"","Line 289 URL":"","Line 290 Text":"","Line 290 URL":"","Line 291 Text":"","Line 291 URL":"","Line 292 Text":"","Line 292 URL":"","Line 293 Text":"","Line 293 URL":"","Line 294 Text":"","Line 294 URL":"","Line 295 Text":"","Line 295 URL":"","Line 296 Text":"","Line 296 URL":"","Line 297 Text":"","Line 297 URL":"","Line 298 Text":"","Line 298 URL":"","Line 299 Text":"","Line 299 URL":"","Line 300 Text":"","Line 300 URL":""}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.06 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"false","Defeat First":"false","Always Visible":"true","---Appearance---":"","Minimum Gauge Width":"144","Gauge Height":"18","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"true","Y Buffer":"50","Use Thick Gauges":"true","---Text Display---":"","Show HP":"true","Show Value":"true","Show Max":"true"}},
{"name":"KODERA_optimization","status":true,"description":"1.0.3 Speed up core RPG Maker engine","parameters":{}},
{"name":"YEP_ItemCore","status":true,"description":"v1.27 Changes the way Items are handled for your game\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"Use %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"YEP_ExternalLinks","status":true,"description":"v1.00 Link back to your home page through the title screen\r\nand also be able to link your players from within the game.","parameters":{"Home Page URL":"http://japanesebreakfast.rocks","Home Page Text":"Japanese Breakfast Website","Popup Blocker Notice":"The link was blocked by a pop-up blocker."}},
{"name":"SRD_GameUpgrade","status":true,"description":"Enables more customization over the core mechanics of one's game while also providing additional functions for future plugins.","parameters":{"Game Window":"====================================","Game Reconstruction":"true","Game Resolution":"{\"Width\":\"816\",\"Height\":\"624\"}","Screen Resolution":"{\"Width\":\"\",\"Height\":\"\"}","Minimum Resolution":"{\"Width\":\"408\",\"Height\":\"312\"}","Maximum Resolution":"{\"Width\":\"\",\"Height\":\"\"}","Window Title":"","Allow Resize":"false","Initial Fullscreen":"false","Show Frame":"true","Always on Top":"false","Core Defaults":"====================================","Audio Master Volume":"100","Video Master Volume":"100","Image Cache Limit":"30","Decrypter Ignore List":"[\"system/Window.png\"]","JsonEx Max Depth":"100","Retry Intervals":"[\"500\",\"1000\",\"3000\"]","HTML Settings":"====================================","Background Color":"#000000","Image Rendering":"auto","PIXI Settings":"====================================","Garbage Collection Mode":"Automatic","Round Pixels":"false","Scale Mode":"Nearest","Wrap Mode":"Clamp"}},
{"name":"SRD_PreloaderCore","status":true,"description":"Allows developers to preload specific audio and images before running the game through a new pre-title scene.","parameters":{"Custom Background":"","Loading Text":"Loading %1","Complete Text":"Load Complete!","Use Fade Transitions":"true","Load Font Size":"28","Gauge Back Color":"rgba(0, 0, 0, 0.4)","Gauge Main Color":"rgba(255, 0, 0, 0.4)","Custom Preloads":"[]","Audio Preloads":"====================================","Cache Audio":"bgm, bgs, ms","Preload BGM":"HereComeTheTubularBells, SoftSoundsFromAnotherPlanet, ThisHouse, DivingWoman, PlanetaryAmbience, 12Steps","Preload BGS":"none","Preload ME":"none","Preload SE":"none","Image Preloads":"====================================","Preload System":"custom: Balloon, ButtonSet, Damage, GameOver, Loading, Shadow1, Shadow2, States, Weapons1, Weapons2, Weapons3, Window","Preload Animations":"custom: Light3","Preload Battlebacks1":"none","Preload Battlebacks2":"none","Preload Characters":"none","Preload Enemies":"none","Preload Faces":"none","Preload Parallaxes":"none","Preload Pictures":"none","Preload SV_Actors":"none","Preload SV_Enemies":"none","Preload Tilesets":"none","Preload Titles1":"none","Preload Titles2":"none"}}
];
