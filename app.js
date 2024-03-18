const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {

  const { data } = req.body;

  const alphabets = data.filter(item => typeof item === 'string').map(item => item.toUpperCase());
  const numbers = data.filter(item => typeof item === 'number');
  const evenNumbers = numbers.filter(number => number % 2 === 0);
  const oddNumbers = numbers.filter(number => number % 2 !== 0);

  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123", 
    alphabets,
    even_numbers: evenNumbers,
    odd_numbers: oddNumbers
  };

  // Send the response
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
