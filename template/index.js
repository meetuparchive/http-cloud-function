require('dotenv').config()

export const FUNCTION_NAME = (req, res) =>
  res.send('func');
};
