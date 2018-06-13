{
  let view = {
    el: '#app',
    render(data){
      let {song, status} = data

      if ($(this.el).find('audio').attr('src') !== song.url) {
        // console.log("$(this.el).find('audio').attr('src')", $(this.el).find('audio').attr('src'));
        $(this.el).append(`<style>.page::after{
          background-image: url(${song.cover});
        }</style>`);
        // console.log('123123', $(this.el).find('audio').attr('src'));
        $(this.el).find('audio').attr('src', song.url)
      }
      $(this.el).find('img.cover').attr('src', song.cover)
      if (status === 'playing') {
        $(this.el).find('.disc-container').addClass('playing')
      } else {
        $(this.el).find('.disc-container').removeClass('playing')
      }
    },
    play(){
      $(this.el).find('audio')[0].play()
      console.log('播放');
    },
    pause(){
      $(this.el).find('audio')[0].pause()
      console.log('暂停');
    },
  }
  let model = {
    data: {
      song:{
        id: '',
        name: '',
        singer: '',
        url: '',
        cover: '',
      },
      status: 'paused',
    },
    get(id){
      var query = new AV.Query('Song');
       return query.get(id).then((song)=>{
         Object.assign(this.data.song, {id: song.id, ...song.attributes})
         return song
       }, function (error) {
         // 异常处理
         console.log('异常处理');
       });
    },
  }
  let controller = {
    init(view, model){
      this.view = view
      this.model = model
      let id = this.getSongId()

      this.model.get(id).then(()=>{
        this.view.render(this.model.data)
        // this.view.play()
      })
      this.bindEvents()
    },
    bindEvents(){
      $(this.view.el).on('click', '.icon-play', ()=>{
        this.model.data.status = 'playing'
        this.view.render(this.model.data)
        this.view.play()
      })
      $(this.view.el).on('click', '.icon-pause', ()=>{
        this.model.data.status = 'paused'
        this.view.render(this.model.data)
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
