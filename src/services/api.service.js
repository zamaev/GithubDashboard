class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  async getRepositoriesByPage(query, page) {
    const url = query
      ? this.baseUrl + `/search/repositories?q=${query}&page=${page}&per_page=10`
      : this.baseUrl + `/search/repositories?q=stars:>0&page=${page}&per_page=10&sort=stars`
    try {
      const data = await useFetch(url)
      return data['items']
    } catch (error) {
      console.error(error)
    }
  }
}

async function useFetch(request) {
  const response = await fetch(request)
  return await response.json()
}

export const apiService = new ApiService('https://api.github.com')