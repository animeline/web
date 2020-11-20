import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Profile {
  @Field()
  id!: string;

  @Field()
  email!: string;

  @Field()
  name!: string;
}

export default Profile;
