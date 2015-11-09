// ==UserScript==
// @name         landk
// @namespace    https://raw.githubusercontent.com/Artistan/landk/master/single.js
// @version      0.2
// @description  make it work.
// @author       CPeterson
// @match        http://browser.lordsandknights.com/v2/game/index.php
// @resource    customCSS https://raw.githubusercontent.com/Artistan/landk/master/landk2.css?4l122=1122
// @require     https://gist.githubusercontent.com/Artistan/385fb5676c5408227410/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @grant       all
// @grant       unsafeWindow
// @grant       GM_getResourceText
// @grant       GM_addStyle
// ==/UserScript==


var newCSS = GM_getResourceText ("customCSS");
GM_addStyle(newCSS);
if(typeof unsafeWindow == 'undefined'){
    var unsafeWindow = window;
}
// ===================================== auto lnk =====================================
unsafeWindow.ALNK = (function () {
    var pub = {};// public methods here

    var tAr=[]; // test array
    var $castleElem = false;
    var castlePoints=0;
    var castleFortress = false;
    var currentList=0;
    var fullyUpgraded = [289,290,1797];
    var isFullyUpgraded = false;
    var timer = false;

    pub.runLnKNow=true;
    pub.missions=false;
    pub.buildings=true;
    pub.silver=true;
    pub.preferCopper=true;
    pub.research=true;
    pub.clear=true;
    pub.debug=true;

    // if not set / false, then flip it.
    var _trueFalseFunc = function(key){
        if(tAr[key] == true){
            pub.debug==false?_doNothing():console.log('trueFalseFunc',true);
            tAr[key] = false;
        } else {
            pub.debug==false?_doNothing():console.log('trueFalseFunc',false);
            tAr[key] = true;
        }
        // return the opposite
        return !tAr[key];
    };
    var _closeDialogs = function(){
        jQuery('.button:contains("Cancel")').click();
        jQuery('.button:contains("Ok")').click();
    };
    var _noOverlay = function(){
        return jQuery('.overlay').length<1;
    };
    var _doNothing = function(){
        return true;
    };
    // when truthyFunction then call callBackFunc ,, failInt causes max time out.
    var _timeoutLoop = function(waitTimeIntMin,waitTimeIntMax,truthyFunction,callBackFunc,failInt) {
        //pub.debug==false?_doNothing():console.log('_timeoutLoop',waitTimeIntMin,waitTimeIntMax,truthyFunction,callBackFunc,failInt);
        //pub.debug==false?_doNothing():console.log('truthyFunction',truthyFunction,truthyFunction());
        var waitTimeInt = _randomIntFromInterval(waitTimeIntMin,waitTimeIntMax);
        if(typeof failInt == 'undefined'){
            failInt = 100;
        } else if (failInt == 0) {
            return false;
        } else {
            failInt--;
        }
        if(truthyFunction() && failInt<100){
            if (typeof callBackFunc=="function"){
                pub.debug==false?_doNothing():console.log('timeout callBackFunc')
                callBackFunc();
            }
        } else {
            pub.debug==false?_doNothing():console.log('timeout time');
            setTimeout(function () {
                _timeoutLoop(waitTimeIntMin,waitTimeIntMax,truthyFunction,callBackFunc,failInt);
            }, waitTimeInt);
        }
    };
    /// castle Functions
    var _castleFunctions = function(){
        pub.debug==false?_doNothing():console.log('_castleFunctions');
        $castleElem = jQuery('.win.habitat.frame-container:visible');
        castleFortress = $castleElem.find('.townhall').length>0;
        castleTitle = $castleElem.find('.headline .title').html();
        pub.debug==false?_doNothing():console.log('== '+castleTitle+' ['+castlePoints+'] ==');
        _researchFunctions();
    };
    var _researchFunctions = function(){
        if( pub.research && !isFullyUpgraded ){
            $castleElem.find('.building-area.library, .building-area.university').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
            _timeoutLoop(3000, 5000,_researchReady,_researchClick);
        } else {
            _buildingFunctions();
        }
    };
    var _researchReady = function(){
        pub.debug==false?_doNothing():console.log('_researchReady');
        return $castleElem.find('.knowledgeListItem').length>0;
    };
    var _researchClick = function(){
        pub.debug==false?_doNothing():console.log('_researchClick');
        var $kItems = [];
        var maxResearch = (castlePoints<290)?2:1;
        $castleElem = jQuery('.win.habitat.frame-container:visible');
        $kItems = $castleElem.find('.knowledgeListItem:not(:has(.counter)) .button:not(.disabled)');
        // check if we can do more research...
        if($kItems.length>0 && $castleElem.find('.knowledgeListItem:has(.counter)').length<maxResearch){
            $kItems.slice(0,1).trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
            _timeoutLoop(3000, 5000,_noOverlay,_researchClick);
        } else {
            _buildingFunctions();
        }
    };
    var _buildingFunctions = function(){
        if( pub.buildings && !isFullyUpgraded ){
            $castleElem.find('.buildingList.tab').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
            _timeoutLoop(3000, 5000,_buildingReady,_buildingClick);
        } else {
            _missionFunctions();
        }
    };
    var _buildingReady = function(){
        pub.debug==false?_doNothing():console.log('_buildingReady');
        return $castleElem.find('.fixedBuildingList .building').length>0;
    };
    var _buildingClick = function(){
        pub.debug==false?_doNothing():console.log('_buildingClick');
        var $kItems = [];
        $castleElem = jQuery('.win.habitat.frame-container:visible');
        $kItems = $castleElem.find('.fixedBuildingList .button:not(.disabled)');
        // check if we can do more research...
        if($kItems.length>0 && $castleElem.find('.buildingUpgrade .building').length<2){
            $kItems.slice(0,1).trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
            _timeoutLoop(3000, 5000,_noOverlay,_buildingClick);
        } else {
            _missionFunctions();
        }
    };
    var _missionFunctions = function(){
        if(pub.missions){;
            pub.debug==false?_doNothing():console.log('_missionFunctions');
            $castleElem.find('.building-area.tavern,.building-area.tavernarea').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
            _timeoutLoop( 3000, 5000, _missionReady , _missionClick );
        } else {
            _tradeFunctions();
        }
    };
    var _missionReady = function(){
        pub.debug==false?_doNothing():console.log('_missionReady');
        return $castleElem.find('.missionListItem').length>0;
    };
    var _missionClick = function(){
        var $kItems = [];
        $castleElem = jQuery('.win.habitat.frame-container:visible');
        $kItems = $castleElem.find('.missionListItem:not(:has(.counter)) .button:not(.speedup):not(.disabled)');
        pub.debug==false?_doNothing():console.log('_missionClick',$castleElem,$kItems);
        // check if we can do more research...
        if($kItems.length>0){
            $kItems.slice(0,1).trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
            _timeoutLoop(3000, 5000,_noOverlay,function(){ _missionClick();} );
        } else {
            _tradeFunctions();
        }
    };
    var _tradeFunctions = function(){
        pub.debug==false?_doNothing():console.log('_tradeFunctions',castlePoints, isFullyUpgraded );
        // only run these every incrementalCount, or if manualMisssions
        if(pub.silver && isFullyUpgraded ){
            $castleElem.find('.keep,.townhall').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
            _timeoutLoop( 3000, 5000, _tradeReady , _tradeClick );
        } else {
            return _closeCastle();
        }
    };
    var _tradeReady = function(){
        pub.debug==false?_doNothing():console.log('_tradeReady');
        return $castleElem.find('.marketListItem').length>0;
    };
    var _tradeClick = function(){
        // if silver automation and once every incremental counter rounds, and no knowledge to learn.
        if(pub.silver){
            pub.debug==false?_doNothing():console.log('_tradeClick');
            if(castleFortress){
                // set the fortress limits much higher.
                var silverLimit = 117000;
                var copperLimit = 117000;
                var resourceMinimum = 140000;
                var leaveBehind = 20000; // each
            } else {
                // check limits
                var silverLimit = 19800;
                var copperLimit = 19800;
                var resourceMinimum = 14000;
                var leaveBehind = 1000; // each
            }
            // check resources

            var wood = $castleElem.find('.resourceHeaderTable .resourceElement[data-primary-key="1"] .resourceAmount').html() * 1 - leaveBehind;
            var stone = $castleElem.find('.resourceHeaderTable .resourceElement[data-primary-key="2"] .resourceAmount').html() * 1 - leaveBehind;
            var ore = $castleElem.find('.resourceHeaderTable .resourceElement[data-primary-key="3"] .resourceAmount').html() * 1 - leaveBehind;
            // check total silver and copper
            var silver = $castleElem.find('.resourceHeaderTable .resourceElement[data-primary-key="6"] .resourceAmount').html() * 1;
            var copper = $castleElem.find('.resourceHeaderTable .resourceElement[data-primary-key="5"] .resourceAmount').html() * 1;
            var total = wood + stone + ore;
            pub.debug==false?_doNothing():console.log('total '+total+' VS min '+resourceMinimum);
            if(total > resourceMinimum){
                pub.debug==false?_doNothing():console.log('total '+total+' VS min '+resourceMinimum);
                if(pub.preferCopper){
                    $castleElem.find('.tradableItems .marketListItem:first .button').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click'); //trade for copper
                } else if(silver<silverLimit){
                    $castleElem.find('.tradableItems .marketListItem:last .button').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click'); //trade for silver
                } else if(copper<copperLimit) {
                    $castleElem.find('.tradableItems .marketListItem:first .button').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click'); //trade for copper
                } else {
                    pub.debug==false?_doNothing():console.log('limited resources');
                    return _closeCastle();
                }
                _timeoutLoop( 3000, 5000, _tradeResourceReady , _tradeResourceClick.bind(this,total,wood,ore,stone) );
            } else {
                return _closeCastle();
            }
        } else {
            pub.debug==false?_doNothing():console.log('trade disabled');
            return _closeCastle();
        }
    };
    var _tradeResourceReady = function(){
        pub.debug==false?_doNothing():console.log('_tradeResourceReady');
        return $castleElem.find('.resourceContainer .resourceElement').length>0;
    };
    var _tradeResourceClick = function(total,wood,ore,stone){
        $castleElem = jQuery('.win.habitat.frame-container:visible');
        pub.debug==false?_doNothing():console.log('_tradeResourceClick');
        var carts = Math.ceil(total/2500);
        var $oxCart = $castleElem.find('.unitElement[data-primary-key="10002"] input');
        if( $oxCart.attr('placeholder')==0 ){
            pub.debug==false?_doNothing():console.log('NO OXEN CARTS');
            return _closeCastle();
        } else if($oxCart.attr('placeholder') * 1 < carts){
            // less carts than resources to trade, so reduce the resources until fit in carts.
            carts = $oxCart.attr('placeholder') * 1;// set carts to max avail instead of total / 2500
            total = carts+2500; // then set new total to that * 2500
            while(wood + stone + ore > total){
                // reduce resources until they fit into the available carts.
                wood -= 5;
                stone -= 5;
                ore -= 5;
            }
        }
        $oxCart.focus().click().val(carts).trigger("change").trigger("blur");
        $castleElem.find('.resourceContainer .resourceElement[data-primary-key="1"] input')
            .val(wood).trigger("change").trigger("blur");
        $castleElem.find('.resourceContainer .resourceElement[data-primary-key="2"] input')
            .val(stone).trigger("change").trigger("blur");
        $castleElem.find('.resourceContainer .resourceElement[data-primary-key="3"] input')
            .val(ore).trigger("change").trigger("blur");
        $castleElem.find('.typeContainer .button').click();
        _timeoutLoop( 3000, 5000, _tradeSendReady , _tradeSendClick );
    }
    var _tradeSendReady = function(){
        pub.debug==false?_doNothing():console.log('_tradeSendReady');
        return $castleElem.find('.resourceContainer .resourceElement').length==0;
    };
    var _tradeSendClick = function(){
        pub.debug==false?_doNothing():console.log('exchanged (_tradeSendClick)');
        return _closeCastle();
    };
    var _closeCastle = function(){
        pub.debug==false?_doNothing():console.log('_closeCastle');
        jQuery('.win.habitat.frame-container:visible').find('.close').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
        return true;
    }
    var _randomIntFromInterval = function(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    // all the toggles live here...
    pub.toggleClear  = function(){
        pub.clear = !pub.clear;
        jQuery('#auto_clear').removeClass(pub.clear?'Stopped':'Running').addClass(pub.clear?'Running':'Stopped');
        pub.debug==false?_doNothing():console.log('pub.clear',pub.clear);
    };
    pub.toggleDebug  = function(){
        pub.debug = !pub.debug;
        jQuery('#auto_debug').removeClass(pub.debug?'Stopped':'Running').addClass(pub.debug?'Running':'Stopped');
        pub.debug==false?_doNothing():console.log('pub.debug',pub.debug);
    };
    pub.toggleAuto = function(){
        pub.runLnKNow = !pub.runLnKNow;
        jQuery('#auto_runLnKNow').removeClass(pub.runLnKNow?'Stopped':'Running').addClass(pub.runLnKNow?'Running':'Stopped');
        pub.debug==false?_doNothing():console.log('pub.runLnKNow',pub.runLnKNow);
    };
    pub.toggleMissions = function(){
        pub.missions = !pub.missions;
        jQuery('#auto_missions').removeClass(pub.missions?'Stopped':'Running').addClass(pub.missions?'Running':'Stopped');
        pub.debug==false?_doNothing():console.log('pub.missions',pub.missions);
    };
    pub.toggleMiniMap = function(){
        jQuery('.miniMapContainer').toggle();
    };
    pub.toggleBuildings = function(){
        pub.buildings = !pub.buildings;
        jQuery('#auto_buildings').removeClass(pub.buildings?'Stopped':'Running').addClass(pub.buildings?'Running':'Stopped');
        pub.debug==false?_doNothing():console.log('pub.buildings',pub.buildings);
    };
    pub.toggleSilver  = function(){
        pub.silver = !pub.silver;
        jQuery('#auto_silver').removeClass(pub.silver?'Stopped':'Running').addClass(pub.silver?'Running':'Stopped');
        pub.debug==false?_doNothing():console.log('pub.silver',pub.silver);
    };
    pub.togglePreferCopper  = function(){
        pub.preferCopper = !pub.preferCopper;
        jQuery('#auto_preferCopper').removeClass(pub.preferCopper?'Stopped':'Running').addClass(pub.preferCopper?'Running':'Stopped');
        pub.debug==false?_doNothing():console.log('pub.preferCopper',pub.preferCopper);
    };
    pub.toggleResearch  = function(){
        pub.research = !pub.research;
        jQuery('#auto_research').removeClass(pub.research?'Stopped':'Running').addClass(pub.research?'Running':'Stopped');
        pub.debug==false?_doNothing():console.log('pub.research',pub.research);
    };
    pub.clearHidden  = function(){
        jQuery('.win.habitat.frame-container').find('.close').click();
    };
    pub.runLnK = function(force) {
        if(pub.runLnKNow || force){
            if(jQuery('.win.habitat.frame-container').length==0){// closed, so open a new window.
                if(pub.clear){
                    console.clear();
                }
                _closeDialogs();
                pub.debug==false?_doNothing():console.log('********* opening new castle *********');
                jQuery('.incrementalCounter').html(currentList);
                var castleListItem = jQuery(jQuery('.castleHabitatOverview .castleListItem')[currentList]);
                if(castleListItem && castleListItem.length){
                    castlePoints = castleListItem.find('.points').html().replace(/ Points/i,'') * 1;
                    isFullyUpgraded = jQuery.inArray( castlePoints, fullyUpgraded ) > -1;
                    // only reason to open castles
                    // not fully upgraded OR
                    // running missions / silver exchange.
                    if(!isFullyUpgraded || (isFullyUpgraded && (pub.missions || pub.silver)) ){

                    }
                    castleListItem.trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');

                    currentList = currentList + 1;
                    if(jQuery('.castleHabitatOverview .castleListItem').length==currentList ){
                        currentList = 0;//reset back to 0 for next pass...
                    }
                    _timeoutLoop(3000,5000,function(){ return jQuery('.win.habitat.frame-container:visible').length>0; },_castleFunctions);// wait 2 seconds and run castle
                } else {
                    pub.debug==false?_doNothing():console.log('.....  No castle list to open .....');
                }
            } else {
                pub.debug==false?_doNothing():console.log('.....  waiting .....');
            }
        }
        clearTimeout(timer);
        timer = setTimeout(pub.runLnK, 10000);// wait 10 seconds and try again..
    };
    pub.init = function(){
        waitForKeyElements(".topbar", function(){
            console.log('.topbar found');
            jQuery('body').prepend('<div id="incrementalNumber" class="incrementalCounter"></div>');
            jQuery('.topbar[style],.topbar *[style]').removeAttr('style');
            jQuery('.topbar').find('.controls').append('<div id="jsLnK">' +
                '   <div><a onclick="ALNK.runLnK(true)">START/RESET</a></div>' +
                '   <div><a onclick="ALNK.toggleAuto()">Automation</a><span id="auto_runLnKNow" class="' + (pub.runLnKNow?'Running':'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.toggleSilver ()">Silver</a><span id="auto_silver" class="' + (pub.silver?'Running':'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.toggleSreferCopper ()">preferCopper</a><span id="auto_preferCopper" class="' + (pub.preferCopper?'Running':'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.toggleResearch ()">Research</a><span id="auto_research" class="' + (pub.research?'Running':'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.toggleBuildings()">Buildings</a><span id="auto_buildings" class="' + (pub.buildings?'Running':'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.toggleMissions()">Missions</a><span id="auto_missions" class="' + (pub.missions?'Running':'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.toggleDebug()">Debug</a><span id="auto_debug" class="' + (pub.debug?'Running':'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.toggleClear()">Clear</a><span id="auto_clear" class="' + (pub.clear?'Running':'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.clearHidden()">clearHidden</a></div>' +
                '   <div><a onclick="ALNK.toggleMiniMap()">Toggle MiniMap</a></div>' +
                '   <div><a onclick="jQuery(\'.win.habitat.frame-container\')">Close Hidden</a></div>' +
                '</div>').find('#jsLnK').css('z-index: 888888888; top: 0; position: absolute; bottom: auto;');
        });
        waitForKeyElements(".miniMapContainer", function(){
            console.log('.miniMapContainer created');
            jQuery('.miniMapContainer').hide();
        });
        waitForKeyElements(".bottombar", function(){
            console.log('.bottombar created');
            jQuery('.bottombar[style],.bottombar *[style]').removeAttr('style');
        });
    }
    return pub; // returns the Object with public methods
}).call(unsafeWindow);

unsafeWindow.ALNK.init();

