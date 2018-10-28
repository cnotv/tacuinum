<template>
  <main>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <v-card color="primary">
            <v-card-title class="headline font-weight-regular blue-grey white--text">
              <v-icon class="white--text px-4">fa-heartbeat</v-icon>Cases
            </v-card-title>

            <v-card-text class="px-0">
              <img src="" height="300" width="100%" class="placeholder" alt="Graph number/time">
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
          <v-card color="primary">
            <v-card-title class="headline font-weight-regular blue-grey white--text">
              <v-icon class="white--text px-4">fa-pills</v-icon>Farms
            </v-card-title>

            <v-card-text class="px-0">
              <img src="" height="300" width="100%" class="placeholder" alt="Graph number/time">
              <p>Total farms: 20864</p>
            </v-card-text>

            <v-card-actions>
              <v-btn to="/farms">
                <v-icon left>fa-search</v-icon>
                Search for farm
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs12 lg6>
          <v-card color="primary">
            <v-card-title class="headline font-weight-regular blue-grey white--text">
              <v-icon class="white--text px-4">fa-bug</v-icon>Diseases
            </v-card-title>

            <v-card-text class="px-0">
              <img src="" height="300" width="100%" class="placeholder" alt="Graph number/time">
              <p>21603 diseases diagnosticated</p>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 lg6>
          <v-card color="primary">
            <v-card-title class="headline font-weight-regular blue-grey white--text">
              <v-icon class="white--text px-4">fa-user-md</v-icon>Symptoms
            </v-card-title>

            <v-card-text class="px-0">
              <img src="" height="300" width="100%" class="placeholder" alt="Graph number/time">
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
