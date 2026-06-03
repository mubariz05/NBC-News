
const fetchFromAPI = async (endpoint, params = {}) => {
    const url = new URL(`${import.meta.env.VITE_BASE_URL}/${endpoint}`);
    Object.entries(params).forEach(([key, val]) => url.searchParams.append(key, val));
    url.searchParams.append("apiKey", import.meta.env.VITE_NEWS_API_KEY);

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`NewsAPI error: ${res.status}`);
    return res.json();
};


export const fetchArticlesByQuery = (query, pageSize = 10) =>
    fetchFromAPI("everything", {
        q: query,
        pageSize,
        sortBy: "publishedAt",
        language: "tr"
    });

export const fetchBreakingNews = () =>
    fetchFromAPI("everything", {
        q: "breaking",
        pageSize: 5,
        sortBy: "publishedAt",
        language: "tr"
    });

export const fetchHeroArticle = () =>
    fetchFromAPI("everything", {
        q: "trending",
        pageSize: 1,
        sortBy: "popularity",
        language: "tr"
    });

// Tək məqalə (query ilə)
export const fetchArticleBySlug = (slug) =>
    fetchFromAPI("everything", { q: slug, pageSize: 1, sortBy: "relevancy" });