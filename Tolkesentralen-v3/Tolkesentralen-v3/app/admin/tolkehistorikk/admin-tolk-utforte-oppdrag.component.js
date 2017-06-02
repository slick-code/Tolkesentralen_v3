"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kunde_service_1 = require("../../_services/kunde.service");
var models_1 = require("../../_models/models");
var data_service_1 = require("../../_services/data.service");
var AdminTolkUtforteOppdragComponent = (function () {
    function AdminTolkUtforteOppdragComponent(service, dataService) {
        this.service = service;
        this.dataService = dataService;
        this.arrayKunder = [];
    }
    AdminTolkUtforteOppdragComponent.prototype.ngOnInit = function () {
        this.getKunder();
    };
    AdminTolkUtforteOppdragComponent.prototype.getKunder = function () {
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
    return AdminTolkUtforteOppdragComponent;
}());
AdminTolkUtforteOppdragComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/admin/tolkehistorikk/admin-tolk-utforte-oppdrag.component.html"
    }),
    __metadata("design:paramtypes", [kunde_service_1.KundeService,
        data_service_1.DataService])
], AdminTolkUtforteOppdragComponent);
exports.AdminTolkUtforteOppdragComponent = AdminTolkUtforteOppdragComponent;
