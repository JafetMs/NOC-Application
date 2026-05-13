import { LogRepositoryImpl } from './../infrastructure/repositories/log.repository.impl';
import { envs } from "../config/plugins/envs.plugin";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { CronSerivce } from "./cron/cron-service";
import { EmailService } from "./email/email.service";
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs';
import { MongoLogDatasource } from '../infrastructure/datasources/mongo-log.datasource';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { LogSeverityLevel } from '../domain/entities/log.entity';

const logRepository = new LogRepositoryImpl(
  new FileSystemDatasource,
  // new MongoLogDatasource

)

const emailService = new EmailService();

export class Server {

  public static async start() {

   console.log(`Server started..`);

    // new SendEmailLogs(
    //   emailService, 
    //   fileSystemLogRepository
    // )
    // .execute(['alexcero_@hotmail.com'])

    const logs = await logRepository.getLogs(LogSeverityLevel.high);
    console.log(logs)

    // CronSerivce.createJob(
    //     '*/5 * * * * *',
    //     () =>{
    //         const url = envs.URL;
    //        new CheckService(
    //         logRepository,
    //         () => console.log(`${url} is ok`),
    //         (error) => console.log(error),

    //        ).execute(url);
    //     }
    // );
  };
  
  
}
