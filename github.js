class GitHub {
  constructor() {
    this.client_id = 'f568503a086ee702b145';
    this.client_secret = '8f7bfb103e9b5cae97961b847f85cece514074e5';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    try {
      const profileReponse = await fetch(
        `https://api.github.com/users/${user}?client_id=${
          this.client_id
        }&client_secret=${this.client_secret}`
      );

      const reposReponse = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=${
          this.repos_count
        }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
          this.client_secret
        }`
      );

      const profile = await profileReponse.json();
      const repos = await reposReponse.json();

      return {
        profile,
        repos
      };
    } catch (error) {
      throw new Error(`Something went wrong ${error.message}`);
    }
  }
}
