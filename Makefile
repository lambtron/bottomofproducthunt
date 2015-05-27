
#
# Binaries.
#

nodemon = ./node_modules/.bin/nodemon --harmony --quiet

#
# Default.
#

default: run

#
# Tasks.
#

# Remove non-checked-in dependencies.
clean:
	@rm -rf node_modules components

# Run the server in debug mode.
debug: node_modules
	@node debug --harmony server/server --development

# Run the server.
run: node_modules
	@node --harmony server/server

# Run the server with nodemon for development.
server: node_modules
	@$(nodemon) --watch server --watch server server/server --development

#
# Targets.
#

node_modules: package.json
	@npm install
	@touch node_modules # make sure node_modules is last modified

#
# Phonies.
#

.PHONY: clean
.PHONY: debug
.PHONY: run
.PHONY: server
