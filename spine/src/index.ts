import {Application,Text,TextStyle,BitmapText} from 'pixi.js';
import {Spine} from 'pixi-spine'
// import { SpineParser } from "@pixi-spine/loader-3.8";
const app=new Application({
    backgroundColor:0x00ddff,
    width: screen.width,
    height: 900,
});
const text=new Text('Hi');

text.x=150;
text.y=150;
// app.stage.interactive=true;
document.body.appendChild(app.view);

app.loader.add('spineboy','assets/hero.json')
.add('desyrel','https://pixijs.io/examples/examples/assets/bitmap-font/desyrel.xml')
.load((l,r)=>{
    const b=new BitmapText('OM',{
        fontName:'Desyrel',fontSize:55,align:'center'
    })
    b.x=50;
    b.y=50;
    const spine=new Spine(r.spineboy.spineData);
    spine.x=850;
    spine.y=900;
    spine.scale.set(0.5);

    spine.stateData.setMix('walk','jump',0.2);

    spine.stateData.setMix('jump','walk',0.2);
    window.onkeydown=(e)=>{
        if(e.keyCode==32){

        
            spine.state.setAnimation(0,'attack',true)
        }else if(e.keyCode==39){
            spine.state.setAnimation(0,'run',true)
        }else if(e.keyCode==40){
            spine.state.setAnimation(0,"crouch",true)
        }else if(e.keyCode==38){
            spine.state.setAnimation(0,"jump",true)
        }else if(e.keyCode==37){
            spine.state.setAnimation(0,"fall",true)
        }
        else if(e.keyCode==90){
            spine.state.setAnimation(5,"walk",false)
        }
        else{
            spine.state.setAnimation(0,'idle',false);
        }
        }
        window.onkeyup=(e)=>{
            spine.state.setAnimation(0,'idle',true)
        }

    spine.state.setAnimation(0,'walk',true);
    app.stage.addChild(spine);
    app.stage.addChild(text);
    app.stage.addChild(b);

    app.stage.on('pointerdown',()=>{
        spine.state.setAnimation(0,'jump',false);
        spine.state.addAnimation(0,'walk',true,0);
    })
})