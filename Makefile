# GNU Make
# https://www.gnu.org/software/make/

# Include environment variables
include .env

# Default target
.PHONY: default
default: build

# Build rules
.PHONY: build
build: clean
	$(DOCKER) build -t $(DOCKER_REG)$(SERVICE_NAME) .

.PHONY: clean
clean:
	-$(DOCKER) rm -f $(DOCKER_REG)$(SERVICE_NAME)
	-$(DOCKER) rm -f $(SERVICE_NAME)
	-$(DOCKER) rmi -f $(DOCKER_REG)$(SERVICE_NAME)

.PHONY: unittest
unittest:

.PHONY: run
run:
	$(DOCKER) run -d --rm --name=$(DOCKER_REG)$(SERVICE_NAME) $(DOCKER_REG)$(SERVICE_NAME)

.PHONY: bash
bash:
	$(DOCKER) run -it --rm -name=$(DOCKER_REG)$(SERVICE_NAME) --entrypoint=/bin/bash $(DOCKER_REG)$(SERVICE_NAME)
