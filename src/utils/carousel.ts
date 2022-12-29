type carousel = {
    father: string,
    carouselObject: string,
    items: string,
    buttonClass: string,
    initialItem: number,
    leftGap: number,
    classActive: string,
}

export default function carousel({father,carouselObject, items, buttonClass, initialItem, leftGap, classActive}:carousel){
    const carouselItems = document.querySelectorAll(father + " " + carouselObject + " " + items);
    const carousel = document.querySelector(father + " " + carouselObject) as HTMLElement;
    const buttons = document.querySelectorAll(father + " " + buttonClass);
    
    buttons[0].addEventListener("click", negativePos);
    buttons[1].addEventListener("click", positivePos);

    function negativePos(){
        initialItem--;
        getPosition();
    }
    
    function positivePos(){
        initialItem++;
        getPosition();
    }

    function getPosition(){
        if(initialItem === -1){
            initialItem = carouselItems.length - 1;
        }

        let moveCurrent = Math.abs(initialItem) % carouselItems.length;
        setPos(moveCurrent);
    }

    let lastItem:number;
    let currentSize:number = 0;
    function setPos(moveCurrent:number){
        let sizeItem = carouselItems[0].clientWidth + leftGap;
        currentSize = -(sizeItem * moveCurrent);
        
        lastItem = moveCurrent;
        styleItems(currentSize, moveCurrent);
    }
   
    function styleItems(currentSize:number, moveCurrent:number){
        carouselItems.forEach((e) =>{
            e.classList.remove(classActive);
        })
        carouselItems[moveCurrent].classList.add(classActive);

        carousel.style.transform = "translateX("+ currentSize + "px)";
        
    }

    getPosition();
    
    let windowOld = window.innerWidth;
    function resizeDo(){
        if(window.innerWidth !== windowOld){
            getPosition();
            windowOld = window.innerWidth;
        }
    }

    let time: number;
    window.addEventListener("resize", () =>{
        clearTimeout(time);
        time = setTimeout(resizeDo, 400);
    })
    
}