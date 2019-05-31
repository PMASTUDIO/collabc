@echo on

npm run build && %1 && python manage.py runserver
