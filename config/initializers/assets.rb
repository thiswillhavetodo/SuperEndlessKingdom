# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
Rails.application.config.assets.precompile += %w( show.css )
Rails.application.config.assets.precompile += %w( phaser.min.js )
Rails.application.config.assets.precompile += %w( typewriter.js )
Rails.application.config.assets.precompile += %w( game.js )
Rails.application.config.assets.precompile += %w( boot.js )
Rails.application.config.assets.precompile += %w( preload.js )
Rails.application.config.assets.precompile += %w( menu.js )
Rails.application.config.assets.precompile += %w( credits.js )
Rails.application.config.assets.precompile += %w( intro.js )
Rails.application.config.assets.precompile += %w( city.js )
Rails.application.config.assets.precompile += %w( main.js )
Rails.application.config.assets.precompile += %w( shop.js )
Rails.application.config.assets.precompile += %w( tutorial.js )
Rails.application.config.assets.precompile += %w( defence.js )
Rails.application.config.assets.precompile += %w( reset.js )