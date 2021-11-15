// @ts-nocheck
import app from '@system.app';
import router from '@system.router'

export default {
    data: {
        deviceList: ["test", "test1", "test1", "test1", "test1"],
    },
    doDistribute: function (e) {
        this.tryContinueAbility();
    },
    tryContinueAbility: async function () {
        let result = await FeatureAbility.continueAbility();
        console.info("tag001", "result:" + JSON.stringify(result));
    },
    onStartContinuation() {
        console.info("tag001", "onStartContinuation");
        return true;
    },
    onCompleteContinuation(code) {
        console.info("tag001", "CompleteContinuation: code = " + code);
        app.terminate();
    },
    onSaveData(saveData) {
        Object.assign(saveData, data)
    },
    onRestoreData(restoreData) {
        console.info("tag001", "onRestoreData,restoreData:" + JSON.stringify(restoreData));
    },
    touchMove(e) {  // Handle the swipe event.

        if(e.direction == "right")  // Swipe right to exit.
        {
            router.replace({
                uri: 'pages/distributedCapability/distributedCapability'
            })
        }
    }
}