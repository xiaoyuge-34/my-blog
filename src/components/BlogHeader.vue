
<template>
  <nav>
    <ul>
      <li>
        <router-link to="/showblogs" exact>博客</router-link>
        <router-link to="/addblog" exact>写博客</router-link>
      </li>

    </ul>
  </nav>
</template>

<script>
  export default {
    name:"blog-header"
  }
</script>

<style>

  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  a{
    color: #F9F9F9;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
  }
  nav{
    background: #761c19;
    padding: 30px 0;
    margin-bottom: 40px;
  }

  .router-link-active{
    background: rgba(255,255,255,.7);
    color:#444;

  }
</style>

