{

  let view = {
    el: '.newSong',
    template:`
    新建歌曲
    `,
    render(data){
      $(this.el).html(this.template)
    },
    addActive(){
      $(this.el).addClass('active')
    },
    clearActive(){
      $(this.el).removeClass('active')
    },
  }

  let model = {}
  let controller = {
    init(view, model){
      this.view = view
      this.model = model
      this.view.render(this.model.data)
      this.view.addActive()
      this.bindEvents()

      window.eventHub.on('new', ()=>{
        this.view.addActive()
      })
      window.eventHub.on('select', (data)=>{
        console.log(data.id);
        this.view.clearActive()
      })
      // $(this.view.el).on('click', ()=>{this.view.addActive()})
    },
    bindEvents(){
        $(this.view.el).on('click', ()=>{
          window.eventHub.emit('new')
        })
    }
  }
  controller.init(view, model)
}
