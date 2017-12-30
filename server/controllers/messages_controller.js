let msgs = [];
let id = 0;

// module.export - is how node exports modules
module.exports = {
    create (req, res) {  // POST
        msgs.push({
            id: id,
            text: req.body.text,
            time: req.body.time
        });
        // iterates through the message objects in the array
        id++;
        // send the msgs to the client
        res.status(200).send(msgs);
    },
    read (req, res) {    // GET
        res.status(200).send(msgs);
    },
    update (req, res) {  // PUT / PATCH
        let index = msgs.findIndex( msg => msg.id == req.params.id );
        msgs[ index ] = {
            id: msgs[ index ].id,
            text: req.body.text || msgs[ index ].text,
            time: msgs[ index ].time
        }
        res.status(200).send(msgs)
    },
    delete (req, res) {  // DELETE
        let index = msgs.findIndex( msg => msg.id == req.params.id );
        msgs.splice( index, 1);
        res.status(200).send(msgs);
    }
}