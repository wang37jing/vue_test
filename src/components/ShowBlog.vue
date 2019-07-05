<template>
  <div v-theme:colum="'column'" id="show-blogs">
    <h1>博客总览</h1>
    <input placeholder="搜索" type="text" v-model="search"/>

    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'show-blogs',
    data() {
      return {
        blogs: [],
        search:"",
      }
    },
    created() {
      this.$http.get('./../static/posts.json')
        .then(function (data) {
          this.blogs = data.body.slice(0, 10);
          console.log(this.blogs);
        })
    },
    computed:{
      filteredBlogs:function(){
        return this.blogs.filter((blog)=>{
          return blog.title.match(this.search);
        })
      }
    }
  }
</script>

<style>
  #show-blogs {
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }


</style>
