import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import configuration from 'config/configuration';

@Module({
  imports: [AuthModule, DatabaseModule, ConfigModule.forRoot({
    envFilePath: '../../.env.local',
    load: [configuration],
    isGlobal: true
  }), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
