<template>
  <v-layout row wrap>
    <v-flex xs12 lg12>
      <v-text-field
        v-model="search"
        append-icon="fa-search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      
      <v-data-table
        :headers="headers "
        :items="drugs"
        :search="search"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <router-link tag="tr" to="/drug">
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.actipri }}</td>
            <td>{{ props.item.type }}</td>
            <td>{{ props.item.format }}</td>
            <td>{{ props.item.equivalent }}</td>
            <td>{{ props.item.incompatibility }}</td>
          </router-link>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'drugs',
  data () {
    return {
      search: '',
      headers: [
        { text: 'Drugs', value: 'name' },
        { text: 'Principio Attivo', value: 'actipri' },
        { text: 'Types', value: 'type' },
        { text: 'Formats', value: 'format' },
        { text: 'Equivalents', value: 'equivalent' },
        { text: 'Incompatibilities', value: 'incompatibility' },
      ],
      drugs: [
        {
          value: false,
          name: 'Frozen Yogurt',
          actipri: 'Frozen Yogurt',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 159,
          incompatibility: 6.0,
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          actipri: 'Ice cream sandwich',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 237,
          incompatibility: 9.0,
        },
        {
          value: false,
          name: 'Eclair',
          actipri: 'Eclair',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 262,
          incompatibility: 16.0,
        },
        {
          value: false,
          name: 'Cupcake',
          actipri: 'Cupcake',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 305,
          incompatibility: 3.7,
        },
        {
          value: false,
          name: 'Gingerbread',
          actipri: 'Gingerbread',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 356,
          incompatibility: 16.0,
        },
        {
          value: false,
          name: 'Jelly bean',
          actipri: 'Jelly bean',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 375,
          incompatibility: 0.0,
        },
        {
          value: false,
          name: 'Lollipop',
          actipri: 'Lollipop',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 392,
          incompatibility: 0.2,
        },
        {
          value: false,
          name: 'Honeycomb',
          actipri: 'Honeycomb',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 408,
          incompatibility: 3.2,
        },
        {
          value: false,
          name: 'Donut',
          actipri: 'Donut',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 452,
          incompatibility: 25.0,
        },
        {
          value: false,
          name: 'KitKat',
          actipri: 'KitKat',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 518,
          incompatibility: 26.0,
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
