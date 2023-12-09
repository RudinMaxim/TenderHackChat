package database

import (
	"database/sql"
	"fmt"
	"log"
)

type Database struct {
	db *sql.DB
}

func InitDatabase() (*Database, error) {
	host := "db.njpwkdmycyjzaxhkpoia.supabase.co"
	port := "5432"
	user := "postgres"
	password := "WjfQAtXzEF8bXrTR"
	dbname := "postgres"

	psqlInfo := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Fatal(err)
	}

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	return &Database{db: db}, nil

}

func (d *Database) Close() error {
	return d.db.Close()
}
func (d *Database) GetDB() *sql.DB {
	return d.db
}
