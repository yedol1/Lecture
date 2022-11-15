window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.5400456, lng: 126.9921017 },
        zoom: 10,
    });
};
// async function App() {
//     const data = await fetch(
//         "https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=1&perPage=10&serviceKey=sNWejhBiEAcPT3jGwZ9dSWvv%2BjkO7Qmzki%2Byq4MO5Hg191eF1s7JoHPc4SHEtQYZ0OHgvsQlMWHK4tg7xQYClA%3D%3D"
//     )
//         .then((r) => r.json())
//         .then((r) => {
//             return r;
//         });
//     console.log(data);
// }

async function initMap() {
    let pageNum = 1;
    console.log("hi");
    const data = await fetch(
        `"https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=1&perPage=10&serviceKey=sNWejhBiEAcPT3jGwZ9dSWvv%2BjkO7Qmzki%2Byq4MO5Hg191eF1s7JoHPc4SHEtQYZ0OHgvsQlMWHK4tg7xQYClA%3D%3D"`
    )
        .then((r) => r.json())
        .then((data) => {
            return data;
        });

    console.log(data.data[0].위도);

    new google.maps.Marker({ position: { data } });

    data.data.forEach((item) => {
        new google.maps.Marker({
            position: { lat: item.위도, lng: item.경도 },
        });
    });

    // 이것도 사실 필요없음. 센터 잡으려고 하는 것

    const jeju = { lat: 33.3616658, lng: 126.5204118 };
    const map = new google.maps.Map(document.getElementById("map"), {
        // 숫자 조정해서 zoom + - 가능
        zoom: 11,
        center: jeju,
    });
}
initMap();
