// ==UserScript==
// @name         landk
// @namespace    https://raw.githubusercontent.com/Artistan/landk/master/js2.js
// @version      0.3
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
var incrementalCount=6;
var incrementalCounter=5;
var tAr=[]; // test array
var fullyUpgraded = [289,290,1797];
var activeAjax=0;

$( unsafeWindow ).ajaxStart(function() {
    activeAjax++;
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('ajaxStart',activeAjax);
});
$( unsafeWindow ).ajaxStop(function() {
    activeAjax=0;
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('ajaxStop',activeAjax);
});
$( unsafeWindow ).ajaxComplete(function() {
    activeAjax--;
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('ajaxComplete',activeAjax);
});

function ajaxReady(){
    return activeAjax==0;/// true, so continue
}

function closeDialogs(){
    jQuery('.button:contains("Cancel")').click();
    jQuery('.button:contains("Ok")').click();
}

// wait for elements...ΩΩ
//waitForKeyElements ("#atfResults", addCustomSearchResult);


// if not set / false, then
var trueFalseFunc = function(key){
    if(tAr[key] == true && ajaxReady()){
        tAr[key] = false;
    } else {
        tAr[key] = true;
    }
    // return the opposite
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

unsafeWindow.toggleMiniMap = function(){
    jQuery('.miniMapContainer').toggle();
};

unsafeWindow.toggleBuildings = function(){
    unsafeWindow.buildings = !unsafeWindow.buildings;
    jQuery('#auto_buildings').removeClass(unsafeWindow.buildings?'Stopped':'Running').addClass(unsafeWindow.buildings?'Running':'Stopped');
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('unsafeWindow.buildings',unsafeWindow.buildings);
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

unsafeWindow.runLnK = function(force) {
    if(unsafeWindow.clear){
        unsafeWindow.console.clear();
    }
    if(incrementalCounter>incrementalCount){
        incrementalCounter=1;
    }
    incrementalCounter++;
    jQuery('.incrementalCounter').html(incrementalCounter);

    if(unsafeWindow.runLnKNow || force){
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('lnk running USE: unsafeWindow.runLnKNow=false;');
        runHabitats();
    } else {
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('lnk paused USE: unsafeWindow.runLnKNow=true;');
    }
};

function finalizeRun(){
    clearTimeout(unsafeWindow.timer);
    var randomWaitTime = randomIntFromInterval(240000,300000);// 4-5 minutes
    unsafeWindow.timer = setTimeout(unsafeWindow.runLnK, randomWaitTime);// wait 10 minutes.
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('finalizeRun waiting '+(randomWaitTime/60000)+' minutes');
}

function doNothing(){
    return true;
}

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

var runHabitats = function(){
    if(unsafeWindow.missions) {
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('missions');
        $lnkDiv.queue("lnk", openMissions);
        $lnkDiv.queue("lnk", castleMissions);
        $lnkDiv.queue("lnk", clickFortressMissions);
        $lnkDiv.queue("lnk", fortressMissions);
        $lnkDiv.queue("lnk", closeMissions);
    }
    if(unsafeWindow.buildings){
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('buildings');
        $lnkDiv.queue("lnk", openBuildings);
        $lnkDiv.queue("lnk", checkBuildings);
        $lnkDiv.queue("lnk", clickFortressBuildings);
        $lnkDiv.queue("lnk", fortressBuildings);
        $lnkDiv.queue("lnk", closeBuildings);
    }
    $lnkDiv.queue("lnk", checkCastles);
    $lnkDiv.queue("lnk", finalizeRun);

    $lnkDiv.dequeue("lnk");
}

var manualMissions=false;
var openMissions = function(next){
    // make sure it is closed before we try to open.
    jQuery('.globalMissions .close').click();
    var $missionsElem = jQuery('.topbarImageContainer:nth-of-type(7)');
    manualMissions = $missionsElem.length==0;
    if($missionsElem.length>0){
        // (re)open missions panel, if it button exists.
        $missionsElem.click();
    }
    timeoutLoop(1000,2000,function(){return trueFalseFunc('openMissions');},next);
};

var closeMissions = function(next){
    jQuery('.globalMissions').find('.close').click();
    timeoutLoop(1000,2000,function(){ return jQuery('.globalMissions').length==0; },next);
}

var castleMissions = function(next){
    var $gMissions = jQuery('.globalMissions');
    // try select all
    $gMissions.find('.selectAllButton').click();
    // execute them!
    $gMissions.find('.execute').click();
    // wait.
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('castle fortress');
    timeoutLoop(1000,2000,function(){return trueFalseFunc('castleMissions');},next);
}


var clickFortressMissions = function(next){
    var $gMissions = jQuery('.globalMissions');
    // now check fortress
    var $fortMissions = $gMissions.find('.tab.tab-castle-fortess.clicable[data-action="fortress"]');
    if($fortMissions.length){
        $fortMissions.click();
    }

    timeoutLoop(1000,2000,function(){return trueFalseFunc('clickFortressMissions');},next);
}

var fortressMissions = function(next){
    var $gMissions = jQuery('.globalMissions');
    // if fortress tab is active.
    var $fortMissions = $gMissions.find('.tab.tab-castle-fortess.active[data-action="fortress"]');
    if($fortMissions.length){
        // try select all
        $gMissions.find('.selectAllButton').click();
        // execute them!
        $gMissions.find('.execute').click();
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('missions fortress');
        timeoutLoop(1000,2000,function(){return trueFalseFunc('clickFortressMissions');},next);
    } else {
        next();
    }
}

var openBuildings = function(next){
    var $bList = jQuery('.buildingList');
    // make sure it is closed before we try to open.
    $bList.find('.close').click();
    var $buildButton = jQuery('.topbarImageContainer:nth-of-type(2)');
    if($buildButton.length>0) {
        // open buildings panel
        $buildButton.click();
    }
    timeoutLoop(1000,2000,function(){return trueFalseFunc('openBuildings');},next);

}

var checkBuildings = function(next){
    // try select all
    jQuery('.buildingList').find('.listContentRow').each(function(){ castleBuildings(this,'castle') });
    timeoutLoop(1000,2000,function(){return trueFalseFunc('checkBuildings');},next);
};

var clickFortressBuildings = function(next){
    var $bList = jQuery('.buildingList');
    var $fortressList = $bList.find('.tab.tab-castle-fortess.clicable[data-action="fortress"]').click();
    // ajaxReady
    // now check fortress
    if($fortressList.length){
        $fortressList.click();
    } else {
        $bList.find('.close').click();
    }

    timeoutLoop(1000,2000,function(){return trueFalseFunc('clickFortressBuildings');},next);
}

var fortressBuildings = function(next){
    var $gMissions = jQuery('.globalMissions');
    // if fortress tab is active.
    var $fortMissions = $gMissions.find('.tab.tab-castle-fortess.active[data-action="fortress"]');
    if($fortMissions.length){
        // try select all
        $bList.find('.listContentRow').each(function(){ castleBuildings(this,'fortress'); });
        timeoutLoop(1000,2000,function(){return trueFalseFunc('fortressBuildings');},next);
    } else {
        next();
    }

}

var closeBuildings = function(next){
    // execute them!
    jQuery('.buildingList').find('.close').click();
    timeoutLoop(1000,2000,function(){ return jQuery('.buildingList').length==0; },next);
}


var castleBuildings = function (ele,txt){
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('castleBuildings',txt);
    var $c = jQuery(ele);
    if( $c.find('.upgrade').length < 2 && $c.find('.buildbutton:not(.disabled)').length > 0 ){

        var buttons = $c.find('.buildbutton:not(.disabled)');
        // try to click upgrade until at least 2 upgrades are being performed
        for (var len = buttons.length-1; len >= 0 && $c.find('.upgrade').length < 3; len--) {
            jQuery(buttons[len]).each(function(){
                delayedBuildButtonClick(this);
                // ajaxReady
                unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('buildings upgrading ', this);
            });
        }
    }
};

var delayedBuildButtonClick = function(ele){
    timeoutLoop(5000,10000,function(){ return trueFalseFunc('delayedBuildButtonClick'); },function(){jQuery(ele).click();});
}

var checkCastles = function(next) {
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('castles');
    try {
        // make sure it is closed before we try to open.
        if (jQuery('.castleList').length == 0) {
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('will not run without castle list open.');
        } else {
            if(jQuery('.habitat').length>0){
                unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('will not run while a random habitat is open.');
            } else {
                castleFunctions();
            }
        }
    } catch (e) {
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('checkCastles', e);
    }
    next();
};

var castleFunctions = function(){
    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('castleFunctions');

    jQuery(".castleList .castleListItem").each(function(){

        var c_points = jQuery('.points',this).html().replace(/ Points/i,'') * 1;
        var c_name = jQuery('.title',this).html();

        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('---- '+c_name+' ['+c_points+'] ----');
        jQuery(this).click();
        // ajaxReady
        var openlimit = 500000;
        do{
            var habitat = jQuery('.habitat');
            openlimit--;
        } while(habitat.length==0 && openlimit>0);
        if(habitat.length==0){
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('did not open '+c_name+' ['+c_points+']');
        }
        habitat.each(function(){
            // missions
            if(manualMissions && unsafeWindow.missions){
                unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('manualMissions');
                jQuery('.building-area.tavern',this).click();
                if(jQuery('.building-area.tavern',this).length<2){
                    jQuery('.missionListItem .button:not(.disabled)',this).click();
                }
            }
            // research
            if(!(jQuery.inArray( c_points, fullyUpgraded )!=-1) && incrementalCounter==incrementalCount ){
                jQuery('.building-area.library',this).click();// for castles...
                jQuery('.building-area.university',this).click();// for fortresses...
                var research = jQuery('.knowledgeListItem .button:not(.disabled)',this);
                if(unsafeWindow.research && research.length>0){
                    unsafeWindow.debug==false?doNothing():unsafeWindow.console.log('research clicks ['+research.length+']');
                    research.click();
                    // ajaxReady
                }
            }
            // silver
            if(unsafeWindow.silver && (jQuery.inArray( c_points, fullyUpgraded )!=-1) && incrementalCounter==incrementalCount){
                habitatSilverFunctions(this,c_points);
            }
            closeDialogs();
            jQuery('.close',this).click();
        });
    });
};

var habitatSilverFunctions = function(habitat,c_points){
    // check limits
    var silverLimit = 19800;
    var copperLimit = 19800;
    var resourceMinimum = 14000;
    var leaveBehind = 1000; // each
    if(c_points>290){
        // set the fortress limits much higher.
        silverLimit = 117000;
        copperLimit = 117000;
        resourceMinimum = 140000;
        leaveBehind = 20000; // each
    }
    // check resources
    var wood = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="1"] .resourceAmount',habitat).html() * 1 - leaveBehind;
    var stone = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="2"] .resourceAmount',habitat).html() * 1 - leaveBehind;
    var ore = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="3"] .resourceAmount',habitat).html() * 1 - leaveBehind;
    // check total silver and copper
    var silver = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="6"] .resourceAmount',habitat).html() * 1;
    var copper = jQuery('.resourceHeaderTable .resourceElement[data-primary-key="5"] .resourceAmount',habitat).html() * 1;
    var total = wood + stone + ore;
    var log = 'Silver: '+total+' VS min '+resourceMinimum;
    if(total > resourceMinimum){
        jQuery('.keep,.townhall',habitat).click();
        // ajaxReady
        if(silver<silverLimit){
            jQuery('.tradableItems .marketListItem:last .button',habitat).click(); //trade for silver
        } else if(copper<copperLimit) {
            jQuery('.tradableItems .marketListItem:first .button',habitat).click(); //trade for copper
        } else {
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log(log+' -- MAXIMUM');
            jQuery('.close',habitat).click();
            return true;// true so jQuery loop keeps going, kinda like a "break"
        }
        var carts = Math.ceil(total/2500);
        var $oxCart = jQuery('.unitElement[data-primary-key="10002"] input',habitat);
        if( $oxCart.attr('placeholder')==0 ){
            unsafeWindow.debug==false?doNothing():unsafeWindow.console.log(log+' == NO OXEN CARTS');
            jQuery('.close',habitat).click();
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
        jQuery('.resourceContainer input',habitat).each(function(){
            var $t = jQuery(this);
            $t.focus().click().val($t.attr('placeholder')-1000).blur();
        });

        $oxCart
            .val(carts).trigger("change").trigger("blur");

        jQuery('.resourceContainer .resourceElement[data-primary-key="1"] input',habitat)
            .val(wood).trigger("change").trigger("blur");
        jQuery('.resourceContainer .resourceElement[data-primary-key="2"] input',habitat)
            .val(stone).trigger("change").trigger("blur");
        jQuery('.resourceContainer .resourceElement[data-primary-key="3"] input',habitat)
            .val(ore).trigger("change").trigger("blur");

        jQuery('.typeContainer .button',habitat).click().trigger("mousedown touchstart").trigger("mouseup touchend").trigger("click");
        //ajaxWait(30);
        //function(waitTimeIntMin,waitTimeIntMax,truthyFunction,callback,failInt)
        var xval=0;
        do {
            xval = (jQuery('.resourceContainer .resourceElement[data-primary-key="1"] input',habitat).val() * 1);
            xval += (jQuery('.resourceContainer .resourceElement[data-primary-key="2"] input',habitat).val() * 1);
            xval += (jQuery('.resourceContainer .resourceElement[data-primary-key="3"] input',habitat).val() * 1);
            unsafeWindow.console.log();
        } while(xval > 0 && habitat.length);

        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log(log+' exchanged');
        jQuery('body').trigger("mousedown touchstart").trigger("mouseup touchend").trigger('mousemove touchmove').trigger('mousemove').trigger('click');
    } else {
        unsafeWindow.debug==false?doNothing():unsafeWindow.console.log(log+' -- no minimum');
    }
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

$lnkDiv=false;
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
    $lnkDiv = jQuery('#jsLnK');

});
waitForKeyElements(".miniMapContainer", function(){
    unsafeWindow.console.log('.miniMapContainer created');
    $('.miniMapContainer').hide();
});

waitForKeyElements(".bottombar", function(){
    unsafeWindow.console.log('.bottombar created');
    $('.bottombar[style],.bottombar *[style]').removeAttr('style');
});

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}



