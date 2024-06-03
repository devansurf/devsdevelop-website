exports.handler = async function(event, context){
    const appVersion = "2.1.0";
    return {
        statusCoce: 200,
        body: JSON.stringify({version: appVersion}),
    };
};