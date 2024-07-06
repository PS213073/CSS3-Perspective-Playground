let vm = Vue.createApp({
    data() {
        return {
            prespective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        }
    },
    computed: {
        box() {
            return {
                transform: `perspective(${this.prespective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`
            }
        }
    },
    methods: {
        reset() {
            this.prespective = 100
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
            this.animateButton('reset-button');
        },
        async copy() {
            let text = `transform:${this.box.transform}`
            await navigator.clipboard.writeText(text)

            alert('CSS copied to clipboard')
            this.animateButton('copy-button')
        },
        animateButton(buttonId) {
            const button = document.getElementById(buttonId);
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 200);
        }
    },
}).mount('#app')