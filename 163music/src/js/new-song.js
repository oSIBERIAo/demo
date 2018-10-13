{
    let view = {
        el: '.newSong',
        template: `新建歌曲`,
        render(){
            $(this.el).html(this.template)
        }
    }
    let model = {}
    let controller = {
        init(view, model){
            this.view = view
            this.model = model
            this.view.render()
            this.bindEvents()
            window.eventHub.on('newSong', (data)=>{
                this.active()
            })
            window.eventHub.on('songList', (data) => {
                this.deactive()
            })
            window.eventHub.on('updata', (data) => {
                this.deactive()
                console.log('12345678ifdsaqwe4567u8ikjvcderty');
                
            })
        },
        bindEvents() {
            $(this.view.el).on('click', (e) => {
                this.active()
                window.eventHub.emit('newSong', {})
            })
        },
        active(){
            $(this.view.el).addClass('active')
        },
        deactive() {
            $(this.view.el).removeClass('active')
        },
    }
    controller.init(view, model)
}