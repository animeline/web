import { ObjectType, Field } from "type-graphql";

@ObjectType()
class AnimeDetails {
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
  count!: string;

  @Field()
  off!: string;
}

export default AnimeDetails;
