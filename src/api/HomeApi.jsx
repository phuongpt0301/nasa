import { SEARCH_URL } from '../private/config';

class HomeApi {
  static async search (strSearch) {
    const request = new Request(SEARCH_URL(strSearch), {
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
