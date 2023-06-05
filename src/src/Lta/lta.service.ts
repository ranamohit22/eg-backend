import { Injectable } from '@nestjs/common';
import { LtaEntryDto } from './dto/lta-entry.dto';

@Injectable()
export class LtaService {
  private ltaEntries: LtaEntryDto[] = [];

  addLtaEntry(entryDto: LtaEntryDto) {
    const newEntry = { id: this.generateId(), ...entryDto };
    this.ltaEntries.push(newEntry);
    return newEntry;
  }

  updateLtaEntry(id: string, entryDto: LtaEntryDto) {
    const entryIndex = this.ltaEntries.findIndex((entry) => entry.id === id);
    if (entryIndex >= 0) {
      this.ltaEntries[entryIndex] = { id, ...entryDto };
      return this.ltaEntries[entryIndex];
    }
    return null;
  }

  partialUpdateLtaEntry(id: string, entryDto: Partial<LtaEntryDto>) {
    const entryIndex = this.ltaEntries.findIndex((entry) => entry.id === id);
    if (entryIndex >= 0) {
      this.ltaEntries[entryIndex] = { ...this.ltaEntries[entryIndex], ...entryDto };
      return this.ltaEntries[entryIndex];
    }
    return null;
  }

  getAllLtaEntries() {
    return this.ltaEntries;
  }

  getLtaEntryById(id: string) {
    return this.ltaEntries.find((entry) => entry.id === id);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
