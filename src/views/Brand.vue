<template>
	<div class="brand">
		<h1 class="page-heading">Branding</h1>

		<section class="section colors">
			<h2 class="section-heading">
				Colors
			</h2>

			<div class="swatch-container">
				<ColorSwatch
					v-for="swatch in swatches"
					:key="swatch.id"
					:details="swatch"
					:selected="selectedSwatch.id == swatch.id"
					class="swatch"
					@click="selectedSwatch = swatch"
				/>
			</div>

			<div v-if="selectedSwatch.id" class="color-info">
				<ColorDetail :selected="selectedSwatch" />
			</div>
		</section>

		<section class="section logos">
			<h2 class="section-heading">Logos</h2>
			<div class="logo-container">
				<div class="logo">
					<img
						src="https://webresources.ruoff.com/logo-horizontal-color-nmls/png/250/0"
						alt=""
					/>
					<AppButton class="teal-outline">
						Copy URL
					</AppButton>
				</div>

				<div class="logo">
					<img
						src="https://webresources.ruoff.com/logo-horizontal-white-nmls/png/250/0"
						class="dark"
						alt=""
					/>
					<AppButton class="teal-outline">
						Copy URL
					</AppButton>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import ColorSwatch from "@/components/ColorSwatch/ColorSwatch.vue";
import ColorDetail from "@/components/ColorDetail/ColorDetail.vue";

export default {
	name: "Brand",

	components: {
		ColorSwatch,
		ColorDetail,
	},

	data() {
		return {
			swatches: [
				{
					id: 1,
					label: "teal",
					hex: "#16af8c",
					rgb: "rgb(22, 175, 140)",
				},
				{
					id: 2,
					label: "teal-dark",
					hex: "#108c73",
					rgb: "rgb(16, 140, 115)",
				},
				{
					id: 3,
					label: "orange",
					hex: "#f38e36",
					rgb: "rgb(243, 142, 54)",
				},
				{
					id: 4,
					label: "orange-contrast",
					hex: "#e7730d",
					rgb: "rgb(231, 115, 13)",
				},
				{
					id: 5,
					label: "blue-dark",
					hex: "#142f42",
					rgb: "rgb(20, 47, 66)",
				},
				{
					id: 6,
					label: "blue-green",
					hex: "#08485c",
					rgb: "rgb(8, 72, 92)",
				},
			],
			selectedSwatch: {},
		};
	},
};
</script>

<style lang="scss" scoped>
.brand {
	max-width: 1000px;
	margin: 0 auto;
}
.section {
	margin-bottom: 4rem;
}

section.colors {
	.swatch-container {
		display: flex;
		margin-bottom: 2rem;
		.swatch {
			&:not(:first-child) {
				margin-left: 2rem;
			}
		}
	}
}

section.logos {
	.logo-container {
		display: flex;
		align-items: center;
		.logo {
			display: flex;
			flex-direction: column;
			&:not(:first-child) {
				margin-left: 2rem;
			}
			img {
                margin-bottom: 1rem;
				&.dark {
					background-color: #000;
				}
			}
		}
	}
}
</style>
