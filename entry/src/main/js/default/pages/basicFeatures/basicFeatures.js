import router from '@system.router';

export default {

    startAnimation() {
        router.push({
            uri: 'pages/compassanimator/compassanimator'
        });
    },
    startPopupWindow() {
        router.push({
            uri: 'pages/popupWindow/popupWindow'
        });
    },
    startTimer() {
        router.push({
            uri: 'pages/timer/timer'
        });
    },
    startApplicationConfiguration() {
        router.push({
            uri: ''
        });
    },
    touchMove(e) {  // Handle the swipe event.

        if(e.direction == "right")  // Swipe right to exit.
        {
            router.replace({
                uri: 'pages/index/index'
            })
        }
    }
}
