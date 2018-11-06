<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 lg6>
        <v-card>
          <v-card-title>
            <h2>Preferences</h2>
          </v-card-title>

          <v-card-text>
            <v-btn>
              <v-icon left>fa-user</v-icon>
              Login
            </v-btn>
            <v-btn>
              <v-icon left>fa-user</v-icon>
              Register
            </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Profile',
}
</script>
