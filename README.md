# Сервис генерации разверток упаковки

Проект для генерации разверток упаковки с интерактивным редактором, наложением artwork и экспортом в SVG/PDF.

Архитектура проекта разделена на несколько слоёв:
- frontend отвечает за интерфейс, редактор и UX
- NestJS backend отвечает за API, продуктовую логику, проекты, файлы и маршрутизацию задач
- Python math-service отвечает за геометрию, SVG, safe zones, bleed и обработку изображений
- PostgreSQL, Redis и S3-совместимое хранилище отвечают за данные, очереди и файлы

Такой подход нужен, чтобы не смешивать UI, основной backend и вычислительный движок в один слой. По roadmap frontend не должен обращаться к Python напрямую в production. :contentReference[oaicite:1]{index=1}

---

## Стек

### Frontend
- React
- Vite
- TypeScript
- React Router
- Zustand
- TanStack Query
- react-konva

### Backend
- NestJS
- Prisma

### Math service
- Python
- FastAPI
- NumPy
- Shapely
- SymPy
- OpenCV
- Pillow
- svgwrite

### Data и инфраструктура
- PostgreSQL
- Redis
- BullMQ
- S3 / R2 / MinIO

---

## Цель MVP

MVP должен позволять:

- создавать проект
- задавать параметры развертки
- генерировать SVG-развертку
- показывать preview
- редактировать placement изображения
- загружать artwork
- накладывать artwork через Python pipeline
- экспортировать результат в SVG/PDF

В roadmap MVP считается завершённым после спринта 7, когда уже есть frontend на React + Vite, NestJS backend, Python-сервис для геометрии и изображений, редактор, ручное наложение artwork и экспорт SVG/PDF под печать. :contentReference[oaicite:2]{index=2}

---

## Архитектура проекта

Система разделена на отдельные слои:

- **Frontend** — SPA на React + Vite, страницы, editor UI, preview, форма параметров, управление состоянием
- **Backend** — NestJS как основной API и продуктовый слой
- **Math service** — Python + FastAPI для построения геометрии, SVG и image-processing
- **Data layer** — PostgreSQL для данных, Redis + BullMQ для фоновых задач, S3-совместимое хранилище для файлов

Ключевая логика архитектуры:
- React + Vite используется как editor-first frontend
- NestJS управляет проектами, файлами, статусами и вызовами Python
- Python изолирован под точную геометрию, SVG и трансформации изображений

Это прямо соответствует архитектуре roadmap. :contentReference[oaicite:3]{index=3}

---

## Структура проекта

```text
project-root/
├── frontend/         # React + Vite клиент
├── backend/          # NestJS backend
├── math-service/     # Python FastAPI сервис для геометрии и artwork pipeline
├── infra/            # docker-compose, infra-конфиги, storage setup
├── docs/             # документация и заметки
├── .gitignore
├── README.md
└── docker-compose.yml