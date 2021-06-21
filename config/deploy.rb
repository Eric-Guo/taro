# frozen_string_literal: true

# config valid for current version and patch releases of Capistrano
lock '~> 3.16.0'

set :application, 'taro_docs'
set :repo_url, 'https://gitee.com/Eric-Guo/Taro.git'
set :branch, 'docs'

# Default deploy_to directory is /var/www/taro_docs
# set :deploy_to, "/var/www/taro_docs"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# https://github.com/seuros/capistrano-sidekiq#known-issues-with-capistrano-3
set :pty, false

# Default value for :linked_files is []
append :linked_files, *%w[]

# Default value for linked_dirs is []
append :linked_dirs, 'node_modules'

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure

set :yarn_flags, ''

namespace :deploy do
  task :yarn_deploy do
    on roles fetch(:yarn_roles) do
      within fetch(:yarn_target_path, release_path) do
        execute fetch(:yarn_bin), 'run build:zone'
      end
    end
  end

  before 'symlink:release', :yarn_deploy
end
