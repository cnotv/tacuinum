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
    </v-flex>
    <v-flex xs12 lg12>
      <v-data-table
        :headers="headers "
        :items="drugs"
        :search="search"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.type }}</td>
          <td>{{ props.item.format }}</td>
          <td>{{ props.item.equivalent }}</td>
          <td>{{ props.item.incompatibility }}</td>
          <td>{{ props.item.disease }}</td>
          <td>{{ props.item.case }}</td>
          <td>
            <v-btn to="/drug" icon>
              <v-icon>fa-edit</v-icon>
            </v-btn>
          </td>
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
        { text: 'Types', value: 'type' },
        { text: 'Formats', value: 'format' },
        { text: 'Equivalents', value: 'equivalent' },
        { text: 'Incompatibilities', value: 'incompatibility' },
        { text: 'Diseases', value: 'disease' },
        { text: 'Cases', value: 'case' },
      ],
      drugs: [
        {
          value: false,
          name: 'Frozen Yogurt',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 159,
          incompatibility: 6.0,
          disease: 24,
          case: 4.0,
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 237,
          incompatibility: 9.0,
          disease: 37,
          case: 4.3,
        },
        {
          value: false,
          name: 'Eclair',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 262,
          incompatibility: 16.0,
          disease: 23,
          case: 6.0,
        },
        {
          value: false,
          name: 'Cupcake',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 305,
          incompatibility: 3.7,
          disease: 67,
          case: 4.3,
        },
        {
          value: false,
          name: 'Gingerbread',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 356,
          incompatibility: 16.0,
          disease: 49,
          case: 3.9,
        },
        {
          value: false,
          name: 'Jelly bean',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 375,
          incompatibility: 0.0,
          disease: 94,
          case: 0.0,
        },
        {
          value: false,
          name: 'Lollipop',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 392,
          incompatibility: 0.2,
          disease: 98,
          case: 0,
        },
        {
          value: false,
          name: 'Honeycomb',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 408,
          incompatibility: 3.2,
          disease: 87,
          case: 6.5,
        },
        {
          value: false,
          name: 'Donut',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 452,
          incompatibility: 25.0,
          disease: 51,
          case: 4.9,
        },
        {
          value: false,
          name: 'KitKat',
          type: 'tablet',
          format: '1g, 10g',
          equivalent: 518,
          incompatibility: 26.0,
          disease: 65,
          case: 7,
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
