CREATE TABLE users (
    -- add auto increment
    id BIGSERIAL PRIMARY KEY UNIQUE,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone varchar(15) unique DEFAULT NULL,
    password VARCHAR(100) NOT NULL,
    address TEXT DEFAULT NULL,
    image BIT DEFAULT NULL,
    banned boolean null default FALSE,
    created_at timestamp with time zone null default now(),
    updated_at timestamp without time zone null default now(),
);
CREATE INDEX idx_users_email ON users (email);
CREATE TABLE role (
    -- add auto increment
    id SERIAL PRIMARY KEY UNIQUE,
    name VARCHAR(100) not null
);
CREATE TABLE user_role (
    user_id bigint not null,
    role_id bigint not null constraint user_role_pkey primary key (user_id, role_id),
    constraint user_role_role_id_fkey foreign key (role_id) references role (id),
    constraint user_role_user_id_fkey foreign key (user_id) references users (id)
);