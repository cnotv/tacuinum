<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 lg6>
        <v-card color="primary">
          <h2>Feelings</h2>
          <h2>Amount</h2>
          <h2>Areas</h2>
          <h2>Duration</h2>
          <h2>Last time</h2>
          <h2>Related</h2>

          <v-divider/>
          <h2>Proposed therapies</h2>
          <v-btn to="/cases">
            <v-icon left>fa-play</v-icon>
            Start therapy
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Symptoms',
}
</script>
