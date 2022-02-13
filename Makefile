# Makefile for Astro Blog

.PHONY: dev build test deploy help clean

# Default target
all: build

# Start the development server
dev:
	npm run dev

# Build the project
build:
	npm run build

# Run tests (currently checking for linting/type-checking as standard tests aren't set up yet)
test:
	npm run astro check

# Deploy command (placeholder - adjust as needed for your hosting provider)
deploy: build
	@echo "Deploying to production..."
	# Example: netlify deploy --prod
	# Example: vercel --prod
	@echo "Deployment script needs to be configured in Makefile."

# Clean build artifacts
clean:
	rm -rf dist
	rm -rf .astro

# Show help
help:
	@echo "Available commands:"
	@echo "  make dev      - Start development server"
	@echo "  make build    - Build the project"
	@echo "  make test     - Run checks (astro check)"
	@echo "  make deploy   - Build and deploy (needs config)"
	@echo "  make clean    - Remove build artifacts"
