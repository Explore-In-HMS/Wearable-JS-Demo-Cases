import router from '@system.router';
export default {
    data: {
        images: [
            { src: '/common/images/compass1.png' },
            { src: '/common/images/compass2.png' },
            { src: '/common/images/compass3.png' },
            { src: '/common/images/compass4.png' },
        ]
    },
    handleClick() {
        const animator = this.$refs.animator; // Obtain the DOM element whose ref attribute is animator.
        const state = animator.getState();
        console.log(state);
        if (state === 'paused') {
            animator.resume();
        } else if (state === 'stopped') {
            animator.start();
        } else {
            animator.pause();
        }
    },
    showCompass() {
        router.push({
            uri: 'pages/compass/compass'
        })
    },
    touchMove(e) {  // Handle the swipe event.

        if(e.direction == "right")  // Swipe right to exit.
        {
            router.replace({
                uri: 'pages/sensors/sensors'
            })
        }
    }
}