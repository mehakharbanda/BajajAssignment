# BajajAssignment
This project is a REST API built for the Chitkara Campus Hiring Full Stack assignment.The API processes an array of mixed data and returns categorized results based on type and logic defined in the problem statement.

---
## Hosted API Endpoint

> **POST** [`/bfhl`](https://bajajassignment-jrkz.onrender.com/bfhl)  
>  Base URL: `https://bajajassignment-jrkz.onrender.com`

---
## Example Request

```json
POST /bfhl
Content-Type: application/json

{
  "data": ["a", "1", "334", "4", "R", "$"]
}

---
## Example Response
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}

## Tech Stack

Node.js
Express.js
CORS
Hosted on Render

Logic Summary

The API:

Accepts an array of strings/numbers/special characters.

Returns categorized arrays:

Odd numbers (as strings)

Even numbers (as strings)

Uppercase alphabets

Special characters

Returns the sum of numbers (as a string)

Builds a reverse alternating caps string from all letters

Responds with metadata: user ID, email, roll number, and status
