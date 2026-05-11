import { LogRepositoryImpl } from './../../../infrastructure/repositories/log.repository.impl';
import { EmailService } from "../../../presentation/email/email.service";
import { LogRepository } from '../../repository/log.repository';
import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';

interface SendLogEmailUseCase{
    execute:(to: string | string []) => Promise<boolean>;
}

const origin: string = 'send-email-logs.ts';

export class SendEmailLogs implements SendLogEmailUseCase{


    constructor(
        private readonly emailService: EmailService,
        private readonly logRepository: LogRepository
    ){}


    async execute(to:string | string[]){

        try {
            const sent = await this.emailService.sendEmailWithFileSystemLogs('alexcero_@hotmail.com')

            if(!sent){
                throw new Error('Email log not sent');
            }

            const log = new LogEntity({
                message:`Email sent`,
                level: LogSeverityLevel.low,
                origin
            })

            this.logRepository.saveLog(log);
            return false;

                return true
        } catch (error) {
         
            const log = new LogEntity({
                message:`${error}`,
                level: LogSeverityLevel.high,
                origin
            })

            this.logRepository.saveLog(log);
            return false;
        }
    }
}