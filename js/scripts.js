var navclass = "translate-x-full"
document.getElementById('menubtn').addEventListener("click", function() {
    document.getElementById('bodyid').classList.toggle("overflow-hidden");
    if (navclass == "translate-x-full"){    
        document.getElementById('navbar').classList.remove("translate-x-full");
        document.getElementById('navbar').classList.add("translate-x-0");
        navclass = "translate-x-0";
    }
    else{
        document.getElementById('navbar').classList.remove("translate-x-0");
        document.getElementById('navbar').classList.add("translate-x-full");
        navclass = "translate-x-full";
    }
});

window.addEventListener('scroll', function(){
    if (scrollY > 200){
        document.getElementById('header').classList.remove("h-24", "bg-[#3c3c3c]", "text-white",);
        document.getElementById('header').classList.add("h-[70px]", "bg-white", "text-[#ea4343]");
        document.getElementById('logo').classList.remove("h-20");
        document.getElementById('logo').classList.add("h-16");
        document.getElementById('blacklogo').classList.remove("hidden");
        document.getElementById('menulist').classList.add("bg-white");
        document.getElementById('menulist').classList.remove("bg-[#3c3c3c]");
    }
    else if (scrollY < 200){
        document.getElementById('header').classList.remove("h-[70px]", "bg-white", "text-[#ea4343]");
        document.getElementById('header').classList.add("h-24", "bg-[#3c3c3c]", "text-white");
        document.getElementById('logo').classList.remove("h-16");
        document.getElementById('logo').classList.add("h-20");
        document.getElementById('blacklogo').classList.add("hidden");
        document.getElementById('menulist').classList.remove("bg-white");
        document.getElementById('menulist').classList.add("bg-[#3c3c3c]");
    }
});