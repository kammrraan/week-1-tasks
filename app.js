const one = () => {
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
       console.log('one');
       resolve();
    }, 500)   
    })
    
   }

    const two = () => {
        return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log('two');
        resolve();
        }, 300)    
        })
        
    }
    const three = () => {
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('three');
        resolve();
        }, 100)    
        })
        
    }

// one();
// two();
// three();

//callback

// one(()=>{
//     two(()=>{
//         three(()=>{
//             console.log('done');
//         })
//     })
// })

//promise

// one().then(()=>{
//     two().then(()=>{
//         three().then(()=>{
//             console.log('do');
//         })
//     })
// })

//async await

const run = async ()=>{
    await one();
    await two();
    await three();
}