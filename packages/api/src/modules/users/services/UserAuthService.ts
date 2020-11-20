import { getCustomRepository } from "typeorm";
import { sign } from "jsonwebtoken";

import AuthConfig from "@config/auth";

import User from "@modules/users/infra/typeorm/entities/User";

import UserRepository from "@modules/users/infra/typeorm/repositories/UserRepository";

import IUserAuthRequestDTO from "../dtos/IUserAuthRequestDTO";

import IHashProvider from "../providers/HashProvider/models/IHashProvider";

interface IResponse {
  user: User;
  token: string;
}

class UserAuthService {
  constructor(private hashProvider: IHashProvider) {}

  async execute({ email, password }: IUserAuthRequestDTO): Promise<IResponse> {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Incorrect email/password combination.");
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password
    );

    if (!passwordMatched) {
      throw new Error("Incorrect email/password combination.");
    }

    const token = sign({ id: user.id }, String(AuthConfig.jwt.secret), {
      expiresIn: AuthConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}

export default UserAuthService;
