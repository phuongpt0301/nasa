import { SEARCH_URL } from '../private/config';

class HomeApi {
  static async search (page, strSearch) {
    const request = new Request(SEARCH_URL(page, strSearch), {
      method: 'GET'
    });
    try {
        const response = await fetch(request);
        return response.json();
    } catch (error) {
        return error;
    }
  }
}

export default HomeApi;
