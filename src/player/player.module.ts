import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { SupabaseModule } from '../supabase/supabase.module';
import { join } from 'path/win32';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'client', 'public'),
    }),
    SupabaseModule,
    // MongooseModule.forRoot(process.env.MONGODB_URI!),
  ],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
