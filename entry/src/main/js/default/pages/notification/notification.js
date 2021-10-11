import notification from '@system.notification';
import router from '@system.router';

export default {
    data: {
        title: 'Notification Message',
    },
    notificationAction() {
        notification.show({
            contentTitle: 'Notification Message Title',
            contentText: 'This a notification message example. When you click, it redirects you to System Capabilities main page.',
            clickAction: {
                bundleName: 'com.wearableJS.turkeyp3',
                abilityName: '.MainAbility',
                uri: 'pages/systemcapabilities/systemcapabilities',
            },
        });
    },
    touchMove(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/notification/notification'
            })
        }
    }
}



