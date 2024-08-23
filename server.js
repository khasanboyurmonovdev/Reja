const http = require("http");

const mongodb = require("mongodb");
let db;
const connectionString =
  "mongodb+srv://henrydeveloper66:O0y8cyB5QEmKo0vo@cluster0.rkylr.mongodb.net/Reja";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app); //serverni qurib olamiz
      let PORT = 3000;
      server.listen(PORT, function (req, res) {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
