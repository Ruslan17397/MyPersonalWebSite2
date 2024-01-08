module.exports = function (menuTrigger, menuBtn) {

const myMenuFunction = ()=>{
      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
}

menuTrigger.addEventListener('click', myMenuFunction);

};