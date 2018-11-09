<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 lg8>
        <v-card>
          <v-card-title>
            <h2>Name</h2>
          </v-card-title>

          <img src="" height="200" width="100%" class="placeholder" alt="Drug name">

          <v-card-title>
            <h3>Description</h3>
          </v-card-title>

          <v-card-text>
            <p>Lorem ipsum</p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 lg4>
        <v-card>
          <v-card-title>
            <h3>Equivalent</h3>
          </v-card-title>

          <v-card-text>
          </v-card-text>

          <v-card-title>
            <h3>Incompatibility</h3>
            <v-autocomplete
              v-model="incompatibility"
              :items="drugs"
              item-text="name"
              item-value="value"
              clearable
              :label="`Search for a drug`"
              persistent-hint
              prepend-icon="fa-pills"
            />
          </v-card-title>

          <v-card-text>
          </v-card-text>

          <v-card-title>
            <h3>Diseases</h3>
          </v-card-title>

          <v-card-text>
          </v-card-text>

          <v-card-title>
            <h3>Usage cases</h3>
          </v-card-title>

          <v-card-text>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'drug',
  data () {
    return {
      incompatibility: '',
      drugs: [
        {
          value: false,
          name: 'Frozen Yogurt',
        },
        {
          value: false,
          name: 'Ice cream sandwich',
        },
        {
          value: false,
          name: 'Eclair',
        },
        {
          value: false,
          name: 'Cupcake',
        },
        {
          value: false,
          name: 'Gingerbread',
        },
        {
          value: false,
          name: 'Jelly bean',
        },
        {
          value: false,
          name: 'Lollipop',
        },
        {
          value: false,
          name: 'Honeycomb',
        },
        {
          value: false,
          name: 'Donut',
        },
        {
          value: false,
          name: 'KitKat',
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
