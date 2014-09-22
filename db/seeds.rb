require 'csv'

results = []
CSV.foreach("db/zoidberg_lines.csv") do |row|
    results << row
end

results.flatten.each do |line|
  if line.length > 0
    Sentance.create!(content: line)
  end
end