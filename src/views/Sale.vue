<template>
	<div :class="$style.index">
		<div :class="$style.container" v-if="productsArray.length >= 0">
			<div :class="$style.contents">
				<div :class="$style.list"  v-for="(item, index) in productsArray" :key="index">
					<router-link :to="'/info' + getBikeQuery(item.id)">
						<img :class="$style.bikeImage" :src= "item.thumbnail">
					</router-link>
					<img :class="$style.heart" v-if="isBikeHeartChecked(item.id)" v-on:click="updateHeartCheckedBike(item.id)" :src="require('@/assets/Heart.png')">
					<img :class="$style.heart" v-else @click="updateHeartCheckedBike(item.id)" :src="require('@/assets/EmptiedHeart.png')">
					<span :class="$style.bikeName">{{item.name}}</span>
					<span>{{item.date}}</span>
				</div>
			</div>
		</div>
		<div v-else>
			Loading
		</div>
	</div>
</template>

<style>
 * {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
 }
</style>

<style lang="scss" module>
@import '@/assets/utils.scss';

.index {
	> .container {
		width: 100%;
		min-width: 1280px;
		height: 686px;

		padding-top: 118px;

		@include mobile {
			min-width: initial;
			height: auto;

			padding-top: 0px;
		}

		> .contents {
			width: 1280px;

			display: flex;
			flex-wrap: wrap;

			text-align: center;
			margin: 0 auto;

			@include mobile {
				width: 100%;
				height: auto;
			}

			> .list{
				width: 200px;

				display: flex;
				flex-wrap: wrap;
				text-align: center;

				margin-top: 80px;
				margin-left: 40px;
				padding: 5px;

				position: relative;

				@include mobile {
					width: 50%;

					margin-top: 0px;
					margin-left: 0px;
					padding: 17px;
				}
				
				> a {
					> .bikeImage {
						width: 100%;

						border-radius: 30px;

						cursor: pointer;
					}
				}

				> .heart {
					width: 24px;
					height: 24px;
					
					margin-right: 15px;
					margin-top: 161px;
					
					position: absolute;
					right: 0;
					top: 0;

					cursor: pointer;

					z-index: 1;

					@include mobile {
						width: 12%;
						height: 10%;

						margin-right: 29px;
						margin-top: 75%;
					}
				}

				> span {
					width: 100%;

					font-size: 14px;

					margin-top: 5px;
				}

				> .bikeName {
					font-weight: bold;
				}
			}
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyJsonFile from '@/assets/products.json'
import { Product } from '@/structure/types';

@Component
export default class Sale extends Vue {
	bikeID?: number
	productsArray: Product[] = []

	heartCheckedBike: number[] = []
	
	mounted() {
		this.productsArray = MyJsonFile.products

		this.$store.commit("setProductsArray", this.productsArray)

		this.heartCheckedBike = this.$store.getters.getHeartCheckedBike
	}

	updateHeartCheckedBike(id: number) {
		if (this.heartCheckedBike == null) {
			this.heartCheckedBike = [id]

			this.$store.commit("setHeartCheckedBike", this.heartCheckedBike)
		
			this.$forceUpdate()

			return
		}

		for (var i = 0; i < this.heartCheckedBike.length; i++) {
			if (this.heartCheckedBike[i] == id) {
				this.heartCheckedBike.splice(i, 1)

				this.$store.commit("setHeartCheckedBike", this.heartCheckedBike)
		
				this.$forceUpdate()

				return
			}
		}

		this.heartCheckedBike.push(id)

		this.$store.commit("setHeartCheckedBike", this.heartCheckedBike)
		
		this.$forceUpdate()
	}

	isBikeHeartChecked(id: number): boolean {
		for (var i = 0; i < this.heartCheckedBike?.length; i++) {
			if (this.heartCheckedBike[i] == id) {
				return true
			}
		}

		return false
	}

	getBikeQuery(id: number): string {
		this.bikeID = id

		return "?q=" + this.bikeID?.toString() ?? ""
	}
}
</script>