import express from "express"
import fs from "fs"
const router = express.Router()

const {pages} = JSON.parse(fs.readFileSync("./data/story.json"))



router.get("/", (req, res) => {
    res.render("index.njk", {
        title: "THIS IS A BIGGG TITLE!!!!",
        message: "this is a message being transmitted to you via THIS server that I'M running"
    })
})

router.get("/query", (req, res) => {
    const name = req.query.name || ""
    res.render("query-test.njk", {name})
})

router.get("/story", (req, res) => {
    res.render("story.njk", {
        title : "Start",
        text : "Time to begin your great journey!!!",
        id : 0
    })
})

router.get("/story/:id", (req, res) => {
    const selectedPage = pages.find(page => page.id === +req.params.id)
    console.log(selectedPage)
    console.log(selectedPage.choices)
    
    if (selectedPage) {
        res.render("story.njk", {
            title : selectedPage.title,
            text : selectedPage.text,
            id : selectedPage.id,
            choices: selectedPage.choices

        })
    }
    
})


export default router
