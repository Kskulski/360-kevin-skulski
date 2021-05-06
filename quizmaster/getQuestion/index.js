module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const message = (req.query.name || (req.body && req.body.name));
    const fs = require('fs')

    fs.readFile('./questions.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err)
            return
        }
        try {
            const questions = JSON.parse(jsonString)
            message = questions[qNumber]
        } catch(err) {
            console.log('Error parsing JSON string:', err)
        }
    })

    const responseMessage = message
        ? "Hello, this HTTP triggered function executed successfully." + message
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}