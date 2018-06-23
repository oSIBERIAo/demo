Vue.component('resume',{
  props: ['mode', 'displayResume'],
  data() {
    return {

    }
  },
  methods: {
    addSkill(){
      this.resume.skills.push({name: '请填写技能名称', description: '请填写技能描述'})
    },
    removeSkill(index){
      this.resume.skills.splice(index, 1)
    },
    addProjects(index){
      this.resume.projects.push(  {name: '请填写技能名称', link: 'http://', keywords: '请填写关键字', description: '请详细描述'})
    },
    removeProjects(index){
      this.resume.projects.splice(index, 1)
    },
  },
  template:`
    <div class="resume">
      <!-- <p>{{currentUser}}</p> -->
      <!-- <p>{{resume}}</p> -->
      <section class="profile">
        <h1>
          <editable-span :disabled="mode === 'preview'" v-bind:value="displayResume.name" v-on:edit="onEdit('name', $event)"></editable-span :disabled="mode === 'preview'">
        </h1>
        <p class="profile">应聘职位 :
          <editable-span :disabled="mode === 'preview'" v-bind:value="displayResume.jobTitile" v-on:edit="onEdit('jobTitile', $event)"></editable-span :disabled="mode === 'preview'">
        </p>
        <p class="profile">
          <editable-span :disabled="mode === 'preview'" :value="displayResume.birthday" @edit="onEdit('birthday', $event)"></editable-span :disabled="mode === 'preview'"> |
          <editable-span :disabled="mode === 'preview'" :value="displayResume.gender" @edit="onEdit('gender', $event)"></editable-span :disabled="mode === 'preview'"> |
          <editable-span :disabled="mode === 'preview'" :value="displayResume.email" @edit="onEdit('email', $event)"></editable-span :disabled="mode === 'preview'"> |
          <editable-span :disabled="mode === 'preview'" :value="displayResume.phone" @edit="onEdit('phone', $event)"></editable-span :disabled="mode === 'preview'">
        </p>
      </section>
      <section class="skills">
        <ul>
          <li v-for="skill,index in displayResume.skills">
              <editable-span :disabled="mode === 'preview'" :value="skill.name" @edit="onEdit('skills['+index+'].name', $event)" class="name">{{skill.name}}</editable-span :disabled="mode === 'preview'">
              <div class="description">
                <editable-span :disabled="mode === 'preview'"  :value="skill.description" @edit="onEdit('skills['+index+'].description', $event)">{{skill.description}}</editable-span :disabled="mode === 'preview'">
              </div>
              <span class="remove" v-if="index>=4 && mode === 'edit'" @click="removeSkill(index)">X</span>
          </li>
          <li class="add" v-if="mode === 'edit'">
            <span  @click="addSkill">添加</span>
          </li>
        </ul>
      </section>
      <section class="profiles">
        <h2>项目经历</h2>
        <ol>
          <li v-for="project,index in displayResume.projects">
            <header>
              <div class="start">
                <h3 class="name">
                  <editable-span :disabled="mode === 'preview'" :value="project.name" @edit="onEdit('projects['+index+'].name', $event)"></editable-span :disabled="mode === 'preview'">
                </h3>
                <span class="link">
                  <editable-span :disabled="mode === 'preview'" :value="project.link" @edit="onEdit('projects['+index+'].link', $event)"></editable-span :disabled="mode === 'preview'">
                </span>
              </div>
              <div class="end">
                <span class="keywords">
                  <editable-span :disabled="mode === 'preview'" :value="project.keywords" @edit="onEdit('projects['+index+'].keywords', $event)"></editable-span :disabled="mode === 'preview'">
                </span>
              </div>
            </header>
            <p class="description">
              <editable-span :disabled="mode === 'preview'" :value="project.description" @edit="onEdit('projects['+index+'].description', $event)"></editable-span :disabled="mode === 'preview'">
            </p>
            <span class="remove" v-if="index>=1 && mode === 'edit'" @click="removeProjects(index)">X</span>
          </li>
          <li class="add" v-if="mode === 'edit'">
            <span @click="addProjects">添加</span>
          </li>
        </ol>
      </section>
    </div>
  `
})
