import { Controller, Get } from '@nestjs/common';
import { FindManyPhotosService } from './find-many-photos.service';
import { Photo } from 'src/photo/entities/photo.entity';

@Controller()
export class FindManyPhotosController {
  constructor(private findManyPhotosService: FindManyPhotosService) {}

  @Get('photos')
  async handle(): Promise<Photo[]> {
    return await this.findManyPhotosService.execute();
  }
}
