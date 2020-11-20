import { EntityRepository, Repository } from "typeorm";

import ICreateUserRequestDTO from "@modules/users/dtos/ICreateUserRequestDTO";

import User from "../entities/User";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async createAndSave({
    email,
    name,
    password,
  }: ICreateUserRequestDTO): Promise<User> {    
    const user = await this.create({
      email,
      name,
      password,
    });
    
    await this.save(user);

    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        email,
      },
    });

    return user;
  }
}

export default UserRepository;
