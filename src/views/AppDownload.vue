<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.contents">
				<img :src="require('@/assets/BigLogo.png')">
				<div :class="$style.text">
					"이륜차 중고거래, 커뮤니티는 바이킥"
				</div>
				<div :class="$style.button">
					<a href="https://www.apple.com/kr/app-store/">
						<img :src="require('@/assets/AppleLogo.png')">
					</a>
					<a href="http://play.google.com">
						<img :src="require('@/assets/GoogleLogo.png')">
					</a>
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

		padding-top: 118px;

		@include mobile {
			min-width: initial;
			height: auto;

			padding-top: 80px;
			margin-bottom: 150px;
		}

		> .contents {
			width: 100%;

			text-align: center;

			margin: 0 auto;

			@include mobile {
				width: 350px;

				text-align: center;
			}

			> img {
				margin-top: 182px;

				@include mobile {
					width: 324px;

					margin-top: 0px;

					object-fit: contain;
				}
			}

			> .text {
				font-weight: bold;
				font-size: 42px;
				font-family: sans-serif;

				margin-top: 45px;
				margin-bottom: 84px;

				@include mobile {
					width: 350px;

					font-size: 38px;

					margin-top: 30px;
					margin-bottom: 42px;
				}
			}

			> .button {
				width: 578px;

				display: flex;

				margin: 0 auto;

				@include mobile {
					width: 100%;

					display: block;
					
					text-align: center;
				}

				> a {
					width: 50%;

					@include mobile {
						display: block;
						width: 100%;
					}

					> img {

						@include mobile {
							margin-top: 17px;
						}
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
export default class AppDownload extends Vue {}
</script>
