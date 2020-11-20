import nodemailer, { Transporter } from "nodemailer";

import IMailTemplateProvider from "@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider";

import IMailProvider from "../models/IMailProvider";
import ISendMailDTO from "../dtos/ISendMailDTO";

class GmailMailProvider implements IMailProvider {
  private client: Transporter;

  constructor(private mailTemplateProvider: IMailTemplateProvider) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    
    this.client = transporter;
  }

  public async sendMail({ to, from, subject, templateData }: ISendMailDTO) {
    const info = await this.client.sendMail({
      from: {
        name: from?.name || "AnimeLine",
        address: from?.email || "no-reply@animeline.ml",
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });

    return info.messageId;
  }
}

export default GmailMailProvider;
