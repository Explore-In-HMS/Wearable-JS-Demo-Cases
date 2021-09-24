import sensor from '@system.sensor';
import router from '@system.router'

export default {
    data: {
        pressure: '--'
    }, onInit() {
        this.getPressure();
    }, getPressure(){
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
    }, touchMove(e){
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/sensors/sensors'
            });
        }
    }, barometerUnsubscribe(){
        sensor.unsubscribeBarometer();
    } , onDestroy(){
        this.barometerUnsubscribe();
    }
}
