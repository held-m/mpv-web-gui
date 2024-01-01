package env

import (
	"log"

	"github.com/joho/godotenv"
)

// SetupEnvFile is a function to setup .env file
func SetupEnvFile() {
	envFile := ".env"
	var err error
	if (godotenv.Load(envFile)); err != nil {
		log.Printf("No %s file found, reading from environment", envFile)
	}

}
