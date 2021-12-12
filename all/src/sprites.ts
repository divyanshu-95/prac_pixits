import { Application,Sprite } from "pixi.js";
const app=new Application({
    backgroundColor:0xff00ff,
})
document.body.appendChild(app.view);

const i=Sprite.from('assets/a.jpg');
i.pivot.set(550,25);
// i.anchor.set(0.5);

i.x=app.screen.width/2;
i.y=app.screen.height/2;
app.stage.addChild(i)
app.ticker.add((delta)=>{
    i.rotation+=0.01*delta;
})