class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.team[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => this.select());
    };

    select() {
        console.log(this.element);
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        })
        this.element.classList.add('active-tab');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        console.log(this.element)
        const items = document.querySelectorAll(`.team`);
        items.forEach(item => {
            item.classList.remove('active-tab');
        })
        this.element.classList.add('active-tab')
    }
}

let tabs = document.querySelectorAll('.tab');
tabs.forEach(function(tab){
    return new TabLink(tab);
})