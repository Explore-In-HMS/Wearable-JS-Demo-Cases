import router from '@system.router';

export default {
    startHeartRate() {
        router.push({
            uri: 'pages/heartrate/heartrate'
        });
    },
    startLight() {
        router.push({
            uri: 'pages/light/light'
        });
    },
    startBarometer() {
        router.push({
            uri: 'pages/barometer/barometer'
        });
    },
    startCompass() {
        router.push ({
            uri:'pages/compassanimator/compassanimator'
        })
    },
    startStep() {
        router.push({
            uri: 'pages/stepcounter/stepcounter'
        });
    },
    startDeviceOrientation() {
        router.replace({
            uri: 'pages/deviceorientation/deviceorientation'
        });
    },
    startAccelerometer() {
        router.push ({
            uri: 'pages/accelerometer/accelerometer'
        });
    },
    startGyroscope() {
        router.replace({
            uri: 'pages/gyroscope/gyroscope'
        });
    }
}
