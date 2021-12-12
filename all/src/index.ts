import PIXI,{Application,Text} from 'pixi.js';
const app=new Application({
  width:800,height:600
})
document.body.appendChild(app.view)
const styles={
  fontSize:'24px',
  fontWeight:'bold',fill:'#F7EDCA',align:'center',
  fontURL:'assets/orange-juice-2.0-msdf.json',imageURL:'assets/orangejuice20.png'
}

// const text=new Text('qwertyuio',styles);
// app.stage.addChild(text);