import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronSerivce } from "./cron/cron-service";

export class Server {
  public static start() {
    console.log(`Server started`);

    CronSerivce.createJob(
        '*/4 * * * * *',
        () =>{
            const url = 'https://google.com'
           new CheckService(
            () => console.log(`${url} is ok`),
            (error) => console.log(error)
           ).execute(url);
        }
    );
  };
  
  
}
