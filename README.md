# **Wearable JS Demo App**

This application shows all the features provided by HarmonyOS for wearable devices in one application.
## **Sensors**

| **Sensors** | **Screenshots** |
| ------ | ------ |
| **Heart Rate:** Measures the heart rate of a user. Before measuring the user's heart rate, we check whether the wearable's wearing state with the **Body State sensor**, and if it is worn, we measure the heart rate. | ![Screenshots](screenshots/heartRate.png) |
| **Light:** Measures the ambient light intensity of the device, in the unit of lux.| ![Screenshots](screenshots/light.png) |
| **Compass:** Listens for changes of compass sensor data. If this API is called multiple times for the same application, the last call takes effect. | ![Screenshots](screenshots/compass.png) |
| **Accelerometer:** Listens for changes of acceleration sensor data. If this API is called multiple times for the same application, the last call takes effect.| ![Screenshots](screenshots/accelerometer.png) |
| **Barometer:** Listens for changes of barometer sensor data. If this API is called multiple times for the same application, the last call takes effect.| ![Screenshots](screenshots/barometer.png) |
| **Step Counter:** Listens for changes of step counter sensor data. If this API is called multiple times for the same application, the last call takes effect.| ![Screenshots](screenshots/step_counter.png) |

## **Basic Features**

| **Basic Feature** | **Screenshots** |
| ------ | ------ |
| **Animation:** Allows creating and playing animations.| ![Screenshots](screenshots/animator.gif) |