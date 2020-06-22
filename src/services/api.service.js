class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  async getRepositoriesByPage(query, page) {
    query = query || 'stars:>0'
    const url = this.baseUrl + `/search/repositories?q=${query}&page=${page}&per_page=10&sort=stars`
    try {
      const data = await useFetch(url)
      return data['items']
    } catch (error) {
      console.error(error)
    }
  }

  async getRepositoryByName(name) {
    const url = this.baseUrl + `/repos/` + name
    let repository = {}
    try {
      const repos = await useFetch(url)
      repository.name = repos.name
      repository.stars = repos.stargazers_count
      repository.updateDate = new Date(repos.updated_at).toLocaleString()
      repository.user = repos.owner.login
      repository.userAvatar = repos.owner.avatar_url
      repository.about = repos.description

      const langs = await useFetch(url + '/languages')
      repository.languages = Object.keys(langs)

      const contrib = await useFetch(url + '/contributors?page=1&per_page=10')
      repository.contributors = contrib.map(user => ({ login: user.login, avatar: user.avatar_url, userUrl: user.html_url }))
      return repository
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