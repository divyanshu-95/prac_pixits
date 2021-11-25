import {Application,Sprite} from 'pixi.js'
const app=new Application()

document.body.appendChild(app.view)

const b:Sprite[]=[]

const total=20

// for(let i=0;i<total;i++){
    app.loader.add('a','assets/download.png').load((l,r)=>{
        const ba=new Sprite(r['a'].texture)
        ba.anchor.set(0.5)
        ba.scale.set(0.8+Math.random()*0.3)

        ba.x=Math.random()*app.screen.width
        ba.y=Math.random()*app.screen.height

        ba.tint=Math.random()*0xFFFFFF;

        (<any>ba).direction=Math.random()*Math.PI*2;
        (<any>ba).turingSpeed=Math.random()-0.8;
        (<any>ba).speed=Math.random()*2;
        b.push(ba)

        app.stage.addChild(ba)
    })
// }