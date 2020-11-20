import { ObjectType, Field } from "type-graphql";

@ObjectType()
class ForgotPassword {
  @Field()
  messageId!: string;
  
  @Field()
  sent!: boolean;
}

export default ForgotPassword;
