<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 lg6>
        <v-card>
          <v-card-title>
            <h2>Displayed pages</h2>
          </v-card-title>

          <v-card-text>
            <v-checkbox
              v-model="features"
              label="Display all the features?"
              required
            ></v-checkbox>

            <v-btn to="">
              <v-icon left>fa-file</v-icon>
              Reset local data
            </v-btn>
          </v-card-text>
            
          <v-card-title>
            <h2>Database</h2>
          </v-card-title>

          <v-card-text>
            <v-btn to="">
              <v-icon left>fa-server</v-icon>
              Connect to server
            </v-btn>
            
            <v-btn to="">
              <v-icon left>fa-cloud</v-icon>
              Connect to cloud
            </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      features: false
    }
  }
}
</script>
