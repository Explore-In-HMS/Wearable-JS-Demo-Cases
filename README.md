# **Wearable JS Demo App**

## Table of Contents

 * [Introduction](#introduction)
 * [Installation](#installation)
 * [Configuration ](#configuration )
 * [Supported Environments](#supported-environments)
 * [Implemented Features](#implemented-features)

## Introduction
This application shows all the features provided by HarmonyOS for wearable devices in one application.

## Installation
 • Install DevEco Studio<br/> • Set up the DevEco Studio development environment.The DevEco Studio development environment needs to depend on the network environment. It needs to be connected to the network to ensure the normal use of the tool.The development environment can be configured according to the following two situations <br />1.If you can directly access the Internet, just download the HarmonyOS SDK <br />2.If the network cannot access the Internet directly, it can be accessed through a proxy server<br /> • Generate secret key and apply for certificate

## Supported Environments
• A Huawei wearable device that supports HarmonyOS. <br/>

## Configuration
• Download this Project<br/> • Open HUAWEI DevEco Studio, click File> Open> Then select and open this Project<br/> • Click Build> Build App(s)/Hap(s)>Build Debug Hap(s) to compile the hap package<br/> • Click Run> Run 'entry' to run the hap package

## Implemented Features
| <br />**Sensors** | <br />**Screenshots** |
| ------ | ------ |
| **Heart Rate:**<br /> Measures the heart rate of a user. Before measuring the user's heart rate, we check whether the wearable's wearing state with the **Body State sensor**, and if it is worn, we measure the heart rate. | ![Screenshots](screenshots/heartRate.png) |
| **Light:**<br /> Measures the ambient light intensity of the device, in the unit of lux.| ![Screenshots](screenshots/light.png) |
| **Compass:**<br /> Listens for changes of compass sensor data. If this API is called multiple times for the same application, the last call takes effect. | ![Screenshots](screenshots/compass.png) |
| **Accelerometer:**<br /> Listens for changes of acceleration sensor data. If this API is called multiple times for the same application, the last call takes effect.| ![Screenshots](screenshots/accelerometer.png) |
| **Barometer:**<br /> Listens for changes of barometer sensor data. If this API is called multiple times for the same application, the last call takes effect.| ![Screenshots](screenshots/barometer.png) |
| **Step Counter:**<br /> Listens for changes of step counter sensor data. If this API is called multiple times for the same application, the last call takes effect.| ![Screenshots](screenshots/step_counter.png) |
| <br />**Basic Feature** | <br />**Screenshots** |
| **Animation:**<br />Allows creating and playing animations.<br> **- requestAnimationFrame** Requests an animation frame.<br> **- cancelAnimationFrame** Cancels the animation frame request.<br> **- createAnimator** Creates an animation object.| ![Screenshots](screenshots/compassanimator.gif) |
| **Timer:**<br /> -**setTimeout** method sets a timer for the system to call a function after the timer goes off.<br /> -**clearTimeout** method cancels the timer created via setTimeout().<br /> -**setInterval** method sets a repeating timer for the system to repeatedly call a function at a fixed interval.<br /> -**clearInterval** method cancels the repeating timer set via setInterval(). | ![Screenshots](screenshots/timer.gif) |
| **Application Configuration:**<br /> -**getLocale** Obtains the current locale of the application, which is the same as the system locale. | ![Screenshots](screenshots/applicationconfiguration.png) |
| **Pop-up Window:**<br /> Allows displaying the toast message box and the dialog message box.| ![Screenshots](screenshots/popupWindow.gif) |
| <br />**System Capability** | <br />**Screenshots** |
| **Geographic Location:**<br /> -**getLocation** method obtains the geographic location.<br /> -**getLocationType** method obtains the supported location types.<br /> -**subscribe** method listens to the geographical location. If this API is called multiple times, the last call takes effect.<br /> -**unsubscribe** method cancels listening to the geographical location.<br /> -**getSupportedCoordTypes** method obtains coordinate system types supported by the device. | ![Screenshots](screenshots/geoLocation.gif) |
| **Vibration:**<br /> Allows the device to create a vibration effect. The value long indicates long vibration, and short indicates short vibration. | ![Screenshots](screenshots/vibration.png) |
| **Battery Level:**<br /> Obtains the current charging state and battery level of the device. **Charging** indicates whether the battery is being charged. **Level** indicates the current battery level, which ranges from 0.00 to 1.00.| ![Screenshots](screenshots/battery.png) |
| **Application Management:**<br /> Check if the app installed on the device using  **hasInstalled** API. | ![Screenshots](screenshots/applicationmanagement.png) |
| **Device Information:**<br /> Shows detailed information of the device. | ![Screenshots](screenshots/deviceInfo.gif) |
| **Screen Brightness:** <br> **- setValue** Changes the screen brightness with given value.<br> **- getValue** Gets the current brightness of screen as an integer value.<br> **- setMode** Sets the screen brightness adjustment mode. (The value can be 0 or 1. <br> **0** The screen brightness is manually adjusted.<br> **1** The screen brightness is automatically adjusted.)<br> **- keepScreenOn** Sets whether to always keep the screen on.| ![Screenshots](screenshots/screenbrightness.gif) |
| **Network State:**<br /> -**getType** method obtains the network type.<br /> -**subscribe** method listens to the network connection state. If this method is called multiple times, the last call takes effect.<br /> -**unsubscribe** method cancels listening to the network connection state.<br /> | ![Screenshots](screenshots/networkState.png) |
| **Notification Message:**<br />Allows us to send notification messages to the wearable device.<br />-**contentTitle** parameter specifies the notification title.<br />-**contentText** parameter specifies the notification content.<br />-**clickAction** parameter gets the action triggered when the notification is clicked.<br /> | ![Screenshots](screenshots/notification.gif) |
| **Globalization:**<br /> -**Intl.DateTimeFormat** represents localized date and time formats for corresponding countries or regions. You can customize date and time formats. <br />-**Intl.NumberFormat** represents localized number formats for corresponding countries or regions. You can customize a number format.<br /> | ![Screenshots](screenshots/globalization.png) |
| **Media Query:**<br /> -**mediaquery.matchMedia(condition)** Creates a MediaQueryList object based on the query condition. <br />-**MediaQueryList.addListener(OBJECT)** Adds a listening function to MediaQueryList. The listening function must be added before onShow is called, that is, added in the onInit or onReady function.<br />| ![Screenshots](screenshots/mediaQuery.png) |
| <br />**File Data** | <br />**Screenshots** |
| **Data Storage:**<br /> -**get** method reads the stored content.<br /> -**set** method modifies the stored content.<br /> -**clear** method clears the stored content.<br /> -**delete** method deletes the stored content.<br /> | ![Screenshots](screenshots/dataStorage.gif) |
| **File Storage:**<br /> -**move** method moves a specified file to a given location.<br /> -**copy** method copies a file and saves the copy to a specified location.<br /> -**list** method obtains the list of all files in a specified directory.<br /> -**get** method obtains information about a specified local file.<br /> -**delete** method deletes local files.<br /> -**writeText** method writes text into a specified file.<br /> -**writeArrayBuffer** method writes buffer data into a specified file.<br /> -**readText** method reads text from a specified file.<br /> -**readArrayBuffer** method reads buffer data from a specified file.<br /> -**access** method checks whether a specified file or directory exists.<br /> -**mkdir** method creates a specified directory.<br /> -**rmdir** method deletes a specified directory.<br /> | ![Screenshots](screenshots/fileStorage.gif) |
| <br />**Network Access** | <br />**Screenshots** |
| **Data Request:**<br /> -**fetch** method obtains data through a network.<br />   | ![Screenshots](screenshots/dataRequest.gif) |
| <br />**Distributed Capability** | <br />**Screenshots** |
| **Distributed Start & Migration:**<br /> With the distributed start capability, you can start a local or remote FA with parameters passed. Distributed migration provides a proactive migration API and a series of page lifecycle callbacks to seamlessly migrate local services to specified devices.<br /> | ![Screenshots](screenshots/distributed.gif) |