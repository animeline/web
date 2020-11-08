import { ObjectType, Field } from 'type-graphql';

@ObjectType()
class Data {   
  // Search
  @Field()
  id!: string;
  
  @Field()
  category_name!: string;
  
  @Field()
  category_image!: string;  
  
  // Episode  
  @Field()
  video_id!: string;

  @Field()
  category_id!: string;
  
  @Field()
  title!: string;  
  
  // Streaming
  
  @Field()
  location!: string;  
  
  @Field()
  locationsd!: string;
}

export default Data;