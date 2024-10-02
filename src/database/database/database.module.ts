import { Module, Global } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Global()
@Module({
    providers: [
        {
            provide: 'MONGO',
            useFactory: async () => {
                const uri = 'mongodb://root:root@localhost:27017/';
                const client = new MongoClient(uri);
                await client.connect();
                const database = client.db('acarreos-appa');
                return database
            }
        }
    ],
    exports: ['MONGO']
})
export class DatabaseModule {}
