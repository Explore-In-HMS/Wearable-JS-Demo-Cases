import sensor from '@system.sensor';
import router from '@system.router'
import app from '@system.app';

export default {
    data: {
        pressure: '--'
    },
    onInit() {
        this.getPressure();
        var info = app.getInfo();
        console.log(JSON.stringify(info));
    },
    getPressure() {
        var that = this;
        sensor.subscribeBarometer({
            success: function (data) {
                console.log('success get sensor pressure:' + data.pressure);
                that.pressure = 'Pressure:' + data.pressure + ' Pa';
            },
            fail: function (data, code) {
                console.log('fail get device info code:' + code + ', data: ' + data);
                that.pressure = 'fail get device info code:' + code + ', data: ' + data;
            },
        });
    },
    touchMove(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/sensors/sensors'
            });
        }
    },
    onDestroy() {
        sensor.unsubscribeBarometer();
    }
}
