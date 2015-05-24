// ==UserScript==
// @name         landk
// @namespace    https://raw.githubusercontent.com/Artistan/landk/master/js.js
// @version      0.1
// @description  make it work.
// @author       CPeterson
// @match        http://browser.lordsandknights.com/v2/game/index.php
// @grant        all
// @grant unsafeWindow
// ==/UserScript==

if(typeof unsafeWindow == 'undefined'){
    var unsafeWindow = window;
}
unsafeWindow.runLnK=true;
unsafeWindow.missions=true;
unsafeWindow.buildings=true;
unsafeWindow.silver=true;

var runLnK = function() {
    if(unsafeWindow.runLnK){
        checkMissions();
        checkBuildings();
        checkCastles();
        console.log('lnk running USE: unsafeWindow.runLnK=false;')
    } else {
        console.log('lnk paused USE: unsafeWindow.runLnK=true;')
    }
    timer = setTimeout(runLnK, 60000);
}

var timer = setTimeout(runLnK,1000);

function initJsLnK(){
    jQuery('body').append('<div id="jsLnK">' +
    '   <a onclick="toggleMiniMap()">ToggleMap</a>' +
    '   <a onclick="toggleSilver()">toggleSilver</a>' +
    '   <a onclick="toggleBuildings()">ToggleBuildings</a>' +
    '   <a onclick="toggleMissions()">ToggleMissions</a>' +
    '</div>');
}

function toggleMissions(){
    unsafeWindow.missions = !unsafeWindow.missions;
}

function checkMissions(){
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

function toggleMiniMap(){
    jQuery('.miniMapContainer').hide();
}

function toggleBuildings(){
    unsafeWindow.buildings = !unsafeWindow.buildings;
}

function checkBuildings(){
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

function castleBuildings(ele){
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

function toggleSilver(){
    unsafeWindow.silver = !unsafeWindow.silver;
}

function checkCastles(){
    try{
        // make sure it is closed before we try to open.
        if(jQuery('.castleList').length==0){
            // open castleList panel
            jQuery(jQuery('.topbarImageContainer')[0]).click();
        }
        setTimeout(function(){
            if(typeof unsafeWindow == 'undefined'){
                var unsafeWindow = window;
            }
            // close any active habitat (castle);
            jQuery('.habitat .close').click();

            if(unsafeWindow.silver){
                // try select all
                jQuery(".castleList .castleListItem .points:contains('289 Points')").each(function(){
                    unsafeWindow.console.log('silver');
                    // open this castle view
                    jQuery(this).click();
                });

                setTimeout(function(){
                    // try select all
                    jQuery('.habitat').each(function(){
                        var wood = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="1"] .resourceAmount',this).html() * 1 - 1000;
                        var stone = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="2"] .resourceAmount',this).html() * 1 - 1000;
                        var ore = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="3"] .resourceAmount',this).html() * 1 - 1000;
                        var total = wood + stone + ore;
                        if(total > 6000){
                            unsafeWindow.console.log('total',total);
                            jQuery('.keep',this).click();
                            jQuery('.tradableItems.Keep .marketListItem:last .button',this).click()
                            var carts = Math.ceil(total/2500);
                            var $oxCart = jQuery('.unitElement[data-primary-key="10002"] input',this);
                            if( $oxCart.attr('placeholder')==0 ){
                                unsafeWindow.console.log('NO OXEN CARTS');
                                jQuery('.close',this).click();
                                return false;
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
                        jQuery('.close',this).click();
                    });
                }, 10000);
                unsafeWindow.console.log('castles');
            }
        }, 5000);
    } catch(e){
        unsafeWindow.console.log('globalMissions',e);
    }
}








