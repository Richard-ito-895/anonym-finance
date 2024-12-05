import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DB as DBUsers } from "db/db_users";
import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";

@Injectable()
export class DatabaseUsersService implements OnModuleInit, OnModuleDestroy {
    private db: Kysely<DBUsers>;

    constructor(private configService: ConfigService){}

    onModuleInit() {
        const dialect = new PostgresDialect({
            pool: new Pool({
                database: this.configService.get<string>('usersDatabase.databaseName'),
                host: this.configService.get<string>('usersDatabase.host'),
                user: this.configService.get<string>('usersDatabase.user'),
                port: this.configService.get<number>('usersDatabase.port'),
                max: 10
            })
        });

        this.db = new Kysely<DBUsers>({ dialect });
        console.log('Database connection established');
    }

    getKyselyDb(): Kysely<DBUsers>{
        return this.db;
    }

    async onModuleDestroy() {
        await this.db.destroy();
        console.log('Database connection closed');
    }
}