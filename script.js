function addImage() {
  let imageUrl1 = document.querySelector("#userImg").value.length
  let userPro1=document.querySelector("#userPro").value.length
  let userCate1=document.querySelector("#userCate").value.length
  let userPrice1=document.querySelector("#userPrice").value.length
  let userQuen1=document.querySelector("#userQuan").value.length


  if(imageUrl1==0 || userPro1==0 || userCate1==0 || userPrice1==0 || userQuen1==0){
    alert("siz ma`lumotlarni to`lliq taqdim etmadingiz")
  }else{
    let imageUrl = document.querySelector("#userImg").value;
    let userPro=document.querySelector("#userPro").value
    let userCate=document.querySelector("#userCate").value
    let userPrice=document.querySelector("#userPrice").value
    let userQuen=document.querySelector("#userQuan").value

    let main=document.querySelector("main")
    let big=document.createElement("div")
    big.className="big"
    let cont1=document.createElement("div")
    cont1.className="cont1"
    let imageCont = document.createElement("div");
    imageCont.id="img"
    cont1.appendChild(imageCont);
    
    let newImage = document.createElement("img");
    newImage.style.width="65px"
    newImage.style.height="65px"
    newImage.style.borderRadius="5px"
    newImage.setAttribute("src", imageUrl);
    imageCont.appendChild(newImage);
    
    let timex=document.createElement("div")
    timex.className="timex"
    let prod=document.createElement("h3")
    let cate=document.createElement("h4")
    prod.id="prod"
    cate.id="cate"
    
    prod.innerHTML=userPro
    cate.innerHTML=`Category: ${userCate}`
    timex.appendChild(prod)
    timex.appendChild(cate)
    cont1.appendChild(timex)
   
    
    let pric=document.createElement("h3")
    pric.id="pric"
    pric.innerHTML=`${userPrice}$`
    cont1.appendChild(pric)
   
    
    let quan=document.createElement("h3")
    quan.className="qq"
    quan.innerHTML=userQuen
    cont1.appendChild(quan)
   
    let remove=document.createElement("div")
    let removeImg=document.createElement("img")
    removeImg.id="remove"
    remove.appendChild(removeImg)
    removeImg.setAttribute("src", `Без названия.png`);
   
    cont1.appendChild(remove)
    big.appendChild(cont1)
    main.appendChild(big)
   
    removeImg.addEventListener("click",()=>{1
      big.remove()
    })
  }
 }



