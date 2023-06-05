import { Controller, Get, Post, Put, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { LtaService } from './lta.service';
import { LtaEntryDto } from './dto/lta-entry.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('lta')
@UseGuards(JwtAuthGuard)
export class LtaController {
  constructor(private readonly ltaService: LtaService) {}

  @Post()
  addLtaEntry(@Body() entryDto: LtaEntryDto) {
    return this.ltaService.addLtaEntry(entryDto);
  }

  @Put(':id')
  updateLtaEntry(@Param('id') id: string, @Body() entryDto: LtaEntryDto) {
    return this.ltaService.updateLtaEntry(id, entryDto);
  }

  @Patch(':id')
  partialUpdateLtaEntry(@Param('id') id: string, @Body() entryDto: Partial<LtaEntryDto>) {
    return this.ltaService.partialUpdateLtaEntry(id, entryDto);
  }

  @Get()
  getAllLtaEntries() {
    return this.ltaService.getAllLtaEntries();
  }

  @Get(':id')
  getLtaEntryById(@Param('id') id: string) {
    return this.ltaService.getLtaEntryById(id);
  }
}
