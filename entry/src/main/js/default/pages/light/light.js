import sensor from '@system.sensor';
import router from '@system.router';

export default {
    data: {
        intensity: '--',
    },
    onInit() {
        this.getLight();
    },
    getLight() {
        var _this = this;
        sensor.subscribeLight({
            success: function (ret) {
                console.log('get data intensity:' + ret.intensity);
                _this.intensity = "Light: " + ret.intensity + " lux";
            },
            fail: function (data, code) {
                console.error('subscribe light fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    touchMove(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/sensors/sensors'
            })
        }
    },
    onDestroy() {
        this.unsubscribeLight();
    }
}
