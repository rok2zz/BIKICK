<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<Rectangle/>
		</div>
	</div>
</template>

<style lang="scss" module>
@import "@/assets/utils.scss";

.index {
	> .container {
		width: 100%;
		min-width: 1280px;

		display: flex;

		background-image: url('@/assets/motorcycle.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;

		@include mobile {
			min-width: initial;
			height: auto;

			display: block;
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Rectangle from '@/components/Rectangle.vue';

@Component({
	components: {
		Rectangle
	},
})
export default class HomeView extends Vue {}
</script>
