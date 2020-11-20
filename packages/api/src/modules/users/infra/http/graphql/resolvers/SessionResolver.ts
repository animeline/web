import { Resolver, Mutation, Arg } from "type-graphql";

import BCryptHashProvider from "@modules/users/providers/HashProvider/implementations/BCryptHashProvider";
import UserAuthService from "@modules/users/services/UserAuthService";

import AuthSchema from "../schemas/Auth";

@Resolver(AuthSchema)
class SessionResolver {
  @Mutation(() => AuthSchema, {
    description: "Creates user authentication",
  })
  async signIn(@Arg("email") email: string, @Arg("password") password: string) {
    const bcryptHashProvider = new BCryptHashProvider();
    const userAuthService = new UserAuthService(bcryptHashProvider);

    return await userAuthService.execute({
      email,
      password,
    });
  }
}

export default SessionResolver;
