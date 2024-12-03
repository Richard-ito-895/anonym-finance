CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Generates a UUID by default if not provided
    email TEXT NOT NULL UNIQUE CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'), -- Email column with validation
    hashed_password TEXT NOT NULL, -- Hashed password, must be provided
    created_at BIGINT NOT NULL DEFAULT EXTRACT(EPOCH FROM now()) * 1000, -- Default to current Unix timestamp in milliseconds
    last_login BIGINT DEFAULT NULL,
    email_validated BOOLEAN NOT NULL DEFAULT FALSE,
    requested_deletion BOOLEAN NOT NULL DEFAULT FALSE
);
