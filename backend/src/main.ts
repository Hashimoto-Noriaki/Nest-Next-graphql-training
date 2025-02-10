import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // CORS 設定
  app.enableCors({
    origin: '*', //フロントエンドと連携
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
