class GitHub {
  constructor() {
    this.client_id = 'f568503a086ee702b145';
    this.client_secret = '8f7bfb103e9b5cae97961b847f85cece514074e5';
  }

  async getUser(user) {
    const profileReponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileReponse.json();

    return {
      profile
    };
  }
}
