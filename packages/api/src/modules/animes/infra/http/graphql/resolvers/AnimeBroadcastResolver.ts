import { Resolver, Query, Arg } from "type-graphql";

import AnimeService from "@modules/animes/services/AnimeService";

import AnimeBroadcastSchema from "../schemas/AnimeBroadcast";

@Resolver(AnimeBroadcastSchema)
class AnimeBroadcastResolver {
  @Query(() => AnimeBroadcastSchema, {
    name: "animeBroadcast",
    description: "Fetch an episode's streaming data.",
  })
  findStreamingEpisodeById(@Arg("id") id: string) {
    const animeService = new AnimeService();
    
    return animeService.findByEpisode(id);
  }
}

export default AnimeBroadcastResolver;
