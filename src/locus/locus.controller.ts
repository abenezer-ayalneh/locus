import { Controller, Get } from '@nestjs/common'
import {
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'
import { LocusService } from './locus.service'

@ApiTags('Locus')
@Controller('/locus')
export class LocusController {
  constructor(private readonly locusService: LocusService) {}

  @ApiOperation({ summary: 'Fetch list of locus entries' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  @Get()
  getLocus() {
    return this.locusService.getLocus()
  }
}
