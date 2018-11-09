<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 lg6>
        <v-card>
          <v-card-title>
            <h2>Preferences</h2>
          </v-card-title>

          <v-card-text>
            <v-select
              :items="languages"
              v-model="current_lang"
              item-text="name"
              item-value="value"
              label="Selected language"
            ></v-select>

            <v-checkbox
              v-model="features"
              label="Display all the features?"
              required
            ></v-checkbox>

            <v-btn color="error">
              <v-icon left>fa-file</v-icon>
              Reset local data
            </v-btn>
          </v-card-text>
            
          <v-card-title>
            <h3>Database</h3>
          </v-card-title>

          <v-card-text>
            <v-btn color="secondary">
              <v-icon left>fa-server</v-icon>
              Connect to server
            </v-btn>
            
            <v-btn color="secondary">
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
      features: false,
      languages: [
        { name: 'Italian', value: 'it' },
        { name: 'English', value: 'en' } 
      ],
      current_lang: 'it'
    }
  }
}
</script>
