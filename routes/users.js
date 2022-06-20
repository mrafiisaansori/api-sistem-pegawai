var express = require('express');
var cors = require('cors')
var router = express.Router();



/* GET users listing. */
router.get('/',cors(), function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(
    [
      { id: 1,nip: 202110001,nama : "John Alfarizi",jabatan : "Directur" },
      { id: 2,nip: 202110002,nama : "Peter Parker",jabatan : "General Manager" },
      { id: 3,nip: 202110003,nama : "John Petrucci",jabatan : "CTO" },
      { id: 4,nip: 202110003,nama : "Hellena Presty",jabatan : "CEO" },
      { id: 5,nip: 202110003,nama : "Simmon Rudes",jabatan : "Genral Affair" }
    ]
  ));
});

module.exports = router;
