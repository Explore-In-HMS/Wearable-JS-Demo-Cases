import router from '@system.router'
import geolocation from '@system.geolocation';

export default {
    data: {
        longitude: '--',
        latitude: '--',
        altitude: '--',
        accuracy: '--',
        time: '--'
    },
    onInit() {
        var _this = this;
        geolocation.subscribe({
            success: function (data) {
                console.log('get location. latitude:' + data.latitude);
                _this.longitude = data.longitude;
                _this.latitude = data.latitude;
                _this.altitude = data.altitude;
                _this.accuracy = data.accuracy;
                _this.time = data.time;
            },
            fail: function (data, code) {
                console.log('fail to get location. code:' + code + ', data:' + data);
            },
        });
    },
    touchMove(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/geographiclocation/geographiclocation'
            });
        }
    },
    onDestroy() {
        geolocation.unsubscribe();
    }
}
