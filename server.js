const api = require("./api.calculator");

const port = api.listen(process.env.PORT || 3000);

api.listen(port, () => {
    console.log("running")
});