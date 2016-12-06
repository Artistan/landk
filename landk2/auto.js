// ==UserScript==
// @name         landk v4.0.0
// @namespace    https://raw.githubusercontent.com/Artistan/landk/master/landk2/auto.js
// @version      4.0.0
// @description  make it work better
// @author       CPeterson
// @grant       all
// @grant       unsafeWindow
// @grant       GM_getResourceText
// @grant       GM_addStyle
// @match        https://browsergame.lordsandknights.com/*
// @resource    customCSS1 https://raw.githubusercontent.com/Artistan/landk/master/landk2/auto.css?4l122=2131123
// @resource    customCSS2 http://upload.energybin.local/lnk.css?1=123
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// @require     https://gist.githubusercontent.com/Artistan/385fb5676c5408227410/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @require     https://gist.githubusercontent.com/Artistan/b33b8327bb29c6ad6de5b96d63636be5/raw/2f88290e3f4eecd21f3e80e47e827cfc87e3ed6a/jquery.binaryTransport.js
// @require     https://gist.githubusercontent.com/Artistan/1d2d62f46b64724d088a0d47035076dc/raw/67af1cda396cfcb3c251376946f6c886a2280670/recursive.find.js
// @require     https://raw.githubusercontent.com/j-ulrich/jquery-simulate-ext/master/libs/jquery.simulate.js
// ==/UserScript==

var newCSS1 = GM_getResourceText("customCSS1");
GM_addStyle(newCSS1);
var newCSS2 = GM_getResourceText("customCSS2");
GM_addStyle(newCSS2);
var fontCSS = GM_getResourceText("fontCSS");
GM_addStyle(fontCSS);

if (typeof unsafeWindow == 'undefined') {
  var unsafeWindow = window;
}

var _LNK_DEBUG_VERBOS = 5;
var _LNK_DEBUG_LIMITED = 3;
var _LNK_DEBUG_QUIET = 1;
var _LNK_DEBUG_SILENT = 0;

console.log('unsafeWindow',unsafeWindow);

// ===================================== auto lnk =====================================
unsafeWindow.ALNK = (function () {
  var pub = {};// public methods here

  var tAr = []; // test array
  var $castleElem = false;
  var fullyUpgraded = [289, 290, 1799];
  var timerObj = {};
  var groups = {
    'northern9elite': [
      20331 	,
      7212	,
      9849	,
      33771	,
      17413   ,
      9412	,
      13654	,
      10394	,
      7210	,
      12410	,
      13020	,
      7209	,
      33257	,
      4529
    ],
    'recyclers8': [
      16904,
      59021,
      26055,
      1072
    ],
    'alliance9': [
      69130, 36507, 1505, 40020, 17738, 63008, 34484, 44174, 9411, 7542, 10185, 22269, 20331, 10887, 23508, 17421, 7212, 9849, 58713, 25555, 3556, 2180, 8912, 117, 33771, 53299, 11724, 13589, 25122, 18088, 12222, 50251, 215, 8158, 13978, 25, 23618, 7305, 56591, 17122, 56342, 48929, 21664, 44332, 66192, 63286, 36294, 40590, 43023, 64560, 68926, 32328, 10635, 22892, 18271, 15428, 13162, 17413, 13000, 20965, 12957, 63297, 14693, 33211, 16136, 27537, 77, 33119, 51958, 26927, 9412, 13654, 6773, 7068, 14276, 9458, 7282, 12990, 63295, 369, 5072, 55792, 11759, 874, 10367, 46482, 16150, 48857, 34689, 30821, 37652, 25131, 9403, 10394, 58005, 68233, 44170, 46367, 5165, 20507, 13425, 11770, 10661, 7210, 7401, 30817, 12410, 46535, 20643, 30664, 19233, 34706, 2837, 25784, 13020, 7209, 37522, 11275, 27465, 50217, 33257, 63604, 61378, 16278, 23528, 4529, 47171, 23996, 64492, 2440, 45098, 16786, 24093, 26363, 48033
    ]
  };

  pub.runLnKNow = true;
  pub.missions = true;
  pub.buildings = true;

  pub.silver = true;
  pub.allTrade = false;
  pub.preferCopper = false;
  pub.minimumPopulation2Trade = true;

  pub.research = true;
  pub.clear = true;
  pub.attack_missions = false;
  pub.debug = _LNK_DEBUG_VERBOS;
  pub.troops = true;
  pub.troopNames = {
    /* spearman */ 1: 'spearman',
    /* swordman */ 2: 'swordman',/*
     /!* barbarian *!/ 3: 'barbarian',*/
    /* archer */ 101: 'archer',
    /* crossbowman */ 102: 'crossbowman',/*
     /!* barcher *!/ 103: 'barcher',*/
    /* scorpionrider */ 201: 'scorpionrider',
    /* lancer */ 202: 'lancer',/*
     /!* barhorse *!/ 203: 'barhorse',*/
    /* cart */ 10001: 'cart',
    /* oxen */ 10002: 'oxen'
  };
  pub.troopCounts = {
      0: {
        /* spearman */ 1: 100,
        /* swordman */ 2: 250,/*
         /!* barbarian *!/ 3: 100,*/
        /* archer */ 101: 250,
        /* crossbowman */ 102: 100,/*
         /!* barcher *!/ 103: 100,*/
        /* scorpionrider */ 201: 100,
        /* lancer */ 202: 100,/*
         /!* barhorse *!/ 203: 100,*/
        /* cart */ 10001: 0,
        /* oxen */ 10002: 36
      },
      289: {
        /* spearman */ 1: 605,
        /* swordman */ 2: 1010,/*
         /!* barbarian *!/ 3: 100,*/
        /* archer */ 101: 750,
        /* crossbowman */ 102: 400,/*
         /!* barcher *!/ 103: 100,*/
        /* scorpionrider */ 201: 330,
        /* lancer */ 202: 300,/*
         /!* barhorse *!/ 203: 100,*/
        /* cart */ 10001: 0,
        /* oxen */ 10002: 36
      },
      1799: {
        /* spearman */ 1: 4750,
        /* swordman */ 2: 5425,/*
         /!* barbarian *!/ 3: 100,*/
        /* archer */ 101: 4911,
        /* crossbowman */ 102: 5875,/*
         /!* barcher *!/ 103: 100,*/
        /* scorpionrider */ 201: 3450,
        /* lancer */ 202: 2475,/*
         /!* barhorse *!/ 203: 100,*/
        /* cart */ 10001: 0,
        /* oxen */ 10002: 220
      },
      12000: { /* TODO: get max limits for cities.*/
        /* spearman */ 1: 4750,
        /* swordman */ 2: 5425,/*
         /!* barbarian *!/ 3: 100,*/
        /* archer */ 101: 4911,
        /* crossbowman */ 102: 5875,/*
         /!* barcher *!/ 103: 100,*/
        /* scorpionrider */ 201: 3450,
        /* lancer */ 202: 2475,/*
         /!* barhorse *!/ 203: 100,*/
        /* cart */ 10001: 0,
        /* oxen */ 10002: 220
      }
  };
  // true == do nothing...
  var _debug = function (level) {
    //console.log('_debug', pub.debug, level, (pub.debug >= level));
    return (pub.debug < level);
  };
  var _doNothing = function () {
    return true;
  };
  // if not set / false, then flip it.
  var _trueFalseFunc = function (key) {
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_trueFalseFunc', key);
    if (tAr[key] === true) {
      _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('trueFalseFunc', true);
      tAr[key] = false;
    } else {
      _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('trueFalseFunc', false);
      tAr[key] = true;
    }
    // return the opposite
    return !tAr[key];
  };
  var okClick = false;
  var _closeDialogs = function () {
    var text = jQuery('#game-dialog-layer .dialog--text-section').text();
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_closeDialogs ('+text+')');
    if( jQuery('#game-dialog-layer .button-title-text:contains(Cancel),#game-dialog-layer .button-title-text:contains(CANCEL)').length > 0 ){
      jQuery('#game-dialog-layer .button-title-text:contains(Cancel),#game-dialog-layer .button-title-text:contains(CANCEL)').click();
    } else {
      jQuery('#game-dialog-layer .button-title-text:contains(Ok),#game-dialog-layer .button-title-text:contains(OK)').click();
    }
  };
  var _hasOverlayDialog = function () {
    return jQuery('#game-dialog-layer .button-title-text').length > 0;
  };
  var _hasOverlay = function () {
    return jQuery('#over-layer--game-pending.in').length > 0;
  };
  var _noOverlay = function (callback) {
    if(typeof callback == 'function'){
      callback();
    }
    return jQuery('#over-layer--game-pending.in').length < 1;
  };
  var _buildingRemoveOverlay = function() {
    jQuery('#over-layer--game-pending.in').removeClass('in');
    return jQuery('#over-layer--game-pending.in').length < 1;
  };
  // when truthyFunction then call callBackFunc ,, failInt causes max time out.
  var _timeoutLoop = function (waitTimeIntMin, waitTimeIntMax, truthyFunction, callBackFunc, failInt, _failureCallback, resetInt, _resetCallback) {
    if(_hasOverlayDialog()){
      _closeDialogs();
    }
    //_debug(_LNK_DEBUG_VERBOS)?_doNothing():console.log('_timeoutLoop',waitTimeIntMin,waitTimeIntMax,truthyFunction,callBackFunc,failInt);
    var caller = _timeoutLoop.caller.name;
    var truthyName = functionName( truthyFunction );
    var callBackName = functionName( callBackFunc );

    var waitTimeInt = _randomIntFromInterval(waitTimeIntMin, waitTimeIntMax);
    if (typeof failInt == 'undefined' || failInt > 40) {
      failInt = 40;// 100-1
    } else if (failInt === 0) {
      _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_timeoutLoop ('+caller+') :: resetInt / _resetCallback / _failureCallback', resetInt, _resetCallback, _failureCallback);
      if (typeof _resetCallback != 'undefined' && resetInt > 0) {
        _resetCallback(resetInt);//go back to the one that called this...
      } else if (typeof _failureCallback != 'undefined') {
        _failureCallback();
      }
      return false;
    } else {
      failInt--;
    }
    if (truthyFunction()) {
      if (typeof callBackFunc !== "undefined") {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_timeoutLoop ('+caller+') '+callBackName+' ');
        currentTimeoutID = setTimeout(function () {
          callBackFunc();// wait a sec OK!
        }, 1000);
      } else {
        _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_timeoutLoop ('+caller+') callBackFunc INVALID', callBackFunc);
      }
    } else {
      _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_timeoutLoop ('+caller+')  settimeout '+truthyName);
      //_debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_timeoutLoop settimeout ('+waitTimeInt+') /  failInt ('+failInt+')');
      currentTimeoutID = setTimeout(function () {
        return _timeoutLoop(waitTimeIntMin, waitTimeIntMax, truthyFunction, callBackFunc, failInt, _failureCallback, resetInt, _resetCallback);
      }, waitTimeInt);
    }
    return true;
  };
  /// castle Functions
  pub.castle = {};
  pub.castle.underAttack = false;
  var setupCastleVars = function() {
    pub.castle.Name = jQuery('.habitat-chooser--title span[data-reactid=".2.1.0.0.1.0"]').text();
    pub.castle.Points = jQuery('.habitat-chooser--title span[data-reactid=".2.1.0.0.1.1"]').text().replace(/\(/i, '').replace(/\)/i, '') * 1;
    pub.castle.fullyUpgraded = jQuery.inArray(pub.castle.Points, fullyUpgraded) > -1;
    pub.castle.fortress = pub.castle.Points > 290 && pub.castle.Points < 1800;
    pub.castle.city = pub.castle.Points > 1800;

    if (pub.silver && (pub.castle.fullyUpgraded || pub.allTrade)){
      // check limits - default castle..
      pub.castle.limit={};
      pub.castle.limit.silver = 19800;
      pub.castle.limit.copper = 19800;
      pub.castle.minimum={};
      pub.castle.minimum.resources={};
      pub.castle.minimum.resources.total = 19000;
      pub.castle.minimum.resources.single = 9500;
      pub.castle.minimum.resources.keep = 1000; // each
      if (pub.castle.fortress) {
        // set the fortress limits much higher.
        pub.castle.limit.silver = 196000;
        pub.castle.limit.copper = 196000;
        pub.castle.minimum.resources.total = 140000;
        pub.castle.minimum.resources.single = 77500;
        pub.castle.minimum.resources.keep = 10000; // each
      } else if (pub.castle.city) {
        // set the city limits much...much higher.
        pub.castle.limit.silver = 1990000;
        pub.castle.limit.copper = 1990000;
        pub.castle.minimum.resources.total = 1400000;
        pub.castle.minimum.resources.single = 1950000;
        pub.castle.minimum.resources.keep = 100000; // each
      }
    }
    pub.castle.resources={};
    pub.castle.resources.wood = getNumber('.resource-progress-bar--widget:has(.icon-resource-1) .resource-progress-bar--amount');
    pub.castle.resources.stone = getNumber('.resource-progress-bar--widget:has(.icon-resource-2) .resource-progress-bar--amount');
    pub.castle.resources.ore = getNumber('.resource-progress-bar--widget:has(.icon-resource-3) .resource-progress-bar--amount');
    pub.castle.resources.units = getNumber('.resource-progress-bar--widget:has(.icon-resource-4) .resource-progress-bar--amount');
    pub.castle.resources.copper = getNumber('.resource-progress-bar--widget:has(.icon-resource-5) .resource-progress-bar--amount');
    pub.castle.resources.silver = getNumber('.resource-progress-bar--widget:has(.icon-resource-6) .resource-progress-bar--amount');

    pub.castle.resources.tradable = pub.castle.resources.wood + pub.castle.resources.stone + pub.castle.resources.ore;

    pub.castle.resourceID=[];
    pub.castle.resourceID[1] = pub.castle.resources.wood;
    pub.castle.resourceID[2] = pub.castle.resources.stone;
    pub.castle.resourceID[3] = pub.castle.resources.ore;
    pub.castle.resourceID[4] = pub.castle.resources.units;
    pub.castle.resourceID[5] = pub.castle.resources.copper;
    pub.castle.resourceID[6] = pub.castle.resources.silver;

    console.log('pub.castle',pub.castle);
  };
  var getNumber = function(selector){
    var num = jQuery(selector).text();
    if(num.indexOf('k') >= 0){
      num = num.replace(/k/i, '') * 1000;
    }
    else if(num.indexOf('m') >= 0){
      num = num.replace(/m/i, '') * 1000000;
    } else {
      num = num * 1;
    }
    return num;
  };
  var verifyCastleVars = function(){
    var cname = jQuery('.habitat-chooser--title span[data-reactid=".2.1.0.0.1.0"]').text();
    if(cname != pub.castle.Name){
      resetCastleVars();
      return false;
    }
    return true;
  };
  var resetCastleVars = function() {
    pub.castle = {};
  };
  var _unitsReady = function () {
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_unitsReady');
    return jQuery('.menu--title-bar-main--title:contains(Units)').length > 0;
  };
  var _unitsFunctions = function() {
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_unitsFunctions');
    setupCastleVars();
    // count attacks
    pub.castle.Attacks = jQuery('.icon-AttackWarning').length;
    pub.castle.underAttack = pub.castle.Attacks > 0;
    // count existing units

    for (var level in pub.troopCounts) {
      console.log('level '+level,'Points '+pub.castle.Points);
      if (pub.troopCounts.hasOwnProperty(level) && pub.castle.Points >= level) {
        console.log('CLONE');
        pub.troopCountsNOW = cloneObj(pub.troopCounts[level]);
      }
    }
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('pub.troopCountsNOW '+pub.troopCountsNOW);

    // move on to the buildings section... there we can get to all other functions.
    jQuery('.icon-HabitatBuildings').click();
    _timeoutLoop(1000, 2000, _buildingReady, _buildingFunctions);// wait 1-2 seconds and run castle
  };

  var _buildingReady = function () {
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_buildingReady');
    return jQuery('.menu--title-bar-main--title:contains(Building list)').length > 0;
  };
  var _buildingFunctions = function () {
    _debug(_LNK_DEBUG_QUIET) ? _doNothing() : console.log('== _buildingFunctions  ::  ' + pub.castle.Name + ' [' + pub.castle.Points + '] ==');
    if (pub.buildings && !pub.castle.fullyUpgraded) {
      var currentBuilds = jQuery('.menu--content-section .widget--upgrades-in-progress--list .menu-list-element-basic--content-box.with-value:contains(Complete all buildings) .menu-list-element-basic--value').text() * 1;
      if(currentBuilds < 2){
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('currentBuilds '+currentBuilds);
        jQuery('.menu--content-section .button.button--default.button-with-icon.menu-element--button--action:not(.disabled):has(.icon-Build)').reverse().click();
      }
      _timeoutLoop(8000, 10000, _buildingRemoveOverlay, _researchFunctions);
    } else {
      _researchFunctions();
    }
  };

  var _researchFunctions = function () {
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : unsafeWindow.console.log('_researchFunctions');
    if (pub.research && !pub.castle.fullyUpgraded) {
      jQuery('.menu-section .clickable:has(.icon-building-library), .menu-section .clickable:has(.icon-building-university), .menu-section .clickable:has(.icon-building-universityarea)').click();
      _timeoutLoop(1000, 5000, _researchReady, _researchClick);
    } else {
      _missionFunctions();
    }
  };
  var _researchReady = function () {
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_researchReady');
    return jQuery('#menu-section-drill-container .menu-list-element .icon-building-library, #menu-section-drill-container .menu-list-element .icon-building-university, #menu-section-drill-container .menu-list-element .icon-building-universityarea').length > 0;
  };
  var _researchClick = function () {
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_researchClick');
    var maxResearch = (pub.castle.Points < 290) ? 2 : 1;

    var currentResearch = (jQuery('#menu-section-drill-container .menu-list-element-basic--description').length * 1) / 2;
    if(currentResearch < maxResearch){
      jQuery('#menu-section-drill-container .button.button--default.button-with-icon.menu-element--button--action:not(.disabled):has(.icon-Research)').click();
    }
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_researchClick > _missionFunctions');
    _timeoutLoop(8000, 10000, _buildingRemoveOverlay, _missionFunctions);
  };
  var _missionFunctions = function () {
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_missionFunctions');
    if ( !pub.castle.underAttack || pub.attack_missions) {
      jQuery('.menu-section .clickable:has(.icon-building-tavern), .menu-section .clickable:has(.icon-building-tavernarea), .menu-section .clickable:has(.icon-building-tavernquarter) ').click();
      jQuery('.menu--title-bar-main .button:contains(Tavern)').click();
      //(waitTimeIntMin, waitTimeIntMax, truthyFunction, callBackFunc, failInt, _failureCallback, resetInt, _resetCallback)
      _timeoutLoop(3000, 5000, _missionReady, _missionClick, 10, _missionFunctions);
    } else {
      // count
      _troopsMissionCount();
    }
  };
  var _troopsMissionCount = function () {
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_troopsMissionCount troops', pub.troops);
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('pub.troopCountsNOW ORIGINAL',pub.troopCountsNOW);
    jQuery('.menu--content-section div:has(.menu-list-element.menu-list-title-basic:contains("Available missions"))  .button.button--default.button-with-icon.disabled.menu-element--button--action').each(function(){
      var jq = jQuery(this);
      jq.click().each(function(){
        jQuery('.menu-list-element.habitat-overview--widget:has(.summary:contains(Units required)) .icon-amount--widget').each(function(){
          var un = jQuery(this);
          var unit = un.data('reactid').replace(/.*unit-/i,'');
          pub.troopCountsNOW[unit] = cloneObj(pub.troopCountsNOW[unit]) + (unit.find('.amount').html() * 1);
        });
      });
    });
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('pub.troopCountsNOW NEW',pub.troopCountsNOW);
    _tradeFunctions();
  };

  var _missionReady = function () {
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_missionReady');
    return jQuery('#menu-section-drill-container .menu-list-element.menu-list-title-basic:contains(Available missions)').length > 0;
  };
  var _missionClick = function () {
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_missionClick');
    var $kItems = jQuery('#menu-section-drill-container .button.button--default.button-with-icon.menu-element--button--action:not(.disabled):has(.icon-Mission)');
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_missionClick', $castleElem, $kItems);
    // check if we can do more research...
    if ($kItems.length > 0) {
      $kItems.slice(-1).click();
      _timeoutLoop(600, 800, _noOverlay, function () {
        _missionClick();
      });
    } else {
      _timeoutLoop(600, 800, _noOverlay, _tradeFunctions);
    }
  };
  var _tradeFunctions = function () {
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_tradeFunctions points/upgraded/silver/allTrade', pub.castle.Points, pub.castle.fullyUpgraded, pub.silver, pub.allTrade);
    // only run these every incrementalCount, or if manualMisssions
    if (pub.silver && (pub.castle.fullyUpgraded || pub.allTrade)) {
      jQuery('.menu-section .clickable:has(.icon-building-keep),.menu-section .clickable:has(.icon-building-townhall), .menu-section .clickable:has(.icon-building-embassy)').click();
      jQuery('.menu--title-bar-main .button:contains(Keep),.menu--title-bar-main .button:contains(Townhall)').click();
      _timeoutLoop(2000, 3000, _tradeReady, _tradeClick.bind(this, 10));
    } else {
      return _troopsFunctions();
    }
  };
  var _tradeReady = function () {
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_tradeReady');
    return jQuery('.menu--title-bar-main--title:contains(Keep),.menu--title-bar-main--title:contains(Townhall)').length > 0;
  };


  var _tradeClick = function (retry) {
    // if silver automation and once every incremental counter rounds, and no knowledge to learn.
    if (pub.silver) {
      _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_tradeClick', retry);
      // check resources
      setupCastleVars();// reset vars based on updates done thus far.
      if (pub.castle.resources.units > 250 && pub.minimumPopulation2Trade) {
        _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log(' *** recruit more soldiers *** ');
        return _troopsFunctions();
      }
      _debug(_LNK_DEBUG_QUIET) ? _doNothing() : console.log('tradable ' + pub.castle.resources.tradable + ' VS min ' + pub.castle.minimum.resources.total);
      if (
              pub.castle.resources.tradable > pub.castle.minimum.resources.total ||
              pub.castle.resources.wood > pub.castle.minimum.resources.single ||
              pub.castle.resources.stone > pub.castle.minimum.resources.single ||
              pub.castle.resources.ore > pub.castle.minimum.resources.single
      ) {
        // click on the link...
        if (pub.preferCopper && pub.castle.resources.copper < pub.castle.limit.copper) {
          jQuery('.menu-list-element.menu-list-element-basic.clickable.widget--trade-rates:has(.icon-resource-5)').click(); //trade for copper
        } else if (pub.castle.resources.silver < pub.castle.limit.silver) {
          jQuery('.menu-list-element.menu-list-element-basic.clickable.widget--trade-rates:has(.icon-resource-6)').click(); //trade for silver
        } else if (pub.castle.resources.copper < pub.castle.limit.copper) {
          jQuery('.menu-list-element.menu-list-element-basic.clickable.widget--trade-rates:has(.icon-resource-5)').click(); //trade for copper
        } else if(pub.castle.resources.copper > pub.castle.limit.copper || pub.castle.resources.silver > pub.castle.limit.silver) {
          _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log(' *** Max Limit Reached *** ');
          return _troopsFunctions();
        } else {
          _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log(' *** limited resources *** ', retry);
          return _troopsFunctions();
        }
        // this will try 10 times and then fail... up to 20 seconds.
        _timeoutLoop(1000, 2000, _tradeResourceReady, _tradeResourceClick.bind(this), 10, _troopsFunctions, (retry - 1), _tradeClick);
      } else {
        return _troopsFunctions();
      }
    } else {
      _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('trade disabled');
      return _troopsFunctions();
    }
  };
  var _tradeResourceReady = function () {
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_tradeResourceReady');
    return jQuery('.menu--title-bar-main--title:contains(Exchange resources)').length > 0;
  };
  var _tradeResourceClick = function () {
    $castleElem = jQuery('.win.habitat.frame-container:visible');
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_tradeResourceClick');
    var carts = Math.ceil(pub.castle.resources.tradable / 2500);
    var oxen = jQuery('.button-title-text[data-reactid*="transportation-unit-range-slider-10002"][data-reactid*="widget-range-slider-decrease-button"]').text() * 1;
    var exchange = {};
    exchange.wood_all  = pub.castle.resources.wood - pub.castle.minimum.resources.keep;
    exchange.stone_all = pub.castle.resources.stone - pub.castle.minimum.resources.keep;
    exchange.ore_all   = pub.castle.resources.ore - pub.castle.minimum.resources.keep;
    if (oxen === 0) {
      _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('NO OXEN CARTS');
      return _troopsFunctions();
    } else if (oxen < carts) {
      // less carts than resources to trade, so reduce the resources until fit in carts.
      carts = oxen;// set carts to max avail instead of total / 2500
      var newTotal = carts * 2500; // then set new total to that * 2500 (max qty)
      var diff = pub.castle.resources.tradable - newTotal;
      // reduce resources so they fit into the available carts.
      // remove 1/3 from each.
      exchange.wood_all = exchange.wood_all - Math.ceil(diff / 3);
      exchange.stone_all = exchange.stone_all - Math.ceil(diff / 3);
      exchange.ore_all = exchange.ore_all - Math.ceil(diff / 3);
    }

    exchange.wood  = Math.floor(exchange.wood_all/50);
    exchange.stone = Math.floor(exchange.stone_all/50);
    exchange.ore   = Math.floor(exchange.ore_all/50);

    jQuery('.button.button--default.button-increase--specialized--icon-uniticon-unit-10002')._clickButtonXtimes(carts);
    jQuery('.button.button--default.button-increase--specialized--iconicon-resourceicon-resource-1')._clickButtonXtimes(exchange.wood);
    jQuery('.button.button--default.button-increase--specialized--iconicon-resourceicon-resource-2')._clickButtonXtimes(exchange.stone);
    jQuery('.button.button--default.button-increase--specialized--iconicon-resourceicon-resource-3')._clickButtonXtimes(exchange.ore);
    //console.log('STOP exchange',exchange); return false;
    jQuery('.menu-list-element.menu-list-button-basic.clickable.with-icon-left:contains(Barter Silver)').click();
    _timeoutLoop(500, 1000, _noOverlay, _troopsFunctions);
  };

  pub.troopCountsNOW = {};

  var cloneObj = function(obj) {
    if (null === obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = cloneObj(obj[attr]);
    }
    return copy;
  };

  var _troopsFunctions = function () {
    //return _closeCastle();

    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_troopsFunctions troops', pub.troops);
    if (pub.troops) {
      _troopsRecruitClick();
    } else {
      return _closeCastle();
    }
  };

  var _troopsRecruitClick = function () {
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_troopsRecruitClick troops', pub.troops);

    jQuery('.menu-section .clickable:has(.icon-building-arsenal), .menu-section .clickable:has(.icon-building-barracks), .menu-section .clickable:has(.icon-building-militaryacademy) ').click();
    jQuery('.menu--title-bar-main .button:contains(Arsenal),.menu--title-bar-main .button:contains(Barracks)').click();

    _timeoutLoop(3000, 5000, _troopsRecruitReady, _troopsRecruitAction, 10, _closeCastle);
  };
  var _troopsRecruitReady = function () {
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitReady');
    return jQuery('.menu-list-element.menu-list-title-basic:contains(Unit recruitment)').length > 0;
  };

  var _troopsRecruitAction = function () {
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction');
    // based on the counts, set all the troop inputs and click them all.
    var pendingUnits = (jQuery('#menu-section-drill-container .menu-list-element[data-reactid*="unit-is-in-progress"]').length * 1);

    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('pendingUnits',pendingUnits);
    if( (pendingUnits>2 && pub.castle.Points < 1000) || (pendingUnits>1 && pub.castle.Points > 1000) ){
      // queue is full.
      return _closeCastle();
    }
    var availablePopulation = pub.castle.resources.units;
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('availablePopulation',availablePopulation);
    var maxUnits = 200;// max 200 per unit recruited...
    var recruitTotal = 300;// leave at least 300 free.
    var pendingTotal = 0;// leave at least 100 free.
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction troopCountsNOW', pub.troopCountsNOW);
    // subtract the pending
    jQuery('#menu-section-drill-container .menu-list-element[data-reactid*="unit-is-in-progress"]').each(function(){
      var jq = jQuery(this);
      var units = jq.find('.menu-list-element-basic--description').text().replace(/[0-9][0-9]:[0-9][0-9]:[0-9][0-9] - /i,'').replace(/ in [0-9][0-9]:[0-9][0-9]:[0-9][0-9]/i,'') * 1;
      var pKey = jq.find('.icon.icon-left.icon-unit').attr('class').match(/icon-unit-(.*)/g)[0].replace(/icon-unit-/g,'') * 1;
      // remove the pending units from the NOW counts
      pub.troopCountsNOW[pKey] = cloneObj(pub.troopCountsNOW[pKey]) - cloneObj(units);
      //!!!!! changed to no duplicates, so removing if have pending !!!!
      pub.troopCountsNOW[pKey] = 0;
      pendingTotal = pendingTotal + units;
    });
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction troopCountsNOW after pending', pub.troopCountsNOW);

    // subtract the existing
    jQuery('#menu-section-drill-container .menu-list-element[data-reactid*="units-in-list"]').each(function(){
      var jq = jQuery(this);
      var existing = jq.find('.menu-list-element-basic--title.text-name-with-emo-icons').text().match(/[0-9]*/) * 1;
      var pKey = jq.find('.icon.icon-left.icon-unit').attr('class').match(/icon-unit-(.*)/g)[0].replace(/icon-unit-/g,'') * 1;
      pub.troopCountsNOW[pKey] = cloneObj(pub.troopCountsNOW[pKey]) - cloneObj(existing);
    });
    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction troopCountsNOW after existing', pub.troopCountsNOW);
    // add units to each of these, if we can.
    for (var pKey in pub.troopCountsNOW) {
      if (pub.troopCountsNOW.hasOwnProperty(pKey) && pub.troopCountsNOW[pKey]>0 ) {
        console.log("RECRUITMENT",pKey,pub.troopCountsNOW[pKey]);
        var max = jQuery('#menu-section-drill-container .menu-list-element[data-reactid$="units-in-list-'+pKey+'"] .menu-list-element-basic--description.small-font').text().replace(/ possible/i,'') * 1;
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction '+pub.troopNames[pKey]+' max ' + max );

        var unit_button = jQuery('#menu-section-drill-container .menu-list-element[data-reactid$="units-in-list-'+pKey+'"] .button:not(.disabled) .icon-Recruit');

        if(unit_button.length > 0){

          if(availablePopulation > recruitTotal){
            unit_button.click();

            var wanted = pub.troopCountsNOW[pKey] * 1;
            _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction '+pub.troopNames[pKey]+' wanted ' + wanted );

            var units = (wanted > max) ? max : wanted;// how many are needed to run missions.
            _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction '+pub.troopNames[pKey]+' units ' + units );

            var multiplier = (pKey > 200)?2:1;
            _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction '+pub.troopNames[pKey]+' multiplier ' + multiplier );

            var unitPopulation = units * multiplier;
            _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction '+pub.troopNames[pKey]+' unitPopulation ' + unitPopulation );

            if(unitPopulation > maxUnits) {
              unitPopulation = maxUnits;
            }

            if((recruitTotal + unitPopulation) >= availablePopulation){
              // set to where the units will not exceed the availablePopulation;
              units = Math.floor( ( availablePopulation - recruitTotal ) / multiplier );
              recruitTotal = availablePopulation;// maxed out.
            } else if (units > 0) {
              recruitTotal = recruitTotal + unitPopulation;
            }
            /*
             _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction pKey - max', pKey, max);
             _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction pKey - countNow', pKey, pub.troopCountsNOW[pKey]);
             _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction pKey - units', pKey, units);
             _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction pKey - unitPopulation', pKey, unitPopulation);
             _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction pKey - recruitTotal', pKey, recruitTotal);
             _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction pKey - availablePopulation', pKey, availablePopulation);
             */
            _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction '+pub.troopNames[pKey]+' - units ' + units + ', wanted ' + wanted + ', max ' + max);

            if( units > 0 && units <= max ){
              _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_troopsRecruitAction '+pub.troopNames[pKey]+' - unitPopulation ' + unitPopulation + ' / total ' + recruitTotal);
              _clickUnits(units);
            }
            // exit this unit.
            jQuery('.menu--title-bar-main .button:contains(Arsenal),.menu--title-bar-main .button:contains(Barracks)').click();
          } else {
            _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('FULL :: availablePopulation (' + availablePopulation + ') < recruitTotal (' + recruitTotal + ')');
          }
        } else {
          _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('DISABLED :: pKey (' + pKey + ')');
        }
      } else {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log("NO NEED",pKey,pub.troopCountsNOW[pKey]);
      }
    }

    _timeoutLoop(7000, 10000, _noOverlay, _closeCastle);
  };

  var _clickUnits = function(total){

    if(jQuery('.component--input.widget-range-slider--current-value-input')){
      while( (jQuery('.component--input.widget-range-slider--current-value-input').val()*1) < total ){
        jQuery('.button.button--default.range-slider-increase-value--button').click();
      }
    }
    if((jQuery('.component--input.widget-range-slider--current-value-input').val()*1) > 0){
      jQuery('.button.button--default.button-with-icon.menu-element--button--action.range-slider-accept-value--button').click();
      _closeDialogs();
      _buildingRemoveOverlay();
    }
  }

  var _closeCastle = function () {
    if (pub.clear) {
      console.clear();
    }

    _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_closeCastle');
    jQuery('.habitat-chooser--arrow.controls.arrow-right').click();
    pub.isRunning = false;
    return true;
  };
  var _randomIntFromInterval = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  var _addUsersToMessage = function(indx){
    var group = groups[indx];
    jQuery('#discussionWrapper > div.content-frame.discussionMemberList.clickable > div.frame-content.with-icon > div.title').click();
    jQuery('#id310051209316588900').click();
    jQuery('#mailManageMembersList input:checkbox').filter(function(){
      console.log(jQuery(this).data("id"),jQuery.inArray(jQuery(this).data("id"),group));
      return jQuery.inArray(jQuery(this).data("id"),group) >= 0;
    }).click();
    //jQuery('#id198794876970350720').click();
  };
  // all the toggles live here...
  pub.toggleClear = function () {
    pub.clear = !pub.clear;
    jQuery('#auto_clear').removeClass(pub.clear ? 'Stopped' : 'Running').addClass(pub.clear ? 'Running' : 'Stopped');
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('pub.clear', pub.clear);
  };
  pub.toggleDebug = function () {
    // needs to be a dropdown selection
    pub.debug = !pub.debug;
    jQuery('#auto_debug').removeClass(pub.debug ? 'Stopped' : 'Running').addClass(pub.debug ? 'Running' : 'Stopped');
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('pub.debug', pub.debug);
  };
  pub.toggleAuto = function () {
    pub.runLnKNow = !pub.runLnKNow;
    jQuery('#auto_runLnKNow').removeClass(pub.runLnKNow ? 'Stopped' : 'Running').addClass(pub.runLnKNow ? 'Running' : 'Stopped');
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('pub.runLnKNow', pub.runLnKNow);
  };
  pub.toggleMissions = function () {
    pub.missions = !pub.missions;
    jQuery('#auto_missions').removeClass(pub.missions ? 'Stopped' : 'Running').addClass(pub.missions ? 'Running' : 'Stopped');
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('pub.missions', pub.missions);
  };
  pub.toggleAttackMissions = function () {
    pub.attack_missions = !pub.attack_missions;
    jQuery('#auto_attack_missions').removeClass(pub.attack_missions ? 'Stopped' : 'Running').addClass(pub.attack_missions ? 'Running' : 'Stopped');
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('pub.attack_missions', pub.attack_missions);
  };
  pub.toggleTroops = function () {
    pub.troops = !pub.troops;
    jQuery('#auto_recruit_troops').removeClass(pub.troops ? 'Stopped' : 'Running').addClass(pub.troops ? 'Running' : 'Stopped');
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('pub.troops', pub.troops);
  };
  pub.toggleBuildings = function () {
    pub.buildings = !pub.buildings;
    jQuery('#auto_buildings').removeClass(pub.buildings ? 'Stopped' : 'Running').addClass(pub.buildings ? 'Running' : 'Stopped');
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('pub.buildings', pub.buildings);
  };
  pub.toggleSilver = function () {
    pub.silver = !pub.silver;
    jQuery('#auto_silver').removeClass(pub.silver ? 'Stopped' : 'Running').addClass(pub.silver ? 'Running' : 'Stopped');
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('pub.silver', pub.silver);
  };
  pub.toggleAllTrade = function () {
    pub.allTrade = !pub.allTrade;
    jQuery('#auto_all_trade').removeClass(pub.allTrade ? 'Stopped' : 'Running').addClass(pub.allTrade ? 'Running' : 'Stopped');
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('pub.allTrade', pub.allTrade);
  };
  pub.togglePreferCopper = function () {
    pub.preferCopper = !pub.preferCopper;
    jQuery('#auto_preferCopper').removeClass(pub.preferCopper ? 'Stopped' : 'Running').addClass(pub.preferCopper ? 'Running' : 'Stopped');
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('pub.preferCopper', pub.preferCopper);
  };
  pub.togglePopTrade = function () {
    pub.minimumPopulation2Trade = !pub.minimumPopulation2Trade;
    jQuery('#auto_popTrade').removeClass(pub.minimumPopulation2Trade ? 'Stopped' : 'Running').addClass(pub.minimumPopulation2Trade ? 'Running' : 'Stopped');
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('pub.minimumPopulation2Trade', pub.minimumPopulation2Trade);
  };
  pub.toggleResearch = function () {
    pub.research = !pub.research;
    jQuery('#auto_research').removeClass(pub.research ? 'Stopped' : 'Running').addClass(pub.research ? 'Running' : 'Stopped');
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : (console.log('pub.research', pub.research ));
  };
  pub.toggleLNKpanel = function () {
    pub.research = !pub.research;
    jQuery('#jsLnK').toggle();
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : (console.log('pub.toggleLNKpanel'));
  };
  pub.ResetRunning = function () {
    clearTimeouts();
    pub.isRunning = false;
    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : (console.log('pub.ResetRunning'));
  };
  pub.isRunning = false;
  pub.runLnK = function (force) {
    if (pub.runLnKNow || force) {
      if(!pub.isRunning){
        // open the troops view
        pub.isRunning=true;
        jQuery('.icon-Troops').click();
        _timeoutLoop(1000, 2000, _unitsReady, _unitsFunctions);// wait 1-2 seconds and run castle
      }
    }
    clearTimeout(timerObj);
    timerObj = setTimeout(pub.runLnK, 2000);// wait 2 seconds and try again..
  };
  pub.init = function () {
    waitForKeyElements(".menu-box", function () {
      console.log('.menu-box');
      jQuery('body').append('<div id="incrementalNumber" class="incrementalCounter">' +
                      '   <a onclick="ALNK.toggleLNKpanel()">auto panel</a>' +
              '</div>');
      //jQuery('.topbar[style],.topbar *[style]').removeAttr('style');
      jQuery('body').append('<div id="jsLnK">' +

              '   <a onclick="ALNK.runLnK(true)">RUN/FORCE</a>' +
              '   <a onclick="ALNK.toggleAuto ()">AUTOMATE<span id="auto_runLnKNow" class="' + (pub.runLnKNow ? 'Running' : 'Stopped') + '"></span></a>' +
              '   <a title="TRADE SILVER" onclick="ALNK.toggleSilver ()"><div class="icon icon-left icon-resource icon-resource-6"></div><span id="auto_silver" class="' + (pub.silver ? 'Running' : 'Stopped') + '"></span></a>' +
              '   <a title="TRADE ANY LEVEL" onclick="ALNK.toggleAllTrade ()"><div class="icon icon-in-button icon-game icon-BarCastle"></div><span id="auto_all_trade" class="' + (pub.allTrade ? 'Running' : 'Stopped') + '"></span></a>' +
              '   <a title="PREFER COPPER" onclick="ALNK.togglePreferCopper ()"><div class="icon resource-progress-bar--icon icon-resource icon-resource-5"></div><span id="auto_preferCopper" class="' + (pub.preferCopper ? 'Running' : 'Stopped') + '"></span></a>' +
              '   <a title="MINIMUM POPULATION 2 TRADE ( < 250 )" onclick="ALNK.togglePopTrade ()"><div class="icon resource-progress-bar--icon icon-resource icon-resource-4"></div><span id="auto_popTrade" class="' + (pub.minimumPopulation2Trade ? 'Running' : 'Stopped') + '"></span></a>' +
              '   <a title="RUN RESEARCH" onclick="ALNK.toggleResearch ()"><div class="icon icon-in-button icon-game icon-Research"></div><span id="auto_research" class="' + (pub.research ? 'Running' : 'Stopped') + '"></span></a>' +
              '   <a title="RUN BUILDINGS" onclick="ALNK.toggleBuildings ()"><div class="icon icon-in-button icon-game icon-Build"></div><span id="auto_buildings" class="' + (pub.buildings ? 'Running' : 'Stopped') + '"></span></a>' +
              '   <a title="RUN MISSIONS" onclick="ALNK.toggleMissions ()"><div class="icon icon-in-button icon-game icon-Mission"></div><span id="auto_missions" class="' + (pub.missions ? 'Running' : 'Stopped') + '"></span></a>' +
              '   <a title="RUN WHILE ATTACK" onclick="ALNK.toggleAttackMissions ()"><div class="icon icon-game icon-HabitatUnderAttack"></div><span id="auto_attack_missions" class="' + (pub.attack_missions ? 'Running' : 'Stopped') + '"></span></a>' +
              '   <a title="RECRUIT TROOPS" onclick="ALNK.toggleTroops ()"><div class="icon icon-in-button icon-game icon-Recruit"></div><span id="auto_recruit_troops" class="' + (pub.troops ? 'Running' : 'Stopped') + '"></span></a>' +
              '   <a title="CLEAR" onclick="ALNK.toggleClear ()"><div>CLEAR</div><span id="auto_clear" class="' + (pub.clear ? 'Running' : 'Stopped') + '"></span></a>' +
              '   <a title="Reset Running" onclick="ALNK.ResetRunning ()"><div>Reset</div></a>' +
              //'   <div><a onclick="ALNK.toggleDebug()">Log::Debug</a><span id="auto_debug" class="' + (pub.debug ? 'Running' : 'Stopped') + '"></span></div>' +
              '</div>').find('#jsLnK').css('z-index: 888888888; top: 0; position: absolute; bottom: auto;');
    });
  };
  return pub; // returns the Object with public methods
}).call(unsafeWindow);

unsafeWindow.ALNK.init();

jQuery.fn.extend({
  _clickButtonXtimes: function(times){
    for(var i = 0; i < times; i++) {
      this.click();
    }
  }
});

jQuery.fn.reverse = [].reverse;

function functionName( func )
{
  // Match:
  // - ^          the beginning of the string
  // - function   the word 'function'
  // - \s+        at least some white space
  // - ([\w\$]+)  capture one or more valid JavaScript identifier characters
  // - \s*        optionally followed by white space (in theory there won't be any here,
  //              so if performance is an issue this can be omitted[1]
  // - \(         followed by an opening brace
  //
  var result = /^function\s+([\w\$]+)\s*\(/.exec( func.toString() );

  return  result  ?  result[ 1 ]  :  ''; // for an anonymous function there won't be a match
}

var currentTimeoutID = false;
function clearTimeouts(){
  while (currentTimeoutID--) {
    window.clearTimeout(currentTimeoutID); // will do nothing if no timeout with id is present
  }
}
















/*
 var _missionIntervals = function(){
 _massMissionIteration();
 console.log('_missionIntervals',_massMissionIteration);
 missionTimer = setInterval(_massMissionIteration,(60000 * 5));
 };
 var _massMissionIteration = function(){
 var $missionsElem = jQuery('.topbarImageContainer:nth-of-type(7)');
 // mass missions...
 if (pub.runLnKNow && runningMassMissions !== true && pub.missions && $missionsElem.length > 0) {
 _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_massMission');
 $missionsElem.trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
 _timeoutLoop(3000, 5000, _massMissionReady, _massMissionClick);
 }
 }
 var _massMissionReady = function () {
 _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_massMissionReady');
 return jQuery('.globalMissions').length > 0;
 };
 var _massMissionClick = function () {
 _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_massMissionClick');
 var $gMissions = jQuery('.globalMissions');
 // try select all
 $gMissions.find('.selectAllButton').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
 // execute them!
 $gMissions.find('.execute').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
 // now check fortress
 var $fortMissions = $gMissions.find('.tab.tab-castle-fortess.clicable[data-action="fortress"]');
 if ($fortMissions.length) {
 $fortMissions.click();
 _timeoutLoop(3000, 5000, _massFortMissionReady, _massFortMissionClick);
 } else {
 $gMissions.find('.close').click();
 }
 };
 var _massFortMissionReady = function () {
 _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_massFortMissionReady');
 return jQuery('.globalMissions').find('.tab.tab-castle-fortess.active[data-action="fortress"]').length > 0;
 };
 var _massFortMissionClick = function () {
 var $gMissions = jQuery('.globalMissions');

 _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_massFortMissionClick');
 // try select all
 $gMissions.find('.selectAllButton').click();
 // execute them!
 $gMissions.find('.execute').click();
 // close
 $gMissions.find('.close').click();
 _tradeFunctions();
 };
 */
