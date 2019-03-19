<template>
  <div id="single-blog">
    <h2>{{blog.title}}</h2>
    <article>{{blog.content}}</article>
    <p>博客分类：</p>
    <ul>
      <li v-for="category in blog.categories">{{category}}</li>
    </ul>
    <P>作者：{{blog.name}}</P>
    <a @click="deletes()">删除</a>
    <router-link :to="/editBlog/ + id" >编辑</router-link>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name:"single-blog",
    data(){
      return{
        id:this.$route.params.id,
        blog: {

        }
      }
    },
    created() {
      //vue-resource方法
      /*this.$http.get('https://wd5847396083nhawzb.wilddogio.com/posts/'+ this.id + '.json')
        .then(function (data) {
          //this.blog = data.body;
          return data.json();
        })
        .then(function (data) {
          this.blog = data;
        })
    },
    methods:{
      deletes(){
        this.$http.delete('https://wd5847396083nhawzb.wilddogio.com/posts/'+ this.id + '.json')
        .then(respond =>{
          this.$router.push({path:'/showblogs'});
        })
      }*/
      //axios方法
      axios.get('/posts/'+ this.id + '.json')
        .then((data) =>{
          //this.blog = data.body;
          return data.data;
        })
        .then((data) => {
          this.blog = data;
        })
    },
    methods:{
      deletes(){
        axios.delete('/posts/'+ this.id + '.json')
          .then(respond =>{
            this.$router.push({path:'/showblogs'});
          })
      }

    }
  }
</script>

<style>
  #single-blog{
    max-width: 70%;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
  }

  li{
    display: inline-block;
    margin: 0 20px;
  }
  a{
    color: red;
    cursor: pointer;
  }
</style>
