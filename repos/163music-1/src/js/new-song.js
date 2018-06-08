{
  let view = {
    el: '.newSong',
    template:`
    新建歌曲
    `,
    render(data){
      $(this.el).html(this.template)
    }
  }
  let model = {}
  let controller = {
    init(view, model){
      this.view = view
      this.model = model
      // console.log('this',this);
      // console.log('model',model);
      // console.log('this.model.data',this.model.data);
      this.view.render(this.model.data)
    }
  }
  controller.init(view, model)
}
