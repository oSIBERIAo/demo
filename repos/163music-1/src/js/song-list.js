{
  // console.log('songList');
  let view = {
    el: '#songList-container',
    template: `
      <ul class="songList">
      </ul>
    `,
    render(data){
      let $el = $(this.el)
      $el.html(this.template)
      let {songs} = data
      // console.log({songs})
      let liList = songs.map((song)=>
        $('<li></li>').text(song.name)
        .attr('data-song-id', song.id)
      )
      // console.log({liList})
      $el.find('ul').empty()
      liList.map((domLi)=>{
       $el.find('ul').append(domLi)
     })
      // $(this.el).html(this.template)
    },
    activeItem(li){
      let $li = $(li)
      $li.addClass('active')
        .siblings('.active').removeClass('active')
    },
    clearActive(){
      $(this.el).find('.active').removeClass('active')
    },
  }
  let model = {
    data: {
      songs: []
    },
    find(){
      var query = new AV.Query('Song');
      return query.find().then((songs)=> {
        this.data.songs = songs.map((song)=>{
          return {id: song.id, ...song.attributes}
          // console.log('this.data.songs', this.data.songs);
        })
        return songs
      }, function (error) {})
      // var query = new AV.Query('Song');
      // query.find().then((results)=> {
      //   console.log('results', results);
      //   let SongsAll = []
      //   for (var i = 0; i < results.length; i++) {
      //     SongsAll.push(results[i].attributes)
      //   }
      //   console.log('SongsAll', SongsAll);
      // }, function (error) {})
    }
  }

  let controller = {
    init(view, model){
      this.view = view
      this.model = model
      this.view.render(this.model.data)
      this.bindEvents()
      this.bindEventsHub()
      this.getAllSongs()
    },
    getAllSongs(){
      return this.model.find().then(()=>{
        // console.log('this.model.data', this.model.data);
        this.view.render(this.model.data)
      })
    },
    bindEvents(){
      $(this.view.el).on('click', 'li', (e)=>{
         this.view.activeItem(e.currentTarget)
         let songId = e.currentTarget.getAttribute('data-song-id')
         let data
         let songs = this.model.data.songs
         for (var i = 0; i < songs.length; i++) {
           if (songs[i].id === songId) {
             data = songs[i]
             break
           }
         }
         //深拷贝
         let object = JSON.parse(JSON.stringify(data))
         window.eventHub.emit('select', object)
      })
    },
    bindEventsHub(){
      window.eventHub.on('new', ()=>{
        this.view.clearActive()
      })
      window.eventHub.on('create', (songData)=>{
        // console.log('songData', songData);
        // console.log('this.model.data', this.model.data);
        // console.log('this.model', this.model);
        this.model.data.songs.push(songData)
        this.view.render(this.model.data)
      })
    }

  }
  controller.init(view, model)
}
