// ==UserScript==
// @name         landk
// @namespace    https://raw.githubusercontent.com/Artistan/landk/master/js.js
// @version      0.1
// @description  make it work.
// @author       CPeterson
// @match        http://browser.lordsandknights.com/v2/game/index.php
// @resource    customCSS http://localhost/landk.css?4l=111
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

runLnK = function() {
    incrementalCounter++;
    if(incrementalCounter>incrementalCount){
        incrementalCounter=1;
    }

    if(jQuery('#jsLnK').length==0){
        unsafeWindow.initJsLnK();
    }
    if(unsafeWindow.runLnKNow){
        checkMissions();
        checkBuildings();
        castleFunctions ();
        jQuery('.incrementalCounter').html(incrementalCounter);
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('lnk running USE: unsafeWindow.runLnK=false;');
    } else {
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('lnk paused USE: unsafeWindow.runLnK=true;');
    }
    if(unsafeWindow.clear){
        unsafeWindow.console.clear();
    }
    unsafeWindow.timer = setTimeout(runLnK, 120000);// wait 2 minutes.
}

function doNothing(){
    return true;
}

unsafeWindow.timer = setTimeout(runLnK,15000);

unsafeWindow.initJsLnK = function(){
    jQuery('body').append('<div id="jsLnK">' +
    '   <a onclick="toggleAuto()">Automation</a><span id="auto_runLnKNow" class="' + (unsafeWindow.runLnKNow?'Running':'Stopped') + '"></span>' +
    '   <a onclick="toggleSilver ()">Silver</a><span id="auto_silver" class="incrementalCounter ' + (unsafeWindow.silver?'Running':'Stopped') + '"></span>' +
    '   <a onclick="toggleResearch ()">Research</a><span id="auto_research" class="incrementalCounter ' + (unsafeWindow.silver?'Running':'Stopped') + '"></span>' +
    '   <a onclick="toggleBuildings()">Buildings</a><span id="auto_buildings" class="' + (unsafeWindow.buildings?'Running':'Stopped') + '"></span>' +
    '   <a onclick="toggleMissions()">Missions</a><span id="auto_missions" class="' + (unsafeWindow.missions?'Running':'Stopped') + '"></span>' +
    '   <a onclick="toggleDebug()">Debug</a><span id="auto_debug" class="' + (unsafeWindow.debug?'Running':'Stopped') + '"></span>' +
    '   <a onclick="toggleClear()">Clear</a><span id="auto_clear" class="' + (unsafeWindow.clear?'Running':'Stopped') + '"></span>' +
    '   <a onclick="toggleMiniMap()">MiniMap</a>' +
    '</div>').find('#jsLnK').css('z-index: 888888888; top: 0; position: absolute; bottom: auto;');
}

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


checkMissions = function(){
    if(unsafeWindow.missions){
        try{
            // make sure it is closed before we try to open.
            jQuery('.globalMissions .close').click();
            // open missions panel, if it exists.
            jQuery('.topbarImageContainer:nth-of-type(7)').click().each(function(){
                setTimeout(function(){
                    // try select all
                    jQuery('.globalMissions .selectAllButton').click();
                    // execute them!
                    jQuery('.globalMissions .execute').click();
                    // now check fortress
                    jQuery('.globalMissions  .tab.tab-castle-fortess.clicable').click();
                    setTimeout(function(){
                        // try select all
                        jQuery('.globalMissions .selectAllButton').click();
                        // execute them!
                        jQuery('.globalMissions .execute').click();
                        // close
                        jQuery('.globalMissions .close').click();
                        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('missions');
                    }, 1000);
                    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('missions');
                }, 1000);
            });
        } catch(e){
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('globalMissions',e);
        }
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

checkBuildings = function(){
    if(unsafeWindow.buildings){
        try{
            // make sure it is closed before we try to open.
            jQuery('.buildingList .close').click();
            // open buildings panel
            var buildingsPanel = jQuery('.topbarImageContainer:nth-of-type(2)').click().each(function(){
                setTimeout(function(){
                    // try select all
                    jQuery('.buildingList .listContentRow').each(function(){ castleBuildings(this) });
                    // now check fortress
                    jQuery('.buildingList  .tab.tab-castle-fortess.clicable').click();
                    setTimeout(function(){
                        // try select all
                        jQuery('.buildingList .listContentRow').each(function(){ castleBuildings(this) });
                        // execute them!
                        jQuery('.buildingList .close').click();
                        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('buildings');
                    }, 3000);
                }, 1000);
            });

        } catch(e){
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('globalMissions',e);
        }
    }
}

castleBuildings = function (ele){
    var $c = jQuery(ele);
    var Matches = true;
    while( $c.find('.upgrade').length < 2 && Matches ){
        var buttons = $c.find('.buildbutton:not(.disabled)');
        //unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('cityBuildings',$c,$c.find('.upgrade').length,buttons.length);
        Matches = false;
        for (len = buttons.length-1; len >= 0 && $c.find('.upgrade').length < 3; len--) {
            jQuery(buttons[len]).click();
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
castleFunctions = function(){
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('castleFunctions');
    // check missions panel, if it exists.
    manualMissions = jQuery('.topbarImageContainer:nth-of-type(7)').length==0;
    // only run these every incrementalCount, or if manualMisssions
    if(incrementalCount==incrementalCounter || manualMissions){
        if(unsafeWindow.silver || unsafeWindow.research || unsafeWindow.missions ){
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('running castleFunctions');
            if( unsafeWindow.research || (unsafeWindow.missions && manualMissions) ){
                unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('running manualMissions || research');
                // open all...
                jQuery(".castleListItem").click();
            } else {
                unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('running silver');
                jQuery(".castleListItem .points:contains('289 Points')").click();
                jQuery(".castleListItem .points:contains('290 Points')").click();
            }
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('castles');

            habitatTimeout = setTimeout(function(){
                jQuery('.habitat').each(habitatFunctions);
            }, 10000);
        }
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
        jQuery('.building-area.library',this).click();
        jQuery('.knowledgeListItem .button:not(.disabled)',this).click();
    }
    closeDialogs();
    // if silver automation and once every incremental counter rounds, and no knowledge to learn.
    if(unsafeWindow.silver && incrementalCount==incrementalCounter && jQuery('.knowledgeListItem .button',this).length==0){
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
            if(silver<20000){
                jQuery('.tradableItems.Keep .marketListItem:last .button',this).click(); //trade for silver
            } else if(copper<30000) {
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


