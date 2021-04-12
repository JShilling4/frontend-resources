<template>
	<div :ref="details.label" class="swatch" :style="styleObject"></div>
</template>

<script>
import { gsap } from "gsap";

export default {
	name: "ColorSwatch",
	props: {
		details: {
			type: Object,
		},
		selected: {
			type: Boolean,
		},
	},
	data() {
		return {
			styleObject: {
				backgroundColor: this.details.hex,
			},
		};
	},

	watch: {
		selected(newValue) {
			if (newValue == true) {
				gsap.to(this.$refs[this.details.label], { duration: 0.03, scale: 1 });
			} else {
				gsap.to(this.$refs[this.details.label], { duration: 0.03, scale: 0.705 });
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.swatch {
	height: 75px;
	width: 75px;
	border-radius: 10px;
	cursor: pointer;
	transform: scale(0.705);
	transition: transform 0.2s;
}
</style>
