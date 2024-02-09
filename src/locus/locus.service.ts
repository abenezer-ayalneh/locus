import { Injectable } from '@nestjs/common'

@Injectable()
export class LocusService {
  async getLocus() {
    return 'Locus'
  }
}
