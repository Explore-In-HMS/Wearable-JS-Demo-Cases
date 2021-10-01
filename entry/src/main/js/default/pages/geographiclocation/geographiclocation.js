import router from '@system.router'
import geolocation from '@system.geolocation';

export default {
    data: {
        locationType: '--',
        coordType: '--'
    },
    onInit(){
        var _this = this;
        geolocation.getLocationType({
            success: function(data) {
                console.log('success get location type:' + data.types[0]);
                _this.locationType = data.types[0];
            },
            fail: function(data, code) {
                console.log('fail to get location. code:' + code + ', data:' + data);
            },
        });

        var types = geolocation.getSupportedCoordTypes();
        _this.coordType = types;
    },
    showLocationInfo(){
        router.push({
            uri: 'pages/geographicLocationInfo/geographicLocationInfo'
        })
    },
    showLocationSubscribe(){
        router.push({
            uri: 'pages/geographicLocationSubscribe/geographicLocationSubscribe'
        })
    },
    touchMove(e){
    if (e.direction == "right") {
        router.replace({
            uri: 'pages/systemcapabilities/systemcapabilities'
        });
    }
}
}
