<template>
  <footer class="page-footer font-small teal py-4">
    <div class="footer-copyright text-center">
      <!-- <a target="_blank" rel="noopener" href="https://melvinloos.nl"> Melvin Loos</a> {{ year }} -->
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  width: 100%;
  margin-top: 6rem;
  background-color: #f5f5f5;
}
</style>

<script>
export default {
  computed: {
    year: function () {
      return (new Date()).getFullYear()
    }
  }
}
</script>