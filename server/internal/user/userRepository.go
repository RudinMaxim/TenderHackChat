package user

import (
	"context"
	"database/sql"

	_ "github.com/lib/pq"
)

type DBTX interface {
	ExecContext(ctx context.Context, query string, args ...interface{}) (sql.Result, error)
	PrepareContext(context.Context, string) (*sql.Stmt, error)
	QueryContext(context.Context, string, ...interface{}) (*sql.Rows, error)
	QueryRowContext(context.Context, string, ...interface{}) *sql.Row
}

type repository struct {
	db DBTX
}

func NewRepository(db DBTX) Repository {
	return &repository{db: db}
}

func (r *repository) CreateUser(ctx context.Context, user *User) (*User, error) {
	var lastInsertId uint64

	query := "INSERT INTO users(username, password, email, role) VALUES ($1, $2, $3, $4) returning id"
	err := r.db.QueryRowContext(ctx, query, user.Username, user.Password, user.Email, user.Role).Scan(&lastInsertId)
	if err != nil {
		return &User{}, err
	}

	user.ID = uint64(lastInsertId)
	return user, nil
}

func (r *repository) GetUserByEmail(ctx context.Context, email string) (*User, error) {
	u := User{}
	query := "SELECT id, email, username, password FROM users WHERE email = $1"
	err := r.db.QueryRowContext(ctx, query, email).Scan(&u.ID, &u.Email, &u.Username, &u.Password)
	if err != nil {
		return &User{}, nil
	}

	return &u, nil
}

func (r *repository) GetUserByID(ctx context.Context, id uint64) (*User, error) {
	u := User{}
	query := "SELECT * FROM users WHERE id = $1"
	err := r.db.QueryRowContext(ctx, query, id).Scan(u.ID, &u.Email, &u.Username, &u.Password)
	if err != nil {
		return &User{}, nil
	}

	return &u, nil
}
