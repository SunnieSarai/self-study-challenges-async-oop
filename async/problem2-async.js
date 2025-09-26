/**
 * CHALLENGE 4: Simulate API Call
 * Create a function `simulateAPICall` that takes no arguments.
 * It should return a promise that resolves with the string 'Data received'
 * after a random delay between 1 and 3 seconds.
 */

function simulateAPICall(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         if(resolve){
            resolve('Data received')
        }else{
            reject(error)
        }   
        
        }
            , 2000 )
    })
}


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
simulateAPICall()
  .then((message) => console.log(message)) // should log 'Data received' after a random delay between 1 and 3 seconds
  .catch((error) => console.error('Error:', error));
