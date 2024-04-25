<template>
  <layout-nav nav-link="О компании">
    <app-title
      :font-weight="'MEDIUM'"
      :font-size="'XL4'"
      :color="'DARK'"
      :align-text="'LEFT'"
    >
      О компании
    </app-title>
    <article class="my-10">
      <app-title
        :font-size="'XL2'"
        :font-weight="'MEDIUM'"
      >
        Компания СпецОкраска.Ру не просто интернет-магазин, где вы можете купить окрасочное оборудование, а настоящая
        энциклопедия промышленной и строительной окраски.
      </app-title>
      <div class="flex flex-col gap-3 my-3">
        <app-text
          :font-size="'SM'"
          :font-weight="'MEDIUM'"
        >
          Мы поставляем как бюджетное окрасочное оборудование, так и оборудование премиум-класса. На всю продаваемую
          технику предоставляется гарантия 12 месяцев, а также осуществляется поставка запасных частей и комплектующих к
          ней, гарантийный и послегарантийный ремонт.
        </app-text>
        <app-text
          :font-size="'SM'"
          :font-weight="'MEDIUM'"
        >
          Все поставляемое нами оборудование имеется в наличии на нашем основном складе в Москве и частично на складах
          во многих регионах РФ.
        </app-text>
        <app-text
          :font-size="'SM'"
          :font-weight="'MEDIUM'"
        >
          Кроме того на сайте представлена и постоянно пополняется информация об окрасочном оборудовании мировых лидеров
          в области промышленной окраски: Wagner, Graco, Titan, Contracor, DeVilbiss, SprayTECH, Airlessco,
          WaltherPilot, Kremlin, Larius, Sata, Wiwa, Taiver, Sagola, RentSpray, Binks, Tecnover, Sinaer, EST, НИИ ЛКП с
          ОМЗ г. Хотьково, МКМ, Пелла-Маш, MBP, ASM, Asturo, Intenso, Lemmer, H.E.R.O и других известных производителей.
        </app-text>
      </div>
    </article>
    <section class="grid gap-10 grid-cols-1 lg:place-items-start place-items-center lg:grid-cols-3">
      <about-card
        v-for="(card, id) in cards"
        :key="id"
        :title="card.title"
        :description="card.description"
        :link="card.link"
      />
    </section>
    <div class="mt-20 flex flex-col gap-3">
      <app-text
        :font-size="'SM'"
        :font-weight="'MEDIUM'"
      >
        Надеемся, вы найдете интересным и полезным наш сервис.
      </app-text>
      <app-text
        :font-weight="'MEDIUM'"
        :font-size="'SM'"
      >
        С Уважением, Проект BekElectro,
        <span
          @click="handleHref('mailto', 'info@bekElectro.kz')"
          class="text-gold cursor-pointer"
          >e-mail: info@bekElectro.kz</span
        >
      </app-text>
    </div>
  </layout-nav>
</template>

<script setup lang="ts">
import { LayoutNav } from '@/widgets/navbar'
import AppTitle from '@/shared/ui/app-title.vue'
import AppText from '@/shared/ui/app-text.vue'
import { reactive } from 'vue'
import { AboutCard } from '@/widgets/about-company/about-card'
import { handleHref } from '@/shared/lib/href.ts'

const cards = reactive([
  {
    title: 'Вы производите или поставляете окрасочное оборудование?\n',
    description: 'Вы всегда можете связаться с нашими менеджерами и стать участником уникального проекта BekElectro.',
    link: '+7 (495) 414-35-45'
  },
  {
    title: 'У вас есть информация по новому окрасочному оборудованию?',
    description: 'Вы можете прислать нам информацию, которая пока не представлено на нашем сайте.',
    link: 'info@bekElectro.kz'
  },
  {
    title: 'У вас есть предложения или пожелания по улучшению работы сайта?',
    description:
      'Мы будем благодарны получить от вас обратную связь, нам важно знать каким вы хотите видеть наш Проект.',
    link: 'info@bekElectro.kz'
  }
])
</script>

<style scoped></style>
