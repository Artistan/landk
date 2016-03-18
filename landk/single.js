// ==UserScript==
// @name         landk v3.6.1
// @namespace    https://raw.githubusercontent.com/Artistan/landk/master/single.js
// @version      3.6.1
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

var newCSS = GM_getResourceText("customCSS");
GM_addStyle(newCSS);
if (typeof unsafeWindow == 'undefined') {
    var unsafeWindow = window;
}

var _LNK_DEBUG_VERBOS = 5;
var _LNK_DEBUG_LIMITED = 3;
var _LNK_DEBUG_QUIET = 1;
var _LNK_DEBUG_SILENT = 0;

// ===================================== auto lnk =====================================
unsafeWindow.ALNK = (function () {
    var pub = {};// public methods here

    var tAr = []; // test array
    var $castleElem = false;
    var castlePoints = 0;
    var castleFortress = false;
    var currentList = 0;
    var fullyUpgraded = [289, 290, 1797];
    var isFullyUpgraded = false;
    var timerObj = {};
    var runningMassMissions = false;
    var missionTimer = false;
    var runningBuildings = false;
    var buildingTimer = false;

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
    pub.missions = false;
    pub.buildings = true;
    pub.silver = true;
    pub.allTrade = false;
    pub.preferCopper = true;
    pub.popTrade = true;
    pub.research = true;
    pub.clear = true;
    pub.debug = _LNK_DEBUG_VERBOS;

    var _debug = function (level) {
        return (pub.debug <= level);
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
    var _closeDialogs = function () {
        jQuery('.button:contains("Cancel")').click();
        jQuery('.button:contains("Ok")').click();
    };
    var _noOverlay = function () {
        return jQuery('.overlay').length < 1;
    };
    // when truthyFunction then call callBackFunc ,, failInt causes max time out.
    var _timeoutLoop = function (waitTimeIntMin, waitTimeIntMax, truthyFunction, callBackFunc, failInt, _failureCallback, resetInt, _resetCallback) {
        //_debug(_LNK_DEBUG_VERBOS)?_doNothing():console.log('_timeoutLoop',waitTimeIntMin,waitTimeIntMax,truthyFunction,callBackFunc,failInt);

        var waitTimeInt = _randomIntFromInterval(waitTimeIntMin, waitTimeIntMax);
        if (typeof failInt == 'undefined' || failInt > 100) {
            failInt = 99;// 100-1
        } else if (failInt == 0) {
            _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_timeoutLoop :: resetInt / _resetCallback / _failureCallback', resetInt, _resetCallback, _failureCallback);
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
                _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_timeoutLoop callBackFunc CALLED');
                setTimeout(function () {
                    callBackFunc();// wait a sec OK!
                }, 1000);
            } else {
                _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_timeoutLoop callBackFunc INVALID', callBackFunc);
            }
        } else {
            _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_timeoutLoop settimeout /  failInt', waitTimeInt, failInt);
            setTimeout(function () {
                return _timeoutLoop(waitTimeIntMin, waitTimeIntMax, truthyFunction, callBackFunc, failInt, _failureCallback, resetInt, _resetCallback);
            }, waitTimeInt);
        }
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('timeout time');
        return true;
    };
    /// castle Functions
    var _castleReady = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_castleReady');
        return jQuery('.win.habitat.frame-container:visible').length > 0;
    };
    var _castleFunctions = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_castleFunctions');
        $castleElem = jQuery('.win.habitat.frame-container:visible');
        castleFortress = $castleElem.find('.townhall').length > 0;
        var castleTitle = $castleElem.find('.headline .title').html();
        _debug(_LNK_DEBUG_QUIET) ? _doNothing() : console.log('== ' + castleTitle + ' [' + castlePoints + '] ==');

        _researchFunctions();
    };
    var _buildingIntervals = function(){
        _buildingFunctions();
        console.log('_buildingIntervals',_buildingFunctions);
        buildingTimer = setInterval(_buildingFunctions,(60000 * 5) );
    };
    var _buildingFunctions = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_buildingFunctions');
        jQuery('.buildingList .close').click();
        var $buildButton = jQuery('.topbarImageContainer:nth-of-type(2)');
        console.log('_buildingFunctions',pub.runLnKNow, runningBuildings, pub.buildings, $buildButton.length);
        if (pub.runLnKNow && runningBuildings !== true && pub.buildings && $buildButton.length > 0) {
            // open buildings panel
            $buildButton.click();
            runningBuildings = true;
            _timeoutLoop(3000, 5000, _buildingReady, _buildingLinesReady);
        }
    };
    var _buildingReady = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_buildingReady');
        return jQuery('.buildingList').length > 0;
    };
    var totalBuildingLines = 0;
    var currentBuildingLine = 0;
    var $buildingLines = {};
    var _buildingLinesReady = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_buildingLinesReady');
        // try select all
        var blist = jQuery('.buildingList');
        $buildingLines = blist.find('.listContentRow').filter(function () {
            return jQuery('.upgrade', this).length < 2 && jQuery('.buildbutton:not(.disabled)', this).length;
        });
        totalBuildingLines = $buildingLines.length;
        _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('totalBuildingLines', totalBuildingLines);
        if (totalBuildingLines > 0) {
            currentBuildingLine = 0;
            _buildingLineClick();
        } else {
            // check if fortresses need updated
            var $fortressList = blist.find('.tab.tab-castle-fortess.clicable[data-action="fortress"]');
            if ($fortressList.length > 0) {
                $fortressList.click();
                _timeoutLoop(3000, 5000, _buildingReady, _buildingLinesReady);
            } else {
                _doneBuilding();
            }
        }
    };
    var _buildingLineClick = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : unsafeWindow.console.log('_buildingLineClick', currentBuildingLine);
        // click all of them at once. in reverse order.
        var lines = jQuery( jQuery('.buildbutton:not(.disabled)', $buildingLines[currentBuildingLine]).get().reverse() );
        _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : unsafeWindow.console.log('_buildingLineClick buildbuttons', lines.length);
        lines.click();
        currentBuildingLine = currentBuildingLine + 1;
        if (totalBuildingLines > currentBuildingLine) {
            //clicked so wait 31-40 seconds before moving on.
            _timeoutLoop(31000, 40000, function () {
                return _trueFalseFunc('buildingClick/next');
            }, _buildingLineClick);
        } else {
            // check if fortresses need updated
            var $fortressList = jQuery('.buildingList').find('.tab.tab-castle-fortess.clicable[data-action="fortress"]');
            if ($fortressList.length > 0) {
                $fortressList.click();
                _timeoutLoop(3000, 5000, _buildingReady, _buildingLinesReady);
            } else {
                //clicked so wait 31-40 seconds before moving on.
                _timeoutLoop(31000, 40000, function () {
                    return _trueFalseFunc('buildingClicked/done');
                }, _doneBuilding);
            }
        }
    };
    var _doneBuilding = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : unsafeWindow.console.log('_doneBuilding');
        jQuery('.buildingList .close').click();
        runningBuildings = false;
    };

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

    var _researchFunctions = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : unsafeWindow.console.log('_researchFunctions');
        if (pub.research && !isFullyUpgraded) {
            $castleElem.find('.building-area.library, .building-area.university').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
            _timeoutLoop(3000, 5000, _researchReady, _researchClick);
        } else {
            _missionFunctions();
        }
    };
    var _researchReady = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_researchReady');
        return $castleElem.find('.knowledgeListItem').length > 0;
    };
    var _researchClick = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_researchClick');
        var maxResearch = (castlePoints < 290) ? 2 : 1;
        $castleElem = jQuery('.win.habitat.frame-container:visible');
        var $kItems = $castleElem.find('.knowledgeListItem:not(:has(.counter)) .button:not(.disabled)');
        // check if we can do more research...
        if ($kItems.length > 0 && $castleElem.find('.knowledgeListItem:has(.counter)').length < maxResearch) {
            $kItems.slice(0, 1).trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
            _timeoutLoop(3000, 5000, _noOverlay, _researchClick, 10, _tradeFunctions);
        } else {
            _missionFunctions();
        }
    };
    var _missionFunctions = function () {
        var $missionsElem = jQuery('.topbarImageContainer:nth-of-type(7)');
        if (pub.missions && $missionsElem.length > 0) {
            if(!missionTimer){
                _missionIntervals();
            }
            // mass misstions, move on...
            _tradeFunctions();
        } else if (castlePoints < 289) {
            _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_missionFunctions');
            $castleElem.find('.building-area.tavern,.building-area.tavernarea').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
            //(waitTimeIntMin, waitTimeIntMax, truthyFunction, callBackFunc, failInt, _failureCallback, resetInt, _resetCallback)
            _timeoutLoop(3000, 5000, _missionReady, _missionClick, 10, _missionFunctions);
        } else {
            _tradeFunctions();
        }
    };
    var _missionReady = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_missionReady');
        return $castleElem.find('.missionListItem').length > 0;
    };
    var _missionClick = function () {
        $castleElem = jQuery('.win.habitat.frame-container:visible');
        var $kItems = $castleElem.find('.missionListItem:not(:has(.counter)) .button:not(.speedup):not(.disabled)');
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_missionClick', $castleElem, $kItems);
        // check if we can do more research...
        if ($kItems.length > 0) {
            $kItems.slice(-1).trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
            _timeoutLoop(3000, 5000, _noOverlay, function () {
                _missionClick();
            });
        } else {
            _tradeFunctions();
        }
    };
    var _tradeFunctions = function () {
        _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('_tradeFunctions points/upgraded/silver/allTrade', castlePoints, isFullyUpgraded, pub.silver, allTrade);
        // only run these every incrementalCount, or if manualMisssions
        if (pub.silver && (isFullyUpgraded || pub.allTrade)) {
            $castleElem.find('.keep,.townhall').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
            _timeoutLoop(5000, 8000, _tradeReady, _tradeClick.bind(this, 10));
        } else {
            return _closeCastle();
        }
    };
    var _tradeReady = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_tradeReady');
        return $castleElem.find('.marketListItem').length > 0;
    };
    var _tradeClick = function (retry) {
        // if silver automation and once every incremental counter rounds, and no knowledge to learn.
        if (pub.silver) {
            _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_tradeClick', retry);
            // check limits - default castle..
            var silverLimit = 19800;
            var copperLimit = 19800;
            var resourceMinimum = 19000;
            var singleResourceMinimum = 9500;
            var leaveBehind = 1000; // each
            if (castleFortress) {
                // set the fortress limits much higher.
                silverLimit = 190000;
                copperLimit = 190000;
                resourceMinimum = 140000;
                singleResourceMinimum = 195000;
                leaveBehind = 20000; // each
            }
            // check resources
            var population = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="4"] .resourceAmount').html() * 1;
            if (population > 250 && pub.popTrade) {
                _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log(' recruit more soldiers ');
                return _closeCastle();
            }
            var wood = $castleElem.find('.resourceHeaderTable .resourceElement[data-primary-key="1"] .resourceAmount').html() * 1 - leaveBehind;
            var stone = $castleElem.find('.resourceHeaderTable .resourceElement[data-primary-key="2"] .resourceAmount').html() * 1 - leaveBehind;
            var ore = $castleElem.find('.resourceHeaderTable .resourceElement[data-primary-key="3"] .resourceAmount').html() * 1 - leaveBehind;
            // check total silver and copper
            var silver = $castleElem.find('.resourceHeaderTable .resourceElement[data-primary-key="6"] .resourceAmount').html() * 1;
            var copper = $castleElem.find('.resourceHeaderTable .resourceElement[data-primary-key="5"] .resourceAmount').html() * 1;
            var total = wood + stone + ore;
            _debug(_LNK_DEBUG_QUIET) ? _doNothing() : console.log('total ' + total + ' VS min ' + resourceMinimum);
            if (
                total > resourceMinimum ||
                wood > singleResourceMinimum ||
                stone > singleResourceMinimum ||
                ore > singleResourceMinimum
            ) {
                // click on the link...
                _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('total ' + total + ' VS min ' + resourceMinimum);
                if (pub.preferCopper && copper < copperLimit) {
                    $castleElem.find('.tradableItems .marketListItem:first .button').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click'); //trade for copper
                } else if (silver < silverLimit) {
                    $castleElem.find('.tradableItems .marketListItem:last .button').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click'); //trade for silver
                } else if (copper < copperLimit) {
                    $castleElem.find('.tradableItems .marketListItem:first .button').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click'); //trade for copper
                } else {
                    _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('limited resources', retry);
                    return _closeCastle();
                }
                // this will try 10 times and then fail... up to 20 seconds.
                _timeoutLoop(1000, 2000, _tradeResourceReady, _tradeResourceClick.bind(this, total, wood, ore, stone), 10, _closeCastle, (retry - 1), _tradeClick);
            } else {
                return _closeCastle();
            }
        } else {
            _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('trade disabled');
            return _closeCastle();
        }
    };
    var _tradeResourceReady = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_tradeResourceReady');
        return $castleElem.find('.resourceContainer .resourceElement').length > 0;
    };
    var _tradeResourceClick = function (total, wood, ore, stone) {
        $castleElem = jQuery('.win.habitat.frame-container:visible');
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_tradeResourceClick');
        var carts = Math.ceil(total / 2500);
        var $oxCart = $castleElem.find('.unitElement[data-primary-key="10002"] input');
        if ($oxCart.attr('placeholder') == 0) {
            _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('NO OXEN CARTS');
            return _closeCastle();
        } else if ($oxCart.attr('placeholder') * 1 < carts) {
            // less carts than resources to trade, so reduce the resources until fit in carts.
            carts = $oxCart.attr('placeholder') * 1;// set carts to max avail instead of total / 2500
            var newTotal = carts * 2500; // then set new total to that * 2500 (max qty)
            var diff = total - newTotal;
            // reduce resources so they fit into the available carts.
            // remove 1/3 from each.
            wood = wood - Math.ceil(diff / 3);
            stone = stone - Math.ceil(diff / 3);
            ore = ore - Math.ceil(diff / 3);
        }
        $oxCart.focus().click().val(carts).trigger("change").trigger("blur");
        $castleElem.find('.resourceContainer .resourceElement[data-primary-key="1"] input')
            .val(wood).trigger("change").trigger("blur");
        $castleElem.find('.resourceContainer .resourceElement[data-primary-key="2"] input')
            .val(stone).trigger("change").trigger("blur");
        $castleElem.find('.resourceContainer .resourceElement[data-primary-key="3"] input')
            .val(ore).trigger("change").trigger("blur");
        $castleElem.find('.typeContainer .button').click();
        _timeoutLoop(3000, 5000, _tradeSendReady, _tradeSendClick);
    };
    var _tradeSendReady = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_tradeSendReady');
        return $castleElem.find('.resourceContainer .resourceElement').length == 0;
    };
    var _tradeSendClick = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('exchanged (_tradeSendClick)');
        return _closeCastle();
    };
    var _closeCastle = function () {
        _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('_closeCastle');
        jQuery('.win.habitat.frame-container:visible').find('.close').trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');
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
    }
    // all the toggles live here...
    pub.toggleClear = function () {
        pub.clear = !pub.clear;
        jQuery('#auto_clear').removeClass(pub.clear ? 'Stopped' : 'Running').addClass(pub.clear ? 'Running' : 'Stopped');
        _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('pub.clear', pub.clear);
    };
    pub.toggleDebug = function () {
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
    pub.toggleMiniMap = function () {
        jQuery('.miniMapContainer').toggle();
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
        pub.popTrade = !pub.popTrade;
        jQuery('#auto_popTrade').removeClass(pub.popTrade ? 'Stopped' : 'Running').addClass(pub.popTrade ? 'Running' : 'Stopped');
        _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('pub.popTrade', pub.popTrade);
    };
    pub.toggleResearch = function () {
        pub.research = !pub.research;
        jQuery('#auto_research').removeClass(pub.research ? 'Stopped' : 'Running').addClass(pub.research ? 'Running' : 'Stopped');
        _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('pub.research', pub.research);
    };
    pub.clearHidden = function () {
        jQuery('.win.habitat.frame-container').find('.close').click();
    };
    var filterCastles = function(){
        // return true for any castle that should be opened and worked on.
        $c = jQuery(this);
        console.log('filterCastles',$c);
        castlePoints = castleListItem.find('.points').html().replace(/ Points/i, '') * 1;
        isFullyUpgraded = jQuery.inArray(castlePoints, fullyUpgraded) > -1;
        var $missionsElem = jQuery('.topbarImageContainer:nth-of-type(7)');

        if(pub.research && !isFullyUpgraded){
            console.log('do research');
            // research possible
            return true;
        }
        if (pub.missions && $missionsElem.length > 0) {
            ;
        } else if (castlePoints < 289) {
            // manual missions
            console.log('do manual missions');
            return true;
        }
        if (pub.silver && (isFullyUpgraded || pub.allTrade)){
            // check limits - default castle..
            var silverLimit = 19800;
            var copperLimit = 19800;
            var resourceMinimum = 19000;
            var singleResourceMinimum = 9500;
            var leaveBehind = 1000; // each
            if (castleFortress) {
                // set the fortress limits much higher.
                silverLimit = 190000;
                copperLimit = 190000;
                resourceMinimum = 140000;
                singleResourceMinimum = 195000;
                leaveBehind = 20000; // each
            }
            // check resources
            var population = $c.find('.resourceElement[data-primary-key="4"] .resourceAmount').html() * 1;
            if (population > 250 && pub.popTrade) {
                console.log('population limiter for trade, disable poptrade if you want to trade anyway');
            } else {
                var wood = $castleElem.find('.resourceElement[data-primary-key="1"] .resourceAmount').html() * 1 - leaveBehind;
                var stone = $castleElem.find('.resourceElement[data-primary-key="2"] .resourceAmount').html() * 1 - leaveBehind;
                var ore = $castleElem.find('.resourceElement[data-primary-key="3"] .resourceAmount').html() * 1 - leaveBehind;
                // check total silver and copper
                var silver = $castleElem.find('.resourceElement[data-primary-key="6"] .resourceAmount').html() * 1;
                var copper = $castleElem.find('.resourceElement[data-primary-key="5"] .resourceAmount').html() * 1;
                var total = wood + stone + ore;
                if (
                    total > resourceMinimum ||
                    wood > singleResourceMinimum ||
                    stone > singleResourceMinimum ||
                    ore > singleResourceMinimum
                ) {
                    if (pub.preferCopper && copper < copperLimit) {
                        console.log('do copper trade');
                        return true;
                    } else if (silver < silverLimit) {
                        console.log('do silver trade');
                        return true;
                    } else if (copper < copperLimit) {
                        console.log('do copper trade 2');
                        return true;
                    }
                }
            }
        }
        return false;
    };
    pub.runLnK = function (force) {
        if (pub.runLnKNow || force) {
            // start the building timer if not already started.
            if (pub.buildings) {
                if(!buildingTimer){
                    _buildingIntervals();
                }
            }
            if (jQuery('.win.habitat.frame-container').length == 0) {// closed, so open a new window.
                if (pub.clear) {
                    console.clear();
                }
                var castleListItem=false;
                _closeDialogs();
                _debug(_LNK_DEBUG_VERBOS) ? _doNothing() : console.log('********* opening new castle *********');
                jQuery('.incrementalCounter').html(currentList);
                var currentListItems = jQuery('.castleHabitatOverview .castleListItem');
                do {
                    castleListItem = jQuery(currentListItems[currentList]);
                    if(filterCastles.bind(castleListItem)===false){
                        console.log('castle does not need work ',castleListItem)
                        currentList = currentList + 1;
                        castleListItem=false;
                    }
                } while(castleListItem==false && currentList<currentListItems.length);

                if (castleListItem && castleListItem.length) {
                    castlePoints = castleListItem.find('.points').html().replace(/ Points/i, '') * 1;
                    isFullyUpgraded = jQuery.inArray(castlePoints, fullyUpgraded) > -1;
                    // only reason to open castles
                    // not fully upgraded OR
                    // running missions / silver exchange.
                    if (!isFullyUpgraded || (isFullyUpgraded && (pub.missions || pub.silver))) {
// TODO..
                    }
                    castleListItem.trigger('mouseover').trigger('mouseenter').trigger('mousedown touchstart').trigger('click');

                    currentList = currentList + 1;
                    if (currentListItems.length == currentList) {
                        currentList = 0;//reset back to 0 for next pass...
                    }
                    _timeoutLoop(3000, 5000, _castleReady, _castleFunctions);// wait 2 seconds and run castle
                } else {
                    _debug(_LNK_DEBUG_QUIET) ? _doNothing() : console.log('.....  No castle list to open .....');
                }
            } else {
                _debug(_LNK_DEBUG_LIMITED) ? _doNothing() : console.log('.....  waiting .....');
            }
        }
        clearTimeout(timerObj);
        timerObj = setTimeout(pub.runLnK, 10000);// wait 10 seconds and try again..
    };
    pub.init = function () {
        waitForKeyElements(".topbar", function () {
            console.log('.topbar found');
            jQuery('body').prepend('<div id="incrementalNumber" class="incrementalCounter"></div>');
            jQuery('.topbar[style],.topbar *[style]').removeAttr('style');
            jQuery('.topbar').find('.controls').append('<div id="jsLnK">' +
                '   <div><a onclick="ALNK.runLnK(true)">START/RESET</a></div>' +
                '   <div><a onclick="ALNK.toggleAuto()">Automation</a><span id="auto_runLnKNow" class="' + (pub.runLnKNow ? 'Running' : 'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.toggleSilver ()">Silver</a><span id="auto_silver" class="' + (pub.silver ? 'Running' : 'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.toggleAllTrade ()">AllTrade</a><span id="auto_all_trade" class="' + (pub.allTrade ? 'Running' : 'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.togglePreferCopper ()">preferCopper</a><span id="auto_preferCopper" class="' + (pub.preferCopper ? 'Running' : 'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.togglePopTrade ()">Population Trade</a><span id="auto_popTrade" class="' + (pub.popTrade ? 'Running' : 'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.toggleResearch ()">Research</a><span id="auto_research" class="' + (pub.research ? 'Running' : 'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.toggleBuildings()">Buildings</a><span id="auto_buildings" class="' + (pub.buildings ? 'Running' : 'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.toggleMissions()">Missions</a><span id="auto_missions" class="' + (pub.missions ? 'Running' : 'Stopped') + '"></span></div>' +
                //'   <div><a onclick="ALNK.toggleDebug()">Log::Debug</a><span id="auto_debug" class="' + (pub.debug ? 'Running' : 'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.toggleClear()">Log::Clear</a><span id="auto_clear" class="' + (pub.clear ? 'Running' : 'Stopped') + '"></span></div>' +
                '   <div><a onclick="ALNK.toggleMiniMap()">Toggle MiniMap</a></div>' +
                '   <div><a onclick="ALNK.clearHidden()">Close Castles</a></div>' +
                '</div>').find('#jsLnK').css('z-index: 888888888; top: 0; position: absolute; bottom: auto;');


            var _LNK_DEBUG_VERBOS = 5;
            var _LNK_DEBUG_LIMITED = 3;
            var _LNK_DEBUG_QUIET = 1;
            var _LNK_DEBUG_SILENT = 0;

        });
        waitForKeyElements(".miniMapContainer", function () {
            console.log('.miniMapContainer created');
            jQuery('.miniMapContainer').hide();
        });
        waitForKeyElements(".bottombar", function () {
            console.log('.bottombar created');
            jQuery('.bottombar[style],.bottombar *[style]').removeAttr('style');
        });
    };
    return pub; // returns the Object with public methods
}).call(unsafeWindow);

unsafeWindow.ALNK.init();

