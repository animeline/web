import { Resolver, Query, Arg } from "type-graphql";

import { categories } from "@modules/animes/data";

import AnimeService from "@modules/animes/services/AnimeService";

import AnimeByCategorySchema from "../schemas/AnimeByCategory";

@Resolver(AnimeByCategorySchema)
class AnimeByCategoryResolver {  
  @Query(() => AnimeByCategorySchema, {
    name: "animeByCategory",
    description: "Search anime data by category.",
  })
  findByCategory(
    @Arg("category") category: string,
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("limit", { defaultValue: 12 }) limit: number
  ) {
    if (
      !(
        categories.find((cat) => cat === category) ||
        categories.find((cat) => cat.toLowerCase() === category.toLowerCase())
      )
    )
      return new Error("Category not found.");
      
    const animeService = new AnimeService();

    return animeService.findAll(page, limit, { categoria: category });
  }
}

export default AnimeByCategoryResolver;
