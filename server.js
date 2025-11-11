import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"

const app = express()
app.use(express.static("public"))
app.use(morgan("dev"))
app.use(notFound)

const PORT =  process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

function notFound(req, res, next) {
    res.status(404)
    res.send("404 not found")
}


app.get("/", (req, res) => {
    res.render("index.njk", {
        title: "THIS IS A BIGGG TITLE!!!!",
        message: "this is a message being transmitted to you via THIS server that I'M running"
    })
})

app.get("/query", (req, res) => {
    const name = req.query.name || ""
    res.render("query-test.njk", {name})
})