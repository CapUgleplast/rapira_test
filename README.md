# Rapira-Test

## Архитектура проекта

Проект разработан с использованием Vue 3 Composition API, Pinia, TypeScript и Tailwind CSS.
Unit тестирование компонентов реализовано с использованием Vitest.

Структура проекта организована стандартным паттерном Vue

vue-project/
├── public/                # Статические изображения
│   
├── src/
│   ├── api/               # Фейк-апи для проекта
│   ├── assets/            # Стили и иконки
│   ├── components/        # Компоненты Vue и тесты
│   ├── views/             # Представления (страницы)
│   ├── layouts/           # Лейаут проекта
│   ├── middleware/        # Middleware скрипты
│   ├── router/            # Конфигурация маршрутизации
│   ├── stores/            # Модули Pinia
│   ├── App.vue            # Основной компонент приложения
│   └── main.ts            # Входная точка



## Установка проекта

```sh
npm install
```

### Компиляция Dev билда

```sh
npm run dev
```

### Компиляция Prod билда

```sh
npm run build
```

### Запуск Vitest тестов

```sh
npm run test
```
