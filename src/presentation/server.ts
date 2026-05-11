import { LogRepositoryImpl } from './../infrastructure/repositories/log.repository.impl';
import { envs } from "../config/plugins/envs.plugin";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { CronSerivce } from "./cron/cron-service";
import { EmailService } from "./email/email.service";
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs';

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource,

)

const emailService = new EmailService();

export class Server {

  public static start() {

   console.log(`Server started`);

    new SendEmailLogs(
      emailService, 
      fileSystemLogRepository
    )
    .execute(['alexcero_@hotmail.com'])



  //   CronSerivce.createJob(
  //       '*/4 * * * * *',
  //       () =>{
  //           const url = envs.URL;
  //          new CheckService(
  //           fileSystemLogRepository,
  //           () => console.log(`${url} is ok`),
  //           (error) => console.log(error),

  //          ).execute(url);
  //       }
  //   );
  };
  
  
}
