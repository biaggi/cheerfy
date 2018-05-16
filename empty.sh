curl -X POST \
  http://localhost:9001/v1/google \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6f206681-be2f-36a4-c699-034cc9a57715' \
  -d '{
	  "query": "query find {\n find_one {\n status }\n}",
	  "params": {"id": "6X7F0cvQg0R3WI6x2CY8V4"}
	}'



