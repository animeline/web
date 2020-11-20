import { Resolver, Query, Arg } from "type-graphql";

import AnimeService from "@modules/animes/services/AnimeService";

import LatestAnimesSchema from '../schemas/LatestAnimes';

@Resolver(LatestAnimesSchema)
class LastAnimesResolver {    
  @Query(() => LatestAnimesSchema, {
    name: "lastAnimes",
    description: "Fetch the data of the last released anime.",
  })
  findByLatest(
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("limit", { defaultValue: 12 }) limit: number
  ) {
    const animeService = new AnimeService();
    
    return animeService.findAll(page, limit, { latest: "" });
  }
}

export default LastAnimesResolver;
