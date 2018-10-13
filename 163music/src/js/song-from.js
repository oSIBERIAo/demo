{
    let view = {
        el: '#form',
        template: `<div class="row">
                    <label for="name">歌名</label>
                    <input name="name" id="name" type="text" value="__name__">
                </div>
                <div class="row">
                    <label for="singer">歌手</label>
                    <input name="singer" id="singer" type="text" value="__singer__">
                </div>
                <div class="row">
                    <label for="url">外链</label>
                    <input name="url" id="url" type="text" value="__url__">                   
                </div>
                <div class="row">
                    <label for="cover">封面</label>
                    <input name="cover" id="cover" type="text" value="__cover__">
                </div>
                <div class="row">
                    <label for="lyrics">歌词</label>
                    <textarea name="lyrics" id="lyrics" cols="30" rows="10">__lyrics__</textarea>
                </div>
                <div class="row actions">
                    <button type="submit">保存</button>
                </div>`,
        render(data = {}) {
            let placeholders = ['name', 'singer', 'url', 'cover', 'lyrics']
            let html = this.template
            placeholders.map((string)=>{
                html = html.replace(`__${string}__`, data[string] || '')
            })
            $(this.el).html(html)
            if (data.objectId === undefined) {
                $(this.el).prepend('<h1>新建歌曲</h1>')
            } else {
                $(this.el).prepend('<h1>修改歌曲</h1>')
            }
        },
        reset() {
            this.render({})
        },
    }
    let model = {
        data: {
            name:'', singer:'', url:'', cover:'', lyrics:'',
        },
        updata(data){
            var todo = AV.Object.createWithoutData('Song', this.data.objectId);
            // 修改属性
            todo.set(data);
            // 保存到云端
            return todo.save()
             .then((response) => {
                 Object.assign(this.data, data)
                 console.log('updata', response);
                 window.eventHub.emit('updata', response)
                 return response
             })
        },
        create(data){
            var Song = AV.Object.extend('Song');
            // 新建对象
            var song = new Song();
            // 设置名称
            return song.save(data)
            .then((response) => {
                let {id, attributes} = response
                Object.assign(this.data, {
                    id, ...attributes
                })
                window.eventHub.emit('create', response)                         
            })    
        },
    }
    let controller = {
        init(view, model) {
            this.view = view
            this.model = model
            this.view.render(this.model.data)
            this.bindEvents()
            // window.eventHub.on('upload', (data) => {
            //     this.view.render(data)           
            // })
            window.eventHub.on('select', (data) => {
                this.model.data = data      
                this.view.render(data)      
            })
            window.eventHub.on('newSong', (data) => {              
                if (this.model.data.objectId){
                    this.model.data = {
                        name: '', singer: '', url: '', cover: '', lyrics: '',
                    }
                } else {
                    Object.assign(this.model.data, data)
                }
                this.view.render(this.model.data)
            })
        },
        reset(data){},
        create(){
            let needs = 'name singer url cover lyrics'.split(' ')
            let data = {}
            needs.map((string) => {
                data[string] = $(this.view.el).find(`[name="${string}"]`)[0].value
            })
            console.log('data', data);
            this.model.create(data)
                .then(() => {
                    //  console.log('22222222');
                    this.view.reset()
                    //  window.eventHub.emit('creat', this.model.data)                     
                })  
        },
        updata(){
            let needs = 'name singer url cover lyrics'.split(' ')
            let data = {}
            needs.map((string) => {
                data[string] = $(this.view.el).find(`[name="${string}"]`)[0].value
            })
            this.model.updata(data)
        },
        bindEvents(){
            $(this.view.el).on('submit', (e) => {
                e.preventDefault()
                if (this.model.data.objectId) {
                    console.log('编辑'); 
                    this.updata()    
                } else {
                    console.log('新建');  
                    this.create() 
                }      
            })
        },
    }
    controller.init(view, model)
}