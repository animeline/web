import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
class PopularAnimeData {
  @Field()
  id!: string;

  @Field()
  category_name!: string;

  @Field()
  category_image!: string;
}

@ObjectType()
class PopularAnime {
  @Field(() => Int)
  page!: number;

  @Field(() => Int)
  perPage!: number;

  @Field(() => Int)
  total!: number;

  @Field(() => Int)
  totalPages!: number;

  @Field(() => [PopularAnimeData])
  data!: PopularAnimeData[];
}

export default PopularAnime;
