<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 lg6>
        <v-card color="primary">
          <v-card-title class="px-0">
            <h2>Name</h2>
          </v-card-title>

          <v-card-text class="px-0">
            <img src="" height="300" width="200" class="placeholder" alt="Drug name">
            <h3>Description</h3>
            <p>Lorem ipsum</p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 lg6>
        <v-card color="primary">
          <section>
            <h3>Equivalent</h3>
          </section>
          
          <section>
            <h3>Incompatibility</h3>
          </section>
          
          <section>
            <h3>Diseases</h3>
          </section>

          <section>
            <h3>Usage cases</h3>
          </section>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'drug'
}
</script>

<style scoped>
</style>
