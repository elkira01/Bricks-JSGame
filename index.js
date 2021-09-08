window.addEventListener("DOMContentLoaded",function () {
    const visible = "visible";
    const hidden = "hidden";
    let timers = [];


    //Setting up all the blocks IDs
    let divs = document.getElementsByClassName("s1");
    for (let i=0 ; i< divs.length ; i++){
        divs[i].setAttribute("id","b"+i.toString());
    }

    /* Different functions to generate each kind of brick */

    //Generate squared bricks
    let squaredBrick = function () {

        //Collecting the components
        let bricks = [divs[7],divs[8],divs[23],divs[24]];
        for (let bricksKey in bricks) {
            bricks[bricksKey].style.visibility = "visible";
        }

        return bricks;
    }
    //Moving the square around;
    function shiftSquare(brick,direction,speed = 500) {

        document.onkeydown = ()=>{
            for (let timersKey in timers) {
                clearInterval(timers[timersKey]);
            }
        }

        if (direction === "down"){

            timers[0] = setInterval(function () {

                //Stop the bricks movements : Downwards :before base
                let base = [];
                base[0] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+16).toString());
                base[1] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+16).toString())
                if ( base[0].style.visibility === visible || base[1].style.visibility === visible ){
                    console.log("block visible");
                        clearInterval(timers[0]);
                }
                else{

                    //Start moving
                    brick[2].style.visibility = "hidden";
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+16).toString());
                    brick[2].style.visibility = visible;

                    brick[3].style.visibility = "hidden";
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+16).toString());
                    brick[3].style.visibility = visible;

                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))+16).toString());
                    brick[0].style.visibility = visible;


                    brick[1].style.visibility = "hidden";
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))+16).toString());
                    brick[1].style.visibility = visible;

                }

                //Stop the bricks movements : Downwards :base
                if (208 <= parseInt(brick[2].id.substring(1)) && parseInt(brick[2].id.substring(1)) <= 223){
                    console.log(parseInt(brick[2].id.substring(1)));
                        clearInterval(timers[0]);
                }
            },speed);

        }
        else if (direction === "left"){

            timers[1] = setInterval(function () {

                brick[1].style.visibility = "hidden";
                brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))+1).toString());
                brick[1].style.visibility = visible;
                brick[3].style.visibility = "hidden";
                brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+1).toString());
                brick[3].style.visibility = visible;
                brick[0].style.visibility = "hidden";
                brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))+1).toString());
                brick[0].style.visibility = visible;
                brick[2].style.visibility = "hidden";
                brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+1).toString());
                brick[2].style.visibility = visible;

            },speed);

        }
        else if (direction === "right"){

            timers[2] = setInterval(function () {

                brick[0].style.visibility = "hidden";
                brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))-1).toString());
                brick[0].style.visibility = visible;


                brick[2].style.visibility = "hidden";
                brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))-1).toString());
                brick[2].style.visibility = visible;

                brick[1].style.visibility = "hidden";
                brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))-1).toString());
                brick[1].style.visibility = visible;
                brick[3].style.visibility = "hidden";
                brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))-1).toString());
                brick[3].style.visibility = visible;

            },speed);

        }

    }

    let brick = squaredBrick();
    shiftSquare(brick,"down",400);
    //stopSquare(brick);
})