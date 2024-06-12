//function to check if mail arrived or not using promise
function checkMail(){
    return new Promise((resolve, reject) => {
        if(Math.random()> 0.5){
            resolve("Mail has arrived")
        }else {
            reject(new Error('Mail has failed to arrive'))
        }
    })
}

checkMail()
.then(mail => console.log(mail))
.catch(err => console.error(err))
.finally(() => console.log('operation completed'))