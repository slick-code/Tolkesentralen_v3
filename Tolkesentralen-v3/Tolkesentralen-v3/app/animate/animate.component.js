"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var AnimateComponent = (function () {
    function AnimateComponent() {
    }
    return AnimateComponent;
}());
AnimateComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/animate/animate.component.html',
        animations: [
            core_2.trigger('heroState', [
                core_2.state('inactive', core_2.style({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                })),
                core_2.state('active', core_2.style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1.1)'
                })),
                core_2.transition('inactive => active', core_2.animate('100ms ease-in')),
                core_2.transition('active => inactive', core_2.animate('100ms ease-out'))
            ])
        ]
    })
], AnimateComponent);
exports.AnimateComponent = AnimateComponent;
