class SheltersController < ApplicationController
  def index
    q = params[:q]

    if q.blank?
      p "here"
      render status: 400, json: { error: 'Expected parameter `q` '}
    else
      render(
        status: 200,
        json: Shelter.where(["name LIKE ?", "%#{q}%"]).limit(100)
      )
    end
  end
end
