let promtln = document.getElementById('promt4')


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
    if(pass == 'keysecret'){
        course.removeAttribute('disabled')
        course.focus()
        promt.innerHTML = us
    }
}


function cursos(){
    vplyer = document.getElementById("video")
    msj = document.getElementById("msj")
    let promt = document.getElementById('promt3')
    let course = document.getElementById('course').value
    
    
    

    switch(course){
        
        case 'postman 1 --class':
            vplyer.innerHTML = '<a href="https://terabox.com/s/1SsghtFtlkS2mlFLQgBFnLQ"><strong>[class_1]</strong></a>'
            console.log('Código de extracción:jdwa')  
            break; 
            
        case "postman 2 --class":
            vplyer.innerHTML = '<a href="https://terabox.com/s/1CvHrDOjSByrAAUBQaccVFQ"><strong>[class_2]</strong></a>'
            console.log('Código de extracción:aqi5')  
            break;
        
        case "postman 3 --class":
            vplyer.innerHTML = '<a href="https://terabox.com/s/1aByDp1Bg8WjXqB7uDQPMQg"><strong>[class_3]</strong></a>'
            console.log('Código de extracción:j861') 
            break;

        case "postman 4 --class":
            vplyer.innerHTML = '<a href="https://terabox.com/s/17U9pAkfQ9qgh9iE0VommzQ"><strong>[class_4]</strong></a>'
            console.log('Código de extracción:eemi')  
            break;
        
        case "postman 5 --class":
            vplyer.innerHTML = '<a href="https://terabox.com/s/15KiEqcyklcJ6xIZpohho_g"><strong>[class_5]</strong></a>'
            console.log('Código de extracción:pfmh')   
            break;

        case "postman 6 --class":
            vplyer.innerHTML = '<a href="https://terabox.com/s/1kYB_rWTSSUktn-btxPvOyw"><strong>[class_6]</strong></a>'
            console.log('Código de extracción:peez') 
            break;

        default :
            msj.innerHTML = " Error <br> Reload This Page and try again" 
            break;



    }
  
}


function course(){
    document.addEventListener('keyup', (e)=>{
        if(e.keyCode === 13){
            username()
            password()
            
        }
    })

}
course()


function course2(){
    let course = document.getElementById('course')

    course.addEventListener('keyup', (e)=>{
        if(e.keyCode === 13){

          cursos()  
        }
    })

}
