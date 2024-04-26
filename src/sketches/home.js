

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


  
    p5.draw = () => {
        p5.background(0);
        p5.normalMaterial();
        p5.noStroke();
        let touching = (x, y, w, h) => {
            if ((p5.mouseX>x) && (p5.mouseX<x+w) && (p5.mouseY>y) && (p5.mouseY<y+h)){
                return true;
              }
              else return false;
        }
    
        let iconSquares = {
            square1: () => {
            let bootstrap = {
                x: -100,
                y: 0,
                w: 100,
                h: 100
            }
    
                let default_style = () => {
                    p5.fill(50);
    
                }

                let hover_style = () => {
                    p5.fill(100);
    
                }

                touching(bootstrap.x, bootstrap.y, bootstrap.w,  bootstrap.h) ? hover_style() : default_style()
                p5.square(bootstrap.x, bootstrap.y, bootstrap.w)
            },
            square2: () => {
                // psona
                p5.fill(100);
            p5.square(0,0,100);
            },
            square3: () => {
                // disabled
                p5.fill(150);
                p5.square(-100,-100,100);
            },
            square4: () => {
                // disabled
                p5.fill(200);
                p5.square(0,-100,100);
            }
    }
    
        let fourSquare = () => {
            iconSquares.square1()
            iconSquares.square2()
            iconSquares.square3()
            iconSquares.square4()   
        }



      static_gif.position((p5.windowWidth/2)-100, (p5.windowHeight/2)-100)
      static_gif.size(0, 0)
    //   static_gif.style("z-index: -1")
  
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