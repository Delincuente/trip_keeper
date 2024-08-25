const moment = require('moment-timezone');
const FS = require('fs');

function consoleLog(error) {
    return new Promise(async function (resolve, reject) {
        let path = './public/logs';
        if (!FS.existsSync(path)) {
            FS.mkdirSync(path);
        }
        let today = moment().format("YYYY-MM-DD");
        let logFile = path + '/' + today + '.txt';
        if (!FS.existsSync(logFile)) {
            FS.createWriteStream(logFile);
        }
        let dateTime = moment().format("YYYY-MM-DD HH:mm:ss");
        let content = '\n';
        content += dateTime + '\n';
        content += error;
        content += '\n-----------------------------------------------------------------------------\n';

        FS.appendFile(logFile, content, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve({ status: 200 });
            }
        });
    });
}

module.exports = {
    consoleLog: consoleLog
};