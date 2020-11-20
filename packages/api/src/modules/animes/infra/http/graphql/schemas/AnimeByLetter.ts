import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
class AnimeByLetterData {
  @Field()
  id!: string;

  @Field()
  category_name!: string;

  @Field()
  category_image!: string;
}

@ObjectType()
class AnimeByLetter {
  @Field(() => Int)
  page!: number;

  @Field(() => Int)
  perPage!: number;

  @Field(() => Int)
  total!: number;

  @Field(() => Int)
  totalPages!: number;

  @Field(() => [AnimeByLetterData])
  data!: AnimeByLetterData[];
}

export default AnimeByLetter;
