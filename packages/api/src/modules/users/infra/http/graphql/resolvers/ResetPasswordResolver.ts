import { Resolver, Mutation, Arg } from "type-graphql";

import BCryptHashProvider from "@modules/users/providers/HashProvider/implementations/BCryptHashProvider";
import ResetPasswordService from "@modules/users/services/ResetPasswordService";

import ResetPasswordSchema from "../schemas/ResetPassword";

@Resolver(ResetPasswordSchema)
class ResetPasswordResolver {
  @Mutation(() => ResetPasswordSchema, {
    description: "Reset your old password",
  })
  async resetPassword(
    @Arg("token") token: string,
    @Arg("password") password: string
  ) {
    const bcryptHashProvider = new BCryptHashProvider();
    const resetPasswordService = new ResetPasswordService(bcryptHashProvider);
    
    return await resetPasswordService.execute({ token, password });      
  }
}

export default ResetPasswordResolver;
