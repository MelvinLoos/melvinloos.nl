<template>
  <Layout>
    <div class="row">
      <div class="col-sm"><g-image class="img-fluid" src="../../uploads/me.png" alt="Melvin Loos Bitmoji"> </g-image></div>
      <div class="col-sm">
        <div class="LI-profile-badge text-center" data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="melvinloos">
          <a class="LI-simple-link" href='https://nl.linkedin.com/in/melvinloos?trk=profile-badge'>Melvin Loos</a>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-sm-8">
        <h1>All about Melvin Loos</h1>
        <blockquote class="blockquote">
          <p class="mb-0">I am Melvin, a fullstack developer from Rotterdam the Netherlands. Learn a bit about me and give me a shout out through my contact form or join the discussion in one of my blog posts!</p>
        </blockquote>
      </div>
      <div class="col-sm-4">
        <h2>Latest blog posts</h2>
        <ul v-if="$page">
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
    title: 'Full stack developer: Melvin Loos'
  },
  mounted() {
    let linkedInScript = document.createElement('script')
    linkedInScript.setAttribute('src', 'https://platform.linkedin.com/badges/js/profile.js')
    linkedInScript.async = true
    linkedInScript.defer = true
    document.head.appendChild(linkedInScript)
  }
}
</script>

<style>
.LI-badge-container
{
  text-align: left;
}
</style>
