import { getCustomRepository } from "typeorm";

import UserRepository from "@modules/users/infra/typeorm/repositories/UserRepository";

import ICreateUserRequestDTO from "../dtos/ICreateUserRequestDTO";

import IHashProvider from "../providers/HashProvider/models/IHashProvider";

class CreateUserService {
  constructor(private hashProvider: IHashProvider) {}

  async execute({
    email,
    name,
    password,
  }: ICreateUserRequestDTO) {
    const userRepository = getCustomRepository(UserRepository);

    const checkUserExists = await userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new Error("Email address already used.");
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await userRepository.createAndSave({
      name,
      email,
      password: hashedPassword,
    });  
    
    return user;
  }
}

export default CreateUserService;
