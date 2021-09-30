import router from '@system.router';
import prompt from '@system.prompt'
import pkg from '@system.package';
export default {
    data: {
        packageNameText : "--",
        installed : "--"
    },
    onTextChange(e){
        prompt.showToast({
            message: "value: " + e.value,
            duration: 3000,
        });
        this.packageNameText = e.value;
    },
    buttonClick(e){
        this.$element("input").showError({
            error: 'error text'
        });
        if (this.packageNameText != null) {
            checkIfAppInstalled(this.packageNameText)
        }
    },
    checkIfAppInstalled(packageName){
        var installed ;
        pkg.hasInstalled({
            bundleName: packageName,
            success: function(data) {
                installed = "Yes"
                console.log('package has installed: ' + data);
            },
            fail: function(data, code) {
                installed = "No"
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
