import { CreateLtaDto } from './dto/create-lta.dto';
import { UpdateLtaDto } from './dto/update-lta.dto';
import { HasuraService } from 'hasura-graphql-engine';
export declare class LtaService {
    private readonly hasuraService;
    constructor(hasuraService: HasuraService);
    create(createLtaDto: CreateLtaDto): Promise<any>;
    update(id: string, updateLtaDto: UpdateLtaDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    remove(id: string): Promise<any>;
}
