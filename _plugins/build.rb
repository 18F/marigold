if ENV['BRANCH']
  puts '[build.rb] building for federalist'
  `npm run federalist`
end
