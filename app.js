

const us = '<span class="" style="color: rgb(47, 255, 0)">root@tassociey </span><span style="color: rgb(197, 1, 161)"> MRX </span><span style="color: yellow">  alexandrialibrary:$ ~ </span>'
function username(e){
    let user = document.getElementById('userinput').value
    let remove = document.getElementById('userinput')
    let promt = document.getElementById('promt2')
    let pass = document.getElementById('password')
    if(user == 'mrx'){
        pass.removeAttribute('disabled')
        pass.focus()
        promt.innerHTML = us
            
    }
}



function password(){
    
    let pass = document.getElementById('password').value
    let course = document.getElementById('course')
    let promt = document.getElementById('promt3')
    if(pass == '1234'){
        course.removeAttribute('disabled')
        course.focus()
        promt.innerHTML = us
    }
}


function cursos(){
    vplyer = document.getElementById("video")
    let course = document.getElementById('course').value
    if( course === "postman 1 --class"){
        vplyer.innerHTML = '<a href="https://terabox.com/s/17LShPwoSJCX20pvZYmOyFw"><strong>[class_1]</strong></a>'
        console.log('Código de extracción:qew3')          
        }
    if( course === "postman 2 --class"){
        vplyer.innerHTML = '<a href="https://terabox.com/s/17LShPwoSJCX20pvZYmOyFw"><strong>[class_2]</strong></a>'
        console.log('Código de extracción:vjd5')          
        }    
    if( course === "postman 3 --class"){
        vplyer.innerHTML = '<a href="https://terabox.com/s/17LShPwoSJCX20pvZYmOyFw"><strong>[class_3]</strong></a>'
        console.log('Código de extracción:c6hi')          
        }        
    if( course === "postman 4 --class"){
        vplyer.innerHTML = '<a href="https://terabox.com/s/17LShPwoSJCX20pvZYmOyFw"><strong>[class_4]</strong></a>'
        console.log('Código de extracción:8bjt')          
        } 
    if( course === "postman 5 --class"){
        vplyer.innerHTML = '<a href="https://terabox.com/s/17LShPwoSJCX20pvZYmOyFw"><strong>[class_5]</strong></a>'
        console.log('Código de extracción:hcxr')          
        } 
    if( course === "postman 6 --class"){
        vplyer.innerHTML = '<a href="https://terabox.com/s/1y3SsKWLA_RxRYo36ydK-VQ"><strong>[class_6]</strong></a>'
        console.log('Código de extracción:n29e')          
        } 
}


function course(){
    document.addEventListener('keyup', (e)=>{
        if(e.keyCode === 13){
            username()
            password()
            cursos()
        }
    })

}
course()

