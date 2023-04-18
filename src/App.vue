<template>
	<div :class="$style.index">
		<div :class="$style.header">
			<div :class="$style.contents">
				<router-link to="/" :class="$style.logo">
					<img :src="require('@/assets/HeaderLogo.png')"/>
				</router-link>
			</div>
			<router-view :class="$style.view" />
		</div>

		<div :class="$style.menu">
			<router-link to="/bi">BI</router-link>
			<router-link to="/sale">중고매물보기</router-link>
			<router-link to="/download">앱 다운로드</router-link>
		</div>

		<div :class="$style.footer">
			<div :class="$style.contents">
				<div :class="$style.leftFooter">
					<img :src="require('@/assets/FooterLogo.png')">
				</div>
				<div :class="$style.rightFooter">
					<span :class="$style.bigFooter">
						(C) 2022 by BIKICK, ALL Rights Reserved. <br>
						<p :class="$style.smallFooter">
						커뮤니티의 모든 이용 권리는 바이킥에게 있으며, 저작권의 겨우 각 게시물 저작자에게 있습니다. <br>
						커뮤니티 약관 위반 시 이용약관에 따라 추가 제재 및 법적 조치가 진행될 수 있습니다.
						</p>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
body {
	margin: 0;
	padding: 0;
}

* {
	box-sizing: border-box;
}
</style>

<style lang="scss" module>
@import "@/assets/utils.scss";

.index {
	width: 100%;
	min-width: 1280px;

	@include mobile {
		min-width: initial;
	}

	> .header {
		width: 100%;

		display: flex;

		position: relative;

		@include mobile {			
			height: auto;

			display: block;
		}

		> .contents {
			width: 100%;

			display: flex;
			align-items: center;

			margin: 0 auto;
			padding: 22px 0px 22px;

			background-color: rgb(255, 255, 255, 0.3);

			z-index: 1;

			@include mobile {				
				display: block;

				text-align: center;
			}

			> .logo {
				margin: 0 auto;

				@include mobile {
					text-align: center;
				}

				> img {
					@include mobile {
						width: 115px;

						object-fit: contain;
					}
				}
			}
		}

		> .view{
			width: 100%;

			position: absolute;

			@include mobile {
				position: initial;
				height: auto;
			}
		}
	}
	
	> .menu {
		width: 441px;

		display: flex;
		text-align: center;

		font-size: 18px;

		margin: 0 auto;
		margin-top: 760px;
		margin-bottom: 49px;

		@include mobile {
			width: 100%;

			margin-top: 50px;
		}

		> a {
			width: (100% / 3);

			font-size: 18px;

			color: #333333;

			text-decoration: none;
		}

		:global {
			.router-link-exact-active {
				font-weight: bold;

				color: black;
			}
		}
	}

	> .footer {
		width: 100%;
		height: 120px;

		display: flex;

		margin: 0 auto;

		background-color: #eeeeee;

		@include mobile {
			display: block;
		}

		> .contents {
			display: flex;
			align-items: center;

			margin: 0 auto;

			@include mobile {
				display: initial;
				
				text-align: center;
			}

			> .leftFooter {

				@include mobile {
					text-align: center;
					margin-left: 0px;
					margin-right: 0px;
				}

				> img {
					@include mobile {
						width: 82px;
						height: 29px;

						object-fit: contain;
						
						margin-top: 12px;
					}
				}
			}

			> .rightFooter {

				@include mobile {
					margin-top: 5px;
				}        

				> .bigFooter {
					display: inline-block;

					font-size: 18px;
					font-weight: bold;

					margin-left: 30px;

					color: #333333;

					@include mobile {
						font-size: 13px;
						margin-left: 0px;
					}

					> .smallFooter {
						display: inline-block;
						font-size: 13px;
						font-weight: initial;
						color: #595959;

						@include mobile {
							font-size: 11px;
							margin-top: 5px;
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
export default class App extends Vue {}
</script>
