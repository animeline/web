import { getCustomRepository } from "typeorm";

import User from "@modules/users/infra/typeorm/entities/User";

import UserRepository from "@modules/users/infra/typeorm/repositories/UserRepository";

import IShowProfileRequestDTO from "../dtos/IShowProfileRequestDTO";

class ShowProfileService {
  async execute({ id }: IShowProfileRequestDTO): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);    
    
    const user = await userRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

export default ShowProfileService;
