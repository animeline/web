import { Resolver, Query, Arg } from "type-graphql";

import GmailMailProvider from "@shared/container/providers/MailProvider/implementations/GmailMailProvider";
import HandlebarsMailTemplateProvider from "@shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider";
import SendForgotPasswordEmailService from "@modules/users/services/SendForgotPasswordEmailService";

import ForgotPasswordSchema from "../schemas/ForgotPassword";

@Resolver(ForgotPasswordSchema)
class ForgotPasswordResolver {
  @Query(() => ForgotPasswordSchema, {
    description: "Send forgot password email",
  })
  async forgotPassword(@Arg("email") email: string) {
    const handlebarsMailTemplateProvider = new HandlebarsMailTemplateProvider();
    const gmailMailProvider = new GmailMailProvider(
      handlebarsMailTemplateProvider
    );
    const sendForgotPasswordEmailService = new SendForgotPasswordEmailService(
      gmailMailProvider
    );

    await sendForgotPasswordEmailService.execute({ email });            
  }
}

export default ForgotPasswordResolver;
