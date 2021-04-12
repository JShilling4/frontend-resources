<template>
	<div class="color-detail">
		<div class="line">
			<span class="key">Variable Name</span>
			<span class="value">{{ selected.label }}</span>
		</div>

		<div class="line">
			<span class="key">Hex</span>
			<div class="copy-wrapper">
				<input type="text" class="value" :ref="selected.hex" :value="selected.hex" readonly />
				<AppButton class="teal-outline" @click="copyToClipboard('hex')">
					Copy
				</AppButton>
			</div>
		</div>

		<div class="line">
			<span class="key">RGB</span>
			<div class="copy-wrapper">
				<input type="text" class="value" :ref="selected.rgb" :value="selected.rgb" readonly />
				<AppButton class="teal-outline" @click="copyToClipboard('rgb')">
					Copy
				</AppButton>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ColorDetail",
	props: {
		selected: {
			type: Object,
		},
	},
	methods: {
		copyToClipboard(type) {
            const key = type == "rgb" ? "rgb" : "hex";
			this.$refs[this.selected[key]].select();
			document.execCommand("copy");
			window.getSelection().removeAllRanges();
		},
	},
};
</script>

<style lang="scss" scoped>
.color-info {
	.line {
		margin-bottom: 1.5rem;
	}
	.key {
		display: block;
		margin-bottom: 0.5rem;
        color: $gray-label;
	}
	.value {
		border: none;
		background-color: transparent;
		outline: none;
		max-width: 8rem;
	}
}
</style>
