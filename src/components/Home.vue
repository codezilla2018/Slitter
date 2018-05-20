<template>
  <div>
  <div class="container">
    <div class="row" style="margin-top: 60px">
      <div class="col-md-4 offset-md-4">
        <div class="jumbotron">
          <h1 class="display-4">Slitter</h1>
          <p class="lead">Slitter allows you to generate a slideshow from any twitter Hashtag</p>
          <hr class="my-4">
          <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
              <label for="inputHashtag" class="sr-only">Password</label>

              <input type="text" class="form-control" id="inputHashtag" v-model="hashtag" placeholder="#hashtag" >
            </div>
            <router-link to="/slideshow"><button class="btn btn-primary mb-2"><i class="fa fa-paper-plane"></i></button></router-link>
           
          </form>
        </div>  
      </div>
    </div>

  </div>
<footer class="footer text-center">
      <div class="container">
        <span class="text-muted">Coded with <i class="fa fa-heart" style="color: #e15f5f"></i> by Harshana for Codezilla 2K18</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /* Set the fixed height of the footer here */
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}
</style>
