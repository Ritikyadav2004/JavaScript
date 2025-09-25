// // 

// class toyota
// {   
//      constructor(brandName,mileage)
//      {  
//         this.brandName = brandName;
//         console.log(`Creating new Object ${this.brandName}`);
//         this.mi=mileage;
//         console.log(`Mileage is ${this.mi}`);
//      }
//     start()
//     {
//         console.log("Strat");
//     }
//     stop()
//     {
//         console.log("stop");
//     }

// }

// let fortuner = new toyota("Fortuner",100);
// console.log(fortuner);
// let bmw =  new toyota("Lexus",50);
// console.log(bmw);

// class parent
// {
//     hello(){
//         console.log("This is Hello From Parent");
//     }
// }

// class child extends parent
// {
    
// }

// let obj = new child();


// class perosn
// {   
//     constructor()
//     {
//         this.species="insaan   "
//     }
//     eat()
//     {
//         console.log("eat");
//     }
//     sleep()
//     {
//         console.log("sleep");
//     }
//     work()
//     {
//         console.log("Do nothing");
//     }
// }

// class enginer extends perosn
// {
//     work()
//     {
//         console.log("Solve Problem");
//     }
// }

// // class doctor extends perosn{
// //      work(){
// //         console.log("Treat Patient");
// //      }
// // }

// let ritik  = new enginer();

// let drRitik = new doctor();

// creatinf the claas - object for remote

// class basicFunction
// {    
    
//      constructor(Device)
//     {
//         this.device=Device;
//     }
//     on()
//     {
//         console.log(`Turning on  your Device ${this.device}`);
//     }

//     off()
//     {
//                   console.log(`turning Off your Device ${this.device}`);
//     }
// }

// class TvRemote extends basicFunction
// {   
//     constructor(Device)
//     {   super(Device);
//         this.volume=0;
//     }
//     changeChannel()
//     {
//         console.log("Switching next channel");
//     }
//     increseVolume()
//     {
//         this.volume++;
//         console.log(`Volume turned ${this.volume}`);
//     } 
    
//     decreseVolume()
//     {
//         if(this.volume==0){console.log("Mute"); return;}
//         else
//         {
//             this.volume--;
//             console.log(`Volume Become ${this.volume}`);

//         }
//     }
// }

// let button =new TvRemote("Tv")



try{
    
    console.log(1/2);
    console.log(34/2);
    console.log(31/2);
    console.log(0/0);
    console.log(34/0);
    console.log(34/1);
   
}
catch(err)
{
    console.log(err);
}