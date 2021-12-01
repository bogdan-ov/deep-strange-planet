import { buildName } from "./engine/utils/math";

type NameType = {
    name: string
    desc: string
    special?: string 
}

const prefixes = {
    raw: "Необработанный"
}

export const RawNames: { [key: string]: NameType } = {
    "raw-cidium": {
        name: buildName(prefixes.raw, "цидиум"),
        desc: "Жёлтая руда, которая непонятным образом выделяет энергию, если её правильно обработать. При этом её очень легко найти",
    },
    "raw-osmy": {
        name: buildName(prefixes.raw, "осмий"),
        desc: "Осмий, кристалы, которые также есть и на земле. Казалось бы, ничего интересного, но вместе с цидиумом, осмий будет очень полезен",
    },
    "raw-grade-cidium": {
        name: buildName(prefixes.raw, "второсортный цидиум"),
        desc: "Цидиум 2-го сорта, руда, иногда встречающаяся вместе с осмием",
    },
    "raw-antin": {
        name: buildName(prefixes.raw, "антин"),
        desc: "Антин, крайне странная руда, имеющая красный оттенок. Предположительно кристалы, которые миллионы лет назад из-за вулканической активности. Не зря они расположены ближе к мантии",
    },
    "raw-rady": {
        name: buildName(prefixes.raw, "радий"),
        desc: "Радий... Нам не удалось его подробно изучить. Известно только, то что он очень глубоко под землёй и излучает радиационный фон до 67.2 мк/ч, что выше нормы в 4 раза",
        special: "> Требуется специальная колба для сбора!"
    },
    "raw-nerius": {
        name: buildName(prefixes.raw, "нериус"),
        desc: "Нериус, невероятно плотная руда, что значит она ещё и очень тяжёлая. 1см² весит около 300 грамм",
        special: "> Довольно сильно замедляет вас!"
    },
    "raw-manty": {
        name: "Мантий",
        desc: "Мантий... Это то, для чего ты здесь. Но будь осторожен, он очень горячий, до 1200 С°",
        special: "> Требуется специальная колба для сбора!"
    },
}
export const GearNames: { [key: string]: NameType } = {
    "gear-storage": {
        name: "Хранилище",
        desc: ""
    },
    "gear-recycler": {
        name: "Переработчик",
        desc: ""
    },
    "gear-upgrader": {
        name: "Улучшатель",
        desc: ""
    },
    "gear-oxygen-generator": {
        name: "Генератор кислорода",
        desc: ""
    },
}
export const RecipeNames: { [key: string]: NameType } = {
    "storage-level-up": {
        name: "Улучшить хранилище",
        desc: "Улучшите своё хранилище для того, чтобы можно было хранить больше ресурсов и их типов."
    },
    "tool-level-up": {
        name: "Улучшить инструмент",
        desc: "Для того чтобы быстрее ломать руду прокачайте свой инструмент. Более новые уровни инструмента позволяют добывать больше типов руд"
    },
    "bottle": {
        name: "\"Специальная колба\"",
        desc: "Колба для сбора особо опасных руд. На пример таких, как радий"
    },
    "robot": {
        name: "Робот",
        desc: "Ваш лисный робот-компаньон. Копает небольшой тунель вниз. Безсилен против базальта"
    },
};