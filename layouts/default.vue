<template>
  <v-app>
    <v-app-bar app flat class="d-print-none">
      <v-container class="py-0 fill-height">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="d-sm-flex d-md-none"
        ></v-app-bar-nav-icon>
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

        <v-btn
          v-for="(link, i) in links"
          :key="i"
          plain
          nuxt
          :to="link.url"
          class="d-none d-md-flex"
        >
          {{ link.name }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer absolute app class="text-body-2 d-print-none">
      <span>&reg; M.N. Sadik</span>
      <v-spacer></v-spacer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Assignment",
          url: "/assignment",
        },
        {
          name: "Lab Report",
          url: "/lab-report",
        },
      ],
    };
  },
};
</script>
