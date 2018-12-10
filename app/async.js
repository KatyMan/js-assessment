asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
      return new Promise((resolve,reject) => {
          setTimeout(() => {
            resolve(value)
          }, 5)
      });
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    let promise = new Promise((resolve, reject) => {

      fetch(url).then(response => {
        if (response.ok) {

            response.json().then(data => {
                let people = data.people.map(person => person.name);
                resolve(people.sort());
            });
        } 
        else {
            reject(new Error(response.status));
        }
      }, error => {
        reject(new Error(error.message));
      });
    });
  
    return promise;
  },
};
