const config = require(`../botconfig/config.json`)
const express = require('express');
const path = require('path');
const app = express();
const port = 3000 || 8080;
  
if (config.Enable_KeepAlive) {
  const staticPath = path.join(__dirname, "../web")
  app.use(express.static(staticPath))

  function online() {
    app.listen(port, () => {
      console.log("24/7 KeepAlive Server is online!".bgGreen.white)
    });
  }
  module.exports = online;
} else {
  function offline() {
    console.log(`KeepAlive is Turned Off! (To Turn On [Go to "config.json" and set "true" for "Enable_KeepAlive"])`.bgRed.white)
  }
  module.exports = offline;
}