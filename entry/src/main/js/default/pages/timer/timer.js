import router from '@system.router'

export default {
    data: {
        timeout: '--',
        interval: '--',
        timeoutID: '',
        intervalID: ''
    },
    setTimeout() {
        var _this = this;
        _this.timeout = "Please wait 3 seconds"
        _this.timeoutID = setTimeout(function () {
            console.log('delay 3s');
            _this.timeout = "Thank you"
        }, 3000);
    },
    clearTimeout() {
        var _this = this;
        clearTimeout(_this.timeoutID)
        _this.timeout = "Cleared timeout"
    },
    setInterval() {
        var _this = this;
        _this.interval = "Starting"

        var counter = 0;

        _this.intervalID = setInterval(function () {
            console.log('do very 1s');
            counter++;
            _this.interval = counter;
            console.log('counter' + counter);
        }, 1000);
    },
    clearInterval() {
        var _this = this;
        clearInterval(_this.intervalID)
        _this.interval = "Cleared interval"
    },
    touchMove(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/basicFeatures/basicFeatures'
            });
        }
    }
}
