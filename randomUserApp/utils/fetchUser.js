//유저의 데이터를 받아오는 함수 모듈

const URL =  'https://randomuser.me/api/'

const getUser = async () => {
    const response = await fetch(URL); //서버에서 데이터를 가져옴
    const data = await response.json(); //JSON 본문 콘텐츠를 추출
    console.log(data)
    const person = data.result[0];
    const {phone, email} = person;
    const {large: image} = person.picture;
    const {password} = person.login;
    const {first, last} = person.name;
    const {
        dob: {age}
    } = person;
    const {street: {number, name}} = person.location;
    //가져온 데이터에서 사용할 부분을 변수에 지정하여 객체로 반환

    return {
        image,
        phone,
        email,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`
    }
}

export default getUser