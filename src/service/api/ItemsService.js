const baseApiUrl = "http://ec2-52-56-184-186.eu-west-2.compute.amazonaws.com/";

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
      baseApiUrl + "/api/v1/user/" + id + "/items",
      "GET"
    );
    var items = JSON.parse(response);
    return items;
  }
}

export default new ItemsService();
