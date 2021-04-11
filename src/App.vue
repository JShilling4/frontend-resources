<template>
	<TheNavbar class="navbar">
		<template #brand>
			<router-link to="/">
				<img
					src="https://webresources.ruoff.com/logo-horizontal-color-nmls/png/250/0"
					alt="logo"
					class="navbar__logo"
				/>
			</router-link>
		</template>

		<template #left>
			<h1 class="navbar__heading">Frontend Resources</h1>
		</template>

		<template #right>
			<router-link to="/brand" class="navbar__navItem">Brand</router-link>
			<router-link to="/components" class="navbar__navItem">Components</router-link>
			<router-link to="/tools" class="navbar__navItem">Tools</router-link>
			<router-link to="/links" class="navbar__navItem">Links</router-link>
		</template>
	</TheNavbar>

	<router-view class="view" />
</template>

<script>
import TheNavbar from "@/components/TheNavbar/TheNavbar.vue";

export default {
	components: {
		TheNavbar: TheNavbar,
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.view {
	padding: 4rem 4rem;
}

.navbar {
	&__logo {
		width: 100px;
	}
    &__heading {
        margin-left: 2rem;
        font-size: 20px;
    }
	&__navItem {
		padding: 0 0 0 2rem;
	}
}
</style>
