"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const Sentry = require("@sentry/node");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    Sentry.init({
        dsn: process.env.SENTRY_DSN_URL,
        environment: process.env.SENTRY_ENVIRONMENT,
        tracesSampleRate: 0.1,
    });
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map