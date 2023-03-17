

    let image= document.querySelector("#banner > img")
    
    let btnarr= document.querySelectorAll("#banner > button")
    
    
    let imgArr= [
    "https://wallpaper.dog/large/20466509.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYZ3qTA1QQ5JhahRZr9bfwP5bPMPKFzILV4jaXeM5m1cCdScll5On_ms_IBy4lILh1tU&usqp=CAU",
    "https://wallpaperaccess.com/full/6904966.jpg",
    "https://wallpapercave.com/wp/wp3224876.jpg",
    "https://wallpaperaccess.com/full/104879.jpg",
    "https://wallpapercave.com/wp/wp3224890.jpg"  
    ]        
    
    
    let imgseq= 0;
    
    btnarr[0].addEventListener("click", function(){
    
    if(imgseq === 0)
    {
        imgseq= imgArr.length-1
    }
    else{
        imgseq--
    }
    
    image.src= imgArr[imgseq]
    })
    
    
    btnarr[1].addEventListener("click", function(){
    
    if(imgseq === imgArr.length-1)
    {
        imgseq= 0
    }
    else{
        imgseq++
    }
    image.src= imgArr[imgseq]
    
    })
