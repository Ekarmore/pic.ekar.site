export default {
    emits: ['isShowNav'],
    setup(props, ctx) {
    setTimeout(() => {
    ctx.emit('isShowNav')
    }, 1000);
    }
}