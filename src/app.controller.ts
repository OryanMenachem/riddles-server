import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
