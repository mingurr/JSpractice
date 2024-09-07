//html 요소들을 사용하기위해 가져오는 함수 모듈

const getElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error('없는 요소 입니다.');
}

export default getElement;