import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
class AnimeEpisodesData {
  @Field()
  video_id!: string;

  @Field()
  category_id!: string;

  @Field()
  title!: string;
}

@ObjectType()
class AnimeEpisodes {
  @Field(() => Int)
  page!: number;

  @Field(() => Int)
  perPage!: number;

  @Field(() => Int)
  total!: number;

  @Field(() => Int)
  totalPages!: number;

  @Field(() => [AnimeEpisodesData])
  data!: AnimeEpisodesData[];
}

export default AnimeEpisodes;
