@echo on

npm run build && "../collabc-dev-env/Scripts/activate" && python manage.py runserver