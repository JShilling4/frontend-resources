<template>
	<button class="button">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "app-button",
	props: {},
};
</script>

<style scoped lang="scss">
.button {
	outline: none;
	border: none;
	padding: .25rem 1rem;
    cursor: pointer;
    transition: color .3s, background-color .3s;
}
.teal-fill {
	color: #fff;
	background-color: $teal;
}
.teal-outline {
    color: $teal;
    background-color: transparent;
    border: 1px solid $teal;

    &:hover {
        background-color: $teal;
        color: #fff;
    }
}
</style>
