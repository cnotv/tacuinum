<template>
  <v-toolbar color="primary white--text">
		<v-avatar
			size="36px"
		>
			<v-btn to="/profile" icon>
				<v-icon
				class="white--text"
				>fa-user</v-icon>
			</v-btn>
		</v-avatar>
    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

		<v-btn to="/" icon>
			<v-icon class="white--text">fa-chart-line</v-icon>
		</v-btn>

		<v-btn to="/drugs" icon>
			<v-icon class="white--text">fa-pills</v-icon>
		</v-btn>

		<v-btn to="/diseases" icon>
			<v-icon class="white--text">fa-bug</v-icon>
		</v-btn>

		<v-btn to="/symptoms" icon>
			<v-icon class="white--text">fa-user-md</v-icon>
		</v-btn>

		<v-btn to="/cases" icon>
			<v-icon class="white--text">fa-heartbeat</v-icon>
		</v-btn>

		<v-btn to="/settings" icon>
			<v-icon class="white--text">fa-cog</v-icon>
		</v-btn>
  </v-toolbar>
</template>
