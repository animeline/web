import { Resolver, Query, Arg } from "type-graphql";

import AnimeService from "@modules/animes/services/AnimeService";

import AnimeEpisodesSchema from "../schemas/AnimeEpisodes";

@Resolver(AnimeEpisodesSchema)
class AnimeEpisodesResolver {
  @Query(() => AnimeEpisodesSchema, {
    name: "animeEpisodes",
    description: "Fetch the data of episodes of an anime.",
  })
  findAllEpisodes(
    @Arg("id") id: string,
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("limit", { defaultValue: 6 }) limit: number
  ) {
    const animeService = new AnimeService();

    return animeService.findAll(page, limit, { cat_id: id });
  }
}

export default AnimeEpisodesResolver;
