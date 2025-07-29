This project is a Node.js REST API that processes an array of mixed data (numbers, letters, and special characters) and returns categorized outputs as per the assignment requirements.

API Endpoint:-
POST /bfhl
Base URL: https://bajajassignment-jrkz.onrender.com

Example Input:-
{ "data": ["a", "1", "334", "4", "R", "$"] }

Example Output:-
{ "is_success": true, "user_id": "john_doe_17091999", "email": "john@xyz.com", "roll_number": "ABCD123", "odd_numbers": ["1"], "even_numbers": ["334", "4"], "alphabets": ["A", "R"], "special_characters": ["$"], "sum": "339", "concat_string": "Ra" }

Developer Info:-
User ID Format: john_doe_17091999

Email: john@xyz.com

Roll Number: ABCD123

Tech Stack:-
Node.js

Express.js

CORS

Render (for deployment)


Logic Summary:-
Separates even and odd numbers (as strings)

Converts alphabets to uppercase and collects them

Extracts special characters

Calculates sum of numeric values (returned as a string)

Builds a reversed concatenated string from all alphabetic characters with alternating caps

Features:-
Clean structure using Express routing

Error handling for invalid input

HTTP status codes: 200 (success), 400 (bad request), 500 (server error)

Hosted live using Render

Tested using Postman

Status Codes:-
200 - Success
400 - Invalid input format
500 - Internal server error

Submission Checklist
Hosted API working at: https://bajajassignment-jrkz.onrender.com/bfhl
Public GitHub repository created
Logic matches assignment rules
Code is modular and readable
README includes all required details

