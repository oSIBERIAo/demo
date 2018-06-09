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
      window.eventHub.on('upload', ()=>{
        this.view.addActive()
      })
      window.eventHub.on('select', (data)=>{
        console.log(data.id);
        this.view.clearActive()
      })
    }
  }
  controller.init(view, model)
}
