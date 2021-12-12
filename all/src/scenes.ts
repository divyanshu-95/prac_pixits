import{Application, Container, Sprite} from 'pixi.js';
const app = new Application({ width: 1440, height: 1060 });

document.body.appendChild(app.view);

// Add a container to center our sprite stack on the page
const container = new Container();
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;
app.stage.addChild(container);

// Create the 3 sprites, each a child of the last
const sprites:any[] = [];
let parent = container;
for (let i = 0; i < 3; i++) {
  let sprite = Sprite.from('assets/a.jpg');
  sprite.anchor.set(0.5);
  sprite.x=100;
  parent.addChild(sprite);
  sprites.push(sprite);
  parent = sprite;
}

// Set all sprite's properties to the same value, animated over time
let elapsed = 0.0;
app.ticker.add((delta) => {
  elapsed += delta / 60;
  const amount = Math.sin(elapsed);
  const scale = 1.0 + 0.25 * amount;
  const alpha = 0.75 + 0.25 * amount;
  const angle = 20 * amount;
  const x = 75 * amount;
  for (let i = 0; i < sprites.length; i++) {
    const sprite = sprites[i];
    sprite.scale.set(scale);
    sprite.alpha = alpha;
    sprite.angle = angle;
    sprite.x = x;
  }
});