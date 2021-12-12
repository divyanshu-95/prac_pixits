import {Application, BitmapText, Sprite, NineSlicePlane, Texture    } from "pixi.js"
//nineslice
const app = new Application({
    width: 1200,
    height: 800,
    resolution: 1,
    antialias: true,
})

document.body.appendChild(app.view)

app.loader.load((l, r) => {
    const ns = new NineSlicePlane(Texture.from("assets/a.jpg"),
    10, 500, 300, 100//right,neeche,left,upar
    )

    ns.position.set(10, 10);
    ns.width = 700
    ns.height = 700
    app.stage.addChild(ns)
    
})