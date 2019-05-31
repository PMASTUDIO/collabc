@echo on

IF %1 (
    npm run build && %1 && python manage.py runserver
) ELSE (
    npm run build && "../collabc-dev-env/Scripts/activate" && python manage.py runserver
)

