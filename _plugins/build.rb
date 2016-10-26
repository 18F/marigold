if ENV['BRANCH']
  puts '[build.rb] building for federalist'
  `./federalist.sh`
end
