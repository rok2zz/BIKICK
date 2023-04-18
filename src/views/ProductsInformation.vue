<template>
	<div :class="$style.index">
		<div :class="$style.container" v-if="isPageLoaded()">
			<div :class="$style.contents" >
				<div :class="$style.image">
					<img :class="$style.bikeImage" :src="getBike().thumbnail">
					<img :class="$style.heart" v-if="!isBikeHeartChecked()" @click="updateHeartCheckedBike()" :src="require('@/assets/EmptiedHeart.png')">
					<img :class="$style.heart" v-else @click="updateHeartCheckedBike()" :src="require('@/assets/Heart.png')">
				</div>
				<div :class="$style.info">
					<span :class="$style.name">{{getBike().name}}</span>
					<span :class="$style.date">{{getBike().date}}</span>
					<span :class="$style.price">{{getBike().price}}원</span>
					<span :class="$style.contents">{{getBike().contents}}</span>
				</div>
			</div>
		</div>

		<div v-else :class="$style.fail">
			로딩중입니다.
		</div>
	</div>
</template>

<style lang="scss" module>
@import '@/assets/utils.scss';

.index {
	> .container {
		width: 100%;
		min-width: 1280px;

		padding-top: 118px;

		@include mobile {
			min-width: initial;
			height: auto;

			padding-top: 0;
		}

		> .contents {
			width: 1280px;
			height: 100%;

			display: flex;
			flex-wrap: wrap;

			text-align: center;

			margin: 0 auto;

			@include mobile {
				width: 100%;
				height: auto;

				display: block;
			}

			> .image {
				width: 400px;

				display: flex;

				margin-top: 80px;
				margin-left: 45px;

				position: relative;

				@include mobile {
					width: 100%;

					display: block;

					margin: 0px;
					margin-top: 10px;
				}

				> .bikeImage {
					width: 100%;
					height: 400px;

					@include mobile {
						height: 100%;
					}
				}

				> .heart {
					width: 24px;
					height: 24px;

					position: absolute;

					margin-left: 360px;
					margin-top: 360px;

					z-index: 1;

					cursor: pointer;

					@include mobile {
						width: 30px;
						height: 30px;

						right: 0;
						bottom: 0;

						margin-bottom: 20px;
						margin-right: 20px;
					}
				}
			}

			> .info {
				width: 750px;
				height: 686px;

				margin-top: 83px;
				margin-left: 53px;

				text-align: left;

				@include mobile {
					width: 100%;
					height: auto;

					margin: 19px 0px 200px 0px;
					padding-left: 20px;
				}

				> span {
					width: 100%;

					display: inline-block;
				}

				> .name {
					font-weight: bold;
					font-size: 48px;

					@include mobile {
						font-size: 28px;
					}
				}
				
				> .date {
					font-size: 24px;

					margin-top: 10px;

					color: #454545;

					@include mobile {
						font-size: 15px;

						margin-top: 5px;
					}
				}

				> .price {
					width: 70%;

					font-size: 32px;

					margin-top: 44px;

					@include mobile {
						font-size: 18px;

						margin-top: 9px;
					}
				}

				> .contents {
					width: 396px;

					font-size: 15px;

					margin-top: 29px;

					white-space: pre-wrap;
				}
			} 
		}
	}

	> .fail {
		width: 300px;

		margin: 0 auto;
		padding-top: 300px;

		font-size: 22px;
		font-weight: bold;

		text-align: center;
	}
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Product } from '@/structure/types';
import { unwrapQuery } from '@/utils/formats';

@Component
export default class ProductsInformation extends Vue {
	bikeID?: number 
	bikeQuery: string = ""
	bikeArray?: Product
	productsArray: Product[] = []
	heartCheckedBike: number[] = []

	mounted() {
		this.bikeQuery = unwrapQuery(this.$route.query.q)

		this.bikeID = parseInt(this.bikeQuery)

		this.productsArray = this.$store.getters.getProductsArray

		this.heartCheckedBike = this.$store.getters.getHeartCheckedBike

		this.updateBikeArray()
	}

	isPageLoaded() {
		return this.bikeArray != null
	}

	updateHeartCheckedBike() {
		if (this.heartCheckedBike == null) {
			this.heartCheckedBike = [this.bikeID!]

			this.$store.commit("setHeartCheckedBike", this.heartCheckedBike)
		
			this.$forceUpdate()

			return
		}

		for (var i = 0; i < this.heartCheckedBike.length; i++) {
			if (this.heartCheckedBike[i] == this.bikeID) {
				this.heartCheckedBike.splice(i, 1)

				this.$store.commit("setHeartCheckedBike", this.heartCheckedBike)
		
				this.$forceUpdate()

				return
			}
		}

		this.heartCheckedBike.push(this.bikeID!)

		this.$store.commit("setHeartCheckedBike", this.heartCheckedBike)
		
		this.$forceUpdate()
	}

	updateBikeArray() {
		for(var i = 0; i < this.productsArray.length; i++ ) {
			if (this.productsArray[i].id == this.bikeID) {
				this.bikeArray =  this.productsArray[i]
			}
		}

		this.$forceUpdate()
	}

	getBike(): Product {
		return this.bikeArray!
	}

	isBikeHeartChecked(): boolean {
		for (var i = 0; i < this.heartCheckedBike?.length; i++) {
			if (this.heartCheckedBike[i] == this.bikeID) {
				return true
			}
		}

		return false
	}
}
</script>
