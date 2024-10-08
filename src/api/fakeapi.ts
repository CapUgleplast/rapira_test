import type ArticleModel from "@/models/article.model";

export const articles: ArticleModel[] = [
    {
        id: 1,
        img: '/covers/1.jpeg',
        title: 'Вдохновение в каждом шаге',
        description: 'Наши путешественники находят вдохновение в каждом шаге своего пути.',
        content: 'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.',
        read_time: '2 мин',
        created_at: '9 апр',
        tags: ['Природа', 'Люди'],
        comments: []
    },
    {
        id: 2,
        img: '/covers/2.jpeg',
        title: 'Моменты тишины и покоя',
        description: 'В такие моменты наши фотографы ощущают гармонию и умиротворение.',
        content: 'В такие моменты наши фотографы ощущают гармонию и умиротворение.В такие моменты наши фотографы ощущают гармонию и умиротворение.В такие моменты наши фотографы ощущают гармонию и умиротворение.В такие моменты наши фотографы ощущают гармонию и умиротворение.В такие моменты наши фотографы ощущают гармонию и умиротворение.В такие моменты наши фотографы ощущают гармонию и умиротворение.',
        read_time: '3 мин',
        created_at: '6 Апр',
        tags: ['Природа', 'Животные'],
        comments: []
    },
    {
        id: 3,
        img: '/covers/3.jpeg',
        title: 'Цвета природы в наших руках',
        description: 'Наши художники выражают всю красоту окружающего мира через творчество.',
        content: 'Наши художники выражают всю красоту окружающего мира через творчество.Наши художники выражают всю красоту окружающего мира через творчество.Наши художники выражают всю красоту окружающего мира через творчество.Наши художники выражают всю красоту окружающего мира через творчество.Наши художники выражают всю красоту окружающего мира через творчество.Наши художники выражают всю красоту окружающего мира через творчество.',
        read_time: '3 мин',
        created_at: '5 Апр',
        tags: ['Природа', 'Искусство'],
        comments: []
    },
    {
        id: 4,
        img: '/covers/4.jpeg',
        title: 'Семейные узы в дикой природе',
        description: 'Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.',
        content: 'Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.',
        read_time: '4 Апр',
        created_at: '15 мин',
        tags: ['Природа', 'Животные'],
        comments: []
    },
    {
        id: 5,
        img: '/covers/5.jpeg',
        title: 'Гармония городских и природных пейзажей ',
        description: 'Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.',
        content: 'Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.',
        read_time: '2 мин',
        created_at: '3 Апр',
        tags: ['Природа', 'Искусство'],
        comments: []
    },
    {
        id: 6,
        img: '/covers/6.jpeg',
        title: 'Моменты, которые остаются в сердце ',
        description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        content: 'Эти мгновения наполняют наши сердца радостью и любовью.Эти мгновения наполняют наши сердца радостью и любовью.Эти мгновения наполняют наши сердца радостью и любовью.Эти мгновения наполняют наши сердца радостью и любовью.Эти мгновения наполняют наши сердца радостью и любовью.',
        read_time: '4 мин',
        created_at: '1 Апр',
        tags: ['Природа', 'Люди', 'Животные'],
        comments: []
    }
]

export const tags = ['Природа', 'Люди', 'Животные', 'Искусство', 'Еда', 'Напитки', 'Архитектура']