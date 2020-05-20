<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item to="/" link>
          <v-list-item-action>
            <v-icon>mdi-android-messages</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Murojaatlar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/kompaniya" link>
          <v-list-item-action>
            <v-icon>mdi-briefcase-account-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Kompaniya Qo'shish</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <!-- <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-btn small fab @click.stop="drawer = !drawer"><v-icon>mdi-bullseye</v-icon></v-btn>
      <v-toolbar-title class="pl-1"> UMUMIY TIZIM</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="red darken-2" elevation="0">Chiqish</v-btn>
    </v-app-bar>

    <v-content>
      <v-container
      >
      <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy;Sayyora Rahimova 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>
