"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var oppdrag_service_1 = require("../_services/oppdrag.service");
var temp_service_1 = require("../_services/temp.service");
var tolk_service_1 = require("../_services/tolk.service");
var UtdelComponent = (function () {
    function UtdelComponent(oppdragService, tempService, tolkService, router) {
        this.oppdragService = oppdragService;
        this.tempService = tempService;
        this.tolkService = tolkService;
        this.router = router;
    }
    UtdelComponent.prototype.ngOnInit = function () {
        this.oppdrag = this.tempService.getObject();
        this.hentTolkmedGittSpraak();
        // get users from secure api end point
        //this.oppdragService.getListeTolk()
        //    .subscribe(listeTolk => {
        //        this.arrayTolk = listeTolk;
        //    });
        if (this.oppdrag == null) {
            console.log("oppdrag er null");
        }
        else {
            console.log('TEM -> ' + this.tempService.getObject());
            console.log(this.oppdrag.fraspraak + " -> " + this.oppdrag.tilspraak);
        }
    };
    UtdelComponent.prototype.setAllChecked = function () {
        console.log("SetAllChecked");
        this.allChecked = !this.allChecked;
        if (this.arrayTolk) {
            for (var _i = 0, _a = this.arrayTolk; _i < _a.length; _i++) {
                var object = _a[_i];
                object.valgt = this.allChecked;
            }
        }
    };
    UtdelComponent.prototype.hentTolkmedGittSpraak = function () {
        var _this = this;
        this.loading = true;
        var body = JSON.stringify({ fraspraak: 1, tilspraak: 2 });
        this.tolkService.getTolkMedSpraak(body).subscribe(function (retur) {
            _this.showForm = true;
            _this.arrayTolk = retur;
        }, function (error) { _this.Error = true; }, function () { _this.loading = false; });
    };
    UtdelComponent.prototype.tilbake = function () {
        this.router.navigate(['./admin/oppdrag']);
    };
    UtdelComponent.prototype.postForesporsler = function () {
        var _this = this;
        this.loading = true;
        this.showForm = false;
        var tempArreyTolkID = [];
        if (this.arrayTolk) {
            for (var _i = 0, _a = this.arrayTolk; _i < _a.length; _i++) {
                var object = _a[_i];
                if (object.valgt) {
                    tempArreyTolkID.push(object.persId);
                }
            }
        }
        this.tolkService.postForesposler(tempArreyTolkID).subscribe(function (retur) {
            _this.Success = true;
            //this.arrayTolk = retur;
        }, function (error) { _this.Error = true; }, function () { _this.loading = false; });
    };
    return UtdelComponent;
}());
UtdelComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/admin/utdel.component.html",
        providers: [tolk_service_1.TolkService],
    }),
    __metadata("design:paramtypes", [oppdrag_service_1.OppdragService,
        temp_service_1.TempService,
        tolk_service_1.TolkService,
        router_1.Router])
], UtdelComponent);
exports.UtdelComponent = UtdelComponent;
//# sourceMappingURL=utdel.component.js.map