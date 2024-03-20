<template>
  <section id="about-company">
    <div class="grid grid-cols-2 gap-10">
      <div class="flex flex-col gap-3">
        <AppTitle
          :color="'DARK'"
          :font-weight="'MEDIUM'"
          :font-size="'XL2'"
          :align-text="'LEFT'"
        >
          О КОМПАНИИ
        </AppTitle>
        <AppText
          :align-text="'LEFT'"
          :font-size="'BASE'"
          :font-weight="'NORMAL'"
          :color="'DARK'"
        >
          Наш ассортимент - современное окрасочное оборудование промышленного и бытов ого назначения. Интернет-магазин
          <br />
          СпецОкраска.ру - официальный сайт компании-поставщика крупных российских производств и предприятий малого
          бизнеса. <br />
          Предлагаем продукцию ведущих изготовителей отрасли, оказываем профессиональную помощь с выбором изделий.
          <br />
          Каталог магазина <span class="text-gold">SpecOkraska.Ru</span> представляет все виды оборудования для окраски
          автотранспорта, технических устройств, <br />
          строительных и мебельных конструкций, а также запчасти и комплектующие к нему.
        </AppText>
      </div>
      <div class="flex flex-col gap-3">
        <AppTitle
          :color="'DARK'"
          :font-weight="'MEDIUM'"
          :font-size="'XL2'"
          :align-text="'LEFT'"
        >
          НОВОСТИ
        </AppTitle>
        <div>
          <AppText
            :align-text="'LEFT'"
            :font-size="'SM'"
            :font-weight="'NORMAL'"
            :color="'SMOKE'"
          >
            11 августа 2019
          </AppText>
          <AppText
            :align-text="'LEFT'"
            :font-size="'BASE'"
            :font-weight="'NORMAL'"
            :color="'GOLD'"
          >
            Конференция no окрасочному оборудованию в Барнауле
          </AppText>
          <AppText
            :align-text="'LEFT'"
            :font-size="'BASE'"
            :font-weight="'NORMAL'"
            :color="'DARK'"
          >
            Конференция по окрасочному оборудованию в Барнауле С 9 <br> по 13 сентября 2019 г. представители компании
            «Финишинг Групп» <br> проведут конференцию по окрасочному <br> оборудованию в Барнауле, где можно будет...
          </AppText>
        </div>
        <div>
          <AppText
            :align-text="'LEFT'"
            :font-size="'SM'"
            :font-weight="'NORMAL'"
            :color="'SMOKE'"
          >
            27 мая 2019
          </AppText>
          <AppText
            :align-text="'LEFT'"
            :font-size="'BASE'"
            :font-weight="'NORMAL'"
            :color="'GOLD'"
          >
            "Спецокраска" на семинаре в Минске
          </AppText>
          <AppText
            :align-text="'LEFT'"
            :font-size="'BASE'"
            :font-weight="'NORMAL'"
            :color="'DARK'"
          >
            23 мая в Минске состоялся образовательный семинар <br> "Механизация ручных процессов", организованный нашим <br>
            партнерами компаниями Premium Decor и Premium Airless...
          </AppText>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <AppTitle
          :color="'DARK'"
          :font-weight="'MEDIUM'"
          :font-size="'XL'"
          :align-text="'LEFT'"
        >
          Почему с нами выгодно?
        </AppTitle>
        <AppText
          :align-text="'LEFT'"
          :font-size="'BASE'"
          :font-weight="'NORMAL'"
          :color="'DARK'"
        >
          - товар поставляем напрямую от производителей, поэтому наши цены на 10-15% ниже, чем в среднем по рынку;
          <br />
          - вы можете забрать товар в день оплаты со склада в Москве или получить его в течение двух дней по указанному
          адресу, отправку в регионы выполняем силами выбранной вами транспортной компании; <br />
          - к услугам покупателей выставочный зал, где можно наглядно ознакомиться с ассортиментом и получить
          профессиональную консультацию.
        </AppText>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppTitle from '@/shared/ui/app-title.vue';
import AppText from '@/shared/ui/app-text.vue';
</script>

<style scoped></style>
