import { Application,Container,Sprite} from "pixi.js"
const app=new Application({
    width:800,height:600,backgroundColor:0x1099bb,resolution:1
})
document.body.appendChild(app.view)

const con=new Container()

app.stage.addChild(con)

// const texture=Texture.from()

app.loader.add('a','./assets/download.png').load((l,r)=>{
    for(let i=0;i<25;i++){
        const b=new Sprite(r['a'].texture)
        b.anchor.set(0.5)
        b.x=(i%5)*40
        b.y=Math.floor(i/5)*40
        con.addChild(b);
    }
    con.x=app.screen.width/2
    con.y=app.screen.height/2

    con.pivot.x=con.width/2
    con.pivot.y=con.height/2

    app.ticker.add((delta)=>{
        con.rotation-=0.01*delta
    })

})