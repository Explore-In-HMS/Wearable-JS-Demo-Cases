export default {
    start() {
        let actionData = {
            uri: 'www.huawei.com'
        };
        let target = {
            bundleName: "com.example.harmonydevsample",
            abilityName: "com.example.harmonydevsample.EntryJSApiAbility",
            data: actionData
        };

        let result = await FeatureAbility.startAbility(target);
        let ret = JSON.parse(result);
        if (ret.code == 0) {
            console.log('Browsing service started successfully.');
        } else {
            console.log('Failed to start the browsing service. Reason: ' + ret.data);
        }
    }
}

