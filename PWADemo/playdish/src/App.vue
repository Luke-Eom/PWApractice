<template>
  <v-app>
    <v-app-bar app color="" dark fixed>
      <v-app-bar-nav-icon>
        <v-toolbar-title> Play Dish </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2" v-for="item in this.aPictures" :key=item.key>
            <v-card height="330px">
              <v-img :src="item.url" height="200px">
              </v-img>
              <v-card-title>
                <h1 class="title grey--text text--darken-3 mb-3">{{ item.title }}</h1>
                <p class="body-2 grey--text">{{ item.cat }}</p>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer fixed>
      <div class="mx-auto">All rights reserved to LE</div>
    </v-footer>
  </v-app>
  
</template>

<script>
import oRestaurantData from '@/datasources/restaurant-data'

export default {
  data() {
    return {
    'aPictures': oRestaurantData.aPictures
    }
  },
  name: 'App', 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
