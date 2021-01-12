export class ItemsService {
  makeRequest(url, method) {
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
      request.open(method, url, true);
      request.onload = function() {
        if (this.status >= 200 && this.status < 300) {
          resolve(request.response);
        } else {
          reject({
            status: this.status,
            statusText: this.statusText
          });
        }
      };

      request.onerror = function() {
        reject({
          status: this.status,
          statusText: this.statusText
        });
      };

      request.setRequestHeader("Content-Type", "application/json");
      request.send();
    });
  }

  async getItemsForUser(id) {
    var response = await this.makeRequest(
      "https://ug2wj5diq2.execute-api.eu-west-2.amazonaws.com/dev/items/1",
      "GET"
    );
    return JSON.parse(response);
  }
}

export default new ItemsService();
