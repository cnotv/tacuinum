<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 lg6>
        <v-card color="primary">
          <h2>Declared sympthoms</h2>
          <h2>Followed therapies</h2>
          <h2>Prescribed drugs</h2>
          <v-btn to="/cases">
            <v-icon left>fa-file-pdf</v-icon>
            Generate PDF
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Cases',
}
</script>
