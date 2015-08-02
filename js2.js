// ==UserScript==
// @name         landk
// @namespace    https://raw.githubusercontent.com/Artistan/landk/master/js.js
// @version      0.1
// @description  make it work.
// @author       CPeterson
// @match        http://browser.lordsandknights.com/v2/game/index.php
// @resource    customCSS http://localhost/landk2.css?4l1=111
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
unsafeWindow.runLnKNow=true;
unsafeWindow.missions=true;
unsafeWindow.buildings=true;
unsafeWindow.silver=true;
unsafeWindow.research=true;
unsafeWindow.clear=true;
unsafeWindow.debug=true;
var incrementalCount=10;
var incrementalCounter=9;

toggleClear  = function(){
    unsafeWindow.clear = !unsafeWindow.clear;
    jQuery('#auto_clear').removeClass(unsafeWindow.clear?'Stopped':'Running').addClass(unsafeWindow.clear?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.clear',unsafeWindow.clear);
}

toggleDebug  = function(){
    unsafeWindow.debug = !unsafeWindow.debug;
    jQuery('#auto_debug').removeClass(unsafeWindow.debug?'Stopped':'Running').addClass(unsafeWindow.debug?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.debug',unsafeWindow.debug);
}

jQuery('body').append('<div id="jsLnK">' +
'   <a onclick="runLnK(true)">START/RESET</a>' +
'   <a onclick="toggleAuto()">Automation</a><span id="auto_runLnKNow" class="' + (unsafeWindow.runLnKNow?'Running':'Stopped') + '"></span>' +
'   <a onclick="toggleSilver ()">Silver</a><span id="auto_silver" class="incrementalCounter ' + (unsafeWindow.silver?'Running':'Stopped') + '"></span>' +
'   <a onclick="toggleResearch ()">Research</a><span id="auto_research" class="incrementalCounter ' + (unsafeWindow.silver?'Running':'Stopped') + '"></span>' +
'   <a onclick="toggleBuildings()">Buildings</a><span id="auto_buildings" class="' + (unsafeWindow.buildings?'Running':'Stopped') + '"></span>' +
'   <a onclick="toggleMissions()">Missions</a><span id="auto_missions" class="' + (unsafeWindow.missions?'Running':'Stopped') + '"></span>' +
'   <a onclick="toggleDebug()">Debug</a><span id="auto_debug" class="' + (unsafeWindow.debug?'Running':'Stopped') + '"></span>' +
'   <a onclick="toggleClear()">Clear</a><span id="auto_clear" class="' + (unsafeWindow.clear?'Running':'Stopped') + '"></span>' +
'   <a onclick="toggleMiniMap()">MiniMap</a>' +
'</div>').find('#jsLnK').css('z-index: 888888888; top: 0; position: absolute; bottom: auto;');

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
}

function finalizeRun(){
    jQuery('.incrementalCounter').html(incrementalCounter);
    clearTimeout(unsafeWindow.timer);
    unsafeWindow.timer = setTimeout(unsafeWindow.runLnK, 120000);// wait 2 minutes.
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('finalizeRun waiting 2 minutes');
}

function doNothing(){
    return true;
}

//unsafeWindow.timer = setTimeout(unsafeWindow.runLnK,15000);
unsafeWindow.toggleAuto = function(){
    unsafeWindow.runLnKNow = !unsafeWindow.runLnKNow;
    jQuery('#auto_runLnKNow').removeClass(unsafeWindow.runLnKNow?'Stopped':'Running').addClass(unsafeWindow.runLnKNow?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.runLnKNow',unsafeWindow.runLnKNow);
}

unsafeWindow.toggleMissions = function(){
    unsafeWindow.missions = !unsafeWindow.missions;
    jQuery('#auto_missions').removeClass(unsafeWindow.missions?'Stopped':'Running').addClass(unsafeWindow.missions?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.missions',unsafeWindow.missions);
}


checkMissions = function(callback){
    if(unsafeWindow.missions){
        try{
            // make sure it is closed before we try to open.
            jQuery('.globalMissions .close').click();
            if(jQuery('.topbarImageContainer:nth-of-type(7)').length>0){
                // open missions panel, if it exists.
                jQuery('.topbarImageContainer:nth-of-type(7)').click().each(function(){
                    setTimeout(function(){
                        // try select all
                        jQuery('.globalMissions .selectAllButton').click();
                        // execute them!
                        jQuery('.globalMissions .execute').click();
                        // now check fortress
                        if(jQuery('.globalMissions  .tab.tab-castle-fortess.clicable[data-action="fortress"]').length){
                            jQuery('.globalMissions  .tab.tab-castle-fortess.clicable[data-action="fortress"]').click().each(function () {
                                setTimeout(function(){
                                    // try select all
                                    jQuery('.globalMissions .selectAllButton').click();
                                    // execute them!
                                    jQuery('.globalMissions .execute').click();
                                    // close
                                    jQuery('.globalMissions .close').click();
                                    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('missions fortress');
                                    if(typeof callback != 'undefined')
                                        callback();
                                }, 2000);
                            });
                        } else {
                            jQuery('.globalMissions .close').click();
                            if(typeof callback != 'undefined')
                                callback();
                        }
                        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('missions castle');
                    }, 2000);
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
}

unsafeWindow.toggleMiniMap = function(){
    jQuery('.miniMapContainer').toggle();
}

unsafeWindow.toggleBuildings = function(){
    unsafeWindow.buildings = !unsafeWindow.buildings;
    jQuery('#auto_buildings').removeClass(unsafeWindow.buildings?'Stopped':'Running').addClass(unsafeWindow.buildings?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.buildings',unsafeWindow.buildings);
}

checkBuildings = function(callback){
    if(unsafeWindow.buildings){
        try{
            // make sure it is closed before we try to open.
            jQuery('.buildingList .close').click();
            if(jQuery('.topbarImageContainer:nth-of-type(2)').length>0){
                // open buildings panel
                var buildingsPanel = jQuery('.topbarImageContainer:nth-of-type(2)').click().each(function(){
                    setTimeout(function(){
                        // try select all
                        jQuery('.buildingList .listContentRow').each(function(){ castleBuildings(this,'castle') });
                        jQuery('.buildingList .tab.tab-castle-fortess[data-action="fortress"]').click();
                        // now check fortress
                        if(jQuery('.buildingList .tab.tab-castle-fortess[data-action="fortress"]').length){
                            jQuery('.buildingList .tab.tab-castle-fortess[data-action="fortress"]').click().each(function(){
                                setTimeout(function(){
                                    // try select all
                                    jQuery('.buildingList .listContentRow').each(function(){ castleBuildings(this,'fortress') });
                                    // execute them!
                                    jQuery('.buildingList .close').click();
                                    if(typeof callback != 'undefined')
                                        callback();
                                }, 2000);
                            });
                        } else {
                            jQuery('.buildingList .close').click();
                            if(typeof callback != 'undefined')
                                callback();
                        }
                    }, 2000);
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
}

castleBuildings = function (ele,txt){
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('castleBuildings',txt);
    var $c = jQuery(ele);
    if( $c.find('.upgrade').length < 2 && $c.find('.buildbutton:not(.disabled)').length > 0 ){
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('buildings upgrade ', $c, $c.find('.upgrade').length);

        var buttons = $c.find('.buildbutton:not(.disabled)');
        //unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('cityBuildings',$c,$c.find('.upgrade').length,buttons.length);
        Matches = false;
        // try to click upgrade until at least 2 upgrades are being performed
        for (len = buttons.length-1; len >= 0 && $c.find('.upgrade').length < 3; len--) {
            jQuery(buttons[len]).click().each(function(){
                unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('buildings upgrading ', this);
            });
        }
    }
}

toggleSilver  = function(){
    unsafeWindow.silver = !unsafeWindow.silver;
    jQuery('#auto_silver').removeClass(unsafeWindow.silver?'Stopped':'Running').addClass(unsafeWindow.silver?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.silver',unsafeWindow.silver);
}

toggleResearch  = function(){
    unsafeWindow.research = !unsafeWindow.research;
    jQuery('#auto_research').removeClass(unsafeWindow.research?'Stopped':'Running').addClass(unsafeWindow.research?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.research',unsafeWindow.research);
}

checkCastles  = function() {
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
}
var manualMissions=false;
var leaveTroopsOpen=false;
castleFunctions = function(callback){
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('castleFunctions');
    // check missions panel, if it exists.
    manualMissions = jQuery('.topbarImageContainer:nth-of-type(7)').length==0;
    // only run these every incrementalCount, or if manualMisssions
    if(jQuery('.troopMovements .close').length>1){
        leaveTroopsOpen=true;
    } else {
        leaveTroopsOpen=false;
        jQuery('.topbarImageContainer:nth-of-type(3)').click();
        // then jQuery('.troopMovements .close').click();
    }
    if(incrementalCount==incrementalCounter || manualMissions){
        if(unsafeWindow.research || unsafeWindow.missions ){
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('running castleFunctions');

            jQuery(".troopMovements table.tree-table tr.level-1 span.icon").click();// open all.

            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('castles');

            habitatTimeout = setTimeout(function(){
                jQuery('.habitat').each(habitatFunctions);
                if(typeof callback != 'undefined')
                    callback();
            }, 10000);
        } else if(typeof callback != 'undefined') {
            callback();
        }
    } else if(typeof callback != 'undefined') {
        callback();
    }
}

var habitatTimeout=false;
habitatFunctions = function(){
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('habitat');
    //do stuff here
    if(unsafeWindow.missions && manualMissions){
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('manualMissions');
        jQuery('.building-area.tavern',this).click();
        if(jQuery('.building-area.tavern').length<2){
            var cntBuld = 0;
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
}


silverFunctions = function(callback){
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('silverFunctions');
    // only run these every incrementalCount, or if manualMisssions
    if(incrementalCount==incrementalCounter){
        if(unsafeWindow.silver){
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('running silverFunctions');
            jQuery(".castleListItem .points:contains('289 Points')").click();
            jQuery(".castleListItem .points:contains('290 Points')").click();
            habitatSilverTimeout = setTimeout(function(){
                jQuery('.habitat').each(habitatSilverFunctions);
                if(typeof callback != 'undefined')
                    callback();
            }, 10000);
        } else if(typeof callback != 'undefined') {
            callback();
        }
    } else if(typeof callback != 'undefined') {
        callback();
    }
}

var habitatSilverTimeout=false;
habitatSilverFunctions = function(){

    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('habitatSilver');
    // if silver automation and once every incremental counter rounds, and no knowledge to learn.
    if(unsafeWindow.silver && incrementalCount==incrementalCounter){
        var wood = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="1"] .resourceAmount',this).html() * 1 - 1000;
        var stone = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="2"] .resourceAmount',this).html() * 1 - 1000;
        var ore = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="3"] .resourceAmount',this).html() * 1 - 1000;
        // check total silver and copper
        var silver = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="6"] .resourceAmount',this).html() * 1;
        var copper = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="5"] .resourceAmount',this).html() * 1;
        var total = wood + stone + ore;
        if(total > 14000){
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('total',total);
            jQuery('.keep',this).click();
            if(silver<18000){
                jQuery('.tradableItems.Keep .marketListItem:last .button',this).click(); //trade for silver
            } else if(copper<28000) {
                jQuery('.tradableItems.Keep .marketListItem:first .button',this).click(); //trade for copper
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
                carts = $oxCart.attr('placeholder') * 1;
                total = carts+2500;
                while(wood + stone + ore > total){
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
}

// document ready function
jQuery(function(){

    // extending addclass method
    var originalAddClassMethod = jQuery.fn.addClass;
    jQuery.fn.addClass = function(){
        // Execute the original method.
        var result = originalAddClassMethod.apply( this, arguments );
        // trigger a custom event
        jQuery(this).trigger('cssClassChanged');
        // return the original result
        return result;
    }
    jQuery('.static.topbar.frame-container').on('css');
});

function closeDialogs(){
    jQuery('.button:contains("Cancel")').click();
    jQuery('.button:contains("Ok")').click();
}


