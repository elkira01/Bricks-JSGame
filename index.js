window.addEventListener("DOMContentLoaded",function () {
    const visible = "visible";
    const hidden = "hidden";
    let timers = [];
    let colors = ["chartreuse","crimson","cyan","gold"];


    //Setting up all the blocks IDs
    let divs = document.getElementsByClassName("s1");
    for (let i=0 ; i< divs.length ; i++){
        divs[i].setAttribute("id","b"+i.toString());
    }

    /* Different functions to generate each kind of brick */

    /*--------------------SQUARED BRICKS----------------------------------------------------------********/

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
    function shiftSquare(brick,direction = "down",speed = 500,forever = false) {
        //let brickColor = colors[rand(0,4,1)];

        document.onkeydown = (e)=>{
            for (let timersKey in timers) {
                if (e.code === "Space")
                    clearInterval(timers[timersKey]);
                console.log(e.code);
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
                if (224 <= parseInt(brick[2].id.substring(1)) && parseInt(brick[2].id.substring(1)) <= 239){
                    console.log(parseInt(brick[2].id.substring(1)));
                        clearInterval(timers[0]);
                    for (let brickKey in brick) {
                        brick[brickKey].setAttribute("className","fixed");
                        console.log(brick[brickKey]);
                    }
                }

            },speed);

        }
        else if (direction === "left"){

            if (forever === true){
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
            else{
                timers[1] = setTimeout(function () {

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

        }
        else if (direction === "right"){

            if (forever === true){
                timers[2] = setInterval( ()=> {

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
            else{
                timers[2] = setTimeout(function () {

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

    }


    /*-----------------L-BRICKS----------------------------------------------************************/

    //Generating a L-brick
    let rightAngleBrick = function(orientation){
        let bricks = {
            "h1":[divs[6],divs[22],divs[23],divs[24]],
            "h2":[divs[22],divs[6],divs[7],divs[8]],
            "h3":[divs[6],divs[7],divs[8],divs[24]],
            "h4":[divs[8],divs[24],divs[23],divs[22]],
            "v1":[divs[7],divs[6],divs[22],divs[38]],
            "v2":[divs[7],divs[8],divs[24],divs[40]],
            "v3":[divs[6],divs[22],divs[38],divs[39]],
            "v4":[divs[8],divs[24],divs[40],divs[39]],
        }
        
        let result = [];

        if (orientation === "h1"){
            for (let bricksKey in bricks.h1) {
                bricks.h1[bricksKey].style.visibility = visible;
            }
            result = bricks.h1;
        }else if(orientation === "h2"){
            for (let bricksKey in bricks.h2) {
                bricks.h2[bricksKey].style.visibility = visible;
            }
            result = bricks.h2;
        }else if(orientation === "h3"){
            for (let bricksKey in bricks.h3) {
                bricks.h3[bricksKey].style.visibility = visible;
            }
            result = bricks.h3;
        }else if(orientation === "h4"){
            for (let bricksKey in bricks.h4) {
                bricks.h4[bricksKey].style.visibility = visible;
            }
            result = bricks.h4;
        }else if(orientation === "v1"){
            for (let bricksKey in bricks.v1) {
                bricks.v1[bricksKey].style.visibility = visible;
            }
            result = bricks.v1;
        }else if(orientation === "v2"){
            for (let bricksKey in bricks.v2) {
                bricks.v2[bricksKey].style.visibility = visible;
            }
            result = bricks.v2;
        }else if(orientation === "v3"){
            for (let bricksKey in bricks.v3) {
                bricks.v3[bricksKey].style.visibility = visible;
            }
            result = bricks.v3;
        }else if(orientation === "v4"){
            for (let bricksKey in bricks.v4) {
                bricks.v4[bricksKey].style.visibility = visible;
            }
            result = bricks.v4;
        }

        return result;
    }

    /*A function  witch will perform a quick type recognition of the given brick, the variable function will be passed to
    brick shifting handler */
    let brickType = function(brick = []){
        console.log(intID(brick[1]));
        if (intID(brick[1]) === intID(brick[0])+16 && intID(brick[2]) === intID(brick[0])+17 && intID(brick[3]) === intID(brick[0])+18)
            return  "h1";
        else if (intID(brick[1]) === intID(brick[0])-16 && intID(brick[2]) === intID(brick[0])-15 && intID(brick[3]) === intID(brick[0])-14)
            return  "h2";
        else if (intID(brick[2]) === intID(brick[3])-16 && intID(brick[1]) === intID(brick[3])-17 && intID(brick[0]) === intID(brick[3])-18)
            return  "h3";
        else if (intID(brick[1]) === intID(brick[0])+16 && intID(brick[2]) === intID(brick[0])+15 && intID(brick[3]) === intID(brick[0])+14)
            return  "h4";
        else if (intID(brick[1]) === intID(brick[0])-1 && intID(brick[2]) === intID(brick[0])+15 && intID(brick[3]) === intID(brick[0])+31)
            return  "v1";
        else if (intID(brick[1]) === intID(brick[0])+1 && intID(brick[2]) === intID(brick[0])+17 && intID(brick[3]) === intID(brick[0])+33)
            return  "v2";
        else if (intID(brick[1]) === intID(brick[0])+16 && intID(brick[2]) === intID(brick[0])+32 && intID(brick[3]) === intID(brick[2])+1)
            return  "v3";
        else
            return  'v4';
    }


    //Moving a brick around
    function angleShift(brick = [], type = "",direction = "down",speed = 800){

        document.onkeydown = (e)=>{
            for (let timersKey in timers) {
                if (e.code === "Space")
                    clearInterval(timers[timersKey]);
                console.log(e.code);
            }
        }
        if (direction === "down"){

            timers[0] = setInterval(function () {

                //Stop the brick downing : before base
                for (let brickKey in brick) {
                    if (document.querySelector("#b"+(intID(brick[brickKey])+16).toString()).className === "fixed") {
                        clearInterval(timers[0]);
                        break;
                    }
                }

                //Moving the brick
                if(type === "h1"){
                    brick[1].style.visibility = hidden;
                    brick[2].style.visibility = hidden;
                    brick[3].style.visibility = hidden;
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))+16).toString());
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+16).toString());
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+16).toString());
                    brick[1].style.visibility = visible;
                    brick[2].style.visibility = visible;
                    brick[3].style.visibility = visible;

                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))+16).toString());
                    brick[0].style.visibility = visible;

                }
                else if (type === "h2"){
                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))+16).toString());
                    brick[0].style.visibility = visible;

                    brick[1].style.visibility = hidden;
                    brick[2].style.visibility = hidden;
                    brick[3].style.visibility = hidden;
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))+16).toString());
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+16).toString());
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+16).toString());
                    brick[1].style.visibility = visible;
                    brick[2].style.visibility = visible;
                    brick[3].style.visibility = visible;

                }
                else if (type === "h3"){
                    brick[3].style.visibility = "hidden";
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+16).toString());
                    brick[3].style.visibility = visible;
                    brick[2].style.visibility = "hidden";
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+16).toString());
                    brick[2].style.visibility = visible;
                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))+16).toString());
                    brick[0].style.visibility = visible;
                    brick[1].style.visibility = "hidden";
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))+16).toString());
                    brick[1].style.visibility = visible;
                }
                else if (type === "h4"){
                    brick[3].style.visibility = "hidden";
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+16).toString());
                    brick[3].style.visibility = visible;
                    brick[2].style.visibility = "hidden";
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+16).toString());
                    brick[2].style.visibility = visible;
                    brick[1].style.visibility = "hidden";
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))+16).toString());
                    brick[1].style.visibility = visible;
                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))+16).toString());
                    brick[0].style.visibility = visible;
                }else if (type === "v1"){
                    brick[3].style.visibility = "hidden";
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+16).toString());
                    brick[3].style.visibility = visible;
                    brick[2].style.visibility = "hidden";
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+16).toString());
                    brick[2].style.visibility = visible;
                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))+16).toString());
                    brick[0].style.visibility = visible;
                    brick[1].style.visibility = "hidden";
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))+16).toString());
                    brick[1].style.visibility = visible;
                }else if (type === "v2"){
                    brick[3].style.visibility = "hidden";
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+16).toString());
                    brick[3].style.visibility = visible;
                    brick[2].style.visibility = "hidden";
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+16).toString());
                    brick[2].style.visibility = visible;
                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))+16).toString());
                    brick[0].style.visibility = visible;
                    brick[1].style.visibility = "hidden";
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))+16).toString());
                    brick[1].style.visibility = visible;
                }else if (type === "v3"){
                    brick[3].style.visibility = "hidden";
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+16).toString());
                    brick[3].style.visibility = visible;
                    brick[2].style.visibility = "hidden";
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+16).toString());
                    brick[2].style.visibility = visible;
                    brick[1].style.visibility = "hidden";
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))+16).toString());
                    brick[1].style.visibility = visible;
                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))+16).toString());
                    brick[0].style.visibility = visible;

                }
                else if (type === "v4"){
                    brick[3].style.visibility = "hidden";
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+16).toString());
                    brick[3].style.visibility = visible;
                    brick[2].style.visibility = "hidden";
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+16).toString());
                    brick[2].style.visibility = visible;
                    brick[1].style.visibility = "hidden";
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))+16).toString());
                    brick[1].style.visibility = visible;
                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))+16).toString());
                    brick[0].style.visibility = visible;

                }

                //Stop the brick downing : at base
                for (let brickKey in brick) {
                    if (224 <= parseInt(brick[brickKey].id.substring(1)) && parseInt(brick[brickKey].id.substring(1))<=239) {
                        clearInterval(timers[0]);
                        for (let brickKey in brick) {
                            brick[brickKey].setAttribute("className","fixed");
                            console.log(brick[brickKey]);
                        }
                        break;
                    }
                }
            },speed)


        }
        else if (direction === "left"){

            timers[1]=setTimeout(()=>{
                if (type === "h1" || type === "h3" || type === "h2" || type === "v3"){

                    brick[3].style.visibility = "hidden";
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+1).toString());
                    brick[3].style.visibility = visible;
                    brick[2].style.visibility = "hidden";
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+1).toString());
                    brick[2].style.visibility = visible;
                    brick[1].style.visibility = "hidden";
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))+1).toString());
                    brick[1].style.visibility = visible;
                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))+1).toString());
                    brick[0].style.visibility = visible;

                }
                else if (type === "h4"){

                    brick[1].style.visibility = "hidden";
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))+1).toString());
                    brick[1].style.visibility = visible;
                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))+1).toString());
                    brick[0].style.visibility = visible;
                    brick[2].style.visibility = "hidden";
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+1).toString());
                    brick[2].style.visibility = visible;
                    brick[3].style.visibility = "hidden";
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+1).toString());
                    brick[3].style.visibility = visible;
                }else if (type === "v1" || type === "v4"){

                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))+1).toString());
                    brick[0].style.visibility = visible;
                    brick[1].style.visibility = "hidden";
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))+1).toString());
                    brick[1].style.visibility = visible;
                    brick[2].style.visibility = "hidden";
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+1).toString());
                    brick[2].style.visibility = visible;
                    brick[3].style.visibility = "hidden";
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+1).toString());
                    brick[3].style.visibility = visible;

                }
                else if (type === "v2"){
                    brick[1].style.visibility = "hidden";
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))+1).toString());
                    brick[1].style.visibility = visible;
                    brick[2].style.visibility = "hidden";
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))+1).toString());
                    brick[2].style.visibility = visible;
                    brick[3].style.visibility = "hidden";
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))+1).toString());
                    brick[3].style.visibility = visible;
                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))+1).toString());
                    brick[0].style.visibility = visible;
                }
            },speed)
        }
        else if (direction === "right"){
            timers[2] = setTimeout(function () {

                if (type === "h1" | "h2" | "h3" | "v3" | "v2"){
                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))-1).toString());
                    brick[0].style.visibility = visible;
                    brick[1].style.visibility = "hidden";
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))-1).toString());
                    brick[1].style.visibility = visible;
                    brick[2].style.visibility = "hidden";
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))-1).toString());
                    brick[2].style.visibility = visible;
                    brick[3].style.visibility = "hidden";
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))-1).toString());
                    brick[3].style.visibility = visible;

                }
                else if (type === "h4" | "v1" | "v4" ){

                    brick[3].style.visibility = "hidden";
                    brick[3] = document.querySelector("#b"+(parseInt(brick[3].id.substring(1))-1).toString());
                    brick[3].style.visibility = visible;
                    brick[2].style.visibility = "hidden";
                    brick[2] = document.querySelector("#b"+(parseInt(brick[2].id.substring(1))-1).toString());
                    brick[2].style.visibility = visible;
                    brick[1].style.visibility = "hidden";
                    brick[1] = document.querySelector("#b"+(parseInt(brick[1].id.substring(1))-1).toString());
                    brick[1].style.visibility = visible;
                    brick[0].style.visibility = "hidden";
                    brick[0] = document.querySelector("#b"+(parseInt(brick[0].id.substring(1))-1).toString());
                    brick[0].style.visibility = visible;
                }

            },speed)
        }
    }



    /*------------------------MAIN()-----------------------------------------------******************/

    //let brick = squaredBrick();
  //  shiftSquare(brick,"down");
        let brick = rightAngleBrick("v2");
        angleShift(brick,brickType(brick),"right",700);
        console.log(brickType(brick));
        console.log(brick);

    document.addEventListener("keydown",(e)=>{
        if (e.code === "ArrowLeft"){
            shiftSquare(brick,"right",200);
            shiftSquare(brick,"down");
        }
        else if (e.code === "ArrowRight"){
            shiftSquare(brick,"left",200);
            shiftSquare(brick,"down");
        }

    })


    /*-----------------------------UTILITIES--------------------------------*************/

    //Random number generator
    function rand(min, max, integer) {
        if (!integer) {
            return Math.random() * (max - min) + min;
        } else {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }

    //Coloring bricks
    function brickColor(brick = [], color) {

        for (let brickKey in brick) {
            brick[brickKey].style.backgroundColor = color;
        }
    }

    //Getting the blocks ID's integers
    function intID(div) {
        return parseInt(div.getAttribute("id").substring(1));
    }
    function print(div) {
        console.log(div.id);
    }

})