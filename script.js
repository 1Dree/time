// change time display and img banner
// in accordance with the hour of the day
function changeInTime() {
    const banner = document.querySelector('#banner'),
        bannerH1 = banner.querySelector('h1'),
        images = [
            './img/img1.jpg',
            './img/img2.jpg',
            './img/32336756220_9dd5a40118_k.jpg'
        ],
        time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        // turning hours and minutes in iterables
        strHour = hours + '',
        strMin = minutes + '';

    // changing img in accordance with the day's moment
    if (hours >= 0 && hours < 12) {
        //morning
        banner.style.backgroundImage = `url(${images[0]})`;

    } else if (hours >= 12 && hours < 18) {
        //afternoon
        banner.style.backgroundImage = `url(${images[1]})`;

    } else {
        //nigth
        banner.style.backgroundImage = `url(${images[2]})`;
    }

    //formating the time display properly
    if (strHour.length === 1 && strMin.length === 1) {
        bannerH1.textContent = `0${hours}:0${minutes}`;

    } else if (strHour.length === 1) {
        bannerH1.textContent = `0${hours}:${minutes}`;

    } else if (strMin.length === 1) {
        bannerH1.textContent = `${hours}:0${minutes}`;

    } else {
        bannerH1.textContent = `${hours}:${minutes}`;
    }
}
// to get the changes in the system's hour
setInterval(changeInTime, 1000);