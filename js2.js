// ==UserScript==
// @name         landk
// @namespace    https://raw.githubusercontent.com/Artistan/landk/master/js2.js
// @version      0.1
// @description  make it work.
// @author       CPeterson
// @match        http://browser.lordsandknights.com/v2/game/index.php
// @resource    customCSS https://raw.githubusercontent.com/Artistan/landk/master/landk2.css?4l1=111
// @resource    customCSS2 http://local.dev/landk/landk2.css?4l1=111
// @require     https://gist.githubusercontent.com/Artistan/385fb5676c5408227410/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @grant       all
// @grant       unsafeWindow
// @grant       GM_getResourceText
// @grant       GM_addStyle
// ==/UserScript==


/*var newCSS = GM_getResourceText ("customCSS");
GM_addStyle(newCSS);*/
var newCSS2 = GM_getResourceText ("customCSS2");
GM_addStyle(newCSS2);

if(typeof unsafeWindow == 'undefined'){
    var unsafeWindow = window;
}
unsafeWindow.runLnKNow=true;
unsafeWindow.missions=true;
unsafeWindow.buildings=true;
unsafeWindow.silver=true;
unsafeWindow.research=true;
unsafeWindow.clear=true;
unsafeWindow.debug=true;
jQuery = unsafeWindow.jQuery;
console = unsafeWindow.console;
var incrementalCount=10;
var incrementalCounter=9;
var tAr=[]; // test array

// wait for elements...ΩΩ
//waitForKeyElements ("#atfResults", addCustomSearchResult);


// if not set / false, then
var trueFalseFunc = function(key){
    if(tAr[key] == true){
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('trueFalseFunc',true);
        tAr[key] = false;
    } else {
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('trueFalseFunc',false);
        tAr[key] = true;
    }
    // return the opposite
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('trueFalseFunc',key,tAr[key]);
    return !tAr[key];
};

unsafeWindow.toggleClear  = function(){
    unsafeWindow.clear = !unsafeWindow.clear;
    jQuery('#auto_clear').removeClass(unsafeWindow.clear?'Stopped':'Running').addClass(unsafeWindow.clear?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.clear',unsafeWindow.clear);
};

unsafeWindow.toggleDebug  = function(){
    unsafeWindow.debug = !unsafeWindow.debug;
    jQuery('#auto_debug').removeClass(unsafeWindow.debug?'Stopped':'Running').addClass(unsafeWindow.debug?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.debug',unsafeWindow.debug);
};

unsafeWindow.runLnK = function(force) {
    if(unsafeWindow.clear){
        unsafeWindow.console.clear();
    }

    incrementalCounter++;
    if(incrementalCounter>incrementalCount){
        incrementalCounter=1;
    }
    if(unsafeWindow.runLnKNow || force){
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('lnk running USE: unsafeWindow.runLnKNow=false;');
        checkMissions(function(){
            checkBuildings(function(){
                castleFunctions (function(){
                    silverFunctions (function(){
                        finalizeRun();
                    });
                });
            });
        });
    } else {
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('lnk paused USE: unsafeWindow.runLnKNow=true;');
        finalizeRun();
    }
};

function finalizeRun(){
    jQuery('.incrementalCounter').html(incrementalCounter);
    clearTimeout(unsafeWindow.timer);
    var randomWaitTime = randomIntFromInterval(240000,600000);// 4-10 minutes
    unsafeWindow.timer = setTimeout(unsafeWindow.runLnK, randomWaitTime);// wait 10 minutes.
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('finalizeRun waiting '+(randomWaitTime/60000)+' minutes');
}

function doNothing(){
    return true;
}

//unsafeWindow.timer = setTimeout(unsafeWindow.runLnK,15000);
unsafeWindow.toggleAuto = function(){
    unsafeWindow.runLnKNow = !unsafeWindow.runLnKNow;
    jQuery('#auto_runLnKNow').removeClass(unsafeWindow.runLnKNow?'Stopped':'Running').addClass(unsafeWindow.runLnKNow?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.runLnKNow',unsafeWindow.runLnKNow);
};

unsafeWindow.toggleMissions = function(){
    unsafeWindow.missions = !unsafeWindow.missions;
    jQuery('#auto_missions').removeClass(unsafeWindow.missions?'Stopped':'Running').addClass(unsafeWindow.missions?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.missions',unsafeWindow.missions);
};

unsafeWindow.findLoners = function(){
    if(!profileVisible()){
        jQuery('.bottombarImageContainer.Player').click();
    }
    timeoutLoop(200,300,profileVisible,function(){
        if(!positionsVisible()){
            jQuery('.profile .clickable.listButton.profileListButton').click();
        }
        timeoutLoop(200,300,positionsVisible,function(){
            // need to keep clicking on this one....
            timeoutLoop(200,300,rankingScrollUp,function(){
                // now we can look at the rankings and scroll down.
                timeoutLoop(1000,2000,rankingScrollDown,function(){
                    // each truthy check goes through the current page list
                });
            });
        });
    });
};

unsafeWindow.rankingView = function(){
    if(!rankingsVisible()){
        jQuery('#rankingList').find('.clickable.alliance').click();
    }
    timeoutLoop(1000,3000,rankingScrollDown,function(){
        // each truthy check goes through the current page list
    });
};

var rankingsVisible = function(){
    return jQuery('#rankingList').find('.clickable.alliance').length > 0;
};

var rankingProcess = function(){
    jQuery('.foreignPlayer').each(function(){
        if(jQuery('.alliance',this).length>0){
            // has alliance
        } else {
            console.log(jQuery('.title',this).html());
        }
        jQuery('.close',this).click();
    });
};

var rankingScrollDown = function(){
    // if not processing, start.
    var $rankList = jQuery('#rankingList');
    if(!processingRanking()){
        // mark as processing
        $rankList.addClass('processing');
        // look at all the lines
        $rankList.find('.rowInfo.clickable ').click();
        timeoutLoop(1000,2000,rankingProcess,function(){
            return $rankList.removeClass('processing');
        });
    } else if (!processingRanking() && $rankList.find('.button.down.paginate').length>0){
        $rankList.find('.button.down.paginate').click();
    } else {
        return true;
    }
    return false;
};

var processingRanking = function(){
    return jQuery('#rankingList').hasClass('processing');
};

var rankingScrollUp = function(){
    if(!rankingTop()){
        jQuery('#rankingList').find('.button.up.paginate').click();
        return true;
    }
    return false;
};

var rankingTop = function(){
    return jQuery('#rankingList').find('.button.up.paginate').length==0;
};

var profileVisible = function(){
    return jQuery('.profile').length > 0;
};

var positionsVisible = function(){
    return jQuery('.profile .clickable.listButton.profileListButton').length>0;
};

// when truthyFunction then call callback
// failInt causes max time out.
var timeoutLoop = function(waitTimeIntMin,waitTimeIntMax,truthyFunction,callback,failInt) {
    var waitTimeInt = randomIntFromInterval(waitTimeIntMin,waitTimeIntMax);
    if(typeof failInt == 'undefined'){
        failInt = 100;
    } else if (failInt == 0) {
        return false;
    } else {
        failInt--;
    }
    if(truthyFunction()){
        callback();
    } else {
        setTimeout(function () {
            timeoutLoop(waitTimeInt,waitTimeIntMax,truthyFunction,callback,failInt);
        }, waitTimeInt);
    }
};

var checkMissions = function(callback){
    if(unsafeWindow.missions){
        try{
            // make sure it is closed before we try to open.
            jQuery('.globalMissions .close').click();
            var $missionsElem = jQuery('.topbarImageContainer:nth-of-type(7)');
            if($missionsElem.length>0){
                // open missions panel, if it exists.
                $missionsElem.click().each(function(){

                    timeoutLoop(2000,3000,function(){return trueFalseFunc('missionControlCastle');},function(){
                        var $gMissions = jQuery('.globalMissions');
                        // try select all
                        $gMissions.find('.selectAllButton').click();
                        // execute them!
                        $gMissions.find('.execute').click();
                        // now check fortress
                        var $fortMissions = $gMissions.find('.tab.tab-castle-fortess.clicable[data-action="fortress"]');
                        if($fortMissions.length){
                            $fortMissions.click().each(function () {
                                timeoutLoop(1000,2000,function(){return trueFalseFunc('missionControlFortress');},function(){
                                    // try select all
                                    $gMissions.find('.selectAllButton').click();
                                    // execute them!
                                    $gMissions.find('.execute').click();
                                    // close
                                    $gMissions.find('.close').click();
                                    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('missions fortress');
                                    if(typeof callback != 'undefined')
                                        callback();
                                });
                            });
                        } else {
                            $gMissions.find('.close').click();
                            if(typeof callback != 'undefined')
                                callback();
                        }
                        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('missions castle');
                    });

                });
            } else if(typeof callback != 'undefined'){
                callback();
            }
        } catch(e){
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('globalMissions',e);
        }
    } else if(typeof callback != 'undefined'){
        callback();
    }
};

unsafeWindow.toggleMiniMap = function(){
    jQuery('.miniMapContainer').toggle();
};

unsafeWindow.toggleBuildings = function(){
    unsafeWindow.buildings = !unsafeWindow.buildings;
    jQuery('#auto_buildings').removeClass(unsafeWindow.buildings?'Stopped':'Running').addClass(unsafeWindow.buildings?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.buildings',unsafeWindow.buildings);
};

var checkBuildings = function(callback){
    if(unsafeWindow.buildings){
        try{
            var $bList = jQuery('.buildingList');
            // make sure it is closed before we try to open.
            $bList.find('.close').click();
            var $buildButton = jQuery('.topbarImageContainer:nth-of-type(2)');
            if($buildButton.length>0){
                // open buildings panel
                $buildButton.click().each(function(){

                    timeoutLoop(2000,3000,function(){ return trueFalseFunc('castleBuildings'); },function(){
                        var $bList = jQuery('.buildingList');
                        // try select all
                        $bList.find('.listContentRow').each(function(){ castleBuildings(this,'castle') });
                        var $fortressList = $bList.find('.tab.tab-castle-fortess[data-action="fortress"]').click();
                        // now check fortress
                        if($fortressList.length){
                            $fortressList.click().each(function(){
                                timeoutLoop(2000,3000,function(){return trueFalseFunc('fortessBuildings');},function(){
                                    // try select all
                                    $bList.find('.listContentRow').each(function(){ castleBuildings(this,'fortress'); });
                                    // execute them!
                                    $bList.find('.close').click();
                                    if(typeof callback != 'undefined'){
                                        callback();
                                    }
                                });
                            }) ;
                        } else {
                            $bList.find('.close').click();
                            if(typeof callback != 'undefined')
                                callback();
                        }
                    });
                });
            } else if(typeof callback != 'undefined'){
                callback();
            }
        } catch(e){
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('globalMissions',e);
        }
    } else if(typeof callback != 'undefined'){
        callback();
    }
};

var castleBuildings = function (ele,txt){
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('castleBuildings',txt);
    var $c = jQuery(ele);
    if( $c.find('.upgrade').length < 2 && $c.find('.buildbutton:not(.disabled)').length > 0 ){
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('buildings upgrade ', $c, $c.find('.upgrade').length);

        var buttons = $c.find('.buildbutton:not(.disabled)');
        // try to click upgrade until at least 2 upgrades are being performed
        for (var len = buttons.length-1; len >= 0 && $c.find('.upgrade').length < 3; len--) {
            jQuery(buttons[len]).click().each(function(){
                unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('buildings upgrading ', this);
            });
        }
    }
};

unsafeWindow.toggleSilver  = function(){
    unsafeWindow.silver = !unsafeWindow.silver;
    jQuery('#auto_silver').removeClass(unsafeWindow.silver?'Stopped':'Running').addClass(unsafeWindow.silver?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.silver',unsafeWindow.silver);
};

unsafeWindow.toggleResearch  = function(){
    unsafeWindow.research = !unsafeWindow.research;
    jQuery('#auto_research').removeClass(unsafeWindow.research?'Stopped':'Running').addClass(unsafeWindow.research?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.research',unsafeWindow.research);
};

var checkCastles  = function() {
    try {
        // make sure it is closed before we try to open.
        if (jQuery('.castleList').length == 0) {
            // open castleList panel
            jQuery('.topbarImageContainer:nth-of-type(1)').click();
        } else {
            castleFunctions();
        }
    } catch (e) {
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('globalMissions', e);
    }
};
var manualMissions=false;
var leaveTroopsOpen=false;
var useTroopsView=true;
var castleFunctions = function(callback){
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('castleFunctions');
    // check missions panel, if it exists.
    manualMissions = jQuery('.topbarImageContainer:nth-of-type(7)').length==0;
    if(jQuery(".castleList").length>0){
        // use the castleList
        useTroopsView = false;
    } else {
        useTroopsView = true;
        // only run these every incrementalCount, or if manualMisssions
        if(jQuery('.troopMovements .close').length>1){
            leaveTroopsOpen=true;
        } else {
            leaveTroopsOpen=false;
            jQuery('.topbarImageContainer:nth-of-type(3)').click();
            // then jQuery('.troopMovements .close').click();
        }
    }
    if(incrementalCount==incrementalCounter || manualMissions){
        if(unsafeWindow.research || unsafeWindow.missions ){
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('running castleFunctions');

            if(useTroopsView){
                jQuery(".troopMovements table.tree-table tr.level-1 span.icon").click();// open all.
            } else {
                jQuery(".castleList .castleListItem .points").click();
            }

            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('castles');

            timeoutLoop(10000,20000,function(){return trueFalseFunc('habitatFunctions');},function(){
                jQuery('.habitat').each(habitatFunctions);
                if(typeof callback != 'undefined')
                    callback();
            });

        } else if(typeof callback != 'undefined') {
            callback();
        }
    } else if(typeof callback != 'undefined') {
        callback();
    }
};

var habitatFunctions = function(){
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('habitat');
    //do stuff here
    if(unsafeWindow.missions && manualMissions){
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('manualMissions');
        jQuery('.building-area.tavern',this).click();
        if(jQuery('.building-area.tavern').length<2){
            jQuery('.missionListItem .button:not(.disabled)',this).click();
        }
    }
    closeDialogs();

    if(unsafeWindow.research && incrementalCount==incrementalCounter){
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('research');
        jQuery('.building-area.library',this).click();// for castles...
        jQuery('.building-area.university',this).click();// for fortresses...
        jQuery('.knowledgeListItem .button:not(.disabled)',this).click();
    }
    closeDialogs();
    jQuery('.close',this).click();
    if(!leaveTroopsOpen){
        jQuery('.troopMovements .close').click();
    }
    return true;// true so jQuery loop keeps going, kinda like a "break"
};


var silverFunctions = function(callback){
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('silverFunctions');
    // only run these every incrementalCount, or if manualMisssions
    if(incrementalCount==incrementalCounter){
        if(unsafeWindow.silver){
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('running silverFunctions');
            jQuery(".castleListItem .points:contains('289 Points')").click();
            jQuery(".castleListItem .points:contains('290 Points')").click();
            jQuery(".castleListItem .points:contains('1797 Points')").click();
            timeoutLoop(10000,20000,function(){return trueFalseFunc('silverTrade');},function(){
                jQuery('.habitat').each(habitatSilverFunctions);
                if(typeof callback != 'undefined')
                    callback();
            });
        } else if(typeof callback != 'undefined') {
            callback();
        }
    } else if(typeof callback != 'undefined') {
        callback();
    }
};

var habitatSilverFunctions = function(){

    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('habitatSilver');
    // if silver automation and once every incremental counter rounds, and no knowledge to learn.
    if(unsafeWindow.silver && incrementalCount==incrementalCounter){
        // check limits
        var silverLimit = 19800;
        var copperLimit = 19800;
        var resourceMinimum = 14000;
        var leaveBehind = 1000; // each
        if(jQuery('.townhall',this).length>0){
            // set the fortress limits much higher.
            silverLimit = 117000;
            copperLimit = 117000;
            resourceMinimum = 140000;
            leaveBehind = 20000; // each
        }
        // check resources
        var wood = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="1"] .resourceAmount',this).html() * 1 - leaveBehind;
        var stone = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="2"] .resourceAmount',this).html() * 1 - leaveBehind;
        var ore = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="3"] .resourceAmount',this).html() * 1 - leaveBehind;
        // check total silver and copper
        var silver = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="6"] .resourceAmount',this).html() * 1;
        var copper = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="5"] .resourceAmount',this).html() * 1;
        var total = wood + stone + ore;
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('total '+total+' VS min '+resourceMinimum);
        if(total > resourceMinimum){
            jQuery('.keep,.townhall',this).click();
            if(silver<silverLimit){
                jQuery('.tradableItems .marketListItem:last .button',this).click(); //trade for silver
            } else if(copper<copperLimit) {
                jQuery('.tradableItems .marketListItem:first .button',this).click(); //trade for copper
            } else {
                jQuery('.close',this).click();
                return true;// true so jQuery loop keeps going, kinda like a "break"
            }
            var carts = Math.ceil(total/2500);
            var $oxCart = jQuery('.unitElement[data-primary-key="10002"] input',this);
            if( $oxCart.attr('placeholder')==0 ){
                unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('NO OXEN CARTS');
                jQuery('.close',this).click();
                return true;// true so jQuery loop keeps going, kinda like a "break"
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
            $oxCart.focus().click().val(carts).blur();
            jQuery('.resourceContainer input',this).each(function(){
                var $t = jQuery(this);
                $t.focus().click().val($t.attr('placeholder')-1000).blur();
            });

            $oxCart
                .val(carts).trigger("change").trigger("blur");

            jQuery('.resourceContainer .resourceElement[data-primary-key="1"] input',this)
                .val(wood).trigger("change").trigger("blur");
            jQuery('.resourceContainer .resourceElement[data-primary-key="2"] input',this)
                .val(stone).trigger("change").trigger("blur");
            jQuery('.resourceContainer .resourceElement[data-primary-key="3"] input',this)
                .val(ore).trigger("change").trigger("blur");

            jQuery('.typeContainer .button',this).click();
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('exchanged');
        }
    }
    closeDialogs();
    jQuery('.close',this).click();
    return true;// true so jQuery loop keeps going, kinda like a "break"
};

// add events to the addClass function

var originalCssMethod = jQuery.fn.css;
jQuery.fn.css = function(){
    var result = originalCssMethod.apply( this, arguments );
    jQuery(this).trigger('cssChanged').trigger('cssUpdated');
    return result;
};
var originalRemoveClassMethod = jQuery.fn.removeClass;
jQuery.fn.removeClass = function(){
    var result = originalRemoveClassMethod.apply( this, arguments );
    jQuery(this).trigger('classChanged').trigger('classRemoved');
    return result;
};
var originalAddClassMethod = jQuery.fn.addClass;
jQuery.fn.addClass = function(){
    var result = originalAddClassMethod.apply( this, arguments );
    jQuery(this).trigger('classChanged').trigger('classAdded');
    return result;
};

jQuery('body').prepend('<div id="incrementalNumber" class="incrementalCounter"></div>')

waitForKeyElements(".topbar", function(){
    unsafeWindow.console.log('.topbar created');
    $('.topbar[style],.topbar *[style]').removeAttr('style');


    jQuery('.topbar').find('.controls').append('<div id="jsLnK">' +
        '   <div><a onclick="runLnK(true)">START/RESET</a></div>' +
        '   <div><a onclick="toggleAuto()">Automation</a><span id="auto_runLnKNow" class="' + (unsafeWindow.runLnKNow?'Running':'Stopped') + '"></span></div>' +
        '   <div><a onclick="toggleSilver ()">Silver</a><span id="auto_silver" class="' + (unsafeWindow.silver?'Running':'Stopped') + '"></span></div>' +
        '   <div><a onclick="toggleResearch ()">Research</a><span id="auto_research" class="' + (unsafeWindow.research?'Running':'Stopped') + '"></span></div>' +
        '   <div><a onclick="toggleBuildings()">Buildings</a><span id="auto_buildings" class="' + (unsafeWindow.buildings?'Running':'Stopped') + '"></span></div>' +
        '   <div><a onclick="toggleMissions()">Missions</a><span id="auto_missions" class="' + (unsafeWindow.missions?'Running':'Stopped') + '"></span></div>' +
        '   <div><a onclick="toggleDebug()">Debug</a><span id="auto_debug" class="' + (unsafeWindow.debug?'Running':'Stopped') + '"></span></div>' +
        '   <div><a onclick="toggleClear()">Clear</a><span id="auto_clear" class="' + (unsafeWindow.clear?'Running':'Stopped') + '"></span></div>' +
        '   <div><a onclick="toggleMiniMap()">Toggle MiniMap</a></div>' +
        '   <div><a onclick="rankingView()">Ranking View</a></div>' +
        '</div>').find('#jsLnK').css('z-index: 888888888; top: 0; position: absolute; bottom: auto;');

});
waitForKeyElements(".miniMapContainer", function(){
    unsafeWindow.console.log('.miniMapContainer created');
    $('.miniMapContainer').hide();
});

waitForKeyElements(".bottombar", function(){
    unsafeWindow.console.log('.bottombar created');
    $('.bottombar[style],.bottombar *[style]').removeAttr('style');
});


function closeDialogs(){
    jQuery('.button:contains("Cancel")').click();
    jQuery('.button:contains("Ok")').click();
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}



