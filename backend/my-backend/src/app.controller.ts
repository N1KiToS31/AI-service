import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { RedisService } from './redis/redis.service';
import { StorageService } from './storage/storage.service';

@Controller()
export class AppController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redisService: RedisService,
    private readonly storageService: StorageService,
  ) {}

  @Get()
  getRoot() {
    return { message: 'Backend is running' };
  }

  @Get('db-test')
  async dbTest() {
    const projects = await this.prisma.project.findMany();
    return { ok: true, projects };
  }

  @Get('redis-test')
  async redisTest() {
    const redis = this.redisService.getClient();
    await redis.set('test_key', 'hello_redis');
    const value = await redis.get('test_key');

    return { ok: true, value };
  }

  @Get('storage-test')
  async storageTest() {
    return this.storageService.uploadTextFile(
      'tests/hello.txt',
      'MinIO connection works',
    );
  }
}