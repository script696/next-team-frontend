<br/>

  <h1 align="center">Проект Currency-Change</h3>

  <p align="center">
    Приложение 'Fullstack Разработчик'
    <br/>
    <br/>
   
  </p>
  
  <p align="center">
    Для работы приложения необходимо клонировать бэкенд из репозитория 
     <a align="center" href="https://github.com/script696/next-team-frontend" target="_blank">API</a>
    <br/>
    <br/>
   
  </p>

# О проекте

<p >
    <br/>
</p>

![Screen Shot](https://github.com/script696/next-team-frontend/blob/main/src/assets/images/gh.png)

Приложение разработано по тестовому заданию:

# Full-stack тестовое задание

**Тестовое задание:**

Задание рассчитано на 4-8 часов выполнения

**Back End**

Сервер на NodeJS должен работать в качестве файлового сервера (выдавать файлы для работы Frontend-части) и принимать/отдавать данные по API (3 эндпоинта):

1. POST для добавления нового сообщения
2. POST для отправки следующего числа и получения среднего между ним и предыдущим в ответ
3. GET для получения информации обо всех предыдущих числах и расчётах

**Front-End**

Две страницы:

1. Доска сообщений с рендером предыдущих на стороне сервера (SSR) и формой добавления нового сообщения.
2. Средние числа. Ввод числа в простую форму, отправка запроса на сервер, получение среднего числа в ответ, вывод результата над предыдущими. Рендер на стороне клиента (CSR).

На всех страницах стили - предельно простой легко читаемый минимализм. Без изысков. Адаптив не нужен, но информация должна помещаться на экране по умолчанию.

**Страница Доска сообщений**

- при входе на страницу сервер формирует и выдаёт HTML-разметку с включением данных уже полученных сообщений (на старте сервера там одно захардкоденное сообщение)
- каждое сообщение на экране состоит из значений полей text и author
- кроме прошлых сообщений на странице находится форма размещения нового сообщения c теми же полями и кнопкой "разместить сообщение"
- при отправке сообщения выполняется обновление страницы после которого новое сообщение должно появиться рядом с предыдующими (первым или последним - в зависимости от порядка сортировки)
- сервер может хранить сообщения в массиве в памяти и/или (необязательно) в файле

**Страница Средние числа**

- пользователь вводит число в форму, сам отмечает, если число отрицательное и/или дробное (например галочками)
- при нажатии кнопки "отправить и получить среднее" выполняется отправка запроса к серверу на второй API-эндпоинт
- запрос и обработка ответа на клиенте посредством JavaScript без перезагрузок страницы
- сервер в ответ присылает предыдущее число, последнее принятое от пользователя и среднее между ними
- клиент выводит их под формой новой строкой (из неё должно быть понятно, где что)
- данные предыдущих расчётов сдвигаются вниз
- при входе/обновлении страницы приходящая от сервера HTML-разметка не содержит данных о предыдующих расчётах...
- сразу после построения DOMa клиент отправляет запрос на третий эндпоинт, по получении ответа на который под формой выводится история предыдущих присланных и вычисленных чисел

**Обязательно**

- сдача работы в виде ссылки на репозиторий на GitHub или аналог, убедительная история коммитов
- все три страницы содержат ссылки для удобного перехода на две другие (и переход выполняется независимо от адреса локального или на хостинге) и на свой репозиторий проекта
- сервер не должен падать при запросах на получение отсутствующих файлов или на непредусмотренные API-эндпоинты

## Использованные технологии

- React
- TypeScript
- SCSS
- Синтаксис ES6
- REST API
- Mодульная архитектура

## Установка

## 1. Клонируйте репозиторий командой:

### `git@github.com:script696/next-team-frontend.git`

## 2. Установите пакеты командой:

### `npm i`

## 3. Доступные скрипты:

### `npm run dev`

Запуск приложения в режиме разработки.\
Откройте [http://localhost:3000](http://localhost:3000) чтобы увидеть результат в браузере.

Страница обновится автоматически при внесении изменений.

## Авторы

- **Никита Семенов** - _Web Developer_ - [Никита Семенов](http://niksemenov.ru/) - \*\*
