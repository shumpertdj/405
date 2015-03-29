psql -h localhost -d gift -f gift.sql
heroku pg:reset DATABASE_URL --app cse488app --confirm cse488app
heroku pg:push gift DATABASE_URL --app cse488app