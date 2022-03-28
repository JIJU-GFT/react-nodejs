class ApiService {

  static handlePost = async () => {
    const response = await fetch('/getConnection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    //   body: JSON.stringify({}),
    });
    const body = await response.text();

    return body;
  };
}

export default ApiService;