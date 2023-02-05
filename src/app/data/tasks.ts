

export const tasksJson = [
{
    "id":1,
"title":"Отправить посылку Джону",
"createdAt":"2022-09-10T13:00:45",
"completed":true,"children":[]
},
{
    "id":2,
"title":"Убраться в комнате",
"createdAt":"2022-09-11T14:09:18",
"completed":false,
"children":
[{
    "id":5,
"parentId":2,
"title":"Подмести коридор",
"createdAt":"2022-09-11T14:10:12",
"completed":false}]
},
{"id":3,
"title":"Написать рецензию фильму Побег из Шоушенка",
"createdAt":"2022-09-12T16:30:50",
"completed":true,
"children":[]},
{"id":4,
"title":"Прочитать паттерны проектирования",
"createdAt":"2022-09-13T16:30:50",
"completed":false,
"children":
[
    {
        "id":6,
"parentId":4,
"title":"Изучить паттерн Наблюдатель",
"createdAt":"2022-09-13T16:31:12",
"completed":true},
{"id":7,
"parentId":4,
"title":"Изучить паттерн Фасад",
"createdAt":"2022-09-13T16:33:44",
"completed":false}
]}]