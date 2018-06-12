{
  let view = {
    el: '#app',
    template: `
     <audio controls src={{url}}></audio>
     <div>
       <button class="play">播放</button>
       <button class="pause">暂停</button>
     </div>
    `,
    render(data){
      $(this.el).html(this.template.replace('{{url}}', data.url))
    },
    play(){
      let audio = $(this.el).find('audio')[0]
      audio.play()
    },
    pause(){
      let audio = $(this.el).find('audio')[0]
      audio.pause()
    },
  }
  let model = {
    data: {
      id: '',
      name: '',
      singer: '',
      url: '',
    },
    setId(id){
      this.data.id = id
      console.log('id', id);
    },
    get(){
      var query = new AV.Query('Song');
      console.log('this.data.id', this.data.id);
       return query.get(this.data.id).then((song)=>{
         console.log('song', song);
         Object.assign(this.data, {id: song.id, ...song.attributes})
         return song
       }, function (error) {
         // 异常处理
       });
    },
  }
  let controller = {
    init(view, model){
      this.view = view
      this.model = model
      let id = this.getSongId()

      this.model.setId(id)
      this.model.get().then(()=>{
        console.log('this.model.data', this.model.data);
        this.view.render(this.model.data)
        // setTimeout(()=>{
        //   this.view.play()
        // },3000)
      })
      this.bindEvents()
    },
    bindEvents(){
      $(this.view.el).on('click', '.play', ()=>{
        this.view.play()
      })
      $(this.view.el).on('click', '.pause', ()=>{
        this.view.pause()
      })
    },
    getSongId(){
      let search = window.location.search
      if (search.indexOf('?') === 0) {
        search = search.substring(1)
      }
      let array = search.split('&').filter((v=>v)) // .filter((v)=>{return !!v})
      let id = ''

      for (var i = 0; i < array.length; i++) {
        let kv = array[i].split('=')
        let key = kv[0]
        let value = kv[1]
        if (key === 'id') {
          id = value
          break
        }
      }
      return id
    },
  }
  controller.init(view, model)
}
