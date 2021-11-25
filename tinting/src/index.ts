import {Application,Sprite,Rectangle} from 'pixi.js';
const app=new Application()

document.body.appendChild(app.view)

const b:Sprite[]=[]

const total=90
app.loader.add('a','assets/d1.PNG').load((l,r)=>{
for(let i=0;i<total;i++){
        const ba=new Sprite(r['a'].texture)
        ba.width=1
        ba.height=1
        ba.anchor.set(0.5)
        ba.scale.set(0.8+Math.random()*0.3)

        ba.x=Math.random()*app.screen.width
        ba.y=Math.random()*app.screen.height

        ba.tint=Math.random()*0xFFFFFF;

        (<any>ba).direction=Math.random()*Math.PI*2;
        (<any>ba).turningSpeed=Math.random()-0.8;
        (<any>ba).speed=2+Math.random()*2;
        b.push(ba)

        app.stage.addChild(ba)

    }
    const dudeP=100;
    const dudeB=new Rectangle(-dudeP,-dudeP,app.screen.width+dudeP*2,app.screen.height+dudeP*2)

    app.ticker.add(()=>{
        for(let i=0;i<b.length;i++){
            const dude=b[i];
            (<any>dude).direction+=(<any>dude).turningSpeed*0.01;
            dude.x+=Math.sin((<any>dude).direction)*(<any>dude).speed;
            dude.y+=Math.cos((<any>dude).direction)*(<any>dude).speed;
            dude.rotation=-(<any>dude).direction-Math.PI/2;

            if(dude.x<dudeB.x){
                dude.x+=dudeB.width;
            }else if(dude.x>dudeB.width){
                dude.x-=dudeB.width;
            }
            if(dude.y<dudeB.y){
                dude.y+=dudeB.height;
            }else if(dude.y>dudeB.y+dudeB.height){
                dude.y-=dudeB.height;
            }
        }
    })
})
