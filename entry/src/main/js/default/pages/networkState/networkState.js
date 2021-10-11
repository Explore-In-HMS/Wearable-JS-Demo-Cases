import network from '@system.network';
import router from '@system.router'

export default {
    data: {
        metered: '--',
        type: '--'
    },
    getNetworkInfo(){
        var _this = this;
        network.getType({
            success: function(data) {
                _this.metered = data.metered;
                _this.type = data.type
                console.log('success get network type:' + data.type);
            },
            fail: function(data, code) {
                console.log('fail to get network type code:' + code + ', data:' + data);
            },
        });
    },
    subscribeNetworkInfo(){
        var _this = this;
        network.subscribe({
            success: function(data) {
                _this.metered = data.metered;
                _this.type = data.type
                console.log('network type change type:' + data.type);
            },
            fail: function(data, code) {
                console.log('fail to subscribe network, code:' + code + ', data:' + data);
            },
        });
    },
    touchMove(e){
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/systemcapabilities/systemcapabilities'
            });
        }
    },
    onDestroy(){
        network.unsubscribe();
    }
}
