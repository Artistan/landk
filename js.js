// ==UserScript==
// @name         Lords & Knights
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       CPeterson
// @match        http://browser.lordsandknights.com/v2/game/index.php
// @grant        all
// ==/UserScript==


var runLnK = function() {
    checkMissions();
    setTimeout(runLnK, 60000);
}

setTimeout(runLnK,1000);

jQuery(document).on('DOMContentLoaded','.globalMissions',function(){
    console.log('globalMissions');
})
function checkMissions(){
    try{
        // open missions panel
        jQuery(jQuery('.topbarImageContainer')[6]).click();
        setTimeout(function(){
            // try select all
            jQuery('.globalMissions .selectAllButton').click();
            // execute them!
            jQuery('.globalMissions .execute').click();
            // close
            jQuery('.globalMissions .close').click();
            console.log('missions');
        }, 1000);
    } catch(e){
        console.log('globalMissions',e);
    }
}

function checkBuildings(){
    try{
        // open buildings panel
        jQuery(jQuery('.topbarImageContainer')[1]).click();
        setTimeout(function(){
            // try select all
            jQuery('.buildingList .listContentRow').each(function(){ castleBuildings(this) });
            // execute them!
            jQuery('.buildingList .close').click();
        }, 1000);
    } catch(e){
        console.log('globalMissions',e);
    }
}

function castleBuildings(ele){
    var $c = jQuery(ele);
    var Matches = true;
    while( $c.find('.upgrade').length < 2 && Matches ){
        Matches = false;
        var buttons = $c.find('buildButton:not(.disabled)');
        for (var i = 0, len = buttons.length; i < len; i++) {
            jQuery(buttons[i]).hover();
        }
    }
}











