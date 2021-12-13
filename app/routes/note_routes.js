var ObjectID = require("mongodb").ObjectId;

module.exports = function (app, db){
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection("notes").findOne(details, (err, item) => {
            if (err) {
                res.send({ err: "an error has occured" });
            } else {
                res.send(item);
            }
        })
    })

        app.delete("/notes/:id", (req, res) => {
          const id = req.params.id;
          const details = { _id: new ObjectID(id) };
          const note = {text: req.body.body, title: req.body.title}
          db.collection("notes").update(details, (err, item) => {
            if (err) {
              res.send({ err: "an error has occured" });
            } else {
              res.send(item);
            }
          });
        });

            app.put("/notes/:id", (req, res) => {
              const id = req.params.id;
              const details = { _id: new ObjectID(id) };
              db.collection("notes").findOne(details, (err, item) => {
                if (err) {
                  res.send({ err: "an error has occured" });
                } else {
                  res.send(result.ops[0]);
                }
              });
            });

    app.post("/notes", (req, res) => {
        const note = {text: req.body.body, title: req.body.title}
        db.collection("notes").insert(note, (err, result) => {
            if(err){
                res.send({"err": "an error has occured"})
            } else {
                res.send(result.ops[0])
            }
        })
    })
}