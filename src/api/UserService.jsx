const userApiUrl = new URL('/API/users/', window.location);

const getUrl = (path) => new URL(path, userApiUrl);

export default class UserService {
  static async getAll(limit) {
    const response = fetch(getUrl(`getAll/?_limit=${limit}`));

    return response;
  }

  static async getBy(key, value) {
    const response = fetch(getUrl(`getBy/?${key}=${value}`));

    return response;
  }

  static async getCurrentUser() {
    const response = fetch(getUrl(`getCurrentUser`));

    return response;
  }

  static async authorization(dataObject) {
    const response = await fetch(getUrl(`authorization`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(dataObject),
    });

    return response;
  }

  static async registration(dataObject) {
    const response = await fetch(getUrl(`registration`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(dataObject),
    });

    return response;
  }

  static async getUsersByName(name) {
    const response = fetch(getUrl(`getUsersByName/?name=${name}`));

    return response;
  }

  static async logout() {
    const response = await fetch(getUrl(`logout`));

    return response;
  }
}
