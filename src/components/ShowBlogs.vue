<template>
  <div id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in file" class="single-blog">
      <router-link v-bind:to="'/showblogs/'+ blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>
        {{blog.content | snippet}}
      </article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'show-blogs',
    data(){
      return{
        blogs:[],
        search:"",
      }
    },
    created() {
      //vue-resource方法
     /* this.$http.get('https://wd5847396083nhawzb.wilddogio.com/posts.json')
        .then(function(data){
          //this.blogs = data.body.slice(0,15);
          return data.json()
         // console.log(data.json());
        })
        .then(function (data) {
          var blogArray = [];
          for (let key in data){
            data[key].id=key;
            blogArray.push(data[key]);
          }
          this.blogs = blogArray;
        })*/

      //axios方法
      axios.get('/posts.json')
        .then((data) =>{
          //this.blogs = data.body.slice(0,15);
          return data.data;
          // console.log(data.json());
        })
        .then((data) =>{
          var blogArray = [];
          for (let key in data){
            data[key].id=key;
            blogArray.push(data[key]);
          }
          this.blogs = blogArray;
        })
    },
    computed:{
      file:function () {
        return this.blogs.filter((blog) =>{
          return blog.title.match(this.search);
        })
      }
    }

  }
</script>

<style>

  #show-blogs{
    width: 75%;
    margin: 0 auto;
    background: #0c7cb5;
  }

  .single-blog{
    background: #eee;
    width: 98%;
    padding: 20px;
    margin: 20px auto;
    box-sizing: border-box;
  }

  h1{
    text-align: center;
  }

  input{
    width: 30%;
    height: 5%;
    padding: 5px ;
    margin: 0px 35%;
  }
</style>
