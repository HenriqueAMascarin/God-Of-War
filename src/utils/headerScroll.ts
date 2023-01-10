export default function headerScroll() {
    //parte de funcionalidade do header ir e voltar
    let header: Element | null = document.querySelector(".headerClass");
    let oldScroll: number;

    window.addEventListener("scroll", headerScroll);

    function headerScroll() {

        if (!header) {
            header = document.querySelector(".headerClass");
        }

        if ((window.scrollY > 60) && (!(header?.classList.contains("close"))) && ((window.scrollY > oldScroll))) {
            header?.classList.add("close");
        } else if ((window.scrollY < 50) && (header?.classList.contains("close")) || (window.scrollY < oldScroll) && (header?.classList.contains("close"))) {
            header?.classList.remove("close");
        }

        oldScroll = window.scrollY;
    }
}