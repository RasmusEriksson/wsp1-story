import express from "express"
import fs from "fs"
const router = express.Router()

const {pages} = JSON.parse(fs.readFileSync("./data/story.json"))



router.get("/", (req, res) => {
    res.render("story.njk", {
        id : 0,
        title: "Welcome to Tristan and Isolde (Vegetable Edition (choose your own adventure edition))",
        text: ["Click on continue to start this awesome adventure..."],
        image: "frame1.png",
        choices: [{
                    "description" : "Continue",
                    "target_id" : 1
                }]
    })
})



router.get("/story/:id", (req, res) => {
    const selectedPage = pages.find(page => page.id === +req.params.id)
    
    if (selectedPage) {
        res.render("story.njk", {
            title : selectedPage.title,
            text : selectedPage.text,
            image : selectedPage.image,
            id : selectedPage.id,
            choices: selectedPage.choices

        })
    }
    
})


export default router
