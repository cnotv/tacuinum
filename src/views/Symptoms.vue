<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 lg8>
        <v-card>
          <v-card-title>
            <h2>Symptoms</h2>
          </v-card-title>

          <v-card-text>
            <p>Feelings</p>
            <p>Amount</p>
            <p>Areas</p>
            <p>Duration</p>
            <p>Last time</p>
            <p>Related</p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 lg4>
        <v-card>
          <v-card-title>
            <h2>Proposed therapies</h2>
          </v-card-title>

          <v-card-text>
            <v-checkbox
              v-for="(therapy, i) in therapies"
              :key="i"
              :label="therapy.name"
              required
            ></v-checkbox>
          </v-card-text>

          <v-btn color="secondary">
            <v-icon left>fa-plus</v-icon>
            Add therapy
          </v-btn>

          <v-btn to="/cases" color="primary">
            <v-icon left>fa-heartbeat</v-icon>
            Create new case
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Symptoms',
  data() {
    return {
      therapies: [
        { name: 'Theraphy 1' },
        { name: 'Theraphy 2' },
        { name: 'Theraphy 3' },
        { name: 'Theraphy 4' },
        { name: 'Theraphy 5' },
      ]
    }
  }
}
</script>
