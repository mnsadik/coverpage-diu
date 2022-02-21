<template>
  <div>
    <v-app-bar app flat class="d-print-none">
      <v-container class="py-0 fill-height">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="d-sm-flex d-md-none"
        ></v-app-bar-nav-icon>
        <v-avatar class="mr-10" size="40"
          ><img src="/icon.png" alt="DIU Icon"
        /></v-avatar>
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

        <v-btn
          color="#7289DA"
          class="white--text"
          href="https://discord.gg/wes7CZ2zVw"
          target="_blank"
          rel="noopener noreferrer"
          rounded
          depressed
        >
          <v-icon left>mdi-discord</v-icon>
          Join With Us
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="d-sm-flex d-md-none"
    >
      <v-list-item>
        <v-list-item-avatar size="40">
          <img src="/icon.png" alt="DIU Icon" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>DIU Cover Page</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense class="pa-0">
        <v-list-item v-for="(item, i) in links" :key="i" nuxt :to="item.url">
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
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
