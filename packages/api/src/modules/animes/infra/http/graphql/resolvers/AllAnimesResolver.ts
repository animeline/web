import { Resolver, Query, Arg } from "type-graphql";

import AnimeService from "@modules/animes/services/AnimeService";

import AllAnimeSchema from '../schemas/AllAnime';

@Resolver(AllAnimeSchema)
class AllAnimeResolver {    
  @Query(() => AllAnimeSchema, {
    name: "allAnimes",
    description: "Fetch data from all anime.",
  })
  findAll(
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("limit", { defaultValue: 12 }) limit: number
  ) {
    const animeService = new AnimeService();
    
    return animeService.findAll(page, limit);
  }
}

export default AllAnimeResolver;
