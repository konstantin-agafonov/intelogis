# Учебное приложение на React

Приложение по отображению заявок на перевозку на карте.

Реализован экран, в котором слева таблица со списком заявок, а справа карта. При выборе в таблице строки с заявкой, выбранная строка подсвечивается, а на карте отображаются точки погрузки и разгрузки заявки в виде маркеров и полилиния трека движения между этими точками, полученная из сервиса построения треков по дорогам. При выборе заявки, на карте происходит масштабирование таким образом, чтобы весь маршрут попал в область видимости карты. Одновременно на карте может отображаться только один маршрут - выбранный.

Для отображения карты использован пакет Leaflet, для компонентов — Ant Design, для хранения стейта компонентов и данных использован Redux (redux-toolkit), для реакции на события — Saga. В качестве основы приложения использован React Create App. Использованы только функциональные компоненты. Применено разделение кода на функциональные слои: components, selectors, reducers, sagas, HTTP. Задействована saga для получения трека по точкам, а также HTTP-сервис для обращения к API построения треков. CSS-стили написаны в препроцессоре SASS.

Для получения polyline маршрута использован API OSRM:

http://project-osrm.org/docs/v5.5.1/api/?language=cURL#route-service