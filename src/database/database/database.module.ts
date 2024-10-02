import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { MongoClient } from 'mongodb';
import config from '../../../config';

@Global()
@Module({
    imports: [ConfigModule.forFeature(config)],
    providers: [
        {
            provide: 'MONGO',
            useFactory: async (configService: ConfigType<typeof config>) => {
                const { connection, user, password, host, port, dbName } = configService.mongo;
                const uri = `${connection}://${user}:${password}@${host}:${port}/`;
                // const uri = 'mongodb://root:root@localhost:27017/';
                const client = new MongoClient(uri);
                await client.connect();
                const database = client.db(dbName);
                return database
            },
            inject: [config.KEY]
        }
    ],
    exports: ['MONGO']
})
export class DatabaseModule {}
