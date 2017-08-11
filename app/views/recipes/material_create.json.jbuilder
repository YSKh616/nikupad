json.people  @recipe.people

json.names @name.each do |name|
  json.array! name.each do |material|
    json.name     material["value"]
  end
end

json.quantities @quantity.each do |quantity|
  json.array! quantity.each do |material|
    json.quantity     material["value"]
  end
end
