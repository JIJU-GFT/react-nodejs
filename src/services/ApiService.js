class ApiService {
  static handlePost = async (payload) => {
    const response = await fetch('/getConnection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const body = await response.text();

    return body;
  };
}

export default ApiService;
