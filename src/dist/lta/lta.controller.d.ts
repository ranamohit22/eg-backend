import { LtaService } from './lta.service';
import { CreateLtaDto } from './dto/create-lta.dto';
import { UpdateLtaDto } from './dto/update-lta.dto';
export declare class LtaController {
    private readonly ltaService;
    constructor(ltaService: LtaService);
    create(createLtaDto: CreateLtaDto, req: any): Promise<any>;
    update(id: string, updateLtaDto: UpdateLtaDto, req: any): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    remove(id: string): Promise<any>;
}
