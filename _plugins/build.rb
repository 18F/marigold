if ENV['BRANCH']
  puts '[build.rb] building for federalist'
  `npm install && npm run build`
end
