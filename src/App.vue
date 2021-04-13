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
			<router-link to="/conventions" class="navbar__navItem">Conventions</router-link>
		</template>
	</TheNavbar>

	<router-view class="view" />
</template>

<script>
import TheNavbar from "@/components/TheNavbar/TheNavbar.vue";

export default {
	components: {
		TheNavbar,
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
	padding: 0 4rem;
}

.navbar {
	&__logo {
		width: 150px;
	}
    &__heading {
        margin-left: 2rem;
        font-size: 20px;
        font-weight: normal;
    }
	&__navItem {
		padding: 0 0 0 2.5rem;
        text-decoration: none;
        color: $gray-link;
        transition: color .3s;

        &:hover {
            color: $orange;
        }
	}
}

.page-heading {
    margin-bottom: 4rem;
    text-align: center;
}

.section-heading {
    color: $blue-green;
}
</style>
