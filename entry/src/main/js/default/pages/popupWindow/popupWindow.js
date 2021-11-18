import prompt from '@system.prompt';
import router from '@system.router';

export default {
    data: {
        title: 'Pop-up Window',
    },
    toastAction() {
        prompt.showToast({
            message: 'This is a toast message example.',
            duration: 3000,
        });
    },
    dialogAction() {
        prompt.showDialog({
            title: 'Message Title',
            message: 'This is a dialog message example.',
            buttons: [
                {
                    text: 'button',
                    color: '#EE4747',
                },
            ],
            success: function (data) {
                console.log('dialog success callback,click button : ' + data.index);
            },
            cancel: function () {
                console.log('dialog cancel callback');
            },
        });
    },
    touchMove(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/basicFeatures/basicFeatures'
            })
        }
    }
}


