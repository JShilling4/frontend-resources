<template>
	<div class="tools">
		<h1 class="page-heading">Tools</h1>

		<div class="tool">
			<a
				href="https://jsonformatter.org/json-pretty-print"
				class="link"
				target="_blank"
			>
				JSON Formatter
			</a>
		</div>

		<div class="tool">
			<a
				href="https://www.convertsimple.com/convert-javascript-to-json/"
				class="link"
				target="_blank"
			>
				JavaScript -- JSON Converter
			</a>
		</div>

		<div class="tool">
			<a
				href="https://coolors.co/gradient-maker/f5e6ad-f13c77"
				class="link"
				target="_blank"
			>
				Gradient Maker
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Tools",
};
</script>

<style lang="scss" scoped>
.tools {
    max-width: 1000px;
    margin: 0 auto;
}
.tool {
	margin-bottom: 1.5rem;
}
</style>
