import router from '@system.router';
import pkg from '@system.package';

export default {
    data: {
        installed : "--"
    },
    onInit(){
        this.checkIfAppInstalled("com.myapps.harmonyappjava")
    },
    checkIfAppInstalled(packageName){
        var _this = this
        pkg.hasInstalled({
            bundleName: packageName,
            success: function(data) {
                _this.installed = "Yes"
                console.log('package has installed: ' + data);
            },
            fail: function(data, code) {
                _this.installed = "No"
                console.log('query package fail, code: ' + code + ', data: ' + data);
            },
        });
        return installed;
    },

    touchMove(e) { // Handle the swipe event.

        if (e.direction == "right") // Swipe right to exit.
        {
            router.replace({
                uri: 'pages/systemcapabilities/systemcapabilities'
            })
        }
    }
}
