const photoApiUrl = new URL('/API/photos/', window.location);

const getUrl = (path) => new URL(path, photoApiUrl);

export default class PhotoService {
  static async putNewPhoto(newPhoto) {
    const response = await fetch(getUrl(`putNewPhoto`), {
      //Возвращает объект с ссылкой
      method: 'POST',
      body: JSON.stringify(newPhoto),
    });

    return response;
  }

  static async uploadPhoto(formData) {
    // Возвращает ссылку
    const response = await fetch(getUrl(`uploadPhoto`), {
      method: 'POST',
      body: formData,
    });

    return response;
  }

  static async getBy(key, value) {
    const response = fetch(getUrl(`getBy/?${key}=${value}`));

    return response;
  }

  static async getAll(limit) {
    const response = fetch(getUrl(`getAll/?limit=${limit}`));

    return response;
  }

  static async deleteById(id) {
    const response = fetch(getUrl(`deleteById`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ id }),
    });

    return response;
  }

  static async updatePhoto(photo) {
    const response = fetch(getUrl(`updatePhoto`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(photo),
    });

    return response;
  }
}
