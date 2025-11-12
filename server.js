import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"

import indexrouter from "./routes/index.js"

const app = express()
app.use(express.static("public"))
app.use(morgan("dev"))


nunjucks.configure("views", {
    autoescape: true,
    express: app
})

function notFound(req, res, next) {
    res.status(404)
    res.send("404 not found")
}

app.use("/",indexrouter)
app.use(notFound)


const PORT =  process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})