import { Global, Module } from '@nestjs/common';
import { DatabaseUsersService } from './database.users.service';

@Global()
@Module({
    providers: [DatabaseUsersService],
    exports: [DatabaseUsersService]
})
export class DatabaseModule {}
