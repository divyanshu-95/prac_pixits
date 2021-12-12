import {Application,Graphics,BitmapText,Sprite} from 'pixi.js';
const app=new Application({
  backgroundColor:0x1099bb,
  width:window.innerWidth,


})

document.body.appendChild(app.view)

app.loader.add('solor','assets/solar.jpg')
// .add('om','assets/om.jpg')
.load((l,r)=>{
  console.log(r)
  const sun1=new Sprite(r['solor'].texture);
  sun1.anchor.set(0.5);
  sun1.x=app.screen.width/2;
  sun1.y=app.screen.height/2;
  // app.stage.addChild(sun1);
  const sun2 = new Sprite(r['solor'].texture);
  sun2.anchor.set(0.5);
  sun2.scale.set(1.05);
  sun2.x = app.screen.width / 2;
  sun2.y = app.screen.height / 2;
  app.stage.addChild(sun2);

  const g=new Graphics();
  g.lineStyle(2,0xff00ff,1);
  g.beginFill(0xffddaa);
  g.drawCircle(0, 0, 100);
  g.endFill();
  app.stage.addChild(g);
  sun2.mask=g;
  app.stage.interactive=true;
  app.stage.on('pointermove',(e)=>{
    // alert('move');
    g.x=e.data.global.x;
    g.y=e.data.global.y;
  })
})



