(function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['alliance/templates/_allianceClashItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                                ";
            if (helper = helpers.nextBattle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.nextBattle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n                            ";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                                <span class=\"counter\" data-eta=\"";
            if (helper = helpers.eventDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.eventDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></span> - ";
            if (helper = helpers.eventDateFormated) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.eventDateFormated); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n                            ";
            return buffer;
        }

        buffer += "                <div class=\"alliance-clash-entry pointer\" data-mapx=\""
        + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.affectedHabitatPos)),stack1 == null || stack1 === false ? stack1 : stack1.mapX)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
        + "\" data-mapy=\""
        + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.affectedHabitatPos)),stack1 == null || stack1 === false ? stack1 : stack1.mapY)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
        + "\">\n                    <div class=\"icon left\">\n                        <img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, "attack", "icons", {hash:{},data:data}))
        + "\" />                    \n                    </div>\n                    <div class=\"data-column\">\n                        <div class=\"data-title\">";
        if (helper = helpers.affectedHabitatName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.affectedHabitatName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n                        <div class=\"date-counter\">\n                            ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.nextBattle), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n                        </div>\n                    </div>\n                    <div class=\"icon right\">\n                        <img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.icon), "diplomacy", {hash:{},data:data}))
        + "\" />\n                    </div>\n                    <div class=\"clearfix\"> </div>\n                </div>\n";
        return buffer;
    });
    templates['alliance/templates/_reservationListItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n    <div class=\"icon\">\n        <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.icon), "habitatReservation", {hash:{},data:data}))
            + "\">\n    </div>\n    <div class=\"info\">\n        <div class=\"habitat smart-truncate\">"
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.habitat)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "</div>\n        <div class=\"player smart-truncate\">"
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.player)),stack1 == null || stack1 === false ? stack1 : stack1.nick)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + " \n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasCountdown), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        </div>\n        \n        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.sharedAlliance), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasControls), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n        <div class=\"checkboxWrapper\" style=\"display: none;\">\n            <input type=\"checkbox\" data-id=\"";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n        </div>\n    </div>\n    <div class=\"clearfix\"></div>\n";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                 - <span class=\"countdown\" data-target=\"";
            if (helper = helpers.expirationDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.expirationDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></span>\n            ";
            return buffer;
        }

        function program4(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            <div class=\"allianceReservation\" data-relation-id=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.sharedAlliance)),stack1 == null || stack1 === false ? stack1 : stack1.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\">\n                <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, ((stack1 = (depth0 && depth0.sharedAlliance)),stack1 == null || stack1 === false ? stack1 : stack1.icon), "diplomacy", {hash:{},data:data}))
            + "\" />\n            </div>\n        ";
            return buffer;
        }

        function program6(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"button acceptReservation\" data-id=\"";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "acceptReservationWhite", "habitatReservation", {hash:{},data:data}))
            + "\">\n            </div>\n        ";
            return buffer;
        }

        stack1 = helpers.contentFrame.call(depth0, (depth0 && depth0.frameClass), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n";
        return buffer;
    });
    templates['alliance/templates/allianceClashes'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, self=this, escapeExpression=this.escapeExpression;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                <div class=\"title\">"
            + escapeExpression(helpers.translate.call(depth0, "Ongoing Battles", {hash:{},data:data}))
            + "</div>\n                ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.battle), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }
        function program3(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                    ";
            stack1 = self.invokePartial(partials.allianceClashItem, 'allianceClashItem', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                ";
            return buffer;
        }

        function program5(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program6(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                <div class=\"title\">"
            + escapeExpression(helpers.translate.call(depth0, "Transits", {hash:{},data:data}))
            + "</div>\n                ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.transit), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }

        buffer += "<div id=\"allianceSectionClashes\">\n    <div class=\"ClashesSubViewTabBar\">\n        <div class=\"button switchToAttack\">"
        + escapeExpression(helpers.translate.call(depth0, "Attack", {hash:{},data:data}))
        + "</div>\n        <div class=\"button switchToDefence\">"
        + escapeExpression(helpers.translate.call(depth0, "Defense", {hash:{},data:data}))
        + "</div>\n        <div class=\"clearfix\"> </div>\n    </div>\n    \n    <div class=\"allianceSectionClashesContent\">\n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.battle), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n            \n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.transit), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n        <div class=\"clearfix\"> </div>\n    </div>\n</div>\n";
        return buffer;
    });
    templates['alliance/templates/memberList'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = self.invokePartial(partials.allianceMemberEntry, 'allianceMemberEntry', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }

        buffer += "<div id=\"";
        if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" >\n    <div id=\"allianceMemberTable\">\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.playerTemplateData), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    </div>\n    <div class=\"clearfix\"></div>\n</div>\n";
        return buffer;
    });
    templates['alliance/templates/rankingControls'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


        buffer += "<div id=\"";
        if (helper = helpers.controlsHtmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.controlsHtmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    <div class=\"rankingControls\">\n        <div class=\"search\">\n            <div class=\"input\">\n                <input type=\"text\" id=\"searchBox\">\n            </div>\n            <div class=\"control button icon disabled\" id=\"executeSearch\" >\n                <img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, "search", {hash:{},data:data}))
        + "\">\n            </div>\n            <div class=\"control button points\" data-type=\"points\">"
        + escapeExpression(helpers.translate.call(depth0, "Points", {hash:{},data:data}))
        + "</div>\n            <div class=\"control button avgPoints\" data-type=\"average\">"
        + escapeExpression(helpers.translate.call(depth0, "Average points", {hash:{},data:data}))
        + "</div>\n        </div>\n    </div>\n\n    <div class=\"divider\"></div>\n</div>\n";
        return buffer;
    });
    templates['alliance/templates/reservationAllianceList'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            <div class=\"title\">"
            + escapeExpression(helpers.translate.call(depth0, "Requests", {hash:{},data:data}))
            + "</div>\n            ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.pendingReservationSharing), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                <div class=\"allianse-for-share clickable\" data-allyid=\"";
            if (helper = helpers.allyId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.allyId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                    <div>\n                        <img class=\"allianse-for-share-icon\"  src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.icon), "diplomacy", {hash:{},data:data}))
            + "\" />\n                        <span class=\"share-title name smart-truncate\">";
            if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n                    </div>\n                    <div class=\"clearfix\"> </div>\n                </div>\n            ";
            return buffer;
        }

        function program5(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program6(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            <div class=\"title\">"
            + escapeExpression(helpers.translate.call(depth0, "Active Alliances", {hash:{},data:data}))
            + "</div>\n            ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.acceptedReservationSharing), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program7(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                <div class=\"allianse-for-share clickable\" data-allyid=\"";
            if (helper = helpers.allyId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.allyId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                    <div>\n                        <img class=\"allianse-for-share-icon\"  src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.icon), "diplomacy", {hash:{},data:data}))
            + "\" />\n                        <span class=\"share-title name smart-truncate\">";
            if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n                        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.accepted), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    </div>\n                    <div class=\"clearfix\"> </div>\n                </div>\n            ";
            return buffer;
        }
        function program8(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                        <span class=\"stop-sharing-imideately\" data-id=\"";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"> "
            + escapeExpression(helpers.translate.call(depth0, "Delete", {hash:{},data:data}))
            + "</span>\n                        ";
            return buffer;
        }

        buffer += "<div id=\"allianceHabitatReservationAllianceList\"  class=\"habitatReservationShare list\">\n\n    ";
        stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.pendingReservationSharing)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n   \n    ";
        stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.acceptedReservationSharing)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    \n    <div class=\"clearfix\"> </div>\n</div>\n";
        return buffer;
    });
    templates['alliance/templates/reservationDetail'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, escapeExpression=this.escapeExpression, functionType="function", self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        <div class=\"icon\">\n            <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, ((stack1 = (depth0 && depth0.userReservator)),stack1 == null || stack1 === false ? stack1 : stack1.titleIcon), {hash:{},data:data}))
            + "\">\n        </div>\n        <div class=\"info\">\n            <div class=\"title smart-truncate\">"
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.userReservator)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "</div>\n            <div class=\"points smart-truncate\">"
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.userReservator)),stack1 == null || stack1 === false ? stack1 : stack1.points)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "</div>\n            ";
            stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.userReservator)),stack1 == null || stack1 === false ? stack1 : stack1.allianceIcon), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        </div>\n    ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                <div class=\"diplomacy\">\n                    <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, ((stack1 = (depth0 && depth0.userReservator)),stack1 == null || stack1 === false ? stack1 : stack1.allianceIcon), "diplomacy", {hash:{},data:data}))
            + "\">\n                </div>\n            ";
            return buffer;
        }

        function program4(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n        <div class=\"title wood-hl center\">";
            if (helper = helpers.expirationMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.expirationMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n    ";
            return buffer;
        }

        function program6(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n        <div class=\"title wood-hl center\">";
            if (helper = helpers.reservationDateFormatted) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.reservationDateFormatted); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n    ";
            return buffer;
        }

        function program8(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        <div class=\"icon habitat\">\n            <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "centerHabitat", {hash:{},data:data}))
            + "\">\n        </div>\n        <div class=\"info\">\n            <div class=\"title smart-truncate\">"
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.habitat)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + " ("
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.habitat)),stack1 == null || stack1 === false ? stack1 : stack1.points)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + ")</div>\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.allianceIcon), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        </div>\n    ";
            return buffer;
        }
        function program9(depth0,data) {

            var buffer = "";
            buffer += "\n                <div class=\"diplomacy\">\n                    <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.allianceIcon), "diplomacy", {hash:{},data:data}))
            + "\">\n                </div>\n            ";
            return buffer;
        }

        function program11(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        <div class=\"icon\">\n            <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "buttonPlayer", {hash:{},data:data}))
            + "\">\n        </div>\n        <div class=\"info\">\n            <div class=\"title smart-truncate\">"
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.player)),stack1 == null || stack1 === false ? stack1 : stack1.nick)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + " ("
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.player)),stack1 == null || stack1 === false ? stack1 : stack1.points)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + ")</div>\n        </div>\n    ";
            return buffer;
        }

        function program13(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        <div class=\"icon\">\n            <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "buttonAlliance", {hash:{},data:data}))
            + "\">\n        </div>\n        <div class=\"info\">\n            ";
            stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.frameClassAlliance)),stack1 == null || stack1 === false ? stack1 : stack1.data), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        </div>\n    ";
            return buffer;
        }
        function program14(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                <div class=\"title smart-truncate\">"
            + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.player)),stack1 == null || stack1 === false ? stack1 : stack1.alliance)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + " ("
            + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.player)),stack1 == null || stack1 === false ? stack1 : stack1.alliance)),stack1 == null || stack1 === false ? stack1 : stack1.points)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + ")</div>\n            ";
            return buffer;
        }

        function program16(depth0,data) {

            var buffer = "";
            buffer += "\n                <div class=\"title\">"
            + escapeExpression(helpers.translate.call(depth0, "No Alliance", {hash:{},data:data}))
            + "</div>\n            ";
            return buffer;
        }

        function program18(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        <div class=\"title wood-hl clash-players\">"
            + escapeExpression(helpers.translate.call(depth0, "Already reserved by", {hash:{},data:data}))
            + "</div>\n\n        ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.clashPlayersReserved), {hash:{},inverse:self.noop,fn:self.programWithDepth(19, program19, data, depth0),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program19(depth0,data,depth1) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers.contentFrame.call(depth0, (depth1 && depth1.baseframeClass), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program20(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                <div class=\"icon\">\n                    <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.titleIcon), {hash:{},data:data}))
            + "\">\n                </div>\n                <div class=\"info\">\n                    <div class=\"title smart-truncate\">";
            if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n                    <div class=\"points smart-truncate\">";
            if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n                    ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.allianceIcon), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                </div>\n            ";
            return buffer;
        }
        function program21(depth0,data) {

            var buffer = "";
            buffer += "\n                        <div class=\"diplomacy\">\n                            <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.allianceIcon), "diplomacy", {hash:{},data:data}))
            + "\">\n                        </div>\n                    ";
            return buffer;
        }

        function program23(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        <div class=\"title wood-hl clash-players\">"
            + escapeExpression(helpers.translate.call(depth0, "Already requested by", {hash:{},data:data}))
            + "</div>\n\n        ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.clashPlayersRequested), {hash:{},inverse:self.noop,fn:self.programWithDepth(19, program19, data, depth0),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }

        function program25(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n    <div class=\"controls\" data-id=\"";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n        <div class=\"button accept\"><img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "permissionTrueColored", "browserIcons", {hash:{},data:data}))
            + "\"></div>\n        <div class=\"button decline\"><img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "permissionFalseColored", "browserIcons", {hash:{},data:data}))
            + "\"></div>\n    </div>\n    ";
            return buffer;
        }

        buffer += "<div id=\"habitatReservationDetail\" class=\"habitatReservation\">\n    \n    ";
        stack1 = helpers.contentFrame.call(depth0, (depth0 && depth0.frameClassReservator), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    \n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.expirationMessage), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n\n    ";
        stack1 = helpers.contentFrame.call(depth0, (depth0 && depth0.frameClassHabitat), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers.contentFrame.call(depth0, (depth0 && depth0.frameClassPlayer), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers.contentFrame.call(depth0, (depth0 && depth0.frameClassAlliance), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.clashPlayersReserved), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.clashPlayersRequested), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasControls), {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n";
        return buffer;
    });
    templates['alliance/templates/reservationList'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = self.invokePartial(partials.genericSortbar, 'genericSortbar', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"wood-hl title listMessage\">";
            if (helper = helpers.listMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.listMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n        ";
            return buffer;
        }

        function program5(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"title wood-hl\">";
            if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n            ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program6(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = self.invokePartial(partials.reservationListItem, 'reservationListItem', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }

        buffer += "<div id=\"allianceHabitatReservationList\">\n    ";
        stack1 = helpers['with'].call(depth0, (depth0 && depth0.sortOptions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    <div class=\"reservationList\">\n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.listMessage), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n        ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.reservations), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    </div>\n</div>\n";
        return buffer;
    });
    templates['alliance/templates/reservationSettings'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, self=this, escapeExpression=this.escapeExpression;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.slider.call(depth0, "settings_per_player", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n        <div class=\"divider\"></div>\n\n        ";
            stack1 = helpers.slider.call(depth0, "settings_reservation_period", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n          ";
            stack1 = helpers.translate.call(depth0, "Reservations per Player", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program3(depth0,data) {

            var buffer = "";
            return buffer;
        }

        function program5(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers.translate.call(depth0, "Reservation Period", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }

        buffer += "<div id=\"habitatReservationSettings\" class=\"habitatReservation settings\">\n    ";
        stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    <div class=\"controls\">\n        <div class=\"button save\">"
        + escapeExpression(helpers.translate.call(depth0, "Save", {hash:{},data:data}))
        + "</div>\n    </div>\n    \n    <div class=\"clearfix\"> </div>\n</div>\n";
        return buffer;
    });
    templates['alliance/templates/reservationShare'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.alliances)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            <div class=\"title\">"
            + escapeExpression(helpers.translate.call(depth0, "Ally", {hash:{},data:data}))
            + "</div>\n            ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.alliances), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                <div class=\"allianse-for-share\">\n                    <label for=\"reservationShare-";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" class=\"pointer\">\n                        <img class=\"allianse-for-share-icon\" src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.icon), "diplomacy", {hash:{},data:data}))
            + "\" />\n                        <span class=\"share-title\">";
            if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n                    </label>\n                    <input type=\"checkbox\" id=\"reservationShare-";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-id=";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + " />\n                    <div class=\"clearfix\"> </div>\n                </div>\n            ";
            return buffer;
        }

        function program5(depth0,data) {

            var buffer = "";
            buffer += "\n            "
            + escapeExpression(helpers.translate.call(depth0, "All possible alliances were already selected", {hash:{},data:data}))
            + "\n        ";
            return buffer;
        }

        function program7(depth0,data) {

            var buffer = "";
            buffer += "    \n        <div class=\"button save\">"
            + escapeExpression(helpers.translate.call(depth0, "Share", {hash:{},data:data}))
            + "</div>\n    ";
            return buffer;
        }

        buffer += "<div id=\"habitatReservationShareList\" class=\"habitatReservationShare\">\n    ";
        stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    <div class=\"clearfix\"> </div>\n    \n    <div class=\"controls\">\n        <div class=\"button cancel\">"
        + escapeExpression(helpers.translate.call(depth0, "cancel", {hash:{},data:data}))
        + "</div>\n    ";
        stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.alliances)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    </div>\n    \n    <div class=\"clearfix\"> </div>\n</div>\n";
        return buffer;
    });
    templates['buffs/templates/globalBuffsList'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                <div class=\"buff headerIcon\" data-buff=\"";
            if (helper = helpers.primaryKey) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.primaryKey); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                    <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.identifier), "buffs", {hash:{},data:data}))
            + "\" />\n                </div>\n            ";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"buffContainer\" data-habitat=\"";
            if (helper = helpers.habitatID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitatID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                <div class=\"col left\">\n                    ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.header), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n                    ";
            stack1 = self.invokePartial(partials.resourceTable, 'resourceTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                </div>\n                <div class=\"col right\">\n                    <div class=\"buffsList\">\n                        ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.buffs), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    </div>\n\n                    <div class=\"button selectAllInHabitat\">\n                        <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "selectAllBuffsWhite", {hash:{},data:data}))
            + "\" />\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n            </div>\n        ";
            return buffer;
        }
        function program4(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                        ";
            stack1 = self.invokePartial(partials.contentHeader, 'contentHeader', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    ";
            return buffer;
        }

        function program6(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                            <div class=\"buffListItem\">\n                                ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.running), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n                                <input type=\"checkbox\"\n                                    class=\"checkboxWrapper\"\n                                    data-buff=";
            if (helper = helpers.primaryKey) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.primaryKey); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n                                    ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += " />\n\n                                <div class=\"clearfix\"></div>\n                            </div>\n                        ";
            return buffer;
        }
        function program7(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                                    <div class=\"countdown\" data-complete=\"";
            if (helper = helpers.expirationDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.expirationDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                                        "
            + escapeExpression(helpers.timeToCompletion.call(depth0, (depth0 && depth0.expirationDate), {hash:{},data:data}))
            + "\n                                    </div>\n                                ";
            return buffer;
        }

        function program9(depth0,data) {


            return "checked";
        }

        buffer += "<div class=\"globalBuffsList\" id=\"globalBuffsList\">\n    <div class=\"topButtons\">\n        <div class=\"buffHeader\">\n            ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.headerBuffs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        </div>\n\n        <div class=\"clearfix\"></div>\n        <div class=\"divider\"></div>\n    </div>\n\n    <div class=\"contentBuffsList\">\n        ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.listItems), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    </div>\n</div>\n";
        return buffer;
    });
    templates['buildingList/templates/_buildingListItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = self.invokePartial(partials.contentHeader, 'contentHeader', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                <div class=\"building\" data-habitat=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.habitat)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\">\n                    ";
            stack1 = self.invokePartial(partials.buildingListLevel, 'buildingListLevel', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n                    ";
            stack1 = helpers.unless.call(depth0, (depth0 && depth0.fullyUpgraded), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n                    ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.currentUpgrades), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                </div>\n            ";
            return buffer;
        }
        function program4(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                        <div data-current-building=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.building)),stack1 == null || stack1 === false ? stack1 : stack1.primaryKey)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\"\n                            data-building=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.highestUpgradeBuilding)),stack1 == null || stack1 === false ? stack1 : stack1.primaryKey)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\"\n                            class=\"";
            stack1 = helpers.unless.call(depth0, (depth0 && depth0.isUpgradeable), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += " button buildbutton\">\n                            <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "build", {hash:{},data:data}))
            + "\" />\n                        </div>\n                    ";
            return buffer;
        }
        function program5(depth0,data) {


            return "disabled";
        }

        function program7(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                        <div class=\"upgrade\">\n                            <div class=\"readyTime\" data-complete=\"";
            if (helper = helpers.complete) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.complete); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">"
            + escapeExpression(helpers.timeToCompletion.call(depth0, (depth0 && depth0.complete), {hash:{},data:data}))
            + "</div>\n                            <div class=\"nextlevelInfo\">\n                                <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "levelInfo1", {hash:{},data:data}))
            + "\" />\n                                <div class=\"level\">"
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.buildingTarget)),stack1 == null || stack1 === false ? stack1 : stack1.level)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "</div>\n\n                                <div class=\"button speedup \n                                    "
            + escapeExpression(helpers.getStringIf.call(depth0, "disabled", (data == null || data === false ? data : data.index), "&&", (depth0 && depth0.overHalfDuration), {hash:{},data:data}))
            + "\"\n                                    data-upgrade=\"";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                                    ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.overHalfDuration), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                                </div>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    ";
            return buffer;
        }
        function program8(depth0,data) {

            var buffer = "";
            buffer += "\n                                        <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "finishTick", {hash:{},data:data}))
            + "\" />\n                                    ";
            return buffer;
        }

        function program10(depth0,data) {

            var buffer = "";
            buffer += "\n                                        <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "doubleArrow", {hash:{},data:data}))
            + "\" />\n                                    ";
            return buffer;
        }

        buffer += "<div class=\"listContentRow line\" data-habitat=\"";
        if (helper = helpers.habitatID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.habitatID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    <div class=\"unit size1of4\">\n        ";
        stack1 = helpers['with'].call(depth0, (depth0 && depth0.header), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n        ";
        stack1 = self.invokePartial(partials.resourceTable, 'resourceTable', depth0, helpers, partials, data);
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    </div>\n\n    <div class=\"lastUnit\">\n        <div class=\"buildingTable\">\n            ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.buildings), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        </div>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>\n\n";
        return buffer;
    });
    templates['buildingList/templates/_buildingListLevel'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, escapeExpression=this.escapeExpression, functionType="function";


        buffer += "<div class=\"levelInfoSolo\">\n    <img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, "levelInfo1", {hash:{},data:data}))
        + "\" />\n    <div class=\"level\">"
        + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.building)),stack1 == null || stack1 === false ? stack1 : stack1.level)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
        + "</div>\n</div>\n<div class=\"clearfix\"></div>\n\n";
        return buffer;
    });
    templates['buildingList/templates/buildingList'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = self.invokePartial(partials.buildingListItem, 'buildingListItem', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }

        buffer += "<div class=\"buildingList\" id=\"globalBuildingList\">\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.listItems), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n";
        return buffer;
    });
    templates['buildingList/templates/buildingListTopBarSwitcher'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                <div class=\"tab tab-castle-fortess ";
            if (helper = helpers.extraStyles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.extraStyles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-action=\"";
            if (helper = helpers.action) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.action); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                    <div class=\"tab-content\">\n                        <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.tabIcon), "icons", {hash:{},data:data}))
            + "\">\n                    </div>\n                </div>\n            ";
            return buffer;
        }

        buffer += "\n        <div id=\"globalViewsHabitatTypeBarBuildingList\" class=\"tabbar globalViewsHabitatTypeBar\">\n            <div class=\"inner-side r\"> </div>\n            <div class=\"inner-corner tr\"> </div>\n            \n            ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.castleFortressTabBar), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        </div>\n        <div class=\"clearfix\"> </div>";
        return buffer;
    });
    templates['castleList/templates/castleList'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n  <div class=\"castleListItem\" id=\"";
            if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n    <div class=\"content-header with-icon\">\n      <div class=\"headline\">\n        <div class=\"icon\" data-parent=\"";
            if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"><img src=\"";
            if (helper = helpers.centerIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.centerIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></div>\n        <div class=\"title\">";
            if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n      </div>\n      <div class=\"habitat-details\">\n        <span class=\"points\">";
            if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n        <span class=\"fields\">";
            if (helper = helpers.distance) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.distance); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n      </div>\n      <div class=\"clearfix\"></div>\n    </div>\n\n    ";
            stack1 = self.invokePartial(partials.resourceTable, 'resourceTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            stack1 = self.invokePartial(partials.unitTable, 'unitTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n    <div class=\"clearfix\"></div>\n  </div>\n  ";
            return buffer;
        }

        buffer += "<div class=\"castleHabitatOverview\">\n  ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.habitate), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n  \n</div>\n\n";
        return buffer;
    });
    templates['castleList/templates/castleOverview'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = self.invokePartial(partials.contentHeader, 'contentHeader', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }

        buffer += "<div id=\"";
        if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" class=\"fixedHeader\" style=\"top: 68px;\">\n    <div class=\"castleOverview\">\n        ";
        stack1 = helpers['with'].call(depth0, (depth0 && depth0.header), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n        <div class=\"table-wrapper\">\n            ";
        stack1 = self.invokePartial(partials.resourceTable, 'resourceTable', depth0, helpers, partials, data);
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n            ";
        stack1 = self.invokePartial(partials.unitTable, 'unitTable', depth0, helpers, partials, data);
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        </div>\n    </div>\n\n    <div class=\"clearfix\"></div>\n    <div class=\"divider\"></div>\n</div>\n";
        return buffer;
    });
    templates['event/templates/eventContent'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, functionType="function", self=this;

        function program1(depth0,data) {

            var buffer = "";
            buffer += "\n    <div class=\"event-type-title success\">"
            + escapeExpression(helpers.translate.call(depth0, "Congratulation!", {hash:{},data:data}))
            + "</div>\n";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n    <div class=\"event-type-title ";
            if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">";
            if (helper = helpers.eventTypeTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.eventTypeTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n";
            return buffer;
        }

        function program5(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                "
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.clientInfo)),stack1 == null || stack1 === false ? stack1 : stack1.successTitle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\n            ";
            return buffer;
        }

        function program7(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                "
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.clientInfo)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\n            ";
            return buffer;
        }

        function program9(depth0,data) {


            return " class=\"success\" ";
        }

        function program11(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            <div class=\"event-rewards-section\">\n                ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.rewardsSection), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            </div>\n        ";
            return buffer;
        }
        function program12(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                    <div class=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.rewardsSection)),stack1 == null || stack1 === false ? stack1 : stack1.classes)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\">\n                    ";
            stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.rewardsSection)),stack1 == null || stack1 === false ? stack1 : stack1.blocks), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                        <div class=\"clearfix\"> </div>\n                    </div>\n                ";
            return buffer;
        }
        function program13(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                        <div class=\"reward-column\">\n                            <div class=\"reward-title\">";
            if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n                            <div class=\"reward-icon\"><img src=\"";
            if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" /></div>\n                            <div class=\"reward-amount\">";
            if (helper = helpers.amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + " </div>\n                        </div>\n                    ";
            return buffer;
        }

        function program15(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        <div class=\"event-list-buttons "
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.buttonSection)),stack1 == null || stack1 === false ? stack1 : stack1.classes)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\">\n            ";
            stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.buttonSection)),stack1 == null || stack1 === false ? stack1 : stack1.buttons), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            <div class=\"clearfix\"> </div>\n        </div>\n        ";
            return buffer;
        }
        function program16(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                <div class=\"";
            if (helper = helpers.cloumnClasses) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.cloumnClasses); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" >\n                <div class=\"";
            if (helper = helpers.classes) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.classes); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + " event-button\" ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.link), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += ">\n                    <img class=\"event-button-img\" src=\"";
            if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" />\n                    <p>";
            if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</p>\n                </div>\n                </div>    \n            ";
            return buffer;
        }
        function program17(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += " data-link=\"";
            if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" ";
            return buffer;
        }

        buffer += "<div class=\"event-papyrus-inner-frame\">\n";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.success), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    <div id=\"";
        if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" class=\"event-content-container\">\n\n        <div class=\"event-title\">\n            ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.success), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        </div>\n        \n        <div class=\"event-image-block\">\n            <div ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.success), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += ">\n                <img class=\"event-image-logo\" src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, ((stack1 = (depth0 && depth0.clientInfo)),stack1 == null || stack1 === false ? stack1 : stack1.imageKey), "eventIcons", {hash:{},data:data}))
        + "\" />\n            </div>\n        </div>\n        \n        <div class=\"event-description\">\n            "
        + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.clientInfo)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
        + "\n        </div>\n        \n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.anyRewards), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.buttonSection), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        \n        <div class=\"clearfix\"> </div>\n    </div>\n</div>\n";
        return buffer;
    });
    templates['event/templates/eventList'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "  \n            <div class=\"wood-hl title\">\n                "
            + escapeExpression(helpers.translate.call(depth0, "Attention: If you accept an reward, the current castle will be paid out.", {hash:{},data:data}))
            + "\n            </div>\n\n        ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.habitat), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"castleListItem clickable\" id=\"";
            if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                <div class=\"content-header with-icon\">\n                    <div class=\"headline\">\n                        <div class=\"icon\" data-parent=\"";
            if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"><img src=\"";
            if (helper = helpers.centerIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.centerIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></div>\n                        <div class=\"title\">";
            if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n                    </div>\n                    <div class=\"habitat-details\">\n                        <span class=\"points\">";
            if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n                        <span class=\"fields\">";
            if (helper = helpers.distance) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.distance); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                </div>\n\n                ";
            stack1 = self.invokePartial(partials.resourceTable, 'resourceTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                <div class=\"clearfix\"></div>\n                ";
            stack1 = self.invokePartial(partials.unitTable, 'unitTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n                <div class=\"clearfix\"></div>\n            </div>\n        ";
            return buffer;
        }

        function program5(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            \n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.habitatList), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n            ";
            stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.world), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            \n            ";
            stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.task), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n        ";
            return buffer;
        }
        function program6(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "        \n            ";
            return buffer;
        }
        function program7(depth0,data) {


            return "\n                    habitatList Pickers\n                ";
        }

        function program9(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }
        function program10(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                \n                    <div class=\"profile-events-list\">\n                        <div class=\"headline\">\n                            <div class=\"title smart-truncate\">"
            + escapeExpression(helpers.translate.call(depth0, "Events", {hash:{},data:data}))
            + "</div>\n                        </div>\n                        ";
            stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.world), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    </div>\n                \n                ";
            return buffer;
        }
        function program11(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                            ";
            stack1 = self.invokePartial(partials.eventsListDetails, 'eventsListDetails', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                        ";
            return buffer;
        }

        function program13(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "         \n            ";
            return buffer;
        }
        function program14(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                \n                    <div class=\"profile-events-list\">\n                        <div class=\"headline\">\n                            <div class=\"title smart-truncate\">"
            + escapeExpression(helpers.translate.call(depth0, "Quests", {hash:{},data:data}))
            + "</div>\n                        </div>\n                        ";
            stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.task), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    </div>\n                    \n                ";
            return buffer;
        }

        function program16(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program17(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                \n                    <div class=\"empty-event-list\">\n                        ";
            if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n                    </div>\n                    \n                ";
            return buffer;
        }

        buffer += "<div id=\"";
        if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    <div id=\"";
        if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n\n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.isSuccessAvailable), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n\n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.availbaleEvents), {hash:{},inverse:self.program(16, program16, data),fn:self.program(5, program5, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        <div class=\"clearfix\"></div>\n    </div>\n</div>\n";
        return buffer;
    });
    templates['foreignHabitat/templates/lastRaid'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n    ";
            stack1 = self.invokePartial(partials.transitBox, 'transitBox', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                <div class=\"castleOverviewTable units\">\n                ";
            stack1 = self.invokePartial(partials.unit, 'unit', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                </div>\n            ";
            return buffer;
        }

        function program5(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"timeElement\">\n                <div class=\"eta\">\n                    <div class=\"icon\"><img src=\"";
            if (helper = helpers.timestampIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.timestampIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></div>\n                    <div class=\"detail\">";
            if (helper = helpers.timestamp) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.timestamp); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n                </div>\n                <div class=\"timeDivider\"> – </div>\n                <div class=\"timeleft\">\n                    <div class=\"icon\"><img src=\"";
            if (helper = helpers.timeleftIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.timeleftIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></div>\n                    <div class=\"counter\">";
            if (helper = helpers.timeleft) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.timeleft); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n                </div>\n            </div>\n            ";
            return buffer;
        }

        buffer += "<div id=\"";
        if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    ";
        stack1 = helpers['with'].call(depth0, (depth0 && depth0.destinationHabitat), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers['with'].call(depth0, (depth0 && depth0.sourceHabitat), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    <div class=\"content-frame habitat target\">\n        <div class=\"frame-side t\"></div>\n        <div class=\"frame-side b\"></div>\n        <div class=\"frame-side l\"></div>\n        <div class=\"frame-side r\"></div>\n        <div class=\"frame-corner tl\"></div>\n        <div class=\"frame-corner tr\"></div>\n        <div class=\"frame-corner bl\"></div>\n        <div class=\"frame-corner br\"></div>\n        <div class=\"frame-side t\"></div>\n        <div class=\"frame-side b\"></div>\n        <div class=\"frame-side l\"></div>\n        <div class=\"frame-side r\"></div>\n        <div class=\"frame-content\">\n            <div class=\"frame-corner tl\"></div>\n            <div class=\"frame-corner tr\"></div>\n            <div class=\"frame-corner bl\"></div>\n            <div class=\"frame-corner br\"></div>\n            <div class=\"castleOverviewTable units\">\n            ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.units), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n            <div class=\"clearfix\"></div>\n\n            \n            ";
        stack1 = helpers['with'].call(depth0, (depth0 && depth0.eta), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n            <div class=\"clearfix\"></div>\n            \n            <div class=\"buttons\">\n                <div class=\"button cancel\">"
        + escapeExpression(helpers.translate.call(depth0, "Cancel", {hash:{},data:data}))
        + "</div>\n                <div class=\"button ok\">"
        + escapeExpression(helpers.translate.call(depth0, "ok", {hash:{},data:data}))
        + "</div>\n            </div>\n        </div>\n    </div>\n</div>\n";
        return buffer;
    });
    templates['foreignHabitat/templates/resourceHeaderSmall'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"resource table-element\">\n                <div class=\"table-icon\">\n                    <img src=\"";
            if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" />\n                </div>\n\n                <span class=\"resourceAmount ";
            if (helper = helpers.amountColor) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.amountColor); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">";
            if (helper = helpers.amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n                /\n                <span class=\"resourceMax ";
            if (helper = helpers.maxColor) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.maxColor); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">";
            if (helper = helpers.max) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.max); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n            </div>\n        ";
            return buffer;
        }

        buffer += "<div class=\"resourceHeader\" id=\"";
        if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    <div class=\"headline\">"
        + escapeExpression(helpers.translate.call(depth0, "Offered resources", {hash:{},data:data}))
        + ":</div>\n    <div class=\"resourceContainer res-table\">\n        ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.targetResources), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    </div>\n    <div class=\"clearfix\"></div>\n</div>\n<div class=\"divider\"></div>\n";
        return buffer;
    });
    templates['foreignHabitat/templates/sendStuff'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n        <div class=\"message\">";
            if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n    ";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.syncMessage), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program4(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"syncMessage\">\n                <span class=\"text\">";
            if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n                <span class=\"icon\"><img src=\"";
            if (helper = helpers.durationIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.durationIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></span>\n                <span class=\"time duration\">";
            if (helper = helpers.duration) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.duration); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n                <span class=\"icon arrivalIcon\"><img src=\"";
            if (helper = helpers.arrivalIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.arrivalIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></span>\n                <span class=\"time\">";
            if (helper = helpers.arrivalTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.arrivalTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n            </div>\n        ";
            return buffer;
        }

        function program6(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n        <div class=\"listItem\" data-habitat=\"";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n            <div class=\"content-header with-icon\">\n                <div class=\"headline clickable\">\n                    <div class=\"icon\"><img src=\"";
            if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></div>\n                    <div class=\"title smart-truncate\">";
            if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "</div>\n                </div>\n\n                <div class=\"clearfix\"></div>\n\n                <div class=\"habitat-details\">\n                    <span class=\"points\">";
            if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n                    <span class=\"fields\">";
            if (helper = helpers.distance) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.distance); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n                </div>\n            </div>\n\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.showUnits), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n            <div class=\"clearfix\"></div>\n\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.showResources), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n            ";
            stack1 = self.invokePartial(partials.transitAction, 'transitAction', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n            <div class=\"actionButton ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.hideButton), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\">\n                <div class=\"button action ";
            if (helper = helpers.action) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.action); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                    <img src=\"";
            if (helper = helpers.actionIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.actionIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" />\n                    ";
            if (helper = helpers.actionText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.actionText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n                </div>\n            </div>\n\n            <div class=\"clearfix\"></div>\n        </div>\n    ";
            return buffer;
        }
        function program7(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = self.invokePartial(partials.unitTable, 'unitTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }

        function program9(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = self.invokePartial(partials.resourceTable, 'resourceTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }

        function program11(depth0,data) {


            return "hidden";
        }

        buffer += "<div class=\"sendStuffList\" id=\"";
        if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.message), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.syncMessage), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.habitate), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n";
        return buffer;
    });
    templates['gameWindow/templates/sortBar'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n      <div class=\"icon\"><img src=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.button)),stack1 == null || stack1 === false ? stack1 : stack1.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\"></div>\n      <div class=\"contentText\">"
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.button)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "</div>\n    ";
            return buffer;
        }

        function program3(depth0,data) {


            return "active";
        }

        buffer += "<div id=\"";
        if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    ";
        stack1 = helpers.contentFrame.call(depth0, (depth0 && depth0.resourceSelector), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    <div class=\"control asc ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.sortAscending), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\">\n        <div class=\"arrow\"><img src=\"";
        if (helper = helpers.arrowUpIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.arrowUpIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\"></div>\n    </div>\n    <div class=\"control desc ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.sortDescending), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\">\n        <div class=\"arrow\"><img src=\"";
        if (helper = helpers.arrowDownIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.arrowDownIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\"></div>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>\n";
        return buffer;
    });
    templates['gameWindow/templates/windowBottomBar'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, functionType="function";


        buffer += "<div class=\"bottomButtons\">\n    <div class=\"button selectAllButton\">\n        <img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, "buttonCastleMultiple", {hash:{},data:data}))
        + "\" />\n    </div>\n\n    <div class=\"button execute\">\n        <span class=\"execTotal\">";
        if (helper = helpers.selected) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.selected); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</span>\n        ";
        if (helper = helpers.submitText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.submitText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\n    </div>\n</div>\n";
        return buffer;
    });
    templates['habitat/templates/castleBuildingMap'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n		<polygon class=\"buildingArea ";
            if (helper = helpers.cssid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.cssid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"  points=\"";
            if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-name=\"";
            if (helper = helpers.cssid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.cssid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" > </polygon>\n	";
            return buffer;
        }

        buffer += "\n<svg class=\"sceneMapContainer\" id=\"";
        if (helper = helpers.htmlId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n	";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.buildings), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</svg>";
        return buffer;
    });
    templates['habitat/templates/castleScene'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n	<div class=\"castle-scene-container\">\n		<div class=\"casle-scene-view\">\n		    ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.images), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n		</div>\n		<svg class=\"castle-scene-map\" id=\"";
            if (helper = helpers.htmlId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.htmlId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n			";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.buildings), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n		</svg>\n	</div>\n";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n		        <img ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += " class=\"";
            if (helper = helpers.styles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.styles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" src=\"";
            if (helper = helpers.src) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.src); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" />\n		    ";
            return buffer;
        }
        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += " id=\"";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" ";
            return buffer;
        }

        function program5(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n				<polygon class=\"building-area ";
            if (helper = helpers.cssid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.cssid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"  points=\"";
            if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-name=\"";
            if (helper = helpers.cssid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.cssid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-primary-key=\"";
            if (helper = helpers.primaryKey) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.primaryKey); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" />\n			";
            return buffer;
        }

        buffer += "<div class=\"castle-scene\">\n";
        stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>";
        return buffer;
    });
    templates['habitat/templates/castleToFortressCenter1'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, functionType="function";


        buffer += "<div class=\"lists-row\">\n	<span class=\"icon\"><img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.icon), "icons", {hash:{},data:data}))
        + "\" alt=\"";
        if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" /></span>\n	<span class=\"contentText smart-truncate title with-desctiption ";
        if (helper = helpers.styles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.styles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">";
        if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</span>\n	<span class=\"description\">";
        if (helper = helpers.subMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.subMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</span>\n	<div class=\"clearfix\"></div>\n</div>";
        return buffer;
    });
    templates['habitat/templates/castleToFortressCenter2'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, functionType="function";


        buffer += "<div class=\"lists-row\">\n	<span class=\"icon\"><img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.identifier), "knowledges", {hash:{},data:data}))
        + "\" alt=\"";
        if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" /></span>\n	<span class=\"title ";
        if (helper = helpers.styles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.styles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">"
        + escapeExpression(helpers.translate.call(depth0, "Required", {hash:{},data:data}))
        + ":   ";
        if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</span>\n	<div class=\"clearfix\"></div>\n</div>";
        return buffer;
    });
    templates['habitat/templates/castleToFortressCenter3'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, escapeExpression=this.escapeExpression, functionType="function";


        buffer += "<div class=\"lists-row\">\n	<span class=\"icon\"><img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, ((stack1 = (depth0 && depth0.constructed)),stack1 == null || stack1 === false ? stack1 : stack1.icon), "eventIcons", {hash:{},data:data}))
        + "\" alt=\"\" /></span>\n	<span class=\"title "
        + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.constructed)),stack1 == null || stack1 === false ? stack1 : stack1.styles)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
        + "\">"
        + escapeExpression(helpers.translate.call(depth0, "Required", {hash:{},data:data}))
        + ":   "
        + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.constructed)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
        + "</span>\n		<div class=\"clearfix\"></div>\n</div>";
        return buffer;
    });
    templates['habitat/templates/castleToFortressCenter4'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, functionType="function", self=this;

        function program1(depth0,data) {

            var buffer = "";
            buffer += "\n			<td>\n				<img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (data == null || data === false ? data : data.key), "resources", {hash:{},data:data}))
            + "\" alt=\"\" />\n				<div>"
            + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
            + "</div>\n			</td>\n		";
            return buffer;
        }

        buffer += "<div class=\"lists-row\" id=";
        if (helper = helpers.htmlId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + ">\n	<div class=\"contentText smart-truncate title\">";
        if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n	<div class=\"clearfix\"></div>\n	<table>\n		<tr>\n		";
        stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.build)),stack1 == null || stack1 === false ? stack1 : stack1.resources), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n			<td>\n				<img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, "duration", "icons", {hash:{},data:data}))
        + "\" />\n				<div> ";
        if (helper = helpers.humanDuration) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.humanDuration); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + " </div>\n			</td>\n			<td>\n				<div class=\"button buildbutton ";
        if (helper = helpers.buttonStyles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.buttonStyles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n					<img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, "buildWhite", "icons", {hash:{},data:data}))
        + "\" />\n				</div>\n			</td>\n		</tr>\n	</table>\n</div>";
        return buffer;
    });
    templates['habitat/templates/castleToFortressCenter5'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


        buffer += "<div class=\"lists-row padding-top-std\" id=";
        if (helper = helpers.htmlId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + ">\n	<span class=\"icon\"><img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.icon), "icons", {hash:{},data:data}))
        + "\" alt=\"";
        if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" /></span>\n	<span class=\"contentText smart-truncate title with-desctiption ";
        if (helper = helpers.styles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.styles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">";
        if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</span>\n	<span class=\"description\">\n		<span class=\"counter\" data-until=\"";
        if (helper = helpers.compliteMachine) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.compliteMachine); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\"></span> - ";
        if (helper = helpers.compliteHuman) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.compliteHuman); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\n	</span>\n\n	<div class=\"button buildbutton ";
        if (helper = helpers.buttonStyles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.buttonStyles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" data-speedupcost=\"";
        if (helper = helpers.speedupCost) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.speedupCost); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" data-speedupid=\"";
        if (helper = helpers.speedupId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.speedupId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" data-isfinish=\"";
        if (helper = helpers.isFinish) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.isFinish); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n		<img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.buttonIcon), "icons", {hash:{},data:data}))
        + "\" />\n	</div>\n\n	<div class=\"clearfix\"></div>\n</div>";
        return buffer;
    });
    templates['habitat/templates/castleToFortressExpand'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, functionType="function", self=this;

        function program1(depth0,data) {

            var buffer = "";
            buffer += "\n			<td>\n				<img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (data == null || data === false ? data : data.key), "resources", {hash:{},data:data}))
            + "\" alt=\"\" />\n				<div>"
            + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
            + "</div>\n			</td>\n		";
            return buffer;
        }

        buffer += "<div class=\"lists-row row\">\n	<span class=\"icon\"><img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.icon), "icons", {hash:{},data:data}))
        + "\" alt=\"";
        if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" /></span>\n	<span class=\"contentText smart-truncate title ";
        if (helper = helpers.styles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.styles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">";
        if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</span>\n	<div class=\"clearfix\"></div>\n</div>\n<div class=\"lists-row row\">\n	<div class=\"decription\">\n	";
        if (helper = helpers.descriptionLong) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.descriptionLong); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\n	</div>\n</div>\n<div class=\"lists-row\" id=";
        if (helper = helpers.htmlId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + ">\n	<div class=\"contentText smart-truncate title\">"
        + escapeExpression(helpers.translate.call(depth0, "FortressConstruction", {hash:{},data:data}))
        + "</div>\n	<div class=\"clearfix\"></div>\n	<table>\n		<tr>\n		";
        stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.build)),stack1 == null || stack1 === false ? stack1 : stack1.resources), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n			<td>\n				<img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, "duration", "icons", {hash:{},data:data}))
        + "\" />\n				<div> ";
        if (helper = helpers.humanDuration) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.humanDuration); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + " </div>\n			</td>\n			<td>\n				<div class=\"button buildbutton ";
        if (helper = helpers.buttonStyles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.buttonStyles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n					<img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, "buildWhite", "icons", {hash:{},data:data}))
        + "\" />\n				</div>\n			</td>\n		</tr>\n	</table>\n</div>";
        return buffer;
    });
    templates['habitat/templates/castleToFortressExpand1-progress'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, escapeExpression=this.escapeExpression, functionType="function", self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n<div class=\"lists-row row\">\n	<span class=\"icon\"><img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.icon), "icons", {hash:{},data:data}))
            + "\" alt=\"";
            if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" /></span>\n	<span class=\"contentText smart-truncate title ";
            if (helper = helpers.styles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.styles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">";
            if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n	<div class=\"clearfix\"></div>\n</div>\n<div class=\"lists-row row\">\n	<div class=\"decription\">\n	";
            if (helper = helpers.descriptionLong) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.descriptionLong); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n	</div>\n</div>\n<div class=\"lists-row padding-top-std\">\n	<span class=\"no-icon contentText smart-truncate title with-desctiption ";
            if (helper = helpers.styles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.styles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">";
            if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n	<span class=\"description no-icon\">\n		<span class=\"counter\" data-until=\"";
            if (helper = helpers.compliteMachine) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.compliteMachine); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></span> - ";
            if (helper = helpers.compliteHuman) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.compliteHuman); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n	</span>\n\n	<div class=\"button buildbutton ";
            if (helper = helpers.buttonStyles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.buttonStyles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-speedupcost=\"";
            if (helper = helpers.speedupCost) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.speedupCost); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-speedupid=\"";
            if (helper = helpers.speedupId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.speedupId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-isfinish=\"";
            if (helper = helpers.isFinish) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.isFinish); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n		<img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.buttonIcon), "icons", {hash:{},data:data}))
            + "\" />\n	</div>\n\n	<div class=\"clearfix\"></div>\n</div>\n";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n	<div class=\"wood-hl\">\n		";
            if (helper = helpers.connectedToMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.connectedToMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n	</div>\n";
            return buffer;
        }

        stack1 = helpers.contentFrame.call(depth0, "fortress-update-view first-row", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.connectedToMessage), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        return buffer;
    });
    templates['habitat/templates/castleToFortressExpand1'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, escapeExpression=this.escapeExpression, functionType="function", self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n<div class=\"lists-row row\">\n	<span class=\"icon\"><img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.icon), "icons", {hash:{},data:data}))
            + "\" alt=\"";
            if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" /></span>\n	<span class=\"contentText smart-truncate title ";
            if (helper = helpers.styles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.styles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">";
            if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n	<div class=\"clearfix\"></div>\n</div>\n<div class=\"lists-row row\">\n	<div class=\"decription\">\n	";
            if (helper = helpers.descriptionLong) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.descriptionLong); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n	</div>\n</div>\n<div class=\"lists-row\" id=";
            if (helper = helpers.htmlId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.htmlId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + ">\n	<div class=\"contentText smart-truncate title\">"
            + escapeExpression(helpers.translate.call(depth0, "FortressConstruction", {hash:{},data:data}))
            + "</div>\n	<div class=\"clearfix\"></div>\n	<table>\n		<tr>\n		";
            stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.build)),stack1 == null || stack1 === false ? stack1 : stack1.resources), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n			<td>\n				<img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "duration", "icons", {hash:{},data:data}))
            + "\" />\n				<div> ";
            if (helper = helpers.humanDuration) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.humanDuration); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + " </div>\n			</td>\n			<td>\n				<div class=\"button buildbutton ";
            if (helper = helpers.buttonStyles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.buttonStyles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n					<img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "buildWhite", "icons", {hash:{},data:data}))
            + "\" />\n				</div>\n			</td>\n		</tr>\n	</table>\n</div>\n";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "";
            buffer += "\n			<td>\n				<img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (data == null || data === false ? data : data.key), "resources", {hash:{},data:data}))
            + "\" alt=\"\" />\n				<div>"
            + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
            + "</div>\n			</td>\n		";
            return buffer;
        }

        function program4(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n	<div class=\"wood-hl\">\n		";
            if (helper = helpers.connectedToMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.connectedToMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n	</div>\n";
            return buffer;
        }

        stack1 = helpers.contentFrame.call(depth0, "fortress-update-view first-row", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.connectedToMessage), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        return buffer;
    });
    templates['habitat/templates/castleToFortressExpand2'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n	<div class=\"fortress-update-view\">\n	";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.expanded), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n	</div>\n";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n 		<div class=\"habitat-element-list lists-row clickable center-map--click ";
            if (helper = helpers.extraStyless) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.extraStyless); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-pos-x=\"";
            if (helper = helpers.posX) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.posX); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-pos-y=\"";
            if (helper = helpers.posY) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.posY); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n			<span class=\"icon\"><img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "centerHabitat", "icons", {hash:{},data:data}))
            + "\" alt=\"";
            if (helper = helpers.habitatName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitatName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" /></span>\n			<span class=\"contentText smart-truncate title with-desctiption\">";
            if (helper = helpers.habitatType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitatType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n			<span class=\"description\">";
            if (helper = helpers.habitatName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitatName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n			<div class=\"clearfix\"></div>\n 		</div>\n	";
            return buffer;
        }

        function program4(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n	<div class=\"wood-hl\">\n		";
            if (helper = helpers.extraMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.extraMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n	</div>\n";
            return buffer;
        }

        function program6(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n<div class=\"wood-hl title\">\n	"
            + escapeExpression(helpers.translate.call(depth0, "Extension list", {hash:{},data:data}))
            + "\n</div>\n";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n";
            return buffer;
        }
        function program7(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n	<div class=\"fortress-update-view\">\n	";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.expandingArray), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n	</div>\n";
            return buffer;
        }
        function program8(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n		<div class=\"habitat-element-list lists-row ";
            if (helper = helpers.extraStyless) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.extraStyless); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n	 		<div class=\"clickable center-map--click\" data-pos-x=\"";
            if (helper = helpers.posX) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.posX); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-pos-y=\"";
            if (helper = helpers.posY) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.posY); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n				<span class=\"icon\"><img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "centerHabitat", "icons", {hash:{},data:data}))
            + "\" alt=\"";
            if (helper = helpers.habitatName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitatName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" /></span>\n				<span class=\"contentText smart-truncate title with-desctiption\">";
            if (helper = helpers.habitatName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitatName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n				<span class=\"description\">\n					<span class=\"counter\" data-until=\"";
            if (helper = helpers.compliteMachine) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.compliteMachine); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></span> - ";
            if (helper = helpers.compliteHuman) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.compliteHuman); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n				</span>\n				<div class=\"clearfix\"></div>\n	 		</div>\n	 		<div class=\"habitat-element--button button buildbutton ";
            if (helper = helpers.buttonStyles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.buttonStyles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-habitat-id=";
            if (helper = helpers.habitatId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitatId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + " data-speedupcost=\"";
            if (helper = helpers.speedupCost) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.speedupCost); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-speedupid=\"";
            if (helper = helpers.speedupId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.speedupId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-isfinish=\"";
            if (helper = helpers.isFinish) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.isFinish); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n				<img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.icon), "icons", {hash:{},data:data}))
            + "\" />\n			</div>\n		</div>\n	";
            return buffer;
        }

        function program10(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n<div class=\"wood-hl title\">\n	"
            + escapeExpression(helpers.translate.call(depth0, "FortressExpansion", {hash:{},data:data}))
            + "\n</div>\n";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n";
            return buffer;
        }
        function program11(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n	<div class=\"fortress-update-view\">\n	";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.toExpandArray), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n	</div>\n";
            return buffer;
        }
        function program12(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n		<div class=\"habitat-element-list lists-row ";
            if (helper = helpers.extraStyless) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.extraStyless); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n	 		<div class=\"clickable center-map--click\" data-pos-x=\"";
            if (helper = helpers.posX) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.posX); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-pos-y=\"";
            if (helper = helpers.posY) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.posY); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n				<span class=\"icon\"><img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "centerHabitat", "icons", {hash:{},data:data}))
            + "\" alt=\"";
            if (helper = helpers.habitatName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitatName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" /></span>\n				<span class=\"contentText smart-truncate title with-desctiption\">";
            if (helper = helpers.habitatName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitatName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n				<span class=\"description\">";
            if (helper = helpers.subMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.subMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n				<div class=\"clearfix\"></div>\n	 		</div>\n	 		<div class=\"habitat-element--button button buildbutton ";
            if (helper = helpers.buttonStyles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.buttonStyles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-habitat-id=";
            if (helper = helpers.habitatId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitatId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + ">\n				<img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.icon), "icons", {hash:{},data:data}))
            + "\" />\n			</div>\n		</div>\n	";
            return buffer;
        }

        buffer += "<div id=\"";
        if (helper = helpers.htmlId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n<div class=\"wood-hl title\">\n	"
        + escapeExpression(helpers.translate.call(depth0, "FortressExpansion", {hash:{},data:data}))
        + "\n</div>\n";
        stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.extraMessage), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.expandingArray), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.toExpandArray), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n</div>\n";
        return buffer;
    });
    templates['habitat/templates/castleToFortressExpand3'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, self=this, escapeExpression=this.escapeExpression;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n	";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.build), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n";
            return buffer;
        }
        function program2(depth0,data) {


            return "\n \n	";
        }

        buffer += "<div class=\"wood-hl title\">\n	"
        + escapeExpression(helpers.translate.call(depth0, "FortressExpansion", {hash:{},data:data}))
        + "\n</div>\n";
        stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n";
        return buffer;
    });
    templates['habitat/templates/transitList'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, functionType="function", self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n        <div class=\"transit-silver\">\n            <div class=\"icon\">\n                <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "6", "resources", {hash:{},data:data}))
            + "\" />\n            </div>\n            <div class=\"description\">\n                "
            + escapeExpression(helpers.translate.call(depth0, "Silver", {hash:{},data:data}))
            + " <span class=\"align-right\">";
            if (helper = helpers.transitSilver) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.transitSilver); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        ";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = self.invokePartial(partials.transitDetail, 'transitDetail', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }

        function program5(depth0,data) {

            var buffer = "";
            buffer += "\n            <div class=\"button speedUpAll\">\n                "
            + escapeExpression(helpers.translate.call(depth0, "Accelerate Returning Transit", {hash:{},data:data}))
            + "\n            </div>\n        ";
            return buffer;
        }

        function program7(depth0,data) {

            var buffer = "";
            buffer += "\n        <div class=\"button next paginate wide\" >\n            <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "arrowDown", {hash:{},data:data}))
            + "\">\n        </div>\n    ";
            return buffer;
        }

        buffer += "<div id=\"";
        if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    <div id=\"";
        if (helper = helpers.transitListName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.transitListName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n        <div class=\"title\">";
        if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n        \n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.transitSilver), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        \n        <div class=\"transitList\">\n            ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.transits), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        </div>\n\n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasMultipleSpeedup), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n        <div class=\"clearfix\"></div>\n    </div>\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.showButton), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n";
        return buffer;
    });
    templates['market/templates/market'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n      <div class=\"habitat\" data-habitat=\"";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n          <div class=\"col left\">\n              <div class=\"castleListItem\">\n                  ";
            stack1 = self.invokePartial(partials.contentHeader, 'contentHeader', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                  ";
            stack1 = self.invokePartial(partials.resourceTable, 'resourceTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                  ";
            stack1 = self.invokePartial(partials.unitTable, 'unitTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n                  <div class=\"castleOverviewCheckbox\">\n                      <input type=\"checkbox\" ";
            stack1 = helpers.unless.call(depth0, (depth0 && depth0.selectable), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += " ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.checked), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += ">\n                  </div>\n\n                  <div class=\"clearfix\"></div>\n              </div>\n          </div>\n          <div class=\"col right\">\n              <div class=\"tradeIcon\"><img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "trade", {hash:{},data:data}))
            + "\"></div>\n              <div class=\"tradeUnit\">\n                  <div class=\"icon\"><img src=\"";
            if (helper = helpers.tradeUnitIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.tradeUnitIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></div>\n                  <div class=\"amount\">";
            if (helper = helpers.unitsNeeded) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.unitsNeeded); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n              </div>\n              <div class=\"tradeResource\">\n                  <div class=\"icon\"><img src=\"";
            if (helper = helpers.tradeResourceIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.tradeResourceIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></div>\n                  <div class=\"amount\">";
            if (helper = helpers.resourceGain) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.resourceGain); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n              </div>\n          </div>\n          <div class=\"clearfix\"></div>\n      </div>\n    ";
            return buffer;
        }
        function program2(depth0,data) {


            return "class=\"hidden\"";
        }

        function program4(depth0,data) {


            return "checked=\"true\"";
        }

        buffer += "<div class=\"contentMarketList\" id=\"globalMarket\">\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.habitate), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n\n";
        return buffer;
    });
    templates['messages/forum/templates/forumOverview'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.contentFrame.call(depth0, (depth0 && depth0.context), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"markTableEntryCheckbox\">\n                <input type=\"checkbox\" />\n            </div>\n\n            <div class=\"listHeaderContainer\">\n                <div class=\"icon\">\n                    <img src=\"";
            if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" />\n                </div>\n                <div class=\"title\">";
            if (helper = helpers.topic) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.topic); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n            </div>\n\n            <div class=\"timestamp\">";
            if (helper = helpers.lastMessageDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.lastMessageDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n            <div class=\"owner\">"
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.nick)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "</div>\n            <div class=\"clearfix\"></div>\n        ";
            return buffer;
        }

        buffer += "<div id=\"forumOverview\" class=\"forumTable\">\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.threads), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n";
        return buffer;
    });
    templates['messages/forum/templates/forumThread'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.contentFrame.call(depth0, (depth0 && depth0.context), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"content-header with-icon\">\n                <div class=\"nick title clickable\" data-player=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\">\n                    <div class=\"icon\">\n                        <img src=\"";
            if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" />\n                    </div>\n\n                    <div class=\"content smart-truncate\">";
            stack1 = ((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.nick)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "</div>\n                </div>\n\n                <div class=\"timestamp detail\">";
            if (helper = helpers.creationDate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.creationDate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n                <div class=\"clearfix\"></div>\n            </div>\n\n            <div class=\"markTableEntryCheckbox\">\n                <input type=\"checkbox\" />\n            </div>\n\n            <div class=\"message\">";
            stack1 = helpers.formattedText.call(depth0, (depth0 && depth0.content), {hash:{},data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "</div>\n            <div class=\"clearfix\"></div>\n        ";
            return buffer;
        }

        buffer += "<div id=\"forumThread\">\n    <div class=\"wood-hl title\">";
        if (helper = helpers.topic) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.topic); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.posts), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n";
        return buffer;
    });
    templates['messages/mail/templates/mailDiscussion'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, functionType="function", self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.contentFrame.call(depth0, (depth0 && depth0.subscriberContext), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"title\">"
            + escapeExpression(helpers.translate.call(depth0, "Members", {hash:{},data:data}))
            + "</div>\n            <div class=\"counter\">";
            if (helper = helpers.totalMembers) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.totalMembers); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n        ";
            return buffer;
        }

        function program4(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.contentFrame.call(depth0, (depth0 && depth0.entryContext), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program5(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.header), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n            <div class=\"message\">\n                ";
            stack1 = helpers.formattedText.call(depth0, (depth0 && depth0.message), {hash:{},data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            </div>\n        ";
            return buffer;
        }
        function program6(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = self.invokePartial(partials.contentHeader, 'contentHeader', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }

        function program8(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.answerForm), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program9(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.answerForm), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program10(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = self.invokePartial(partials.newMessageForm, 'newMessageForm', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }

        buffer += "<div id=\"discussionWrapper\">\n    <div class=\"wood-hl title\">";
        if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.totalMembers), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.entries), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers.unless.call(depth0, (depth0 && depth0.systemMessage), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n";
        return buffer;
    });
    templates['messages/mail/templates/mailOverview'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, functionType="function", self=this;

        function program1(depth0,data) {

            var buffer = "";
            buffer += "\n        <div class=\"title wood-hl\">"
            + escapeExpression(helpers.translate.call(depth0, "There are no messages.", {hash:{},data:data}))
            + "</div>\n    ";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n        <div class=\"mailFixedFrame systemMessage "
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.frameParams)),stack1 == null || stack1 === false ? stack1 : stack1.styles)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\" data=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.frameParams)),stack1 == null || stack1 === false ? stack1 : stack1.data)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\">\n            <div class=\"checkboxWrapper\"><input type=\"checkbox\"></div>\n            <div class=\"icon\"><img src=\"";
            if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></div>\n            <div class=\"title\">";
            if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n            <div class=\"timestamp\">";
            if (helper = helpers.timestamp) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.timestamp); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n            <div class=\"clearfix\"></div>\n        </div>\n    ";
            return buffer;
        }

        function program5(depth0,data) {


            return "<div class=\"frame-hr\"></div>";
        }

        function program7(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n        <div class=\"mailFixedFrame discussion "
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.frameParams)),stack1 == null || stack1 === false ? stack1 : stack1.styles)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\" data=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.frameParams)),stack1 == null || stack1 === false ? stack1 : stack1.data)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\">\n            <div class=\"checkboxWrapper\"><input type=\"checkbox\"></div>\n            <div class=\"icon\"><img src=\"";
            if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></div>\n            <div class=\"title\">";
            if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n            <div class=\"timestamp\">";
            if (helper = helpers.timestamp) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.timestamp); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n            <div class=\"clearfix\"></div>\n        </div>\n    ";
            return buffer;
        }

        buffer += "<div class=\"mailtable contentCurrentView\" id=\"";
        if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.noMessages), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.systemMessages), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.systemMessages), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.discussions), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n";
        return buffer;
    });
    templates['messages/mail/templates/manageMembers'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.contentFrame.call(depth0, (depth0 && depth0.context), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"col permission\">\n                ";
            if (helper = helpers.permissionIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.permissionIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            </div>\n            <div class=\"col nick smart-truncate\">";
            if (helper = helpers.nick) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.nick); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n            <div class=\"col points\">";
            if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n            <div class=\"checkboxWrapper\">\n                <input type=\"checkbox\" data-id=\"";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n            </div>\n            <div class=\"clearfix\"></div>\n        ";
            return buffer;
        }

        buffer += "<div id=\"mailManageMembersList\">\n    <div class=\"wood-hl title\">";
        if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.members), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n\n";
        return buffer;
    });
    templates['messages/mail/templates/memberList'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.contentFrame.call(depth0, (depth0 && depth0.context), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"col permission\">\n                ";
            if (helper = helpers.permissionIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.permissionIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            </div>\n            <div class=\"col nick smart-truncate\">";
            if (helper = helpers.nick) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.nick); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n            <div class=\"col points\">";
            if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n            <div class=\"clearfix\"></div>\n        ";
            return buffer;
        }

        buffer += "<div id=\"mailMemberList\">\n    <div class=\"wood-hl title\">";
        if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.members), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n";
        return buffer;
    });
    templates['messages/mail/templates/newMessageForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, functionType="function", self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.subject), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n        <textarea\n            rows=\"5\"\n            cols=\"30\"></textarea>\n\n        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.messageMaxLength), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n        <div class=\"errors\"></div>\n\n        <div class=\"button reply\">"
            + escapeExpression(helpers.translate.call(depth0, "Reply", {hash:{},data:data}))
            + "</div>\n        <div class=\"button paste\">"
            + escapeExpression(helpers.translate.call(depth0, "paste_link", {hash:{},data:data}))
            + "</div>\n    ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <input type=\"text\" name=\"subject\" />\n            <p class=\"limit subject\">\n                "
            + escapeExpression(helpers.translate.call(depth0, "Subject", {hash:{},data:data}))
            + "\n                <span class=\"current\">0</span>\n                /\n                <span class=\"max\">";
            if (helper = helpers.subjectMaxLength) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.subjectMaxLength); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n            </p>\n        ";
            return buffer;
        }

        function program4(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <p class=\"limit message\">\n                "
            + escapeExpression(helpers.translate.call(depth0, "Message", {hash:{},data:data}))
            + "\n                <span class=\"current\">0</span>\n                /\n                <span class=\"max\">";
            if (helper = helpers.messageMaxLength) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.messageMaxLength); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n            </p>\n        ";
            return buffer;
        }

        buffer += "<div class=\"replyForm\" id=\"";
        if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" data-discussion=\"";
        if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    ";
        stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n";
        return buffer;
    });
    templates['messages/reports/templates/reportDetail'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, self=this, escapeExpression=this.escapeExpression, functionType="function";

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = self.invokePartial(partials.reportPaginationHeader, 'reportPaginationHeader', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.header), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n        ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.habitat), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.sourceHabitat), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.destinationHabitat), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n        <div class=\"reportwhathappend\">\n            <p>"
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.reportInfo)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "</p>\n        </div>\n\n        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.copperAmount), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program4(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = self.invokePartial(partials.contentHeader, 'contentHeader', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }

        function program6(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = self.invokePartial(partials.reportHabitat, 'reportHabitat', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }

        function program8(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.sourceHabitat), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program9(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = self.invokePartial(partials.reportHabitat, 'reportHabitat', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }

        function program11(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.destinationHabitat), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }

        function program13(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"copperSpent\">\n                <div class=\"text\">"
            + escapeExpression(helpers.translate.call(depth0, "Cost paid for spy", {hash:{},data:data}))
            + "</div>\n                <div class=\"resources\">\n                    <div class=\"resourceIcon\">\n                        <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "5", "resources", {hash:{},data:data}))
            + "\" />\n                    </div>\n                    <div class=\"details\">";
            if (helper = helpers.copperAmount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.copperAmount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n                </div>\n            </div>\n        ";
            return buffer;
        }

        function program15(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program16(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.resourceHeader), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.resources), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program17(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = self.invokePartial(partials.contentHeader, 'contentHeader', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }

        function program19(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = self.invokePartial(partials.resourceTable, 'resourceTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }

        function program21(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program22(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.buildingHeader), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n            <div class=\"buildingContainer\">\n                ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.buildings), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            </div>\n        ";
            return buffer;
        }
        function program23(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                    ";
            stack1 = self.invokePartial(partials.reportBuilding, 'reportBuilding', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                ";
            return buffer;
        }

        function program25(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program26(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.knowledgeHeader), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n            ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.knowledge), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program27(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                <div class=\"enableItem\">\n                    ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon), {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n                    <div class=\"details\">";
            if (helper = helpers.headline) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.headline); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n                </div>\n            ";
            return buffer;
        }
        function program28(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                        <img src=\"";
            if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" />\n                    ";
            return buffer;
        }

        function program30(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        <div class=\"wood-hl\">"
            + escapeExpression(helpers.translate.call(depth0, "Units", {hash:{},data:data}))
            + "</div>\n        ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program31(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers['with'].call(depth0, ((stack1 = (depth0 && depth0.units)),stack1 == null || stack1 === false ? stack1 : stack1.header), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.units), {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }
        function program32(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = self.invokePartial(partials.unitTable, 'unitTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }

        function program34(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program35(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers['with'].call(depth0, ((stack1 = (depth0 && depth0.unitsLoss)),stack1 == null || stack1 === false ? stack1 : stack1.header), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.unitsLoss), {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }

        function program37(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.battlePartyDictionary)),stack1 == null || stack1 === false ? stack1 : stack1.parties), {hash:{},inverse:self.noop,fn:self.program(38, program38, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program38(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.partyTitle), {hash:{},inverse:self.noop,fn:self.program(39, program39, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.survivors), {hash:{},inverse:self.noop,fn:self.program(41, program41, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.losses), {hash:{},inverse:self.noop,fn:self.program(47, program47, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n        ";
            return buffer;
        }
        function program39(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                <div class=\"wood-hl\">";
            if (helper = helpers.partyTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.partyTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n            ";
            return buffer;
        }

        function program41(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(42, program42, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }
        function program42(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                    ";
            stack1 = helpers['with'].call(depth0, ((stack1 = (depth0 && depth0.survivors)),stack1 == null || stack1 === false ? stack1 : stack1.header), {hash:{},inverse:self.noop,fn:self.program(43, program43, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n                    ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.survivors), {hash:{},inverse:self.noop,fn:self.program(45, program45, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                ";
            return buffer;
        }
        function program43(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                        ";
            stack1 = self.invokePartial(partials.contentHeader, 'contentHeader', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    ";
            return buffer;
        }

        function program45(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                        ";
            stack1 = self.invokePartial(partials.unitTable, 'unitTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    ";
            return buffer;
        }

        function program47(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(48, program48, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }
        function program48(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                    ";
            stack1 = helpers['with'].call(depth0, ((stack1 = (depth0 && depth0.losses)),stack1 == null || stack1 === false ? stack1 : stack1.header), {hash:{},inverse:self.noop,fn:self.program(43, program43, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n                    ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.losses), {hash:{},inverse:self.noop,fn:self.program(45, program45, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                ";
            return buffer;
        }

        function program50(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        <div class=\"wood-hl\">"
            + escapeExpression(helpers.translate.call(depth0, "Defending troops", {hash:{},data:data}))
            + "</div>\n\n        ";
            stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.defenderUnitDictionary)),stack1 == null || stack1 === false ? stack1 : stack1.parties), {hash:{},inverse:self.noop,fn:self.program(51, program51, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program51(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.survivors), {hash:{},inverse:self.noop,fn:self.program(41, program41, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.losses), {hash:{},inverse:self.noop,fn:self.program(47, program47, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n        ";
            return buffer;
        }

        function program53(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(54, program54, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program54(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.silverHeader), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n            ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.silverAmount), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }

        function program56(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n        <div class=\"buttonList\">\n            <div data-id=\"";
            if (helper = helpers.threadID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.threadID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-published=\"";
            if (helper = helpers.published) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.published); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" class=\"button publishbutton\">\n                "
            + escapeExpression(helpers.translate.call(depth0, "Publish report", {hash:{},data:data}))
            + "\n            </div>\n\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.published), {hash:{},inverse:self.noop,fn:self.program(57, program57, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        </div>\n\n        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.facebook), {hash:{},inverse:self.noop,fn:self.program(59, program59, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program57(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                <div class=\"isPublished\">\n                    <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "permissionTrueColored", "browserIcons", {hash:{},data:data}))
            + "\" />\n                </div>\n\n                <div data-id=\"";
            if (helper = helpers.threadID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.threadID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-habitat=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.habitat)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\" class=\"button copy\">\n                    <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "pasteBoardReportIconWhite", "icons", {hash:{},data:data}))
            + "\" />\n                </div>\n            ";
            return buffer;
        }

        function program59(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            <a href=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.facebook)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\" target=\"_blank\" class=\"facebook icon\">\n                <img src=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.facebook)),stack1 == null || stack1 === false ? stack1 : stack1.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\" alt=\"Facebook\" />\n            </a>\n        ";
            return buffer;
        }

        buffer += "<div class=\"report detail\" id=\"reportDetail\">\n    ";
        stack1 = helpers['with'].call(depth0, (depth0 && depth0.paginationInfo), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.resourceHeader), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.buildings), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.knowledge), {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.units), {hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.unitsLoss), {hash:{},inverse:self.noop,fn:self.program(34, program34, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.battlePartyDictionary), {hash:{},inverse:self.noop,fn:self.program(37, program37, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.defenderUnitDictionary), {hash:{},inverse:self.noop,fn:self.program(50, program50, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.silverAmount), {hash:{},inverse:self.noop,fn:self.program(53, program53, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers.unless.call(depth0, (depth0 && depth0.foreignReport), {hash:{},inverse:self.noop,fn:self.program(56, program56, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n";
        return buffer;
    });
    templates['messages/reports/templates/reportOverview'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n        <div class=\"wood-hl reportTableParagraph\">";
            if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n\n        ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.reports), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"reportOverviewFixedFrame "
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.frameParams)),stack1 == null || stack1 === false ? stack1 : stack1.styles)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\" data=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.frameParams)),stack1 == null || stack1 === false ? stack1 : stack1.data)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\" >\n                <div class=\"icon\"><img src=\"";
            if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></div>\n                <div class=\"timestamp\">";
            if (helper = helpers.timestamp) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.timestamp); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n                <div class=\"title smart-truncate\">";
            if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n                <div class=\"habitat\">";
            if (helper = helpers.habitat) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitat); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "</div>\n                <div class=\"markTableEntryCheckbox\"><input type=\"checkbox\"></div>\n                <div class=\"clearfix\"></div>\n            </div>\n        ";
            return buffer;
        }

        buffer += "<div class=\"reportstable contentCurrentView\" id=\"";
        if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.days), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n";
        return buffer;
    });
    templates['missions/templates/missionList'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        <div id=\"globalViewsHabitatTypeBar\" class=\"tabbar\">\n            <div class=\"inner-side r\"> </div>\n            <div class=\"inner-corner tr\"> </div>\n            \n            ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.castleFortressTabBar), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        </div>\n        ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                <div class=\"tab tab-castle-fortess ";
            if (helper = helpers.extraStyles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.extraStyles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" data-action=\"";
            if (helper = helpers.action) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.action); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                    <div class=\"tab-content\">\n                        <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.tabIcon), "icons", {hash:{},data:data}))
            + "\">\n                    </div>\n                </div>\n            ";
            return buffer;
        }

        function program4(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                <div class=\"mission headerIcon\" data-mission=\"";
            if (helper = helpers.primaryKey) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.primaryKey); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                    <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.identifier), "missions", {hash:{},data:data}))
            + "\" />\n                </div>\n            ";
            return buffer;
        }

        function program6(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"missionContainer\" data-habitat=\"";
            if (helper = helpers.habitatID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitatID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                <div class=\"col left\">\n                    ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.header), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n                    ";
            stack1 = self.invokePartial(partials.resourceTable, 'resourceTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                </div>\n                <div class=\"col right\">\n                    <div class=\"missionList\">\n                        ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.missions), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    </div>\n\n                    <div class=\"row-buttons\">\n                        ";
            stack1 = helpers.unless.call(depth0, (depth0 && depth0.allMissionsActive), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n                        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.speedUpRowPossible), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n            </div>\n        ";
            return buffer;
        }
        function program7(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                        ";
            stack1 = self.invokePartial(partials.contentHeader, 'contentHeader', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    ";
            return buffer;
        }

        function program9(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                            <div class=\"missionListItem\">\n                                ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.running), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                                <div class=\"clearfix\"></div>\n                            </div>\n                        ";
            return buffer;
        }
        function program10(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                                    <div class=\"countdown\" data-complete=\"";
            if (helper = helpers.complete) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.complete); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                                        "
            + escapeExpression(helpers.timeToCompletion.call(depth0, (depth0 && depth0.complete), {hash:{},data:data}))
            + "\n                                    </div>\n                                ";
            return buffer;
        }

        function program12(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                                    <input type=\"checkbox\"\n                                        class=\"checkboxWrapper\"\n                                        data-mission=";
            if (helper = helpers.primaryKey) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.primaryKey); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n                                        ";
            stack1 = helpers.unless.call(depth0, (depth0 && depth0.executable), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                                        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += " />\n                                ";
            return buffer;
        }
        function program13(depth0,data) {


            return "style=\"display: none\"";
        }

        function program15(depth0,data) {


            return "checked";
        }

        function program17(depth0,data) {

            var buffer = "";
            buffer += "\n                            <div class=\"button selectAllInHabitat\">\n                                <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "missionMultiple", {hash:{},data:data}))
            + "\" />\n                            </div>\n                        ";
            return buffer;
        }

        function program19(depth0,data) {

            var buffer = "";
            buffer += "\n                            <div class=\"button speedUpAll\">\n                                <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "missionSpeedup", {hash:{},data:data}))
            + "\" />\n                            </div>\n                        ";
            return buffer;
        }

        buffer += "<div class=\"missionList\" id=\"globalMissionList\">\n    <div class=\"topButtons\">\n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.castleFortressTabBar), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n        <div class=\"missionHeader\">\n\n            ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.headerMissions), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        </div>\n\n        <div class=\"clearfix\"></div>\n        <div class=\"divider vertical\"></div>\n    </div>\n\n    <div class=\"contentMissionList\">\n        ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.listItems), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    </div>\n</div>\n";
        return buffer;
    });
    templates['partials/events/_eventsList'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, functionType="function", self=this;

        function program1(depth0,data) {

            var buffer = "";
            buffer += "\n        <div class=\"event-details-successIcon\">\n             <img class=\"event-icon\" src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "successIconList", "eventIcons", {hash:{},data:data}))
            + "\">\n        </div>\n        ";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                    <span class=\"event-counter\" title=\"";
            if (helper = helpers.playerDeadlineFormated) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.playerDeadlineFormated); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"> - ";
            if (helper = helpers.playerDeadlineCountDown) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.playerDeadlineCountDown); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</span>\n                ";
            return buffer;
        }

        buffer += "<div class=\"tablerow eventEntry clickable\">\n    <div class=\"rowInfo\" data-id=\"";
        if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n        <div class=\"event-details-icon\">\n             <img class=\"event-icon\" src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.type), "eventIcons", {hash:{},data:data}))
        + "\">\n        </div>\n        \n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.success), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        \n        <div class=\"event-details-description\">\n            <div class=\"event-title\">"
        + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.clientInfo)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
        + "</div>\n            <div>\n                <span class=\"event-remain\">";
        if (helper = helpers.totalDone) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.totalDone); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + " "
        + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.clientInfo)),stack1 == null || stack1 === false ? stack1 : stack1.onProgressLocKey)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
        + "</span>\n                ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.playerDeadlineCountDown), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n            </div>\n        </div>\n        <div class=\"clearfix\"></div>\n        </div>    \n</div>\n";
        return buffer;
    });
    templates['partials/forms/_inputWithMax'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {


            return "disabled=\"true\" ";
        }

        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "data-habitat=\"";
            if (helper = helpers.habitatID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitatID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"";
            return buffer;
        }

        function program5(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "data-primary-key=\"";
            if (helper = helpers.primaryKey) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.primaryKey); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"";
            return buffer;
        }

        buffer += "<div class=\"maxInput\">\n    <div class=\"smalltextbox\">\n        <input type=\"text\" ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.disabled), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.habitatID), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += " ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.primaryKey), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += " placeholder=\"";
        if (helper = helpers.max) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.max); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" />\n    </div>\n    <div class=\"button maxButton\" data-max=\"";
        if (helper = helpers.max) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.max); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n        <img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, "maximum", {hash:{},data:data}))
        + "\" />\n    </div>\n</div>\n";
        return buffer;
    });
    templates['partials/forms/_recruitButton'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

        function program1(depth0,data) {


            return " disabled";
        }

        buffer += "<div class=\"recruitButton button";
        stack1 = helpers.unless.call(depth0, (depth0 && depth0.recruitable), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\" data-unit=\"";
        if (helper = helpers.unitID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.unitID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    <img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, "recruit", {hash:{},data:data}))
        + "\">\n</div>\n";
        return buffer;
    });
    templates['partials/habitat/_transit'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"button sync\" data-id=\"";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                <img src=\"";
            if (helper = helpers.syncIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.syncIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" />\n            </div>\n        ";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"button speedUpTransit\" data-id=\"";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                <img src=\"";
            if (helper = helpers.speedUpIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.speedUpIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" />\n            </div>\n        ";
            return buffer;
        }

        buffer += "<div class=\"tablerow transitrow clickable\">\n    <div class=\"rowInfo\" data-id=\"";
        if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.syncTransit), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.speedUpTransit), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        <div class=\"icon\">\n            <img src=\"";
        if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" />\n        </div>\n        <div class=\"names\">\n            ";
        if (helper = helpers.sourceName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.sourceName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += " -> ";
        if (helper = helpers.destName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.destName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        </div>\n\n        <div class=\"timeleft\">\n            <div class=\"caption\">";
        if (helper = helpers.formattedETA) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.formattedETA); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n            <div class=\"dash\"> &mdash; </div>\n            <div class=\"counter\" data-eta=\"";
        if (helper = helpers.destinationETA) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.destinationETA); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">";
        if (helper = helpers.countDown) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.countDown); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n        </div>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>\n";
        return buffer;
    });
    templates['partials/rankings/_allianceEntry'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

        function program1(depth0,data) {


            return "clickable";
        }

        function program3(depth0,data) {


            return "owner";
        }

        buffer += "<div class=\"tablerow\">\n    <div class=\"rowInfo ";
        stack1 = helpers.unless.call(depth0, (depth0 && depth0.own), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += " ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.own), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\" data-id=\"";
        if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n        <div class=\"col rank\">";
        if (helper = helpers.rank) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.rank); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n        <div class=\"col relation\"><img src=\"";
        if (helper = helpers.relationshipIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.relationshipIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\"></div>\n        <div class=\"col name smart-truncate\">";
        if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n        <div class=\"col points\">";
        if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>\n";
        return buffer;
    });
    templates['partials/rankings/_allianceMemberEntry'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {


            return "clickable";
        }

        function program3(depth0,data) {


            return "owner";
        }

        buffer += "<div class=\"tablerow\">\n    <input type=\"checkbox\" class=\"checkbox\" checked=\"true\" data-id=\"";
        if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\"/>\n    <div class=\"rowInfo ";
        stack1 = helpers.unless.call(depth0, (depth0 && depth0.own), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += " ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.own), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\" data-id=\"";
        if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n        <div class=\"col right\"><img src=\"";
        if (helper = helpers.right) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.right); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\"/></div>\n        <div class=\"col nickname smart-truncate\">";
        if (helper = helpers.nick) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.nick); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n        <div class=\"col points\">";
        if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>\n";
        return buffer;
    });
    templates['partials/rankings/_buttonDown'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n    ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.lowerRankData), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        <div class=\"button down paginate wide\" data-page=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.lowerRankData)),stack1 == null || stack1 === false ? stack1 : stack1.page)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\" >\n            <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "arrowDown", {hash:{},data:data}))
            + "\">\n        </div>\n    ";
            return buffer;
        }

        stack1 = helpers.unless.call(depth0, (depth0 && depth0.searchResults), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n";
        return buffer;
    });
    templates['partials/rankings/_buttonUp'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n    ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.higherRankData), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    <div class=\"clearfix\"></div>\n";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        <div class=\"button up paginate wide\" data-page=\""
            + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.higherRankData)),stack1 == null || stack1 === false ? stack1 : stack1.page)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
            + "\">\n            <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "arrowUp", {hash:{},data:data}))
            + "\">\n        </div>\n    ";
            return buffer;
        }

        stack1 = helpers.unless.call(depth0, (depth0 && depth0.searchResults), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n";
        return buffer;
    });
    templates['partials/rankings/_rankingEntry'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

        function program1(depth0,data) {


            return "clickable";
        }

        function program3(depth0,data) {


            return "owner";
        }

        buffer += "<div class=\"tablerow\">\n    <div class=\"rowInfo ";
        stack1 = helpers.unless.call(depth0, (depth0 && depth0.own), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += " ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.own), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\" data-id=\"";
        if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n        <div class=\"col rank\">";
        if (helper = helpers.rank) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.rank); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n        <div class=\"col nickname smart-truncate\">";
        if (helper = helpers.nick) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.nick); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n        <div class=\"col points\">";
        if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>\n";
        return buffer;
    });
    templates['partials/reports/_reportBuilding'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, functionType="function";


        buffer += "<div class=\"building\">\n    <div class=\"buildingimage\">\n        <img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.iconName), "buildings", {hash:{},data:data}))
        + "\" />\n\n        <div class=\"levelInfoOnImage\">\n            <img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, "levelInfo1", {hash:{},data:data}))
        + "\" />\n            <div class=\"level\">";
        if (helper = helpers.level) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.level); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n        </div>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>\n";
        return buffer;
    });
    templates['partials/reports/_reportHabitat'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


        buffer += "<div class=\"reporthabitat\">\n    <div class=\"icon clickable\" data-id=\"";
        if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" data-x=\"";
        if (helper = helpers.mapX) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.mapX); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" data-y=\"";
        if (helper = helpers.mapY) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.mapY); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n        <img src=\"";
        if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" />\n    </div>\n\n    <div class=\"title\">";
        if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n</div>\n";
        return buffer;
    });
    templates['partials/reports/_reportPaginationHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, escapeExpression=this.escapeExpression, self=this, functionType="function";

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n    <div class=\"pagination line\">\n        ";
            stack1 = helpers.unless.call(depth0, (depth0 && depth0.isStart), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n        <div class=\"unit size3of5 info ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.isStart), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\">\n            "
            + escapeExpression(helpers.translate.call(depth0, "Reports", {hash:{},data:data}))
            + " ";
            if (helper = helpers.current) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.current); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + " / ";
            if (helper = helpers.total) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.total); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n        </div>\n\n        ";
            stack1 = helpers.unless.call(depth0, (depth0 && depth0.isEnd), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n        <div class=\"clearfix\"></div>\n    </div>\n";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "";
            buffer += "\n            <div class=\"unit size1of5\">\n                <div class=\"button control back\">\n                    <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "paginateArrowLeft", {hash:{},data:data}))
            + "\" />\n                </div>\n            </div>\n        ";
            return buffer;
        }

        function program4(depth0,data) {


            return "pusher";
        }

        function program6(depth0,data) {

            var buffer = "";
            buffer += "\n            <div class=\"lastUnit\">\n                <div class=\"button control next\">\n                    <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "paginateArrowRight", {hash:{},data:data}))
            + "\" />\n                </div>\n            </div>\n        ";
            return buffer;
        }

        stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n";
        return buffer;
    });
    templates['partials/resources/_resource'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n          <div class=\"resourceAmount ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.resourceColor), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\">";
            if (helper = helpers.amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n        ";
            return buffer;
        }
        function program2(depth0,data) {

            var stack1, helper;
            if (helper = helpers.resourceColor) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.resourceColor); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            return escapeExpression(stack1);
        }

        function program4(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.maxInput), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program5(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = self.invokePartial(partials.inputWithMax, 'inputWithMax', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }

        buffer += "<div class=\"resourceElement table-element ";
        if (helper = helpers.elementSize) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.elementSize); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" data-primary-key=\"";
        if (helper = helpers.resourceID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.resourceID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" >\n    <div class=\"resourceIcon table-icon\">\n        <img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.resourceID), "resources", {hash:{},data:data}))
        + "\" />\n    </div>\n    <div class=\"details\">\n        ";
        stack1 = helpers.unless.call(depth0, (depth0 && depth0.hideAmount), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    </div>\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.maxInput), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n\n";
        return buffer;
    });
    templates['partials/resources/_resourceTable'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = self.invokePartial(partials.resource, 'resource', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }

        buffer += "<div class=\"res-table resources\">\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.habitatResources), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n\n";
        return buffer;
    });
    templates['partials/settings/_performance'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, self=this;

        function program1(depth0,data) {

            var buffer = "";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n    ";
            stack1 = helpers.slider.call(depth0, "settings_mapspeed", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n";
            return buffer;
        }
        function program4(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n      ";
            stack1 = helpers.translate.call(depth0, "Map.Niceness", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }

        buffer += "<div class=\"wood-hl\">";
        stack1 = helpers.translate.call(depth0, "Performance", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "</div>\n\n";
        stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n";
        return buffer;
    });
    templates['partials/settings/_volume'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, self=this;

        function program1(depth0,data) {

            var buffer = "";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n    ";
            stack1 = helpers.slider.call(depth0, "settings_bgmusic", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n    <div class=\"divider\"></div>\n\n    ";
            stack1 = helpers.slider.call(depth0, "settings_sfx", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n";
            return buffer;
        }
        function program4(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n      ";
            stack1 = helpers.translate.call(depth0, "Sound.Background", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }

        function program6(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n      ";
            stack1 = helpers.translate.call(depth0, "Sound.Effects", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }

        buffer += "<div class=\"wood-hl\">";
        stack1 = helpers.translate.call(depth0, "Sound", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "</div>\n\n";
        stack1 = helpers.contentFrame.call(depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n";
        return buffer;
    });
    templates['partials/transits/_transitAction'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {


            return "hidden";
        }

        buffer += " <div class=\"actions\">\n    <div class=\"col total\">\n        <div class=\"durationIcon icon\">\n            <img src=\"";
        if (helper = helpers.durationIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.durationIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" />\n        </div>\n        <div class=\"counter\">";
        if (helper = helpers.duration) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.duration); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n    </div>\n    <div class=\"clearfix\"></div>\n\n    <div class=\"col arrival\">\n        <div class=\"durationIcon icon\">\n            <img src=\"";
        if (helper = helpers.arrivalIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.arrivalIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" />\n        </div>\n        <div class=\"counter\">";
        if (helper = helpers.arrivalTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.arrivalTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n    </div>\n    <div class=\"clearfix\"></div>\n\n    <div class=\"col capacity\">\n        <div class=\"capacityIcon icon\">\n            <img src=\"";
        if (helper = helpers.capacityIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.capacityIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" />\n        </div>\n        <div class=\"value ";
        if (helper = helpers.capacityColor) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.capacityColor); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">";
        if (helper = helpers.capacity) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.capacity); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n    </div>\n    <div class=\"clearfix\"></div>\n </div>\n\n <div class=\"actions ";
        stack1 = helpers.unless.call(depth0, (depth0 && depth0.showDelay), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\">\n    <div class=\"col delay\">\n        <div class=\"durationIcon icon\">\n            <img src=\"";
        if (helper = helpers.durationIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.durationIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" />\n        </div>\n        <div class=\"counter\">";
        if (helper = helpers.delay) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.delay); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n    </div>\n</div>\n\n";
        return buffer;
    });
    templates['partials/transits/_transitBox'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"change button icon\"><img src=\"";
            if (helper = helpers.changeIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.changeIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></div>\n        ";
            return buffer;
        }

        function program3(depth0,data) {


            return "clickable";
        }

        function program5(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"habitatSection player ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.clickable), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\">\n                <div class=\"icon\"><img src=\"";
            if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></div>\n                <div class=\"detail\">";
            if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + " (";
            if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + ")</div>\n            </div>\n        ";
            return buffer;
        }

        function program7(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"habitatSection alliance ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.clickable), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\">\n                <div class=\"icon\"><img src=\"";
            if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\"></div>\n                <div class=\"detail\">";
            if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + " (";
            if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + ")</div>\n            </div>\n        ";
            return buffer;
        }

        function program9(depth0,data) {


            return "\n            <div class=\"habitatSection eta\">\n                <div class=\"icon\"><img src=\"../resources/lordsandknights/export/Icons/TransitTransport@2x.png\"></div>\n                <div class=\"detail\">27.06.2013 13:22</div>\n            </div>\n            <div class=\"timeDivider\"> – </div>\n            <div class=\"timeleft\">\n                <div class=\"caption\"></div>\n                <div class=\"counter\">17m</div>\n            </div>\n        ";
        }

        buffer += "\n<div class=\"content-frame habitat target\" data-id=\"";
        if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    <div class=\"frame-side t\"></div>\n    <div class=\"frame-side b\"></div>\n    <div class=\"frame-side l\"></div>\n    <div class=\"frame-side r\"></div>\n    <div class=\"frame-corner tl\"></div>\n    <div class=\"frame-corner tr\"></div>\n    <div class=\"frame-corner bl\"></div>\n    <div class=\"frame-corner br\"></div>\n    <div class=\"frame-side t\"></div>\n    <div class=\"frame-side b\"></div>\n    <div class=\"frame-side l\"></div>\n    <div class=\"frame-side r\"></div>\n    <div class=\"frame-content\">\n        <div class=\"frame-corner tl\"></div>\n        <div class=\"frame-corner tr\"></div>\n        <div class=\"frame-corner bl\"></div>\n        <div class=\"frame-corner br\"></div>\n        <div class=\"content-header with-icon\">\n            <div class=\"headline\">\n                <div class=\"icon\"><img src=\"";
        if (helper = helpers.diplomacyIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.diplomacyIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\"></div>\n                <div class=\"title\">";
        if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.changeIcon), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        <div class=\"habitatSection habitat ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.clickable), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\">\n            <div class=\"icon\"><img src=\"";
        if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\"></div>\n            <div class=\"detail\">";
        if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + " (";
        if (helper = helpers.points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + ")</div>\n        </div>\n        ";
        stack1 = helpers['with'].call(depth0, (depth0 && depth0.player), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        ";
        stack1 = helpers['with'].call(depth0, (depth0 && depth0.alliance), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.eta), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        <div class=\"clearfix\"></div>\n    </div>\n</div>\n";
        return buffer;
    });
    templates['partials/units/_unit'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, functionType="function", self=this;

        function program1(depth0,data) {

            var buffer = "";
            buffer += "\n        <div class=\"unitIcon table-icon\">\n            <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, (depth0 && depth0.unitID), "units", {hash:{},data:data}))
            + "\" />\n        </div>\n    ";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n        <div class=\"affordable ";
            if (helper = helpers.amountColorStyle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.amountColorStyle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">";
            if (helper = helpers.amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n    ";
            return buffer;
        }

        function program5(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.maxInput), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }
        function program6(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n            ";
            stack1 = self.invokePartial(partials.inputWithMax, 'inputWithMax', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        ";
            return buffer;
        }

        buffer += "<div class=\"unitElement table-element ";
        if (helper = helpers.elementSize) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.elementSize); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\" data-primary-key=\"";
        if (helper = helpers.unitID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.unitID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    ";
        stack1 = helpers.unless.call(depth0, (depth0 && depth0.noIcon), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    <div class=\"details\"></div>\n    ";
        stack1 = helpers.unless.call(depth0, (depth0 && depth0.hideAmount), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.maxInput), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n\n\n\n";
        return buffer;
    });
    templates['partials/units/_unitTable'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        ";
            stack1 = self.invokePartial(partials.unit, 'unit', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n    ";
            return buffer;
        }

        buffer += "<div class=\"res-table units\">\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.habitatUnits), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n\n";
        return buffer;
    });
    templates['partials/window/_contentHeader'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {


            return "with-icon";
        }

        function program3(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n    <div class=\"headline ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.headlineClass), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\">\n        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n        <div class=\"title smart-truncate ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.clickable), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\">";
            if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "</div>\n    </div>\n    ";
            return buffer;
        }
        function program4(depth0,data) {

            var stack1, helper;
            if (helper = helpers.headlineClass) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.headlineClass); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            return escapeExpression(stack1);
        }

        function program6(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"icon\">\n                <img src=\"";
            if (helper = helpers.icon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.icon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\" />\n            </div>\n        ";
            return buffer;
        }

        function program8(depth0,data) {


            return "clickable";
        }

        function program10(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n        <div class=\"detail\">";
            if (helper = helpers.detail) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.detail); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "</div>\n    ";
            return buffer;
        }

        function program12(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n        <div class=\"timestamp detail\">";
            if (helper = helpers.creationdate) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.creationdate); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n    ";
            return buffer;
        }

        buffer += "<div class=\"content-header ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\">\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.detail), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.creationdate), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    <div class=\"clearfix\"></div>\n</div>\n";
        return buffer;
    });
    templates['partials/window/_genericSortBar'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"sortDropdownItem ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\" data-type=\"";
            if (helper = helpers._key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0._key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">";
            if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "</div>\n            ";
            return buffer;
        }
        function program2(depth0,data) {


            return "selected";
        }

        function program4(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n        <div data-type=\"asc\" class=\"sort asc ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.activeAsc), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\">\n            <span class=\"shell\"></span>\n        </div>\n\n        <div data-type=\"desc\" class=\"sort desc ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.activeDesc), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\">\n            <span class=\"shell\"></span>\n        </div>\n    ";
            return buffer;
        }
        function program5(depth0,data) {


            return "active";
        }

        buffer += "<div class=\"sortBar ";
        if (helper = helpers.barClass) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.barClass); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    <div class=\"content-frame clickable listButton searchTypeSelector\">\n        <div class=\"frame-side t\"></div>\n        <div class=\"frame-side b\"></div>\n        <div class=\"frame-side l\"></div>\n        <div class=\"frame-side r\"></div>\n        <div class=\"frame-content\">\n            <div class=\"frame-corner tl\"></div>\n            <div class=\"frame-corner tr\"></div>\n            <div class=\"frame-corner bl\"></div>\n            <div class=\"frame-corner br\"></div>\n            <div class=\"icon\"></div>\n            <div class=\"contentText smart-truncate\">";
        if (helper = helpers.currentTypeTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.currentTypeTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div>\n            <div class=\"detail\"></div>\n            <div class=\"clearfix\"></div>\n        </div>\n    </div>\n\n    <div class=\"dropdown content-frame\" style=\"display: none;\">\n        <div class=\"frame-side t\"></div>\n        <div class=\"frame-side b\"></div>\n        <div class=\"frame-side l\"></div>\n        <div class=\"frame-side r\"></div>\n        <div class=\"frame-corner tl\"></div>\n        <div class=\"frame-corner tr\"></div>\n        <div class=\"frame-corner bl\"></div>\n        <div class=\"frame-corner br\"></div>\n        <div class=\"frame-content dropDownContainer\">\n            ";
        stack1 = (helper = helpers.each_hash || (depth0 && depth0.each_hash),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.entries), options) : helperMissing.call(depth0, "each_hash", (depth0 && depth0.entries), options));
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        </div>\n    </div>\n\n\n    ";
        stack1 = helpers.unless.call(depth0, (depth0 && depth0.hideDirectionControls), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n    <div class=\"border-bottom\"></div>\n</div>\n";
        return buffer;
    });
    templates['profile/templates/eventsList'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


        buffer += "<div id=\"";
        if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    <div id=\"";
        if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n\n    GOPA\n    </div>\n</div>\n";
        return buffer;
    });
    templates['profile/templates/rankingControls'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


        buffer += "<div id=\"";
        if (helper = helpers.controlsHtmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.controlsHtmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    <div class=\"rankingControls\">\n        <div class=\"search\">\n            <div class=\"input\">\n                <input type=\"text\" id=\"searchBox\" value=\"";
        if (helper = helpers.searchVal) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.searchVal); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n            </div>\n            <div class=\"control button icon disabled\" id=\"executeSearch\" >\n                <img src=\""
        + escapeExpression(helpers.getImageSrc.call(depth0, "search", {hash:{},data:data}))
        + "\">\n            </div>\n            <div class=\"control button rankings\">"
        + escapeExpression(helpers.translate.call(depth0, "Ranking", {hash:{},data:data}))
        + "</div>\n        </div>\n        <div class=\"clearfix\"></div>\n    </div>\n    <div class=\"clearfix\"></div>\n    <div class=\"divider\"></div>\n</div>\n";
        return buffer;
    });
    templates['profile/templates/rankings'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, self=this, functionType="function";

        function program1(depth0,data) {

            var buffer = "";
            buffer += "\n                <div class=\"ranking-list-empty-result\">"
            + escapeExpression(helpers.translate.call(depth0, "No results", {hash:{},data:data}))
            + "</div>\n            ";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.allianceRankings), {hash:{},inverse:self.program(7, program7, data),fn:self.program(4, program4, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            return buffer;
        }
        function program4(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                    ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.displayedRanking), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                ";
            return buffer;
        }
        function program5(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                        ";
            stack1 = self.invokePartial(partials.allianceRankingEntry, 'allianceRankingEntry', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    ";
            return buffer;
        }

        function program7(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                    ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.displayedRanking), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                ";
            return buffer;
        }
        function program8(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                        ";
            stack1 = self.invokePartial(partials.rankingEntry, 'rankingEntry', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    ";
            return buffer;
        }

        buffer += "<div id=\"";
        if (helper = helpers.htmlID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.htmlID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n    <div id=\"";
        if (helper = helpers.rankingListName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.rankingListName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n\n        ";
        stack1 = self.invokePartial(partials.rankingButtonUp, 'rankingButtonUp', depth0, helpers, partials, data);
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        <div class=\"rankingTable\">\n            ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.emptyResult), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        </div>\n        <div class=\"clearfix\"></div>\n        ";
        stack1 = self.invokePartial(partials.rankingButtonDown, 'rankingButtonDown', depth0, helpers, partials, data);
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    </div>\n</div>\n";
        return buffer;
    });
    templates['recruiting/partials/_unitUpgradeOrder'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
        var buffer = "", stack1, helper, escapeExpression=this.escapeExpression, functionType="function", self=this;

        function program1(depth0,data) {

            var buffer = "";
            buffer += "\n                <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "finishTick", {hash:{},data:data}))
            + "\" />\n            ";
            return buffer;
        }

        function program3(depth0,data) {

            var buffer = "";
            buffer += "\n                <img src=\""
            + escapeExpression(helpers.getImageSrc.call(depth0, "doubleArrow", {hash:{},data:data}))
            + "\" />\n            ";
            return buffer;
        }

        buffer += "\n<div class=\"upgrade\">\n    <div class=\"readyTime\" data-complete=\"";
        if (helper = helpers.complete) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.complete); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">"
        + escapeExpression(helpers.timeToCompletion.call(depth0, (depth0 && depth0.complete), {hash:{},data:data}))
        + "</div>\n    <div class=\"nextlevelInfo\">\n        <div class=\"amount\">";
        if (helper = helpers.amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "</div> \n        <div class=\"button speedup\"\n            data-upgrade=\"";
        if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
        else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
        buffer += escapeExpression(stack1)
        + "\">\n            ";
        stack1 = helpers['if'].call(depth0, (depth0 && depth0.canFinish), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n        </div>\n    </div>\n    <div class=\"clearfix\"></div>\n</div>\n";
        return buffer;
    });
    templates['recruiting/templates/fastRecruiting'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n        <div class=\"container line\" data-habitat=\"";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n            ";
            stack1 = self.invokePartial(partials.contentHeader, 'contentHeader', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            ";
            stack1 = self.invokePartial(partials.resourceTable, 'resourceTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            <div class=\"size3of4\">\n            ";
            stack1 = self.invokePartial(partials.unitTable, 'unitTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            </div>\n            <div class=\"maxRecruitUnit lastUnit\">\n                ";
            stack1 = self.invokePartial(partials.unit, 'unit', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.selectable), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            </div>\n            ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.numberOfActiveRecruitings), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            <div class=\"clearfix\"></div>\n        </div>\n    ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                <div class=\"recruitingCheckbox\">\n                    <input type=\"checkbox\" ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.checked), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += ">\n                </div>\n                ";
            return buffer;
        }
        function program3(depth0,data) {


            return "checked=\"true\"";
        }

        function program5(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                <div class=\"divider\"></div>\n                <div class=\"unitContainer currentOrders\">\n                    ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.activeRecruitings), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                </div>\n            ";
            return buffer;
        }
        function program6(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.orders), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    ";
            return buffer;
        }
        function program7(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                            ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.orders), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                        ";
            return buffer;
        }
        function program8(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                                ";
            stack1 = self.invokePartial(partials.unit, 'unit', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                            ";
            return buffer;
        }

        buffer += "<div class=\"fastRecruiting\" id=\"recruitingList\">\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.habitate), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n";
        return buffer;
    });
    templates['recruiting/templates/globalRecruiting'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n        <div class=\"container line\" data-habitat=\"";
            if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n            <div class=\"unit size1of4\">\n                ";
            stack1 = self.invokePartial(partials.contentHeader, 'contentHeader', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                ";
            stack1 = self.invokePartial(partials.resourceTable, 'resourceTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.finishLine), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.speedupLine), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n            </div>\n            <div class=\"unit lastUnit\">\n\n                ";
            stack1 = self.invokePartial(partials.unitTable, 'unitTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n                <div class=\"units\">\n                    ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.recruitableUnits), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                </div>\n\n                <div class=\"clearfix\"></div>\n\n                <div class=\"units activeRecruitings ";
            stack1 = helpers.unless.call(depth0, (depth0 && depth0.numberOfActiveRecruitings), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\">\n                    ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.activeRecruitings), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                </div>\n\n\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n    ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                    <div class=\"button finishLine\">\n                        <img src=\"";
            if (helper = helpers.finishIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.finishIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                    </div>\n                ";
            return buffer;
        }

        function program4(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                    <div class=\"button speedUpLine\">\n                        <img src=\"";
            if (helper = helpers.speedupIcon) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.speedupIcon); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                    </div>\n                ";
            return buffer;
        }

        function program6(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                        <div class=\"unitElement\">\n                            ";
            stack1 = self.invokePartial(partials.recruitButton, 'recruitButton', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                        </div>\n                    ";
            return buffer;
        }

        function program8(depth0,data) {


            return "hidden";
        }

        function program10(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                        <div class=\"unitElement upgradeContainer ";
            stack1 = helpers.unless.call(depth0, (depth0 && depth0.orders), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\" data-primary-key=\"";
            if (helper = helpers.unitID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.unitID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                            ";
            stack1 = helpers.each.call(depth0, (depth0 && depth0.orders), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                        </div>\n                    ";
            return buffer;
        }
        function program11(depth0,data) {


            return "empty";
        }

        function program13(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                                ";
            stack1 = self.invokePartial(partials.unitUpgradeOrder, 'unitUpgradeOrder', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                            ";
            return buffer;
        }

        buffer += "<div class=\"contentRecruitingList\" id=\"recruitingList\">\n    ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.habitate), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n</div>\n";
        return buffer;
    });
    templates['restock/templates/globalRestockList'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

        function program1(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n            <div class=\"restockContainer\" data-habitat=\"";
            if (helper = helpers.habitatID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitatID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                <div class=\"col left\">\n                    ";
            stack1 = helpers['with'].call(depth0, (depth0 && depth0.header), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n                    ";
            stack1 = self.invokePartial(partials.resourceTable, 'resourceTable', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                </div>\n                <div class=\"col right\">\n\n                    ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n\n                    <div class=\"clearfix\"></div>\n                </div>\n                <div class=\"clearfix\"></div>\n            </div>\n        ";
            return buffer;
        }
        function program2(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                        ";
            stack1 = self.invokePartial(partials.contentHeader, 'contentHeader', depth0, helpers, partials, data);
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    ";
            return buffer;
        }

        function program4(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                        <div class=\"countdown\" data-complete=\"";
            if (helper = helpers.expiryTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.expiryTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\">\n                            "
            + escapeExpression(helpers.timeToCompletion.call(depth0, (depth0 && depth0.expiryTime), {hash:{},data:data}))
            + "\n                        </div>\n                    ";
            return buffer;
        }

        function program6(depth0,data) {

            var buffer = "", stack1;
            buffer += "\n                        ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.valid), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += "\n                    ";
            return buffer;
        }
        function program7(depth0,data) {

            var buffer = "", stack1, helper;
            buffer += "\n                            <input type=\"checkbox\"\n                                class=\"checkboxWrapper\"\n                                data-id=";
            if (helper = helpers.habitatID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
            else { helper = (depth0 && depth0.habitatID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
            buffer += escapeExpression(stack1)
            + "\n                                ";
            stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
            if(stack1 || stack1 === 0) { buffer += stack1; }
            buffer += " />\n                        ";
            return buffer;
        }
        function program8(depth0,data) {


            return "checked";
        }

        buffer += "<div class=\"globalRestockList\" id=\"globalRestockList\">\n    <div class=\"contentRestockList\">\n        ";
        stack1 = helpers.each.call(depth0, (depth0 && depth0.listItems), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n    </div>\n</div>\n";
        return buffer;
    });
    templates['settings/templates/settings'] = template(function (Handlebars,depth0,helpers,partials,data) {
        this.compilerInfo = [4,'>= 1.0.0'];
        helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
        var buffer = "", stack1, self=this;


        stack1 = self.invokePartial(partials.settings_volume, 'settings_volume', depth0, helpers, partials, data);
        if(stack1 || stack1 === 0) { buffer += stack1; }
        buffer += "\n\n\n\n";
        return buffer;
    });
})();