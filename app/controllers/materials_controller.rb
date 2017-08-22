class MaterialsController < ApplicationController
  def new
    @materials = Material.new
  end

  def create
    @materials = Material.new
  end
end
