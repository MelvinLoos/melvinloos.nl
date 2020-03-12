<template>
  <header class="header">
    <b-navbar class="p-0" toggleable="md">
        <b-navbar-brand>
        <g-link class="logo-home logo-desktop" to="/">{{ $static.metadata.siteName }}</g-link>
        <g-link class="logo-home logo–mobile" to="/"><img class="logo-image" alt="logo" src="../assets/images/logo.png"></g-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <li class="nav-item"><g-link class="nav-link px-2" to="/about">About</g-link></li>
          <li class="nav-item"><g-link class="nav-link px-2" to="/blog">Blog</g-link></li>
          <li class="nav-item"><g-link class="nav-link px-2" to="/contact">Contact</g-link></li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
nav {
  width: 100%;
  padding-top: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.logo-home {
  font-size: 24px;
  max-width: 75%;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }
}

.logo-desktop {
  @media(max-width: 419px) {
    display: none;
  }
  @media (min-width: 420px) {
    display: default;
  }
}

.logo–mobile {
  @media(max-width: 419px) {
    display: default;
  }
  @media (min-width: 420px) {
    display: none;
  }
}

.logo-image {
  width: 40px;
}

.active--exact {
  font-weight: bold;
}

.nav-item:hover{
  background-color: lightsteelblue;
}
</style>
