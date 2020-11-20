import { Resolver, Query, Arg } from "type-graphql";

import { letters } from "@modules/animes/data";

import AnimeService from "@modules/animes/services/AnimeService";

import AnimeByLetterSchema from "../schemas/AnimeByLetter";

@Resolver(AnimeByLetterSchema)
class AnimeByLetterResolver {  
  @Query(() => AnimeByLetterSchema, {
    name: "animeByLetter",
    description: "Search anime data by letter.",
  })
  findByLetter(
    @Arg("letter") letter: string,
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("limit", { defaultValue: 12 }) limit: number
  ) {
    if (
      !(
        letters.find((lat) => lat === letter) ||
        letters.find((lat) => lat.toLowerCase() === letter.toLowerCase())
      )
    )
      return new Error("Letter not found.");

    const animeService = new AnimeService();
      
    return animeService.findAll(page, limit, { letra: letter });
  }
}

export default AnimeByLetterResolver;
