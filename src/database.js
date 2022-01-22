import mongoose from "mongoose"

mongoose
    .connect("mongodb://localhost/companydb", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((db) => console.log("Db is connected"))
    .catch((err) => console.log(err))