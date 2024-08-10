const app = require("./app.js");
const config = require("./app/config");

// Start server
const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
