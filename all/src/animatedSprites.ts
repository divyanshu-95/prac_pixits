import { Application,Texture,AnimatedSprite } from "pixi.js";
const app=new Application();
document.body.appendChild(app.view);

app.loader.add('animated','assets/a.jpg')
        .add('a','assets/Buttons.png')
        .add('b','assets/solar.jpg')
.load((l, r) => {
    const anim=[];
    for(let i=0;i<26;i++){
        const texture=Texture.from(`animated`);
        const texture1=Texture.from(`a`);
        const texture2=Texture.from(`b`);
        anim.push(texture,texture1,texture2);
    }
    for(let i=0;i<50;i++){
        const ex=new AnimatedSprite(anim);

        ex.x=Math.random()*app.screen.width;
        ex.y=Math.random()*app.screen.height;
        ex.anchor.set(0.5);
        ex.rotation=Math.random()*10    ;
        ex.scale.set(0.75+Math.random()*0.5);
        ex.gotoAndPlay(Math.random()*10);
        app.stage.addChild(ex);
    }
    app.start();
})