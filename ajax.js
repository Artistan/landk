
var url = 'https://backend1.lordsandknights.com/XYRALITY/WebObjects/LKWorldServer-US-8.woa/wa/';

var requestUrls = {
    map: 'MapAction/map',
    update: 'SessionAction/update',
    researchKnowledge: 'HabitatAction/researchKnowledge',
    trackableEventStart: 'TrackableEventAction/start',
    trackableEventAck: 'TrackableEventAction/acknowledge',
    trackableEventSkip: 'TrackableEventAction/skip',
    profileActionRanking: 'ProfileAction/showRankingV2',
    profileActionSearch: 'ProfileAction/search',
    profileActionStartVacationMode: 'ProfileAction/startVacationMode',
    profileActionChangeNickname: 'ProfileAction/changeNickname',
    habitatActionUpgradeBuilding: 'HabitatAction/upgradeBuilding',
    habitatActionFinishBuildingUpgrade: 'HabitatAction/finishBuildingUpgrade',
    habitatActionSpeedupBuildingUpgrade: 'HabitatAction/speedupBuildingUpgrade',
    habitatActionBuildUnit: 'HabitatAction/buildUnit',
    habitatActionSpeedupBuildUnit: 'HabitatAction/speedupBuildUnit',
    habitatActionSpeedupBuildAllUnits: 'HabitatAction/speedupBuildAllUnits',
    habitatActionSpeedupBuildAllUnitsOnEveryHabitat: 'HabitatAction/speedupBuildAllUnitsOnEveryHabitat',
    habitatActionFinishBuildUnit: 'HabitatAction/finishBuildUnit',
    habitatActionFinishBuildAllUnits: 'HabitatAction/finishBuildAllUnits',
    habitatActionBuildUnitInHabitatArray: 'HabitatAction/buildUnitInHabitatArray',
    forumActionForumMessageArray: 'ForumAction/forumMessageArray',
    messageActionMessageTitleArray: 'MessageAction/messageTitleArray',
    messageActionReleaseFromMessageArray: 'MessageAction/releaseFromMessageArray',
    discussionActionaddDiscussionEntry: 'DiscussionAction/addDiscussionEntry',
    discussionActionAddDiscussionMembers: 'DiscussionAction/addDiscussionMembers',
    discussionActionDiscussion: 'DiscussionAction/discussion',
    reportActionHabitatReportArray: 'ReportAction/habitatReportArray',
    reportActionSetReportPublished: 'ReportAction/setReportPublished',
    reportActionChangeReportSetup: 'ReportAction/changeReportSetup',
    reportActionDeleteHabitatReportArray: 'ReportAction/deleteHabitatReportArray',
    reportActionDeleteHabitatReport: 'ReportAction/deleteHabitatReport',
    allianceActionSetPermission: 'AllianceAction/setPermission',
    allianceActionChangeAllianceData: 'AllianceAction/changeAllianceData',
    allianceActionDisbandAlliance: 'AllianceAction/disbandAlliance',
    allianceActionLeaveAlliance: 'AllianceAction/leaveAlliance',
    allianceActionCreateAlliance: 'AllianceAction/createAlliance',
    allianceActionAcceptInvitation: 'AllianceAction/acceptInvitation',
    allianceActionDeclineInvitation: 'AllianceAction/declineInvitation',
    allianceActionCancelInvitation: 'AllianceAction/cancelInvitation',
    allianceActionMassMail: 'AllianceAction/massMail',
    discussionActionCreateDiscussion: 'DiscussionAction/createDiscussion',
    allianceActionSetDiplomaticRelation: 'AllianceAction/setDiplomaticRelation',
    allianceSharingActionAcceptSharing: 'AllianceSharingAction/acceptSharing',
    allianceSharingActionRequestSharing: 'AllianceSharingAction/requestSharing',
    allianceSharingActionDeleteSharing: 'AllianceSharingAction/deleteSharing',
    allianceActionClashes: 'AllianceAction/clashes',
    allianceActionShowRankingV2: 'AllianceAction/showRankingV2',
    allianceActionShowRankingByAverage: 'AllianceAction/showRankingByAverage',
    allianceReportActionAllianceReportArray: 'AllianceReportAction/allianceReportArray',
    allianceActionSearch: 'AllianceAction/search',
    forumActionForumThreadArray: 'ForumAction/forumThreadArray',
    forumActionCreateForumThread: 'ForumAction/createForumThread',
    forumActionSetForumThreadClosed: 'ForumAction/setForumThreadClosed',
    forumActionSetForumThreadOpen: 'ForumAction/setForumThreadClosed',
    forumActionDeleteForumThreads: 'ForumAction/deleteForumThreads',
    forumActionDeleteForumMessages: 'ForumAction/deleteForumMessages',
    profileActionPlayerInformation: 'ProfileAction/playerInformation',
    habitatReservationActionMakeInquiry: 'HabitatReservationAction/makeInquiry',
    habitatReservationActionChangeStatusOfEntry: 'HabitatReservationAction/changeStatusOfEntry',
    habitatReservationActionDeleteEntries: 'HabitatReservationAction/deleteEntries',
    allianceActionApplyHabitatReservationSettings: 'AllianceAction/applyHabitatReservationSettings',
    allianceActionAllianceInformation: 'AllianceAction/allianceInformation',
    habitatUpgradeActionConstructFortressCenter: 'HabitatUpgradeAction/constructFortressCenter',
    habitatUpgradeActionSurroundingHabitats: 'HabitatUpgradeAction/surroundingHabitats',
    habitatUpgradeActionConstructFortressExpansion: 'HabitatUpgradeAction/constructFortressExpansion',
    habitatUpgradeActionConstructFortress: 'HabitatUpgradeAction/constructFortress',
    allianceActionPostBattleClash: 'AllianceAction/postBattleClash',
    allianceActionPostTransitClash: 'AllianceAction/postTransitClash',
    habitatActionChangeHabitatName: 'HabitatAction/changeHabitatName',
    habitatActionExecuteMission: 'HabitatAction/executeMission',
    habitatActionExecuteMissions: 'HabitatAction/executeMissions',
    habitatActionSpeedupMission: 'HabitatAction/speedupMission',
    habitatActionSpeedupKnowledgeResearch: 'HabitatAction/speedupKnowledgeResearch',
    habitatActionFinishKnowledgeResearch: 'HabitatAction/finishKnowledgeResearch',
    marketActionTradeResources: 'MarketAction/tradeResources',
    marketActionBuyNobleMetal: 'MarketAction/buyNobleMetal',
    transitActionStartTransit: 'TransitAction/startTransit',
    transitActionDefend: 'TransitAction/startTransit',
    transitActionAttack: 'TransitAction/startTransit',
    transitActionReturnAllUnit: 'TransitAction/returnAllUnit',
    transitActionRecallTroops: 'TransitAction/returnAllUnit',
    transitActionFinishReturningTransit: 'TransitAction/finishReturningTransit',
    transitActionFinishAllReturningTransitsForHabitat: 'TransitAction/finishAllReturningTransitsForHabitat',
    habitatActionActivateBuff: 'HabitatAction/activateBuff',
    spyActionStartSpyingTransit: 'SpyAction/startSpyingTransit',
    allianceActionSendInvitation: 'AllianceAction/sendInvitation',
    habitatActionBuyFreeHabitat: 'HabitatAction/buyFreeHabitat',
    habitatActionExecuteMissionsInHabitatDictionary: 'HabitatAction/executeMissionsInHabitatDictionary',
    habitatActionSpeedupMissionOnHabitat: 'HabitatAction/speedupMissionOnHabitat',
    reportActionReportInformation: 'ReportAction/reportInformation',
    marketActionTradeResourcesForHabitatDictionary: 'MarketAction/tradeResourcesForHabitatDictionary'
};
habitatID = 1;
var formData = {
/*    habitatActionBuyFreeHabitat: {
        habitatID: habitatID,
        paymentAmount: e
    },
    spyActionStartSpyingTransit: {
        sourceHabitatID: habitatID,
        destinationHabitatID: e,
        copperAmount: i
    },
    transitActionRecallTroops: {
        sourceHabitatID: habitatID,
        destinationHabitatID: e,
        transitType: b.TRANSIT_DEFENSE,
        unitDictionary: "{" + $.param(i).replace(/&/g, "; ") + ";}"
    },
    transitActionAttack: {
        sourceHabitatID: habitatID,
        destinationHabitatID: n,
        transitType: r,
        unitDictionary: "{" + $.param(i(a)).replace(/&/g, "; ") + ";}",
        resourceDictionary: "{" + $.param(i(t)).replace(/&/g, "; ") + ";}"
    },
    transitActionDefend: {
        sourceHabitatID: habitatID,
        destinationHabitatID: i,
        transitType: a,
        unitDictionary: t
    },
    transitActionSendResources: {
        sourceHabitatID: habitatID,
        destinationHabitatID: a,
        transitType: n,
        unitDictionary: t,
        resourceDictionary: e
    },
    marketActionTradeResources: {
        habitatID: habitatID,
        wantedResourceID: e,
        resourceDictionary: "{" + $.param(i).replace(/&/g, "; ") + ";}",
        unitDictionary: "{" + $.param(a).replace(/&/g, "; ") + ";}"
    },
    transitActionStartTransit: {
        sourceHabitatID: habitatID,
        destinationHabitatID: e,
        transitType: b.TRANSIT_DEFENSE,
        unitDictionary: "{" + $.param(i).replace(/&/g, "; ") + ";}"
    },
    forumActionSetForumThreadOpen: {
        id: 1,
        closed: "0"
    },
    discussionActionCreateDiscussion: {
        subject: 'subject text',
        content: 'content text',
        receivingPlayerArray: [1,2,3]
    },
    reportActionDeleteHabitatReportArray: {
        idArray: "(1,2,3)"
    },
    discussionActionAddDiscussionMembers: {
        discussionId: 1,
        playerIDArray: "(1,2,3)"
    },
    habitatActionBuildUnit: {
        habitatID: habitatID,
        primaryKey: buildingID,
        paymentGranted: a,
        orderAmount: i
    },*/
    'map': {
        '53570': 'cf21e88ba4dc07bfa2b02ed8770f1403f2ca9dc4',
        mapX: 16171,
        mapY: 16510,
        mapWidth: 15,
        mapHeight: 55,
        PropertyListVersion: 11,
        clientPlatform: 'LKBrowser'
    },
    'update': {
        '53570': 'cf21e88ba4dc07bfa2b02ed8770f1403f2ca9dc4',
        PropertyListVersion:11,
        clientPlatform: 'LKBrowser'
    },
    'upgradeBuilding': {
        '53570': 'cf21e88ba4dc07bfa2b02ed8770f1403f2ca9dc4',
        habitatID:54799,
        primaryKey:1207,
        paymentGranted:true,
        PropertyListVersion:11,
        clientPlatform: 'LKBrowser'
    },
    'researchKnowledge': {
        '53570': 'cf21e88ba4dc07bfa2b02ed8770f1403f2ca9dc4',
        habitatID:52397,
        primaryKey:3,
        PropertyListVersion:11,
        clientPlatform: 'LKBrowser'
    }
};
var habitatData = {
  /* castle */
    0: {
        'buildingsKeyArrayMax': {
            0:11,
            1:1330,
            2:1110,
            3:1010,
            4:1220,
            5:908,
            6:830,
            7:130,
            8:220,
            9:330,
            10:420,
            11:530,
            12:620
        },
        'knowledgeIdArray':{
            0:1,
            1:2,
            2:3,
            3:4,
            4:5,
            5:6,
            6:7,
            7:8,
            8:9,
            9:10,
            10:11,
            11:12,
            12:13,
            13:14,
            14:15,
            15:16,
            16:17,
            17:18,
            18:19,
            19:20,
            20:22
        }
    },
    2: {
        'buildingsKeyArrayMax': {
            0: 1410,
            1: 2630,
            2: 2410,
            3: 2310,
            4: 2530,
            5: 2210,
            6: 2130,
            7: 1530,
            8: 1620,
            9: 1730,
            10: 1820,
            11: 1930,
            12: 2020
        },
        'knowledgeIdArray':{
            0:1,
            1:2,
            2:3,
            3:4,
            4:5,
            5:6,
            6:7,
            7:8,
            8:9,
            9:10,
            10:11,
            11:12,
            12:13,
            13:14,
            14:15,
            15:16,
            16:17,
            17:18,
            18:19,
            19:20,
            20:22,
            21:30,
            22:31,
            23:32,
            24:33,
            25:34,
            26:35,
            27:36,
            28:37,
            29:38,
            30:39,
            31:40,
            32:41,
            33:42,
            34:43,
            35:44,
            36:45,
            37:46
        }
    }
};
var key = 'update';
var dataSet = {};

$.ajax({
    url: url + requestUrls[key],
    type: 'post',
    headers: {
        "Accept" : "application/x-bplist",
        "Content-Type": "application/x-www-form-urlencoded",
        "XYClient-Capabilities": "fortress"
    },
    dataType:'blob',
    data: formData[key],
    cache: false,
    crossDomain: true,
    xhrFields: {
        withCredentials: true
    },
    success: function (data) {
        var e = new FileReader;
        e.addEventListener("loadend", function () {
            var a = e.result;
            var t = BPListParser.parse(a);
            console.log(t);
            dataSet[key] = t;
        });
        e.readAsArrayBuffer(data);
    },
    error: function (xhr, desc, err) {
        console.log(xhr);
        console.log("Desc: " + desc + "\nErr:" + err);
    }
});
/*

var result = $.grep(dataSet.Data.Habitat, function(e){ return (e.mapX==16195 && e.mapY==16522); });



////

var mapSessionKey = window._.storeSession.createKey('map');
*/
