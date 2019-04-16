class TabLink {
    constructor(element) {
        this.element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.team[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => this.select());
    };

    select() {
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
        const items = document.querySelectorAll(`.tabs-items`);
        items.forEach(item => {
            item.classList.remove('active-tab');
        })
        this.element.classList.add('active-tab')
    }
}