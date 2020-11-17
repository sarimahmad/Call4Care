export default class Route {
  constructor(rootUrl) {
    this.rootUrl = rootUrl;
  }

  get = (url) => {
    return fetch(this.rootUrl + url)
      .then((response) => response.json())
      .catch((e) => e);
  };
  getAuthenticated = (url, token) => {
    return fetch(this.rootUrl + url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .catch((e) => e);
  };
  getAuthenticatedMessage = (url, token) => {
    //console.log("URL actually"+this.rootUrl  + url);
    return fetch(this.rootUrl + url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => response.json())
      .catch((e) => e);
  };
  getProduct = (url) => {
    return fetch(this.rootUrl + url, {
      headers: {
        Authorization:
          'OAuth oauth_consumer_key="f7a38d88a3f8a26ae247ca7f6d2c0021",oauth_token="f947b76dab6f105297a6d81760aab275",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1604391696",oauth_nonce="Fw5sysZBBDF",oauth_version="1.0",oauth_signature="byEVNKcoklF1Kx8KUbfBu+wQYNk="',
        Cookie: '__cfduid=d0736e858827d34b06f56de353579abc41604388520',
        Accept: 'application',
        'Content-Type': 'application/json',
      },
      maxRedirects: 20,
      method: 'GET',
    })
      .then((response) => response.json())
      .catch((e) => e);
  };
  sendMessage = (url, data, token) => {
    console.log('URL actually' + this.rootUrl + url);
    return fetch(this.rootUrl + url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((e) => e);
  };

  post = (url, data) => {
    return fetch(this.rootUrl + url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: data,
    })
      .then(this.checkStatus)
      .then((response) => response.json())
      .catch((e) => e);
  };
  put = (url, data, token) => {
    //console.log("datRecievingFromIn",this.rootUrl + url +"    "+JSON.stringify(data))
    return fetch(this.rootUrl + url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((e) => e);
  };
  UploadImage = (url, data, token) => {
    return fetch(this.rootUrl + url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      method: 'PUT',
      body: data,
    })
      .then((response) => response.json())
      .catch((e) => e);
  };

  updateData = (url, data, token) => {
    console.log('dataurl', this.rootUrl + url);
    return fetch(this.rootUrl + url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((e) => e);
  };

  postdata = (url, data) => {
    return fetch(this.rootUrl + url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((e) => e);
  };

  postfile = (url, data) => {
    return fetch(this.rootUrl + url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      method: 'POST',
      body: data,
    })
      .then(this.checkStatus)
      .then((response) => response.json())
      .catch((e) => e);
  };
  deleteApi = (url, data) => {
    return fetch(this.rootUrl + url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
      body: data,
    })
      .then(this.checkStatus)
      .then((response) => response.json())
      .catch((e) => e);
  };

  postfile_x = (url, data) => {
    return fetch(this.rootUrl + url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      method: 'POST',
      body: data,
    });
  };

  checkStatus = (response) => {
    if (response.ok) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  };
}
