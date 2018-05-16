var Promise = require('promise');
var googleSchema = require('./googleSchema');

function GoogleController() {
}

GoogleController.prototype = {
	post: function(req, res) {
		return new Promise((resolve, reject) => {
			console.log(req.body)
			const query = req.body.query;
			const parameters = req.body.params ? req.body.params : {};

			console.log(query, parameters);

			googleSchema(query, {}, parameters).then((graphResult) => {
			    res.setHeader('Content-Type', 'application/json');
			    console.log('graphResult', graphResult)
			    res.send(JSON.stringify(graphResult));
			    res.status(200);
			    resolve();
			}, (err) => {
				reject(err);
			})
		})
	}
};

var googleController = new GoogleController();

module.exports = googleController;
