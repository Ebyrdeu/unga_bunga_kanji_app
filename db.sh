#!/bin/sh
# db.sh

set -e

host="$1"
user="$2"
shift
shift
cmd="$@"

until PGPASSWORD=$DB_PASSWORD psql -h "$host" -U "$user" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"

exec "$cmd"