import animeApi from "@infra/services/anime";

class AnimeService {
  async findAll(options = {}, page: number, limit: number) {
    const { data } = await animeApi.get("/api-animesbr-10.php", options);

    if (data === null) return new Error("Data not found.");

    const total = data.length;
    const totalPages = Math.ceil(total / Number(limit));

    return {
      page: Number(page),
      perPage: Number(limit),
      total,
      totalPages,
      data: data.slice(
        Number(page) * Number(limit) - Number(limit),
        Number(page) * Number(limit)
      ),
    };
  }

  async findByEpisode(id: string) {
    const { data } = await animeApi.get("/api-animesbr-10.php", {
      params: { episodios: id },
    });

    if (data === null) return new Error("Episode not found.");
    
    return data[0];
  }

  async findById(id: string, page: number, limit: number) {
    const responses = await Promise.all([
      animeApi.get("/api-animesbr-10.php", { params: { info: id } }),
      animeApi.get("/api-animesbr-10.php", { params: { cat_id: id } }),
    ]);

    const [animeInfo, animeEpisodes] = responses;

    const anime = animeInfo.data;
    const episodes = animeEpisodes.data;

    if (anime === null && episodes === null)
      return new Error("Anime not found.");

    const total = episodes.length;
    const totalPages = Math.ceil(total / Number(limit));

    return {
      ...anime[0],
      category_image: `https://cdn.appanimeplus.tk/img/${anime[0].category_image}`,
      episodes: {
        page: Number(page),
        perPage: Number(limit),
        total,
        totalPages,
        data: episodes.slice(
          Number(page) * Number(limit) - Number(limit),
          Number(page) * Number(limit)
        ),
      },
    };
  }
}

export default new AnimeService();
