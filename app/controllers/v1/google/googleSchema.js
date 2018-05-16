var Schema = require('graph.ql');
var Promise = require('promise');

module.exports = 
	Schema(`

		type AddressComponent {
			long_name: String
			short_name: String
			types: [String]
		}

		type Period {
			a: String
		}

		type OpeningHours {
			periods: [Period]
		}

		type Photo {
			height: Int
			width: Int
			html_attributions: [String]
			photo_reference: String
		}

		type Review {
			author_name: String
			language: String
			rating: Int
			relative_time_description: String
			text: String
			time: Int
		}

		type Result {
			address_components: [AddressComponent]
			formatted_address: String
			formatted_phone_number: String
			id: String
			name: String
			opening_hours: OpeningHours
			photos: [Photo]
			place_id: String
			rating: String
			reference: String
			reviews: [Review]
			types: [String]
			url: String
			utc_offset: Int
			website: String
		}

		type GooglePlace {
			result: Result
			status: String
		}

		type Query {
			find_one(id: String): GooglePlace
		}


	`, {
				GooglePlace: {},
				Result: {},
				Review: {},
				Review: {},
				OpeningHours: {},
				Period: {},
				AddressComponent: {},

				Query: {
					find_one(data) {
						return new Promise((resolve) => {
							var GooglePlaces = require("googleplaces")
							    ("AIzaSyBWNOAENHH3RKYOFUX3yWT6AOp5PUNI2m4", "json");

							//ChIJh6X7F0cvQg0R3WI6x2CY8V4
							GooglePlaces.placeDetailsRequest(
							    {placeid: data.id}, 
							    function (error, response) {
							    if (error) throw error;
							    console.log(response)
							    resolve(response);
							})
						})
					}

				}
	});
