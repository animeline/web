import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
class SearchAnimeData {
  @Field()
  id!: string;

  @Field()
  category_name!: string;

  @Field()
  category_image!: string;
}

@ObjectType()
class SearchAnime {
  @Field(() => Int)
  page!: number;

  @Field(() => Int)
  perPage!: number;

  @Field(() => Int)
  total!: number;

  @Field(() => Int)
  totalPages!: number;

  @Field(() => [SearchAnimeData])
  data!: SearchAnimeData[];
}

export default SearchAnime;
