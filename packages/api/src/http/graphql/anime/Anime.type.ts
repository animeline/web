import { ObjectType, Field } from "type-graphql";

import Data from './DataArray.type';

@ObjectType()
class Anime {
  @Field()
  id!: string;
  
  @Field()
  category_name!: string;
  
  @Field()
  category_image!: string;
  
  @Field()
  category_description!: string;
  
  @Field()
  category_genres!: string;
  
  @Field()
  ano!: string;     
  
  @Field()
  episodes!: Data;
}

export default Anime;