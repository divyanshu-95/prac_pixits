import PIXI,{Application,Container, InteractionManager,autoDetectRenderer, Graphics} from 'pixi.js';
const app=new Application();
document.body.appendChild(app.view);

const g=new Graphics();
const obj=new Graphics();
const temp=new Graphics();

g.lineStyle(2,0xff00ff,1)
g.beginFill(0xde3249,1);
g.drawEllipse(600,250,70,50);
g.endFill();


obj.beginFill(0xff0000);
obj.drawRect(0,0,200,100);

temp.drawCircle(100,100,50);
for(let i=0;i<5;i++){
    let local=new Graphics(temp.geometry);
}
app.stage.addChild(g);

app.stage.addChild(obj);

app.stage.addChild(temp);