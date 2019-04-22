var exec = require('child_process').exec;
// var cmd = 'cabal-bin/idris -v';

// prelude is?: /home/donald_pinckney/.cabal/share/x86_64-linux-ghc-8.0.2/idris-1.3.1/


exports.idrisrunner = (req, res) => {
    // let message = req.query.message || req.body.message || 'Hello World!';
    let cmd = req.body;

    exec(cmd, function(error, stdout, stderr) {
        // command output is in stdout
        res.status(200).send(stdout);
    });
    
};

