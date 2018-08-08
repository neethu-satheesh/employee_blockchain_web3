let fetch = require('node-fetch');

module.exports = {
    apiRequest: function (postData) {
      fetch('http://localhost:4000/api/v1/posts/blockchain_data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post: postData })
      }).then(response => {
      }).catch(err => {
        console.log(err);
      });
    }
}
