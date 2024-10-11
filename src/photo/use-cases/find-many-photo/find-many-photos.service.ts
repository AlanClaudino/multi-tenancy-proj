import { Inject } from '@nestjs/common';
import { PhotoRepository } from 'src/photo/repositories/photo.repository';

export class FindManyPhotosService {
  constructor(
    @Inject('PhotoRepository') private photoRepository: PhotoRepository,
  ) {}

  async execute() {
    return this.photoRepository.findAll();
  }
}
