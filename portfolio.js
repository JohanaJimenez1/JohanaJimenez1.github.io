let menuVisible = false;

function noneOrblock(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function select(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}