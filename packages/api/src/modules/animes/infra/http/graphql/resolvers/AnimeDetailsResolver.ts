import { Resolver, Query, Arg } from "type-graphql";

import AnimeService from "@modules/animes/services/AnimeService";

import AnimeDetailsSchema from "../schemas/AnimeDetails";

@Resolver(AnimeDetailsSchema)
class AnimeDetailsResolver {  
  @Query(() => AnimeDetailsSchema, {
    name: "animeDetails",
    description: "Get the details of an anime.",
  })
  findById(
    @Arg("id") id: string,
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("limit", { defaultValue: 6 }) limit: number
  ) {
    const animeService = new AnimeService();
    
    return animeService.findById(id, page, limit);
  }
}

export default AnimeDetailsResolver;
