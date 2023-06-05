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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LtaController = void 0;
const common_1 = require("@nestjs/common");
const lta_service_1 = require("./lta.service");
const create_lta_dto_1 = require("./dto/create-lta.dto");
const update_lta_dto_1 = require("./dto/update-lta.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let LtaController = class LtaController {
    constructor(ltaService) {
        this.ltaService = ltaService;
    }
    create(createLtaDto, req) {
        return this.ltaService.create(createLtaDto, req.user);
    }
    update(id, updateLtaDto, req) {
        return this.ltaService.update(id, updateLtaDto, req.user);
    }
    findAll() {
        return this.ltaService.findAll();
    }
    findOne(id) {
        return this.ltaService.findOne(id);
    }
    remove(id) {
        return this.ltaService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_lta_dto_1.CreateLtaDto !== "undefined" && create_lta_dto_1.CreateLtaDto) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", void 0)
], LtaController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof update_lta_dto_1.UpdateLtaDto !== "undefined" && update_lta_dto_1.UpdateLtaDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], LtaController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LtaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LtaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LtaController.prototype, "remove", null);
LtaController = __decorate([
    (0, common_1.Controller)('lta'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [lta_service_1.LtaService])
], LtaController);
exports.LtaController = LtaController;
//# sourceMappingURL=lta.controller.js.map