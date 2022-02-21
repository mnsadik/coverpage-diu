<template>
  <v-app>
    <Navbar />
    <v-main>
      <client-only>
        <v-container>
          <Nuxt />
        </v-container>
      </client-only>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {};
</script>
