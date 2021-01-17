const visible = function (target, element) {
    const animated = "animated";
    // Все позиции элемента
    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней части окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней части окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой части окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        return element ? element.classList.add(animated) : target.classList.add(animated);
    } else {
        return element ? element.classList.remove(animated) : target.classList.remove(animated);
        // Если элемент не видно, то запускаем этот код
    };
};

function animation(nodeElements, nodeElement) {

    // Получаем нужный элемент
    const NodeElements = document.querySelectorAll(nodeElements);
    let NodeElement;
    if (NodeElements && nodeElement) {
        NodeElement = NodeElements.forEach((element) => {
            element.querySelector(nodeElement);
        });
    }

    if (NodeElements || NodeElement) {
        NodeElements.forEach((element) => {
            visible(element, NodeElement);
        });
    }
}

function animations() {
    // Получаем нужный элемент
    // animation('.classNameForAnimate'); // css class который включает анимацию
    // animation('.class', '.class-from'); // .class -> секция которая должна анимироваться .class-from -> место откуда будет начинаться анимация когда достигнет window.bottom > 0
    // animation('.skills', '.skills-content');
    animation('.isAnimate');
   
}

window.addEventListener('scroll', function () {
    animations();
});

animations();
