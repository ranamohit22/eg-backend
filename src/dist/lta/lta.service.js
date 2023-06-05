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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LtaService = void 0;
const common_1 = require("@nestjs/common");
const hasura_graphql_engine_1 = require("hasura-graphql-engine");
let LtaService = class LtaService {
    constructor(hasuraService) {
        this.hasuraService = hasuraService;
    }
    async create(createLtaDto) {
        return await this.hasuraService.mutation({
            insert_lta: {
                objects: [createLtaDto],
            },
        });
    }
    async update(id, updateLtaDto) {
        return await this.hasuraService.mutation({
            update_lta_by_pk: {
                _set: updateLtaDto,
                pk_column: id,
            },
        });
    }
    async findAll() {
        return await this.hasuraService.query({
            lta: {
                order_by: { id: 'desc' },
            },
        });
    }
    async findOne(id) {
        return await this.hasuraService.query({
            lta_by_pk: {
                id: id,
            },
        });
    }
    async remove(id) {
        return await this.hasuraService.mutation({
            delete_lta_by_pk: {
                id: id,
            },
        });
    }
};
LtaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof hasura_graphql_engine_1.HasuraService !== "undefined" && hasura_graphql_engine_1.HasuraService) === "function" ? _a : Object])
], LtaService);
exports.LtaService = LtaService;
//# sourceMappingURL=lta.service.js.map