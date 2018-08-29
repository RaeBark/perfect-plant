import tokenService from './tokenService';

const BASE_URL = '/api/plants/';


function index() {
    return fetch(BASE_URL, getAuthRequestOptions('GET'))
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("Bad Credentials");
      })
      .then(plants => plants);
  }

  function addPlant(plantId) {
    var options = getAuthRequestOptions('POST');
    options.body = JSON.stringify({plantId});
    return fetch(BASE_URL + '/cart', options)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Error adding Plant to Cart');
      })
      .then(cart => cart);
  }
  
  /*----- Helper Functions -----*/
  
  function getAuthRequestOptions(method) {
    return {
      method: method,
      headers: new Headers({
        'Authorization': 'Bearer ' + tokenService.getToken(),
        'Content-type': 'application/json'
      })
    };
  }

export default {
    index,
    addPlant
}