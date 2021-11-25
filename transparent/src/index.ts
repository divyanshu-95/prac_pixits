import {Application,Sprite} from 'pixi.js'
const app=new Application({
    transparent:true
    // width:800,height:600
})
document.body.appendChild(app.view)

app.loader.add('a','assets/download.png').load((l,r)=>{
    const b=new Sprite(r['a'].texture)
    b.anchor.set(0.5)
    b.x=app.screen.width/2
    b.y=app.screen.height/2
    app.stage.addChild(b)  
    
    app.ticker.add(()=>{
        b.rotation+=0.1
    })
})
// b.anchor.set(0.5)

// app.stage.addChild(b)