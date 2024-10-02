import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { MongoClient } from 'mongodb';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../../../config';

@Global()
@Module({
    imports: [
        ConfigModule.forFeature(config),
        MongooseModule.forRootAsync({
            useFactory: (configService: ConfigType<typeof config>) => {
                const { connection, user, password, host, port, dbName } = configService.mongo;
                return {
                    uri: `${connection}://${host}:${port}/`,
                    user,
                    pass: password,
                    dbName
                }
            },
            inject: [config.KEY]
        })
    ],
    providers: [
        {
            provide: 'MONGO',
            useFactory: async (configService: ConfigType<typeof config>) => {
                const { connection, user, password, host, port, dbName } = configService.mongo;
                const uri = `${connection}://${user}:${password}@${host}:${port}/`;
                const client = new MongoClient(uri);
                await client.connect();
                const database = client.db(dbName);
                return database
            },
            inject: [config.KEY]
        }
    ],
    exports: ['MONGO', MongooseModule]
})
export class DatabaseModule {}
