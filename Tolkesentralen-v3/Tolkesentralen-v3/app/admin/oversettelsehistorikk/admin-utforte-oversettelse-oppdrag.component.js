"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var oppdrag_service_1 = require("../../_services/oppdrag.service");
var models_1 = require("../../_models/models");
var data_service_1 = require("../../_services/data.service");
var AdminUtforteOversettelseOppdragComponent = (function () {
    function AdminUtforteOversettelseOppdragComponent(oppdragService, dataService) {
        this.oppdragService = oppdragService;
        this.dataService = dataService;
        this.arrayOversettelse = [];
    }
    AdminUtforteOversettelseOppdragComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get users from secure api end point
        this.oppdragService.getUbehandleOppdrag()
            .subscribe(function (oppdrag) {
            //this.arrayOversettelse = oppdrag;
            _this.element = new models_1.NavbarElement();
            _this.element.nr = _this.arrayOversettelse.length;
            _this.element.element = 'oversettelse';
            _this.dataService.updateData(_this.element);
        });
    };
    return AdminUtforteOversettelseOppdragComponent;
}());
AdminUtforteOversettelseOppdragComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/admin/oversettelsehistorikk/admin-utforte-oversettelse-oppdrag.component.html"
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService,
        data_service_1.DataService])
], AdminUtforteOversettelseOppdragComponent);
exports.AdminUtforteOversettelseOppdragComponent = AdminUtforteOversettelseOppdragComponent;
