import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
class AllAnimeData {
  @Field()
  id!: string;

  @Field()
  category_name!: string;

  @Field()
  category_image!: string;
}

@ObjectType()
class AllAnime {
  @Field(() => Int)
  page!: number;

  @Field(() => Int)
  perPage!: number;

  @Field(() => Int)
  total!: number;

  @Field(() => Int)
  totalPages!: number;

  @Field(() => [AllAnimeData])
  data!: AllAnimeData[];
}

export default AllAnime;
