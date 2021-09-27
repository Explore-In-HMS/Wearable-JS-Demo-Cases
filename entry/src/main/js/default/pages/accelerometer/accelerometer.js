import sensor from '@system.sensor';
import router from '@system.router';

export default {
    data: {
        X: "--",
        Y: "--",
        Z: "--"
    },
    onInit() {
        var _this = this;
        _this.startAccelerometer();
    },
    startAccelerometer() {
        var _this = this;
        //1. game: Extremely high frequency (20 ms per callback), which is applicable to gaming.
        //2. ui: High frequency (60 ms per callback), which is applicable to UI updating.
        //3. normal: Regular frequency (200 ms per callback), which is application to low power consumption. The default value is normal.

        sensor.subscribeAccelerometer({
            interval: 'normal',
            success: function (ret) {
                console.log('get data x:' + ret.x);
                console.log('get data y:' + ret.y);
                console.log('get data z:' + ret.z);
                _this.X = ret.x;
                _this.Y = ret.y;
                _this.Z = ret.z;
            },
            fail: function (data, code) {
                console.error('subscribe accelerometer fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    onDestroy() {
        sensor.unsubscribeAccelerometer()
    },
    touchMove(e) { // Handle the swipe event.

        if (e.direction == "right") // Swipe right to exit.
        {
            router.replace({
                uri: 'pages/sensors/sensors'
            })
        }
    }
}
