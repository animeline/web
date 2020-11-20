import fetch from "node-fetch";
import { URLSearchParams } from "url";

class AnimeService {
  public baseURL: string;

  constructor() {
    this.baseURL = "https://appanimeplus.tk";
  }

  public async findAll(page: number, limit: number, options = {}) {
    const data = await this.request("/api-animesbr-10.php", options);

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

  public async findByEpisode(id: string) {
    const data = await this.request("/api-animesbr-10.php", { episodios: id });

    if (data === null) return new Error("Episode not found.");

    return data[0];
  }

  async findById(id: string, page: number, limit: number) {
    const responses = await Promise.all([
      this.request("/api-animesbr-10.php", { info: id }),
      this.request("/api-animesbr-10.php", { cat_id: id }),
    ]);

    const [anime, episodes] = responses;

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

  public async request(endpoint: string, queryParams = {}) {
    const params = new URLSearchParams(queryParams);

    return fetch(this.baseURL + endpoint + `?${params.toString()}`)
      .then((response) => response.json())
      .then((data) => (data ? data : null))
      .catch((err) => new Error(err));
  }
}

export default AnimeService;
