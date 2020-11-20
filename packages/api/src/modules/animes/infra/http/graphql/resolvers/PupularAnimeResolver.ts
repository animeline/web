import { Resolver, Query, Arg } from "type-graphql";

import AnimeService from "@modules/animes/services/AnimeService";

import PopularAnimeSchema from "../schemas/PopularAnime";

@Resolver(PopularAnimeSchema)
class PupularAnimeResolver {  
  @Query(() => PopularAnimeSchema, {
    name: "popularAnime",
    description: "Search for the most popular anime.",
  })
  findAllPopular(
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("limit", { defaultValue: 12 }) limit: number
  ) {
    const animeService = new AnimeService();
    
    return animeService.findAll(page, limit, { populares: "" });
  }
}

export default PupularAnimeResolver;
