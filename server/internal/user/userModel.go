package user

import "context"

// User Model
type User struct {
	ID       uint64 `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Role     string `json:"role"`
}
type Role struct {
	ID   uint64 `json:"id"`
	Name string `json:"name"`
}

// Reg
type CreateUserReq struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Phone    string `json:"phone"`
	Password string `json:"password"`
	Role     string `json:"role"`
}
type CreateUserRes struct {
	ID       uint64 `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
}

// Auth
type LoginUserReq struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}
type LoginUserRes struct {
	ID          uint64 `json:"id"`
	Username    string `json:"username"`
	accessToken string
}

type Repository interface {
	CreateUser(ctx context.Context, user *User) (*User, error)

	GetUserByEmail(ctx context.Context, email string) (*User, error)
	GetUserByID(ctx context.Context, id uint64) (*User, error)
}

type Service interface {
	CreateUser(ctx context.Context, req *CreateUserReq) (*CreateUserRes, error)
	Login(ctx context.Context, req *LoginUserReq) (*LoginUserRes, error)
}
