// ==UserScript==
// @name         landk
// @namespace    https://raw.githubusercontent.com/Artistan/landk/master/js.js
// @version      0.1
// @description  make it work.
// @author       CPeterson
// @match        http://browser.lordsandknights.com/v2/game/index.php
// @resource    customCSS http://localhost/landk.css?lksnsss=111
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

runLnK = function() {
    if(jQuery('#jsLnK').length==0){
        unsafeWindow.initJsLnK();
    }
    if(unsafeWindow.runLnKNow){
        checkMissions();
        checkBuildings();
        castleFunctions ();
        console.log('lnk running USE: unsafeWindow.runLnK=false;')
    } else {
        console.log('lnk paused USE: unsafeWindow.runLnK=true;')
    }
    unsafeWindow.timer = setTimeout(runLnK, 60000);
}

unsafeWindow.timer = setTimeout(runLnK,15000);

unsafeWindow.initJsLnK = function(){
    jQuery('body').append('<div id="jsLnK">' +
    '   <a onclick="toggleMiniMap()">ToggleMap</a>' +
    '   <a onclick="toggleSilver ()">toggleSilver</a>' +
    '   <a onclick="toggleBuildings()">ToggleBuildings</a>' +
    '   <a onclick="toggleMissions()">ToggleMissions</a>' +
    '</div>').find('#jsLnK').css('z-index: 888888888; top: 0; position: absolute; bottom: auto;');
}

unsafeWindow.toggleMissions = function(){
    unsafeWindow.missions = !unsafeWindow.missions;
}

checkMissions = function(){
    if(unsafeWindow.missions){
        try{
            // make sure it is closed before we try to open.
            jQuery('.globalMissions .close').click();
            // open missions panel
            jQuery(jQuery('.topbarImageContainer')[6]).click();
            setTimeout(function(){
                // try select all
                jQuery('.globalMissions .selectAllButton').click();
                // execute them!
                jQuery('.globalMissions .execute').click();
                // close
                jQuery('.globalMissions .close').click();
                unsafeWindow.console.log('missions');
            }, 1000);
        } catch(e){
            unsafeWindow.console.log('globalMissions',e);
        }
    }
}

unsafeWindow.toggleMiniMap = function(){
    jQuery('.miniMapContainer').toggle();
}

unsafeWindow.toggleBuildings = function(){
    unsafeWindow.buildings = !unsafeWindow.buildings;
}

checkBuildings = function(){
    if(unsafeWindow.buildings){
        try{
            // make sure it is closed before we try to open.
            jQuery('.buildingList .close').click();
            // open buildings panel
            jQuery(jQuery('.topbarImageContainer')[1]).click();
            setTimeout(function(){
                // try select all
                jQuery('.buildingList .listContentRow').each(function(){ castleBuildings(this) });
                // execute them!
                jQuery('.buildingList .close').click();
                unsafeWindow.console.log('buildings');
            }, 1000);
        } catch(e){
            unsafeWindow.console.log('globalMissions',e);
        }
    }
}

castleBuildings = function (ele){
    var $c = jQuery(ele);
    var Matches = true;
    while( $c.find('.upgrade').length < 2 && Matches ){
        var buttons = $c.find('.buildbutton:not(.disabled)');
        //unsafeWindow.console.log('cityBuildings',$c,$c.find('.upgrade').length,buttons.length);
        Matches = false;
        for (len = buttons.length-1; len >= 0 && $c.find('.upgrade').length < 3; len--) {
            jQuery(buttons[len]).click();
        }
    }
}

toggleSilver  = function(){
    unsafeWindow.silver = !unsafeWindow.silver;
}

checkCastles  = function() {
    try {
        // make sure it is closed before we try to open.
        if (jQuery('.castleList').length == 0) {
            // open castleList panel
            jQuery(jQuery('.topbarImageContainer')[0]).click();
        } else {
            castleFunctions();
        }
    } catch (e) {
        unsafeWindow.console.log('globalMissions', e);
    }
}
castleFunctions = function(){
    if(unsafeWindow.silver){
        jQuery(".castleListItem .points:contains('289 Points')").click();
        jQuery(".castleListItem .points:contains('290 Points')").click();
        unsafeWindow.console.log('castles');

        habitatTimeout = setTimeout(function(){
            jQuery('.habitat').each(habitatFunctions);
        }, 10000);
    }
}
var habitatTimeout=false;
habitatFunctions = function(){
    //do stuff here
    if(unsafeWindow.silver){
        console.log('habitat');

        var wood = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="1"] .resourceAmount',this).html() * 1 - 1000;
        var stone = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="2"] .resourceAmount',this).html() * 1 - 1000;
        var ore = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="3"] .resourceAmount',this).html() * 1 - 1000;
        // check total silver and copper
        var silver = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="6"] .resourceAmount',this).html() * 1;
        var copper = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="5"] .resourceAmount',this).html() * 1;
        var total = wood + stone + ore;
        if(total > 14000){
            unsafeWindow.console.log('total',total);
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
                unsafeWindow.console.log('NO OXEN CARTS');
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
            unsafeWindow.console.log('exchanged');
        }
    }
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






