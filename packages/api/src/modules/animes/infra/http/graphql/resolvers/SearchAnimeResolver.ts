import { Resolver, Query, Arg } from "type-graphql";

import AnimeService from "@modules/animes/services/AnimeService";

import SearchAnimeSchema from "../schemas/SearchAnime";

@Resolver(SearchAnimeSchema)
class SearchAnimeResolver {
  @Query(() => SearchAnimeSchema, {
    name: "searchAnime",
    description: "Search anime data by name.",
  })
  findByName(
    @Arg("name") name: string,
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("limit", { defaultValue: 12 }) limit: number
  ) {
    const animeService = new AnimeService();

    return animeService.findAll(page, limit, { search: name });
  }
}

export default SearchAnimeResolver;
