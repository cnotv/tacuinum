<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 lg6>
        <v-card>
          <v-card-title>
            <h2>Declared sympthoms</h2>
          </v-card-title>

          <v-card-text>
            <v-list>
              <template v-for="(item, i) in sympthoms">
                <v-list-tile :key="i">
                  <v-list-tile-content>{{ item.name }}</v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card-text>

          <v-card-title>
            <h2>Followed therapies</h2>
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

          <v-card-title>
            <h2>Prescribed drugs</h2>
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

          <v-card-actions>
            <v-btn color="primary">
              <v-icon left>fa-file-pdf</v-icon>
              Generate PDF
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Cases',
  data() {
    return {
      therapies: [
        { name: 'Theraphy 1' },
      ],
      drugs: [
        { name: 'Drug 1' },
        { name: 'Drug 2' },
        { name: 'Drug 3' },
      ],
      sympthoms: [
        { name: 'Sympthom 1' },
        { name: 'Sympthom 3' },
      ]
    }
  }
}
</script>
