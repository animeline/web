import { getCustomRepository } from "typeorm";
import { resolve } from "path";

import UserRepository from "@modules/users/infra/typeorm/repositories/UserRepository";
import UserTokenRepository from "@modules/users/infra/typeorm/repositories/UserTokenRepository";

import IMailProvider from "@shared/container/providers/MailProvider/models/IMailProvider";

import ISendForgotPasswordRequestDTO from "../dtos/ISendForgotPasswordRequestDTO";

class SendForgotPasswordEmailService {
  constructor(private mailProvider: IMailProvider) {}

  public async execute({
    email,
  }: ISendForgotPasswordRequestDTO) {
    const userRepository = getCustomRepository(UserRepository);
    const userTokenRepository = getCustomRepository(UserTokenRepository);

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new Error("User does not exists.");
    }

    const { token } = await userTokenRepository.generate(user.id);

    const forgotPasswordMail = resolve(
      __dirname,
      "..",
      "views",
      "forgot_password.hbs"
    );

    const messageId = await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: "[Animeline] Recuperação de senha",
      templateData: {
        file: forgotPasswordMail,
        variables: {
          name: user.name,
          link: `${process.env.WEB_URL}/reset-password?token=${token}`,
        },
      },
    });

    return { messageId, sent: true };
  }
}

export default SendForgotPasswordEmailService;
