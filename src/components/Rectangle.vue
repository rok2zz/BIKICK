<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.contents">
				<div :class="$style.leftContents">
					<span :class="$style.bigSpan">바이킥</span>
					<span :class="$style.whiteSpan">No.1 국내 이륜차 커뮤니티</span> 
				</div>
				<div :class="$style.rightContents">
					<span :class="$style.bigSpan">{{ getSuggestionsStr() }}</span>
					<span :class="$style.whiteSpan">건의 소통이 지금도 진행 중!</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" module>
@import '@/assets/utils.scss';

.index {
	width: 100%;
	
	> .container {
		width: 100%;
		min-width: 1280px;
		height: 804px;

		background-color: rgb(0, 0, 0, 0.5);
		
		@include mobile {
			min-width: initial;

			height: 463px;
		}

		> .contents {
			width: 100%;

			display: flex;
			align-items: center;

			padding-top: 350px;
			margin: 0 auto;

			@include mobile {
				height: auto;

				display: block;

				padding-top: 0px;
			}

			span {
				width: 100%;

				display: inline-block;

				font-weight: bold;

				color: white;
			}

			.bigSpan {
				font-size: 64px;

				@include mobile {
					font-size: 48px;
				}
			}

			.whiteSpan {
				font-size: 32px;

				@include mobile {
					font-size: 24px;
				}
			}

			> .leftContents {
				width: 50%;

				padding-left: 76px;
				
				@include mobile {
					width: 100%;

					padding: 39px;
					padding-top: 124px;
				}
			}

			> .rightContents {
				width: 50%;

				padding-right: 76px;

				text-align: right;
				
				@include mobile {
					width: 100%;

					padding-right: 39px;
				}
			}
		}
	}
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Rectangle extends Vue {
	suggestionsCount: number = this.$store.getters.getSuggestionsNumber
	suggestionsStr: string = String(this.suggestionsCount).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	intervalTimer?: number

	mounted() {
		this.intervalTimer = setInterval(this.increaseTimerNumber,5000)

		this.suggestionsCount = this.$store.getters.getSuggestionsNumber
	}

	beforeDestroy() {
		clearInterval(this.intervalTimer)

		this.$store.commit("setSuggestionsNumber", this.suggestionsCount)
	}

	increaseTimerNumber() {
		this.suggestionsCount += Math.floor(Math.random() * 3)
	}

	getSuggestionsStr(): string {
		this.suggestionsStr = String(this.suggestionsCount).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		return this.suggestionsStr
	}
}
</script>
