"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../_services/data.service");
var admin_service_1 = require("../_services/admin.service");
var AdminComponent = (function () {
    function AdminComponent(dataService, adminService) {
        this.dataService = dataService;
        this.adminService = adminService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getCount();
    };
    AdminComponent.prototype.getUpdate = function () {
        var _this = this;
        console.log("ADMIN getUpdate()");
        this.dataService.getData().subscribe(function (data) {
            _this.temp = data;
            _this.element = _this.temp;
            if (_this.element.nr == null)
                _this.element.nr = 0;
            switch (_this.element.element) {
                case 'oppdrag':
                    _this.counter.nyeoppdrag = _this.element.nr;
                    break;
                case 'oversettelse':
                    _this.antallOversettelser = _this.element.nr;
                    break;
                case 'nye-kunder':
                    _this.counter.nyekunder = _this.element.nr;
                    break;
                case 'bestilling':
                    _this.counter.oppdrag = _this.element.nr;
                    break;
            }
            _this.sum = _this.getSum();
        });
    };
    AdminComponent.prototype.getCount = function () {
        var _this = this;
        this.adminService.getUbehandleOppdrag().subscribe(function (retur) {
            _this.counter = retur;
            console.log("Count: " + _this.counter.nyekunder);
        }, function (error) { return console.log("Error get count - " + error); }, function () { return console.log("ferdig  get count"); });
        this.getUpdate();
    };
    AdminComponent.prototype.getSum = function () {
        var sum = 0;
        sum += this.counter.nyeoppdrag == null ? 0 : this.counter.nyeoppdrag;
        sum += this.antallOppdrag == null ? 0 : this.antallOppdrag;
        sum += this.counter.nyekunder == null ? 0 : this.counter.nyekunder;
        return sum == 0 ? "" : "" + sum;
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        selector: 'admin',
        templateUrl: "./app/admin/admin.component.html",
        providers: [admin_service_1.AdminService],
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, admin_service_1.AdminService])
], AdminComponent);
exports.AdminComponent = AdminComponent;
