const userApiUrl = new URL('/API/users/', window.location);

const createURL = (path) => new URL(path, userApiUrl);

export default class UserService {
  static async getAll(limit) {
    const response = fetch(createURL(`getAll/?_limit=${limit}`));

    return response;
  }

  static async getBy(key, value) {
    const response = fetch(createURL(`getBy/?${key}=${value}`));

    return response;
  }

  static async getCurrentUser() {
    const response = fetch(createURL(`getCurrentUser`));

    return response;
  }

  static async authorization(dataObject) {
    const response = await fetch(createURL(`authorization`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(dataObject),
    });

    return response;
  }

  static async registration(dataObject) {
    const response = await fetch(createURL(`registration`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(dataObject),
    });

    return response;
  }

  static async getUsersByName(name) {
    const response = fetch(createURL(`getUsersByName/?name=${name}`));

    return response;
  }

  static async logout() {
    const response = await fetch(createURL(`logout`));

    return response;
  }
}
