const AssistantV1 = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({
    version: '2019-06-03',
    iam_apikey: 'FpsseXg8IiuF064LEoBTkCOpO1tAvVxM1ULC0PLlQyH-',
    url: 'https://gateway-lon.watsonplatform.net/assistant/api'
})

 
exports.getMessage = body =>
new Promise((resolve, reject)=>{
    assistant.message({
        workspace_id: '454660c3-e7d4-40ac-b562-0b78fac9085b',
        input: {text: body.input}
    },
    function(err, response){
        if(err){
            console.log(err);
            reject(err);
        }else{
            resolve(response);
        }
    });
});
