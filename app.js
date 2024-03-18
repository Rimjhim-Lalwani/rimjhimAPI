
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;
    const userId = "john_doe_17091999";
    const email = "john@xyz.com";
    const rollNumber = "ABCD123";
    const oddNumbers = data.filter(num => num % 2 !== 0);
    const evenNumbers = data.filter(num => num % 2 === 0);
    const alphabets = data.filter(ch => /[a-zA-Z]/.test(ch)).map(ch => ch.toUpperCase());

   
    const response = {
      is_success: true,
      user_id: userId,
      email: email,
      roll_number: rollNumber,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ is_success: false, error: "Internal Server Error" });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
