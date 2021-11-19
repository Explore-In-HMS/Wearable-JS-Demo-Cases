// @ts-nocheck
import router from '@system.router'
import prompt from '@system.prompt';

export default {
    data: {
        deviceList: ["Test1", "Test2"]
    },
    async doDistributeLocal() {
        let actionData = {
            uri: 'www.huawei.com'
        };
        let target = {
            bundleName: "com.myapps.harmonyappjava",
            abilityName: "com.myapps.harmonyappjava.MainAbility",
            data: actionData
        };

        let result = await FeatureAbility.startAbility(target);
        if (result.code == 0) {
            console.log('success');
        } else {
            console.log('cannot start browsing service, reason: ' + result.data);
        }
    },
    async doDistributeRemote() {
        // @ts-ignore
        // Testing Dialog Component
        this.$element('showDialog').show();

        // Require API 6+ for getDeviceList method
        var ret = await FeatureAbility.getDeviceList(0);
        if (ret.code === 0) {
            this.deviceList = [];
            for (var i = 0; i < ret.data.length; i++) {
                this.deviceList.push({
                    deviceName: ret.data[i].deviceName,
                    networkId: ret.data[i].networkId
                });
            }
        }
        if (this.deviceList.length > 0) {
            this.$element('showDialog').show();
        } else {
            prompt.showToast({
                message: 'Error',
                duration: 1000,
            });
        }
    },
    async selectDevice(networkId) {
        this.$element('showDialog').close();
        let actionData = {
            networkId: this.localNetWorkId,
        };

        let target = {
            bundleName: "com.myapps.harmonyappjava",
            abilityName: "com.myapps.harmonyappjava.MainAbility",
            networkId: networkId,
            data: actionData
        };

        let result = await FeatureAbility.startAbility(target);
        let ret = JSON.parse(result);
        if (ret.code == 0) {
            prompt.showToast({
                message: 'OK',
                duration: 1000,
            });
        }
    },
    touchMove(e) { // Handle the swipe event.

        if (e.direction == "right") // Swipe right to exit.
        {
            router.replace({
                uri: 'pages/distributedCapability/distributedCapability'
            })
        }
    }
}