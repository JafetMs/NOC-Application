import { LogRepositoryImpl } from './../infrastructure/repositories/log.repository.impl';
import { envs } from "../config/plugins/envs.plugin";
import { LogRepository } from "../domain/repository/log.repository";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { CronSerivce } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource,

)

export class Server {
  public static start() {

    console.log(`Server started`);

   const emailService = new EmailService(fileSystemLogRepository);
  //  emailService.sendEmail({
  //   to: 'alexcero_@hotmail.com',
  //   subject: 'TEST',
  //   htmlBody: `
  //   <h3>Logs de sistema - NOC</h3>
  //   <p>LogRepositoryImpl</p>
    
  //   `
  //  });

  emailService.sendEmailWithFileSystemLogs([
    'alexcero_@hotmail.com',
  ])
    CronSerivce.createJob(
        '*/4 * * * * *',
        () =>{
            const url = envs.URL;
           new CheckService(
            fileSystemLogRepository,
            () => console.log(`${url} is ok`),
            (error) => console.log(error),

           ).execute(url);
        }
    );
  };
  
  
}
