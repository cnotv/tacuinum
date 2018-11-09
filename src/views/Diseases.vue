<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 lg6>
        <v-card>
          <v-card-title>
            <h2>Available drugs</h2>
          </v-card-title>

          <v-card-text>
            <v-list>
              <template v-for="(item, i) in drugs">
                <v-list-tile :key="i">
                  <v-list-tile-content>{{ item.name }}</v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card-text>

          <v-card-title>
            <h2>Available terapies</h2>
          </v-card-title>

          <v-card-text>
            <v-list>
              <template v-for="(item, i) in therapies">
                <v-list-tile :key="i">
                  <v-list-tile-content>{{ item.name }}</v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Diseases',
  data() {
    return {
      therapies: [
        { name: 'Theraphy 1' },
      ],
      drugs: [
        { name: 'Drug 1' },
        { name: 'Drug 2' },
        { name: 'Drug 3' },
      ]
    }
  }
}
</script>
