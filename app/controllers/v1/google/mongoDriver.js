const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const config = require('../../../../config.json')
console.log(config)
// Connection URL
const url = config.url;

// Database Name
const dbName = 'cheerfy';
const collection = "google"

// Use connect method to connect to the server


module.exports = {
	get: function(id) {
		return new Promise((resolve) => {
			MongoClient.connect(url, function(err, client) {
				assert.equal(null, err);
				console.log("Connected successfully to server");

				const db = client.db(dbName);
				const query = {"result.place_id": id};
				console.log(query)
				db.collection(collection).find(query).toArray(function(err, docs) {
					assert.equal(err, null);
					console.log("Found the following records");
					console.log(docs);
	//				callback(docs);
					if (docs.length > 0) {
						resolve(docs[0])
						return;
					}
					resolve(null)

				});			


				client.close();
			})

		})
	},
	insert: function(data) {
		MongoClient.connect(url, function(err, client) {
			assert.equal(null, err);
			console.log("Connected successfully to server");

			const db = client.db(dbName);
			db.collection(collection).insertOne(data, function(err, r) {
			    assert.equal(null, err);
			    assert.equal(1, r.insertedCount);

			});

			client.close();
		});

	}

}