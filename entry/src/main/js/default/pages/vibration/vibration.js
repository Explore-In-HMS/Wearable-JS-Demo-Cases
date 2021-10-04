import vibrator from '@system.vibrator';
import router from '@system.router';

export default {
    data: {
        title: 'Vibration Action',
    },
    shortAction() {
        vibrator.vibrate({
            mode: 'short',
            success: function (ret) {
                console.log('short vibrate is successful');
            },
            fail: function (ret) {
                console.log('short vibrate is failed');
            },
            complete: function (ret) {
                console.log('short vibrate is completed');
            }
        });
    },
    longAction() {
        vibrator.vibrate({
            mode: 'long',
            success: function (ret) {
                console.log('long vibrate is successful');
            },
            fail: function (ret) {
                console.log('long vibrate is failed');
            },
            complete: function (ret) {
                console.log('long vibrate is completed');
            }
        });
    },
    touchMove(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/vibration/vibration'
            })
        }
    }
}
