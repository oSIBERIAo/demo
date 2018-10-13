{
    let view = {
        el: '#songList-container',
        template: `<ul class="songList">
                    <li>111</li>
                    <li class="active">222</li>
                    <li>333</li>
                </ul>`,
        render(data){
            // console.log('data', data);
            $(this.el).find('.songList').text('')
            let {songs, selectSongId} = data
            songs.map((e) => { 
                let li = document.createElement("li");
                let newtext = document.createTextNode(e.attributes.name);
                li.appendChild(newtext);           
                $(li).attr('data-id', e.id)
                if (e.id === selectSongId) {
                    $(li).addClass('active').siblings('.active').removeClass('active')
                }
                $(this.el).find('.songList').append(li)                
            })       
        },
        // activeItem(item){
        //     item.addClass('active').siblings('.active').removeClass('active')
        // },
        clearActive(){
            $(this.el).find('.active').removeClass('active')
        }                
    }
    let model = {
        data: {
            songs:[],
            selectSongId: undefined,
        },
    }
    let controller = {
        init(view, model){
            this.view = view
            this.model = model
            this.fetchAll()
            this.bindEvents()
            window.eventHub.on('upload', (data) => {
                this.view.clearActive()
            })
            window.eventHub.on('create', (data) => {
                // console.log('creatData',data)
                this.model.data.songs.push(data)
                this.view.render(this.model.data)
                              
            })
            window.eventHub.on('newSong', (data) => {           
                this.view.clearActive()
            })
            window.eventHub.on('updata', (response) => {                
                let songs = this.model.data.songs
                for (let index = 0; index < songs.length; index++) {
                    if (songs[index].id === response.id) {
                        Object.assign(songs[index], response)
                        this.model.data.selectSongId = response.id
                        this.view.render(this.model.data)
                        break
                    }
                }
            })
        },
        fetchAll(){
            var song = new AV.Query('Song');
            song.find().then((songs) => {       
                this.model.data.songs = songs
                console.log('this.model.data.songs', this.model.data.songs);
                this.view.render(this.model.data)               
            }).then(function (songs) {
                // 更新成功
            }, function (error) {
                // 异常处理
            });
        },
        bindEvents(){
            $(this.view.el).find('.songList').on('click', 'li', (e) => {
                // let $li = $(e.currentTarget)
                let songId = e.currentTarget.getAttribute('data-id')
                // this.view.activeItem($li)
                this.model.data.selectSongId = songId
                this.view.render(this.model.data)    
                window.eventHub.emit('songList', {})
                let data 
                let songs = this.model.data.songs
                for (let index = 0; index < songs.length; index++) {
                    if (songId === songs[index].id) {
                        data = songs[index]
                        break      
                    }
                }
                let copy = JSON.parse(JSON.stringify(data))
                window.eventHub.emit('select', copy)
            })
        },
    }
    controller.init(view, model)
}