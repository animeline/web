import { Resolver, Query, Arg } from "type-graphql";

import { categories, letters } from "@data";

import Anime from "./Anime.type";
import Data from "./Data.type";
import DataArray from "./DataArray.type";

import AnimeService from "./AnimeService";

@Resolver(Anime)
class CategoryResolver {
  @Query(() => DataArray, {
    description: "Fetch data from all anime.",
  })
  findAll(
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("limit", { defaultValue: 12 }) limit: number
  ) {
    return AnimeService.findAll({}, page, limit);
  }

  @Query(() => DataArray, {
    description: "Search for the most popular anime.",
  })
  findAllPopular(
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("limit", { defaultValue: 12 }) limit: number
  ) {
    return AnimeService.findAll({ params: { populares: "" } }, page, limit);
  }

  @Query(() => DataArray, {
    description: "Fetch the data of the last released anime.",
  })
  findByLatest(
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("limit", { defaultValue: 12 }) limit: number
  ) {
    return AnimeService.findAll({ params: { latest: "" } }, page, limit);
  }

  @Query(() => DataArray, {
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

    return AnimeService.findAll(
      { params: { categoria: category } },
      page,
      limit
    );
  }

  @Query(() => DataArray, {
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

    return AnimeService.findAll({ params: { letra: letter } }, page, limit);
  }

  @Query(() => DataArray, {
    description: "Fetch the data of episodes of an anime.",
  })
  findAllEpisodes(
    @Arg("id") id: string,
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("limit", { defaultValue: 6 }) limit: number
  ) {
    return AnimeService.findAll({ params: { cat_id: id } }, page, limit);
  }

  @Query(() => Data, {
    description: "Fetch an episode's streaming data.",
  })
  findStreamingEpisodeById(@Arg("id") id: string) {
    return AnimeService.findByEpisode(id);
  }

  @Query(() => DataArray, {
    description: "Search anime data by name.",
  })
  findByName(
    @Arg("name") name: string,
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("limit", { defaultValue: 12 }) limit: number
  ) {
    return AnimeService.findAll({ params: { search: name } }, page, limit);
  }

  @Query(() => Anime, {
    description: "Get the details of an anime.",
  })
  findById(
    @Arg("id") id: string,
    @Arg("page", { defaultValue: 1 }) page: number,
    @Arg("limit", { defaultValue: 6 }) limit: number
  ) {
    return AnimeService.findById(id, page, limit);
  }
}

export default CategoryResolver;
