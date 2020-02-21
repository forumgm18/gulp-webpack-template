## Шаблон для верстки gulp + webpack.
```
	webpack - сборка JavaScript
	gulp 	- сборка всего остального.
	Весь JavaScript прогоняется через Babel
```
## Npm модули:
```
	cleave.js 	- валидация форм 
	swiper		- слайдер Swiper Slider
	jquery		- jquery v3.4.1			
```
## Структура проекта:
```
/dist - Продакшен 
/src 	- Исходники	
		/favicon
		/fonts
		/html 		    - Исходники html
			/includes   - Чанки для исходников
			/index.html - основная страница
		/img
		/js
			main.js - точка входа для сборки JavaScript (для webpack)
			svg.js 	- подключение svg - иконок на страницу.
		/plugins
		/scss
			main.scss 	- точка входа для сборки стилей. 
			_fonts.scss	- шрифты
			_mixins.scss	- миксины
			_reset.scss 	- сброс дефолтных стилей браузера
			_style.scss 	- основной файл стилей
			_vars.scss 	- переменные
```
