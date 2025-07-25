# PalomaPOS - Modern Cafe POS System

Красивая и современная система торговых точек (POS) для кафе и ресторанов с темным дизайном и интуитивным интерфейсом.

## Особенности

- 🎨 Современный темный дизайн с glass-эффектами
- 📱 Полностью адаптивный интерфейс
- 🛒 Интерактивная корзина с управлением товарами
- 📝 Система заметок и скидок для товаров
- 🏷️ Категоризированное меню
- 💳 Красивый интерфейс оплаты
- ⚡ Быстрая и плавная анимация
- 🖼️ Поддержка изображений товаров

## Технологии

- **Next.js 14** - React фреймворк
- **TypeScript** - Типизация
- **Tailwind CSS** - Стилизация
- **Lucide React** - Иконки
- **Vercel** - Деплой

## Быстрый старт

1. **Установка зависимостей:**
```bash
npm install
```

2. **Запуск в режиме разработки:**
```bash
npm run dev
```

3. **Открыть в браузере:**
Перейдите на [http://localhost:3000](http://localhost:3000)

## Деплой на Vercel

1. **Подключите проект к Vercel:**
```bash
npm i -g vercel
vercel
```

2. **Или используйте Vercel Dashboard:**
- Импортируйте проект из GitHub
- Vercel автоматически определит настройки Next.js
- Нажмите Deploy

## Структура проекта

```
app/
├── components/          # React компоненты
│   ├── Navbar.tsx      # Навигационная панель
│   ├── CartPanel.tsx   # Панель корзины
│   ├── MenuGrid.tsx    # Сетка категорий
│   └── ProductGrid.tsx # Сетка товаров
├── data/
│   └── mockData.ts     # Тестовые данные
├── types.ts            # TypeScript типы
├── globals.css         # Глобальные стили
├── layout.tsx          # Корневой layout
└── page.tsx            # Главная страница
```

## Настройка

### Добавление товаров
Отредактируйте файл `app/data/mockData.ts` для добавления своих товаров и категорий.

### Изменение цветовой схемы
Измените цвета в `tailwind.config.js` в секции `theme.extend.colors`.

### Добавление изображений
Используйте сервисы изображений или загрузите в папку `public/`.

## Лицензия

MIT License 