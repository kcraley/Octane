include env_config

all:


build:
	make clean
	$(DOCKER) build -t $(DOCKER_REG)$(SERVICE_NAME) .

unittest:


clean:
	-$(DOCKER) rm -f $(DOCKER_REG)$(SERVICE_NAME)
	-$(DOCKER) rm -f $(SERVICE_NAME)
