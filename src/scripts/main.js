document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('[data-tab-button');

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', function (button) {

            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
            hideTabs();
            tab.classList.add('informations__item--is-active')
            removeClassActive();
            button.target.classList.add('tabs__button--is-active')
        })
    }
})

function removeClassActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('tabs__button--is-active')
    }
}

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('informations__item--is-active')
    }
}