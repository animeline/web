import { getCustomRepository } from "typeorm";
import { isAfter, addHours } from "date-fns";

import UserRepository from "@modules/users/infra/typeorm/repositories/UserRepository";
import UserTokenRepository from "@modules/users/infra/typeorm/repositories/UserTokenRepository";

import IResetPasswordRequestDTO from "../dtos/IResetPasswordRequestDTO";

import IHashProvider from "../providers/HashProvider/models/IHashProvider";

interface IResponse {
  message: string;
}

class ResetPasswordService {
  constructor(private hashProvider: IHashProvider) {}

  public async execute({
    token,
    password,
  }: IResetPasswordRequestDTO): Promise<IResponse> {
    const userRepository = getCustomRepository(UserRepository);
    const userTokenRepository = getCustomRepository(UserTokenRepository);

    const userToken = await userTokenRepository.findByToken(token);

    if (!userToken) {
      throw new Error("User token does not exists");
    }

    const user = await userRepository.findById(userToken.user_id);

    if (!user) {
      throw new Error("User does not exists");
    }

    const tokenCreatedAt = userToken.created_at;

    const compareDate = addHours(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new Error("Token expired.");
    }

    user.password = await this.hashProvider.generateHash(password);

    await userRepository.save(user);

    return { message: "Password changed" };
  }
}

export default ResetPasswordService;
