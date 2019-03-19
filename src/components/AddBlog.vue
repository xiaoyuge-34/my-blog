<template>
  <div id="add-blog">

    <!--编写-->
    <div id="redact">
      <h2>添加博客</h2>
      <form v-if="!submmited">
        <label>博客标题</label>
        <input type="text" v-model="blog.title">

        <label>博客内容</label>
        <textarea v-model="blog.content"></textarea>

        <div id="checkboxes">
          <label>js</label>
          <input type="checkbox" value="js" v-model="blog.categories">
          <label>Vue.js</label>
          <input type="checkbox" value="Vue.js" v-model="blog.categories">
          <label>node.js</label>
          <input type="checkbox" value="node.js" v-model="blog.categories">
          <label>React.js</label>
          <input type="checkbox" value="React.js" v-model="blog.categories">
          <label>Angular</label>
          <input type="checkbox" value="Angular" v-model="blog.categories">
        </div>

        <label>作者</label>
        <input type="text" v-model="blog.name">

        <button v-on:click.prevent="post">添加博客</button>
      </form>
      <div v-if="submmited" class="hint">添加博客成功！！！</div>
    </div>



    <!--展示-->
    <div id="preview">
      <h2>博客总览</h2>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容:</p>
      <textarea class="details">{{blog.content}}</textarea>
      <p>博客分类：</p>
      <ul>
        <li v-for="category in blog.categories" class="classify">{{category}}</li>
      </ul>
      <P>作者：{{blog.name}}</P>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'add-blog',
    data () {
      return{
        blog:{
          title:"",
          content:"",
          categories:[],
          name:"",
        },
        submmited:false,
      }
    },
    methods:{
      //vue-resource方法
      /*post:function () {
        this.$http.post("https://wd5847396083nhawzb.wilddogio.com/posts.json",this.blog)
          .then(function(data){
            console.log(data);
            this.submmited = true;
          })
      }*/
      //axios方法
      post:function () {
        axios.post("/posts.json",this.blog)
          .then((data) =>{
            //console.log(data);
            this.submmited = true;
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #add-blog *{
    box-sizing: border-box;

  }

  #add-blog{
    /*display: flex;*/

    margin: 0px auto;
    /*margin: 0;
    padding: 0;*/
    /*max-width: 1200px;*/
    width: 80%;
    height: 100%;
    /*border: 1px solid #999999;*/

  }

/*添加博客*/
  #redact{
    border: 1px solid #999999;
    margin: 10px auto;
    /*padding: 0px;*/
    height: 100%;
    width: 50%;
    margin-left: 0;
    float: left;
    /*position: absolute;*/
    /*text-align: center;*/
  }

  #preview{
    border: 1px solid #999999;
    margin: 10px auto;
/*    margin: 0px;
    padding: 0px;*/
    height: 100%;
    width: 50%;
    float: right;
    /*display: flex;*/
    /*margin-left: 50%;*/
    /*position: fixed;*/
  }

  h2{
    text-align: center;
  }

  label{
    display: block;
    margin: 20px 0 10px;
  }

  input[type="text"],textarea{
    display: block;
    width: 100%;
    padding: 8px;
  }

  textarea{
    height: 300px;
  }

  #checkboxes label{
    display: inline-block;
    margin: 3px 0px;
    margin-left: 10px;
  }

  #checkboxes input{
    display: inline-block;
    margin-left: 6px;
  }

  button{
    color: #F9F9F9;
    background: #761c19;
    display: block;
    padding: 15px;
    margin: 20px 0;
    margin-right: 20px;
    border-radius: 5px;
    border: 0;
    font-size: 18px;
    cursor: pointer;
  }

  .hint{
    font-size: 15px;
    text-align: center;
  }

  /*博客总览*/
P{
  margin-top:57px;
}
  .details{
    margin: 0;
  }

  .classify{
    display: inline-block;
    list-style: none;
    margin-left: 20px;
  }
</style>
