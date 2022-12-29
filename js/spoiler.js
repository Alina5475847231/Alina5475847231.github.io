window.acc=(e)=>{    
    let q=document.querySelectorAll(".acc"),        
    w=document.querySelectorAll(".accD");    
    q.forEach((e2,l)=>{        
        if(e==e2){            
            if(!e.classList.contains("accCl")){                
                e.classList.add("accCl");                
                w[l].classList.remove("dn")            
            }else{                
                e.classList.remove("accCl");                
                w[l].classList.add("dn")          
            }        
        }    
})};