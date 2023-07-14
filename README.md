# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
screenshot: https://ibb.co/x5XDbXR

# Получаем контакт по id - выводим в консоль объект контакта или null, если контакта с таким id не существует.
node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
screenshot: https://ibb.co/7V8vLrP

# Добавляем контакт и выводим в консоль созданный контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
screenshot: https://ibb.co/FJzyM3P

# Удаляем контакт и выводим в консоль удаленный контакт или null, если контакта с таким id не существует.
node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
screenshot: https://ibb.co/rQdYbX2