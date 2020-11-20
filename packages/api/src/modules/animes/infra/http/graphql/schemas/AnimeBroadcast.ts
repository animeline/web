import { ObjectType, Field } from "type-graphql";

@ObjectType()
class AnimeBroadcast {  
  @Field()
  video_id!: string;

  @Field()
  category_id!: string;    
  
  @Field()
  location!: string;  
  
  @Field()
  locationsd!: string;
}

export default AnimeBroadcast;
