import { ObjectType, Field } from "type-graphql";

@ObjectType()
class User {
  @Field()
  id!: string;

  @Field()
  email!: string;

  @Field()
  name!: string;
}

export default User;
