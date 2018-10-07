<template>
  <v-toolbar color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

		<v-btn to="/" icon>
			<v-icon>fa-chart-line</v-icon>
		</v-btn>

		<v-btn to="/farms" icon>
			<v-icon>fa-pills</v-icon>
		</v-btn>

		<v-btn to="/diseases" icon>
			<v-icon>fa-bug</v-icon>
		</v-btn>

		<v-btn to="/symptoms" icon>
			<v-icon>fa-dizzy</v-icon>
		</v-btn>

		<v-btn to="/cases" icon>
			<v-icon>fa-heartbeat</v-icon>
		</v-btn>
  </v-toolbar>
</template>
