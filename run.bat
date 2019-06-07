@echo on

IF "%1%"=="" (npm run build && "../collabc-dev-env/Scripts/activate" && python manage.py runserver)


