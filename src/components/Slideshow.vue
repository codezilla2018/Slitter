<template>
  <div>
  <div class="container">
    <div class="row" style="margin-top: 60px">
      <div class="col-md-4 offset-md-4">
        <p>Your Hashtag is {{hashtag}}</p>
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
import Vue from 'vue'
export default {
  name: 'Slideshow',
data () {
    return {
      hashtag : Vue.localStorage.get('hashtag', 'fallbackValue')
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
