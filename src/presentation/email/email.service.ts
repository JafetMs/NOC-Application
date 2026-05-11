import nodemailer from "nodemailer";
import { envs } from "../../config/plugins/envs.plugin";
import { LogRepository } from "../../domain/repository/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachement[];
}

interface Attachement {
    fileName: string;
    path: string;
}

const origin = 'email.service.ts'

export class EmailService {
  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  constructor(

  ){}

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachments =[] } = options;
    try {

        const sentInformation = await this.transporter.sendMail({
            to: to,
            subject,
            html: htmlBody,
           attachments
        })

        const log = new LogEntity({
            level: LogSeverityLevel.low,
            message: 'Email Sent',
            origin
        })

      return true;
    } catch (error) {

        const log = new LogEntity({
            level: LogSeverityLevel.high,
            message: 'Email not sent',
            origin
        })
      return false;
    }
  }


  async sendEmailWithFileSystemLogs( to:string | string[]){
    const subject = 'Server logs';
    const htmlBody = `
    <h3>Logs de sistema attachments - NOC</h3>
    <p>LogRepositoryImpl</p>
    
    `;

    const attachments: Attachement[] = [
        {fileName: 'logs-all.log', path:'./logs/logs-all.log'},
        {fileName: 'logs-high.log', path:'./logs/logs-high.log'},
        {fileName: 'logs-medum.log', path:'./logs/logs-medium.log'}
    ]
    return this.sendEmail({
        to,subject,attachments,htmlBody
    })

  };

}
