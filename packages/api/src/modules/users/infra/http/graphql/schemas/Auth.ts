import { ObjectType, Field } from "type-graphql";

import UserData from './User';

@ObjectType()
class Auth {
  @Field()
  token!: string;

  @Field(() => UserData)
  user!: UserData;
}

export default Auth;
