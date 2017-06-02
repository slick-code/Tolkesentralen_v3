"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kunde_service_1 = require("../../_services/kunde.service");
var models_1 = require("../../_models/models");
var data_service_1 = require("../../_services/data.service");
var AdminTolkAvbestillingerOversiktComponent = (function () {
    function AdminTolkAvbestillingerOversiktComponent(service, dataService) {
        this.service = service;
        this.dataService = dataService;
        this.arrayKunder = [];
    }
    AdminTolkAvbestillingerOversiktComponent.prototype.ngOnInit = function () {
        this.getKunder();
    };
    AdminTolkAvbestillingerOversiktComponent.prototype.getKunder = function () {
        var _this = this;
        // get users from secure api end point
        this.service.getKunder()
            .subscribe(function (kunder) {
            if (kunder != null) {
                _this.arrayKunder = kunder;
                _this.element = new models_1.NavbarElement();
                _this.element.nr = _this.arrayKunder.length;
                _this.element.element = 'kunder';
                _this.dataService.updateData(_this.element);
            }
        });
    };
    return AdminTolkAvbestillingerOversiktComponent;
}());
AdminTolkAvbestillingerOversiktComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/admin/tolkehistorikk/admin-tolk-avbestillinger-oversikt.component.html"
    }),
    __metadata("design:paramtypes", [kunde_service_1.KundeService,
        data_service_1.DataService])
], AdminTolkAvbestillingerOversiktComponent);
exports.AdminTolkAvbestillingerOversiktComponent = AdminTolkAvbestillingerOversiktComponent;
