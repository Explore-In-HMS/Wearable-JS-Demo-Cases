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
    touchMove(e) {

        if (e.direction == "right") {
            router.replace({
                uri: 'pages/distributedCapability/distributedCapability'
            })
        }
    }
}

