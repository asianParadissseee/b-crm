<script setup lang="ts">
import AppText from '@/shared/ui/app-text.vue'
import AppTitle from '@/shared/ui/app-title.vue'
import GeoIcon from '@/shared/assets/icons/orange-geo.svg'
import { reactive, ref } from 'vue'

interface IShop {
  name: string
  address: string
  email: string
  mapLink: string
}

interface IDealer {
  city: string
  shops: IShop[]
}

interface IDealerBlock {
  country: string
  dealers: IDealer[]
}

const dealerBlocks = reactive<IDealerBlock[]>([
  {
    country: 'Казахстан',
    dealers: [
      {
        city: 'Актобе',
        shops: [
          {
            name: 'Hug & Hug',
            address: 'пр-кт Санкибай Батыра 26Д, 1-этаж, 7 бутик',
            email: 'email@example.com',
            mapLink: 'https://2gis.kz/'
          },
          {
            name: 'Markeldom',
            address: 'пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          },
          {
            name: 'Markeldom',
            address: 'пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          }
        ]
      },
      {
        city: 'Алматы',
        shops: [
          {
            name: 'Markeldom',
            address: 'пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          }
        ]
      }
    ]
  },
  {
    country: 'Беларусь',
    dealers: [
      {
        city: 'Минск',
        shops: [
          {
            name: 'Markeldom',
            address: 'Беларусь, г. Минск, пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          },
          {
            name: 'Markeldom',
            address: 'Беларусь, г. Минск, пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          }
        ]
      }
    ]
  },
  {
    country: 'Таджикистан',
    dealers: [
      {
        city: 'Душанбе',
        shops: [
          {
            name: 'Markeldom',
            address: 'Таджикистан, г. Душанбе, пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          },
          {
            name: 'Markeldom',
            address: 'Таджикистан, г. Душанбе, пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          },
          {
            name: 'Markeldom',
            address: 'Таджикистан, г. Душанбе, пр-кт Санкибай Батыра 26Д, ТД "Мерей-2", 1 бутик',
            email: 'abylay.ketebayev@gmail.com',
            mapLink: 'https://2gis.kz/'
          }
        ]
      }
    ]
  }
])

const center = ref([40, 40])
const projection = ref('EPSG:4326')
const zoom = ref(14)
const rotation = ref(0)

const currentCenter = ref(center.value)
const currentZoom = ref(zoom.value)
const currentRotation = ref(rotation.value)
const currentResolution = ref(0)

function resolutionChanged(event: any) {
  currentResolution.value = event.target.getResolution()
  currentZoom.value = event.target.getZoom()
}

function centerChanged(event: any) {
  currentCenter.value = event.target.getCenter()
}

function rotationChanged(event: any) {
  currentRotation.value = event.target.getRotation()
}
</script>

<template>
  <div class="max-w-11/12 w-full">
    <app-title
      :font-size="'XL4'"
      :font-weight="'MEDIUM'"
      :align-text="'LEFT'"
    >
      дилеры других стран
    </app-title>
    <section class="h-96 my-10">
      <ol-map style="height: 400px">
        <ol-view
          ref="view"
          :center="center"
          :rotation="rotation"
          :zoom="zoom"
          :projection="projection"
          @change:center="centerChanged"
          @change:resolution="resolutionChanged"
          @change:rotation="rotationChanged"
        />

        <ol-tile-layer>
          <ol-source-osm />
        </ol-tile-layer>
        <ol-rotate-control></ol-rotate-control>
      </ol-map>
    </section>
    <section class="grid-cols-1 grid">
      <div
        class=""
        v-for="block in dealerBlocks"
        :key="block.country"
      >
        <app-title
          :align-text="'LEFT'"
          :font-weight="'MEDIUM'"
          :font-size="'XL'"
          :color="'DARK'"
        >
          {{ block.country }}
        </app-title>
        <div
          v-for="dealer in block.dealers"
          :key="dealer.city"
        >
          <div class="flex gap-2 items-center mt-4">
            <div>
              <img
                :src="GeoIcon"
                alt="оранжевая иконка геолокации"
                width="18"
                height="21"
              />
            </div>
            <app-title
              :color="'DARK'"
              :font-size="'BASE'"
              :font-weight="'MEDIUM'"
              :align-text="'LEFT'"
            >
              {{ dealer.city }}
            </app-title>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10 my-5">
            <div
              class="shadow p-5 rounder transition-all border border-lightAsh group flex flex-col gap-3 max-w-96 w-full hover:shadow-2xl cursor-pointer"
              v-for="(shop, id) in dealer.shops"
              :key="id"
            >
              <app-title
                :align-text="'LEFT'"
                class="group-hover:text-gold"
                :font-weight="'MEDIUM'"
                :font-size="'BASE'"
                :color="'DARK'"
              >
                {{ shop.name }}
              </app-title>
              <app-text
                :font-size="'XS'"
                :color="'DARK'"
                :font-weight="'NORMAL'"
                :align-text="'LEFT'"
              >
                {{ shop.address }}
              </app-text>
              <app-text
                :font-size="'SM'"
                :color="'DARK'"
                :font-weight="'NORMAL'"
                :align-text="'LEFT'"
              >
                {{ shop.email }}
              </app-text>
              <a
                :href="shop.mapLink"
                target="_blank"
                class="text-sm group-hover:text-gold decoration-dotted underline"
              >
                показать на карте
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
