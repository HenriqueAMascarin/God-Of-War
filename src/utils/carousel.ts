type carousel = {
    father: string,
    carouselObject: string,
    items: string,
    buttonClass: string,
}

export default function carousel({father,carouselObject, items, buttonClass}:carousel){
    const carouselItems = document.querySelectorAll(father + " " + carouselObject + " " + items);
    const carousel = document.querySelector(father + " " + carouselObject) as HTMLElement;
    const buttons = document.querySelectorAll(father + " " + buttonClass);

    let currentIndex = 1;
    
    buttons[0].addEventListener("click", negativePos);
    buttons[1].addEventListener("click", positivePos);

    function negativePos(){
        currentIndex--;
        getPosition("left");
    }
    
    function positivePos(){
        currentIndex++;
        getPosition("right");
    }

    function getPosition(direction:string){
        if(currentIndex === -1){
            currentIndex = carouselItems.length - 1;
        }

        let moveCurrent = Math.abs(currentIndex) % carouselItems.length;
        setPos(moveCurrent, direction);
    }

    let lastItem:number;
    let currentSize:number = 0;
    function setPos(moveCurrent:number, direction:string){
        let sizeItem = carouselItems[0].clientWidth + 30;

        if(lastItem === (carouselItems.length - 1) && moveCurrent === 0){
            currentSize = sizeItem;
        }else if(lastItem === 0 && moveCurrent === (carouselItems.length - 1)){
            currentSize = -(sizeItem * (carouselItems.length - 2));
        }else if(direction === "left"){
            currentSize += sizeItem;
        }else if(direction === "right"){
            currentSize -= sizeItem;
        }
        
        lastItem = moveCurrent;
        styleItems(currentSize);
    }
   
    function styleItems(currentSize:number){
        carousel.style.transform = "translateX("+ currentSize + "px)";
    }
    
}