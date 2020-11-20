import { Resolver, Mutation, Arg } from "type-graphql";

import BCryptHashProvider from "@modules/users/providers/HashProvider/implementations/BCryptHashProvider";
import CreateUserService from "@modules/users/services/CreateUserService";

import UserSchema from "../schemas/User";

@Resolver(UserSchema)
class CreateUserResolver {
  @Mutation(() => UserSchema, {
    description: "Create a new user",
  })
  async createUser(
    @Arg("email") email: string,
    @Arg("name") name: string,
    @Arg("password") password: string
  ) {
    const bcryptHashProvider = new BCryptHashProvider();
    const createUserService = new CreateUserService(bcryptHashProvider);

    return await createUserService.execute({
      email,
      name,
      password,
    });
  }
}

export default CreateUserResolver;
