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
exports.Lta = void 0;
const repository_1 = require("@loopback/repository");
let Lta = class Lta extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        postgresql: {
            columnName: 'id',
            dataType: 'integer',
            nullable: 'NO',
        },
    }),
    __metadata("design:type", Number)
], Lta.prototype, "id", void 0);
Lta = __decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: {
                schema: process.env.HASURA_SCHEMA,
                table: 'lta',
            },
        },
    }),
    __metadata("design:paramtypes", [Object])
], Lta);
exports.Lta = Lta;
//# sourceMappingURL=lta.model.js.map