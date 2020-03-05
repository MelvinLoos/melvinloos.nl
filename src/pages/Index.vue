<template>
  <Layout>
    <g-image class="greet-image" src="../../uploads/me.png" alt="Melvin Loos Bitmoji"> </g-image>
    <div class="row">
      <div class="col-sm">
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
      </div>
      <div class="col-sm">
        <h2>Latest blog posts</h2>
        <ul>
          <li v-for="edge in $page.posts.edges" :key="edge.node.id">
            <a :href="edge.node.path">{{ edge.node.title }}</a>
          </li>
        </ul>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Welcome to MelvinLoos.nl'
  }
}
</script>

<style>
.greet-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
