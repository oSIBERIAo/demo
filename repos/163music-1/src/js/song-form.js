{
  let view = {
    el: '.page > main',
    init(){
      this.$el = $(this.el)
    },
    template:`
    <h1>新建歌曲</h1>
    <form class="form">
      <div class="row">
        <label>
          歌名
        </label>
        <input name="name" type="text" value="__name__">
      </div>
      <div class="row">
        <label>
          歌手
        </label>
        <input name="singer"  type="text" value="__singer__">
      </div>
      <div class="row">
        <label>
          外链
        </label>
        <input name="url" type="text" value="__url__">
      </div>
      <div class="row actions">
        <button type="submit">保存</button>
      </div>
    </form>
    `,
    render(data = {}){
      let placeholders = ['name', 'url', 'singer', 'id']
      let html = this.template
      placeholders.map((string)=>{
        html = html.replace(`__${string}__`, data[string] || '')
      })
      $(this.el).html(html)
    },
    reset(){
      this.render({})
    },
  }
  let model = {
    data: {
      name:'',
      singer: '',
      url: '',
      id: '',
    },
    create(data){
      var Song = AV.Object.extend('Song');
      // 新建对象
      var song = new Song();
      // 设置名称
      song.set('name', data.name);
      song.set('singer', data.singer);
      song.set('url', data.url);
      // 设置优先级
      // song.set('priority',1);
      return song.save().then( (newSong)=>{
        let {id, attributes} = newSong
        // console.log('newSong', newSong);
        // console.log('this.data!!!', this.data);
        // this.data = {id, ...attributes}
        Object.assign(this.data, {id, ...attributes})
      }, function (error) {
        console.error(error);
      });
    },
  }
  let controller = {
    init(view, model){
      this.view = view
      this.view.init()
      this.model = model
      this.view.render(this.model.data)
      this.bindEvents()
      window.eventHub.on('upload', (data)=>{
        console.log('song-from模块得到了data', data);
        this,model.data = data
        this.view.render(data)
      })
      window.eventHub.on('select', (data)=>{
        console.log('song-from模块得到了data', data);
        this.model.data = data
        this.view.render(this.model.data)
      })
    },
    bindEvents(){
      this.view.$el.on('submit', 'form', (e)=>{
        e.preventDefault()
        let needs = 'name singer url'.split(' ')
        let data = {}
        needs.map((string)=>{
          data[string] = this.view.$el.find(`[name="${string}"]`).val()
        })
        this.model.create(data)
          .then(()=>{
            console.log('this.model.data', this.model.data);
            this.view.reset()
            let string = JSON.stringify(this.model.data)
            let object = JSON.parse(string)
            console.log('object', object);
            window.eventHub.emit('create', object)
          })
      })
    }
  }
  controller.init(view, model)
}
