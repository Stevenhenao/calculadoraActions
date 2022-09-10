const api = require("./api.calculator");

const port = app.listen(process.env.PORT || 3000);

api.listen(port, () => {
    console.log("running")
});