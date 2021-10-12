function main() {
    asTabs(document.querySelector('tab-panel'));
}

function asTabs(panel) {
    const panelChildren = panel.children;
    const pChildren = [...panelChildren];

    const tabs = document.createElement('div');
    tabs.classList.add('tabs');

    pChildren.forEach((item) => {
        // create buttons
        const button = document.createElement('button');
        button.textContent = item.dataset.tabname;
        button.dataset.tabname = item.dataset.tabname;
        tabs.appendChild(button);

        // display only the first child div
        if(panel.firstElementChild !== item) {
            item.style.display = 'none';
        }

        // event handler for clicking the buttons
        button.addEventListener('click', (e) => {
            pChildren.forEach((pan) => {
                console.log(e.target.dataset.tabname);
                if (pan.dataset.tabname !== e.target.dataset.tabname) {
                    pan.style.display = 'none';
                } else {
                    pan.style.display = 'block';
                }
            }); 

            const buttons = document.querySelectorAll('button');
            buttons.forEach((btn) => {
                if (btn === e.target) {
                    btn.style.backgroundColor = '#FFFFFF';
                } else {
                    btn.style.backgroundColor = '#CCCCCC';
                }
            });
        });
    });


    panel.insertBefore(tabs, panel.firstChild);
}

document.addEventListener('DOMContentLoaded', main);