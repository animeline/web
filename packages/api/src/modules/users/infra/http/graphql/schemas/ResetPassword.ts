import { ObjectType, Field } from "type-graphql";

@ObjectType()
class ResetPassword {
  @Field()
  message!: string;    
}

export default ResetPassword;
