<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.contents">
				<div :class="$style.leftContents">
					<img :src="require('@/assets/BigLogo.png')">
				</div>
				<div :class="$style.rightContents">
					<span :class="$style.biSpan">이륜차의 상징인 
						<span :class="$style.boldSpan">'오토바이'</span>를 <br>심볼화하였으며 <br>
						<span :class="$style.redSpan">적색포인트</span>는 <br>
						<span :class="$style.boldSpan">'고 RPM' 및 '속도'</span>를 상징합니다.
					</span>
				</div>
			</div>
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

		padding-top: 350px;

		@include mobile {
			min-width: initial;

			display: block;

			padding-top: 170px;
			padding-bottom: 220px;
		}

		> .contents {
			width: 100%;

			display: flex;
			align-items: center;
			
			margin: 0 auto;

			@include mobile {
				display: block;
			}

			> .leftContents {
				width: 50%;

				margin-left: 130px;
				padding-right: 80px;

				text-align: right;

				@include mobile {
					width: 100%;	

					margin-left: 0px;
					padding-right: 0px;

					text-align: center;
				}

				> img {
					@include mobile {
						width: 324px;

						object-fit: contain;
					}
				}
			}

			> .rightContents {
				width: 50%;

				margin-left: 30px;

				@include mobile {
					width: 100%;

					margin-left: 0px;
					margin-top: 22px;
					padding: 24px;

					text-align: center;
				}

				> .biSpan {
					display: inline-block;

					font-size: 32px;

					color: #000000;

					@include mobile {
						font-size: 15px;
					}

					> .boldSpan {
						font-weight: bold;
					} 

					> .redSpan {
						font-weight: bold;

						color: #cf0000;
					}
				} 
			}
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Bi extends Vue {}
</script>
