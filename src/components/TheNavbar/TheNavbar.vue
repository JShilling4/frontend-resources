<template>
	<nav class="navbar">
        <!-- Brand -->
		<div class="navbar__brand">
			<slot name="brand">
				<img src="@/assets/logo.png" alt="Logo" class="logo" />
			</slot>
		</div>

        <!-- Left side -->
		<div class="navbar__left">
			<slot name="left"></slot>
		</div>

        <!-- Right side -->
		<div class="navbar__right">
			<slot name="right">
				<a href="/" class="navItem">Link1</a>
				<a href="/" class="navItem">Link2</a>
				<a href="/" class="navItem">Link3</a>
			</slot>
		</div>
	</nav>
</template>

<script>
export default {
	name: "TheNavbar",

	props: {
		logoUrl: {
			type: String,
			default: "@/assets/logo.png",
		},
		logoAlt: {
			type: String,
			default: "Logo",
		},
		links: {
			type: Array,
		},
	},
};
</script>

<style lang="scss" scoped>
.navbar {
	display: flex;
	align-items: center;
	padding: 1rem 4rem;
    
	&__brand {
		.logo {
			width: 100px;
		}
	}

	&__right {
		margin-left: auto;
		.navItem {
			padding: 0 0 0 2rem;
		}
	}
}
</style>
