<template>
  <Layout>
    <h1 class="mb-4">About</h1>
    <img class="about-image" src="../../uploads/profile.svg" />

    <h2 class="mb-4">Welcome cyberspace traveler!</h2>
    <p>
      This little corner of the internet is my little place to show you all about me. Don't be a stranger, grab a chair and let's get acquainted!
    </p>
    <p>
      My name is Melvin Loos and I live in Rotterdam The Netherlands. 
      I work as a part-time fullstack developer for a hosting company and for the other part do all kinds of freelance/entrepreneural projects.
    </p>
    <p>
      I am a big time fan, advocate and occasional contributor to the Open Source community.
      So you might see me participate on OS things on the internet at places like Github or Stackoverflow or maybe even in reallife 😉.
    </p>
    <p>
      Occasionaly I find the need to write my thoughts down so you can find that here as well on <a href="/blog">my blog</a>.
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

<style lang="scss" scoped>
.about-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
