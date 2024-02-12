const calculateTip = cost => {return cost * 0.1};


function displayHMTL() {
    const inputElement = document.querySelector('.js-cost-input');
    const tip = calculateTip(Number(inputElement.value));
    const paragraphElement = document.querySelector('.js-tip');
    paragraphElement.innerHTML = tip;
    inputElement.value = '';
}

const btnAction = () => displayHMTL();

document.querySelector('.js-calculate-btn')
    .addEventListener('click', btnAction);

const onPressEnter = keys => {
    if (keys.key === 'Enter') {
        displayHMTL();
    }
};

document.addEventListener('keydown', onPressEnter);