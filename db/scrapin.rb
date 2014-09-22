require 'nokogiri'
require 'open-uri'
require 'csv'
#
epsiodes_list = 'http://theinfosphere.org/Episode_Transcript_Listing'
episodes = []
doc = Nokogiri::HTML(open(epsiodes_list))
doc.css('a').each do |node|
  if(/Transcript\:/.match(node))
    episodes << "http://theinfosphere.org/#{node.children.text.strip.gsub(" ", "_")}"
  end
end

# skips over episodes with special chars in their name
# as well as the last half of the third movie which is formatted oddly
 a = episodes[0...17] + episodes[18...53]
b = episodes[54...83] + episodes[85...102]
c = episodes[103...133] + episodes[134..episodes.length]
 episodes = a + b +c
# adds special char episodes back in
episodes << "http://theinfosphere.org/Transcript:Why_Must_I_Be_a_Crustacean_in_Love%3F"
episodes << "http://theinfosphere.org/Transcript:The_30%25_Iron_Chef"
episodes << "http://theinfosphere.org/Transcript:M%C3%B6bius_Dick"
episodes << "http://theinfosphere.org/Transcript:Calculon_2.0"


results = []
episodes.each do |link|
  episode = Nokogiri::HTML(open(link))
  episode.css('div.poem').each do |node|
     if(/[Z,z]oidberg\:/.match(node))
      line = node.children.children.text.strip
      line = line[(line.index(/Zoidberg/)+10)..line.length]
      line = line.split(/\[.{0,}\]/)#.join(" ")
      # lines = line.split(".")
       line.each do |ln|
        results << ln unless ln.length <= 1
       end
     end
  end
end

p results

#
CSV.open("zoidberg_lines.csv", "w") do |csv|
  csv << results
end
