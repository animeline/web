import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
class AnimeByCategoryData {
  @Field()
  id!: string;

  @Field()
  category_name!: string;

  @Field()
  category_image!: string;
}

@ObjectType()
class AnimeByCategory {
  @Field(() => Int)
  page!: number;

  @Field(() => Int)
  perPage!: number;

  @Field(() => Int)
  total!: number;

  @Field(() => Int)
  totalPages!: number;

  @Field(() => [AnimeByCategoryData])
  data!: AnimeByCategoryData[];
}

export default AnimeByCategory;
