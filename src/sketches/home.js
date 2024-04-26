

export function sketch(p5) {
    let rotation = 0;
    let static_gif;

    p5.preload = () => {
        static_gif = p5.createImg("https://upload.wikimedia.org/wikipedia/commons/0/02/Television_static.gif?20220213052814")
    }
  
    p5.setup = () => p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    let halfWidth = p5.windowWidth / 2
    let halfHeight = p5.windowHeight / 2
  
    p5.updateWithProps = props => {
      if (props.rotation) {
        rotation = (props.rotation * Math.PI) / 180;
      }
    };

    let fourSquare = () => {
        p5.fill(50);
        p5.square(0,0,25);
        p5.fill(100);
        p5.square(0,10,25);
        p5.fill(150);
        // p5.square(0,20,25);
        p5.fill(200);
        p5.square(0,30,25);
    }
  
    p5.draw = () => {
      p5.background(0);
      p5.normalMaterial();
      p5.noStroke();

      static_gif.position(p5.windowWidth/2, p5.windowHeight/2)
      static_gif.size(0, 0)
  
      p5.push();
      fourSquare()

      p5.fill(255);
    //   p5.square(0,0,100);
      p5.pop();


      
      // sphere
    //   p5.noFill();
    //   p5.stroke(255);
    //   p5.push();
    //   p5.translate(400, p5.height * 0.35, -200);
    //   p5.sphere(300);
    //   p5.pop();
    };


     p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    };
  }