<template>
  <main>
    <v-container grid-list-xl text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <v-card>
            <v-card-title class="headline font-weight-regular primary white--text">
              <v-icon class="white--text px-4">fa-heartbeat</v-icon>Cases
            </v-card-title>

            <img src="" height="300" width="100%" class="placeholder" alt="Graph number/time">

            <v-card-text class="px-0">
              <p>Total cases: 12124</p>
              <p>Followed therapies: 123</p>
            </v-card-text>

            <v-card-actions>
              <v-btn to="/cases">
                <v-icon left>fa-plus</v-icon>
                New case
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs12 lg6>
          <v-card>
            <v-card-title class="headline font-weight-regular primary white--text">
              <v-icon class="white--text px-4">fa-pills</v-icon>Drugs
            </v-card-title>

            <img src="" height="300" width="100%" class="placeholder" alt="Graph number/time">

            <v-card-text class="px-0">
              <p>Total drugs: 20864</p>
            </v-card-text>

            <v-card-actions>
              <v-btn to="/drugs">
                <v-icon left>fa-search</v-icon>
                Search for drug
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs12 lg6>
          <v-card>
            <v-card-title class="headline font-weight-regular primary white--text">
              <v-icon class="white--text px-4">fa-bug</v-icon>Diseases
            </v-card-title>

            <img src="" height="300" width="100%" class="placeholder" alt="Graph number/time">

            <v-card-text class="px-0">
              <p>21603 diseases diagnosticated</p>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 lg6>
          <v-card>
            <v-card-title class="headline font-weight-regular primary white--text">
              <v-icon class="white--text px-4">fa-user-md</v-icon>Symptoms
            </v-card-title>

            <img src="" height="300" width="100%" class="placeholder" alt="Graph number/time">

            <v-card-text class="px-0">
            </v-card-text>

            <v-card-actions>
              <v-btn to="/symptoms">
                <v-icon left>fa-plus</v-icon>
                Guided diagnosys
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </main>
</template>

<script>
export default {
  name: 'home',
}
</script>
