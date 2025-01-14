class DropdownMenu extends HTMLElement{constructor(){super(),this.classes={hover:"is-hover",active:"is-active",animate:"show-from-bottom"},this.selectors={header:".shopify-section-header",background:".header-background",topMenuItem:".header__menu-item--top",menus:"dropdown-menu, mega-menu",wrapper:".list-menu",childAnimate:".list-menu-dropdown > .list-menu"},this.timeout,this.addEventListener("focusin",this.handleMouseover.bind(this)),this.addEventListener("mouseenter",this.handleMouseover.bind(this))}handleMouseover(){this.classList.contains(this.classes.active)||(this.bindEvent(),this.removeClasses(),this.addClasses(),this.resetBackground(),this.animateMenu())}handleMouseleave(){this.header&&(this.reset(),this.resetBackground(),this.header.classList.remove(this.classes.hover),this.wrapper.removeEventListener("mouseleave",this.onHeaderMouseLeaveEvent))}bindEvent(){this.onHeaderMouseLeaveEvent=this.onHeaderMouseLeaveEvent||this.handleMouseleave.bind(this),this.header=this.header||document.querySelector(this.selectors.header),this.wrapper=this.closest(this.selectors.wrapper),this.wrapper.addEventListener("mouseleave",this.onHeaderMouseLeaveEvent)}addClasses(){let e=0;this.querySelector(this.selectors.topMenuItem)&&!this.isHover()&&(e=150,(this.closest(".header--top-center")||this.closest(".header--top-left"))&&(e=200)),this.timeout=setTimeout((()=>{this.isHover()&&this.classList.add(this.classes.active)}),e),this.header.classList.add(this.classes.hover)}removeClasses(){this.header.querySelectorAll(this.selectors.menus).forEach((e=>{let s=!1;e.querySelectorAll("dropdown-menu").forEach((e=>{e!==this||(s=!0)})),s||e.reset()}))}isHover(){return this.header.classList.contains(this.classes.hover)}reset(){this.classList.remove(this.classes.active);const e=this.querySelector(this.selectors.childAnimate);e&&e.classList.remove(this.classes.animate),clearTimeout(this.timeout)}resetBackground(){this.header.querySelector(this.selectors.background).classList.remove(this.classes.active)}animateMenu(){const e=this.querySelector(this.selectors.childAnimate);e&&setTimeout((()=>{e.classList.add(this.classes.animate)}),150)}close(){this.handleMouseleave()}}customElements.define("dropdown-menu",DropdownMenu);class MegaMenu extends HTMLElement{constructor(){super(),this.classes={hover:"is-hover",active:"is-active",animate:"show-from-bottom"},this.selectors={header:".shopify-section-header",background:".header-background",dropdown:".list-menu-dropdown",menus:"dropdown-menu, mega-menu",wrapper:".list-menu",childAnimate:".mega-menu__item, .mega-menu__promo"},this.timeout=[],this.addEventListener("focusin",this.handleMouseover.bind(this)),this.addEventListener("mouseenter",this.handleMouseover.bind(this))}handleMouseover(){this.classList.contains(this.classes.active)||(this.bindEvent(),this.removeClasses(),this.addClasses(),this.showSublist())}handleMouseleave(){this.header&&(this.reset(),this.resetBackground(),this.header.classList.remove(this.classes.hover),this.wrapper.removeEventListener("mouseleave",this.onHeaderMouseLeaveEvent))}bindEvent(){this.onHeaderMouseLeaveEvent=this.onHeaderMouseLeaveEvent||this.handleMouseleave.bind(this),this.header=this.header||document.querySelector(this.selectors.header),this.wrapper=this.closest(this.selectors.wrapper),this.wrapper.addEventListener("mouseleave",this.onHeaderMouseLeaveEvent)}showSublist(){const e=this.querySelector(this.selectors.dropdown),s=this.header.querySelector(this.selectors.background);s.style.setProperty("--height",this.header.clientHeight+e.clientHeight+"px"),s.classList.add(this.classes.active)}addClasses(){this.classList.add(this.classes.active);const e=this.querySelectorAll(this.selectors.childAnimate),s=e.length>5?75:150;e.forEach(((e,t)=>{const i=setTimeout((()=>{e.classList.add(this.classes.animate)}),s*t+100);this.timeout.push(i)})),this.header.classList.add(this.classes.hover)}removeClasses(){this.header.querySelectorAll(this.selectors.menus).forEach((e=>{e.reset()}))}reset(){this.classList.remove(this.classes.active);this.querySelectorAll(this.selectors.childAnimate).forEach((e=>{e.classList.remove(this.classes.animate)})),this.timeout.forEach((e=>{clearTimeout(e)}))}resetBackground(){this.header.querySelector(this.selectors.background).classList.remove(this.classes.active)}close(){this.handleMouseleave()}}customElements.define("mega-menu",MegaMenu);