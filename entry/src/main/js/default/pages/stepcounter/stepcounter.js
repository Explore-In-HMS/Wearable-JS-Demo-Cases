import sensor from '@system.sensor';
import router from '@system.router'

export default {
    data: {
        stepCount: '--',
        distance: '--',
    },
    onInit() {
        this.getStepCount();
    },
    getStepCount() {
        let _this = this;
        sensor.subscribeStepCounter({
            success: function (response) {
                console.log('get step value:' + response.steps);
                _this.stepCount = response.steps + ' STEPS';
                _this.calculateDistance(response.steps);
            },
            fail: function (data, code) {
                console.log('subscribe step count fail, code:' + code + ', data:' + data);
            },
        });
    },
    calculateDistance(steps) {
        const multiplyVal = 0.762;
        let stepToMeter = parseInt(steps * multiplyVal);
        if (stepToMeter < 1000) {
            this.distance = stepToMeter + " metres"
        } else {
            this.distance = (stepToMeter / 1000).toFixed(1) + " km"
        }
    },
    touchMove(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/sensors/sensors'
            });
        }
    },
    stepCounterUnsubscribe() {
        sensor.unsubscribeStepCounter();
    },
    onDestroy() {
        this.barometerUnsubscribe();
    }
}
