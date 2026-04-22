# Сервис генерации разверток упаковки

Проект для генерации разверток упаковки с предпросмотром, наложением artwork и экспортом в SVG/PDF.

## Стек

- Frontend: Next.js + TypeScript + Tailwind
- Backend: Node.js / NestJS
- Math engine: Python + FastAPI
- Data layer: PostgreSQL + Redis + MinIO

## Цель MVP

Система должна позволять:
- создавать проект
- задавать параметры развертки
- генерировать SVG-развертку
- показывать preview
- накладывать изображение
- экспортировать результат в SVG/PDF

## Структура проекта

```text
/frontend      - клиентская часть на Next.js
/backend       - orchestration/backend слой
/math-engine   - Python-сервис для расчётов, SVG и трансформаций
/infra         - docker-compose и инфраструктурные файлы