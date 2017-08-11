json.recipes @name.each do |name|
  json.array! name.each do |material|
    json.name     material["value"]
  end
end
