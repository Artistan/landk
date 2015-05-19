// ==UserScript==
// @name         Lords & Knights
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       CPeterson
// @match        http://browser.lordsandknights.com/v2/game/index.php
// @grant        all
// @grant unsafeWindow
// ==/UserScript==

if(typeof unsafeWindow == 'undefined'){
    var unsafeWindow = window;
}

var runLnK = function() {
    checkMissions();
    checkBuildings();
    timer = setTimeout(runLnK, 60000);
}

var timer = setTimeout(runLnK,1000);

function checkMissions(){
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

function toggleMiniMap(){
    jQuery('.miniMapContainer').hide();
}

function checkBuildings(){
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
        }, 1000);
    } catch(e){
        unsafeWindow.console.log('globalMissions',e);
    }
}

function castleBuildings(ele){
    var $c = jQuery(ele);
    var Matches = true;
    while( $c.find('.upgrade').length < 2 && Matches ){
        var buttons = $c.find('.buildbutton:not(.disabled)');
        unsafeWindow.console.log('cityBuildings',$c,$c.find('.upgrade').length,buttons.length);
        Matches = false;
        for (var i = 0, len = buttons.length; len > 0 && $c.find('.upgrade').length < 3; len--) {
            jQuery(buttons[i]).click();
            unsafeWindow.console.log('clicked',buttons[i]);
        }
    }
}











