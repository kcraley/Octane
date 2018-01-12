include env_config

all:


build:
	make clean
	$(DOCKER) build -t $(DOCKER_REG)$(SERVICE_NAME) .

unittest:


clean:
	-$(DOCKER) rm -f $(DOCKER_REG)$(SERVICE_NAME)
	-$(DOCKER) rm -f $(SERVICE_NAME)

run:
	$(DOCKER) run -d --rm --name=$(DOCKER_REG)$(SERVICE_NAME) $(DOCKER_REG)$(SERVICE_NAME)

bash:
	$(DOCKER) run -it --rm -name=$(DOCKER_REG)$(SERVICE_NAME) --entrypoint=/bin/bash $(DOCKER_REG)$(SERVICE_NAME)
